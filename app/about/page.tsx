import type { Metadata } from "next"
import { AboutPageJsonLd } from "@/components/about/structured-data"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStats } from "@/components/about/about-stats"
import { AboutStory } from "@/components/about/about-story"
import { AboutCredentials } from "@/components/about/about-credentials"
import { AboutExperience } from "@/components/about/about-experience"
import { AboutTeam } from "@/components/about/about-team"
import { ContactCta } from "@/components/home/contact-cta"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Pristine Home Services — a licensed, fully-insured UAE cleaning company with background-checked staff, family-safe products and a satisfaction guarantee. Trusted across Sharjah and Ajman since 2016.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About Us | ${siteConfig.name}`,
    description:
      "A licensed, fully-insured UAE cleaning company with vetted, background-checked professionals and family-safe products — trusted across Sharjah & Ajman since 2016.",
    url: `${siteConfig.url}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About Us | ${siteConfig.name}`,
    description:
      "A licensed, fully-insured UAE cleaning company with vetted, background-checked professionals and family-safe products.",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutPageJsonLd />
      <AboutHero />
      <AboutStats />
      <AboutStory />
      <AboutCredentials />
      <AboutExperience />
      <AboutTeam />
      <ContactCta />
    </>
  )
}
