import { siteConfig } from "@/lib/site-config"
import type { Service } from "@/lib/services"

/**
 * Structured data for the Services routes. All schema references the site-wide
 * LocalBusiness entity by its stable @id (defined in the root layout), so the
 * entity graph stays consistent across pages.
 *
 * Per project policy, NO aggregateRating or review markup is ever emitted.
 */

const BUSINESS_ID = `${siteConfig.url}/#business`

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

type Crumb = { name: string; url: string }

function breadcrumbList(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  }
}

/**
 * Index page: an OfferCatalog of all services plus a BreadcrumbList, emitted in
 * a single @graph and linked to the LocalBusiness provider.
 */
export function ServicesIndexJsonLd({ services }: { services: Service[] }) {
  const servicesUrl = `${siteConfig.url}/services`

  const graph = [
    {
      "@type": "OfferCatalog",
      "@id": `${servicesUrl}/#catalog`,
      name: `${siteConfig.name} — Cleaning Services`,
      url: servicesUrl,
      provider: { "@id": BUSINESS_ID },
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        priceCurrency: "AED",
        price: service.priceFromAed,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AED",
          price: service.priceFromAed,
          valueAddedTaxIncluded: false,
        },
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.shortDescription,
          url: `${servicesUrl}/${service.slug}`,
        },
      })),
    },
    breadcrumbList([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: servicesUrl },
    ]),
  ]

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": graph,
      }}
    />
  )
}

/**
 * Detail page: Service + BreadcrumbList + FAQPage in a single @graph, with the
 * Service provided by the LocalBusiness entity.
 */
export function ServiceDetailJsonLd({ service }: { service: Service }) {
  const servicesUrl = `${siteConfig.url}/services`
  const serviceUrl = `${servicesUrl}/${service.slug}`

  const areaServed = siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area.name,
  }))

  const graph = [
    {
      "@type": "Service",
      "@id": `${serviceUrl}/#service`,
      name: service.name,
      serviceType: service.name,
      description: service.longDescription,
      url: serviceUrl,
      image: `${siteConfig.url}${service.image.src}`,
      provider: { "@id": BUSINESS_ID },
      areaServed,
      offers: {
        "@type": "Offer",
        priceCurrency: "AED",
        price: service.priceFromAed,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "AED",
          price: service.priceFromAed,
          valueAddedTaxIncluded: false,
        },
        availability: "https://schema.org/InStock",
        url: serviceUrl,
      },
    },
    breadcrumbList([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: servicesUrl },
      { name: service.name, url: serviceUrl },
    ]),
    {
      "@type": "FAQPage",
      "@id": `${serviceUrl}/#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ]

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": graph,
      }}
    />
  )
}
