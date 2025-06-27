import Link from 'next/link'
import { FishIcon, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-[#c2ac2a] to-[#8e7b1a] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <FishIcon size={36} className="text-white drop-shadow" />
              <span className="text-2xl font-extrabold tracking-wide">Aeteau College</span>
            </Link>
            <p className="italic text-white/80">"nos nescio quomodo latine loqui"</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-1">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline hover:text-yellow-200 transition">About Us</Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:underline hover:text-yellow-200 transition">Admissions</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:underline hover:text-yellow-200 transition">Programs</Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:underline hover:text-yellow-200 transition">Campus Life</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-white/20 pb-1">Contact</h3>
            <address className="not-italic text-white/90 mb-2">
              Aeteau College<br />
              Monticello, Monticello, New York<br />
              Pacific Ocean
            </address>
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:info@aeteau.edu" className="hover:underline">info@aeteau.edu</a>
            </p>
            <p>
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:5551234567" className="hover:underline">(555) 123-4567</a>
            </p>
            <p>
              <span className="font-semibold">Hours:</span>{' '}
              Mon–Fri, 9:00am–5:00pm
            </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-white/20 text-center text-white/80 text-xs md:text-sm">
          <p>
            &copy; {new Date().getFullYear()} Aeteau College. All rights reserved. | 
            <Link href="/privacy" className="hover:underline ml-2">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:underline ml-2">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}