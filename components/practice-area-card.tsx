import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { PracticeArea } from '@/lib/site-data'

export function PracticeAreaCard({ area }: { area: PracticeArea }) {
  return (
    <Link
      href={`/practice-areas/${area.slug}`}
      className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
          {area.title}
        </h3>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight className="size-4" />
        </span>
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {area.excerpt}
      </p>
      <span className="mt-5 text-sm font-medium text-primary">
        Learn more
      </span>
    </Link>
  )
}
