/**
 * The people behind Spotless UAE. Single source of truth shared by
 * the About page team section and the AboutPage/Organization structured data,
 * so the rendered team and the schema Person entities never drift apart.
 *
 * NOTE: Names, roles and bios are realistic PLACEHOLDERS reflecting the UAE's
 * multicultural professional context. Replace with the client's real team
 * before launch.
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

export const teamMembers: TeamMember[] = [
  {
    name: "Omar Al Farsi",
    role: "Founder & Managing Director",
    bio: "Founded Spotless UAE in 2016 after one too many unreliable cleaning experiences, and still personally reviews service standards.",
    image: {
      src: "/images/about/team-1.png",
      alt: "Omar Al Farsi, Founder and Managing Director of Spotless UAE",
    },
  },
  {
    name: "Priya Nair",
    role: "Head of Operations",
    bio: "Runs scheduling, logistics and quality across all four emirates so every booking arrives on time and fully equipped.",
    image: {
      src: "/images/about/team-2.png",
      alt: "Priya Nair, Head of Operations at Spotless UAE",
    },
  },
  {
    name: "Maria Santos",
    role: "Training & Quality Lead",
    bio: "Designs our vetting and training programme and signs off every cleaner before they ever enter a client's home.",
    image: {
      src: "/images/about/team-3.png",
      alt: "Maria Santos, Training and Quality Lead at Spotless UAE",
    },
  },
  {
    name: "Karim Hassan",
    role: "Customer Care Lead",
    bio: "The friendly voice on WhatsApp — coordinates bookings, handles requests and makes sure every clean ends with a happy home.",
    image: {
      src: "/images/about/team-4.png",
      alt: "Karim Hassan, Customer Care Lead at Spotless UAE",
    },
  },
]
