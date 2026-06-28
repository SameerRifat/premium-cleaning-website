import Link from "next/link"
import { Phone, Mail, MapPin, Clock, AtSign, Share2 } from "lucide-react"
import { Logo } from "@/components/logo"
import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"
import { navItems } from "@/lib/navigation"

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  const { address } = siteConfig

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="mx-auto w-full max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8 lg:pt-16 lg:pb-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + NAP */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {address.streetAddress}, {address.addressLocality},{" "}
                  {address.addressRegion}, UAE
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-primary" />
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  {siteConfig.hours.display}
                </span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <nav aria-label="Services" className="flex flex-col gap-4">
            <h2 className="font-heading text-sm font-semibold text-foreground">
              Services
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="flex flex-col gap-4">
            <h2 className="font-heading text-sm font-semibold text-foreground">
              Company
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service areas */}
          <div className="flex flex-col gap-4">
            <h2 className="font-heading text-sm font-semibold text-foreground">
              Where We Work
            </h2>
            <ul className="flex flex-col gap-2.5 text-sm">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area.name} className="text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {area.name}
                  </span>
                  <span className="block text-xs">
                    {area.communities.slice(0, 3).join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>

          {/* <div className="flex items-center gap-4">
            <nav aria-label="Legal" className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <AtSign className="size-4" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Share2 className="size-4" />
                </a>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  )
}
