import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function AboutStory() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/5 lg:order-first">
          <Image
            src="/images/about/story.png"
            alt="A Pristine cleaner wiping a kitchen counter to a streak-free shine in a modern Dubai home"
            fill
            sizes="(min-width: 1024px) 36rem, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our Story
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built in Dubai, to fix a broken experience
          </h2>
          <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              {siteConfig.name} began in 2016 with a simple frustration shared by
              thousands of UAE residents: booking a cleaner was a gamble. Different
              person every visit, no accountability, no insurance, and no real way
              to know who you were letting into your home.
            </p>
            <p>
              Our founder set out to build the opposite — a properly licensed
              company where every cleaner is interviewed, background-checked and
              trained, every booking is insured, and the same trusted
              professional returns to your home each time. We started with a
              handful of families in Business Bay and grew through one thing:
              clients telling their neighbours.
            </p>
            <p>
              Today we serve homes and offices across Dubai, Abu Dhabi, Sharjah
              and Ajman — and that founding promise hasn&apos;t changed. Real
              people, real standards, and a team you can reach directly on
              WhatsApp whenever you need us.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
