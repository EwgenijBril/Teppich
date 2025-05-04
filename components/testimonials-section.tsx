"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Monika Schneider",
      location: "Freiburg",
      image: "/placeholder.svg?height=100&width=100",
      text: "Die Restauration meines alten Familienteppichs war beeindruckend. Er sieht aus wie neu, obwohl er über 80 Jahre alt ist. Die Beratung war kompetent und der Service erstklassig.",
      stars: 5,
    },
    {
      name: "Thomas Müller",
      location: "Stuttgart",
      image: "/placeholder.svg?height=100&width=100",
      text: "Ich habe einen wunderschönen persischen Teppich gekauft und bin begeistert von der Qualität. Die Farbberatung war sehr hilfreich, der Teppich passt perfekt in mein Wohnzimmer.",
      stars: 5,
    },
    {
      name: "Familie Becker",
      location: "Karlsruhe",
      image: "/placeholder.svg?height=100&width=100",
      text: "Der Reinigungsservice ist sein Geld wert! Unsere Teppiche strahlen in neuem Glanz und der Abhol- und Lieferservice war pünktlich und unkompliziert.",
      stars: 5,
    },
    {
      name: "Dr. Sabine Wagner",
      location: "Offenburg",
      image: "/placeholder.svg?height=100&width=100",
      text: "Als Sammlerin orientalischer Teppiche schätze ich die Expertise der Schwarzwald Teppichgalerie sehr. Die Beratung ist ehrlich und die Restaurationsarbeiten werden mit größter Sorgfalt durchgeführt. Ich kann dieses Familienunternehmen nur wärmstens empfehlen.",
      stars: 5,
    },
  ]

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

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-beige-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-forest-600 font-medium mb-2 tracking-wider reveal">KUNDENSTIMMEN</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-700 mb-4 reveal">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal">
            Erfahren Sie, warum unsere Kunden uns vertrauen und immer wieder zu uns zurückkehren.
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6 reveal"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 reveal">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg border-none hover-card">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter className="border-t border-beige-100 pt-4 flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-700">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden reveal">
            <Card className="bg-white shadow-lg border-none">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonials[activeIndex].text}"</p>
              </CardContent>
              <CardFooter className="border-t border-beige-100 pt-4 flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[activeIndex].image || "/placeholder.svg"}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brown-700">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[activeIndex].location}</p>
                </div>
              </CardFooter>
            </Card>

            <div className="flex justify-center mt-6 gap-4">
              <button
                onClick={prevTestimonial}
                className="bg-white p-2 rounded-full shadow-md hover:bg-beige-100"
                aria-label="Vorheriges Testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-brown-700" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex ? "w-6 bg-forest-600" : "w-2 bg-beige-200"
                    }`}
                    aria-label={`Gehe zu Testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="bg-white p-2 rounded-full shadow-md hover:bg-beige-100"
                aria-label="Nächstes Testimonial"
              >
                <ChevronRight className="h-5 w-5 text-brown-700" />
              </button>
            </div>
          </div>

          <div className="mt-16 text-center reveal animate-delay-300">
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <span className="font-medium text-brown-700">4.9/5 Kundenbewertung auf Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
