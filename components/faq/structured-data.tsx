import { siteConfig } from "@/lib/site-config"
import { allFaqs } from "@/lib/faqs"

/**
 * Structured data for the FAQ route. Mirrors the Phase 2 / 3 / 4 pattern: a
 * single @graph emitted through one JsonLd block, tied back to the site-wide
 * LocalBusiness entity by its stable @id (declared in the root layout) so the
 * entity graph stays consistent across pages.
 *
 * Emits one FAQPage whose mainEntity holds every Question/Answer on the page,
 * plus a BreadcrumbList (Home → FAQ). Per project policy, NO aggregateRating or
 * review markup is ever emitted.
 */

const BUSINESS_ID = `${siteConfig.url}/#business`
const FAQ_URL = `${siteConfig.url}/faq`

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

export function FaqPageJsonLd() {
  const graph = [
    {
      "@type": "FAQPage",
      "@id": `${FAQ_URL}/#faqpage`,
      url: FAQ_URL,
      name: `Frequently Asked Questions — ${siteConfig.name}`,
      description: `Answers to common questions about ${siteConfig.name}: booking, what's included, staff vetting, products, pricing and service areas across the UAE.`,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": BUSINESS_ID },
      mainEntity: allFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    breadcrumbList([
      { name: "Home", url: siteConfig.url },
      { name: "FAQ", url: FAQ_URL },
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
