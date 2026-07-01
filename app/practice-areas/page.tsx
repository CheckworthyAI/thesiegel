import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { PracticeAreaCard } from '@/components/practice-area-card'
import { PRACTICE_AREAS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Practice Areas | The Siegel Law Group',
  description:
    'Estate planning, elder law, Medicaid planning, probate, trusts, and asset protection for South Florida families and seniors.',
}

export default function PracticeAreasPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="How We Help"
          title="Our Practice Areas"
          description="From comprehensive estate plans to elder law and probate, we offer the full range of services your family needs to plan with confidence and protect what matters most."
        />
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
        </section>
        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
