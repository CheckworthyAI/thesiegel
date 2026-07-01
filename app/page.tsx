import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  Clock,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CtaSection } from '@/components/cta-section'
import { SectionHeading } from '@/components/section-heading'
import { PracticeAreaCard } from '@/components/practice-area-card'
import { TestimonialCard } from '@/components/testimonial-card'
import { BlogCard } from '@/components/blog-card'
import { ConsultationForm } from '@/components/consultation-form'
import { Button } from '@/components/ui/button'
import {
  ASSOCIATIONS,
  BLOG_POSTS,
  PRACTICE_AREAS,
  SITE,
  TESTIMONIALS,
} from '@/lib/site-data'

const trustPoints = [
  {
    icon: ShieldCheck,
    title: '22+ Years of Service',
    text: 'Trusted by thousands of South Florida families since 2002.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Solutions',
    text: 'Custom plans tailored to your family — never one-size-fits-all.',
  },
  {
    icon: Clock,
    title: 'Available 24/7',
    text: "By your side whenever you need us, in person or virtually.",
  },
]

const steps = [
  {
    number: '01',
    title: 'Learn About You',
    text: 'During a free, no-obligation consultation, we take the time to understand you, your family, and your goals.',
  },
  {
    number: '02',
    title: 'Create A Plan',
    text: 'We craft a custom plan for you and your loved ones, keeping you informed and confident every step of the way.',
  },
  {
    number: '03',
    title: 'Relax & Enjoy',
    text: 'We put your plan in motion so you can sit back, relax, and enjoy the best years of your life with peace of mind.',
  },
]

