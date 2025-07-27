"use client"

import { useParallax } from "@/hooks/useParallax"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import ScrollAnimation from "@/components/scroll-animation"
import Image from "next/image"

const storeItems = [
  {
    id: 1,
    caption: "透明で焼かれた器",
    image: "/images/interior/glass-display.jpg"
  },
  {
    id: 2,
    caption: "時間の溶ける空間",
    image: "/images/interior/wooden-interior.jpg"
  },
  {
    id: 3,
    caption: "静寂に宿る美",
    image: "/images/interior/black-ceramics.jpg"
  }
]

export default function StoreGallery() {
  const backgroundRef = useParallax({ speed: -0.2 })

  return (
    <Section 
      className="store-section" 
      spacing="lg"
      background="/placeholder.svg?height=800&width=1600&text=店舗内装・空間の美しさ"
      overlay
    >
      <div ref={backgroundRef} className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=800&width=1600&text=店舗内装・空間の美しさ"
          alt="店舗内装・空間の美しさ"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="gallery-elegant">
        {storeItems.map((item, index) => (
          <ScrollAnimation key={item.id} delay={index * 200}>
            <Card variant="gallery" hover image={item.image} overlay>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-light">{item.caption}</p>
              </div>
            </Card>
          </ScrollAnimation>
        ))}
      </div>
    </Section>
  )
}
