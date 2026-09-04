"use client";

import React, { useState } from "react";
import { mockFAQs } from "@/data/faqData";
import { HelpCircle, Sparkles, ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

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
              <span>راهنمای جامع متقاضیان و مجموعه‌داران</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight mb-4">
              سوالات متداول
            </h1>
            <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
              پاسخ به متداول‌ترین پرسش‌ها درباره نحوه ارائه آثار، شرایط شرکت در حراج و ضوابط کارشناسی
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-4">
          {mockFAQs.map((faq) => {
            const isOpen = openItem === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-stone-800 bg-[#161411]/85 backdrop-blur-md overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-right hover:bg-stone-900/40 transition gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      {faq.id}
                    </span>
                    <h2 className="text-sm sm:text-base font-bold text-stone-100 leading-snug">
                      {faq.question}
                    </h2>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-stone-800/60 text-xs sm:text-sm text-stone-300 leading-loose space-y-3 font-light text-justify">
                    {faq.answer.split("\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}