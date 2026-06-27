import { Phone, MessageCircle } from "lucide-react"
import { siteConfig, whatsappLink } from "@/lib/site-config"

/**
 * Fixed, always-available WhatsApp + Call actions (mobile-first conversion
 * pattern common to UAE service sites). Server Component — just anchor tags.
 * Respects the device safe-area inset so it never sits under the home bar.
 */
export function FloatingContact() {
  return (
    <div
      className="fixed right-4 bottom-4 z-50 flex flex-col gap-3"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/15 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle className="size-7" />
      </a>
      <a
        href={siteConfig.contact.phoneHref}
        aria-label={`Call ${siteConfig.name}`}
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-black/15 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Phone className="size-6" />
      </a>
    </div>
  )
}
