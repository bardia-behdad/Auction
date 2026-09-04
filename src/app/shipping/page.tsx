"use client";

import React from "react";
import { Truck, Sparkles, Phone, ShieldCheck, Globe2 } from "lucide-react";

export default function ShippingPage() {
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
              <span>ترانزیت و ترخیص تخصصی آثار هنری</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight mb-4">
              حمل و نقل آثار
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
              ارائه خدمات لجستیک و جابه‌جایی استاندارد موزه‌ای به اقصی نقاط جهان
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#161411]/90 border border-amber-900/40 backdrop-blur-md shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
              <Truck className="w-8 h-8" />
            </div>

            <div className="space-y-3">
              <h2 className="text-lg sm:text-2xl font-bold text-stone-100">
                همکاری رسمی با شرکت توسعه هنر البرز
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-loose max-w-2xl mx-auto">
                شرکت توسعه هنر البرز ضمن همکاری با حراج تهران آماده ارائه خدمات حمل‌و‌نقل آثار هنری شما به تمامی کشورها می‌باشد، جهت دریافت خدمات مربوطه با ما تماس بگیرید.
              </p>
            </div>

            <div className="pt-4">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl bg-stone-900/90 border border-stone-800">
                <span className="text-xs sm:text-sm text-stone-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  شماره مستقیم هماهنگی و باربری:
                </span>
                <a
                  href="tel:+982122061024"
                  dir="ltr"
                  className="text-base sm:text-lg font-mono font-bold text-amber-300 hover:text-white transition"
                >
                  +98 (21) 22 06 10 24
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-right">
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-300 leading-relaxed">
                  بسته‌بندی تخصصی، ضدضربه، ضدآب و با رعایت کامل استانداردهای کنترل دما و رطوبت برای جلوگیری از هرگونه آسیب به بوم و رنگ.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 flex items-start gap-3">
                <Globe2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs text-stone-300 leading-relaxed">
                  انجام تشریفات گمرکی، بیمه رسمی ترانزیت بین‌المللی و تحویل مستقیم به دست خریدار در تمامی مقاصد دنیا.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}