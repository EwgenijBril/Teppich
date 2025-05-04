"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const revealElements = sectionRef.current?.querySelectorAll(".reveal")
    revealElements?.forEach((el) => observer.observe(el))

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-beige-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-forest-600 font-medium mb-2 tracking-wider reveal">ÜBER UNS</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-700 mb-4 reveal">
            Über die Schwarzwald Teppichgalerie
          </h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto reveal"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold-400 rounded-lg z-0"></div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl z-10 image-zoom">
              <Image
                src="/placeholder.svg?height=1000&width=800"
                alt="Handwerksmeister bei der Teppichrestauration"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-pattern-oriental opacity-10 rounded-full"></div>

            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-lg shadow-lg z-20 reveal">
              <p className="text-4xl font-serif font-bold text-forest-600">35+</p>
              <p className="text-sm text-gray-600">Jahre Erfahrung</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed reveal">
              <span className="font-serif text-2xl text-brown-600">Seit 1987</span> sind wir Ihre vertrauenswürdige
              Adresse für exklusive Teppiche aus dem Orient. In unserer Galerie im Herzen des Schwarzwalds verbinden wir
              traditionelles Handwerk mit Leidenschaft für außergewöhnliche Qualität.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed reveal animate-delay-100">
              Unsere handgeknüpften Meisterwerke stammen aus renommierten Teppichregionen wie Persien, der Türkei, dem
              Kaukasus und Zentralasien. Jedes Stück erzählt seine eigene Geschichte und bringt ein Stück kulturelles
              Erbe in Ihr Zuhause.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed reveal animate-delay-200">
              Unser Team aus erfahrenen Handwerksmeistern, die ihr Handwerk in den Ursprungsländern erlernt haben,
              garantiert höchste Expertise bei Restauration und Pflege Ihrer wertvollen Stücke.
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 reveal animate-delay-300">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover-card">
                <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0" />
                <span className="text-brown-700 font-medium">Über 35 Jahre Erfahrung</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover-card">
                <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0" />
                <span className="text-brown-700 font-medium">Meister aus dem Orient</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover-card">
                <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0" />
                <span className="text-brown-700 font-medium">Traditionelles Handwerk</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover-card">
                <CheckCircle className="h-5 w-5 text-forest-600 flex-shrink-0" />
                <span className="text-brown-700 font-medium">Garantierte Qualität</span>
              </div>
            </div>

            <div className="pt-6 flex items-center gap-4 reveal animate-delay-400">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Handwerksmeister Siegel"
                width={80}
                height={80}
                className="rounded-full border-2 border-gold-400 p-1"
              />
              <div>
                <p className="font-serif text-xl text-brown-700">Meisterbetrieb</p>
                <p className="text-gray-600">Zertifizierte Handwerkskunst</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
