import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRight,
  Check,
  Clock,
  MessageCircle,
  Phone,
  Tag,
  Users,
  X,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/services/service-card"
import { FaqAccordion } from "@/components/services/faq-accordion"
import { ServiceDetailJsonLd } from "@/components/services/structured-data"
import { ContactCta } from "@/components/home/contact-cta"
import { cn } from "@/lib/utils"
import { siteConfig, whatsappLink } from "@/lib/site-config"
import {
  getAllServiceSlugs,
  getRelatedServices,
  getServiceBySlug,
  categoryMeta,
} from "@/lib/services"

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: "Service not found" }
  }

  const url = `${siteConfig.url}/services/${service.slug}`

  return {
    title: `${service.name} in the UAE`,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | ${siteConfig.name}`,
      description: service.metaDescription,
      url,
      type: "website",
      images: [{ url: service.image.src, alt: service.image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | ${siteConfig.name}`,
      description: service.metaDescription,
      images: [service.image.src],
    },
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const related = getRelatedServices(service.slug, 3)
  const categoryLabel = categoryMeta[service.category].label
  const waMessage = `Hi ${siteConfig.name}, I'd like to book "${service.name}". Could you share availability and pricing?`

  const stats = [
    { icon: Tag, label: "From", value: `AED ${service.priceFromAed}` },
    { icon: Clock, label: "Duration", value: service.duration },
    { icon: Users, label: "Ideal for", value: service.idealFor },
  ]

  return (
    <>
      <ServiceDetailJsonLd service={service} />

      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-foreground">{service.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{categoryLabel}</Badge>
                {service.popular && <Badge>Popular</Badge>}
              </div>
              <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                {service.name}
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {service.longDescription}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ size: "lg" })}
                >
                  <MessageCircle data-icon="inline-start" />
                  Book on WhatsApp
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  className={buttonVariants({ size: "lg", variant: "outline" })}
                >
                  <Phone data-icon="inline-start" />
                  Call {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/5">
              <Image
                src={service.image.src || "/placeholder.svg"}
                alt={service.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Stat strip */}
          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <stat.icon className="size-5" />
                </span>
                <div className="flex flex-col">
                  <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="font-heading text-sm font-semibold text-foreground">
                    {stat.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What's included / not included */}
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              What&apos;s included
            </h2>
            <ul className="flex flex-col gap-3">
              {service.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  <span className="leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Not included
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Full transparency on scope — these fall outside this service, but
              ask us and we&apos;ll point you to the right option.
            </p>
            <ul className="flex flex-col gap-3">
              {service.notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <X className="size-3.5" />
                  </span>
                  <span className="leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Questions"
            title={`${service.name} — frequently asked`}
            description="Everything you need to know before you book. Still unsure? Message us on WhatsApp."
          />
          <div className="mt-8">
            <FaqAccordion faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Keep exploring"
              title="Related services"
              description="Other ways we can help keep your space spotless."
            />
            <Link
              href="/services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "shrink-0",
              )}
            >
              All services
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
          </div>
        </section>
      )}

      <div className="border-t border-border pt-2">
        <ContactCta />
      </div>
    </>
  )
}
