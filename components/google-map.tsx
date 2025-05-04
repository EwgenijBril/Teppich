"use client"

import { useEffect, useRef, useState } from "react"

interface GoogleMapProps {
  address: string
  zoom?: number
  height?: string
}

export function GoogleMap({ address, zoom = 15, height = "500px" }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Lade das Google Maps Script
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      window.initMap = () => {
        setMapLoaded(true)
      }
    }

    if (!window.google) {
      loadGoogleMapsScript()
    } else {
      setMapLoaded(true)
    }

    return () => {
      // Entferne die globale initMap Funktion beim Unmount
      delete window.initMap
    }
  }, [])

  useEffect(() => {
    if (!mapLoaded || !mapRef.current) return

    // Geocode die Adresse und erstelle die Karte
    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        const map = new google.maps.Map(mapRef.current, {
          center: results[0].geometry.location,
          zoom,
          mapTypeControl: false,
          streetViewControl: false,
          styles: [
            {
              featureType: "all",
              elementType: "labels.text.fill",
              stylers: [{ color: "#7c7c7c" }],
            },
            {
              featureType: "all",
              elementType: "labels.text.stroke",
              stylers: [{ color: "#ffffff" }],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "geometry.stroke",
              stylers: [{ color: "#e5e5e5" }],
            },
            {
              featureType: "landscape",
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [{ color: "#e8e8e8" }],
            },
            {
              featureType: "poi.park",
              elementType: "geometry",
              stylers: [{ color: "#d8eacc" }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [{ color: "#ffffff" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#c9d9e2" }],
            },
          ],
        })

        // Marker hinzufügen
        const marker = new google.maps.Marker({
          map,
          position: results[0].geometry.location,
          animation: google.maps.Animation.DROP,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
          },
        })

        // Info-Fenster hinzufügen
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 200px;">
              <h3 style="margin: 0 0 5px; font-weight: bold; color: #3c6e47;">Schwarzwald Teppichgalerie</h3>
              <p style="margin: 0; font-size: 14px;">${address}</p>
            </div>
          `,
        })

        marker.addListener("click", () => {
          infoWindow.open(map, marker)
        })

        // Info-Fenster standardmäßig öffnen
        infoWindow.open(map, marker)
      }
    })
  }, [mapLoaded, address, zoom])

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
      <div ref={mapRef} style={{ height, width: "100%" }} className="google-map"></div>
      {!mapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-beige-100">
          <div className="animate-spin h-10 w-10 border-4 border-forest-600 border-t-transparent rounded-full"></div>
        </div>
      )}
    </div>
  )
}

// Füge die globale Typdefinition für die initMap Funktion hinzu
declare global {
  interface Window {
    initMap: () => void
    google?: any
  }
}
