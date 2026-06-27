/**
 * Typed catalogue of cleaning services. This is the single source of truth for
 * the home-page preview grid now, and will power the /services index and
 * /services/[slug] detail pages in later phases. Keep the shape stable.
 *
 * Pricing and durations are PLACEHOLDER estimates for layout purposes and must
 * be confirmed with the client before launch.
 */

import {
  Sparkles,
  Sofa,
  Building2,
  SprayCan,
  Hammer,
  Shirt,
  Refrigerator,
  Wind,
  type LucideIcon,
} from "lucide-react"

export type ServiceCategory = "residential" | "commercial" | "specialized"

export type Service = {
  /** URL-safe identifier, used for /services/[slug]. */
  slug: string
  /** Display name. */
  name: string
  /** One-line summary for cards and meta descriptions. */
  shortDescription: string
  /** Fuller paragraph for the detail page hero. */
  longDescription: string
  /** Lucide icon component for cards (fast, crisp, theme-aware). */
  icon: LucideIcon
  category: ServiceCategory
  /** Indicative starting price in AED. */
  priceFromAed: number
  /** Typical duration label, e.g. "2–3 hrs". */
  duration: string
  /** Highlight on the home grid + sort earlier. */
  popular?: boolean
  /** Checklist of what the service covers. */
  whatsIncluded: string[]
  /** Short audience/positioning line. */
  idealFor: string
}

export const services: Service[] = [
  {
    slug: "home-cleaning",
    name: "Home Cleaning",
    shortDescription:
      "Regular or one-off cleaning that keeps every room fresh, tidy and spotless.",
    longDescription:
      "Our most popular service. Vetted, fully-equipped professionals handle dusting, mopping, bathrooms, kitchens and living spaces — booked hourly or on a recurring schedule that fits your routine.",
    icon: Sparkles,
    category: "residential",
    priceFromAed: 35,
    duration: "2–4 hrs",
    popular: true,
    whatsIncluded: [
      "Dusting and surface wipe-down",
      "Floor vacuuming and mopping",
      "Bathroom and kitchen sanitising",
      "Bed-making and tidying",
    ],
    idealFor: "Apartments and villas needing routine upkeep",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortDescription:
      "An intensive, top-to-bottom reset of your entire home, including hard-to-reach spots.",
    longDescription:
      "A thorough, detail-focused clean that goes beyond the surface — descaling, degreasing, skirting boards, switches, and the corners everyday cleaning misses. Recommended seasonally or before guests arrive.",
    icon: SprayCan,
    category: "residential",
    priceFromAed: 299,
    duration: "4–7 hrs",
    popular: true,
    whatsIncluded: [
      "Detailed kitchen degreasing",
      "Bathroom descaling and grout cleaning",
      "Interior windows and skirting",
      "Behind and under furniture",
    ],
    idealFor: "Seasonal resets and pre-event preparation",
  },
  {
    slug: "move-in-move-out",
    name: "Move In / Move Out",
    shortDescription:
      "Hand back the keys spotless or settle into a freshly sanitised new home.",
    longDescription:
      "A complete property clean designed around tenancy handovers — meeting landlord and agency standards so you protect your deposit or move into a genuinely clean space.",
    icon: Hammer,
    category: "specialized",
    priceFromAed: 399,
    duration: "5–8 hrs",
    whatsIncluded: [
      "Full property deep clean",
      "Inside cabinets and wardrobes",
      "Appliance exteriors and interiors",
      "Wall spot-cleaning and fixtures",
    ],
    idealFor: "Tenants, landlords and property managers",
  },
  {
    slug: "sofa-carpet-cleaning",
    name: "Sofa & Carpet Cleaning",
    shortDescription:
      "Deep extraction cleaning that lifts stains, dust and odours from upholstery.",
    longDescription:
      "Professional hot-water extraction and shampooing for sofas, mattresses, carpets and rugs — removing embedded dust, allergens and stains while protecting fabric.",
    icon: Sofa,
    category: "specialized",
    priceFromAed: 149,
    duration: "1–3 hrs",
    popular: true,
    whatsIncluded: [
      "Vacuuming and pre-treatment",
      "Hot-water extraction shampoo",
      "Stain and odour treatment",
      "Fabric-safe drying",
    ],
    idealFor: "Fabric sofas, mattresses, carpets and rugs",
  },
  {
    slug: "office-cleaning",
    name: "Office & Commercial",
    shortDescription:
      "Dependable cleaning for offices, retail and commercial spaces — after hours or on schedule.",
    longDescription:
      "Tailored commercial cleaning contracts that keep your workplace presentable and hygienic, with flexible scheduling, trained staff and consistent quality you can rely on.",
    icon: Building2,
    category: "commercial",
    priceFromAed: 45,
    duration: "Custom",
    whatsIncluded: [
      "Workstations and common areas",
      "Pantry and washroom sanitising",
      "Waste removal and restocking",
      "Flexible recurring schedules",
    ],
    idealFor: "Offices, clinics, retail and showrooms",
  },
  {
    slug: "kitchen-appliance-cleaning",
    name: "Kitchen & Appliances",
    shortDescription:
      "Degreasing and deep-cleaning of ovens, fridges and kitchen surfaces.",
    longDescription:
      "Targeted cleaning for the hardest-working room in the home — cutting through grease and build-up on ovens, hobs, fridges and cabinetry for a hygienic, sparkling kitchen.",
    icon: Refrigerator,
    category: "specialized",
    priceFromAed: 129,
    duration: "1–2 hrs",
    whatsIncluded: [
      "Oven and hob degreasing",
      "Fridge interior cleaning",
      "Cabinet fronts and counters",
      "Sink and backsplash sanitising",
    ],
    idealFor: "Kitchens needing a focused refresh",
  },
  {
    slug: "ac-duct-cleaning",
    name: "AC & Duct Cleaning",
    shortDescription:
      "Improve air quality and cooling efficiency with professional AC servicing.",
    longDescription:
      "Cleaning and sanitising of AC units and ducts to remove dust, mould and allergens — improving air quality and helping your cooling system run efficiently in the UAE heat.",
    icon: Wind,
    category: "specialized",
    priceFromAed: 199,
    duration: "2–4 hrs",
    whatsIncluded: [
      "Filter and grille cleaning",
      "Duct dust and debris removal",
      "Coil sanitising",
      "Air-quality treatment",
    ],
    idealFor: "Homes and offices in the UAE climate",
  },
  {
    slug: "laundry-ironing",
    name: "Laundry & Ironing",
    shortDescription:
      "Wash, fold and ironing handled with care and returned fresh.",
    longDescription:
      "Convenient laundry and ironing add-ons handled by our team — washed, neatly folded and pressed so you get time back without the chore.",
    icon: Shirt,
    category: "residential",
    priceFromAed: 25,
    duration: "Add-on",
    whatsIncluded: [
      "Washing and drying",
      "Folding and sorting",
      "Professional ironing",
      "Delicate-fabric care",
    ],
    idealFor: "Busy households needing an add-on",
  },
]

/** Services flagged as popular, used for the home-page preview grid. */
export const popularServices = services.filter((s) => s.popular)

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
