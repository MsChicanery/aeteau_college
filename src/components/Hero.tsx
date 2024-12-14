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
    <section className="relative h-[80vh] flex items-center justify-center text-white">
      <Image
        src={imageSrc}
        layout="fill"
        objectFit="cover"
        alt="Hero background"
        className="brightness-50"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{subtitle}</p>
        <Button asChild size="lg">
          <Link href={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </section>
  )
}

