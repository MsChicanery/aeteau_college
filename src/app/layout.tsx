import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Aeteau University',
    template: '%s | Aeteau University',
  },
  description:
    'Aeteau University — empowering the next generation of innovators through rigorous academics, vibrant campus life, and a global alumni network.',
  metadataBase: new URL('https://aeteau.edu'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aeteau University',
    description:
      'Discover your future at Aeteau University. Admissions open for Fall 2025.',
    url: 'https://aeteau.edu',
    siteName: 'Aeteau University',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aeteau University campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aeteau University',
    description:
      'Discover your future at Aeteau University. Admissions open for Fall 2025.',
    images: ['/banner.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 antialiased`}>
        <Navigation />
        <main className="pt-20 min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
        <Toaster />
        <SpeedInsights />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7525828152979976"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  )
}
