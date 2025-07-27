"use client"

import { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { cn } from "@/lib/utils"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-up"
  delay?: number
}

export default function ScrollAnimation({ 
  children, 
  className = "", 
  animation = "fade-up",
  delay = 0
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation()

  const animationClasses = {
    "fade-up": "opacity-0 translate-y-8 transition-all duration-700",
    "fade-in": "opacity-0 transition-opacity duration-500",
    "slide-up": "opacity-0 translate-y-4 transition-all duration-600"
  }

  const visibleClasses = {
    "fade-up": "opacity-100 translate-y-0",
    "fade-in": "opacity-100",
    "slide-up": "opacity-100 translate-y-0"
  }

  return (
    <div 
      ref={ref} 
      className={cn(
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
