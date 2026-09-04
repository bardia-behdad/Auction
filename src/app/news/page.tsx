"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  mockMonthlyEditions,
  MonthlyEdition,
  NewsArticle,
} from "../../data/newsData";
import {
  Calendar,
  Clock,
  ArrowUpLeft,
  Trophy,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Layers,
  Image as ImageIcon,
} from "lucide-react";

export default function NewsPage() {
  // ماه انتخاب شده (پیش‌فرض اولین ماه / جدیدترین ماه)
  const [selectedMonthId, setSelectedMonthId] = useState<string>(
    mockMonthlyEditions[0].id
  );

  const currentEdition =
    mockMonthlyEditions.find((m) => m.id === selectedMonthId) ||
    mockMonthlyEditions[0];

  return (
    <div
      className="flex-1 w-full bg-[#12100e] text-stone-200 font-gallery selection:bg-amber-700 selection:text-white pb-20"
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

      {/* بنر هدر صفحه */}
      <section className="relative w-full py-16 sm:py-20 border-b border-amber-900/30 overflow-hidden bg-gradient-to-b from-[#181512] to-[#12100e]">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>رسانه و گزارش‌های رویداد</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight mb-3">
            اخبار، گزارش‌ها و تصاویر حراج
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
            پوشش جامع تحلیل‌ها، رکوردهای مالی، شاهکارهای چکش‌خورده و مصاحبه‌های
            اختصاصی به تفکیک دوره‌ها و ماه‌ها.
          </p>
        </div>
      </section>

      {/* نوار فیلتر ماه‌ها (Month Selector) - هماهنگ با پنل مدیریت آینده */}
      <section className="sticky top-20 z-40 bg-[#12100e]/95 backdrop-blur-md border-b border-amber-900/20 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-stone-400 shrink-0 ml-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-500" />
              <span>انتخاب ماه:</span>
            </span>

            {mockMonthlyEditions.map((edition) => {
              const isSelected = edition.id === selectedMonthId;
              return (
                <button
                  key={edition.id}
                  onClick={() => setSelectedMonthId(edition.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                    isSelected
                      ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 font-bold scale-[1.02]"
                      : "bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800 hover:border-amber-500/40"
                  }`}
                >
                  {edition.monthName}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-16">
        {/* ۱. باکس آمار و اطلاعات حراج ماه انتخابی */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1b1814] to-[#141210] border border-amber-900/40 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-amber-400/90 text-xs font-bold uppercase tracking-wider block mb-1">
                اطلاعات حراج ماه {currentEdition.monthName}
              </span>
              <h2 className="text-lg sm:text-2xl font-bold text-stone-100">
                {currentEdition.editionTitle}
              </h2>
            </div>

            {/* کارت‌های خلاصه وضعیت آماری */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 flex flex-col">
                <span className="text-[11px] text-stone-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                  رقم کل حراج
                </span>
                <span className="text-xs sm:text-sm font-bold text-amber-300 mt-1 truncate">
                  {currentEdition.totalSales}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 flex flex-col">
                <span className="text-[11px] text-stone-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  آثار فروخته‌شده
                </span>
                <span className="text-xs sm:text-sm font-bold text-stone-100 mt-1">
                  {currentEdition.soldCount}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 col-span-2 sm:col-span-1 flex flex-col">
                <span className="text-[11px] text-stone-400 flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  نرخ توفیق فروش
                </span>
                <span className="text-xs sm:text-sm font-bold text-stone-100 mt-1">
                  {currentEdition.clearanceRate}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ۲. بخش مقالات و اخبار این ماه */}
        <section className="space-y-6">
          <div className="flex items-center justify-between border-b border-amber-900/30 pb-3">
            <h3 className="text-lg sm:text-xl font-bold text-stone-100 flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-500" />
              <span>اخبار و گزارش‌های {currentEdition.monthName}</span>
            </h3>
            <span className="text-xs text-stone-400">
              {currentEdition.news.length} خبر ثبت‌شده
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentEdition.news.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col rounded-2xl bg-[#161412] border border-stone-800/90 hover:border-amber-500/50 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                {/* تصویر خبر با برچسب دسته‌بندی */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-900">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-stone-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* محتوای متنی */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-stone-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-500/70" />
                        {item.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-stone-500" />
                        {item.readTime}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-stone-100 group-hover:text-amber-300 transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-stone-400 mt-2.5 line-clamp-3 leading-relaxed font-light">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-amber-400 group-hover:text-amber-300 flex items-center gap-1">
                      <span>مطالعه کامل</span>
                      <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ۳. بخش شاهکارها و آثار برگزیده چکش‌خورده در این ماه */}
        {currentEdition.featuredWorks && currentEdition.featuredWorks.length > 0 && (
          <section className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-amber-900/30 pb-3">
              <h3 className="text-lg sm:text-xl font-bold text-stone-100 flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-amber-500" />
                <span>آثار برگزیده و شاهکارهای {currentEdition.monthName}</span>
              </h3>
              <Link
                href="/catalog"
                className="text-xs text-amber-400 hover:text-amber-300 transition font-medium"
              >
                مشاهده کاتالوگ کامل
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentEdition.featuredWorks.map((work) => (
                <div
                  key={work.id}
                  className="rounded-2xl p-3 bg-stone-900/60 border border-stone-800 hover:border-amber-600/40 transition-all group flex flex-col justify-between"
                >
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-950 p-2 flex items-center justify-center border border-stone-800/80">
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute bottom-2.5 right-2.5 text-[10px] font-mono bg-black/80 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                      LOT #{work.lotNumber}
                    </span>
                  </div>

                  <div className="p-3 text-right">
                    <h5 className="text-sm font-bold text-stone-100 truncate">
                      {work.artist}
                    </h5>
                    <p className="text-xs text-stone-400 truncate mt-0.5">
                      {work.title}
                    </p>

                    <div className="mt-3 pt-2.5 border-t border-stone-800 flex items-center justify-between">
                      <span className="text-[11px] text-stone-400">
                        قیمت نهایی فروش:
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-amber-400 font-mono">
                        {work.soldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}