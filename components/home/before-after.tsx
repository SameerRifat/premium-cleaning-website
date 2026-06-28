"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useEffect, useState } from "react"

const included = [
  "Detailed, room-by-room checklist",
  "Kitchen degreasing and bathroom descaling",
  "Floors vacuumed, mopped and polished",
  "Dusting from skirting boards to high shelves",
  "Bring-your-own or we supply all equipment",
  "Final walkthrough so you're 100% happy",
]

const basePrompt =
  "photorealistic modern white kitchen with subway tile backsplash, undermount stainless steel sink, white cabinets, marble countertop, professional studio lighting, direct front view"

interface ImageState {
  before: string | null
  after: string | null
  loading: boolean
  error: boolean
}

function ImageSkeleton() {
  return (
    <div className="aspect-[3/4] rounded-xl bg-gradient-to-r from-muted via-background to-muted animate-pulse" />
  )
}

export function BeforeAfter() {
  const [images, setImages] = useState<ImageState>({
    before: null,
    after: null,
    loading: true,
    error: false,
  })

  useEffect(() => {
    const generateImages = async () => {
      try {
        const beforePrompt = `${basePrompt}, grimy grout, dirty dishes overflowing in sink, stained counters with spills, dim yellow lighting, cluttered surface with scattered items, dusty backsplash`

        const afterPrompt = `${basePrompt}, spotless surfaces, empty clean sink, bright natural lighting, herb plant and elegant soap dispenser on counter, perfectly organized, sparkling clean`

        // Generate both images in parallel
        const [beforeRes, afterRes] = await Promise.all([
          fetch(
            `https://image.pollinations.ai/prompt/${encodeURIComponent(beforePrompt)}`
          ),
          fetch(
            `https://image.pollinations.ai/prompt/${encodeURIComponent(afterPrompt)}`
          ),
        ])

        if (!beforeRes.ok || !afterRes.ok) {
          throw new Error("Failed to generate images")
        }

        // Get the image URLs from the response
        const beforeUrl = beforeRes.url
        const afterUrl = afterRes.url

        setImages({
          before: beforeUrl,
          after: afterUrl,
          loading: false,
          error: false,
        })
      } catch (error) {
        console.error("[v0] Image generation failed:", error)
        // Fallback to static images on error
        setImages({
          before: "/images/before-room.png",
          after: "/images/after-room.png",
          loading: false,
          error: true,
        })
      }
    }

    generateImages()
  }, [])

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow="The Pristine Difference"
            title="See the difference a professional clean makes"
            description="We don't just tidy up — we transform your space. Here's what's included in every standard clean."
          />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" />
                </span>
                <span className="leading-relaxed text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <figure className="flex flex-col gap-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
              {images.loading ? (
                <ImageSkeleton />
              ) : images.before ? (
                <Image
                  src={images.before}
                  alt="A grimy, cluttered kitchen before professional cleaning"
                  fill
                  sizes="(min-width: 1024px) 18rem, 45vw"
                  className="object-cover"
                  onError={() => {
                    // Fallback if generated image fails to load
                    setImages((prev) => ({
                      ...prev,
                      before: "/images/before-room.png",
                    }))
                  }}
                />
              ) : null}
              <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground">
                Before
              </span>
            </div>
          </figure>
          <figure className="mt-8 flex flex-col gap-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-border">
              {images.loading ? (
                <ImageSkeleton />
              ) : images.after ? (
                <Image
                  src={images.after}
                  alt="The same kitchen sparkling clean after professional cleaning"
                  fill
                  sizes="(min-width: 1024px) 18rem, 45vw"
                  className="object-cover"
                  onError={() => {
                    // Fallback if generated image fails to load
                    setImages((prev) => ({
                      ...prev,
                      after: "/images/after-room.png",
                    }))
                  }}
                />
              ) : null}
              <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                After
              </span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}
