import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SectionHeading } from "@/components/section-heading"

/**
 * Placeholder testimonials for layout. These are illustrative and must be
 * replaced with the client's real, verifiable customer reviews before launch.
 * Intentionally NOT emitted as Review/AggregateRating structured data.
 */
const testimonials = [
  {
    name: "Aisha R.",
    location: "Dubai Marina",
    initials: "AR",
    quote:
      "Booked a deep clean before guests arrived and the team was incredible. Every corner sparkled and they were so professional. My go-to from now on.",
  },
  {
    name: "Daniel K.",
    location: "Al Reem Island, Abu Dhabi",
    initials: "DK",
    quote:
      "We use them for our office twice a week. Reliable, thorough and easy to coordinate over WhatsApp. Highly recommend for any business.",
  },
  {
    name: "Fatima S.",
    location: "Al Majaz, Sharjah",
    initials: "FS",
    quote:
      "The sofa and carpet cleaning brought our living room back to life. Punctual, friendly and fairly priced. Couldn't be happier with the result.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our customers say"
          description="Real feedback from homes and businesses across the UAE."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="h-full">
              <CardContent className="flex h-full flex-col gap-4 pt-6">
                <Quote className="size-7 text-primary/30" />
                <div
                  className="flex items-center gap-0.5 text-primary"
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </div>
                <p className="flex-1 text-pretty leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <Avatar>
                    <AvatarFallback>{t.initials}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
