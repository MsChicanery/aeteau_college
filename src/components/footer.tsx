import Link from 'next/link'
import { FishIcon } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#c2ac2a] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <FishIcon size={32} />
              <span className="text-2xl font-bold">Aeteau College</span>
            </Link>
            <p>"nos nescio quomodo latine loqui"</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/campus-life">Campus Life</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Located in the Pacific Ocean,</p>
            <p>Monticello,Monticello, New York</p>
            <p>Email: info@aeteau.edu</p>
            <p>Phone: (555) 123-4567</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>&copy; {new Date().getFullYear()} Aeteau College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

