import Image from "next/image"
import { Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const included = [
  "Detailed, room-by-room checklist",
  "Kitchen degreasing and bathroom descaling",
  "Floors vacuumed, mopped and polished",
  "Dusting from skirting boards to high shelves",
  "Bring-your-own or we supply all equipment",
  "Final walkthrough so you're 100% happy",
]

export function BeforeAfter() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="The Pristine Difference"
            title="See the difference a professional clean makes"
            description="We don't just tidy up — we transform your space. Here's what's included in every standard clean."
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <figure className="flex flex-col gap-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/before-room.png"
                alt="A dusty, cluttered kitchen counter before professional cleaning"
                fill
                sizes="(min-width: 1024px) 18rem, 45vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground">
                Before
              </span>
            </div>
          </figure>
          <figure className="mt-8 flex flex-col gap-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/after-room.png"
                alt="The same kitchen counter sparkling clean after professional cleaning"
                fill
                sizes="(min-width: 1024px) 18rem, 45vw"
                className="object-cover"
              />
              <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                After
              </span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
