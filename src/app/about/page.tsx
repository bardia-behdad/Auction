"use client";

import React from "react";
import { Info, Sparkles, Target, Compass } from "lucide-react";

export default function AboutPage() {
  return (
    <div
      className="relative flex-1 w-full bg-[#100e0c] text-stone-200 font-gallery selection:bg-amber-700 selection:text-white pb-28 overflow-hidden"
      dir="rtl"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');
        .font-gallery {
          font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, serif !important;
        }
      `,
        }}
      />

      {/* پس‌زمینه فرش اصیل ایرانی */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-color-dodge"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0 C75 25 95 45 120 60 C95 75 75 95 60 120 C45 95 25 75 0 60 C25 45 45 25 60 0 Z M60 20 C68 38 82 52 100 60 C82 68 68 82 60 100 C52 82 38 68 20 60 C38 52 52 38 60 20 Z' fill='%23F59E0B' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-[750px] h-[750px] opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 500 500" className="w-full h-full text-amber-400" fill="currentColor">
            <circle cx="250" cy="250" r="180" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="6 4" />
            <path d="M250 20 C270 110 390 230 480 250 C390 270 270 390 250 480 C230 390 110 270 20 250 C110 230 230 110 250 20 Z" opacity="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <section className="relative w-full py-16 sm:py-20 border-b border-amber-900/30 text-center bg-gradient-to-b from-[#161310]/95 to-[#100e0c]/85 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>معرفی و رسالت</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight mb-4">
              درباره حراج تهران
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
              نهادی مستقل و پیشرو در جهت توسعه مارکت هنر و معرفی شاهکارهای نوین ایران به جهان
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#161411]/90 border border-stone-800 backdrop-blur-md shadow-2xl space-y-6 text-sm sm:text-base text-stone-300 leading-loose">
            <div className="flex items-center gap-3 text-amber-400 border-b border-amber-900/40 pb-3 font-bold text-lg">
              <Info className="w-6 h-6 text-amber-400" />
              <span>پیشینه و آرمان حراج</span>
            </div>

            <p className="text-justify">
              مجموعه حراج تهران در سال ۱۳۹۱ به صورت نهادی مستقل و خصوصی شکل گرفت. این حراج معرفی بهترین نمونه‌های هنر مدرن و معاصر ایران، از هنرمندان پیشگام و نام‌آشنا گرفته تا جوانان، به مجموعه‌داران هنری و مخاطبان جهانی را هدف اصلی خود قرار داده است.
            </p>

            <p className="text-justify">
              مجموعه حراج تهران می‌کوشد پاسخگوی توجه روزافزون علاقه‌مندان به هنر مدرن و معاصر ایران باشد و خرید آثار هنری با کیفیت برتر در ژانرهای مختلف را برای علاقه‌مندان امکان‌پذیر سازد.
            </p>

            <div className="p-5 sm:p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 text-stone-200 space-y-3">
              <div className="flex items-center gap-2 font-bold text-amber-300 text-sm sm:text-base">
                <Target className="w-5 h-5 text-amber-400" />
                <span>تقویت بازار داخلی و تعامل جهانی</span>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed text-justify">
                تقویت بازار داخلی هنر که زمینه و بستر اصلی بازار جهانی است، از اهداف اصلی حراج تهران است. همکاری گسترده این مجموعه با گالری‌ها و مجموعه‌داران، می‌تواند مطمئن‌ترین و درست‌ترین راه انتخاب آثار هنری، از جمله نقاشی، مجسمه یا عکس را تضمین کند.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}