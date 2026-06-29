/**
 * Keyword emphasis system — single source of truth + the renderer.
 *
 * Wraps important service-related keywords in body/prose text with a semantic
 * <strong> element, styled at a refined font-weight (lighter than the default
 * heavy bold) so the term carries SEO/accessibility weight for Google Ads
 * landing-page relevance while reading as part of the same sentence.
 *
 * Design notes:
 *  - The weight is applied per-element via a Tailwind utility (EMPHASIS_CLASS),
 *    so only these spans are affected — no global <strong> override, meaning
 *    <strong> in headings/buttons/anywhere else keeps its default weight.
 *  - Matching is case-insensitive, word-boundary aware, and plural-tolerant
 *    ("kitchen" matches "Kitchen"/"kitchens" but not "kitchenette").
 *  - Only the FIRST occurrence of each distinct keyword per text block is
 *    emphasized, keeping keyword-dense prose subtle.
 *  - emphasizeKeywords() is a pure, deterministic function with index-based
 *    React keys and no browser/time/random APIs, so it is SSR-safe (no
 *    hydration mismatch) and composes inside both Server and Client Components.
 *
 * To extend: add a term to the relevant array below — the regex and component
 * pick it up automatically. To change intensity globally: edit EMPHASIS_CLASS.
 */

import type { ReactNode } from "react"

/** Primary service names. */
const SERVICE_NAMES = [
  "Home Cleaning",
  "Deep Cleaning",
  "Move In / Move Out",
  "Move Out Cleaning",
  "Office & Commercial",
  "Office Cleaning",
  "Kitchen & Appliances",
  "Kitchen Cleaning",
  "Laundry & Ironing",
]

/** Cleaning actions. */
const ACTIONS = [
  "dusting",
  "mopping",
  "vacuuming",
  "sanitising",
  "sanitizing",
  "scrubbing",
  "polishing",
  "ironing",
  "degreasing",
  "descaling",
]

/** Spaces / surfaces. */
const SPACES = [
  "home",
  "office",
  "kitchen",
  "bathroom",
  "bathrooms",
  "living spaces",
  "bedroom",
  "windows",
  "floors",
  "appliances",
  "oven",
  "fridge",
]

/** Trust qualifiers. */
const TRUST = [
  "fully-insured",
  "fully insured",
  "vetted",
  "eco-friendly",
  "professional",
  "background-checked",
  "same-day",
]

/** Flat registry of every emphasised keyword. */
export const KEYWORDS = [...SERVICE_NAMES, ...ACTIONS, ...SPACES, ...TRUST]

/** Single weight knob — font-semibold (600). Switch to "font-medium" (500) for a subtler look. */
const EMPHASIS_CLASS = "font-semibold"

/** Escape characters that are special inside a RegExp. */
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/**
 * One compiled regex, built once at module load. Alternatives are sorted
 * longest-first so multi-word phrases win over their substrings (e.g.
 * "Deep Cleaning" before "Cleaning", "Move Out Cleaning" before "Move").
 * The optional `(?:e?s)?` allows a trailing plural inside the word boundary.
 */
const KEYWORD_REGEX = new RegExp(
  `\\b(?:${[...KEYWORDS]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join("|")})(?:e?s)?\\b`,
  "gi",
)

/** Collapse case + simple plural so repeated forms dedupe together within a block. */
function normalizeKey(match: string): string {
  return match.toLowerCase().replace(/(es|s)$/, "")
}

/**
 * Split `text` into an array of plain strings and <strong> nodes, emphasising
 * the first occurrence of each distinct keyword. Pure and deterministic.
 */
export function emphasizeKeywords(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const seen = new Set<string>()
  let lastIndex = 0

  for (const match of text.matchAll(KEYWORD_REGEX)) {
    const value = match[0]
    const start = match.index ?? 0
    const key = normalizeKey(value)

    // Already emphasised once in this block → leave subsequent matches as plain
    // text. lastIndex is untouched, so the skipped run is folded into the next
    // plain slice.
    if (seen.has(key)) continue
    seen.add(key)

    if (start > lastIndex) nodes.push(text.slice(lastIndex, start))
    nodes.push(
      <strong key={start} className={EMPHASIS_CLASS}>
        {value}
      </strong>,
    )
    lastIndex = start + value.length
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex))
  return nodes
}

/**
 * Ergonomic JSX wrapper. Accepts a single string child and renders it with
 * keywords emphasised:  <p><Emphasize>{description}</Emphasize></p>
 *
 * For prose mixed with interpolation, wrap only the literal string segments.
 */
export function Emphasize({ children }: { children: string }) {
  return <>{emphasizeKeywords(children)}</>
}
