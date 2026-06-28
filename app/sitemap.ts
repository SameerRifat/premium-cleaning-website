import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/services"

/**
 * Programmatic sitemap. Includes the home page, the services index, and every
 * service detail URL generated from the data model so new services are picked
 * up automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
