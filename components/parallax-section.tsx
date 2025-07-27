"use client"

import { ReactNode } from "react"
import { useParallax } from "@/hooks/useParallax"
import { Section } from "@/components/ui/section"
import Image from "next/image"

interface ParallaxSectionProps {
  backgroundImage?: string
  children: ReactNode
  className?: string
  speed?: number
}

// 確認修正
export default function ParallaxSection({ 
  backgroundImage, 
  children, 
  className = "",
  speed = -0.5
}: ParallaxSectionProps) {
  const parallaxRef = useParallax({ speed })

  return (
    <Section className={className} spacing="lg">
      <div ref={parallaxRef} className="absolute inset-0">
        <Image 
          src={backgroundImage || "/placeholder.svg"} 
          alt="Background" 
          fill 
          className="object-cover" 
        />
      </div>
      <div className="absolute inset-0 bg-black/20" />
      {children}
    </Section>
  )
}
