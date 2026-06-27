import Link from "next/link"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

export function Logo({
  className,
  href = "/",
}: {
  className?: string
  href?: string
}) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Sparkles className="size-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-heading text-base font-bold tracking-tight text-foreground">
          {siteConfig.shortName}
        </span>
        <span className="text-[0.625rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Home Services
        </span>
      </span>
    </Link>
  )
}
