"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  BookOpen,
  Gavel,
  ArrowLeft,
} from "lucide-react";

// ۴ تصویر منتخب برای اسلایدر هیرو
const heroSlides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1600",
    title: "اثر سهراب سپهری",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=1600",
    title: "اثر پرویز تناولی",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=1600",
    title: "اثر منیر فرمانفرمائیان",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=1600",
    title: "اثر نگارگری و خط نوین",
  },
];

// ۳ کارت حراج مطابق با تصویر
const auctionCards = [
  {
    id: "july-1405",
    date: "تیر ۱۴۰۵",
    title: "آثار مدرن، کلاسیک و هنرهای سنتی ایران",
    imageUrl:
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
    href: "/catalog",
  },
  {
    id: "mehr-1404",
    date: "مهر ۱۴۰۴",
    title: "هنر معاصر ایران",
    imageUrl:
      "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=800",
    href: "/results",
  },
  {
    id: "khordad-1404",
    date: "خرداد ۱۴۰۴",
    title: "هنر مدرن و معاصر ایران",
    imageUrl:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=800",
    href: "/results",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // متغیرهای مدیریت درگ هم برای موس و هم برای لمس
  const startX = useRef<number | null>(null);
  const currentX = useRef<number | null>(null);
  const isDragging = useRef(false);

  // تایمر ۵ ثانیه‌ای تغییر خودکار
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // رویدادهای همزمان موس و لمس با Pointer Events
  const handlePointerDown = (e: React.PointerEvent) => {
    // فقط کلیک چپ موس یا لمس مستقیم انگشت
    if (e.button !== 0 && e.pointerType === "mouse") return;
    startX.current = e.clientX;
    currentX.current = e.clientX;
    isDragging.current = true;
    setIsPaused(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    currentX.current = e.clientX;
  };

  const handlePointerUp = () => {
    if (!isDragging.current || startX.current === null || currentX.current === null) {
      isDragging.current = false;
      setIsPaused(false);
      return;
    }

    const diff = startX.current - currentX.current;
    const threshold = 40; // حداقل جابه‌جایی برای تریگر شدن

    if (diff > threshold) {
      // کشیدن به چپ: اسلاید بعدی
      handleNextSlide();
    } else if (diff < -threshold) {
      // کشیدن به راست: اسلاید قبلی
      handlePrevSlide();
    }

    isDragging.current = false;
    startX.current = null;
    currentX.current = null;
    setIsPaused(false);
  };

  return (
    <div className="flex-1 w-full bg-stone-950 text-stone-100 font-gallery selection:bg-amber-700 selection:text-white" dir="rtl">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&display=swap');
        .font-gallery {
          font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, serif !important;
        }
      `}} />

      {/* ================= هیرو اسلایدر با قابلیت درگ موس و لمس ================= */}
      <section
        className="relative w-full h-[580px] sm:h-[640px] lg:h-[720px] overflow-hidden select-none cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging.current) setIsPaused(false);
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* تصاویر اسلایدر */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            } transform transition-transform duration-[5000ms] pointer-events-none`}
          >
            <div
              className="w-full h-full bg-cover bg-center pointer-events-none"
              style={{ backgroundImage: `url('${slide.url}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-black/25 to-black/30 pointer-events-none" />
          </div>
        ))}

        {/* دکمه‌های ناوبری فقط در دسکتاپ و تبلت */}
        <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 inset-x-4 sm:inset-x-8 z-30 items-center justify-between pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevSlide();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label="اسلاید قبلی"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-amber-400 border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center pointer-events-auto hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextSlide();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            aria-label="اسلاید بعدی"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-amber-400 border border-white/20 backdrop-blur-md transition-all duration-300 flex items-center justify-center pointer-events-auto hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* نشانگرهای نقطه‌ای پایین */}
        <div className="absolute bottom-6 inset-x-0 z-30 flex justify-center items-center gap-2 pointer-events-none">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentSlide(idx);
              }}
              onPointerDown={(e) => e.stopPropagation()}
              className={`transition-all duration-300 pointer-events-auto rounded-full cursor-pointer ${
                idx === currentSlide
                  ? "w-8 h-2 bg-amber-400"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`رفتن به اسلاید ${idx + 1}`}
            />
          ))}
        </div>

        {/* باکس شیشه‌ای اطلاعات: با توقف انتشار رویداد روی خود باکس تا کلیک روی دکمه‌ها درگ محسوب نشود */}
        <div
          onPointerDown={(e) => e.stopPropagation()}
          className="absolute inset-x-4 mx-auto sm:inset-x-auto sm:mx-0 sm:left-14 lg:left-24 bottom-16 sm:bottom-24 lg:bottom-28 z-30 w-[calc(100%-2rem)] sm:w-auto max-w-[420px] cursor-default"
        >
          <div className="p-5 sm:p-7 rounded-2xl bg-stone-950/40 backdrop-blur-md border border-amber-500/30 shadow-[0_15px_35px_rgba(0,0,0,0.5)] text-right space-y-3.5 animate-in fade-in slide-in-from-bottom-3 duration-500">
            
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-2.5">
              <h2 className="text-lg sm:text-xl font-extrabold text-amber-300 tracking-tight drop-shadow-sm">
                بیست و پنجمین حراج تهران
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30">
                دوره ۲۵
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-stone-100 leading-snug drop-shadow-sm">
              آثار مدرن، کلاسیک و هنرهای سنتی ایران
            </p>

            <div className="text-xs text-amber-300/90 font-medium">
              <span>تاریخ برگزاری:</span> <span className="font-bold text-amber-200">تیر ۱۴۰۵</span>
            </div>

            <div className="pt-2 border-t border-white/10 space-y-1.5 text-xs text-stone-200">
              <div className="flex justify-between items-center">
                <span className="text-stone-300">رقم کل مزایده:</span>
                <span className="font-mono font-bold text-stone-100">
                  ۴۲۲,۰۰۰,۰۰۰,۰۰۰ <span className="text-[10px] font-gallery text-stone-300">تومان</span>
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-amber-300 font-medium">رقم نهایی فروش:</span>
                <span className="font-mono font-bold text-amber-300 text-sm">
                  ۴۶۴,۲۶۶,۰۰۰,۰۰۰ <span className="text-[10px] font-gallery text-amber-300/80">تومان</span>
                </span>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between gap-3">
              <Link
                href="/results"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs transition-all duration-300 shadow-md shadow-amber-950/40 hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-stone-950" />
                <span>مشاهده آثار</span>
              </Link>

              <Link
                href="/catalog"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-stone-950/60 hover:bg-stone-900/80 text-amber-300 hover:text-white border border-amber-500/40 hover:border-amber-400 font-bold text-xs transition-all duration-300 shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>مشاهده کاتالوگ</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= بخش حراج‌ها ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        <div className="flex items-center justify-between mb-10 border-b border-amber-900/30 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Gavel className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-100">حراج‌ها</h3>
              <p className="text-xs text-stone-400 font-light mt-0.5">
                دوره‌های اخیر حراج ملی و مدرن
              </p>
            </div>
          </div>

          <Link
            href="/results"
            className="flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors font-semibold group"
          >
            <span>آرشیو همه دوره‌ها</span>
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* سه کارت حراج */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {auctionCards.map((auction) => (
            <Link
              key={auction.id}
              href={auction.href}
              className="group flex flex-col rounded-xl overflow-hidden bg-[#161a29] border border-stone-800 hover:border-amber-500/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <img
                  src={auction.imageUrl}
                  alt={auction.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="w-full bg-white text-stone-800 text-center py-2 px-3 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
                {auction.date}
              </div>

              <div className="w-full bg-[#1b1f38] group-hover:bg-[#222847] text-white text-center py-3.5 px-4 text-xs sm:text-sm font-bold tracking-tight min-h-[58px] flex items-center justify-center transition-colors border-t border-[#292f52]">
                <span className="truncate">{auction.title}</span>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </div>
  );
}