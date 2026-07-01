import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Check, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CtaSection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'
import { PRACTICE_AREAS, SITE } from '@/lib/site-data'

export function generateStaticParams() {
  return PRACTICE_AREAS.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const area = PRACTICE_AREAS.find((a) => a.slug === slug)
  if (!area) return { title: 'Practice Area | The Siegel Law Group' }
  return {
    title: `${area.title} | The Siegel Law Group`,
    description: area.excerpt,
  }
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const area = PRACTICE_AREAS.find((a) => a.slug === slug)
  if (!area) notFound()

  const related = PRACTICE_AREAS.filter((a) => a.slug !== area.slug).slice(0, 4)

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-primary">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-20">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/75 transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4" />
              All Practice Areas
            </Link>
            <p className="mt-8 font-serif text-sm uppercase tracking-[0.2em] text-accent">
              Practice Area
            </p>
            <h1 className="mt-3 text-balance font-serif text-4xl font-semibold text-primary-foreground sm:text-5xl">
              {area.title}
            </h1>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-primary-foreground/75">
              {area.excerpt}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-5">
                {area.description.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-pretty text-lg leading-relaxed text-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-10 rounded-2xl border border-border bg-card p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  How We Can Help
                </h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {area.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-2xl border border-border bg-primary p-8 text-center">
                  <h2 className="font-serif text-xl font-semibold text-primary-foreground">
                    Speak With an Attorney
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">
                    Schedule your free consultation and learn how we can protect
                    your family and your future.
                  </p>
                  <Button
                    size="lg"
                    className="mt-6 h-12 w-full bg-accent px-6 text-base text-accent-foreground [a]:hover:bg-accent/90"
                    render={<Link href="/contact" />}
                  >
                    Schedule a Consultation
                  </Button>
                  <a
                    href={SITE.phoneHref}
                    className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-primary-foreground transition-colors hover:text-accent"
                  >
                    <Phone className="size-4 text-accent" />
                    {SITE.phone}
                  </a>
                </div>

                <div className="rounded-2xl border border-border bg-card p-8">
                  <h2 className="font-serif text-lg font-semibold text-foreground">
                    Related Practice Areas
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {related.map((r) => (
                      <li key={r.slug}>
                        <Link
                          href={`/practice-areas/${r.slug}`}
                          className="text-sm font-medium text-primary transition-colors hover:text-accent"
                        >
                          {r.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
