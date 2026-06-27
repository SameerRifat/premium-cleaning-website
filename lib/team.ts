/**
 * Leadership team for the About page. Consumed by both the Team section and the
 * Organization JSON-LD (`employee` list), so names/roles stay in sync.
 *
 * NOTE: Placeholder people for "Pristine Home Services" — realistic names for
 * the UAE's multicultural professional context. Replace with the client's real
 * team before launch.
 */

export type TeamMember = {
  name: string
  role: string
  bio: string
  image: {
    src: string
    alt: string
  }
}

export const team: TeamMember[] = [
  {
    name: "Omar Al-Mansoori",
    role: "Founder & CEO",
    bio: "Started Pristine after struggling to find a cleaner he trusted with the keys to his own Dubai apartment.",
    image: {
      src: "/images/team/founder.png",
      alt: "Omar Al-Mansoori, Founder and CEO of Pristine Home Services",
    },
  },
  {
    name: "Priya Nair",
    role: "Head of Operations",
    bio: "Keeps every booking running on time and every cleaner where they need to be across all three emirates.",
    image: {
      src: "/images/team/operations.png",
      alt: "Priya Nair, Head of Operations at Pristine Home Services",
    },
  },
  {
    name: "Maria Santos",
    role: "Head of Quality",
    bio: "Trains our professionals and signs off on the standards behind every single visit.",
    image: {
      src: "/images/team/quality.png",
      alt: "Maria Santos, Head of Quality at Pristine Home Services",
    },
  },
  {
    name: "Bilal Ahmed",
    role: "Customer Experience Lead",
    bio: "Your first point of contact on WhatsApp — from the first hello to the final shine.",
    image: {
      src: "/images/team/customer-experience.png",
      alt: "Bilal Ahmed, Customer Experience Lead at Pristine Home Services",
    },
  },
]
