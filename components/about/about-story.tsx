import Image from "next/image"
import { siteConfig } from "@/lib/site-config"

export function AboutStory() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Image with layered founding-year badge */}
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/10">
            <Image
              src="/images/about/story.png"
              alt="A Pristine cleaner wiping a kitchen counter to a streak-free shine in a modern Dubai home"
              fill
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-3 -top-3 flex flex-col items-center rounded-2xl border border-border bg-card px-5 py-3 text-center shadow-xl shadow-black/10 sm:-right-5 sm:-top-5">
            <span className="font-heading text-2xl font-bold leading-none text-primary">
              2016
            </span>
            <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Established
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gradient-primary">
            <span className="h-px w-8 bg-gradient-primary" />
            Our Story
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem]">
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
          </div>

          {/* Editorial pull quote */}
          <blockquote className="border-l-2 border-primary pl-5">
            <p className="text-balance font-heading text-xl font-medium leading-snug text-foreground sm:text-2xl">
              &ldquo;Real people, real standards, and a team you can reach
              directly whenever you need us.&rdquo;
            </p>
            <footer className="mt-3 text-sm font-medium text-muted-foreground">
              Omar Al Farsi
              <span className="text-muted-foreground/70">
                {" "}
                · Founder &amp; Managing Director
              </span>
            </footer>
          </blockquote>

          <p className="text-pretty leading-relaxed text-muted-foreground">
            Today we serve homes and offices across Dubai, Abu Dhabi, Sharjah and
            Ajman — and that founding promise hasn&apos;t changed.
          </p>
        </div>
      </div>
    </section>
  )
}
