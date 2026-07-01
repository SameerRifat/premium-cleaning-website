import Link from "next/link"
import Image from "next/image"
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
        "relative inline-flex items-center text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} logo`}
        width={320}
        height={72}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  )
}
