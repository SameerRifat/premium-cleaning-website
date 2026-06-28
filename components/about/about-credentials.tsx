import {
  BadgeCheck,
  ShieldCheck,
  UserCheck,
  Leaf,
  Sparkles,
  MessageCircle,
} from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { whatsappLink } from "@/lib/site-config"

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
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-8 lg:py-28">
        {/* Sticky editorial heading */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gradient-primary">
            <span className="h-px w-8 bg-gradient-primary" />
            Why you can trust us
          </span>
          <h2 className="text-balance font-heading text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-[2.75rem]">
            The credentials that actually matter
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Before you let anyone into your home, here is exactly what makes
            Pristine a legitimate, accountable choice in the UAE market.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            // className={buttonVariants({ size: "lg", className: "mt-1 w-fit" })}
            className={buttonVariants({
              className:
                "w-fit mt-1 bg-gradient-cta transition-opacity hover:opacity-90",
              size: "lg",
            })}
          >
            <MessageCircle data-icon="inline-start" />
            Ask us anything first
          </a>
        </div>

        {/* Credential rows */}
        <ul className="flex flex-col">
          {credentials.map((item, index) => (
            <li
              key={item.title}
              className="group flex gap-5 border-t border-border py-6 first:border-t-0 first:pt-0 sm:gap-6"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-card text-primary shadow-sm shadow-black/5 ring-1 ring-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="size-6" />
              </span>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-xs font-bold tabular-nums text-primary/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                </div>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
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
