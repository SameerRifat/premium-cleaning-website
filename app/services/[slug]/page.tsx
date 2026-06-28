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
  ShieldCheck,
  Sparkles,
  Star,
  Tag,
  UserCheck,
  Users,
  X,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
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

  const assurances = [
    {
      icon: ShieldCheck,
      title: "Fully insured bookings",
      description:
        "Every job is covered for liability and accidental damage, so inviting our team in carries zero risk to you.",
    },
    {
      icon: UserCheck,
      title: "Background-checked staff",
      description:
        "Each professional is interviewed, identity-verified and trained to our checklist before attending any job.",
    },
    {
      icon: Sparkles,
      title: "Satisfaction guarantee",
      description:
        "Not happy with an area? Tell us within 24 hours and we'll return to re-clean it at no extra cost.",
    },
  ]

  return (
    <>
      <ServiceDetailJsonLd service={service} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/40">
        {/* Soft radial wash for depth without introducing new colors */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_78%_-10%,oklch(0.93_0.035_190/0.7),transparent)]"
        />

        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-border">
                /
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-border">
                /
              </li>
              <li className="font-medium text-foreground">{service.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gradient-primary">
                <span className="h-px w-8 bg-gradient-primary" />
                {categoryLabel}
                {service.popular && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[0.65rem] tracking-wide text-accent-foreground">
                    <Sparkles className="size-3" />
                    Popular
                  </span>
                )}
              </span>
              <h1 className="text-balance font-heading text-[2.5rem] font-bold leading-[1.04] tracking-tight text-foreground sm:text-6xl">
                {service.name}
              </h1>
              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                {service.longDescription}
              </p>

              <div className="mt-1 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink(waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  // className={buttonVariants({ size: "lg" })}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-gradient-cta transition-opacity hover:opacity-90"
                  )}
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

            {/* Layered image with floating credibility card for depth */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
                <Image
                  src={service.image.src || "/placeholder.svg"}
                  alt={service.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-xl shadow-black/10 backdrop-blur-sm sm:left-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <ShieldCheck className="size-5" />
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-0.5 text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3 fill-current" />
                    ))}
                  </div>
                  <p className="mt-0.5 text-sm font-semibold text-card-foreground">
                    Fully insured &amp; vetted
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Trusted by UAE households
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <dl className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm shadow-black/5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary ring-1 ring-border">
                  <stat.icon className="size-5" />
                </span>
                <div className="flex flex-col">
                  <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd className="mt-0.5 font-heading text-base font-bold text-foreground">
                    {stat.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What's included / not included */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-3">
          <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gradient-primary">
            <span className="h-px w-8 bg-gradient-primary" />
            Scope of work
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-[2.5rem]">
            Exactly what you get — and what you don&apos;t
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            No vague promises. Here is the precise scope of this service so you
            know what to expect before you book.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.55fr_1fr] lg:items-stretch">
          {/* Included — the hero of the comparison */}
          <div className="relative flex flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-xl shadow-primary/5">
            {/* Accent top hairline + soft corner wash for depth */}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-primary"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-gradient-primary opacity-[0.08] blur-3xl"
            />

            <div className="relative flex flex-col gap-7 p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-md shadow-primary/30">
                    <Check className="size-6" strokeWidth={2.5} />
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                      What&apos;s included
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Covered as standard on every booking
                    </p>
                  </div>
                </div>
                <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:inline-flex">
                  {service.whatsIncluded.length} inclusions
                </span>
              </div>

              <ul className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
                {service.whatsIncluded.map((item, index) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 border-t border-border/70 py-3.5 first:border-t-0 sm:[&:nth-child(2)]:border-t-0"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {item}
                    </span>
                    <span className="sr-only">{`Inclusion ${index + 1}`}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not included — quieter, secondary panel */}
          <div className="flex h-full flex-col rounded-[1.75rem] border border-border bg-secondary/40 p-7 sm:p-8">
            <div className="flex items-center gap-3.5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-muted-foreground">
                <X className="size-6" />
              </span>
              <div className="flex flex-col">
                <h3 className="font-heading text-xl font-bold tracking-tight text-foreground">
                  Not included
                </h3>
                <p className="text-sm text-muted-foreground">
                  Outside this service&apos;s scope
                </p>
              </div>
            </div>

            <ul className="mt-6 flex flex-col">
              {service.notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-t border-dashed border-border py-3 first:border-t-0 first:pt-0"
                >
                  <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-6">
              <div className="rounded-2xl border border-border bg-card p-4 shadow-sm shadow-black/5">
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  Need something on this list?{" "}
                  <a
                    href={whatsappLink(
                      `Hi ${siteConfig.name}, I'd like to add an extra to my "${service.name}" booking. Can you help?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-primary underline-offset-4 hover:underline"
                  >
                    Message us
                  </a>{" "}
                  and we&apos;ll arrange it as an add-on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking assurance — high-contrast trust moment */}
      <section
        aria-label="Why book with Pristine"
        className="relative overflow-hidden bg-ink text-ink-foreground"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_30rem_at_85%_120%,oklch(0.58_0.094_195/0.28),transparent)]"
        />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {assurances.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-ink-foreground/10 text-primary ring-1 ring-ink-foreground/15">
                  <item.icon className="size-6" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-base font-semibold text-ink-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
