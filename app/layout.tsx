import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { AiChatWidget } from '@/components/ai-chat-widget'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'The Siegel Law Group, P.A. | Boca Raton Estate Planning Attorneys',
    template: '%s | The Siegel Law Group, P.A.',
  },
  description:
    'Boca Raton estate planning, elder law, Medicaid planning, and probate attorneys serving South Florida families for over 22 years. Protect your assets, avoid probate, and secure your legacy. Free consultation available.',
  keywords: [
    'estate planning Boca Raton',
    'elder law attorney',
    'Medicaid planning Florida',
    'probate attorney',
    'wills and trusts',
    'asset protection',
  ],
  generator: 'v0.app',
  icons: {
    icon: '/favicon-monogram-real.png',
    apple: '/favicon-monogram-real.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#25206f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light bg-background">
      <body className="font-sans antialiased">
        {children}
        <AiChatWidget />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
