import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/lib/site-config"

export function ServiceAreas() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="Service Areas"
        title="Proudly serving the UAE"
        description="Fast, reliable cleaning across the Emirates. Don't see your community? Get in touch — we're always expanding."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {siteConfig.serviceAreas.map((area) => (
          <Card key={area.name}>
            <CardHeader>
              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="size-4" />
                </span>
                <CardTitle className="text-lg">{area.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                {area.communities.map((community) => (
                  <li key={community} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-primary" />
                    {community}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href="/contact"
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Check if we cover your area
          <ArrowRight data-icon="inline-end" />
        </Link>
      </div>
    </section>
  )
}
