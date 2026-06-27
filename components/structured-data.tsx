import { siteConfig } from "@/lib/site-config"

/**
 * Site-wide LocalBusiness structured data, driven entirely by siteConfig.
 *
 * Intentionally omits aggregateRating/review schema: per the project's content
 * policy we do not emit ratings we cannot substantiate. Review markup can be
 * added in a later phase once verified reviews exist.
 */
export function LocalBusinessJsonLd() {
  const areaServed = siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area.name,
  }))

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed,
    openingHoursSpecification: siteConfig.hours.spec.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
  }

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
