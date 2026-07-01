type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-primary">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:py-24">
        {eyebrow && (
          <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-balance font-serif text-4xl font-semibold text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
