import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

/**
 * Robots policy. Allows all crawlers and points to the sitemap, which is the
 * canonical place we declare indexable URLs.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  }
}
