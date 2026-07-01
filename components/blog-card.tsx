import Image from 'next/image'
import Link from 'next/link'
import type { BlogPost } from '@/lib/site-data'

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image || '/placeholder.svg'}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{post.date}</span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="mt-3 text-balance font-serif text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <span className="mt-5 text-sm font-medium text-primary">
          Read article
        </span>
      </div>
    </Link>
  )
}
