'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FishIcon, MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Academics', 
    href: '#',
    subItems: [
      { name: 'Schools', href: '/schools' },
      { name: 'Programs', href: '/programs' },
      { name: 'Faculty', href: '/faculty' },
    ]
  },
  { 
    name: 'Campus Life', 
    href: '#',
    subItems: [
      { name: 'Dorms', href: '/dorms' },
      { name: 'Dining', href: '/dining' },
      { name: 'Activities', href: '/activities' },
    ]
  },
  { name: 'Admissions', href: '/admissions' },
  { name: 'About', href: '/about' },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white text-gray-800 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <FishIcon size={32} className="text-[#a2ca2c]" />
            <span className="text-2xl font-bold">Aeteau College</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 hover:text-[#a2ca2c] transition-colors">
                    <span>{item.name}</span>
                    <ChevronDownIcon size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name}>
                        <Link href={subItem.href} className="w-full">
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:text-[#a2ca2c] transition-colors ${pathname === item.href ? 'text-[#a2ca2c] font-semibold' : ''}`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          <div className="hidden md:block">
            <Button asChild variant="default">
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.name} className="flex flex-col items-center">
                  <span className="font-semibold mb-2">{item.name}</span>
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="py-1 hover:text-[#a2ca2c] transition-colors"
                      onClick={toggleMenu}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-[#a2ca2c] transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Button asChild variant="default">
              <Link href="/apply" onClick={toggleMenu}>Apply Now</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

