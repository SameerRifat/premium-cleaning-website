import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, ShieldCheck, Leaf, Clock } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig, whatsappLink } from "@/lib/site-config"

const highlights = [
  { icon: ShieldCheck, label: "Licensed & fully insured" },
  { icon: Leaf, label: "Family- & pet-safe products" },
  { icon: Clock, label: "Operating since 2016" },
]

export function AboutHero() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-foreground">About</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              About {siteConfig.shortName}
            </span>
            <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl">
              The trusted name in UAE home cleaning
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              {siteConfig.name} is a licensed, fully-insured cleaning company
              built for UAE homes and offices. We pair vetted, background-checked
              professionals with family-safe products and a standard of care you
              can actually rely on — clean after clean.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
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

            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
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

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/5">
            <Image
              src="/images/about/team-group.png"
              alt="The Pristine Home Services team in matching uniforms inside a bright, freshly cleaned Dubai apartment"
              fill
              priority
              sizes="(min-width: 1024px) 36rem, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
