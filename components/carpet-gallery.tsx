"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ZoomIn } from "lucide-react"

type CarpetType = "all" | "persian" | "turkish" | "caucasian" | "indian" | "modern"

interface CarpetItem {
  id: number
  name: string
  origin: string
  type: CarpetType
  description: string
  image: string
  detailImage: string
}

export function CarpetGallery() {
  const [activeFilter, setActiveFilter] = useState<CarpetType>("all")
  const [selectedCarpet, setSelectedCarpet] = useState<CarpetItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const galleryRef = useRef<HTMLElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const carpets: CarpetItem[] = [
    // Neue Teppiche aus den bereitgestellten Bildern
    {
      id: 1,
      name: "Moderner Beige Strukturteppich",
      origin: "Deutschland",
      type: "modern",
      description:
        "Hochwertiger moderner Teppich mit geometrischem Strukturmuster in warmen Beigetönen, ideal für zeitgenössische Wohnräume",
      image: "/images/carpets/modern-beige-textured.jpg",
      detailImage: "/images/carpets/modern-beige-textured.jpg",
    },
    {
      id: 2,
      name: "Bunter Streifenteppich",
      origin: "Marokko",
      type: "modern",
      description:
        "Lebendiger handgewebter Teppich mit farbenfrohen horizontalen Streifen in Regenbogenfarben, ein echter Blickfang für moderne Einrichtungen",
      image: "/images/carpets/colorful-striped.jpg",
      detailImage: "/images/carpets/colorful-striped.jpg",
    },
    {
      id: 3,
      name: "Natürlicher Handwebteppich",
      origin: "Skandinavien",
      type: "modern",
      description:
        "Minimalistischer handgewebter Teppich aus natürlichen Materialien in cremefarbenen Tönen, perfekt für skandinavische und moderne Einrichtungsstile",
      image: "/images/carpets/natural-handwoven.jpg",
      detailImage: "/images/carpets/natural-handwoven.jpg",
    },
    {
      id: 4,
      name: "Moderner Roter Teppich",
      origin: "Italien",
      type: "modern",
      description:
        "Eleganter einfarbiger Teppich in kräftigem Rot, der jedem Raum Wärme und einen Hauch von Dramatik verleiht",
      image: "/images/carpets/modern-red.jpg",
      detailImage: "/images/carpets/modern-red.jpg",
    },
    {
      id: 5,
      name: "Klassischer Orientteppich Oval",
      origin: "Persien",
      type: "persian",
      description:
        "Traditioneller ovaler Orientteppich mit reichem floralem Muster in Rot und Creme, ein zeitloses Stück für klassische Einrichtungen",
      image: "/images/carpets/traditional-oriental-oval.jpg",
      detailImage: "/images/carpets/traditional-oriental-oval.jpg",
    },
  ]

  const filteredCarpets = activeFilter === "all" ? carpets : carpets.filter((carpet) => carpet.type === activeFilter)

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isModalOpen])

  const openModal = (carpet: CarpetItem) => {
    setSelectedCarpet(carpet)
    setIsModalOpen(true)
  }

  return (
    <section id="gallery" ref={galleryRef} className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-forest-600 font-medium mb-2 tracking-wider reveal">UNSERE KOLLEKTION</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-700 mb-4 reveal">
            Exklusive Teppichgalerie
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal">
            Entdecken Sie unsere Auswahl an handgefertigten Meisterwerken aus den renommiertesten Teppichregionen der
            Welt.
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6 reveal"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
          <Button
            onClick={() => setActiveFilter("all")}
            variant={activeFilter === "all" ? "default" : "outline"}
            className={`rounded-full ${activeFilter === "all" ? "bg-forest-600 hover:bg-forest-700" : "border-sand-400 text-brown-700"}`}
          >
            Alle Teppiche
          </Button>
          <Button
            onClick={() => setActiveFilter("persian")}
            variant={activeFilter === "persian" ? "default" : "outline"}
            className={`rounded-full ${activeFilter === "persian" ? "bg-forest-600 hover:bg-forest-700" : "border-sand-400 text-brown-700"}`}
          >
            Persische Teppiche
          </Button>
          <Button
            onClick={() => setActiveFilter("turkish")}
            variant={activeFilter === "turkish" ? "default" : "outline"}
            className={`rounded-full ${activeFilter === "turkish" ? "bg-forest-600 hover:bg-forest-700" : "border-sand-400 text-brown-700"}`}
          >
            Türkische Teppiche
          </Button>
          <Button
            onClick={() => setActiveFilter("caucasian")}
            variant={activeFilter === "caucasian" ? "default" : "outline"}
            className={`rounded-full ${activeFilter === "caucasian" ? "bg-forest-600 hover:bg-forest-700" : "border-sand-400 text-brown-700"}`}
          >
            Kaukasische Teppiche
          </Button>
          <Button
            onClick={() => setActiveFilter("indian")}
            variant={activeFilter === "indian" ? "default" : "outline"}
            className={`rounded-full ${activeFilter === "indian" ? "bg-forest-600 hover:bg-forest-700" : "border-sand-400 text-brown-700"}`}
          >
            Indische Teppiche
          </Button>
          <Button
            onClick={() => setActiveFilter("modern")}
            variant={activeFilter === "modern" ? "default" : "outline"}
            className={`rounded-full ${activeFilter === "modern" ? "bg-forest-600 hover:bg-forest-700" : "border-sand-400 text-brown-700"}`}
          >
            Moderne Teppiche
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {filteredCarpets.map((carpet) => (
            <div
              key={carpet.id}
              className="bg-beige-50 rounded-xl overflow-hidden shadow-lg hover-card cursor-pointer"
              onClick={() => openModal(carpet)}
            >
              <div className="relative h-80 image-zoom">
                <Image src={carpet.image || "/placeholder.svg"} alt={carpet.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold text-brown-700">{carpet.name}</h3>
                  <span className="bg-forest-600 text-white text-xs px-2 py-1 rounded-full">{carpet.origin}</span>
                </div>
                <p className="text-gray-600">{carpet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {isModalOpen && selectedCarpet && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div
            ref={modalRef}
            className="bg-white rounded-xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row animate-scale-in"
          >
            <div className="md:w-1/2 relative">
              <div className="relative h-80 md:h-full">
                <Image
                  src={selectedCarpet.detailImage || selectedCarpet.image}
                  alt={`${selectedCarpet.name} Detail`}
                  fill
                  className="object-cover"
                />
              </div>
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="md:w-1/2 p-8 overflow-y-auto">
              <span className="text-forest-600 font-medium tracking-wider">{selectedCarpet.origin.toUpperCase()}</span>
              <h3 className="text-3xl font-serif font-bold text-brown-700 mb-4">{selectedCarpet.name}</h3>

              <div className="mb-6">
                <h4 className="font-bold text-brown-600 mb-2">Beschreibung</h4>
                <p className="text-gray-700">{selectedCarpet.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-brown-600 mb-2">Herkunft & Herstellung</h4>
                <p className="text-gray-700">
                  Dieser exquisite Teppich stammt aus {selectedCarpet.origin} und wurde in traditioneller Handarbeit
                  gefertigt. Die Knüpftechnik folgt jahrhundertealten Traditionen, die von Generation zu Generation
                  weitergegeben wurden.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-brown-600 mb-2">Materialien & Farben</h4>
                <p className="text-gray-700">
                  Gefertigt aus feinster Wolle und/oder Seide mit natürlichen Farbstoffen, die eine außergewöhnliche
                  Farbtiefe und Langlebigkeit garantieren. Die Farbpalette umfasst traditionelle Töne, die für die
                  Region typisch sind.
                </p>
              </div>

              <div className="flex gap-4">
                <Button className="bg-forest-600 hover:bg-forest-700 text-white rounded-full flex-1">
                  Beratungstermin vereinbaren
                </Button>
                <Button
                  variant="outline"
                  className="border-sand-400 text-brown-700 rounded-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Schließen
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
