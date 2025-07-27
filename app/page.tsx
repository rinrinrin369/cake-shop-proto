import HeroSection from "@/components/hero-section"
import HeroSlider from "@/components/hero-slider"
import ScrollAnimation from "@/components/scroll-animation"
import SectionLinks from "@/components/section-links"
import CinematicStory from "@/components/cinematic-story"
import SeasonalShowcase from "@/components/seasonal-showcase"
import SeasonalFlow from "@/components/seasonal-flow"
import NewsTimeline from "@/components/news-timeline"
import ParallaxSection from "@/components/parallax-section"
import InstagramGallery from "@/components/instagram-gallery"
import StoreGallery from "@/components/store-gallery"
import ProductSection from "@/components/product-section"

export default function HomePage() {
  return (
    <div className="min-h-screen  text-white">
      {/* ヒーローセクション */}
      <HeroSection />
      
      {/* ヒーロースライダー */}
      {/* <HeroSlider /> */}
      
      {/* スクロールアニメーション */}
      <br/>
      <br/>
      <br/>
      <ScrollAnimation>
        <div className="container-elegant text-center">
          <h2 className="section-heading">Patisserie de Lumière</h2>
          <div className="h-px bg-[#D4AF37] mx-auto">菓子は記憶。わたしたちは、記憶を創る。Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, animi placeat adipisci et exercitationem minus numquam, maiores quis, natus suscipit quod earum reiciendis mollitia. Sit, earum? Temporibus vero itaque vel!</div>
        </div>
      </ScrollAnimation>
      
      {/* セクションリンク */}
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* <SectionLinks /> */}
      <ProductSection/>
      
      {/* シネマティックストーリー */}
      {/* <CinematicStory /> */}
      
      {/* 季節のショーケース */}
      {/* <SeasonalShowcase /> */}
      
      {/* 季節のフロー */}
      {/* <SeasonalFlow /> */}
      
      {/* ニュースタイムライン */}
      {/* <NewsTimeline /> */}
      <br/>
      <br/>
      <br/>
      <h1 className="py-509 container-elegant text-center main-title text-[#D4AF37] mb-8">ニュースタイムライン追加予定</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* パララックスセクション - 哲学 */}
      {/* <ParallaxSection 
        backgroundImage="/images/interior/hero-background.jpg"
        className="section-spacing"
      >
        <div className="container-elegant">
          <div className="text-center">
            <h2 className="section-heading">私たちの哲学</h2>
            <div className="w-24 h-px bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="body-text max-w-4xl mx-auto">
              一つひとつの素材と向き合い、季節の移ろいに耳を傾け、お客様の大切な瞬間に寄り添う。
              そんな想いを込めて、私たちは毎日、心を込めてお菓子を作り続けています。
              フランスで学んだ伝統の技法に、日本の美意識を重ね合わせた、
              ここだけの味わいをお楽しみください。
            </p>
          </div>
        </div>
      </ParallaxSection> */}
      
      {/* インスタグラムギャラリー */}
      {/* <InstagramGallery /> */}
      <br/>
      <br/>
      <br/>
      <h1 className="py-509 container-elegant text-center main-title text-[#D4AF37] mb-8">インスタグラムギャラリー追加予定</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      {/* ストアギャラリー */}
      {/* <StoreGallery /> */}
      
      {/* パララックスセクション - 店舗について */}
      {/* <ParallaxSection 
        backgroundImage="/images/interior/hero-background.jpg"
        className="section-spacing"
      >
        <div className="container-elegant">
          <div className="elegant-grid">
            <div className="fade-in">
              <div className="space-y-8">
                <h2 className="section-heading">店舗について</h2>
                <div className="space-y-6">
                  <p className="body-text">
                    表参道の静かな一角に佇む当店は、パリの老舗パティスリーを思わせる上品な空間です。
                  </p>
                  <p className="body-text">
                    ガラス越しに見える工房では、パティシエたちが一つ一つ丁寧にお菓子を作り上げる様子をご覧いただけます。
                    特別な日のケーキから、日常を彩る小さなお菓子まで、心を込めてお作りいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection> */}
    </div>
  )
}
