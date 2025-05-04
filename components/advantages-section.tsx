"use client"

import { useEffect, useRef } from "react"
import { Truck, ThumbsUp, Award, Clock } from "lucide-react"

export function AdvantagesSection() {
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
    <section id="advantages" ref={sectionRef} className="py-24 bg-brown-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-oriental opacity-5"></div>

      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gold-400 font-medium mb-2 tracking-wider reveal">WARUM UNS WÄHLEN</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 reveal">Ihre Vorteile bei uns</h2>
          <p className="text-lg text-beige-100 max-w-3xl mx-auto reveal">
            Wir bieten Ihnen mehr als nur Teppiche – entdecken Sie unseren umfassenden Service für ein sorgenfreies
            Erlebnis.
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6 reveal"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-brown-700 rounded-xl p-8 text-center hover:bg-brown-600 transition-all duration-300 transform hover:-translate-y-2 reveal">
            <div className="bg-forest-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Truck className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Kostenloser Transport</h3>
            <p className="text-beige-100">
              Wir holen Ihre Teppiche kostenlos ab und liefern sie nach der Reinigung oder Restauration wieder zu Ihnen
              nach Hause.
            </p>
          </div>

          <div className="bg-brown-700 rounded-xl p-8 text-center hover:bg-brown-600 transition-all duration-300 transform hover:-translate-y-2 reveal animate-delay-100">
            <div className="bg-forest-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <ThumbsUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Unverbindliche Beratung</h3>
            <p className="text-beige-100">
              Profitieren Sie von unserer kostenlosen Beratung und Schätzung – ohne versteckte Kosten oder
              Verpflichtungen.
            </p>
          </div>

          <div className="bg-brown-700 rounded-xl p-8 text-center hover:bg-brown-600 transition-all duration-300 transform hover:-translate-y-2 reveal animate-delay-200">
            <div className="bg-forest-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Meister aus dem Orient</h3>
            <p className="text-beige-100">
              Unsere Restauratoren haben ihr Handwerk in den Ursprungsländern der Teppiche erlernt und bringen
              jahrzehntelange Erfahrung mit.
            </p>
          </div>

          <div className="bg-brown-700 rounded-xl p-8 text-center hover:bg-brown-600 transition-all duration-300 transform hover:-translate-y-2 reveal animate-delay-300">
            <div className="bg-forest-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Schneller Service</h3>
            <p className="text-beige-100">
              Wir arbeiten effizient und zuverlässig, damit Sie Ihre wertvollen Teppiche schnellstmöglich wieder
              genießen können.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-forest-600 rounded-xl p-10 text-center max-w-4xl mx-auto shadow-xl reveal animate-delay-400">
          <div className="quality-badge inline-block mb-6">QUALITÄTSVERSPRECHEN</div>
          <h3 className="text-3xl font-serif font-bold mb-6">Unsere Garantie für Sie</h3>
          <p className="text-lg mb-8">
            Wir garantieren höchste Qualität bei allen unseren Dienstleistungen. Sollten Sie mit dem Ergebnis nicht
            zufrieden sein, arbeiten wir kostenlos nach, bis Sie vollständig überzeugt sind.
          </p>
          <div className="inline-block border-2 border-gold-400 text-gold-400 px-8 py-4 rounded-full font-bold hover:bg-gold-400 hover:text-brown-800 transition-colors cursor-pointer">
            Mehr über unsere Garantie
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
