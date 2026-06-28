import { MapPin, CheckCircle2, ExternalLink } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

/**
 * Service-area confirmation + location map.
 *
 * Map choice — OpenStreetMap iframe embed:
 *   Evaluated against React-Leaflet (OSM tiles) and the Google Maps legacy
 *   iframe. Chosen because it is genuinely free with no API key or billing
 *   account, renders entirely server-side (zero client JavaScript, so this and
 *   the whole page shell stay Server Components), adds no bundle weight, and is
 *   visually clean enough for a premium marketing site. React-Leaflet was
 *   rejected for its mandatory "use client" boundary and bundle cost for a
 *   static, non-interactive locator; the Google legacy iframe was rejected to
 *   avoid depending on an undocumented endpoint and Google branding/ToS
 *   ambiguity. Coordinates come from siteConfig.geo so the marker stays accurate.
 */

const { latitude, longitude } = siteConfig.geo
// Small bounding box (~±0.03° lon / ±0.02° lat) framing the marker tightly.
const bbox = [longitude - 0.03, latitude - 0.02, longitude + 0.03, latitude + 0.02]
const mapEmbedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox
  .map((n) => n.toFixed(4))
  .join("%2C")}&layer=mapnik&marker=${latitude}%2C${longitude}`
const mapLinkHref = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=14/${latitude}/${longitude}`

export function ServiceAreaMap() {
  const { address } = siteConfig

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        {/* Service-area confirmation */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Where we work
            </span>
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Chances are, we&apos;re already in your area
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              {siteConfig.shortName} serves homes and offices right across the
              Emirates. Based in {address.addressLocality}, our teams cover the
              communities below — and we&apos;re always expanding.
            </p>
          </div>

          <ul className="flex flex-col gap-4">
            {siteConfig.serviceAreas.map((area) => (
              <li
                key={area.name}
                className="flex flex-col gap-2.5 rounded-2xl border border-border bg-card p-4 sm:p-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="size-4" />
                  </span>
                  <span className="font-heading text-base font-semibold text-foreground">
                    {area.name}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.communities.map((community) => (
                    <span
                      key={community}
                      className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      <CheckCircle2 className="size-3 text-primary" />
                      {community}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Map */}
        <div className="flex flex-col gap-3">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl shadow-primary/5">
            <iframe
              title={`Map showing the location of ${siteConfig.name} in ${address.addressLocality}`}
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="aspect-[4/3] w-full border-0 lg:aspect-square"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 px-1">
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 shrink-0 text-primary" />
              {address.streetAddress}, {address.addressLocality}, UAE
            </p>
            <a
              href={mapLinkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View larger map
              <ExternalLink className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
