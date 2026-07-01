import { Star } from 'lucide-react'
import type { Testimonial } from '@/lib/site-data'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm">
      <div className="flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-border pt-4">
        <p className="font-serif text-base font-semibold text-foreground">
          {testimonial.name}
        </p>
        <p className="text-sm text-muted-foreground">{testimonial.detail}</p>
      </figcaption>
    </figure>
  )
}
