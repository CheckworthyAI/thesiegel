import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE } from '@/lib/site-data'

type CtaSectionProps = {
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  buttonExternal?: boolean
}

export function CtaSection({
  title = "Is Your Family Prepared for Life's Curveballs?",
  description = 'Schedule your free, no-obligation consultation today. In-person or virtual appointments available, and we are here for you 24/7.',
  buttonLabel = 'Schedule a Free Consultation',
  buttonHref = '/contact',
  buttonExternal = false,
}: CtaSectionProps) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:py-20">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
          Your Law Firm For Life
        </p>
        <h2 className="mt-4 text-balance font-serif text-3xl font-semibold text-primary-foreground sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 bg-accent px-7 text-base text-accent-foreground [a]:hover:bg-accent/90"
            render={
              buttonExternal ? (
                <a
                  href={buttonHref}
                  target="_blank"
                  rel="noreferrer"
                />
              ) : (
                <Link href={buttonHref} />
              )
            }
          >
            {buttonLabel}
          </Button>
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-base font-medium text-primary-foreground transition-colors hover:text-accent"
          >
            <Phone className="size-5 text-accent" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
