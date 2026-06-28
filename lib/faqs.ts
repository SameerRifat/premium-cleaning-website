/**
 * Content source for the /faq page. Grouped into the categories that matter
 * most for a UAE cleaning service, ordered to mirror a customer's journey from
 * first enquiry through to payment. Copy is client-ready, not placeholder.
 *
 * Built at module scope from siteConfig so contact facts (areas, hours, phone)
 * never drift from the single source of truth. Every entry is also emitted as
 * FAQPage structured data — see components/faq/structured-data.tsx.
 */

import {
  CalendarClock,
  ClipboardCheck,
  ShieldCheck,
  SprayCan,
  Wallet,
  MapPin,
  type LucideIcon,
} from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export type Faq = {
  question: string
  answer: string
}

export type FaqCategory = {
  /** Stable id used for in-page anchors and accordion values. */
  id: string
  /** Section heading. */
  title: string
  /** One-line supporting description under the heading. */
  description: string
  icon: LucideIcon
  faqs: Faq[]
}

const areaList = siteConfig.serviceAreas.map((area) => area.name)
const areasSentence =
  areaList.length > 1
    ? `${areaList.slice(0, -1).join(", ")} and ${areaList[areaList.length - 1]}`
    : areaList[0]

export const faqCategories: FaqCategory[] = [
  {
    id: "booking-availability",
    title: "Booking & availability",
    description: "How to book, how fast we respond, and what to expect on the day.",
    icon: CalendarClock,
    faqs: [
      {
        question: "How do I book a cleaning?",
        answer: `The quickest way is to message us on WhatsApp or call ${siteConfig.contact.phone} — you'll usually have availability and a price within the hour during business hours. You can also send the contact form and we'll come straight back to you. Tell us your location, the service you need, and your preferred date, and we'll handle the rest.`,
      },
      {
        question: "How much notice do you need?",
        answer:
          "For standard home cleaning we can often arrange same-day or next-day visits, subject to availability. Deep cleans, move-in/move-out and larger jobs are best booked a day or two ahead so we can allocate the right team and time. During busy periods such as Ramadan and Eid we recommend booking earlier.",
      },
      {
        question: "What are your working hours?",
        answer: `Our teams operate ${siteConfig.hours.display.toLowerCase()}, including weekends. If you need an early-morning or evening slot to fit around work, just ask when booking and we'll do our best to accommodate it.`,
      },
      {
        question: "Do I need to be home during the clean?",
        answer:
          "Not at all. Many customers provide access instructions and carry on with their day. Every cleaner is background-checked and fully insured, so you can leave us to it with complete peace of mind. If you'd prefer to be there, that's absolutely fine too.",
      },
      {
        question: "Can I reschedule or cancel a booking?",
        answer:
          "Yes. Plans change, and we keep things flexible. Just let us know as early as you can — ideally at least 24 hours before your slot — and we'll move or cancel the booking at no charge. Same-day changes are usually fine too, though availability for the new slot can't always be guaranteed.",
      },
    ],
  },
  {
    id: "whats-included",
    title: "What's included & what's not",
    description: "Exactly what each visit covers, and the extras you can add on.",
    icon: ClipboardCheck,
    faqs: [
      {
        question: "What does a standard home cleaning include?",
        answer:
          "A standard clean covers dusting and surface wipe-downs throughout, vacuuming and mopping floors, sanitising bathrooms and kitchens, general tidying and bed-making, and emptying bins. Each service page lists exactly what's included so there are no surprises — and you can always ask us to prioritise specific rooms.",
      },
      {
        question: "What's the difference between a regular clean and a deep clean?",
        answer:
          "A regular clean keeps an already-maintained home fresh week to week. A deep clean is a more intensive, top-to-bottom reset — descaling, degreasing, skirting boards, switches, behind and under furniture, and the build-up everyday cleaning misses. We recommend a deep clean seasonally, before moving, or ahead of guests.",
      },
      {
        question: "Do you clean inside ovens, fridges and windows?",
        answer:
          "Interior appliance cleaning and interior windows are included in our Deep Cleaning, Move In/Move Out and Kitchen & Appliances services rather than a standard clean. If you only need the kitchen tackled, our focused Kitchen & Appliances service is ideal. Exterior and high-rise windows aren't part of any package for safety reasons.",
      },
      {
        question: "Can I add extra tasks like laundry or ironing?",
        answer:
          "Yes. Laundry and ironing can be booked as a standalone service or added to a home clean so everything is handled in one visit. Just mention any extras when you book and we'll factor them into your quote and the time we allocate.",
      },
    ],
  },
  {
    id: "staff-safety",
    title: "Staff vetting & safety",
    description: "Who comes to your home, and how we keep you protected.",
    icon: ShieldCheck,
    faqs: [
      {
        question: "Are your cleaners vetted and insured?",
        answer:
          "Every member of our team is background-checked, professionally trained and fully insured. We're a licensed business, and our staff are directly employed and supervised — never anonymous casual labour — so the same standards apply on every visit.",
      },
      {
        question: "Am I covered if something gets damaged?",
        answer:
          "Yes. We carry full insurance, so in the rare event something is accidentally damaged during a clean, you're protected. Tell us as soon as possible and we'll make it right — these situations are uncommon, but we take them seriously.",
      },
      {
        question: "Can I request the same cleaner each time?",
        answer:
          "For recurring bookings we do our best to send a familiar cleaner who already knows your home and preferences. While occasional changes can happen due to schedules or leave, continuity is something we actively prioritise for regular customers.",
      },
      {
        question: "Do you offer female cleaners?",
        answer:
          "Yes. We understand that many households in the UAE prefer female cleaning staff, and we're happy to accommodate this. Let us know your preference when booking and we'll arrange the team accordingly.",
      },
    ],
  },
  {
    id: "products-equipment",
    title: "Products & equipment",
    description: "What we bring, and how we look after your home and family.",
    icon: SprayCan,
    faqs: [
      {
        question: "Do I need to provide cleaning supplies?",
        answer:
          "No. Our professionals arrive fully equipped with quality materials, tools and machines. If you'd prefer we use your own products — for specific surfaces, sensitivities or personal preference — simply let us know in advance and we'll use what you provide.",
      },
      {
        question: "Are your cleaning products safe for children and pets?",
        answer:
          "Yes. We use family- and pet-friendly products and favour eco-conscious options wherever possible. Surfaces are safe to use once dry. If anyone in your home has allergies or sensitivities, tell us and we'll adapt the products we use.",
      },
      {
        question: "Do you use eco-friendly products?",
        answer:
          "We prioritise environmentally responsible, low-toxicity products that are effective without harsh chemical residue. For certain heavy-duty tasks, such as descaling or degreasing, stronger specialist products may be needed — we'll always use them responsibly and ventilate the area.",
      },
    ],
  },
  {
    id: "pricing-payment",
    title: "Pricing & payment",
    description: "How quotes work, what affects the price, and how to pay.",
    icon: Wallet,
    faqs: [
      {
        question: "How is pricing calculated?",
        answer:
          "Pricing depends on the service, the size and condition of your space, and how often you book. Recurring cleans are charged at a lower hourly rate than one-offs, while deep cleans and specialist services are priced per job. We give you a clear quote up front — no hidden fees.",
      },
      {
        question: "Is there a minimum booking?",
        answer:
          "Most home cleaning bookings have a small minimum number of hours so the job can be done properly. We'll confirm any minimum when you book, based on the service and your requirements, so you always know the full cost before confirming.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, bank transfer and card payments. For recurring contracts and commercial clients we can arrange invoicing on agreed terms. Payment details are confirmed when you book so everything is clear in advance.",
      },
      {
        question: "Do you charge VAT?",
        answer:
          "Any applicable VAT is shown clearly in your quote, so the price you're given is the price you pay. We'll never add unexpected charges after the work is done.",
      },
    ],
  },
  {
    id: "service-areas",
    title: "Service areas",
    description: "Where we work across the Emirates.",
    icon: MapPin,
    faqs: [
      {
        question: "Which areas do you cover?",
        answer: `We serve homes and offices across ${areasSentence}, including the surrounding communities. Our teams cover a wide spread of neighbourhoods in each emirate, from apartments and villas to offices and retail spaces.`,
      },
      {
        question: "What if my area isn't listed?",
        answer:
          "Get in touch anyway — we're regularly expanding our coverage and may already serve your neighbourhood or be able to arrange it. The quickest way to check is to message us with your location and we'll confirm right away.",
      },
      {
        question: "Do you cover both residential and commercial properties?",
        answer:
          "Yes. We clean apartments, villas and townhouses as well as offices, clinics, retail units and showrooms. Commercial clients can set up flexible recurring contracts scheduled around business hours so work is never disrupted.",
      },
    ],
  },
]

/** Flat list of every Q&A, used for the FAQPage structured data. */
export const allFaqs: Faq[] = faqCategories.flatMap((category) => category.faqs)
