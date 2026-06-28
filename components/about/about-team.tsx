import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { teamMembers } from "@/lib/team"

export function AboutTeam() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
        <SectionHeading
          eyebrow="The people behind Pristine"
          title="Real people, accountable for your clean"
          description="A small, dedicated team you can put a name and a face to — because trust starts with knowing who you're dealing with."
        />

        <ul className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <li
              key={member.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm shadow-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image.src || "/placeholder.svg"}
                  alt={member.image.alt}
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Scrim for the overlaid name */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground/85 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-heading text-lg font-semibold leading-tight text-background">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-background/80">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="p-5 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
