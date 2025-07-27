"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const storyBlocks = [
  {
    id: 1,
    title: "選び抜いた素材",
    content:
      "世界各地から厳選した最高級の素材のみを使用しています。フランス産バター、ベルギー産チョコレート、国産の新鮮な果物。一つ一つの素材が持つ本来の味わいを最大限に引き出すことを心がけています。",
    background: "https://picsum.photos/1600/800",
  },
  {
    id: 2,
    title: "五感を刺激する一皿",
    content:
      "見た目の美しさ、香りの豊かさ、食感の楽しさ、そして深い味わい。すべてが調和した時、お菓子は単なる食べ物を超えて、記憶に残る体験となります。私たちは五感すべてに訴えかけるお菓子作りを追求しています。",
    background: "https://picsum.photos/1600/800",
  },
  {
    id: 3,
    title: "時間をかけたお菓子",
    content:
      "急がず、焦らず、一つ一つの工程に時間をかける。生地を寝かせ、クリームを丁寧に仕上げ、装飾に心を込める。時間という贅沢な材料を惜しみなく使うことで、他では味わえない深みのあるお菓子が生まれます。",
    background: "https://picsum.photos/1600/800",
  },
]

export default function CinematicStory() {
  const [currentStory, setCurrentStory] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight))
        const storyIndex = Math.floor(scrollProgress * storyBlocks.length)
        setCurrentStory(Math.min(storyIndex, storyBlocks.length - 1))
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="cinematic-background gentle-spacing">
      {storyBlocks.map((story, index) => (
        <div
          key={story.id}
          className={`background-layer transition-opacity duration-1000 ${
            index === currentStory ? "opacity-50" : "opacity-0"
          }`}
        >
          <Image src={story.background || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
        </div>
      ))}
      <div className="atmospheric-overlay"></div>
      <div className="content-layer">
        <div className="max-w-7xl mx-auto px-12">
          <div className="max-w-3xl mx-auto">
            {storyBlocks.map((story, index) => (
              <div
                key={story.id}
                className={`transition-all duration-1000 ${
                  index === currentStory ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-8"
                }`}
              >
                {index === currentStory && (
                  <div className="text-center space-y-8">
                    <h2 className="section-heading">{story.title}</h2>
                    <div className="golden-breath"></div>
                    <p className="body-text leading-relaxed">{story.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
