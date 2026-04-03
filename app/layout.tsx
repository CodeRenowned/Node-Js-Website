import type { Metadata } from 'next'
import { Catamaran, Nunito_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const catamaran = Catamaran({
  subsets: ['latin'],
  variable: '--font-catamaran',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.coderenowned.com'),
  title: {
    default: 'Best SEO Agency for CMOs & Global Brands | CodeRenowned',
    template: '%s | CodeRenowned',
  },
  description:
    'CodeRenowned is the B2B SEO agency for ambitious brands, blending AI, AEO, and content strategy to drive authority, organic traffic, and revenue.',
  keywords: ['B2B SEO agency', 'SEO agency Bangalore', 'digital marketing agency'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.coderenowned.com',
    siteName: 'CodeRenowned',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@code_renowned',
    creator: '@code_renowned',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${catamaran.variable} ${nunitoSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
