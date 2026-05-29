import type { Metadata } from 'next'
import { Unbounded, Onest } from 'next/font/google'
import './globals.css'

const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700', '900'],
  variable: '--font-unbounded',
  display: 'swap',
})

const onest = Onest({
  subsets: ['cyrillic', 'latin'],
  weight: ['300', '400', '500'],
  variable: '--font-onest',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'сантехника • етм — инженерные решения для дома и бизнеса',
  description: 'Магазин сантехники в Евпатории. Подберём всё для ремонта без ошибок. Звоните — объясним простым языком.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: 'https://сантехника-етм.рф',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${unbounded.variable} ${onest.variable}`}>
      <body>{children}</body>
    </html>
  )
}
