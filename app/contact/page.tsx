import type { Metadata } from "next"
import { ContactPageJsonLd } from "@/components/contact/structured-data"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactChannels } from "@/components/contact/contact-channels"
import { ServiceAreaMap } from "@/components/contact/service-area-map"
import { ContactFaq } from "@/components/contact/contact-faq"
import { ContactCta } from "@/components/home/contact-cta"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Pristine Home Services for home and office cleaning across Sharjah and Ajman. Send the form, call, email, or message on WhatsApp — we reply within 1 hour during business hours.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Reach Pristine Home Services for fast cleaning quotes and bookings across Sharjah & Ajman. Form, phone, email or WhatsApp — replies within 1 hour during business hours.",
    url: `${siteConfig.url}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${siteConfig.name}`,
    description:
      "Reach Pristine Home Services for fast cleaning quotes and bookings across Sharjah & Ajman — form, phone, email or WhatsApp.",
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactPageJsonLd />
      <ContactHero />

      {/* Extra bottom padding on mobile keeps a focused field clear of the
          fixed WhatsApp/Call buttons (WCAG 2.2 AA — 2.4.11 Focus Not Obscured). */}
      <section className="mx-auto w-full max-w-7xl px-4 pt-16 pb-28 sm:px-6 sm:pb-16 lg:px-8 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="lg:col-span-2 lg:sticky lg:top-24">
            <ContactChannels />
          </aside>
        </div>
      </section>

      <ServiceAreaMap />
      <ContactFaq />
      <ContactCta />
    </>
  )
}
