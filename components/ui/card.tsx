import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "elegant" | "gallery"
  hover?: boolean
  image?: string
  overlay?: boolean
}

export function Card({ 
  children, 
  className = "", 
  variant = "default",
  hover = false,
  image,
  overlay = false
}: CardProps) {
  const baseClasses = "relative overflow-hidden transition-all duration-300"
  
  const variantClasses = {
    default: "bg-white/5 border border-white/10 rounded-lg p-6",
    elegant: "elegant-card",
    gallery: "aspect-square cursor-pointer"
  }

  const hoverClasses = hover ? "hover:scale-105 hover:shadow-lg" : ""

  return (
    <div className={cn(baseClasses, variantClasses[variant], hoverClasses, className)}>
      {image && (
        <div className="absolute inset-0">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover"
          />
          {overlay && (
            <div className="absolute inset-0 bg-black/40" />
          )}
        </div>
      )}
      <div className={cn("relative z-10", image && "text-white")}>
        {children}
      </div>
    </div>
  )
} 