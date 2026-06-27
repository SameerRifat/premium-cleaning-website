"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { ServiceFaq } from "@/lib/services"

/**
 * Client-only FAQ accordion. The interactivity boundary is kept narrow — the
 * surrounding detail page stays a Server Component.
 */
export function FaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  return (
    <Accordion className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`}>
          <AccordionTrigger className="text-base">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="leading-relaxed text-muted-foreground">
            <p>{faq.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
