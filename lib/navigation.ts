/** Primary navigation. Service Areas and Reviews intentionally have no dedicated
 * routes (confirmed product decision) — their content lives on the Home page. */
export const navItems = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const
