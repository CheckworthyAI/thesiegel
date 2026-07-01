import type { Metadata } from 'next'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { ConsultationForm } from '@/components/consultation-form'
import { SITE } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contact Us | The Siegel Law Group',
  description:
    'Schedule your free consultation with The Siegel Law Group in Boca Raton. In-person and virtual appointments available, and we are here for you 24/7.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Get In Touch"
          title="Schedule Your Free Consultation"
          description="We would be honored to help you protect your family and your future. Reach out today, in-person and virtual appointments are available, and we are here for you 24/7."
        />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Contact Information
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Prefer to talk now? Call us any time, day or night. Our team is
                always available to answer your questions.
              </p>

              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="font-serif text-base font-semibold text-foreground">
                      Phone
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <Mail className="size-5" />
                  </span>
                  <div>
                    <p className="font-serif text-base font-semibold text-foreground">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="font-serif text-base font-semibold text-foreground">
                      Office
                    </p>
                    <p className="text-muted-foreground">
                      {SITE.address.line1}
                      <br />
                      {SITE.address.line2}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <p className="font-serif text-base font-semibold text-foreground">
                      Hours
                    </p>
                    <p className="text-muted-foreground">
                      Available 24/7 by phone
                      <br />
                      Office: Mon–Fri, 9:00 AM – 5:00 PM
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <iframe
                  title="Map to The Siegel Law Group office"
                  src="https://www.google.com/maps?q=2500+N+Military+Trail+Boca+Raton+FL+33431&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Request Your Consultation
              </h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Fill out the form below and a member of our team will reach out
                to schedule your free, no-obligation consultation.
              </p>
              <ConsultationForm className="mt-6" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
