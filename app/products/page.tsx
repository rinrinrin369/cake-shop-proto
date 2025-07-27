import Image from "next/image"
// import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "苺のミルフィーユ",
    price: "¥3,800（税込）",
    description:
      "フランス産バターを使用したサクサクのパイ生地に、厳選された苺と濃厚なカスタードクリームを重ねた逸品です。季節の苺の甘酸っぱさが口の中で広がります。",
    image: "/images/cakes/ichigomiru.jpg",
  },
  {
    id: 2,
    name: "ショコラ・ノワール",
    price: "¥4,200（税込）",
    description:
      "ベルギー産最高級チョコレートを使用。深いコクと上品な甘さが調和した大人のためのケーキです。ビターな余韻が長く続きます。",
    image: "/images/cakes/syokora.jpg",
  },
  {
    id: 3,
    name: "マカロン・アソート",
    price: "¥2,400（税込）",
    description:
      "6種類の季節のフレーバーをお楽しみいただける、色とりどりのマカロンセットです。それぞれ異なる香りと食感をお楽しみください。",
    image: "/images/cakes/makaron.jpg",
  },
  {
    id: 4,
    name: "モンブラン・クラシック",
    price: "¥3,600（税込）",
    description:
      "イタリア産栗を使用した濃厚なクリームと、軽やかなメレンゲが織りなす伝統の味わいです。秋の風情を感じる上品な一品。",
    image: "/images/cakes/monburan.jpg",
  },
  {
    id: 5,
    name: "フルーツタルト",
    price: "¥4,800（税込）",
    description:
      "旬の果物をふんだんに使用し、カスタードクリームとの絶妙なバランスをお楽しみください。見た目の美しさも格別です。",
    image: "/images/cakes/fruit-tart.jpg",
  },
  {
    id: 6,
    name: "オペラ",
    price: "¥3,400（税込）",
    description:
      "アーモンドスポンジとチョコレートガナッシュが層を成す、パリの名店の味を再現した逸品です。コーヒーとの相性も抜群。",
    image: "/images/cakes/opera.jpg",
  },
]

const seasonalItems = [
  {
    id: 1,
    name: "桜のムース",
    price: "¥4,200（税込）",
    period: "3月1日 - 4月30日",
    description:
      "春の訪れを告げる桜の花びらをイメージした、淡いピンク色の上品なムースケーキです。桜の香りがほのかに香る季節限定の逸品。口の中で溶ける繊細な食感をお楽しみください。",
    image: "/images/cakes/makaron.jpg",
    badge: "春限定",
    recommendation: "桜の季節だけの特別な香りと、春らしい淡い色合いが魅力的な一品です。",
  },
  {
    id: 2,
    name: "夏のトロピカルタルト",
    price: "¥3,800（税込）",
    period: "6月1日 - 8月31日",
    description:
      "マンゴー、パイナップル、パッションフルーツを使用した、南国の風を感じる爽やかなタルトです。暑い夏にぴったりの一品。フレッシュな果物の酸味と甘みが絶妙に調和しています。",
    image: "/images/cakes/makaron.jpg",
    badge: "夏限定",
    recommendation: "暑い夏にぴったりの爽やかな味わいで、見た目も鮮やかな南国気分を味わえます。",
  },
  {
    id: 3,
    name: "栗のモンブラン",
    price: "¥4,500（税込）",
    period: "9月1日 - 11月30日",
    description:
      "秋の味覚の王様、栗をふんだんに使用した贅沢なモンブラン。濃厚な栗の風味と軽やかなメレンゲの絶妙なハーモニーをお楽しみください。イタリア産の最高級栗を使用しています。",
    image: "/images/cakes/makaron.jpg",
    badge: "秋限定",
    recommendation: "秋の深まりとともに味わう、栗本来の濃厚な甘みが堪能できる贅沢な逸品です。",
  },
  {
    id: 4,
    name: "ホワイトチョコレートケーキ",
    price: "¥4,800（税込）",
    period: "12月1日 - 2月28日",
    description:
      "雪景色をイメージした真っ白なホワイトチョコレートケーキ。中にはベリーのコンポートが隠れており、甘酸っぱいアクセントが楽しめます。冬の特別な日にふさわしい上品な味わいです。",
    image: "/images/cakes/makaron.jpg",
    badge: "冬限定",
    recommendation: "雪のように白く美しい見た目と、ベリーの酸味がアクセントの冬らしい一品です。",
  },
  {
    id: 5,
    name: "いちごのショートケーキ",
    price: "¥3,600（税込）",
    period: "12月1日 - 5月31日",
    description:
      "厳選された甘いいちごと、ふわふわのスポンジ、濃厚な生クリームの王道の組み合わせ。いちごの季節だけの特別な美味しさです。シンプルながらも完璧なバランスの定番ケーキ。",
    image: "/images/cakes/makaron.jpg",
    badge: "いちご季節",
    recommendation: "いちごが最も美味しい季節に味わう、王道の美味しさが楽しめる定番人気商品です。",
  },
  {
    id: 6,
    name: "柚子のレアチーズケーキ",
    price: "¥3,400（税込）",
    period: "11月1日 - 2月28日",
    description:
      "国産柚子の爽やかな香りと酸味が特徴的なレアチーズケーキ。冬の寒さを忘れさせる、温かみのある味わいです。柚子の皮を丁寧にすりおろし、香り高く仕上げています。",
    image: "/images/cakes/makaron.jpg",
    badge: "冬限定",
    recommendation: "日本の冬を代表する柚子の香りが楽しめる、和の要素を取り入れた特別なケーキです。",
  },
]

