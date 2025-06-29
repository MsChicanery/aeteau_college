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
    default: 'Aeteau College',
    template: '%s | Aeteau College',
  },
  description:
    'Aeteau College — empowering the next generation of innovators through rigorous academics, vibrant campus life, and a global alumni network.',
  metadataBase: new URL('https://aeteau.college'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aeteau College',
    description:
      'Discover your future at Aeteau College. Admissions open for Fall 2025.',
    url: 'https://aeteau.college',
    siteName: 'Aeteau College',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/banner.png',
        width: 1200,
        height: 630,
        alt: 'Aeteau College campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aeteau College',
    description:
      'Discover your future at Aeteau College. Admissions open for Fall 2025.',
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
