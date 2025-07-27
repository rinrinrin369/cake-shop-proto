import { MapPin, Phone, Clock, Train, Car } from "lucide-react"

export default function AccessPage() {
  return (
    <div className="min-h-screen text-white pt-16">
      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] mb-6">アクセス</h1>
        <p className="text-lg text-white/90 max-w-2xl mx-auto px-4">皆様のお越しを心よりお待ちしております</p>
      </section>

      {/* Main Content */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-xl p-6">
              <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">店舗地図</h2>
              <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Google Map埋め込み予定地</p>
              </div>
            </div>

            {/* Store Information */}
            <div className="space-y-8">
              <div className="rounded-xl p-6">
                <h2 className="text-2xl font-serif text-[#D4AF37] mb-6">店舗情報</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">パティスリー・エレガンス</p>
                      <p className="text-white/90">〒150-0001 東京都渋谷区神宮前3-15-7</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-[#D4AF37] flex-shrink-0" size={20} />
                    <p>03-1234-5678</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">営業時間</p>
                      <p className="text-white/90">平日：10:00 - 19:00</p>
                      <p className="text-white/90">土日祝：9:00 - 20:00</p>
                      <p className="text-sm text-white/70 mt-1">定休日：火曜日</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6">
                <h3 className="text-xl font-serif text-[#D4AF37] mb-4">交通アクセス</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Train className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">電車でお越しの場合</p>
                      <p className="text-white/90">JR山手線「原宿駅」徒歩8分</p>
                      <p className="text-white/90">東京メトロ「表参道駅」徒歩5分</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Car className="text-[#D4AF37] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-semibold">お車でお越しの場合</p>
                      <p className="text-white/90">専用駐車場3台完備</p>
                      <p className="text-sm text-white/70">満車の場合は近隣のコインパーキングをご利用ください</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
