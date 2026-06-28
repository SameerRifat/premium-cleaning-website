"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Star, Quote } from "lucide-react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"
import { ArrowLeft, ArrowRight } from "lucide-react"

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
  {
    name: "James W.",
    location: "Jumeirah, Dubai",
    initials: "JW",
    quote:
      "Effortless from booking to finish. The crew arrived on time, paid attention to every detail, and left the apartment immaculate. Truly five-star service.",
  },
  {
    name: "Layla H.",
    location: "Khalifa City, Abu Dhabi",
    initials: "LH",
    quote:
      "I have used several cleaning companies over the years and none compare. Consistent quality, lovely staff and zero hassle. Worth every dirham.",
  },
  {
    name: "Omar A.",
    location: "Al Nahda, Sharjah",
    initials: "OA",
    quote:
      "Their post-renovation clean saved us. Dust everywhere turned into a spotless, move-in ready home in a single afternoon. Genuinely impressed.",
  },
]

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  )

  const onSelect = useCallback((carouselApi: CarouselApi) => {
    if (!carouselApi) return
    setSelectedIndex(carouselApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return
    setScrollSnaps(api.scrollSnapList())
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  return (
    <section className="relative overflow-hidden bg-secondary/40">
      {/* Subtle brand gradient wash anchored top-left for depth. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 size-[28rem] rounded-full bg-gradient-primary opacity-[0.06] blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Testimonials"
            title="Loved by homes and businesses"
            description="Real feedback from across Dubai, Abu Dhabi and Sharjah — service our customers happily return to."
          />
          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-11 rounded-full"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-11 rounded-full"
              onClick={() => api?.scrollNext()}
              aria-label="Next testimonial"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="mt-12"
        >
          <CarouselContent className="-ml-6">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-6 sm:basis-1/2 lg:basis-1/3"
              >
                <figure className="group relative flex h-full flex-col gap-6 rounded-3xl border border-border/70 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-xl">
                  {/* Gradient ring on hover via masked pseudo-element. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-primary p-px opacity-0 transition-opacity duration-300 [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] group-hover:opacity-100"
                  />
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-sm">
                      <Quote className="size-6" />
                    </span>
                    <div
                      className="flex items-center gap-0.5 text-primary"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="flex-1 text-pretty text-lg leading-relaxed text-foreground">
                    {`\u201C${t.quote}\u201D`}
                  </blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-border pt-5">
                    <Avatar className="size-11">
                      <AvatarFallback className="bg-secondary font-semibold text-secondary-foreground">
                        {t.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-muted-foreground">{t.location}</p>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Dot indicators synced to the active slide. */}
        <div className="mt-10 flex items-center justify-center gap-2.5">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              aria-current={i === selectedIndex}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === selectedIndex
                  ? "w-8 bg-gradient-primary"
                  : "w-2 bg-border hover:bg-muted-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
