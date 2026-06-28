import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { teamMembers } from "@/lib/team"

export function AboutTeam() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="The people behind Pristine"
          title="Real people, accountable for your clean"
          description="A small, dedicated team you can put a name and a face to — because trust starts with knowing who you're dealing with."
        />

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <li
              key={member.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm shadow-black/5"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image.src || "/placeholder.svg"}
                  alt={member.image.alt}
                  fill
                  sizes="(min-width: 1024px) 18rem, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-5">
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {member.role}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
