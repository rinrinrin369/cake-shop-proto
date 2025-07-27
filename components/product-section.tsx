"use client"


import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function ProductSection() {
  const ref = useRef(null)

  const products = [
    {
      title: "CAKES",
      price: "¥4,200",
      description: "人気のケーキ",
      src: "/images/cakes/fruit-tart.jpg",
      alt: "Seasonal Tart",
    },
    {
      title: "SEASONS CAKES",
      price: "¥3,800",
      description: "季節のケーキ",
      src: "/images/cakes/syokora.jpg",
      alt: "Seasonal Tart",
    },
    {
      title: "OTHER TART",
      price: "¥2,400",
      description: "その他のお菓子",
      src: "/images/cakes/fruit-tart.jpg",
      alt: "Seasonal Tart",
    },
  ]

  return (
    <section className="content-section dark" ref={ref}>
      <div className="">
          <div className="container-elegant grid gap-50">
            {products.map((product, index) => (
              <div key={product.title} className="two-column-container mt-10">
                <div className="relative h-48 mb-6 overflow-hidden">
                <Link href="/products" className="nav-link-elegant"><Image className="block object-cover" 
                src={product.src}
                alt={product.title}
                fill
              /></Link>
                </div>
                <div
                className={`${index % 2 === 0 ? "column-right" : "column-left"} p-6 gap-2`}
              >
                <h3 className="product-title display-text text-xl">{product.title}</h3>
                <p className="product-description japanese-text text-3xl">{product.description}</p>
                <p className="product-price body-text">説明テキストの配置スペースです。製品やサービスの価値を伝えるパートになりますので、文言をご検討ください。</p>
                <Link href="/products" className="ext-xl ">詳しく見る</Link>
              </div>
            </div>
            ))}
          </div>
        </div>
    </section>
  )
}
