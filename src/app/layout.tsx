import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/toaster"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aeteau College',
  description: 'nos nescio quomodo latine loqui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7525828152979976"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body className={`${inter.className} bg-gray-50`}>
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
