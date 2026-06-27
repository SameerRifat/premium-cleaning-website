import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, Star, ShieldCheck, Clock } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig, whatsappLink } from "@/lib/site-config"

const highlights = [
  { icon: ShieldCheck, label: "Fully insured & vetted" },
  { icon: Clock, label: "Same-day availability" },
  { icon: Star, label: "Eco-friendly products" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
        {/* Copy */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <span className="flex size-1.5 rounded-full bg-primary" />
            Trusted across Dubai, Abu Dhabi &amp; Sharjah
          </span>

          <h1 className="text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A spotless home, without lifting a finger
          </h1>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {siteConfig.name} connects you with professional, fully-insured
            cleaners for your home or office. Book in under a minute and relax
            while we take care of the rest.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              <MessageCircle data-icon="inline-start" />
              Book on WhatsApp
            </a>
            <a
              href={siteConfig.contact.phoneHref}
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              <Phone data-icon="inline-start" />
              Call {siteConfig.contact.phone}
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {highlights.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 text-sm font-medium text-foreground"
              >
                <item.icon className="size-4 text-primary" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/5">
            <Image
              src="/images/hero-cleaning.png"
              alt="Professional cleaner finishing a bright, freshly cleaned modern living room"
              fill
              priority
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>

          {/* Floating rating card */}
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-lg shadow-black/10 sm:left-6">
            <div className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <div className="text-sm">
              <p className="font-semibold text-card-foreground">
                Loved by UAE families
              </p>
              <p className="text-xs text-muted-foreground">
                Thousands of cleans completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
