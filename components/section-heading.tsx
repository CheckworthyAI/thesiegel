import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  tone?: 'dark' | 'light'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
  tone = 'dark',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'mt-3 text-balance font-serif text-3xl font-semibold sm:text-4xl',
          tone === 'dark' ? 'text-foreground' : 'text-primary-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty leading-relaxed',
            tone === 'dark'
              ? 'text-muted-foreground'
              : 'text-primary-foreground/75',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
