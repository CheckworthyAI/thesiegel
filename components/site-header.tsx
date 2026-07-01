'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, SITE } from '@/lib/site-data'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/the-siegel-law-group-logo.png"
            alt="The Siegel Law Group, P.A."
            width={266}
            height={110}
            className="h-12 w-auto sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-accent" />
            {SITE.phone}
          </a>
          <Button
            size="lg"
            className="h-10 px-4"
            render={<Link href="/contact" />}
          >
            Free Consultation
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-md px-3 py-3 text-base font-medium transition-colors',
                    active
                      ? 'bg-secondary text-primary'
                      : 'text-foreground hover:bg-secondary',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="mt-3 flex flex-col gap-3 border-t border-border/60 pt-4">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-2 px-3 text-base font-medium text-foreground"
              >
                <Phone className="size-4 text-accent" />
                {SITE.phone}
              </a>
              <Button
                size="lg"
                className="mx-3 h-11"
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
              >
                Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
