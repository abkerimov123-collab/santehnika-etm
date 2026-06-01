'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/hero-1.webp', pos: 'center' },
  { src: '/hero-2.webp', pos: 'center 30%' },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className="hero-slide"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: slide.pos }}
          />
        </div>
      ))}
      <div className="hero-overlay" />
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
