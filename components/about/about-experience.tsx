import { Repeat, ClipboardCheck, Eye, MessageCircle } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const differentiators = [
  {
    icon: Repeat,
    title: "Your consistent assigned cleaner",
    description:
      "Wherever possible, the same trusted professional returns to your home each visit — so they learn your space and your preferences, and you never start over with a stranger.",
  },
  {
    icon: ClipboardCheck,
    title: "A room-by-room checklist",
    description:
      "Every clean follows a detailed, agreed checklist for each room. Nothing is left to memory, and standards stay identical from one visit to the next.",
  },
  {
    icon: Eye,
    title: "A final walkthrough",
    description:
      "Before we leave, we walk the space with you (or send photos for remote bookings) to confirm every area meets the standard — while we're still there to fix anything.",
  },
  {
    icon: MessageCircle,
    title: "Direct WhatsApp access",
    description:
      "Message our operations team directly — no call centre, no 48-hour ticket queue. Real people reply quickly to book, reschedule or sort out any request.",
  },
]

export function AboutExperience() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="The Pristine difference"
        title="What working with us actually looks like"
        description="Trust isn't a slogan — it's the small things we do on every single booking."
      />

      <ul className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {differentiators.map((item, index) => (
          <li
            key={item.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 sm:p-8"
          >
            {/* Oversized ghost numeral */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-2 -top-5 select-none font-heading text-[6rem] font-bold leading-none text-secondary transition-colors duration-300 group-hover:text-accent/60"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative flex flex-col gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-sm shadow-primary/20">
                <item.icon className="size-6" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
