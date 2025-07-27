"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "ショコラ・ノワール",
    image: "/images/cakes/chocolate-cake.jpg",
    description: "濃厚なチョコレートの味わい"
  },
  {
    id: 2,
    title: "季節のフルーツタルト",
    image: "/images/cakes/fruit-tart.jpg",
    description: "旬のフルーツをふんだんに使用"
  },
  {
    id: 3,
    title: "マカロン・アソート",
    image: "/images/cakes/macarons.jpg",
    description: "繊細な味わいのマカロン"
  },
  {
    id: 4,
    title: "苺のミルフィーユ",
    image: "/images/cakes/mille-feuille.jpg",
    description: "サクサクのパイと生クリーム"
  },
  {
    id: 5,
    title: "モンブラン・クラシック",
    image: "/images/cakes/mont-blanc-classic.jpg",
    description: "伝統的な栗のモンブラン"
  },
  {
    id: 6,
    title: "オペラ",
    image: "/images/cakes/opera-cake.jpg",
    description: "コーヒーとチョコレートの調和"
  }
];

export default function InstagramGallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const openModal = (item: (typeof galleryItems)[0]) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <>
      <section className="gentle-spacing px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">菓子写真</h2>
            <p className="small-text max-w-2xl mx-auto">
              美しく仕上げられた当店の代表的な商品をご覧ください。クリックすると詳細をご覧いただけます。
            </p>
          </div>

          <div className="instagram-grid">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="relative aspect-square cursor-pointer image-breath rounded-lg overflow-hidden"
                onClick={() => openModal(item)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div
                  className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-600 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-center text-white">
                    <ZoomIn size={24} className="mx-auto mb-2 golden-whisper" />
                    <p className="small-text">{item.title}</p>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 border-2 border-[#D4AF37] rounded-lg transition-opacity duration-600 ${
                    hoveredItem === item.id ? "opacity-30" : "opacity-0"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className={`cinematic-modal ${selectedItem ? "visible" : ""}`} onClick={closeModal}>
          <div className="modal-content-breath" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-8">
              <h2 className="section-heading">{selectedItem.title}</h2>
              <button onClick={closeModal} className="text-white/60 hover:text-[#D4AF37] gentle-transition">
                <X size={20} />
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-8">
                <p className="body-text leading-relaxed">{selectedItem.description}</p>
                <div className="golden-breath"></div>
                <p className="small-text">
                  厳選された素材と伝統的な技法で作られた、当店自慢の逸品です。
                  季節の移ろいとともに変わる味わいをお楽しみください。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
