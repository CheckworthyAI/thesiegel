import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CtaSection } from '@/components/cta-section'
import { BlogCard } from '@/components/blog-card'
import { BLOG_POSTS } from '@/lib/site-data'

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return { title: 'Article | The Siegel Law Group' }
  return {
    title: `${post.title} | The Siegel Law Group`,
    description: post.excerpt,
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 lg:pt-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              All Articles
            </Link>
            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="rounded-full bg-secondary px-3 py-1 font-medium text-primary">
                {post.category}
              </span>
              <span>{post.date}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
          </div>

          <div className="mx-auto mt-10 max-w-4xl px-4 sm:px-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={post.image || '/placeholder.svg'}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>
          </div>

          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-pretty text-lg leading-relaxed text-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-secondary/50 p-8 text-center">
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
                Disclaimer
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                This article is for informational purposes only and does not
                constitute legal advice. Please consult with a qualified
                attorney about your specific situation.
              </p>
            </div>
          </div>
        </article>

        <section className="border-t border-border bg-secondary/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
            <h2 className="text-balance font-serif text-2xl font-semibold text-foreground sm:text-3xl">
              More Articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} post={r} />
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
