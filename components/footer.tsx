import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brown-900 text-white py-16 relative">
      <div className="absolute top-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 overflow-hidden">
                <div className="absolute inset-0 bg-forest-600 rounded-full flex items-center justify-center text-white font-serif text-xl">
                  ST
                </div>
              </div>
              <div>
                <span className="block text-2xl font-serif font-bold text-white leading-tight">Schwarzwald</span>
                <span className="block text-sm text-beige-200 font-medium tracking-wider">TEPPICHGALERIE</span>
              </div>
            </div>
            <p className="text-beige-200 mb-6 max-w-md">
              Ihr Spezialist für hochwertige orientalische Teppiche, fachgerechte Restauration und schonende Reinigung
              seit 1987.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="bg-brown-800 hover:bg-brown-700 p-3 rounded-full text-beige-200 hover:text-gold-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-brown-800 hover:bg-brown-700 p-3 rounded-full text-beige-200 hover:text-gold-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-brown-800 hover:bg-brown-700 p-3 rounded-full text-beige-200 hover:text-gold-400 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-gold-400">Dienstleistungen</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#services"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Teppichverkauf
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Teppichrestauration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Teppichreinigung
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Teppichbewertung
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gold-400">Schnelllinks</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#about"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link
                    href="#advantages"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Vorteile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Kundenstimmen
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4 text-gold-400">Rechtliches</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    AGB
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-beige-200 hover:text-gold-400 transition-colors flex items-center gap-2"
                  >
                    <span className="text-xs">›</span>
                    Widerrufsrecht
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brown-800">
          <p className="text-beige-300 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Schwarzwald Teppichgalerie. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Handwerkskammer Siegel"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Meisterbetrieb Siegel"
              width={40}
              height={40}
              className="rounded-full"
            />
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Qualitätssiegel"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
