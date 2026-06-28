import { FaqAccordion } from "@/components/services/faq-accordion"
import { siteConfig } from "@/lib/site-config"
import type { ServiceFaq } from "@/lib/services"

/**
 * Short, contact-specific FAQ that removes last-minute hesitation for a visitor
 * who is almost ready to reach out. Kept intentionally narrow (3 questions) and
 * UI-only — no FAQPage schema here, to avoid competing markup with the dedicated
 * /faq page. Reuses the Phase 2 FaqAccordion so the interaction matches the rest
 * of the site.
 */
const contactFaqs: ServiceFaq[] = [
  {
    question: "What happens after I submit the form?",
    answer:
      "Your enquiry lands straight in our inbox and a team member replies within 1 hour during business hours — usually with availability and a clear price. If you message us on WhatsApp, you'll often hear back even sooner.",
  },
  {
    question: "How do I know you serve my area?",
    answer: `We cover ${siteConfig.serviceAreas
      .map((area) => area.name)
      .join(", ")} and the surrounding communities. If you don't see your neighbourhood listed, get in touch anyway — we're regularly expanding and will let you know right away.`,
  },
  {
    question: "Can I speak to a real person before booking?",
    answer:
      "Absolutely. Call us or message on WhatsApp during business hours and you'll reach a member of our team directly — no bots, no call centres. We're happy to talk through your needs before anything is confirmed.",
  },
]

export function ContactFaq() {
  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Before you reach out
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Quick answers
          </h2>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            A few things people often want to know before getting in touch.
          </p>
        </div>

        <div className="mt-10">
          <FaqAccordion faqs={contactFaqs} />
        </div>
      </div>
    </section>
  )
}