const whyChoose = [
  'Trusted by thousands of Florida families for 23+ years',
  '24/7 availability — we are here when you need us most',
  'Customized estate plans, never one-size-fits-all',
  'Probate avoidance and asset protection',
  'Free initial consultation with no hidden fees',
  'In-person or virtual appointments',
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
                Boca Raton Estate Planning &amp; Elder Law
              </p>
              <h1 className="mt-5 text-balance font-serif text-4xl font-semibold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl">
                Your Family. Your Future. Your Legacy.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
                Compassionate legal guidance to secure your assets, avoid
                probate, and plan for long-term care — protecting what matters
                most for generations to come.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="h-12 bg-accent px-7 text-base text-accent-foreground [a]:hover:bg-accent/90"
                  render={<Link href="/contact" />}
                >
                  Schedule a Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground [a]:hover:bg-primary-foreground/10 [a]:hover:text-primary-foreground"
                  render={<Link href="/practice-areas" />}
                >
                  Explore Practice Areas
                </Button>
              </div>
              <a
                href={SITE.phoneHref}
                className="mt-6 inline-flex items-center gap-2 text-base font-medium text-primary-foreground transition-colors hover:text-accent"
              >
                <Phone className="size-5 text-accent" />
                Call us 24/7 — {SITE.phone}
              </a>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-primary-foreground/10 shadow-2xl">
                <Image
                  src="/images/hero-family.png"
                  alt="A happy multigenerational family enjoying time together"
                  width={720}
                  height={820}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-card p-5 shadow-xl sm:block">
                <p className="font-serif text-3xl font-semibold text-primary">
                  100+
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years of combined
                  <br />
                  legal experience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <point.icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practice areas */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How We Help"
            title="Our Practice Areas"
            description="From wills and trusts to elder law and Medicaid planning, our compassionate team explores every option to safeguard you and your loved ones."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRACTICE_AREAS.slice(0, 6).map((area) => (
              <PracticeAreaCard key={area.slug} area={area} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              size="lg"
              variant="outline"
              className="h-11 px-6"
              render={<Link href="/practice-areas" />}
            >
              View All Practice Areas
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* Attorney intro */}
        <section className="bg-secondary/50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="relative order-last lg:order-first">
              <div className="overflow-hidden rounded-2xl bg-secondary shadow-xl">
                <Image
                  src="/images/barry-siegel.png"
                  alt="Barry D. Siegel, Esq., Managing Partner"
                  width={620}
                  height={720}
                  className="h-full w-full object-cover mix-blend-multiply"
                />
              </div>
            </div>
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
                Meet Your Attorney
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Barry D. Siegel, Esq.
              </h2>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Managing Partner / Shareholder
              </p>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  &ldquo;I started this law firm because I wanted to provide
                  compassionate and effective legal representation to Florida
                  families, seniors, and their loved ones.&rdquo;
                </p>
                <p>
                  Over our 100+ combined years serving Boca Raton and South
                  Florida, we have earned a reputation for high-quality,
                  personal service — helping thousands of individuals achieve
                  true peace of mind.
                </p>
                <p>
                  &ldquo;My hope is that we can be your law firm for life… and
                  beyond. We&apos;d be honored to work with you.&rdquo;
                </p>
              </div>
              <Button
                size="lg"
                className="mt-8 h-11 px-6"
                render={<Link href="/about" />}
              >
                Learn More About Barry
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why choose */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="A Firm That Treats You Like Family"
                description="With over 100+ years of combined legal experience, we provide personalized estate planning, elder law, and probate solutions tailored to your family's needs."
                align="left"
              />
              <Button
                size="lg"
                className="mt-8 h-11 px-6"
                render={<Link href="/contact" />}
              >
                Get Started Today
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {whyChoose.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" />
                  <span className="text-sm leading-relaxed text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Our Process"
              title="Securing Your Legacy in Three Simple Steps"
              tone="light"
            />
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <span className="font-serif text-5xl font-semibold text-accent">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-primary-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-primary-foreground/75">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Book promo */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 rounded-2xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-2">
            <div className="flex justify-center">
              <Image
                src="/images/Caught_in_the_Middle_Book_Cover-Mockup4_resultado-transformed_resultado-2048x1983-1.webp"
                alt="Caught In The Middle book by Barry Siegel"
                width={400}
                height={520}
                className="h-auto w-64 rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
                Now Available
              </p>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground">
                Caught In The Middle
              </h2>
              <p className="mt-2 font-medium text-muted-foreground">
                Juggling Your Elderly Parents&apos; Affairs While Raising Your
                Own Family
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                In his new book, founder Barry Siegel shares the perspectives
                behind his firm&apos;s commitment to helping families avoid
                unnecessary, preventable hardships related to long-term care and
                the preservation of assets.
              </p>
              <Button
                size="lg"
                className="mt-8 h-11 px-6"
                render={
                  <a
                    href="https://www.amazon.com/dp/B0CD94ZTQ7?lv=shuf&channelId=751&ref_=cm_sw_r_cp_ud_dp_JBASTPEFMDRP9C8AXWR1_1&plpRedirect=mhFallback"
                    target="_blank"
                    rel="noreferrer"
                  />
                }
              >
                Buy Now
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Real Clients, Real Reviews"
              title="Our Clients Love Us"
              description="We could not do what we do without the families who trust us with their legacies."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-6"
                render={<Link href="/reviews" />}
              >
                Read More Reviews
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact split */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="Start Your Journey to Peace of Mind Today"
                description="Ask a question, describe your situation, or request a free consultation. Contact us and we'll tell you everything you need to know."
                align="left"
              />
              <div className="mt-8 flex items-center gap-3">
                <Users className="size-5 text-accent" />
                <span className="text-sm text-muted-foreground">
                  Serving Boca Raton and all of South Florida
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {ASSOCIATIONS.map((a) => (
                  <span
                    key={a}
                    className="text-sm font-medium text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <ConsultationForm />
          </div>
        </section>

        {/* Blog */}
        <section className="bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Insights"
              title="Our Latest Blogs"
              description="Practical guidance to help you protect your family and plan with confidence."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {BLOG_POSTS.slice(0, 3).map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button
                size="lg"
                variant="outline"
                className="h-11 px-6"
                render={<Link href="/blog" />}
              >
                Visit the Blog
                <ArrowRight className="size-4" />
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
