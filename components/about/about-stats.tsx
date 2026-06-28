const stats = [
  { value: "12,000+", label: "Properties cleaned" },
  { value: "4", label: "Emirates served" },
  { value: "98%", label: "Client satisfaction" },
  { value: "8+", label: "Years in the UAE" },
]

export function AboutStats() {
  return (
    <section aria-label="Pristine by the numbers" className="border-b border-border">
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card p-6 text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </dd>
              <p
                aria-hidden="true"
                className="text-sm font-medium leading-relaxed text-muted-foreground"
              >
                {stat.label}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
