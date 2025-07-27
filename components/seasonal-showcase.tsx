"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import ScrollAnimation from "./scroll-animation"

const seasonalItems = [
  {
    id: 1,
    name: "桜のムース",
    price: "¥4,200",
    description: "春の訪れを告げる桜の花びらをイメージした上品なムース",
    image: "/images/cakes/sakura-mousse.jpg",
    season: "春限定"
  },
  {
    id: 2,
    name: "夏のトロピカルタルト",
    price: "¥3,800",
    description: "南国の風を感じる爽やかなトロピカルフルーツタルト",
    image: "/images/cakes/tropical-tart.jpg",
    season: "夏限定"
  },
  {
    id: 3,
    name: "栗のモンブラン",
    price: "¥4,500",
    description: "秋の味覚の王様、栗をふんだんに使用した贅沢なモンブラン",
    image: "/images/cakes/mont-blanc.jpg",
    season: "秋限定"
  },
  {
    id: 4,
    name: "ホワイトチョコレートケーキ",
    price: "¥4,800",
    description: "雪景色をイメージした真っ白なホワイトチョコレートケーキ",
    image: "/images/cakes/white-chocolate-cake.jpg",
    season: "冬限定"
  }
];

export default function SeasonalShowcase() {
  const [selectedItem, setSelectedItem] = useState<(typeof seasonalItems)[0] | null>(null)

  const openModal = (item: (typeof seasonalItems)[0]) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <section className="seasonal-section">
        <div className="max-w-7xl mx-auto px-8">
          <ScrollAnimation>
            <h2 className="seasonal-title">季節は、菓子に宿る。</h2>
          </ScrollAnimation>
          <ScrollAnimation delay={200}>
            <p className="text-center gentle-text mb-16">
              四季の移ろいとともに変わる、その時期だけの特別なスイーツをお楽しみください
            </p>
          </ScrollAnimation>

          <div className="seasonal-slider">
            {seasonalItems.map((item, index) => (
              <ScrollAnimation key={item.id} delay={index * 100}>
                <div className="seasonal-card floating-card" onClick={() => openModal(item)}>
                  <div className="relative h-48 mb-6 overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="card-breath">
                    <h3 className="section-whisper text-lg mb-2">{item.name}</h3>
                    <p className="golden-emphasis font-light mb-3">{item.price}</p>
                    <p className="subtle-text leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className={`seasonal-modal ${selectedItem ? "visible" : ""}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
              <h2 className="section-whisper text-2xl">{selectedItem.name}</h2>
              <button onClick={closeModal} className="text-white/60 hover:text-[#d4af37] transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <Image
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="golden-emphasis font-medium mb-2">販売期間</h4>
                <p className="gentle-text">{selectedItem.season}</p>
              </div>

              <div>
                <h4 className="golden-emphasis font-medium mb-2">商品説明</h4>
                <p className="gentle-text leading-relaxed">{selectedItem.description}</p>
              </div>

              <div>
                <h4 className="golden-emphasis font-medium mb-2">おすすめポイント</h4>
                <p className="gentle-text leading-relaxed">この季節の特別な味わいをお楽しみください。</p>
              </div>

              <button className="modal-cta w-full">予約する</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
