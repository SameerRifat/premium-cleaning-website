const stats = [
  { value: "12,000+", label: "Properties cleaned" },
  { value: "2", label: "Emirates served" },
  { value: "98%", label: "Client satisfaction" },
  { value: "8+", label: "Years in the UAE" },
]

export function AboutStats() {
  return (
    <section
      aria-label="Pristine by the numbers"
      className="relative overflow-hidden bg-ink text-ink-foreground"
    >
      {/* Subtle depth wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_30rem_at_15%_120%,oklch(0.58_0.094_195/0.28),transparent)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="mb-10 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-end">
          <span className="h-px w-8 bg-primary-end" />
          Pristine by the numbers
        </p>

        <dl className="grid grid-cols-2 gap-x-2 gap-y-10 sm:gap-y-12 lg:grid-cols-4">
          {stats.map((stat, index) => {
            // Center divider on mobile (2-col), full dividers on desktop (4-col).
            const divider =
              index === 1 || index === 3
                ? "border-l border-ink-foreground/15"
                : index === 2
                  ? "lg:border-l lg:border-ink-foreground/15"
                  : ""
            return (
              <div
                key={stat.label}
                className={`flex min-w-0 flex-col gap-2 px-3 sm:px-6 lg:px-8 ${divider}`}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-4xl font-bold leading-none tracking-tight text-ink-foreground sm:text-6xl">
                  {stat.value}
                </dd>
                <p
                  aria-hidden="true"
                  className="text-sm font-medium leading-relaxed text-ink-muted"
                >
                  {stat.label}
                </p>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
