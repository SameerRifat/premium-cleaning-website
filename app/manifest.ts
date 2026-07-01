import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

/**
 * Web app manifest (served at /manifest.webmanifest). Next.js auto-injects the
 * <link rel="manifest"> tag. Icons are referenced as static /public paths — the
 * 192/512 PNGs live in /public, not /app, because manifest `src` values are
 * plain URLs and files under app/ are only exposed via the icon file convention.
 *
 * theme_color / background_color mirror the brand colors declared in
 * app/layout.tsx's `viewport`. Marks are full-bleed, so purpose is "any"
 * (no padded maskable variant yet).
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f7fafa',
    theme_color: '#11242b',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  }
}
