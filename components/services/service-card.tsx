import Link from "next/link"
import { ArrowRight, Clock, Sparkles } from "lucide-react"
import type { Service } from "@/lib/services"

/**
 * Shared service card used on the /services index and the related-services
 * block on detail pages. Matches the premium card language established on the
 * About page: rounded-3xl surface, rounded-2xl icon chip that fills on hover,
 * a subtle lift, and a price/duration footer. The whole card is a stretched
 * link target for an accessible, generous click area.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary ring-1 ring-border transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary">
          <service.icon className="size-6" />
        </span>
        {service.popular && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-accent-foreground">
            <Sparkles className="size-3" />
            Popular
          </span>
        )}
      </div>

      <h3 className="mt-5 font-heading text-xl font-semibold leading-snug text-foreground">
        <Link
          href={`/services/${service.slug}`}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {service.name}
        </Link>
      </h3>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>

      <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Clock className="size-3.5 text-primary" />
        {service.duration}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-border pt-5">
        <span className="text-sm text-muted-foreground">
          From{" "}
          <span className="font-heading text-base font-bold text-foreground">
            AED {service.priceFromAed}
          </span>
        </span>
        <span className="flex items-center gap-1.5 text-sm font-semibold text-primary">
          View details
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  )
}
