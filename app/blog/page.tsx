import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { PageHero } from '@/components/page-hero'
import { CtaSection } from '@/components/cta-section'
import { BlogCard } from '@/components/blog-card'
import { BLOG_POSTS } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Blog & Resources | The Siegel Law Group',
  description:
    'Insights on estate planning, elder law, Medicaid, and probate for South Florida families from the attorneys at The Siegel Law Group.',
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Insights & Resources"
          title="From Our Blog"
          description="Practical guidance and timely insights on estate planning, elder law, and protecting your family's future in Florida."
        />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-lg lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image || '/placeholder.svg'}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-10">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-3 py-1 font-medium text-primary">
                  {featured.category}
                </span>
                <span>{featured.date}</span>
                <span aria-hidden>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="mt-4 text-balance font-serif text-2xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <span className="mt-6 text-sm font-medium text-primary">
                Read article
              </span>
            </div>
          </Link>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  )
}
