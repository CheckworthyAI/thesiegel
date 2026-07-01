import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { NAV_LINKS, PRACTICE_AREAS, SITE } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="bg-[linear-gradient(180deg,#314b8f_0%,#25206f_45%,#1a174d_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="inline-flex rounded-2xl bg-white/95 p-3 shadow-lg shadow-black/15 ring-1 ring-white/30">
              <Image
                src="/the-siegel-law-group-logo.png"
                alt="The Siegel Law Group, P.A."
                width={266}
                height={110}
                className="h-14 w-auto"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/84">
              {SITE.tagline} Serving South Florida families and seniors for over
              22 years with compassionate estate planning and elder law.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/88 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white">
              Practice Areas
            </h3>
            <ul className="mt-4 space-y-2.5">
              {PRACTICE_AREAS.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/practice-areas/${area.slug}`}
                    className="text-sm text-white/88 transition-colors hover:text-white"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-base font-semibold text-white">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-white/88">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-white" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                </span>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-white" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-white" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-xs text-white/80 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-center sm:text-right">
            The information on this website is for general purposes only and is
            not legal advice. Contacting us does not create an attorney-client
            relationship.
          </p>
        </div>
      </div>
    </footer>
  )
}
