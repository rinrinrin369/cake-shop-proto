import { useEffect, useRef } from "react"

interface UseParallaxOptions {
  speed?: number
  enabled?: boolean
}

export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = -0.3, enabled = true } = options
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!enabled) return

    const handleScroll = () => {
      if (ref.current) {
        const scrolled = window.scrollY
        const rate = scrolled * speed
        ref.current.style.transform = `translateY(${rate}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, enabled])

  return ref
} 