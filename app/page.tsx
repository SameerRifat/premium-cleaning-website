import { Hero } from "@/components/home/hero"
import { TrustStrip } from "@/components/home/trust-strip"
import { ServicesPreview } from "@/components/home/services-preview"
import { HowItWorks } from "@/components/home/how-it-works"
import { BeforeAfter } from "@/components/home/before-after"
import { Testimonials } from "@/components/home/testimonials"
import { ServiceAreas } from "@/components/home/service-areas"
import { ContactCta } from "@/components/home/contact-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <HowItWorks />
      <BeforeAfter />
      <Testimonials />
      <ServiceAreas />
      <ContactCta />
    </>
  )
}
