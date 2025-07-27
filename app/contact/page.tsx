import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Header */}
      <section className="section-spacing text-center">
        <h1 className="main-title text-[#D4AF37] mb-8">お問い合わせ</h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto px-6 leading-relaxed font-light">
          ご質問やご要望がございましたら、
          <br />
          お気軽にお問い合わせください
        </p>
      </section>

      {/* Contact Form */}
      <section className="px-6 pb-20">
        <div className="max-w-2xl mx-auto">
          <form className="card-luxury space-y-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-3">
                お名前 <span className="text-[#D4AF37]">*</span>
              </label>
              <Input
                id="name"
                type="text"
                required
                className="w-full bg-white text-black border-gray-300 rounded-xl h-12"
                placeholder="山田 太郎"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                メールアドレス <span className="text-[#D4AF37]">*</span>
              </label>
              <Input
                id="email"
                type="email"
                required
                className="w-full bg-white text-black border-gray-300 rounded-xl h-12"
                placeholder="example@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-3">
                電話番号
              </label>
              <Input
                id="phone"
                type="tel"
                className="w-full bg-white text-black border-gray-300 rounded-xl h-12"
                placeholder="03-1234-5678"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-white mb-3">
                件名 <span className="text-[#D4AF37]">*</span>
              </label>
              <Input
                id="subject"
                type="text"
                required
                className="w-full bg-white text-black border-gray-300 rounded-xl h-12"
                placeholder="お問い合わせの件名をご入力ください"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-3">
                お問い合わせ内容 <span className="text-[#D4AF37]">*</span>
              </label>
              <Textarea
                id="message"
                required
                rows={6}
                className="w-full bg-white text-black border-gray-300 rounded-xl resize-none"
                placeholder="お問い合わせ内容を詳しくご記入ください"
              />
            </div>

            <div className="text-center pt-6">
              <Button
                type="submit"
                className="bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold px-16 py-4 text-lg rounded-xl h-auto"
              >
                送信する
              </Button>
            </div>

            <p className="text-sm text-white/70 text-center">お送りいただいた内容は、2営業日以内にご返信いたします。</p>
          </form>
        </div>
      </section>
    </div>
  )
}
