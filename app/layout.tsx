import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP, Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-noto-serif-jp",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
})


export const metadata: Metadata = {
  title: "パティスリー・ドゥ・ルミエール | 空間を巡り、菓子に触れる",
  description: "ひとくちが、静けさを呼び覚ます。記憶の中に沈む、黒と金の菓子店。",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${inter.variable}`}>
      <body className="antialiased bg-inasa">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
