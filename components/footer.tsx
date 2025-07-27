import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer-elegant">
      <div className="container-elegant">
        <div className="footer-content-elegant">
          <div>
            <h3 className="text-xl font-light golden-accent mb-6">
              パティスリー・ドゥ・ルミエール
            </h3>
            <div className="space-y-2 small-text">
              <p>〒150-0001</p>
              <p>東京都渋谷区神宮前3-15-7</p>
              <p>03-1234-5678</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <Link href="/" className="block small-text hover:golden-accent transition-colors">
                  ホーム
                </Link>
                <Link href="/products" className="block small-text hover:golden-accent transition-colors">
                  商品
                </Link>
                <Link href="/chef" className="block small-text hover:golden-accent transition-colors">
                  パティシエ
                </Link>
                <Link href="/seasonal" className="block small-text hover:golden-accent transition-colors">
                  季節のお菓子
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="/philosophy" className="block small-text hover:golden-accent transition-colors">
                  理念
                </Link>
                <Link href="/news" className="block small-text hover:golden-accent transition-colors">
                  お知らせ
                </Link>
                <Link href="/access" className="block small-text hover:golden-accent transition-colors">
                  店舗案内
                </Link>
                <Link href="/contact" className="block small-text hover:golden-accent transition-colors">
                  お問い合わせ
                </Link>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-white/60 hover:text-[#D4AF37] transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8">
          <p className="text-center small-text text-white/40">
            © 2025 パティスリー・ドゥ・ルミエール
          </p>
        </div>
      </div>
    </footer>
  )
}
