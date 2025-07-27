import Image from "next/image"

const philosophySections = [
  {
    title: "素材へのこだわり",
    content:
      "世界各地から厳選した最高級の素材のみを使用しています。フランス産バター、ベルギー産チョコレート、国産の新鮮な果物など、一つ一つの素材が持つ本来の味わいを最大限に引き出すことを心がけています。",
    image: "https://picsum.photos/600/400/",
  },
  {
    title: "パティシエの信念",
    content:
      "伝統的なフランス菓子の技法を基盤としながら、日本人の繊細な味覚に合わせた独自のアプローチを追求しています。一つ一つのケーキに込める情熱と技術で、お客様の心に残る特別な体験をお届けします。",
    image: "https://picsum.photos/600/400/",
  },
  {
    title: "お客様への想い",
    content:
      "私たちのケーキは、お客様の大切な瞬間を彩る存在でありたいと願っています。誕生日、記念日、そして日常の小さな幸せまで、すべての場面で最高の美味しさと感動をお届けすることが私たちの使命です。",
    image: "https://picsum.photos/600/400/",
  },
  {
    title: "地域とのつながり",
    content:
      "地元の生産者との深いつながりを大切にし、季節ごとの新鮮な食材を積極的に取り入れています。地域に根ざしたパティスリーとして、コミュニティの皆様と共に歩み続けることを大切にしています。",
    image: "https://picsum.photos/600/400/",
  },
]

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen text-white pt-16">
      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6">企業理念</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto px-4">
          私たちが大切にしている価値観と、 お客様への想いをご紹介いたします
        </p>
      </section>

      {/* Philosophy Sections */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-20">
          {philosophySections.map((section, index) => (
            <div key={index} className="py-20">
              <div
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-80 rounded-xl overflow-hidden">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 space-y-6">
                  <h2 className="text-3xl font-serif text-[#D4AF37]">{section.title}</h2>
                  <p className="text-white/90 leading-relaxed text-lg">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
