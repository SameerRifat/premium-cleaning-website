import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Service } from "@/lib/services"

/**
 * Shared service card used on the /services index. Mirrors the visual language
 * of the home-page services preview (icon tile, popular badge, price + arrow)
 * and adds the typical duration so the index reads as a richer catalogue.
 */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="group relative h-full transition-shadow hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <service.icon className="size-5" />
          </span>
          {service.popular && <Badge variant="secondary">Popular</Badge>}
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
      <CardContent className="mt-auto">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {service.duration}
        </div>
        <div className="mt-3 flex items-center justify-between border-t border-border pt-4 text-sm">
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
  )
}
