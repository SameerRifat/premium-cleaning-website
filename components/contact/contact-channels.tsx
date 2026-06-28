import { MessageCircle, Phone, Mail, Clock, Timer, ArrowUpRight } from "lucide-react"
import { siteConfig, whatsappLink } from "@/lib/site-config"

/**
 * Direct contact channels. WhatsApp is the dominant professional channel in the
 * UAE, so it leads with full primary weight; phone and email follow as clear,
 * tappable rows. Business hours and the response-time promise sit beneath to
 * answer the visitor's "will someone actually reply?" question up front.
 */
export function ContactChannels() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-heading text-lg font-semibold text-foreground">
        Prefer to reach us directly?
      </h2>

      {/* WhatsApp — the headline channel */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl bg-primary p-5 text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
          <MessageCircle className="size-6" />
        </span>
        <span className="flex flex-1 flex-col">
          <span className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/80">
            WhatsApp · Fastest reply
          </span>
          <span className="font-heading text-base font-semibold">
            {siteConfig.contact.whatsappDisplay}
          </span>
        </span>
        <ArrowUpRight className="size-5 shrink-0 text-primary-foreground/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>

      {/* Phone + email */}
      <div className="flex flex-col gap-3">
        <a
          href={siteConfig.contact.phoneHref}
          className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-card-foreground transition-colors hover:border-primary/40 hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Phone className="size-5" />
          </span>
          <span className="flex flex-1 flex-col">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Call us
            </span>
            <span className="font-medium">{siteConfig.contact.phone}</span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-4 text-card-foreground transition-colors hover:border-primary/40 hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Mail className="size-5" />
          </span>
          <span className="flex flex-1 flex-col">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Email us
            </span>
            <span className="break-all font-medium">
              {siteConfig.contact.email}
            </span>
          </span>
          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      {/* Hours + response-time promise */}
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-muted/40 p-5">
        <div className="flex items-start gap-3">
          <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              Business hours
            </span>
            <span className="text-sm text-muted-foreground">
              {siteConfig.hours.display}
            </span>
          </div>
        </div>
        <div className="flex items-start gap-3 border-t border-border/70 pt-3">
          <Timer className="mt-0.5 size-5 shrink-0 text-primary" />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">
              Response time
            </span>
            <span className="text-sm text-muted-foreground">
              We reply within 1 hour during business hours — often much sooner on
              WhatsApp.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
