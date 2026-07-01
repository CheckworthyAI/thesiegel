import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CtaSection } from '@/components/cta-section'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Caught In The Middle | The Siegel Law Group',
  description:
    "Buy Barry Siegel's book, Caught In The Middle, a guide to juggling your elderly parents' affairs while raising your own family.",
}

const AMAZON_BOOK_URL =
  'https://www.amazon.com/dp/B0CD94ZTQ7?lv=shuf&channelId=751&ref_=cm_sw_r_cp_ud_dp_JBASTPEFMDRP9C8AXWR1_1&plpRedirect=mhFallback'

const TAKEAWAYS = [
  'How to start difficult conversations with aging parents',
  'Protecting your family savings from long-term care costs',
  'Navigating Medicaid and qualifying for benefits',
  'Avoiding the most common (and costly) planning mistakes',
  'Building a plan that protects every generation',
]

export default function BookPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-primary">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
                Available Now
              </p>
              <h1 className="mt-3 text-balance font-serif text-4xl font-semibold text-primary-foreground sm:text-5xl">
                Caught In The Middle
              </h1>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
                Juggling Your Elderly Parents&apos; Affairs While Raising Your
                Own Family
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/75">
                If you feel caught between caring for aging parents and raising
                your own children, you are not alone. This practical guide from
                attorney Barry D. Siegel offers compassionate, actionable advice
                for the sandwich generation.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  className="h-12 bg-accent px-7 text-base text-accent-foreground [a]:hover:bg-accent/90"
                  render={
                    <a
                      href={AMAZON_BOOK_URL}
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Buy Now
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src="/images/Caught_in_the_Middle_Book_Cover-Mockup4_resultado-transformed_resultado-2048x1983-1.webp"
                  alt="Cover of the book Caught In The Middle by Barry D. Siegel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 384px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-balance font-serif text-3xl font-semibold text-foreground">
                What You Will Learn
              </h2>
              <ul className="mt-8 space-y-4">
                {TAKEAWAYS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                      <Check className="size-3.5" />
                    </span>
                    <span className="leading-relaxed text-foreground">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                About the Author
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Barry D. Siegel is the founder and managing partner of The
                Siegel Law Group. For more than two decades he has dedicated his
                practice to helping South Florida families navigate estate
                planning, elder law, and the challenges of caring for aging
                loved ones.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                He wrote Caught In The Middle to give families a clear,
                compassionate roadmap through one of life&apos;s most difficult
                seasons.
              </p>
            </div>
          </div>
        </section>

        <CtaSection
          title="Buy Your Copy Today"
          description="Get Caught In The Middle on Amazon and start building a clearer plan for protecting your family."
          buttonLabel="Buy Now"
          buttonHref={AMAZON_BOOK_URL}
          buttonExternal
        />
      </main>
      <SiteFooter />
    </>
  )
}
