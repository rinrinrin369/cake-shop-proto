import Image from "next/image"

const chefs = [
  {
    id: 1,
    name: "田中 雅子",
    title: "マスターパティシエ",
    image: "/images/chef/chef-1.jpg",
    description: "フランス・パリで10年間修行を積み、伝統的なフランス菓子の技法を習得。日本独自の美意識と組み合わせた独自のスタイルを確立。",
    specialties: ["モンブラン", "オペラ", "マカロン"]
  },
  // {
  //   id: 2,
  //   name: "佐藤 健太",
  //   title: "ソーシエ",
  //   image: "/images/chef/chef-2.jpg",
  //   description: "イタリアでチョコレート作りの技術を学び、最高級のチョコレートを使用した作品を得意とする。",
  //   specialties: ["ショコラケーキ", "トリュフ", "ガナッシュ"]
  // }
];

const philosophySections = [
  {
    title: "素材へのこだわり",
    content:
      "世界各地から厳選した最高級の素材のみを使用しています。フランス産バター、ベルギー産チョコレート、国産の新鮮な果物など、一つ一つの素材が持つ本来の味わいを最大限に引き出すことを心がけています。",
    image: "/images/cakes/hero-slide-1.jpg",
  },
  {
    title: "パティシエの信念",
    content:
      "伝統的なフランス菓子の技法を基盤としながら、日本人の繊細な味覚に合わせた独自のアプローチを追求しています。一つ一つのケーキに込める情熱と技術で、お客様の心に残る特別な体験をお届けします。",
      image: "/images/cakes/hero-slide-1.jpg",
  },
  {
    title: "お客様への想い",
    content:
      "私たちのケーキは、お客様の大切な瞬間を彩る存在でありたいと願っています。誕生日、記念日、そして日常の小さな幸せまで、すべての場面で最高の美味しさと感動をお届けすることが私たちの使命です。",
      image: "/images/cakes/hero-slide-1.jpg",
  },
  {
    title: "地域とのつながり",
    content:
      "地元の生産者との深いつながりを大切にし、季節ごとの新鮮な食材を積極的に取り入れています。地域に根ざしたパティスリーとして、コミュニティの皆様と共に歩み続けることを大切にしています。",
    image: "/images/cakes/hero-slide-1.jpg",
  },
]

export default function ChefPage() {
  return (
    <>
    <div className="min-h-screen text-white pt-16">
      {/* Header */}
      <section className="section-spacing text-center">
        <h1 className="main-title text-[#D4AF37] mb-8">パティシエ紹介</h1>
        <p className="text-xl text-white max-w-3xl mx-auto px-6 leading-relaxed font-light">
          世界で研鑽を積んだマスターパティシエたちが、
          <br />
          最高の技術と情熱でお客様をお迎えいたします
        </p>
      </section>

      {/* Chefs */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto space-y-32">
          {chefs.map((chef, index) => (
            <div
              key={chef.id}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
            >
              <div className="lg:w-2/5">
                <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl">
                  <Image src={chef.image || "/placeholder.svg"} alt={chef.name} fill className="object-cover" />
                </div>
              </div>
              <div className="lg:w-3/5 text-white rounded-xl p-12 shadow-2xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-normal text-white mb-2">{chef.name}</h3>
                    <p className="text-white font-medium text-lg">{chef.title}</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">経歴</h4>
                      <p className="text-white leading-relaxed">{chef.description}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">特技</h4>
                      <ul className="list-disc list-inside text-white leading-relaxed">
                        {chef.specialties.map((specialty, sIndex) => (
                          <li key={sIndex}>{specialty}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
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
                <div className="relative h-80 overflow-hidden">
                  <Image
                    // src={section.image || "/placeholder.svg"}
                    src={section.image}
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
  </>
  )
}
