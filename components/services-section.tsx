"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Scissors, Droplet, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-24 bg-white relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-pattern-oriental opacity-5"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-forest-600 font-medium mb-2 tracking-wider reveal">UNSERE EXPERTISE</p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-brown-700 mb-4 reveal">
            Unsere Dienstleistungen
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto reveal">
            Von der Auswahl des perfekten Teppichs bis zur fachgerechten Pflege – wir begleiten Sie mit unserem
            Fachwissen in allen Bereichen.
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6 reveal"></div>
        </div>

        <Tabs defaultValue="verkauf" className="max-w-5xl mx-auto reveal">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-beige-50 p-1 rounded-full">
            <TabsTrigger
              value="verkauf"
              className="data-[state=active]:bg-forest-600 data-[state=active]:text-white py-4 rounded-full transition-all duration-300"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Teppich</span>verkauf
            </TabsTrigger>
            <TabsTrigger
              value="restauration"
              className="data-[state=active]:bg-forest-600 data-[state=active]:text-white py-4 rounded-full transition-all duration-300"
            >
              <Scissors className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Teppich</span>restauration
            </TabsTrigger>
            <TabsTrigger
              value="reinigung"
              className="data-[state=active]:bg-forest-600 data-[state=active]:text-white py-4 rounded-full transition-all duration-300"
            >
              <Droplet className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">Teppich</span>reinigung
            </TabsTrigger>
          </TabsList>

          <TabsContent value="verkauf" className="mt-0 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-brown-700">Exklusive Teppiche aus aller Welt</h3>
                <p className="text-gray-700">
                  In unserer umfangreichen Kollektion finden Sie handgeknüpfte Meisterwerke aus den renommiertesten
                  Teppichregionen der Welt:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start p-3 bg-beige-50 rounded-lg hover:bg-beige-100 transition-colors">
                    <span className="text-gold-400 mr-2 text-xl">•</span>
                    <span>Persische Teppiche (Isfahan, Tabriz, Nain, Qom)</span>
                  </li>
                  <li className="flex items-start p-3 bg-beige-50 rounded-lg hover:bg-beige-100 transition-colors">
                    <span className="text-gold-400 mr-2 text-xl">•</span>
                    <span>Türkische Teppiche (Hereke, Kayseri)</span>
                  </li>
                  <li className="flex items-start p-3 bg-beige-50 rounded-lg hover:bg-beige-100 transition-colors">
                    <span className="text-gold-400 mr-2 text-xl">•</span>
                    <span>Kaukasische Teppiche (Kazak, Shirvan)</span>
                  </li>
                  <li className="flex items-start p-3 bg-beige-50 rounded-lg hover:bg-beige-100 transition-colors">
                    <span className="text-gold-400 mr-2 text-xl">•</span>
                    <span>Indische und pakistanische Teppiche</span>
                  </li>
                </ul>
                <p className="text-gray-700">
                  Wir bieten Teppiche aus feinsten Materialien wie Seide, Wolle und Baumwolle in verschiedenen Größen,
                  Mustern und Preisklassen.
                </p>
                <Button asChild className="mt-4 bg-forest-600 hover:bg-forest-700 text-white rounded-full group">
                  <Link href="#contact" className="flex items-center gap-2">
                    Teppichberatung vereinbaren
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg image-zoom">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Auswahl an hochwertigen orientalischen Teppichen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gold-400 text-brown-900 py-2 px-4 rounded-lg shadow-lg">
                  <p className="font-serif font-bold">Handgeknüpft</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="restauration" className="mt-0 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg image-zoom">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Teppichrestauration durch einen Handwerksmeister"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-gold-400 text-brown-900 py-2 px-4 rounded-lg shadow-lg">
                  <p className="font-serif font-bold">Meisterqualität</p>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h3 className="text-2xl font-serif font-bold text-brown-700">
                  Fachgerechte Restauration und Reparatur
                </h3>
                <p className="text-gray-700">
                  Unsere Restaurationsexperten bringen beschädigte Teppiche wieder zu neuem Leben. Wir beheben
                  verschiedene Schadensarten:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="hover-card border-none shadow-md">
                    <CardHeader className="pb-2 bg-beige-50 rounded-t-lg">
                      <CardTitle className="text-forest-600 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm">
                          1
                        </div>
                        Fransen & Kanten
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardDescription className="text-gray-700">
                        Erneuerung von abgenutzten Fransen und Reparatur beschädigter Kanten
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hover-card border-none shadow-md">
                    <CardHeader className="pb-2 bg-beige-50 rounded-t-lg">
                      <CardTitle className="text-forest-600 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm">
                          2
                        </div>
                        Löcher & Risse
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardDescription className="text-gray-700">
                        Fachgerechtes Schließen von Löchern und Rissen im Teppichgewebe
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hover-card border-none shadow-md">
                    <CardHeader className="pb-2 bg-beige-50 rounded-t-lg">
                      <CardTitle className="text-forest-600 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm">
                          3
                        </div>
                        Flor & Muster
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardDescription className="text-gray-700">
                        Wiederherstellung abgenutzter Florpartien und verblasster Muster
                      </CardDescription>
                    </CardContent>
                  </Card>
                  <Card className="hover-card border-none shadow-md">
                    <CardHeader className="pb-2 bg-beige-50 rounded-t-lg">
                      <CardTitle className="text-forest-600 flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-forest-600 text-white flex items-center justify-center text-sm">
                          4
                        </div>
                        Strukturschäden
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <CardDescription className="text-gray-700">
                        Behebung von Verformungen und strukturellen Schäden
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-gray-700">
                  Alle Restaurationsarbeiten werden mit traditionellen Techniken und originalgetreuen Materialien
                  durchgeführt.
                </p>
                <Button asChild className="mt-4 bg-forest-600 hover:bg-forest-700 text-white rounded-full group">
                  <Link href="#contact" className="flex items-center gap-2">
                    Restaurationsanfrage stellen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="reinigung" className="mt-0 animate-scale-in">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-bold text-brown-700">Schonende Teppichreinigung</h3>
                <p className="text-gray-700">
                  Unsere spezialisierten Reinigungsverfahren entfernen Schmutz und Flecken, ohne die empfindlichen
                  Fasern und Farben zu beschädigen:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start bg-beige-50 p-4 rounded-lg hover:bg-beige-100 transition-colors">
                    <div className="bg-forest-600 p-2 rounded-full text-white mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-medium text-brown-700">Vorreinigung</h4>
                      <p className="text-sm text-gray-600">
                        Gründliches Ausklopfen und Absaugen zur Entfernung von losem Schmutz
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start bg-beige-50 p-4 rounded-lg hover:bg-beige-100 transition-colors">
                    <div className="bg-forest-600 p-2 rounded-full text-white mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-medium text-brown-700">Handwäsche</h4>
                      <p className="text-sm text-gray-600">
                        Schonende Reinigung mit speziellen pH-neutralen Waschmitteln
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start bg-beige-50 p-4 rounded-lg hover:bg-beige-100 transition-colors">
                    <div className="bg-forest-600 p-2 rounded-full text-white mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-medium text-brown-700">Fleckenbehandlung</h4>
                      <p className="text-sm text-gray-600">
                        Gezielte Behandlung hartnäckiger Flecken mit speziellen Mitteln
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start bg-beige-50 p-4 rounded-lg hover:bg-beige-100 transition-colors">
                    <div className="bg-forest-600 p-2 rounded-full text-white mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-medium text-brown-700">Trocknung</h4>
                      <p className="text-sm text-gray-600">
                        Kontrollierte Trocknung bei optimaler Temperatur und Luftfeuchtigkeit
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start bg-beige-50 p-4 rounded-lg hover:bg-beige-100 transition-colors">
                    <div className="bg-forest-600 p-2 rounded-full text-white mr-4 flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-medium text-brown-700">Nachbehandlung</h4>
                      <p className="text-sm text-gray-600">
                        Kämmen, Bürsten und Qualitätskontrolle für perfektes Ergebnis
                      </p>
                    </div>
                  </li>
                </ul>
                <Button asChild className="mt-4 bg-forest-600 hover:bg-forest-700 text-white rounded-full group">
                  <Link href="#contact" className="flex items-center gap-2">
                    Reinigungsservice anfragen
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg image-zoom">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Schonende Teppichreinigung"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-gold-400 text-brown-900 py-2 px-4 rounded-lg shadow-lg">
                  <p className="font-serif font-bold">100% Handwäsche</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
