import type { Metadata } from 'next'
import { Unbounded, Onest } from 'next/font/google'
import Script from 'next/script'
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
      <head>
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=109497218', 'ym');
          ym(109497218, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
        `}</Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/109497218" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  )
}
