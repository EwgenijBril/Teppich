"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Startseite", href: "#hero" },
    { name: "Über uns", href: "#about" },
    { name: "Dienstleistungen", href: "#services" },
    { name: "Vorteile", href: "#advantages" },
    { name: "Kundenstimmen", href: "#testimonials" },
    { name: "Kontakt", href: "#contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-white bg-opacity-95 shadow-md py-2" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="#hero" className="flex items-center space-x-2">
          <div className="relative h-12 w-12 overflow-hidden">
            <div className="absolute inset-0 bg-forest-600 rounded-full flex items-center justify-center text-white font-serif text-xl">
              ST
            </div>
          </div>
          <div>
            <span className="block text-2xl font-serif font-bold text-brown-700 leading-tight">Schwarzwald</span>
            <span className="block text-sm text-brown-500 font-medium tracking-wider">TEPPICHGALERIE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-forest-600 transition-colors font-medium text-sm tracking-wide relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forest-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Button className="bg-forest-600 hover:bg-forest-700 text-white flex items-center gap-2 rounded-full px-5">
            <Phone className="h-4 w-4" />
            <span className="text-sm">Anrufen</span>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-forest-600 transition-colors py-2 font-medium border-b border-beige-100 flex justify-between items-center"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <span className="text-forest-600">›</span>
              </Link>
            ))}
            <Button className="bg-forest-600 hover:bg-forest-700 text-white flex items-center justify-center gap-2 w-full mt-2">
              <Phone className="h-4 w-4" />
              <span>Jetzt anrufen</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
