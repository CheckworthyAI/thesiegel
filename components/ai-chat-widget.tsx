'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X, Send, Sparkles } from 'lucide-react'
import { SITE } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const SUGGESTED_PROMPTS = [
  'What does your firm do?',
  'Do I really need a living trust?',
  'What is Medicaid planning?',
  'How do I avoid probate in Florida?',
]

export function AiChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isBusy = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open, isBusy])

  function submit(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isBusy) return
    sendMessage({ text: trimmed })
    setInput('')
  }

  return (
    <>
      {/* Launcher button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={open}
        className={cn(
          'fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-accent-foreground/10 bg-accent text-accent-foreground shadow-lg shadow-accent/35 transition-all duration-300 hover:scale-105 hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background md:bottom-8 md:right-8',
          open && 'rotate-90',
        )}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-accent" />
          </span>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={cn(
          'fixed bottom-24 right-5 z-50 flex w-[calc(100vw-2.5rem)] max-w-sm origin-bottom-right flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 md:bottom-28 md:right-8',
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0',
        )}
        role="dialog"
        aria-label="Chat with the Siegel Law Group assistant"
        style={{ height: 'min(32rem, calc(100vh - 8rem))' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-border bg-primary px-4 py-3 text-primary-foreground">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/15">
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <div className="min-w-0">
            <p className="font-serif text-base font-semibold leading-tight">
              Ask Ellie
            </p>
            <p className="text-xs text-primary-foreground/70">
              Estate planning assistant
            </p>
          </div>
          <span className="ml-auto flex items-center gap-1.5 text-xs text-primary-foreground/80">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Online
          </span>
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 space-y-4 overflow-y-auto px-4 py-4"
        >
          {messages.length === 0 && (
            <div className="space-y-4">
              <div className="rounded-2xl rounded-tl-sm bg-muted px-4 py-3 text-sm leading-relaxed text-foreground">
                Hi there! I&apos;m Ellie, the virtual assistant for The Siegel
                Law Group. I can explain how we help families with estate
                planning, elder law, and probate. What can I help you with?
              </div>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => submit(prompt)}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-secondary"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex',
                message.role === 'user' ? 'justify-end' : 'justify-start',
              )}
            >
              <div
                className={cn(
                  'max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed',
                  message.role === 'user'
                    ? 'rounded-br-sm bg-primary text-primary-foreground'
                    : 'rounded-tl-sm bg-muted text-foreground',
                )}
              >
                {message.parts.map((part, index) =>
                  part.type === 'text' ? (
                    <span key={index}>{part.text}</span>
                  ) : null,
                )}
              </div>
            </div>
          ))}

          {status === 'submitted' && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-muted px-4 py-3">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/50" />
              </div>
            </div>
          )}

          {error && (
            <div className="rounded-2xl rounded-tl-sm bg-destructive/10 px-4 py-3 text-sm leading-relaxed text-foreground">
              Sorry, I&apos;m having trouble connecting right now. Please try
              again in a moment, or call us anytime at{' '}
              <a href={SITE.phoneHref} className="font-semibold underline">
                {SITE.phone}
              </a>
              .
            </div>
          )}
        </div>

        {/* Input */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            submit(input)
          }}
          className="border-t border-border bg-card p-3"
        >
          <div className="flex items-end gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (
                  e.key === 'Enter' &&
                  !e.shiftKey &&
                  !e.nativeEvent.isComposing &&
                  e.keyCode !== 229
                ) {
                  e.preventDefault()
                  submit(input)
                }
              }}
              rows={1}
              placeholder="Type your question..."
              aria-label="Type your question"
              className="max-h-28 flex-1 resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="submit"
              disabled={!input.trim() || isBusy}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-center text-[11px] leading-tight text-muted-foreground">
            Ellie provides general information, not legal advice.
          </p>
        </form>
      </div>
    </>
  )
}
