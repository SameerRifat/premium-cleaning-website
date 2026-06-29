import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { FaqAccordion } from "@/components/services/faq-accordion"
import { faqCategories } from "@/lib/faqs"
import { whatsappLink } from "@/lib/site-config"
import { Emphasize } from "@/lib/keywords"

/**
 * FAQ body: a sticky in-page category nav alongside the grouped accordion
 * sections. The accordion itself is the reused Phase 2 FaqAccordion (the only
 * client boundary), so the interaction matches the rest of the site. A
 * FAQ-specific "still have a question" prompt closes the page before the shared
 * teal CTA banner.
 */
export function FaqCategories() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[16rem_1fr] lg:gap-14">
        {/* Sticky category nav (desktop) */}
        <aside className="hidden lg:block">
          <nav aria-label="FAQ categories" className="sticky top-24">
            <span className="px-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Browse by topic
            </span>
            <ul className="mt-3 flex flex-col gap-1">
              {faqCategories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`#${category.id}`}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    <category.icon className="size-4 shrink-0 text-primary" />
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Accordion sections */}
        <div className="flex flex-col gap-12 lg:gap-16">
          {faqCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-labelledby={`${category.id}-heading`}
              className="scroll-mt-24"
            >
              <div className="flex flex-col gap-2.5 border-b border-border pb-5">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <category.icon className="size-5" />
                </span>
                <h2
                  id={`${category.id}-heading`}
                  className="text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  {category.title}
                </h2>
                <p className="text-pretty leading-relaxed text-muted-foreground">
                  <Emphasize>{category.description}</Emphasize>
                </p>
              </div>

              <div className="mt-4">
                <FaqAccordion faqs={category.faqs} />
              </div>
            </section>
          ))}

          {/* FAQ-specific prompt */}
          <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-secondary/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex flex-col gap-1.5">
              <h2 className="font-heading text-xl font-bold tracking-tight text-foreground">
                Still have a question?
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Our team is happy to help. Reach out and we&apos;ll get back to
                you within the hour during business hours.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ className: "w-full sm:w-auto" })}
              >
                <MessageCircle data-icon="inline-start" />
                Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full sm:w-auto",
                )}
              >
                Contact us
                <ArrowRight data-icon="inline-end" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
