import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageSrc: string
}

export function Hero({ title, subtitle, ctaText, ctaLink, imageSrc }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/banner.png"
        layout="fill"
        objectFit="cover"
        alt="Hero background"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-0" />
      
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-semibold mb-6 tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-2xl font-light mb-10 max-w-2xl mx-auto text-gray-100">
          {subtitle}
        </p>
        <Button asChild size="lg" className="text-base font-medium tracking-wide px-8 py-4 rounded-full bg-white text-black hover:bg-gray-200">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  )
}
