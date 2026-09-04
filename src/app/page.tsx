"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Sparkles,
  ArrowUpLeft,
  Eye,
  Layers,
} from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  artist: string;
  date: string;
  venue: string;
  imageUrl: string;
  link: string;
}

const heroSlides: Slide[] = [
  {
    id: 1,
    title: "بیست و پنجمین دوره حراج تهران",
    subtitle: "هنر مدرن و معاصر ایران",
    artist: "گزیده‌ای از شاهکارهای سهراب سپهری، محمود فرشچیان و پرویز تناولی",
    date: "تیرماه ۱۴۰۵",
    venue: "هتل پارسیان آزادی تهران",
    imageUrl:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1600",
    link: "/catalog",
  },
  {
    id: 2,
    title: "پیشگامان هنر نوگرای ایران",
    subtitle: "مجموعه‌ای نفیس از آثار نقاشی‌خط و حجم",
    artist: "آثار منتخب محمد احصایی، منیر فرمانفرمائیان و حسین زنده‌رودی",
    date: "مهرماه ۱۴۰۵",
    venue: "نمایشگاه مجازی و سالن حراج",
    imageUrl:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=1600",
    link: "/news",
  },
  {
    id: 3,
    title: "آرشیو دوره‌های پیشین",
    subtitle: "ثبت بالاترین رکوردهای چکش‌خورده در خاورمیانه",
    artist: "تحلیل و بررسی ارزش‌آفرینی اقتصاد هنر در ۲۴ دوره گذشته",
    date: "آرشیو رسمی",
    venue: "گالری دائمی آنلاین",
    imageUrl:
      "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=1600",
    link: "/results",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // چرخش خودکار اسلایدر
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [currentSlide]);

  // مدیریت ژست لمسی انگشت در موبایل (RTL)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;

    // تشخیص کشیدن با حداقل آستانه ۴۰ پیکسل
    if (distance > 40) {
      // کشیدن به چپ در زبان فارسی یعنی رفتن به اسلاید بعد
      nextSlide();
    } else if (distance < -40) {
      // کشیدن به راست یعنی بازگشت به اسلاید قبل
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div
      className="flex-1 w-full bg-[#100e0c] text-stone-200 font-gallery selection:bg-amber-700 selection:text-white pb-24 overflow-hidden"
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

      {/* ================= هیرو اسلایدر با قابلیت سوایپ موبایل ================= */}
      <section
        className="relative w-full h-[620px] sm:h-[680px] lg:h-[740px] bg-black overflow-hidden select-none touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* تصویر پس‌زمینه با افکت بزرگ‌نمایی ملایم */}
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
                style={{ backgroundImage: `url(${slide.imageUrl})` }}
              >
                {/* لایه‌های گرادیان تیره و طلاکوب جهت خوانایی متن */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c] via-[#100e0c]/60 to-transparent" />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
              </div>

              {/* محتوای کارت روی اسلاید */}
              <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24 sm:pb-28">
                <div className="max-w-2xl space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 text-xs font-semibold backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{slide.subtitle}</span>
                  </div>

                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-100 tracking-tight leading-tight">
                    {slide.title}
                  </h1>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl font-light">
                    {slide.artist}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-stone-400 pt-2 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-amber-500" />
                      {slide.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-amber-500" />
                      {slide.venue}
                    </span>
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <Link
                      href={slide.link}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-950/60"
                    >
                      <span>ورود به بخش مربوطه</span>
                      <ArrowUpLeft className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* دکمه‌های ناوبری دستی اسلایدر در دسکتاپ */}
        <div className="absolute bottom-10 left-6 sm:left-12 z-30 flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="p-3 rounded-xl bg-stone-900/80 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border border-stone-800 transition active:scale-95 cursor-pointer backdrop-blur-md"
            aria-label="اسلاید قبلی"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-xl bg-stone-900/80 hover:bg-amber-500 text-stone-200 hover:text-stone-950 border border-stone-800 transition active:scale-95 cursor-pointer backdrop-blur-md"
            aria-label="اسلاید بعدی"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* نشانگرهای خطی اسلایدر */}
        <div className="absolute bottom-12 right-6 sm:right-12 z-30 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                i === currentSlide
                  ? "w-8 bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                  : "w-2 bg-stone-600 hover:bg-stone-400"
              }`}
              aria-label={`رفتن به اسلاید ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ================= کارت‌های دسترسی سریع ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <Link
            href="/catalog"
            className="p-6 rounded-2xl bg-[#161411]/95 border border-amber-900/40 hover:border-amber-500/60 shadow-xl backdrop-blur-xl transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition">
                کاتالوگ الکترونیک
              </h2>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                ورق زدن کاتالوگ آنلاین دوره بیست و پنجم همراه با جزئیات کارشناسی و برآوردها
              </p>
            </div>
            <span className="text-xs text-amber-400 font-semibold flex items-center gap-1 mt-4 pt-3 border-t border-stone-800">
              مشاهده آنلاین
              <ArrowUpLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/results"
            className="p-6 rounded-2xl bg-[#161411]/95 border border-amber-900/40 hover:border-amber-500/60 shadow-xl backdrop-blur-xl transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Eye className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition">
                نتایج و قیمت‌های نهایی
              </h2>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                بررسی آثار چکش‌خورده، نرخ رشد سالانه و رکوردهای رسمی دوره‌های برگزارشده
              </p>
            </div>
            <span className="text-xs text-amber-400 font-semibold flex items-center gap-1 mt-4 pt-3 border-t border-stone-800">
              مشاهده نتایج
              <ArrowUpLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/terms"
            className="p-6 rounded-2xl bg-[#161411]/95 border border-amber-900/40 hover:border-amber-500/60 shadow-xl backdrop-blur-xl transition-all group flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="text-base font-bold text-stone-100 group-hover:text-amber-300 transition">
                شرایط عمومی و ثبت‌نام
              </h2>
              <p className="text-xs text-stone-400 leading-relaxed font-light">
                ضوابط شرکت در مزایده، راهنمای اخذ پلاک حراج و جزئیات تسویه مالی
              </p>
            </div>
            <span className="text-xs text-amber-400 font-semibold flex items-center gap-1 mt-4 pt-3 border-t border-stone-800">
              مطالعه ضوابط
              <ArrowUpLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}