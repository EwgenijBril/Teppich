"use client"

import { useEffect } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CarpetGallery } from "@/components/carpet-gallery"
import { BeforeAfterGallery } from "@/components/before-after-gallery"

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal")

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("active")
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-beige-50">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CarpetGallery />
        <ServicesSection />
        <BeforeAfterGallery />
        <AdvantagesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