export default function ProductsPage() {
  return (
    <div>
    <div className="min-h-screen text-white pt-16">
      {/* Hero Slider */}
      <section className="relative h-96 mb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
          <h1 className="main-title text-[#D4AF37] text-center">商品紹介</h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div
                key={product.id}
                className="card-luxury luxury-transition hover:shadow-2xl hover:shadow-[#D4AF37]/10"
              >
                <div className="relative h-64 mb-8 overflow-hidden">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                </div>
                <div className="space-y-6">
                  <h3 className="section-heading text-xl">{product.name}</h3>
                  <p className="text-lg font-medium text-white">{product.price}</p>
                  <p className="caption-text text-white/80 leading-relaxed">{product.description}</p>
                  {/* <Button className="btn-luxury w-full">詳細を見る</Button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
        <div className="min-h-screen text-white pt-16">
        {/* Header */}
        <section className="section-spacing text-center">
          <h1 className="main-title text-[#D4AF37] mb-8">季節限定商品</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto px-6 leading-relaxed font-light">
            四季の移ろいとともに変わる、
            <br />
            その時期だけの特別なスイーツをお楽しみください
          </p>
        </section>
  
        {/* Seasonal Items Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seasonalItems.map((item) => (
                <div
                  key={item.id}
                  className="card-luxury luxury-transition hover:shadow-2xl hover:shadow-[#D4AF37]/10 relative"
                >
                  {/* Seasonal Badge */}
                  <div className="absolute top-6 right-6 text-black px-4 py-2 rounded-full text-sm font-semibold z-10">
                    {item.badge}
                  </div>
  
                  <div className="relative h-56 mb-6 rounded-lg overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
  
                  <div className="space-y-4">
                    <h3 className="section-heading text-xl">{item.name}</h3>
                    <p className="text-lg font-semibold text-white">{item.price}</p>
  
                    <div className="space-y-2">
                      <p className="caption-text text-[#D4AF37] font-medium text-sm">販売期間</p>
                      <p className="caption-text text-white/80 text-sm">{item.period}</p>
                    </div>
  
                    <p className="body-text text-white/80 text-sm leading-relaxed">{item.description}</p>
  
                    <div className="space-y-2">
                      <p className="caption-text text-[#D4AF37] font-medium text-sm">おすすめポイント</p>
                      <p className="caption-text text-white/70 text-xs leading-relaxed">{item.recommendation}</p>
                    </div>
  
                    {/* <Button className="btn-luxury w-full mt-6">詳細を見る</Button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
        <div className="min-h-screen text-white pt-16">
        {/* Header */}
        <section className="section-spacing text-center">
          <h1 className="main-title text-[#D4AF37] mb-8">Others</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto px-6 leading-relaxed font-light">
          </p>
        </section>
  
        {/* Seasonal Items Grid */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seasonalItems.map((item) => (
                <div
                  key={item.id}
                  className="card-luxury luxury-transition hover:shadow-2xl hover:shadow-[#D4AF37]/10 relative"
                >
                  {/* Seasonal Badge */}
                  <div className="absolute top-6 right-6 text-black px-4 py-2 text-sm font-semibold z-10">
                    {item.badge}
                  </div>
  
                  <div className="relative h-56 mb-6 overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
  
                  <div className="space-y-4">
                    <h3 className="section-heading text-xl">{item.name}</h3>
                    <p className="text-lg font-semibold text-white">{item.price}</p>
  
                    <div className="space-y-2">
                      <p className="caption-text text-[#D4AF37] font-medium text-sm">販売期間</p>
                      <p className="caption-text text-white/80 text-sm">{item.period}</p>
                    </div>
  
                    <p className="body-text text-white/80 text-sm leading-relaxed">{item.description}</p>
  
                    <div className="space-y-2">
                      <p className="caption-text text-[#D4AF37] font-medium text-sm">おすすめポイント</p>
                      <p className="caption-text text-white/70 text-xs leading-relaxed">{item.recommendation}</p>
                    </div>
  
                    {/* <Button className="btn-luxury w-full mt-6">詳細を見る</Button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
