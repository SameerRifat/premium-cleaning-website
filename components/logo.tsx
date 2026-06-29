import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-config"

type LogoVariant = "horizontal" | "horizontal-white" | "mark" | "mark-white"

const SOURCES: Record<LogoVariant, { src: string; width: number; height: number }> = {
  horizontal: { src: "/logo-horizontal.svg", width: 320, height: 72 },
  "horizontal-white": { src: "/logo-horizontal-white.svg", width: 320, height: 72 },
  mark: { src: "/logo-mark.svg", width: 64, height: 64 },
  "mark-white": { src: "/logo-mark-white.svg", width: 64, height: 64 },
}

export function Logo({
  className,
  href = "/",
  variant = "horizontal",
}: {
  className?: string
  href?: string
  /** Which lockup to render. Defaults to the primary horizontal combination mark. */
  variant?: LogoVariant
}) {
  const { src, width, height } = SOURCES[variant]
  const isMark = variant === "mark" || variant === "mark-white"

  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={src}
        alt={`${siteConfig.name} logo`}
        width={width}
        height={height}
        priority
        className={cn("w-auto", isMark ? "h-9" : "h-9 sm:h-10")}
      />
    </Link>
  )
}
