"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`nav-elegant fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-transparent"
    }`}>
      <div className="container-elegant">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-light golden-accent">
          Patisserie de Lumière
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link-elegant">
              home
            </Link>
            <Link href="/products" className="nav-link-elegant">
              cakes
            </Link>
            <Link href="/chef" className="nav-link-elegant">
              about
            </Link>
            {/* <Link href="/seasonal" className="nav-link-elegant">
              cakes
            </Link> */}
            {/* <Link href="/philosophy" className="nav-link-elegant">
              about
            </Link> */}
            <Link href="/news" className="nav-link-elegant">
              news
            </Link>
            <Link href="/access" className="nav-link-elegant">
              access
            </Link>
            <Link href="/contact" className="nav-link-elegant">
              contact
            </Link>
          </div>
          
          {/* モバイルメニュー */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
