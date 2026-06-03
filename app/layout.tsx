import type { Metadata } from 'next'
import { Henny_Penny, Josefin_Sans, Petit_Formal_Script, Style_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-josefin',
})

const petitFormal = Petit_Formal_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-petit-formal',
})

const styleScript = Style_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-style-script',
})

const hennyPenny = Henny_Penny({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-henny-penny',
})

export const metadata: Metadata = {
  title: 'Ishita Gautam — Creative Technologist & Designer',
  description:
    'The personal corner of Ishita Gautam — a creative technologist exploring game development, UI/UX, and creative coding with a soft spot for storytelling and design.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#fbe9ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${josefin.variable} ${petitFormal.variable} ${styleScript.variable} ${hennyPenny.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
