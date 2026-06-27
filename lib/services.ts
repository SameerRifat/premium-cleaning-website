/**
 * Typed catalogue of cleaning services. This is the single source of truth for
 * the home-page preview grid, the /services index, and the /services/[slug]
 * detail pages. Keep the shape stable.
 *
 * Pricing and durations are PLACEHOLDER estimates for layout purposes and must
 * be confirmed with the client before launch. Copy is client-ready.
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

export type ServiceFaq = {
  question: string
  answer: string
}

export type ServiceImage = {
  /** Path under /public. */
  src: string
  /** Descriptive alt text of the actual subject. */
  alt: string
}

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
  /** Honest list of what the service does NOT cover — a trust signal. */
  notIncluded: string[]
  /** Short audience/positioning line. */
  idealFor: string
  /** Service-specific FAQs for the detail page + FAQPage schema. */
  faqs: ServiceFaq[]
  /** Hero image for the detail page. */
  image: ServiceImage
  /** Unique, meaningful SEO meta description for the detail page. */
  metaDescription: string
}

export const categoryMeta: Record<
  ServiceCategory,
  { label: string; description: string }
> = {
  residential: {
    label: "Residential Cleaning",
    description:
      "Everyday and recurring cleaning that keeps apartments and villas fresh, tidy and comfortable.",
  },
  specialized: {
    label: "Specialised Cleaning",
    description:
      "Focused, equipment-led services for deep cleans, handovers, upholstery, kitchens and air quality.",
  },
  commercial: {
    label: "Commercial Cleaning",
    description:
      "Reliable, scheduled cleaning contracts that keep workplaces presentable and hygienic.",
  },
}

/** Display order for category sections on the index page. */
export const categoryOrder: ServiceCategory[] = [
  "residential",
  "specialized",
  "commercial",
]

