import { ShieldCheck, UserCheck, Leaf, Headphones } from "lucide-react"
import { Emphasize } from "@/lib/keywords"

const items = [
  {
    icon: ShieldCheck,
    title: "Fully insured",
    description: "Every booking is covered for your peace of mind.",
  },
  {
    icon: UserCheck,
    title: "Vetted professionals",
    description: "Background-checked, trained and experienced staff.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly products",
    description: "Family- and pet-safe cleaning supplies.",
  },
  {
    icon: Headphones,
    title: "Friendly support",
    description: "Reach us on WhatsApp or call, every day.",
  },
]

export function TrustStrip() {
  return (
    <section
      aria-label="Why choose us"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <item.icon className="size-5" />
            </span>
            <div className="flex flex-col gap-0.5">
              <h3 className="font-heading text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                <Emphasize>{item.description}</Emphasize>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
