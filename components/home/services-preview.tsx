import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { services } from "@/lib/services"

export function ServicesPreview() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Our Services"
        title="Cleaning for every corner of your life"
        description="From weekly home upkeep to deep cleans and commercial contracts, choose the service that fits — transparent pricing, no surprises."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card
            key={service.slug}
            className="group relative transition-shadow hover:shadow-md"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
                  <service.icon className="size-5" />
                </span>
                {service.popular && (
                  <Badge variant="secondary">Popular</Badge>
                )}
              </div>
              <CardTitle className="mt-4 text-lg">
                <Link
                  href={`/services/${service.slug}`}
                  className="after:absolute after:inset-0 focus-visible:outline-none"
                >
                  {service.name}
                </Link>
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {service.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between border-t border-border pt-4 text-sm">
                <span className="text-muted-foreground">
                  From{" "}
                  <span className="font-semibold text-foreground">
                    AED {service.priceFromAed}
                  </span>
                </span>
                <span className="flex items-center gap-1 font-medium text-primary">
                  Details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </CardContent>
          </Card>
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
