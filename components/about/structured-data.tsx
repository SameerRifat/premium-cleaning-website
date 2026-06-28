import { siteConfig } from "@/lib/site-config"
import { teamMembers } from "@/lib/team"

/**
 * Structured data for the About route. Mirrors the Phase 2 pattern: a single
 * @graph emitted through one JsonLd block, with every node tied back to the
 * site-wide LocalBusiness entity by its stable @id (declared in the root
 * layout) so the entity graph stays consistent across pages.
 *
 * The AboutPage references the business as its mainEntity, and an Organization
 * node sharing the same @id enriches that existing entity with founding
 * information, the team as Person entities, and the area served — rather than
 * declaring a second, competing business entity.
 *
 * Per project policy, NO aggregateRating or review markup is ever emitted.
 */

const BUSINESS_ID = `${siteConfig.url}/#business`
const ABOUT_URL = `${siteConfig.url}/about`

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

export function AboutPageJsonLd() {
  const areaServed = siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area.name,
  }))

  const employees = teamMembers.map((member) => ({
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    image: `${siteConfig.url}${member.image.src}`,
    worksFor: { "@id": BUSINESS_ID },
  }))

  const graph = [
    {
      "@type": "AboutPage",
      "@id": `${ABOUT_URL}/#aboutpage`,
      url: ABOUT_URL,
      name: `About ${siteConfig.name}`,
      description: siteConfig.description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      mainEntity: { "@id": BUSINESS_ID },
    },
    {
      // Same @id as the layout's LocalBusiness — Schema.org merges nodes that
      // share an @id, so this enriches the existing entity rather than cloning
      // it. HomeAndConstructionBusiness is itself an Organization subtype, so
      // Organization properties (founder, foundingDate, employee) apply.
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: siteConfig.name,
      url: siteConfig.url,
      foundingDate: "2016",
      founder: {
        "@type": "Person",
        name: teamMembers[0].name,
        jobTitle: teamMembers[0].role,
      },
      employee: employees,
      areaServed,
      slogan: siteConfig.tagline,
      knowsAbout: [
        "Residential cleaning",
        "Deep cleaning",
        "Office cleaning",
        "Upholstery and carpet cleaning",
        "Eco-friendly cleaning",
      ],
    },
    breadcrumbList([
      { name: "Home", url: siteConfig.url },
      { name: "About", url: ABOUT_URL },
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