export const services: Service[] = [
  {
    slug: "home-cleaning",
    name: "Home Cleaning",
    shortDescription:
      "Regular or one-off cleaning that keeps every room fresh, tidy and spotless.",
    longDescription:
      "Our most popular service. Vetted, fully-equipped professionals handle dusting, mopping, bathrooms, kitchens and living spaces — booked hourly or on a recurring schedule that fits your routine. Ideal for keeping a busy home consistently fresh without lifting a finger.",
    icon: Sparkles,
    category: "residential",
    priceFromAed: 35,
    duration: "2–4 hrs",
    popular: true,
    whatsIncluded: [
      "Dusting and surface wipe-down throughout",
      "Floor vacuuming and mopping",
      "Bathroom and kitchen sanitising",
      "Bed-making and general tidying",
      "Emptying bins and replacing liners",
      "Mirrors and glass surfaces polished",
    ],
    notIncluded: [
      "Interior wall or ceiling washing",
      "Inside oven and fridge (book Deep Clean or Kitchen & Appliances)",
      "Exterior windows or balcony façades",
      "Laundry and ironing (available as an add-on)",
    ],
    idealFor: "Apartments and villas needing routine upkeep",
    faqs: [
      {
        question: "How often should I book a home cleaning?",
        answer:
          "Most households book weekly or fortnightly to stay consistently fresh, but we also handle one-off cleans whenever you need them. Recurring bookings get priority scheduling and a familiar cleaner where possible.",
      },
      {
        question: "Do I need to provide cleaning supplies?",
        answer:
          "No. Our professionals arrive fully equipped with materials and machines. If you prefer we use your own products — for example for specific surfaces or allergies — just let us know when booking.",
      },
      {
        question: "Do I have to be home during the clean?",
        answer:
          "It's entirely up to you. Many customers provide access instructions and go about their day. All our staff are background-checked and fully insured for your peace of mind.",
      },
    ],
    image: {
      src: "/images/services/home-cleaning.png",
      alt: "A professional cleaner tidying a bright, modern living room in a UAE apartment",
    },
    metaDescription:
      "Reliable home cleaning across Dubai, Abu Dhabi and Sharjah from AED 35. Vetted, insured cleaners for regular or one-off apartment and villa cleaning. Book on WhatsApp.",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortDescription:
      "An intensive, top-to-bottom reset of your entire home, including hard-to-reach spots.",
    longDescription:
      "A thorough, detail-focused clean that goes far beyond the surface — descaling, degreasing, skirting boards, switches, door frames and the corners everyday cleaning misses. Recommended seasonally, before moving, or ahead of guests arriving for a genuinely refreshed home.",
    icon: SprayCan,
    category: "residential",
    priceFromAed: 299,
    duration: "4–7 hrs",
    popular: true,
    whatsIncluded: [
      "Detailed kitchen degreasing inside and out",
      "Bathroom descaling and grout cleaning",
      "Interior windows, sills and skirting boards",
      "Cleaning behind and under movable furniture",
      "Light fixtures, switches and door frames",
      "Cabinet fronts and high-touch points sanitised",
    ],
    notIncluded: [
      "Repair of damaged grout, sealant or fixtures",
      "Pest control or mould remediation",
      "Moving heavy furniture or appliances",
      "Exterior building façade or high-rise windows",
    ],
    idealFor: "Seasonal resets and pre-event preparation",
    faqs: [
      {
        question: "How is a deep clean different from a regular home clean?",
        answer:
          "A deep clean tackles built-up grime in places routine cleaning skips — inside appliances, behind furniture, grout lines, skirting and switches. It takes longer and resets your home to a like-new baseline.",
      },
      {
        question: "How long does a deep clean take?",
        answer:
          "Typically 4–7 hours depending on the size and condition of the property. For larger villas we may send a team so the job is completed efficiently in a single visit.",
      },
      {
        question: "How often should I schedule a deep clean?",
        answer:
          "Every three to six months works well for most homes, in addition to your regular cleaning. Many customers book one ahead of Ramadan, Eid, or before hosting guests.",
      },
    ],
    image: {
      src: "/images/services/deep-cleaning.png",
      alt: "A cleaner deep-cleaning a kitchen, scrubbing tiles and surfaces with professional equipment",
    },
    metaDescription:
      "Intensive deep cleaning in the UAE from AED 299. Top-to-bottom descaling, degreasing and detailing of your whole home by insured professionals. Book on WhatsApp.",
  },
  {
    slug: "move-in-move-out",
    name: "Move In / Move Out",
    shortDescription:
      "Hand back the keys spotless or settle into a freshly sanitised new home.",
    longDescription:
      "A complete property clean designed around tenancy handovers — meeting landlord and agency standards so you protect your deposit or move into a genuinely clean space. We cover every room, inside storage, and appliance interiors so the property is move-ready.",
    icon: Hammer,
    category: "specialized",
    priceFromAed: 399,
    duration: "5–8 hrs",
    whatsIncluded: [
      "Full property deep clean, room by room",
      "Inside cabinets, wardrobes and drawers",
      "Appliance exteriors and interiors",
      "Wall spot-cleaning, fixtures and fittings",
      "Bathroom and kitchen descaling",
      "Floors vacuumed, mopped and finished",
    ],
    notIncluded: [
      "Painting, patching or wall repairs",
      "Rubbish removal of large or bulky items",
      "Curtain and blind take-down or laundering",
      "Garden, balcony or external area cleaning",
    ],
    idealFor: "Tenants, landlords and property managers",
    faqs: [
      {
        question: "Will this clean help me get my deposit back?",
        answer:
          "Our move-out clean is built around the standards landlords and agencies expect at handover. While we can't guarantee a third party's decision, a professional clean significantly improves your chances of a full deposit return.",
      },
      {
        question: "Should I book before or after moving my furniture?",
        answer:
          "An empty property gives the best result, as we can reach every surface. If furniture is still present we'll clean thoroughly around it — just let us know the situation when booking.",
      },
      {
        question: "Do you clean inside appliances?",
        answer:
          "Yes. Appliance interiors — oven, fridge and microwave — are included, which is exactly what handover inspections tend to scrutinise.",
      },
    ],
    image: {
      src: "/images/services/move-in-move-out.png",
      alt: "An empty, freshly cleaned apartment with sunlight, ready for handover or move-in",
    },
    metaDescription:
      "Move in / move out cleaning in the UAE from AED 399. Tenancy-standard handover cleans, inside cabinets and appliances, to protect your deposit. Book on WhatsApp.",
  },
  {
    slug: "sofa-carpet-cleaning",
    name: "Sofa & Carpet Cleaning",
    shortDescription:
      "Deep extraction cleaning that lifts stains, dust and odours from upholstery.",
    longDescription:
      "Professional hot-water extraction and shampooing for sofas, mattresses, carpets and rugs — removing embedded dust, allergens and stains while protecting the fabric. A fresh, hygienic result with fabric-safe drying so soft furnishings look and feel renewed.",
    icon: Sofa,
    category: "specialized",
    priceFromAed: 149,
    duration: "1–3 hrs",
    popular: true,
    whatsIncluded: [
      "Vacuuming and fabric pre-treatment",
      "Hot-water extraction shampoo",
      "Targeted stain and odour treatment",
      "Fabric-safe controlled drying",
      "Cushion and crevice detailing",
      "Deodorising and freshening finish",
    ],
    notIncluded: [
      "Guaranteed removal of permanent or set-in dye stains",
      "Leather restoration or re-colouring",
      "Repair of torn seams or damaged fabric",
      "Disassembly of built-in or fixed furniture",
    ],
    idealFor: "Fabric sofas, mattresses, carpets and rugs",
    faqs: [
      {
        question: "How long does upholstery take to dry?",
        answer:
          "Most sofas and carpets are touch-dry within 4–6 hours and fully dry within 24, depending on fabric and airflow. We use controlled extraction to minimise moisture and speed up drying.",
      },
      {
        question: "Can you remove old or stubborn stains?",
        answer:
          "We treat stains with fabric-appropriate solutions and lift the large majority of them. Very old, set-in or dye-based stains may lighten rather than vanish — we'll always set realistic expectations before starting.",
      },
      {
        question: "Is the process safe for children and pets?",
        answer:
          "Yes. We use family- and pet-safe products, and once surfaces are dry they're completely safe for everyday use.",
      },
    ],
    image: {
      src: "/images/services/sofa-carpet-cleaning.png",
      alt: "A professional using a hot-water extraction machine to clean a fabric sofa",
    },
    metaDescription:
      "Sofa, mattress and carpet cleaning in the UAE from AED 149. Hot-water extraction that lifts stains, dust and odours with fabric-safe drying. Book on WhatsApp.",
  },
  {
    slug: "office-cleaning",
    name: "Office & Commercial",
    shortDescription:
      "Dependable cleaning for offices, retail and commercial spaces — after hours or on schedule.",
    longDescription:
      "Tailored commercial cleaning contracts that keep your workplace presentable and hygienic, with flexible scheduling, trained staff and consistent quality you can rely on. We work around your business hours so productivity is never interrupted.",
    icon: Building2,
    category: "commercial",
    priceFromAed: 45,
    duration: "Custom",
    whatsIncluded: [
      "Workstations, desks and common areas",
      "Pantry and washroom deep sanitising",
      "Waste removal and consumable restocking",
      "Floor care for hard floors and carpets",
      "Glass partitions and reception areas",
      "Flexible recurring or after-hours schedules",
    ],
    notIncluded: [
      "Specialist IT equipment or server-room cleaning",
      "Industrial or hazardous-material handling",
      "Exterior building or high-rise window cleaning",
      "Post-construction debris clearance",
    ],
    idealFor: "Offices, clinics, retail and showrooms",
    faqs: [
      {
        question: "Can you clean outside of business hours?",
        answer:
          "Absolutely. Most commercial clients prefer early-morning, evening or weekend visits so the workplace is spotless without disrupting staff or customers. We build the schedule around you.",
      },
      {
        question: "Do you offer ongoing contracts?",
        answer:
          "Yes. We set up daily, weekly or custom recurring contracts with consistent staff and an agreed scope, so quality and accountability stay high over time.",
      },
      {
        question: "How is pricing calculated for commercial spaces?",
        answer:
          "Pricing depends on area, frequency and scope. We provide a tailored quote after a quick conversation or site assessment — message us with your requirements to get started.",
      },
    ],
    image: {
      src: "/images/services/office-cleaning.png",
      alt: "A cleaner maintaining a modern open-plan office with desks and glass partitions",
    },
    metaDescription:
      "Office and commercial cleaning across the UAE from AED 45. Flexible after-hours contracts for offices, retail and clinics with trained, vetted staff. Book on WhatsApp.",
  },
  {
    slug: "kitchen-appliance-cleaning",
    name: "Kitchen & Appliances",
    shortDescription:
      "Degreasing and deep-cleaning of ovens, fridges and kitchen surfaces.",
    longDescription:
      "Targeted cleaning for the hardest-working room in the home — cutting through grease and build-up on ovens, hobs, fridges and cabinetry for a hygienic, sparkling kitchen. A focused service when the kitchen needs more attention than a standard clean provides.",
    icon: Refrigerator,
    category: "specialized",
    priceFromAed: 129,
    duration: "1–2 hrs",
    whatsIncluded: [
      "Oven and hob degreasing inside and out",
      "Fridge and freezer interior cleaning",
      "Cabinet fronts, handles and counters",
      "Sink, tap and backsplash sanitising",
      "Microwave interior and exterior",
      "Extractor hood and filter wipe-down",
    ],
    notIncluded: [
      "Dishwashing or putting away crockery",
      "Appliance repair or descaling of internal mechanics",
      "Moving or disconnecting plumbed appliances",
      "Pantry reorganisation or food disposal",
    ],
    idealFor: "Kitchens needing a focused refresh",
    faqs: [
      {
        question: "Do you empty the fridge before cleaning?",
        answer:
          "We clean the fridge interior and recommend removing perishable items beforehand. Our team will work carefully around anything left inside and return items neatly afterwards.",
      },
      {
        question: "Can you remove baked-on grease from the oven?",
        answer:
          "Yes. We use professional degreasers and proven techniques to break down baked-on residue on racks, trays and interior surfaces, leaving the oven hygienic and far easier to maintain.",
      },
      {
        question: "Is this service enough or should I book a deep clean?",
        answer:
          "If only the kitchen needs attention, this focused service is ideal. If the whole home needs a reset, our Deep Cleaning service covers the kitchen plus every other room.",
      },
    ],
    image: {
      src: "/images/services/kitchen-appliance-cleaning.png",
      alt: "A spotless modern kitchen with a freshly cleaned oven and gleaming countertops",
    },
    metaDescription:
      "Kitchen and appliance cleaning in the UAE from AED 129. Oven, hob and fridge degreasing for a hygienic, sparkling kitchen by insured pros. Book on WhatsApp.",
  },
  {
    slug: "ac-duct-cleaning",
    name: "AC & Duct Cleaning",
    shortDescription:
      "Improve air quality and cooling efficiency with professional AC servicing.",
    longDescription:
      "Cleaning and sanitising of AC units and ducts to remove dust, mould and allergens — improving indoor air quality and helping your cooling system run efficiently in the demanding UAE climate. Essential maintenance for healthier air and lower running costs.",
    icon: Wind,
    category: "specialized",
    priceFromAed: 199,
    duration: "2–4 hrs",
    whatsIncluded: [
      "Filter and grille cleaning",
      "Duct dust and debris removal",
      "Evaporator coil sanitising",
      "Anti-bacterial air-quality treatment",
      "Drainage and tray check and clean",
      "System airflow inspection",
    ],
    notIncluded: [
      "Gas refilling or refrigerant top-up",
      "Compressor or electrical component repair",
      "Replacement of damaged ducting or parts",
      "Full HVAC installation or relocation",
    ],
    idealFor: "Homes and offices in the UAE climate",
    faqs: [
      {
        question: "How often should AC and ducts be cleaned?",
        answer:
          "In the UAE climate, every 6–12 months is recommended. Regular cleaning maintains air quality, reduces allergens and helps the system cool efficiently while keeping energy costs down.",
      },
      {
        question: "Will cleaning improve cooling and reduce bills?",
        answer:
          "Often, yes. Dust-clogged filters and coils force the system to work harder. Cleaning restores airflow and efficiency, which can improve cooling performance and lower running costs.",
      },
      {
        question: "Do you repair AC units as well?",
        answer:
          "This service focuses on cleaning and sanitising for air quality and efficiency. We don't carry out mechanical repairs, gas refilling or part replacement, but we'll flag anything we notice during the visit.",
      },
    ],
    image: {
      src: "/images/services/ac-duct-cleaning.png",
      alt: "A technician cleaning a ceiling air-conditioning unit and filters",
    },
    metaDescription:
      "AC and duct cleaning in the UAE from AED 199. Remove dust, mould and allergens to improve air quality and cooling efficiency. Book on WhatsApp.",
  },
  {
    slug: "laundry-ironing",
    name: "Laundry & Ironing",
    shortDescription:
      "Wash, fold and ironing handled with care and returned fresh.",
    longDescription:
      "Convenient laundry and ironing handled by our team — washed, neatly folded and pressed so you get time back without the chore. Available as a standalone service or a simple add-on to your regular home cleaning.",
    icon: Shirt,
    category: "residential",
    priceFromAed: 25,
    duration: "Add-on",
    whatsIncluded: [
      "Washing and drying by fabric type",
      "Neat folding and sorting",
      "Professional ironing and pressing",
      "Delicate and special-care handling",
      "Sorting of lights, darks and colours",
      "Fresh, ready-to-wear finish",
    ],
    notIncluded: [
      "Dry cleaning of suits or formalwear",
      "Stain removal beyond standard washing",
      "Alterations, repairs or sewing",
      "Shoe or leather-goods cleaning",
    ],
    idealFor: "Busy households needing an add-on",
    faqs: [
      {
        question: "Can I add laundry to my regular home clean?",
        answer:
          "Yes — laundry and ironing work beautifully as an add-on to a home clean, so everything is handled in one visit. You can also book it as a standalone service.",
      },
      {
        question: "How do you handle delicate fabrics?",
        answer:
          "We sort by fabric type and follow care labels, using appropriate settings and gentle handling for delicates. Flag anything especially precious and we'll take extra care.",
      },
      {
        question: "Do you offer dry cleaning?",
        answer:
          "This service covers washing, folding and ironing. Specialist dry cleaning for suits and formalwear isn't included, but we're happy to advise on what's best for each item.",
      },
    ],
    image: {
      src: "/images/services/laundry-ironing.png",
      alt: "Neatly folded fresh laundry and pressed shirts stacked on a clean surface",
    },
    metaDescription:
      "Laundry and ironing in the UAE from AED 25. Wash, fold and professional pressing as a standalone service or add-on to your home clean. Book on WhatsApp.",
  },
]

/** Services flagged as popular, used for the home-page preview grid. */
export const popularServices = services.filter((s) => s.popular)

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

/** All slugs, for generateStaticParams and the sitemap. */
export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

/** Services grouped by category, honouring categoryOrder. */
export function getServicesByCategory(): {
  category: ServiceCategory
  label: string
  description: string
  items: Service[]
}[] {
  return categoryOrder
    .map((category) => ({
      category,
      label: categoryMeta[category].label,
      description: categoryMeta[category].description,
      items: services.filter((s) => s.category === category),
    }))
    .filter((group) => group.items.length > 0)
}

/**
 * Related services for internal linking on a detail page: prefer same-category
 * services, then top up with others, excluding the current service.
 */
export function getRelatedServices(slug: string, count = 3): Service[] {
  const current = getServiceBySlug(slug)
  if (!current) return services.slice(0, count)

  const sameCategory = services.filter(
    (s) => s.slug !== slug && s.category === current.category,
  )
  const others = services.filter(
    (s) => s.slug !== slug && s.category !== current.category,
  )

  return [...sameCategory, ...others].slice(0, count)
}
