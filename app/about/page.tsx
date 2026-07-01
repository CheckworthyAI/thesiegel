import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, HeartHandshake, ShieldCheck, Users } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { SectionHeading } from '@/components/section-heading'
import { TEAM, ASSOCIATIONS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About Us | The Siegel Law Group',
  description:
    'Meet the team at The Siegel Law Group, P.A. and learn how the firm helps South Florida families with estate planning, elder law, and probate and trust administration.',
}

const VALUES = [
  {
    icon: HeartHandshake,
    title: 'Compassion First',
    description:
      'We meet every client with patience, warmth, and genuine care, especially during difficult moments.',
  },
  {
    icon: ShieldCheck,
    title: 'Protecting Your Legacy',
    description:
      'We safeguard what you have built so it passes to the people you love, exactly as you intend.',
  },
  {
    icon: Award,
    title: 'Experience That Matters',
    description:
      'More than two decades of focused estate planning and elder law experience guide every plan.',
  },
  {
    icon: Users,
    title: 'A Firm For Life',
    description:
      'We build lasting relationships, supporting your family through every stage and life change.',
  },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="About The Firm"
          title="Your Law Firm For Life And Beyond"
          description="With over 100 years of combined experience, The Siegel Law Group helps South Florida families and seniors prepare for life’s biggest challenges through estate planning, elder law, and probate and trust administration."
        />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/Receptionist-Area.webp"
                alt="The warm, welcoming office of The Siegel Law Group"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
                Our Story
              </p>
              <h2 className="mt-3 text-balance font-serif text-3xl font-semibold text-foreground sm:text-4xl">
                Your Law Firm For Life
              </h2>
              <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
                <p>
                  At The Siegel Law Group, P.A., our mission is to be your law
                  firm for life and beyond. We believe every family deserves
                  clear guidance, thoughtful planning, and a legal team that is
                  ready to help before and during life&apos;s most important
                  transitions.
                </p>
                <p>
                  We help clients with estate planning, elder law, Medicaid
                  planning, and probate and trust administration. That focused
                  experience allows us to protect assets, prepare for long-term
                  care needs, and help families move forward with confidence.
                </p>
                <p>
                  Whether you are planning ahead or responding to an urgent
                  family need, our team is here to provide compassionate,
                  practical support every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary/50">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <SectionHeading
              eyebrow="What Guides Us"
              title="Our Core Values"
              description="The principles that shape how we serve every client and every family who walks through our doors."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-accent/20 text-primary">
                    <value.icon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <SectionHeading
            eyebrow="Meet The Team"
            title="The People Behind Your Plan"
            description="A dedicated team of attorneys and professionals committed to your family's peace of mind."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${
                      member.image?.includes('barry-siegel')
                        ? 'mix-blend-multiply'
                        : ''
                    }`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-accent-foreground/80">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary/50">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
            <p className="text-center font-serif text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Proud Members Of
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {ASSOCIATIONS.map((association) => (
                <span
                  key={association}
                  className="text-center font-serif text-base font-medium text-foreground"
                >
                  {association}
                </span>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
