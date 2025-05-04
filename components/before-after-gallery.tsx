"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BeforeAfterItem {
  id: number
  title: string
  description: string
  beforeImage: string
  afterImage: string
  problem: string
  solution: string
}

export function BeforeAfterGallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showAfter, setShowAfter] = useState(false)
  const galleryRef = useRef<HTMLElement>(null)

  const restorationProjects: BeforeAfterItem[] = [
    {
      id: 1,
      title: "Antiker Perserteppich",
      description: "Restauration eines 120 Jahre alten Perserteppichs mit erheblichen Verschleißerscheinungen",
      beforeImage: "/images/carpets/traditional-oriental-oval.jpg",
      afterImage: "/images/carpets/modern-beige-textured.jpg",
      problem: "Stark abgenutzte Fransen, mehrere Löcher und verblasste Farben durch jahrelange Sonneneinstrahlung",
      solution:
        "Vollständige Erneuerung der Fransen, Rekonstruktion der beschädigten Bereiche mit originalgetreuen Materialien und schonende Reinigung zur Farbauffrischung",
    },
    {
      id: 2,
      title: "Türkischer Hereke",
      description: "Restauration eines wertvollen Hereke-Teppichs mit Wasserschaden",
      beforeImage: "/images/carpets/modern-red.jpg",
      afterImage: "/images/carpets/colorful-striped.jpg",
      problem: "Wasserschaden mit Verfärbungen und strukturellen Schäden durch unsachgemäße Lagerung",
      solution:
        "Spezielle Trocknungstechnik, Rekonstruktion der beschädigten Struktur und Farbkorrektur durch traditionelle Methoden",
    },
    {
      id: 3,
      title: "Handgewebter Naturteppich",
      description: "Restauration eines handgewebten Naturteppichs mit Flecken und Verschmutzungen",
      beforeImage: "/images/restoration/before.jpg",
      afterImage: "/images/restoration/after.jpg",
      problem: "Tiefe Flecken, Verfärbungen und allgemeine Verschmutzung durch jahrelangen Gebrauch",
      solution:
        "Spezielle Tiefenreinigung mit natürlichen Reinigungsmitteln, Fleckenbehandlung und schonende Auffrischung der Naturfasern",
    },
  ]

  const currentProject = restorationProjects[activeIndex]

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % restorationProjects.length)
    setShowAfter(false)
  }

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + restorationProjects.length) % restorationProjects.length)
    setShowAfter(false)
  }

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

    const revealElements = galleryRef.current?.querySelectorAll(".reveal")
    revealElements?.forEach((el) => observer.observe(el))

    return () => {
      revealElements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="restoration-gallery" ref={galleryRef} className="py-24 bg-beige-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-forest-600 font-medium mb-2 tracking-wider reveal">RESTAURATIONSKUNST</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-700 mb-4 reveal">
            Vorher-Nachher Galerie
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal">
            Entdecken Sie die Transformation wertvoller Teppiche durch unsere meisterhafte Restaurationsarbeit.
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6 reveal"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto reveal">
          <div className="relative">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src={showAfter ? currentProject.afterImage : currentProject.beforeImage}
                alt={showAfter ? "Nach der Restauration" : "Vor der Restauration"}
                fill
                className="object-cover transition-opacity duration-1000"
              />
              <div className="absolute top-4 left-4 bg-brown-800 text-white px-4 py-2 rounded-full text-sm font-medium">
                {showAfter ? "NACHHER" : "VORHER"}
              </div>
            </div>

            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
              <Button
                onClick={() => setShowAfter(false)}
                variant={!showAfter ? "default" : "outline"}
                className={`rounded-full ${!showAfter ? "bg-forest-600" : "bg-white border-forest-600 text-forest-600"}`}
              >
                Vorher
              </Button>
              <Button
                onClick={() => setShowAfter(true)}
                variant={showAfter ? "default" : "outline"}
                className={`rounded-full ${showAfter ? "bg-forest-600" : "bg-white border-forest-600 text-forest-600"}`}
              >
                Nachher
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-brown-700">{currentProject.title}</h3>
            <p className="text-lg text-gray-700">{currentProject.description}</p>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-brown-600 mb-2">Das Problem:</h4>
              <p className="text-gray-700 mb-4">{currentProject.problem}</p>

              <h4 className="font-bold text-brown-600 mb-2">Unsere Lösung:</h4>
              <p className="text-gray-700">{currentProject.solution}</p>
            </div>

            <div className="flex justify-between items-center pt-4">
              <Button
                onClick={prevProject}
                variant="outline"
                className="border-sand-400 text-brown-700 rounded-full flex items-center gap-2"
              >
                <ChevronLeft className="h-5 w-5" />
                Vorheriges Projekt
              </Button>

              <div className="flex gap-1">
                {restorationProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index)
                      setShowAfter(false)
                    }}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex ? "w-6 bg-forest-600" : "w-2 bg-beige-200"
                    }`}
                    aria-label={`Gehe zu Projekt ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                onClick={nextProject}
                variant="outline"
                className="border-sand-400 text-brown-700 rounded-full flex items-center gap-2"
              >
                Nächstes Projekt
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
