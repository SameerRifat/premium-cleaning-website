import type { Metadata } from "next"
import { FaqPageJsonLd } from "@/components/faq/structured-data"
import { FaqHero } from "@/components/faq/faq-hero"
import { FaqCategories } from "@/components/faq/faq-categories"
import { ContactCta } from "@/components/home/contact-cta"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Spotless UAE — booking and availability, what's included, staff vetting and safety, products, pricing and the areas we cover across Sharjah and Ajman.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: `Frequently Asked Questions | ${siteConfig.name}`,
    description:
      "Booking, what's included, staff vetting, products, pricing and service areas — clear answers about cleaning with Spotless UAE across Sharjah & Ajman.",
    url: `${siteConfig.url}/faq`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Frequently Asked Questions | ${siteConfig.name}`,
    description:
      "Clear answers about booking, pricing, staff vetting, products and service areas with Spotless UAE.",
  },
}

export default function FaqPage() {
  return (
    <>
      <FaqPageJsonLd />
      <FaqHero />
      <FaqCategories />
      <ContactCta />
    </>
  )
}
