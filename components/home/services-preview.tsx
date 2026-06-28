import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/services/service-card"
import { services } from "@/lib/services"

export function ServicesPreview() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Our Services"
        title="Cleaning for every corner of your life"
        description="From weekly home upkeep to deep cleans and commercial contracts, choose the service that fits — delivered by vetted, fully-insured professionals."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={service.slug}
            service={service}
            priority={index < 3}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/services"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          View all services
          <ArrowRight data-icon="inline-end" />
        </Link>
      </div>
    </section>
  )
}
