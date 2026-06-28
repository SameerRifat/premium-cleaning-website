import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

export function Logo({
  className,
  href = "/",
  compact = false,
}: {
  className?: string
  href?: string
  compact?: boolean
}) {
  const logoSrc = compact ? "/logo-compact.png" : "/logo-horizontal.png"
  const logoAlt = `${siteConfig.name} logo`

  return (
    <Link
      href={href}
      className={cn(
        "relative outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={compact ? 140 : 220}
        height={compact ? 40 : 60}
        priority
        className="h-auto w-auto"
      />
    </Link>
  )
}
