import type { Metadata } from 'next'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { TestimonialCard } from '@/components/testimonial-card'
import { Button } from '@/components/ui/button'
import { TESTIMONIALS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Client Reviews | The Siegel Law Group',
  description:
    'Read what South Florida families say about working with The Siegel Law Group for estate planning, elder law, and probate.',
}

const STATS = [
  { value: '4.9', label: 'Average Rating' },
  { value: '500+', label: 'Families Served' },
  { value: '22+', label: 'Years of Experience' },
]

export default function ReviewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Client Stories"
          title="Trusted by Families Across South Florida"
          description="Our greatest measure of success is the peace of mind we bring to the families we serve. Here is what some of them have to say."
        />

        <section className="border-b border-border bg-secondary/40">
          <div className="mx-auto grid max-w-4xl gap-8 px-4 py-12 text-center sm:grid-cols-3 sm:px-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl font-semibold text-primary">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-6 fill-current" />
              ))}
            </div>
            <p className="font-serif text-lg text-foreground">
              Rated 4.9 out of 5 across hundreds of client reviews
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-balance font-serif text-3xl font-semibold text-foreground">
              We Would Love to Hear From You
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              If we have had the privilege of serving your family, sharing your
              experience helps other families find the guidance they need.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 text-base"
                render={<Link href="/contact" />}
              >
                Share Your Experience
              </Button>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
