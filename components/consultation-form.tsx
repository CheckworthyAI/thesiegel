'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fieldClass =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

export function ConsultationForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center rounded-xl border border-border bg-card p-10 text-center',
          className,
        )}
      >
        <span className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl font-semibold text-foreground">
          Thank You
        </h3>
        <p className="mt-2 max-w-sm leading-relaxed text-muted-foreground">
          We have received your request and a member of our team will reach out
          to you shortly to schedule your free consultation.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8',
        className,
      )}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            required
            className={fieldClass}
            placeholder="Jane"
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            required
            className={fieldClass}
            placeholder="Doe"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="jane@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
            placeholder="(561) 555-0100"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="help" className={labelClass}>
          What do you need help with?
        </label>
        <select id="help" name="help" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Please choose an option
          </option>
          <option>Estate Planning</option>
          <option>Probate &amp; Trust Administration</option>
          <option>Elder Law &amp; Medicaid Planning</option>
          <option>Asset Protection</option>
          <option>Something Else</option>
        </select>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="plan" className={labelClass}>
            Do you have an Estate Plan?
          </label>
          <select id="plan" name="plan" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Please choose an option
            </option>
            <option>I have a Living Trust</option>
            <option>I have a Will</option>
            <option>I have both</option>
            <option>I have neither</option>
          </select>
        </div>
        <div>
          <label htmlFor="estate" className={labelClass}>
            Approximate value of your estate
          </label>
          <select
            id="estate"
            name="estate"
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Please choose an option
            </option>
            <option>Less than $250,000</option>
            <option>$250,000 – $1M</option>
            <option>$1M – $5M</option>
            <option>$5M – $10M</option>
            <option>$10M+</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className={labelClass}>
          Describe your situation
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={fieldClass}
          placeholder="Tell us a little about how we can help…"
        />
      </div>

      <label className="mt-4 flex items-start gap-2.5 text-sm text-muted-foreground">
        <input
          type="checkbox"
          required
          className="mt-0.5 size-4 rounded border-border accent-primary"
        />
        <span>
          I consent to receive SMS messages and communications from The Siegel
          Law Group, P.A.
        </span>
      </label>

      <Button type="submit" size="lg" className="mt-6 h-12 w-full text-base">
        Request My Free Consultation
      </Button>
    </form>
  )
}
