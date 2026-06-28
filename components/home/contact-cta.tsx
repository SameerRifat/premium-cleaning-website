import Image from "next/image"
import { MessageCircle, Phone } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { siteConfig, whatsappLink } from "@/lib/site-config"

export function ContactCta() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-cta text-primary-foreground">
        <div className="grid grid-cols-1 items-center gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div className="flex flex-col gap-5">
            <h2 className="text-balance font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ready for a spotless space?
            </h2>
            <p className="max-w-md text-pretty leading-relaxed text-primary-foreground/90">
              Book your clean in under a minute. Message us on WhatsApp for
              instant pricing and availability, or give us a call — we&apos;re
              here {siteConfig.hours.display.toLowerCase()}.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ size: "lg", variant: "secondary" })}
              >
                <MessageCircle data-icon="inline-start" />
                Book on WhatsApp
              </a>
              <a
                href={siteConfig.contact.phoneHref}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                )}
              >
                <Phone data-icon="inline-start" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>

          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:block">
            <Image
              src="/images/team-detail.png"
              alt="Close-up of a professional wiping a surface to a streak-free shine"
              fill
              sizes="36rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
