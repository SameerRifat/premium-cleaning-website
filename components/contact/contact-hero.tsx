import Link from "next/link"
import { ShieldCheck, Clock, Zap } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const assurances = [
  { icon: Zap, label: "Replies within 1 hour" },
  { icon: ShieldCheck, label: "Licensed & fully insured" },
  { icon: Clock, label: siteConfig.hours.display },
]

export function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      {/* Soft radial wash for depth without introducing new colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_75%_-10%,oklch(0.93_0.035_190/0.7),transparent)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb — matches the Phase 2/3 pattern exactly */}
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
            <li className="font-medium text-foreground">Contact</li>
          </ol>
        </nav>

        <div className="flex max-w-3xl flex-col gap-6">
          <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Get in touch
          </span>
          <h1 className="text-balance font-heading text-[2.5rem] font-bold leading-[1.04] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s get your space spotless
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us what you need and we&apos;ll come back with availability and a
            clear price — usually within the hour. Prefer to talk? Reach the {""}
            {siteConfig.shortName} team directly on WhatsApp, by phone or email,
            whichever suits you best.
          </p>

          <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/70 pt-6">
            {assurances.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <item.icon className="size-4 text-primary" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
