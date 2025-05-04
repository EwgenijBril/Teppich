"use client"

import { useEffect, useRef } from "react"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GoogleMap } from "./google-map"
import Link from "next/link"

export function ContactSection() {
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

  const address = "Hauptstraße 123, 79098 Freiburg im Breisgau, Deutschland"

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-forest-600 font-medium mb-2 tracking-wider reveal">KONTAKT</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-700 mb-4 reveal">Besuchen Sie uns</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal">
            Wir freuen uns auf Ihren Besuch in unserer Teppichgalerie im Herzen des Schwarzwalds.
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6 reveal"></div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Kontaktinformationen - 2 Spalten */}
          <div className="lg:col-span-2 reveal animate-slide-in-left">
            <div className="bg-beige-50 p-8 rounded-xl shadow-md h-full">
              <h3 className="text-2xl font-serif font-bold text-brown-700 mb-6 flex items-center gap-2">
                <span className="h-8 w-8 bg-forest-600 rounded-full flex items-center justify-center text-white text-sm">
                  i
                </span>
                Unsere Kontaktdaten
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-forest-600 p-3 rounded-full text-white mr-4 shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-700">Adresse</h4>
                    <p className="text-gray-700">
                      Schwarzwald Teppichgalerie
                      <br />
                      Hauptstraße 123
                      <br />
                      79098 Freiburg im Breisgau
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest-600 p-3 rounded-full text-white mr-4 shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-700">Telefon</h4>
                    <p className="text-gray-700">+49 (0) 761 12345678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest-600 p-3 rounded-full text-white mr-4 shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-700">E-Mail</h4>
                    <p className="text-gray-700">info@schwarzwald-teppichgalerie.de</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest-600 p-3 rounded-full text-white mr-4 shadow-md">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-700">Öffnungszeiten</h4>
                    <p className="text-gray-700">
                      Montag - Freitag: 10:00 - 18:00 Uhr
                      <br />
                      Samstag: 10:00 - 14:00 Uhr
                      <br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white flex items-center justify-center gap-2 rounded-full"
                >
                  <Link
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Route planen</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Google Maps Karte - 3 Spalten */}
          <div className="lg:col-span-3 reveal animate-slide-in-right">
            <GoogleMap address={address} height="500px" />
          </div>
        </div>

        {/* Zusätzliche Informationen */}
        <div className="mt-16 max-w-4xl mx-auto bg-brown-700 text-white p-8 rounded-xl shadow-lg reveal">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif font-bold mb-4">Vereinbaren Sie einen Termin</h3>
              <p className="mb-6">
                Für eine persönliche Beratung oder um einen Teppich zur Reinigung oder Restauration abzugeben, können
                Sie gerne einen Termin vereinbaren. Wir nehmen uns Zeit für Sie und Ihre wertvollen Stücke.
              </p>
              <Button asChild className="bg-gold-400 hover:bg-gold-500 text-brown-900 font-medium rounded-full">
                <Link href="tel:+4976112345678">Jetzt anrufen</Link>
              </Button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-brown-600 p-6 rounded-full">
                <Phone className="h-16 w-16 text-gold-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
