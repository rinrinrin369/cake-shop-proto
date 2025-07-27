"use client"

import Link from "next/link"
import Image from "next/image"
import ScrollAnimation from "./scroll-animation"

const sectionCards = [
  {
    id: 1,
    title: "ブランド紹介",
    description: "伝統と革新が融合した、私たちの理念",
    image: "https://picsum.photos/400/400",
    href: "/philosophy",
  },
  {
    id: 2,
    title: "商品一覧",
    description: "厳選された素材で作る至極のスイーツ",
    image: "https://picsum.photos/400/400",
    href: "/products",
  },
  {
    id: 3,
    title: "パティシエの言葉",
    description: "世界で研鑽を積んだマスターパティシエの想い",
    image: "https://picsum.photos/400/400",
    href: "/chef",
  },
]

export default function SectionLinks() {
  return (
    <section className="breathing-space">
      <div className="depth-background">
        <Image
          // src="/placeholder.svg?height=800&width=1600&text=店舗全体・空間の美しさ"
          src="https://picsum.photos/1600/800"
          alt="店舗全体・空間の美しさ"
          fill
          className="object-cover"
        />
      </div>
      <div className="floating-content">
        <div className="section-grid">
          {sectionCards.map((card, index) => (
            <ScrollAnimation key={card.id} delay={index * 200}>
              <Link href={card.href}>
                <div className="section-card">
                  <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="card-image" />
                  <div className="card-overlay"></div>
                  <div className="card-border"></div>
                  <div className="card-content">
                    <h3 className="section-whisper mb-3">{card.title}</h3>
                    <p className="gentle-text">{card.description}</p>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
