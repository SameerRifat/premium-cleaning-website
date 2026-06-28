import Link from "next/link"
import { MapPin, CheckCircle2, ArrowRight, Layers, Clock } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

export function ServiceAreas() {
  const { serviceAreas } = siteConfig
  const neighbourhoods = serviceAreas.reduce(
    (total, area) => total + area.communities.length,
    0,
  )

  const stats = [
    { icon: MapPin, label: `${serviceAreas.length} Emirates` },
    { icon: Layers, label: `${neighbourhoods} Neighbourhoods` },
    { icon: Clock, label: "Same-day availability" },
  ]

  return (
    <section className="relative isolate overflow-hidden">
      {/* Decorative depth layer — abstract "coverage map" motif */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft radial washes for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_85%_-10%,oklch(0.93_0.035_190/0.6),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50rem_36rem_at_5%_110%,oklch(0.92_0.05_150/0.45),transparent)]" />
        {/* Dot-grid texture, masked to fade at the edges */}
        <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(circle,var(--border)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
        {/* Brand blur orbs */}
        <div className="absolute -left-32 top-16 size-[28rem] rounded-full bg-gradient-primary opacity-[0.05] blur-3xl" />
        <div className="absolute -right-24 bottom-0 size-[24rem] rounded-full bg-primary-end/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Service Areas"
          title="Proudly serving Sharjah & Ajman"
          description="Fast, reliable cleaning across Sharjah & Ajman. Don't see your community? Get in touch — we're always expanding."
        />

        {/* Coverage stat chips */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {stats.map((stat) => (
            <span
              key={stat.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-foreground/80 shadow-sm shadow-black/[0.03] backdrop-blur-sm"
            >
              <stat.icon className="size-3.5 text-primary" />
              {stat.label}
            </span>
          ))}
        </div>

        {/* Emirate cards — gradient-border glass tiles */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {serviceAreas.map((area, index) => (
            <div
              key={area.name}
              className="group relative rounded-[1.65rem] bg-gradient-to-br from-primary/25 via-border to-primary-end/25 p-px shadow-lg shadow-primary/5 transition-all duration-500 hover:-translate-y-1.5 hover:from-primary/50 hover:to-primary-end/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative h-full overflow-hidden rounded-[1.6rem] bg-card/90 p-6 backdrop-blur-sm sm:p-7">
                {/* Hover-reveal glow orb */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]"
                />
                {/* Index watermark */}
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-3 font-heading text-6xl font-bold leading-none text-primary/[0.15] dark:text-primary/[0.06]"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative flex items-center gap-3.5">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-sm shadow-primary/20">
                    <MapPin className="size-5" />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {area.communities.length} neighbourhoods covered
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {area.communities.map((community) => (
                    <span
                      key={community}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                    >
                      <span className="size-1.5 rounded-full bg-gradient-primary" />
                      {community}
                    </span>
                  ))}
                </div>

                {/* Gradient hairline + reassurance */}
                <div className="relative mt-6 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
                <p className="relative mt-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <CheckCircle2 className="size-4 text-primary-end" />
                  Vetted, fully-insured teams
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expanding-coverage CTA tile */}
        <div className="mx-auto mt-6 flex max-w-5xl flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-card/70 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:p-8">
          <div className="flex flex-col gap-1">
            <h3 className="font-heading text-lg font-bold tracking-tight text-foreground">
              Don&apos;t see your community?
            </h3>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              We&apos;re regularly expanding our coverage — message us and we&apos;ll
              confirm your area right away.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 shrink-0 border-transparent bg-gradient-cta px-5 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] hover:opacity-95",
            )}
          >
            Check if we cover your area
            <ArrowRight data-icon="inline-end" />
          </Link>
        </div>
      </div>
    </section>
  )
}
