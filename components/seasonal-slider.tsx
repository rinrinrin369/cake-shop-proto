"use client"

import { useRef } from "react"
import Image from "next/image"

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

export default function SeasonalSlider() {
  const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <section className="gallery-space py-32">
      <div className="atmospheric-wallpaper">
        <Image
          src="https://picsum.photos/1600/800"
          alt="季節の移ろい"
          fill
          className="object-cover"
        />
      </div>
      <div className="silence-overlay"></div>
      <div className="exhibition-layer">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-16">
            <h2 className="whisper-heading text-3xl mb-6">季節のご案内</h2>
            <div className="golden-light max-w-md"></div>
            <p className="silence-text max-w-2xl">
              四季の移ろいとともに変わる、その時期だけの特別なスイーツをお楽しみください
            </p>
          </div>

          <div ref={sliderRef} className="seasonal-flow">
            {seasonalItems.map((item) => (
              <div key={item.id} className="seasonal-card">
                <div className="seasonal-ribbon">季節限定</div>
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  <h3 className="whisper-heading text-lg">{item.name}</h3>
                  <p className="text-[#d4af37] font-light">{item.price}</p>
                  <p className="breath-text leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
