"use client"

import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema"
import { z } from "zod"
import {
  CheckCircle2,
  Send,
  AlertTriangle,
  MessageCircle,
  RotateCcw,
} from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { services } from "@/lib/services"
import { siteConfig, whatsappLink } from "@/lib/site-config"

/**
 * Contact form — the page centrepiece.
 *
 * Stack: React Hook Form + Zod (validation) + the shadcn `Field` primitive.
 * Delivery: a direct fetch to the Web3Forms submit endpoint (no extra runtime
 * dependency), which must run client-side. The access key is read from
 * NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY — see .env.example.
 */

// Service options are derived from the catalogue (single source of truth) plus a
// catch-all, so the dropdown never drifts from the real service list.
const GENERAL_VALUE = "general"
const serviceOptions = [
  ...services.map((service) => ({ value: service.slug, label: service.name })),
  { value: GENERAL_VALUE, label: "Not sure yet / general enquiry" },
]

const serviceLabelByValue = new Map(
  serviceOptions.map((option) => [option.value, option.label]),
)

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "That name looks too long"),
  email: z.email("Enter a valid email address"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "That number looks too long")
    .regex(/^[0-9+()\s-]+$/, "Use digits, spaces, + or - only"),
  service: z.string().min(1, "Please choose a service"),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail (10+ characters)")
    .max(1000, "Please keep your message under 1000 characters"),
  // Honeypot — must stay empty. Bots fill it; humans never see it.
  botcheck: z.string().optional(),
})

type ContactValues = z.infer<typeof contactSchema>

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>("idle")

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    // Standard Schema resolver — zod 4 implements the Standard Schema spec
    // natively, so this stays decoupled from zod's internal version typings.
    resolver: standardSchemaResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      botcheck: "",
    },
  })

  async function onSubmit(values: ContactValues) {
    // Silently drop honeypot hits as if successful.
    if (values.botcheck) {
      setStatus("success")
      return
    }

    setStatus("submitting")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New cleaning enquiry — ${siteConfig.name}`,
          from_name: siteConfig.name,
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: serviceLabelByValue.get(values.service) ?? values.service,
          message: values.message,
        }),
      })

      const data = (await response.json()) as { success: boolean }

      if (data.success) {
        setStatus("success")
        reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-5 rounded-3xl border border-border bg-card p-8 text-center shadow-xl shadow-primary/5 sm:p-12">
        <span className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" />
        </span>
        <div className="flex flex-col gap-2">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
            Thanks — your message is on its way
          </h2>
          <p className="mx-auto max-w-md text-pretty leading-relaxed text-muted-foreground">
            A member of the {siteConfig.shortName} team will get back to you
            within 1 hour during business hours. Need a faster answer? Message us
            on WhatsApp and we&apos;ll help right away.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            <MessageCircle data-icon="inline-start" />
            Chat on WhatsApp
          </a>
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={() => setStatus("idle")}
          >
            <RotateCcw data-icon="inline-start" />
            Send another message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-8">
      <div className="mb-6 flex flex-col gap-1.5">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
          Send us a message
        </h2>
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Share a few details and we&apos;ll reply with availability and a clear
          quote. No obligation, no spam.
        </p>
      </div>

      {status === "error" && (
        <Alert variant="destructive" className="mb-6">
          <AlertTriangle />
          <AlertTitle>We couldn&apos;t send your message</AlertTitle>
          <AlertDescription>
            Something went wrong on our end. Please try again, or reach us
            directly on WhatsApp at {siteConfig.contact.whatsappDisplay}.
          </AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Honeypot — hidden from users and assistive tech */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="sr-only"
          {...register("botcheck")}
        />

        <FieldGroup>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field data-invalid={!!errors.name}>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input
                id="name"
                autoComplete="name"
                placeholder="e.g. Layla Ahmed"
                className="h-11"
                aria-invalid={!!errors.name}
                {...register("name")}
              />
              <FieldError>{errors.name?.message}</FieldError>
            </Field>

            <Field data-invalid={!!errors.phone}>
              <FieldLabel htmlFor="phone">Phone number</FieldLabel>
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+971 58 876 4651"
                className="h-11"
                aria-invalid={!!errors.phone}
                {...register("phone")}
              />
              <FieldError>{errors.phone?.message}</FieldError>
            </Field>
          </div>

          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="email">Email address</FieldLabel>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="h-11"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            <FieldError>{errors.email?.message}</FieldError>
          </Field>

          <Field data-invalid={!!errors.service}>
            <FieldLabel htmlFor="service">Which service do you need?</FieldLabel>
            <Controller
              control={control}
              name="service"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="service"
                    className="h-11 w-full"
                    aria-invalid={!!errors.service}
                    onBlur={field.onBlur}
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {serviceOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError>{errors.service?.message}</FieldError>
          </Field>

          <Field data-invalid={!!errors.message}>
            <FieldLabel htmlFor="message">How can we help?</FieldLabel>
            <Textarea
              id="message"
              rows={5}
              placeholder="Tell us about your home or office, preferred dates, and anything else we should know."
              className="min-h-32"
              aria-invalid={!!errors.message}
              {...register("message")}
            />
            <FieldDescription>
              The more detail you share, the more accurate our quote.
            </FieldDescription>
            <FieldError>{errors.message?.message}</FieldError>
          </Field>

          <Button
            type="submit"
            size="lg"
            className="h-12 w-full text-base bg-gradient-cta"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <Spinner data-icon="inline-start" />
                Sending…
              </>
            ) : (
              <>
                <Send data-icon="inline-start" />
                Send message
              </>
            )}
          </Button>

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            By submitting, you agree to be contacted about your enquiry. We never
            share your details.
          </p>
        </FieldGroup>
      </form>
    </div>
  )
}
