"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#110f0d] text-stone-300 border-t border-amber-900/40 font-footer" dir="rtl">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap');
        .font-footer {
          font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, serif !important;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        {/* گرید منعطف با عرض متناسب برای ستون برند و ستون‌های لینک */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-8 xl:gap-12 w-full items-start">
          
          {/* ستون اول: اطلاعات برند (فضای کمی بیشتر برای متن کپی‌رایت) */}
          <div className="flex flex-col items-start space-y-5 max-w-sm">
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1px] shadow-lg shadow-amber-950/50 shrink-0">
                <div className="w-full h-full bg-[#191714] rounded-[11px] flex items-center justify-center overflow-hidden">
                  <svg
                    viewBox="0 0 44 44"
                    className="w-7 h-7 text-amber-400 group-hover:scale-105 transition-transform duration-300"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="19" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                    <path
                      d="M22 6L26.5 16.5L38 18L29.5 25.5L32 37L22 31L12 37L14.5 25.5L6 18L17.5 16.5L22 6Z"
                      fill="#D97706"
                      opacity="0.9"
                    />
                    <path d="M22 14V27" stroke="#161412" strokeWidth="2.2" strokeLinecap="round" />
                    <circle cx="22" cy="11.5" r="1.2" fill="#161412" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                  ایران حراج
                </span>
                <span className="text-[10px] text-amber-500/80 font-mono tracking-[0.28em] uppercase">
                  IRAN AUCTION
                </span>
              </div>
            </Link>

            <a
              href="https://instagram.com/iran_auction"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 hover:text-amber-300 border border-stone-800 hover:border-amber-600/60 transition-all duration-300 shadow-sm group"
            >
              <InstagramIcon className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-mono tracking-wider" dir="ltr">iran_auction</span>
            </a>

            <p className="text-sm text-stone-400 leading-relaxed font-normal">
              تمامی حقوق مادی و معنوی این سایت متعلق به حراج ایران می‌باشد.
            </p>
          </div>

          {/* ستون دوم: ارتباط با ما */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-amber-400 tracking-wide border-b border-amber-900/40 pb-2 inline-block">
              ارتباط با ما
            </h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronLeft className="w-4 h-4 text-amber-500/70 group-hover:-translate-x-1 transition-transform" />
                  <span>درباره ما</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronLeft className="w-4 h-4 text-amber-500/70 group-hover:-translate-x-1 transition-transform" />
                  <span>تماس با ما</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون سوم: شرایط و قوانین */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-amber-400 tracking-wide border-b border-amber-900/40 pb-2 inline-block">
              شرایط و قوانین
            </h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <Link href="/terms" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronLeft className="w-4 h-4 text-amber-500/70 group-hover:-translate-x-1 transition-transform" />
                  <span>شرایط خرید و فروش</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ستون چهارم: اطلاعات حراج */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-amber-400 tracking-wide border-b border-amber-900/40 pb-2 inline-block">
              اطلاعات حراج
            </h4>
            <ul className="space-y-3 text-sm text-stone-300">
              <li>
                <Link href="/shipping" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronLeft className="w-4 h-4 text-amber-500/70 group-hover:-translate-x-1 transition-transform" />
                  <span>حمل و نقل آثار</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronLeft className="w-4 h-4 text-amber-500/70 group-hover:-translate-x-1 transition-transform" />
                  <span>سوالات متداول</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}