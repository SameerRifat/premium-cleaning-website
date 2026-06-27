/**
 * Single source of truth for brand identity, contact details (NAP), and the
 * service-area list. Everything user-facing (header, footer, JSON-LD, floating
 * contact buttons) reads from here so the real client details can be swapped in
 * one place once they are confirmed.
 *
 * NOTE: All values below are PLACEHOLDERS for "Pristine Home Services" and must
 * be replaced with the client's verified business information before launch.
 */

export type ServiceArea = {
  /** Emirate or city name. */
  name: string
  /** Notable communities/areas covered, for the service-areas teaser. */
  communities: string[]
}

export const siteConfig = {
  name: "Pristine Home Services",
  shortName: "Pristine",
  /** Used in the title template and as a one-line positioning statement. */
  tagline: "Trusted Home & Office Cleaning Across the UAE",
  description:
    "Pristine Home Services delivers reliable, fully-insured residential and commercial cleaning across Dubai, Abu Dhabi and Sharjah. Vetted professionals, eco-friendly products, and same-day availability.",

  /**
   * Canonical site URL. Used by metadataBase and structured data. Replace with
   * the production domain once confirmed.
   */
  url: "https://www.pristinehomeservices.ae",

  /** Contact details (NAP — Name, Address, Phone — must stay consistent site-wide). */
  contact: {
    /** E.164 format for tel: links. */
    phone: "+971 4 000 0000",
    phoneHref: "tel:+97140000000",
    /** Digits only, international format, for wa.me links. */
    whatsapp: "971500000000",
    whatsappDisplay: "+971 50 000 0000",
    email: "hello@pristinehomeservices.ae",
    /** Default pre-filled WhatsApp message. */
    whatsappMessage:
      "Hi Pristine Home Services, I'd like to book a cleaning. Could you share availability and pricing?",
  },

  /** Postal address used for the LocalBusiness schema and footer. */
  address: {
    streetAddress: "Office 000, Business Bay",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE",
  },

  /** Approximate geo-coordinates of the primary location (Business Bay, Dubai). */
  geo: {
    latitude: 25.1857,
    longitude: 55.2645,
  },

  /** Operating hours used in copy and structured data. */
  hours: {
    display: "Daily, 8:00 AM – 8:00 PM",
    /** schema.org openingHours specification. */
    spec: [
      {
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  },

  /** Social profiles (placeholders). Empty strings are filtered out where used. */
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "",
    linkedin: "",
  },

  /** Emirates and communities served, for the service-areas teaser + schema. */
  serviceAreas: [
    {
      name: "Dubai",
      communities: [
        "Downtown & Business Bay",
        "Dubai Marina & JBR",
        "Palm Jumeirah",
        "Jumeirah & Umm Suqeim",
        "Arabian Ranches",
      ],
    },
    {
      name: "Abu Dhabi",
      communities: [
        "Al Reem Island",
        "Yas Island",
        "Saadiyat Island",
        "Khalifa City",
      ],
    },
    {
      name: "Sharjah",
      communities: ["Al Majaz", "Al Khan", "Muwaileh", "Al Nahda"],
    },
  ] satisfies ServiceArea[],
} as const

/** Build a wa.me deep link with the default pre-filled message. */
export function whatsappLink(message: string = siteConfig.contact.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export type SiteConfig = typeof siteConfig
