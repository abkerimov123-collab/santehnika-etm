'use client'

import { useState, useEffect } from 'react'

const slides = [
  { src: '/hero-1.png', pos: 'center' },
  { src: '/hero-2.png', pos: 'center 30%' },
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
          style={{
            backgroundImage: `url(${slide.src})`,
            backgroundPosition: slide.pos,
            opacity: i === current ? 1 : 0,
          }}
        />
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
