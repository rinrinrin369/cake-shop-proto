"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
// TODO 確認して調整
// import { useParallax } from "@/hooks/useParallax"

const slides = [
  {
    id: 1,
    image: "/images/cakes/hero-slide-1.jpg",
    title: "代表商品ディスプレイ",
    subtitle: "厳選された素材で作る至高のケーキ"
  },
  {
    id: 2,
    image: "/images/cakes/hero-slide-2.jpg",
    title: "職人の手元",
    subtitle: "一つ一つ丁寧に作り上げる技術"
  },
  {
    id: 3,
    image: "/images/cakes/hero-slide-3.jpg",
    title: "素材の美しさ",
    subtitle: "季節の恵みを活かしたお菓子"
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="slider-container h-screen relative">
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

export default function HeroSection() {
  // const backgroundRef = useParallax({ speed: -0.5 })

  return (
    <section className="hero-elegant relative overflow-hidden">
      {/* <div ref={backgroundRef} className="absolute inset-0"> */}
      <div className="absolute inset-0">
        <HeroSlider />
        {/* <Image
          src="/images/interior/hero-background.jpg"
          alt="店の外観・夜景・静かな街並み"
          fill
          className="object-cover"
          priority
        /> */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="hero-content">
        {/* <div className="fade-in"> */}
        <div className="block absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          {/* <h1 className="main-title"> */}
          {/* <a href="/products" className="btn-elegant"> */}
          <a href="/products" className="">
            <h1 className="">
              <Image src="/images/interior/bakeacake.png" alt="ケーキショップ名前" width={200} height={200} className=""/>
            </h1>
            <span className="block max-w-2xl mx-auto mb-12 pt-10">
              商品を見る
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

