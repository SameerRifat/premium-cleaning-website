import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Clock, Leaf } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/services/service-card"
import { ServicesIndexJsonLd } from "@/components/services/structured-data"
import { ContactCta } from "@/components/home/contact-cta"
import { services, getServicesByCategory } from "@/lib/services"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Our Cleaning Services",
  description:
    "Explore the full range of residential, specialised and commercial cleaning services from Pristine Home Services across Dubai, Abu Dhabi and Sharjah. Transparent pricing, vetted professionals.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: `Our Cleaning Services | ${siteConfig.name}`,
    description:
      "Residential, specialised and commercial cleaning across the UAE — transparent pricing and vetted, insured professionals.",
    url: `${siteConfig.url}/services`,
    type: "website",
  },
}

const assurances = [
  { icon: ShieldCheck, label: "Fully insured & vetted" },
  { icon: Clock, label: "Same-day availability" },
  { icon: Leaf, label: "Eco-friendly products" },
]

export default function ServicesPage() {
  const grouped = getServicesByCategory()

  return (
    <>
      <ServicesIndexJsonLd services={services} />

      {/* Page intro */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">Services</li>
            </ol>
          </nav>

          <div className="flex max-w-3xl flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Services
            </span>
            <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              Cleaning for every corner of your life
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              From weekly home upkeep to deep cleans, upholstery care and
              commercial contracts, choose the service that fits — delivered by
              vetted, fully-insured professionals with transparent pricing and
              no surprises.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
              {assurances.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <item.icon className="size-4 text-primary" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Grouped service sections */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {grouped.map((group, index) => (
          <section
            key={group.category}
            className={index === 0 ? "py-14 lg:py-20" : "border-t border-border py-14 lg:py-20"}
            aria-labelledby={`category-${group.category}`}
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                {String(index + 1).padStart(2, "0")} — {group.items.length}{" "}
                {group.items.length === 1 ? "service" : "services"}
              </span>
              <h2
                id={`category-${group.category}`}
                className="text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                {group.label}
              </h2>
              <p className="max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {group.description}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="border-t border-border pt-2">
        <ContactCta />
      </div>
    </>
  )
}
