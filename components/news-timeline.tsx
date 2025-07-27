"use client"

import Image from "next/image"
// import ScrollObserver from "./scroll-observer"
import ScrollAnimation from "./scroll-animation"

const newsItems = [
  {
    id: 1,
    title: "新商品「季節のフルーツタルト」発売のお知らせ",
    date: "2025年1月15日",
    excerpt: "春の訪れを感じさせる、旬のフルーツをふんだんに使用した新作タルトが登場いたします。",
  },
  {
    id: 2,
    title: "バレンタイン限定商品のご予約開始",
    date: "2025年1月10日",
    excerpt: "2月14日のバレンタインデーに向けて、特別なチョコレートケーキとマカロンセットのご予約を開始いたします。",
  },
  {
    id: 3,
    title: "営業時間変更のお知らせ",
    date: "2025年1月5日",
    excerpt: "1月より土日祝日の営業時間を延長し、9:00-20:00とさせていただきます。",
  },
  {
    id: 4,
    title: "新年のご挨拶",
    date: "2025年1月1日",
    excerpt:
      "新年明けましておめでとうございます。本年も皆様に愛されるパティスリーを目指し、スタッフ一同精進してまいります。",
  },
]

export default function NewsTimeline() {
  return (
    <section className="news-section breathing-space">
      <div className="depth-background">
        <Image
          src="https://picsum.photos/1600/800"
          alt="店舗の日常・静かな時間"
          fill
          className="object-cover"
        />
      </div>
      <div className="floating-content">
        <ScrollAnimation>
        <h2 className="news-title">店からの便り</h2>
        <p className="news-subtitle">最新情報やお知らせをお届けいたします</p>
        </ScrollAnimation>

        <div className="news-timeline">
          {newsItems.map((item, index) => (
            <ScrollAnimation key={item.id} delay={index * 200}>
              <div className="news-card">
                <div className="news-date">{item.date}</div>
                <h3 className="news-title-card">{item.title}</h3>
                <p className="news-excerpt">{item.excerpt}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
