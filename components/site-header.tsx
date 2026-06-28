"use client"

import * as React from "react"
import { Menu, Phone, MessageCircle } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { DesktopNav } from "@/components/desktop-nav"
import { MobileNav } from "@/components/mobile-nav"
import { siteConfig, whatsappLink } from "@/lib/site-config"

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur supports-backdrop-filter:bg-background/65">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.contact.phoneHref}
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "hidden md:inline-flex"
            )}
          >
            <Phone data-icon="inline-start" />
            Call
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "hidden sm:inline-flex"
            )}
          >
            <MessageCircle data-icon="inline-start" />
            Book on WhatsApp
          </a>
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open menu"
                >
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right" className="w-full max-w-xs gap-0 p-0">
              <SheetHeader className="border-b border-border p-4">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <Logo />
              </SheetHeader>

              <MobileNav onNavigate={() => setOpen(false)} />

              <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={buttonVariants({ className: "w-full" })}
                >
                  <MessageCircle data-icon="inline-start" />
                  Book on WhatsApp
                </a>
                <a
                  href={siteConfig.contact.phoneHref}
                  onClick={() => setOpen(false)}
                  className={buttonVariants({
                    variant: "outline",
                    className: "w-full",
                  })}
                >
                  <Phone data-icon="inline-start" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
