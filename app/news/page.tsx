import Image from "next/image"

const newsItems = [
  {
    id: 1,
    title: "新商品「季節のフルーツタルト」発売のお知らせ",
    date: "2025年1月15日",
    summary:
      "春の訪れを感じさせる、旬のフルーツをふんだんに使用した新作タルトが登場いたします。いちご、キウイ、オレンジなど色とりどりの果物の自然な甘さと酸味が絶妙に調和した、この季節だけの特別な逸品です。",
    image: "https://picsum.photos/400/250",
  },
  {
    id: 2,
    title: "バレンタイン限定商品のご予約開始",
    date: "2025年1月10日",
    summary:
      "2月14日のバレンタインデーに向けて、特別なチョコレートケーキとマカロンセットのご予約を開始いたします。大切な方への贈り物として、心を込めてお作りいたします。数量限定のため、お早めにご予約ください。",
    image: "https://picsum.photos/400/250",
  },
  {
    id: 3,
    title: "営業時間変更のお知らせ",
    date: "2025年1月5日",
    summary:
      "1月より土日祝日の営業時間を延長し、9:00-20:00とさせていただきます。より多くのお客様にご利用いただけるよう努めてまいります。平日は従来通り10:00-19:00の営業となります。",
    image: "https://picsum.photos/400/250",
  },
  {
    id: 4,
    title: "新年のご挨拶",
    date: "2025年1月1日",
    summary:
      "新年明けましておめでとうございます。本年も皆様に愛されるパティスリーを目指し、スタッフ一同精進してまいります。より一層の美味しさと感動をお届けできるよう、心を込めて取り組んでまいります。",
    image: "https://picsum.photos/400/250",
  },
  {
    id: 5,
    title: "年末年始営業のご案内",
    date: "2024年12月20日",
    summary:
      "年末年始の営業日程をお知らせいたします。12月30日まで通常営業、1月1日-3日は休業、1月4日より通常営業を再開いたします。年末のご注文はお早めにお願いいたします。",
    image: "https://picsum.photos/400/250",
  },
  {
    id: 6,
    title: "クリスマスケーキご予約完売のお礼",
    date: "2024年12月15日",
    summary:
      "おかげさまでクリスマスケーキのご予約が完売となりました。多くのお客様にご愛顧いただき、心より感謝申し上げます。来年もより素晴らしい商品をご提供できるよう努めてまいります。",
    image: "https://picsum.photos/400/250",
  },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen text-white pt-16">
      {/* Header */}
      <section className="section-spacing text-center">
        <h1 className="main-title text-[#D4AF37] mb-8">お知らせ</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto px-6 leading-relaxed font-light">
          最新情報やイベントのご案内を
          <br />
          こちらでお知らせいたします
        </p>
      </section>

      {/* News Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="card-luxury overflow-hidden luxury-transition hover:shadow-2xl hover:shadow-[#D4AF37]/10"
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="space-y-4">
                  <time className="caption-text text-[#D4AF37] font-medium text-sm">{item.date}</time>
                  <h2 className="section-heading text-lg leading-tight">{item.title}</h2>
                  <p className="body-text text-white/80 text-sm leading-relaxed">{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
