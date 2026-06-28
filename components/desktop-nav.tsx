"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Sparkles } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navItems } from "@/lib/navigation"
import { getServicesByCategory } from "@/lib/services"

/**
 * Desktop primary navigation.
 *
 * - Services opens a data-driven mega menu (Base UI NavigationMenu) populated
 *   from the service catalogue grouped by category — no hardcoded links.
 * - Every item shows an active-page indicator: a subtle primary underline plus
 *   a tonal shift to the foreground colour, driven by usePathname().
 *
 * Kept as a focused Client Component because both the NavigationMenu and the
 * active-state logic require the client. The header that renders it is already
 * a Client Component (it owns the mobile Sheet state), so this keeps each nav
 * concern isolated rather than widening that boundary.
 */

// Grouped once at module scope — the catalogue is static.
const serviceGroups = getServicesByCategory()

// Services is rendered as the mega-menu trigger; the rest are plain links.
const simpleItems = navItems.filter((item) => item.href !== "/services")

// Subtle active treatment: a gradient underline anchored to the bottom of the
// item, sized to sit just inside its horizontal padding.
const activeUnderline =
  "after:absolute after:inset-x-2.5 after:bottom-1 after:h-0.5 after:rounded-full after:bg-[image:var(--gradient-primary)] after:content-['']"

function useIsActive() {
  const pathname = usePathname()
  return React.useCallback(
    (href: string) => {
      if (href === "/") return pathname === "/"
      return pathname === href || pathname.startsWith(`${href}/`)
    },
    [pathname],
  )
}

function ServicesMegaMenu() {
  const isActive = useIsActive()

  return (
    <div className="grid w-[44rem] max-w-[calc(100vw-2rem)] grid-cols-[1fr_1.6fr] gap-3 p-3">
      {/* Featured entry point to the full index */}
      <NavigationMenuLink
        render={<Link href="/services" />}
        className="group/feature flex flex-col justify-between gap-6 rounded-xl bg-gradient-primary text-primary-foreground p-5 hover:bg-primary focus:bg-primary data-active:bg-primary"
      >
        <div className="flex flex-col gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary-foreground/15">
            <Sparkles className="size-5" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight">
            All Cleaning Services
          </span>
          <span className="text-sm leading-relaxed text-primary-foreground/85">
            Residential, specialised and commercial cleaning across Sharjah &
            Ajman — vetted professionals and transparent pricing.
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium">
          Browse all services
          <ArrowRight className="size-4 transition-transform duration-200 group-hover/feature:translate-x-0.5" />
        </span>
      </NavigationMenuLink>

      {/* Category columns, sourced from the catalogue */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-5">
        {serviceGroups.map((group) => (
          <div key={group.category} className="flex flex-col gap-1.5">
            <span className="px-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {group.label}
            </span>
            <ul className="flex flex-col">
              {group.items.map((service) => {
                const href = `/services/${service.slug}`
                return (
                  <li key={service.slug}>
                    <NavigationMenuLink
                      render={<Link href={href} />}
                      data-active={isActive(href) || undefined}
                      className="flex items-center gap-2.5 rounded-lg px-2 py-1.5"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                        <service.icon className="size-3.5" />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {service.name}
                      </span>
                    </NavigationMenuLink>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function DesktopNav() {
  const isActive = useIsActive()
  const servicesActive = isActive("/services")

  return (
    <NavigationMenu className="hidden lg:flex" align="start">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              "relative bg-transparent text-muted-foreground hover:text-foreground data-popup-open:text-foreground",
              servicesActive && cn("text-foreground", activeUnderline),
            )}
          >
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ServicesMegaMenu />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {simpleItems.map((item) => {
          const active = isActive(item.href)
          return (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                render={<Link href={item.href} />}
                className={cn(
                  navigationMenuTriggerStyle(),
                  "relative bg-transparent font-medium text-muted-foreground hover:text-foreground",
                  active && cn("text-foreground", activeUnderline),
                )}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
