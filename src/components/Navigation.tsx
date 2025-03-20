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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close mobile menu when screen resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleSubMenu = (itemName: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [itemName]: !prev[itemName],
    }))
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link 
            href="/" 
            className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
          >
            <FishIcon size={28} className="text-[#a2ca2c] sm:size-6 md:size-8" />
            <span className="text-xl font-bold tracking-tight sm:text-2xl whitespace-nowrap">Aeteau College</span>
          </Link>
          
          <nav className="hidden md:flex space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              item.subItems ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="group flex items-center space-x-1 hover:text-[#a2ca2c] transition-all hover:scale-105 text-sm lg:text-base">
                    <span>{item.name}</span>
                    <ChevronDownIcon 
                      size={16} 
                      className="transition-transform duration-200 group-data-[state=open]:rotate-180" 
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/95 backdrop-blur-sm border border-gray-100 w-48">
                    {item.subItems.map((subItem) => (
                      <DropdownMenuItem 
                        key={subItem.name} 
                        className="focus:text-[#a2ca2c]"
                      >
                        <Link 
                          href={subItem.href} 
                          className="w-full py-2 hover:text-[#a2ca2c] transition-colors text-sm lg:text-base"
                        >
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
                  className={`relative hover:text-[#a2ca2c] transition-all hover:scale-105 text-sm lg:text-base
                    ${pathname === item.href ? 
                      'text-[#a2ca2c] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#a2ca2c]' 
                      : ''
                    }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          <div className="hidden md:flex space-x-2">
            <Button 
              asChild 
              variant="default" 
              size="sm"
              className="bg-[#a2ca2c] hover:bg-[#8fb826] text-white hover:scale-105 transition-transform duration-200 lg:text-base"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu with overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      <div 
        className={`md:hidden fixed top-16 sm:top-20 left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out max-h-[85vh] overflow-y-auto ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6 px-4">
          {navItems.map((item) => (
            <div key={item.name} className="w-full">
              {item.subItems ? (
                <>
                  <div 
                    className={`flex justify-between items-center py-2 px-4 rounded-md cursor-pointer transition-colors
                      ${expandedMenus[item.name] ? 'bg-gray-50 text-[#a2ca2c]' : 'hover:bg-gray-50 hover:text-[#a2ca2c]'}`}
                    onClick={() => toggleSubMenu(item.name)}
                  >
                    <span className="font-semibold text-lg">{item.name}</span>
                    <ChevronDownIcon 
                      size={20} 
                      className={`transition-transform duration-300 ${
                        expandedMenus[item.name] ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div 
                    className={`transition-all duration-300 ${
                      expandedMenus[item.name] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className={`block py-3 px-8 transition-colors ${
                          pathname === subItem.href ? 'text-[#a2ca2c] font-semibold' : 'hover:text-[#a2ca2c]'
                        }`}
                        onClick={toggleMenu}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block py-3 px-4 rounded-md transition-colors text-lg ${
                    pathname === item.href ? 'text-[#a2ca2c] font-semibold' : 'hover:bg-gray-50 hover:text-[#a2ca2c]'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="w-full px-4 pt-4">
            <Button 
              asChild 
              variant="default" 
              className="w-full bg-[#a2ca2c] hover:bg-[#8fb826] text-white py-3 text-lg"
            >
              <Link href="/apply" onClick={toggleMenu}>Apply Now</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}