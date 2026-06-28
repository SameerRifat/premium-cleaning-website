import Link from "next/link"
import { faqCategories } from "@/lib/faqs"

/**
 * FAQ hero — matches the Phase 2/3/4 page-intro pattern exactly (breadcrumb,
 * eyebrow rule, oversized heading, lead paragraph) so the page belongs to the
 * same site. The category chips double as an in-page jump nav into the
 * accordion sections below.
 */
export function FaqHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      {/* Soft radial wash for depth without introducing new colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_78%_-12%,oklch(0.93_0.035_190/0.7),transparent)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb — matches the Phase 2/3/4 pattern exactly */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">
              /
            </li>
            <li className="font-medium text-foreground">FAQ</li>
          </ol>
        </nav>

        <div className="flex max-w-3xl flex-col gap-6">
          <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Frequently asked questions
          </span>
          <h1 className="text-balance font-heading text-[2.5rem] font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Everything you need to know
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Clear answers to the questions we hear most — from booking and
            what&apos;s included to staff vetting, products, pricing and the
            areas we cover. Can&apos;t find what you&apos;re after? We&apos;re
            only a message away.
          </p>

          <ul className="mt-1 flex flex-wrap gap-2 border-t border-border/70 pt-6">
            {faqCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-secondary"
                >
                  <category.icon className="size-4 text-primary" />
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
