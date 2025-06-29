'use client'

import { useState, useEffect } from 'react'
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
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({})
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setIsMenuOpen(false), [pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSubMenu = (itemName: string) => {
    setExpandedMenus(prev => ({ ...prev, [itemName]: !prev[itemName] }))
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-2 hover:scale-110 transition-transform duration-300">
            <img src="/logo.png" alt="Site Logo" className="sm:w-6 md:w-8" style={{ width: 28 }}/>

            <span className="text-2xl font-extrabold tracking-tighter text-pink-600">Aeteau College</span>
          </Link>

          <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            {navItems.map((item) =>
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="group flex items-center space-x-1 text-base font-medium text-gray-700 hover:text-pink-500 transition-all hover:scale-105">
                    <span>{item.name}</span>
                    <ChevronDownIcon size={16} className="transition-transform group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white border border-pink-100 rounded-xl mt-2 shadow-lg">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} className="hover:bg-pink-50">
                        <Link href={subItem.href} className="w-full px-2 py-1.5 text-sm text-gray-700 hover:text-pink-500 transition-all">{subItem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium transition-all hover:text-pink-500 hover:scale-105 ${
                    pathname === item.href ? 'text-pink-600 underline decoration-wavy underline-offset-4' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          <div className="hidden md:flex">
            <Button
              asChild
              className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-pink-100 transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu} />

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white shadow-2xl z-40 transition-all duration-300 ease-in-out max-h-[85vh] overflow-y-auto rounded-b-3xl ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <nav className="flex flex-col items-center space-y-4 py-6 px-4">
          {navItems.map((item) => (
            <div key={item.name} className="w-full">
              {item.subItems ? (
                <>
                  <div onClick={() => toggleSubMenu(item.name)} className={`flex justify-between items-center py-2 px-4 rounded-xl cursor-pointer transition-all ${
                    expandedMenus[item.name] ? 'bg-pink-50 text-pink-500' : 'hover:bg-pink-50 hover:text-pink-400'
                  }`}>
                    <span className="text-lg font-semibold">{item.name}</span>
                    <ChevronDownIcon size={20} className={`transition-transform ${expandedMenus[item.name] ? 'rotate-180' : ''}`} />
                  </div>
                  <div className={`transition-all duration-300 pl-4 ${
                    expandedMenus[item.name] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={toggleMenu}
                        className={`block py-2 px-4 rounded-lg text-base transition-colors ${
                          pathname === subItem.href ? 'text-pink-500 font-semibold' : 'hover:text-pink-400'
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={toggleMenu}
                  className={`block py-3 px-4 rounded-xl text-lg transition-colors ${
                    pathname === item.href ? 'text-pink-500 font-bold' : 'hover:bg-pink-50 hover:text-pink-400'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="w-full px-4 pt-4">
            <Button asChild className="w-full bg-pink-500 hover:bg-pink-400 text-white py-3 rounded-full text-lg transition-all">
              <Link href="/apply" onClick={toggleMenu}>Apply Now</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
