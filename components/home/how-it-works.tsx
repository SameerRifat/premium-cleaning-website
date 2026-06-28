import { CalendarCheck, Sparkles, Smile } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const steps = [
  {
    icon: CalendarCheck,
    title: "Book in a minute",
    description:
      "Message us on WhatsApp or call. Tell us what you need and when — we confirm a time that works for you.",
  },
  {
    icon: Sparkles,
    title: "We get to work",
    description:
      "A vetted, fully-equipped professional arrives on schedule and cleans to a detailed, consistent standard.",
  },
  {
    icon: Smile,
    title: "Relax and enjoy",
    description:
      "Come home to a fresh, spotless space. Not happy with something? We'll make it right.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          eyebrow="How It Works"
          title="Booking a clean is effortless"
          description="No long forms or call-centre queues. Three simple steps from request to relaxation."
        />

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <step.icon className="size-6" />
                </span>
                <span className="font-heading text-4xl font-bold text-border">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
