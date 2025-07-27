"use client"

import { useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const seasonalItems = [
  {
    id: 1,
    name: "桜のムース",
    price: "¥4,200",
    description: "春の訪れを告げる桜の花びらをイメージした上品なムース",
    image: "/images/cakes/sakura-mousse.jpg"
  },
  {
    id: 2,
    name: "夏のトロピカルタルト",
    price: "¥3,800",
    description: "南国の風を感じる爽やかなトロピカルフルーツタルト",
    image: "/images/cakes/tropical-tart.jpg"
  },
  {
    id: 3,
    name: "栗のモンブラン",
    price: "¥4,500",
    description: "秋の味覚の王様、栗をふんだんに使用した贅沢なモンブラン",
    image: "/images/cakes/mont-blanc.jpg"
  },
  {
    id: 4,
    name: "ホワイトチョコレートケーキ",
    price: "¥4,800",
    description: "雪景色をイメージした真っ白なホワイトチョコレートケーキ",
    image: "/images/cakes/white-chocolate-cake.jpg"
  }
];

export default function SeasonalFlow() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 320
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="gentle-spacing px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="section-heading mb-4">季節のご案内</h2>
            <p className="small-text max-w-lg">
              四季の移ろいとともに変わる、その時期だけの特別なスイーツをお楽しみください
            </p>
          </div>
          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-transparent border border-white/20 text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 gentle-transition"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-transparent border border-white/20 text-white/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 gentle-transition"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div ref={sliderRef} className="flowing-slider">
          {seasonalItems.map((item) => (
            <div key={item.id} className="slider-item-breath">
              <div className="ethereal-card relative image-breath">
                <div className="seasonal-ribbon">季節限定</div>
                <div className="relative h-56 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover breath-transition"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="section-heading text-lg">{item.name}</h3>
                  <p className="golden-whisper font-light">{item.price}</p>
                  <p className="small-text leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
