"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Star } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollY = window.scrollY
      const opacity = Math.max(1 - scrollY / 500, 0.2)
      const scale = Math.max(1 + scrollY * 0.0005, 1)
      const translateY = scrollY * 0.5

      if (heroRef.current.querySelector(".hero-image")) {
        const heroImage = heroRef.current.querySelector(".hero-image") as HTMLElement
        heroImage.style.opacity = opacity.toString()
        heroImage.style.transform = `scale(${scale}) translateY(${translateY}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/carpets/traditional-oriental-oval.jpg"
          alt="Hochwertiger orientalischer Teppich"
          fill
          priority
          className="object-cover opacity-30 hero-image transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-100/90 to-beige-50/95"></div>
      </div>

      <div className="container mx-auto px-4 py-20 z-10 relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <div className="bg-gold-400 text-brown-900 px-4 py-1 rounded-full text-sm font-medium tracking-wider flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>SEIT 1987 IHR TEPPICHSPEZIALIST</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-brown-800 mb-6 text-center leading-tight animate-fade-in animate-delay-100">
            Kunstvolle Teppiche <br className="hidden md:block" />
            <span className="text-forest-600">mit Tradition</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-center max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Willkommen in der Schwarzwald Teppichgalerie – Ihr Spezialist für hochwertige orientalische Teppiche,
            fachgerechte Restauration und schonende Reinigung seit über 30 Jahren.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in animate-delay-300">
            <Button
              asChild
              className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-6 text-lg rounded-full group btn-hover-slide"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Kostenlose Beratung anfragen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-sand-400 text-brown-700 hover:bg-sand-100 px-8 py-6 text-lg rounded-full"
            >
              <Link href="#services">Unsere Dienstleistungen</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 animate-fade-in animate-delay-400">
            <div className="flex flex-col items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">4.9/5 Kundenbewertung</p>
            </div>

            <div className="h-12 w-px bg-beige-200"></div>

            <div className="flex items-center gap-2">
              <div className="bg-beige-100 p-2 rounded-full">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Meisterbetrieb"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-brown-700">Zertifizierter</p>
                <p className="text-xs text-gray-600">Meisterbetrieb</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-beige-50">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  )
}
