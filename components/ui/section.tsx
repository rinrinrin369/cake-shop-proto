import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  container?: boolean
  spacing?: "sm" | "md" | "lg" | "xl"
  background?: string
  overlay?: boolean
}

export function Section({ 
  children, 
  className = "", 
  container = true, 
  spacing = "md",
  background,
  overlay = false
}: SectionProps) {
  const spacingClasses = {
    sm: "py-8",
    md: "py-16",
    lg: "py-24",
    xl: "py-32"
  }

  return (
    <section 
      className={cn(
        "relative",
        spacingClasses[spacing],
        className
      )}
      style={background ? { backgroundImage: `url(${background})` } : undefined}
    >
      {background && (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}
      <div className={cn("relative z-10", container && "container-elegant")}>
        {children}
      </div>
    </section>
  )
} 