import {
  BadgeCheck,
  ShieldCheck,
  UserCheck,
  Leaf,
  Sparkles,
} from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const credentials = [
  {
    icon: BadgeCheck,
    title: "UAE trade license",
    description:
      "Pristine is a fully registered, licensed UAE business — not an informal operator. Our license is available on request before you book.",
  },
  {
    icon: ShieldCheck,
    title: "Full insurance coverage",
    description:
      "Every booking is covered for liability, accidental damage and theft, so inviting our team into your home carries zero financial risk to you.",
  },
  {
    icon: UserCheck,
    title: "Background-checked staff",
    description:
      "Each cleaner is interviewed, identity- and reference-verified, and trained to our checklist before they ever attend a single job.",
  },
  {
    icon: Leaf,
    title: "Family- & pet-safe products",
    description:
      "We use eco-friendly, low-toxicity cleaning products that are safe around children and pets, with fragrance-free options on request.",
  },
  {
    icon: Sparkles,
    title: "Satisfaction guarantee",
    description:
      "Not happy with any area? Tell us within 24 hours and we'll return to re-clean it at no extra cost. No arguments, no fine print.",
  },
]

export function AboutCredentials() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Why you can trust us"
          title="The credentials that actually matter"
          description="Before you let anyone into your home, here is exactly what makes Pristine a legitimate, accountable choice in the UAE market."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm shadow-black/5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <item.icon className="size-6" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
