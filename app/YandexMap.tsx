'use client'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    ymaps: any
  }
}

export default function YandexMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current) return
    loaded.current = true

    const script = document.createElement('script')
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU'
    script.onload = () => {
      window.ymaps.ready(() => {
        if (!mapRef.current) return
        const map = new window.ymaps.Map(mapRef.current, {
          center: [45.199673, 33.343730],
          zoom: 16,
          controls: ['zoomControl', 'fullscreenControl'],
        })
        map.geoObjects.add(
          new window.ymaps.Placemark(
            [45.199673, 33.343730],
            {
              balloonContentHeader: 'сантехника • етм',
              balloonContentBody: 'Интернациональная ул., 134, корп. 3<br>+7 978 562-32-32',
              hintContent: 'сантехника • етм',
            },
            { preset: 'islands#darkBlueIcon' }
          )
        )
      })
    }
    script.onerror = () => {
      if (mapRef.current) {
        mapRef.current.innerHTML =
          '<div class="map-fallback">Интернациональная ул., 134, корп. 3, Евпатория<br><a href="https://yandex.com/maps/-/CPDBNU~K" target="_blank">Открыть в Яндекс.Картах →</a></div>'
      }
    }
    document.head.appendChild(script)
  }, [])

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}
