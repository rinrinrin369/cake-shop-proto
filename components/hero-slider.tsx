"use client"

// TODO 確認して調整
import { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/images/cakes/hero-slide-1.jpg",
    title: "代表商品ディスプレイ",
    subtitle: "厳選された素材で作る至高のケーキ"
  },
  {
    id: 2,
    image: "/images/chef/hero-slide-2.jpg",
    title: "職人の手元",
    subtitle: "一つ一つ丁寧に作り上げる技術"
  },
  {
    id: 3,
    image: "/images/ingredients/hero-slide-3.jpg",
    title: "素材の美しさ",
    subtitle: "季節の恵みを活かしたお菓子"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="slider-container h-screen relative bg-red-500">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slider-item absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#D4AF37]" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
