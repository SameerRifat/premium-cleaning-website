import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"
import { categoryMeta, type Service } from "@/lib/services"

/**
 * Editorial, photo-forward service card (Server Component — all motion is CSS).
 *
 * Design direction: an immersive full-bleed image tile in the spirit of luxury
 * hospitality/editorial sites — the photograph fills the entire card and the
 * copy sits on top over a deep gradient scrim, rather than the flat
 * image-top / text-bottom pattern. On hover the image slowly zooms, the scrim
 * deepens, the one-line description reveals with a CSS grid-rows height
 * transition, and a circular CTA fills with the brand gradient. No JavaScript.
 */
type ServiceCardProps = {
  service: Service
  /** Eager-load the image for above-the-fold cards (LCP candidates). */
  priority?: boolean
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  return (
    <article className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink shadow-md ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/20">
      {/* Photograph — the hero of the card */}
      <Image
        src={service.image.src || "/placeholder.svg"}
        alt={service.image.alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
      />

      {/* Gradient scrim for legibility + depth (deepens on hover) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-ink/95 from-5% via-ink/45 via-45% to-transparent to-80% opacity-90 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Top row: category eyebrow + optional Popular badge */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <span className="rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-md ring-1 ring-white/15">
          {categoryMeta[service.category].label}
        </span>
        {service.popular && (
          <span className="rounded-full bg-gradient-cta px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-primary-foreground shadow-sm">
            Popular
          </span>
        )}
      </div>

      {/* Bottom content overlay */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div className="min-w-0">
          <h3 className="font-heading text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl">
            <Link
              href={`/services/${service.slug}`}
              className="after:absolute after:inset-0 after:z-10 focus-visible:outline-none"
            >
              {service.name}
            </Link>
          </h3>

          {/* Description reveals on hover via grid-rows height transition */}
          <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
            <div className="overflow-hidden">
              <p className="pt-2 text-sm leading-relaxed text-white/80">
                {service.shortDescription}
              </p>
            </div>
          </div>

          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-white/70">
            <Clock className="size-3.5" aria-hidden="true" />
            {service.duration}
          </span>
        </div>

        {/* Circular CTA — fills with brand gradient on hover */}
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full text-white ring-1 ring-white/40 backdrop-blur-md transition-all duration-300 group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:ring-transparent"
        >
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </article>
  )
}
