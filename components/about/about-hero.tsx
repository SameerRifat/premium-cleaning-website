import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, ShieldCheck, Leaf, Clock, Star } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig, whatsappLink } from "@/lib/site-config"

const highlights = [
  { icon: ShieldCheck, label: "Licensed & fully insured" },
  { icon: Leaf, label: "Family- & pet-safe products" },
  { icon: Clock, label: "Operating since 2016" },
]

export function AboutHero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40">
      {/* Soft radial wash for depth without introducing new colors */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_75%_-10%,oklch(0.93_0.035_190/0.7),transparent)]"
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-border">
              /
            </li>
            <li className="font-medium text-foreground">About</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              About {siteConfig.shortName}
            </span>
            <h1 className="text-balance font-heading text-[2.5rem] font-bold leading-[1.04] tracking-tight text-foreground sm:text-6xl">
              The trusted name in UAE home cleaning
            </h1>
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {siteConfig.name} is a licensed, fully-insured cleaning company
              built for UAE homes and offices. We pair vetted, background-checked
              professionals with family-safe products and a standard of care you
              can actually rely on — clean after clean.
            </p>

            <div className="mt-1 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg" })}
              >
                <MessageCircle data-icon="inline-start" />
                Chat with our team
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className={buttonVariants({ size: "lg", variant: "outline" })}
              >
                <Phone data-icon="inline-start" />
                Call {siteConfig.contact.phone}
              </a>
            </div>

            <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-3 border-t border-border/70 pt-6">
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

          {/* Layered image with floating credibility card for depth */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src="/images/about/team-group.png"
                alt="The Pristine Home Services team in matching uniforms inside a bright, freshly cleaned Dubai apartment"
                fill
                priority
                sizes="(min-width: 1024px) 36rem, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-card/95 p-4 shadow-xl shadow-black/10 backdrop-blur-sm sm:left-6">
              <div className="flex flex-col">
                <div className="flex items-center gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-1 text-sm font-semibold text-card-foreground">
                  Rated by UAE families
                </p>
                <p className="text-xs text-muted-foreground">
                  98% would book us again
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
