import { siteConfig } from "@/lib/site-config"

/**
 * Structured data for the Contact route. Mirrors the Phase 2 / Phase 3 pattern:
 * a single @graph emitted through one JsonLd block, with every node tied back to
 * the site-wide LocalBusiness entity by its stable @id (declared in the root
 * layout) so the entity graph stays consistent across pages.
 *
 * The ContactPage references the business as its mainEntity rather than
 * declaring a second, competing business entity.
 *
 * Per project policy, NO aggregateRating or review markup is ever emitted.
 */

const BUSINESS_ID = `${siteConfig.url}/#business`
const CONTACT_URL = `${siteConfig.url}/contact`

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

export function ContactPageJsonLd() {
  const graph = [
    {
      "@type": "ContactPage",
      "@id": `${CONTACT_URL}/#contactpage`,
      url: CONTACT_URL,
      name: `Contact ${siteConfig.name}`,
      description: `Get in touch with ${siteConfig.name} for cleaning across Dubai, Abu Dhabi, Sharjah and Ajman. Call, message on WhatsApp, email, or send the contact form.`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": BUSINESS_ID },
      about: { "@id": BUSINESS_ID },
    },
    {
      // Same @id as the layout's LocalBusiness — Schema.org merges nodes that
      // share an @id, so this reinforces the existing entity's contact details
      // rather than cloning it.
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: siteConfig.name,
      url: siteConfig.url,
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: siteConfig.contact.phone,
          email: siteConfig.contact.email,
          areaServed: siteConfig.serviceAreas.map((area) => area.name),
          availableLanguage: ["English", "Arabic"],
        },
      ],
    },
    breadcrumbList([
      { name: "Home", url: siteConfig.url },
      { name: "Contact", url: CONTACT_URL },
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
