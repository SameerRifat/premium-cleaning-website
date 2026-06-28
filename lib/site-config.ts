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
  tagline: "Trusted Home & Office Cleaning Across Sharjah & Ajman",
  description:
    "Pristine Home Services delivers reliable, fully-insured residential and commercial cleaning across Sharjah and Ajman. Vetted professionals, eco-friendly products, and same-day availability.",

  /**
   * Canonical site URL. Used by metadataBase and structured data. Replace with
   * the production domain once confirmed.
   */
  // url: "https://www.pristinehomeservices.ae",
  url: "https://premium-cleaning-website-pied.vercel.app",

  /** Contact details (NAP — Name, Address, Phone — must stay consistent site-wide). */
  contact: {
    /** E.164 format for tel: links. */
    phone: "+971588764651",
    phoneHref: "tel:+971588764651",
    /** Digits only, international format, for wa.me links. */
    whatsapp: "971588764651",
    whatsappDisplay: "+971 58 876 4651",
    email: "hello@pristinehomeservices.ae",
    /** Default pre-filled WhatsApp message. */
    whatsappMessage:
      "Hi Pristine Home Services, I'd like to book a cleaning. Could you share availability and pricing?",
  },

  /** Postal address used for the LocalBusiness schema and footer. */
  address: {
    streetAddress: "Office 000, Al Majaz",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    postalCode: "00000",
    addressCountry: "AE",
  },

  /** Approximate geo-coordinates of the primary location (Al Majaz, Sharjah). */
  geo: {
    latitude: 25.3290,
    longitude: 55.3800,
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
      name: "Sharjah",
      communities: [
        "Al Majaz",
        "Al Khan",
        "Muwaileh",
        "Al Nahda",
        "Al Qasimia",
      ],
    },
    {
      name: "Ajman",
      communities: [
        "Al Nuaimiya",
        "Al Rashidiya",
        "Al Jurf",
        "Ajman Corniche",
        "Al Mowaihat",
      ],
    },
  ] satisfies ServiceArea[],
} as const

/** Build a wa.me deep link with the default pre-filled message. */
export function whatsappLink(message: string = siteConfig.contact.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export type SiteConfig = typeof siteConfig
