"use client";

import React from "react";
import { Phone, Mail, MessageSquare, Sparkles, Users, GraduationCap, Globe } from "lucide-react";

export default function ContactPage() {
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

      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-color-dodge"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0 C75 25 95 45 120 60 C95 75 75 95 60 120 C45 95 25 75 0 60 C25 45 45 25 60 0 Z M60 20 C68 38 82 52 100 60 C82 68 68 82 60 100 C52 82 38 68 20 60 C38 52 52 38 60 20 Z' fill='%23F59E0B' fill-opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10">
        <section className="relative w-full py-16 sm:py-20 border-b border-amber-900/30 text-center bg-gradient-to-b from-[#161310]/95 to-[#100e0c]/85 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>راه‌های ارتباطی و دبیرخانه</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight mb-4">
              تماس با حراج تهران
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
              جهت هماهنگی‌های کارشناسی، امور اداری، کاتالوگ و ارتباطات بین‌الملل با بخش مربوطه تماس بگیرید.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
          {/* راه‌های ارتباط عمومی */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-[#161411]/90 border border-stone-800 flex flex-col items-center text-center space-y-2.5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs text-stone-400">تلفن تماس دفتر:</span>
              <a href="tel:+982122061024" dir="ltr" className="text-sm sm:text-base font-bold text-stone-100 hover:text-amber-400 font-mono transition">
                +98 (21) 22061024
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#161411]/90 border border-stone-800 flex flex-col items-center text-center space-y-2.5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xs text-stone-400">واتس‌اپ رسمی:</span>
              <a href="https://wa.me/989128249237" target="_blank" rel="noopener noreferrer" dir="ltr" className="text-sm sm:text-base font-bold text-stone-100 hover:text-emerald-400 font-mono transition">
                +98 (912) 8249237
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#161411]/90 border border-stone-800 flex flex-col items-center text-center space-y-2.5 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs text-stone-400">ایمیل عمومی حراج:</span>
              <a href="mailto:info@tehranauction.com" className="text-xs sm:text-sm font-bold text-amber-300 hover:text-white font-mono transition">
                info@tehranauction.com
              </a>
            </div>
          </div>

          {/* مسئولین و بخش‌های اختصاصی */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161411]/85 border border-amber-900/30 backdrop-blur-md shadow-xl space-y-6">
            <h2 className="text-base sm:text-lg font-bold text-amber-300 flex items-center gap-2 border-b border-stone-800 pb-3">
              <Users className="w-5 h-5" />
              <span>دپارتمان‌ها و مسئولین حراج</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-100">مینا اسمعیلی</h3>
                  <p className="text-xs text-stone-400 mt-0.5">مسئول ارشد امور اداری</p>
                </div>
                <a href="mailto:mina.esmaili@tehranauction.com" className="text-xs text-amber-400 hover:text-amber-300 font-mono pt-2 border-t border-stone-800">
                  mina.esmaili@tehranauction.com
                </a>
              </div>

              <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-100">توکا ملکی</h3>
                  <p className="text-xs text-stone-400 mt-0.5">دبیر تحریریه کاتالوگ</p>
                </div>
                <a href="mailto:tooka.maleki@tehranauction.com" className="text-xs text-amber-400 hover:text-amber-300 font-mono pt-2 border-t border-stone-800">
                  tooka.maleki@tehranauction.com
                </a>
              </div>

              <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm sm:text-base font-bold text-stone-100">هما تاراجی</h3>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">مدیر روابط بین‌الملل</p>
                </div>
                <a href="mailto:homa.taraji@tehranauction.com" className="text-xs text-amber-400 hover:text-amber-300 font-mono pt-2 border-t border-stone-800">
                  homa.taraji@tehranauction.com
                </a>
              </div>

              <div className="p-5 rounded-xl bg-stone-900/70 border border-stone-800 flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-amber-400" />
                    <h3 className="text-sm sm:text-base font-bold text-stone-100">برنامه‌های آموزشی</h3>
                  </div>
                  <p className="text-xs text-stone-400 mt-0.5">ورکشاپ‌ها، نشست‌ها و دوره‌های تخصصی</p>
                </div>
                <a href="mailto:education@tehranauction.com" className="text-xs text-amber-400 hover:text-amber-300 font-mono pt-2 border-t border-stone-800">
                  education@tehranauction.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}