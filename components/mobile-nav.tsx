"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, LayoutGrid } from "lucide-react"

import { cn } from "@/lib/utils"
import { navItems } from "@/lib/navigation"
import { getServicesByCategory } from "@/lib/services"

/**
 * Mobile primary navigation, rendered inside the header Sheet.
 *
 * The Services mega menu degrades into an inline expandable section: tapping
 * Services reveals the catalogue grouped by category, so the same destinations
 * are reachable on narrow viewports without a hover-only flyout. Every link
 * carries the active-page treatment and closes the sheet on navigation.
 */

const serviceGroups = getServicesByCategory()
const simpleItems = navItems.filter((item) => item.href !== "/services")

export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  const pathname = usePathname()

  const isActive = React.useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/"
      return pathname === href || pathname.startsWith(`${href}/`)
    },
    [pathname],
  )

  const servicesActive = isActive("/services")
  const [servicesOpen, setServicesOpen] = React.useState(servicesActive)

  return (
    <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
      {/* Services — expandable */}
      <div className="flex flex-col">
        <button
          type="button"
          aria-expanded={servicesOpen}
          aria-controls="mobile-services-panel"
          onClick={() => setServicesOpen((open) => !open)}
          className="flex items-center justify-between rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <span className="flex items-center gap-2">
            Services
            {servicesActive && (
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            )}
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform duration-200",
              servicesOpen && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>

        {servicesOpen && (
          <div
            id="mobile-services-panel"
            className="mt-1 flex flex-col gap-3 border-l border-border pb-2 pl-3"
          >
            <Link
              href="/services"
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                pathname === "/services" ? "text-primary" : "text-foreground",
              )}
            >
              <LayoutGrid className="size-4 text-primary" />
              All services
            </Link>

            {serviceGroups.map((group) => (
              <div key={group.category} className="flex flex-col gap-0.5">
                <span className="px-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {group.label}
                </span>
                {group.items.map((service) => {
                  const href = `/services/${service.slug}`
                  const active = isActive(href)
                  return (
                    <Link
                      key={service.slug}
                      href={href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                        active
                          ? "font-medium text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      <service.icon className="size-4 shrink-0 text-primary" />
                      {service.name}
                    </Link>
                  )
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Remaining top-level links */}
      {simpleItems.map((item) => {
        const active = isActive(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className="flex items-center gap-2 rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {item.label}
            {active && (
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            )}
          </Link>
        )
      })}
    </nav>
  )
}
