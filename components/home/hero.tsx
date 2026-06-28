import Image from "next/image"
import { MessageCircle, Phone, Star, ShieldCheck, Clock, Leaf } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig, whatsappLink } from "@/lib/site-config"

const highlights = [
  { icon: ShieldCheck, label: "Fully insured & vetted" },
  { icon: Clock, label: "Same-day availability" },
  { icon: Leaf, label: "Eco-friendly products" },
]

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[85svh] w-full items-center overflow-hidden lg:min-h-[88vh] xl:min-h-[78vh] xl:max-h-[820px] 2xl:max-h-[880px]">
      {/* Layer 1 — background photo (LCP element) */}
      <Image
        src="/images/hero-banner.png"
        alt="Professional cleaner polishing a glass surface in a bright, pristine luxury Sharjah apartment"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[100%_center] lg:object-center"
        // className="-z-20 object-cover object-[70%_center] lg:object-center"
      />

      {/* Layer 2 — directional gradient overlay for legibility */}
      <div className="bg-gradient-overlay absolute inset-0 -z-10" aria-hidden="true" />

      {/* Layer 3 — content */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24 lg:text-left"
        style={{
          paddingLeft: "max(1rem, env(safe-area-inset-left))",
          paddingRight: "max(1rem, env(safe-area-inset-right))",
        }}
      >
        {/* Status pill */}
        <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-gradient-cta px-4 py-1.5 text-xs font-medium text-white shadow-sm shadow-black/20 backdrop-blur-sm lg:mx-0">
          <span className="flex size-1.5 rounded-full bg-white" />
          Trusted across Sharjah &amp; Ajman
        </span>

        {/* Headline */}
        <h1 className="max-w-3xl text-balance font-heading text-[clamp(2.5rem,4.5vw,4.25rem)] font-extrabold leading-[1.04] tracking-tight text-white [text-shadow:0_2px_24px_rgb(0_0_0/0.35)]">
          A <span className="text-gradient-bright">spotless</span> home, without
          lifting a finger
        </h1>

        {/* Subheadline */}
        <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-white/90 lg:mx-0">
          {siteConfig.name} connects you with professional, fully-insured
          cleaners for your home or office. Book in under a minute and relax
          while we take care of the rest.
        </p>

        {/* CTAs */}
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:justify-start">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-cta h-auto min-h-[52px] min-w-[160px] w-full justify-center rounded-xl px-6 text-base font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-[1.02] hover:bg-gradient-cta sm:w-auto"
            )}
          >
            <MessageCircle data-icon="inline-start" />
            Book on WhatsApp
          </a>
          <a
            href={siteConfig.contact.phoneHref}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-auto min-h-[52px] min-w-[160px] w-full justify-center rounded-xl border-white/40 bg-white/5 px-6 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/15 hover:text-white sm:w-auto"
            )}
          >
            <Phone data-icon="inline-start" />
            Call {siteConfig.contact.phone}
          </a>
        </div>

        {/* Trust signal strip */}
        <ul className="mx-auto flex w-full max-w-md flex-col items-center gap-x-6 gap-y-3 pt-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start">
          {highlights.map((item, i) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-2 text-sm font-medium text-white sm:justify-start"
            >
              <item.icon className="size-4 shrink-0 text-white" aria-hidden="true" />
              {item.label}
              {i < highlights.length - 1 && (
                <span className="ml-4 hidden h-4 w-px bg-white/25 sm:inline-block" aria-hidden="true" />
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Floating social-proof card (desktop only to avoid CTA overlap on mobile) */}
      <div className="absolute right-28 bottom-8 z-10 hidden items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-xl shadow-black/20 backdrop-blur-md lg:flex">
        <div className="flex items-center gap-0.5 text-amber-300">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-current" aria-hidden="true" />
          ))}
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Loved by UAE families</p>
          <p className="text-xs text-white/80">Thousands of cleans completed</p>
        </div>
      </div>
    </section>
  )
}
