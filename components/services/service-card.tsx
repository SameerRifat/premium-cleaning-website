import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { categoryMeta, type Service } from "@/lib/services"

/**
 * VIP-tier service card (Server Component — no client JS, all motion is CSS).
 *
 * Design direction: a full-bleed "lifestyle photo" card in the spirit of luxury
 * hospitality/spa sites (think hotel service tiles) rather than a SaaS icon card.
 * The image owns the top of the card (4:3, object-cover), zooms slowly on hover
 * for an unhurried, premium feel, and a permanent bottom scrim adds depth. The
 * card lifts and an animated gradient border (blue→green brand gradient) fades in
 * on hover. The gradient border is painted with a `before` pseudo-element using
 * the CSS mask "exclude" trick (gradient fill + content-box/border-box mask) so a
 * crisp 1.5px ring appears with zero extra DOM and zero JavaScript.
 */
type ServiceCardProps = {
  service: Service
  /** Eager-load the image for above-the-fold cards (LCP candidates). */
  priority?: boolean
}

export function ServiceCard({ service, priority = false }: ServiceCardProps) {
  return (
    <article
      className={[
        "group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl bg-card",
        "shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10",
        // Animated gradient border on hover, painted via masked pseudo-element.
        "before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-2xl before:p-[1.5px]",
        "before:bg-gradient-primary before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100",
        "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[mask-composite:exclude]",
        "before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor]",
      ].join(" ")}
    >
      {/* Image — the visual hero of the card */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image.src || "/placeholder.svg"}
          alt={service.image.alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Permanent bottom scrim for depth and premium legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"
        />
        {/* Category badge */}
        <span className="absolute left-3 top-3 rounded-full bg-white/85 px-2.5 py-1 text-[0.7rem] font-medium text-ink backdrop-blur-sm">
          {categoryMeta[service.category].label}
        </span>
        {/* Popular badge */}
        {service.popular && (
          <span className="absolute right-3 top-3 rounded-full bg-gradient-cta px-2.5 py-1 text-[0.7rem] font-semibold text-primary-foreground shadow-sm">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-lg font-semibold tracking-tight text-card-foreground">
          <Link
            href={`/services/${service.slug}`}
            className="after:absolute after:inset-0 after:z-20 focus-visible:outline-none"
          >
            {service.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {service.shortDescription}
        </p>

        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
            <Clock className="size-3.5" />
            {service.duration}
          </span>
          <span className="flex items-center gap-1 text-sm font-semibold text-gradient-primary">
            Details
            <ArrowRight className="size-4 text-primary transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  )
}
