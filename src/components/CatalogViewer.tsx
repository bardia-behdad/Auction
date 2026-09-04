"use client";

import React, { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { mockLots } from "../data/mockLots";
import {
  ChevronLeft,
  ChevronRight,
  Award,
  Sparkles,
  LayoutGrid,
  X,
  Maximize2,
  Minimize2,
} from "lucide-react";

const BG_IMAGE_URL =
  "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=1600";

// تعریف تایپ دقیق برای رفع خطاهای VS Code
interface OverviewItem {
  pageNumber: number;
  title: string;
  subtitle: string;
  isCover?: boolean;
  pageEndNumber?: number;
  imageUrl?: string;
  lotNumber?: number;
}

const Page = React.forwardRef<
  HTMLDivElement,
  { number: number; children: React.ReactNode; isCover?: boolean; isRightPage?: boolean }
>((props, ref) => {
  return (
    <div
      ref={ref}
      className={`h-full w-full p-3 sm:p-5 md:p-6 flex flex-col justify-between select-none relative overflow-hidden transform-gpu [backface-visibility:hidden] ${
        props.isCover
          ? "bg-[#161513] text-[#EDE8DF] shadow-[inset_0_0_80px_rgba(0,0,0,0.85)] border-l border-amber-900/40"
          : "bg-[#FAF8F3] text-stone-900 border-stone-200 shadow-[inset_0_0_35px_rgba(0,0,0,0.03)]"
      }`}
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
    >
      {props.isCover && (
        <>
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.14] mix-blend-overlay"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)`,
              backgroundSize: "4px 4px, 6px 6px",
            }}
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-amber-500/[0.03] to-white/[0.04]" />
        </>
      )}

      {!props.isCover && (
        <>
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/40 via-transparent to-black/[0.02]" />
          <div
            className={`hidden md:block absolute top-0 bottom-0 pointer-events-none z-20 w-10 ${
              props.isRightPage
                ? "left-0 bg-gradient-to-r from-black/15 via-black/5 to-transparent"
                : "right-0 bg-gradient-to-l from-black/15 via-black/5 to-transparent"
            }`}
          />
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:12px_12px]" />
        </>
      )}

      <div className="h-full flex flex-col justify-center relative z-10">{props.children}</div>

      {!props.isCover && (
        <div className="text-center font-serif text-[11px] text-stone-400 tracking-[0.25em] pt-1 border-t border-stone-200/60 relative z-10">
          — {props.number} —
        </div>
      )}
    </div>
  );
});
Page.displayName = "Page";

export default function CatalogViewer() {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [bookDimensions, setBookDimensions] = useState({ width: 340, height: 480 });
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const [pageInputValue, setPageInputValue] = useState<string>("1");
  const [showOverview, setShowOverview] = useState<boolean>(false);
  const isJumpingRef = useRef<boolean>(false);

  const totalPages = mockLots.length * 2 + 2;

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      const reservedHeight = isFullscreen ? 110 : 80 + 105;
      const maxPossibleHeight = window.innerHeight - reservedHeight;

      if (mobile) {
        const width = Math.min(window.innerWidth - 28, 350);
        const height = Math.max(260, Math.min(maxPossibleHeight, 490));
        setBookDimensions({ width, height });
      } else {
        const calcHeight = Math.max(280, Math.min(maxPossibleHeight, isFullscreen ? 560 : 490));
        const calcWidth = Math.round(calcHeight * 0.7);
        setBookDimensions({ width: calcWidth, height: calcHeight });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isFullscreen]);

  useEffect(() => {
    const img = new Image();
    img.src = BG_IMAGE_URL;
  }, []);

  useEffect(() => {
    if (isMobile) {
      setPageInputValue((currentPage + 1).toString());
    } else if (currentPage > 0 && currentPage < totalPages - 1) {
      const rightPage = currentPage % 2 === 1 ? currentPage + 1 : currentPage;
      const leftPage = rightPage + 1;

      if (leftPage <= totalPages - 1) {
        setPageInputValue(`${rightPage} - ${leftPage}`);
      } else {
        setPageInputValue(rightPage.toString());
      }
    } else {
      setPageInputValue((currentPage + 1).toString());
    }
  }, [currentPage, isMobile, totalPages]);

  const jumpToSpecificPage = (pageNum: number) => {
    const safePage = Math.max(1, Math.min(pageNum, totalPages));
    let targetIndex = 0;

    if (isMobile) {
      targetIndex = safePage - 1;
    } else {
      if (safePage === 1) {
        targetIndex = 0;
      } else if (safePage >= totalPages) {
        targetIndex = totalPages - 1;
      } else {
        targetIndex = safePage % 2 === 0 ? safePage - 1 : safePage - 2;
      }
    }

    const pageFlipInstance = bookRef.current?.pageFlip();
    if (pageFlipInstance) {
      if (typeof pageFlipInstance.turnToPage === "function") {
        pageFlipInstance.turnToPage(targetIndex);
      } else {
        pageFlipInstance.flip(targetIndex);
      }
    }
  };

  const handlePageJump = () => {
    if (isJumpingRef.current) return;
    isJumpingRef.current = true;

    setTimeout(() => {
      isJumpingRef.current = false;
    }, 400);

    const normalizedInput = pageInputValue
      .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
      .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d).toString());

    const match = normalizedInput.match(/\d+/);
    if (!match) {
      if (!isMobile && currentPage > 0 && currentPage < totalPages - 1) {
        const r = currentPage % 2 === 1 ? currentPage + 1 : currentPage;
        setPageInputValue(`${r} - ${r + 1}`);
      } else {
        setPageInputValue((currentPage + 1).toString());
      }
      return;
    }

    jumpToSpecificPage(parseInt(match[0], 10));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handlePageJump();
      (e.target as HTMLInputElement).blur();
    }
  };

  const handleFlipNext = () => bookRef.current?.pageFlip().flipNext();
  const handleFlipPrev = () => bookRef.current?.pageFlip().flipPrev();

  const isAtStart = currentPage === 0;
  const isAtEnd = currentPage >= totalPages - 1;

  // استفاده از اینترفیس تعریف‌شده برای رفع خطای تایپ‌اسکریپت
  const overviewItems: OverviewItem[] = [
    { pageNumber: 1, title: "جلد آغازین", subtitle: "حراج ملی هنر معاصر", isCover: true },
    ...mockLots.map((lot, index) => ({
      pageNumber: index * 2 + 2,
      pageEndNumber: index * 2 + 3,
      lotNumber: lot.lotNumber,
      title: lot.artist,
      subtitle: lot.title,
      imageUrl: lot.imageUrl,
    })),
    { pageNumber: totalPages, title: "جلد پایانی", subtitle: "شناسنامه حراج", isCover: true },
  ];

  return (
    <div
      onClick={() => {
        if (isFullscreen) setIsFullscreen(false);
      }}
      className={`w-full overflow-hidden flex flex-col items-center justify-between select-none transition-all duration-300 ${
        isFullscreen
          ? "fixed inset-0 z-50 h-screen py-2 sm:py-4 px-3 sm:px-6 bg-black/40 backdrop-blur-md cursor-pointer"
          : "relative h-[calc(100dvh-5rem)] py-1.5 sm:py-2 px-2 sm:px-4 bg-stone-950"
      }`}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://v1.fontapi.ir/css/IranNastaliq');
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap');

        .font-nastaliq {
          font-family: 'IranNastaliq', 'Iran Nastaliq', cursive, serif !important;
        }
        .font-gallery {
          font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, serif !important;
        }
      `}} />

      {/* پس‌زمینه */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none transition-all duration-500 ${
          isFullscreen ? "opacity-50 blur-[3px]" : "opacity-95"
        }`}
        style={{ backgroundImage: `url('${BG_IMAGE_URL}')` }}
      />
      <div
        className={`absolute inset-0 pointer-events-none transition-all duration-300 ${
          isFullscreen ? "bg-stone-950/40" : "bg-white/20 backdrop-blur-[2px] backdrop-brightness-105"
        }`}
      />

      {/* تیتر بالا */}
      <header className="relative z-10 text-center shrink-0 pointer-events-none">
        <h1 className="font-gallery text-[10px] sm:text-xs font-medium tracking-wider text-neutral-900 bg-white/85 backdrop-blur-md px-3 sm:px-4 py-1 rounded-full border border-white/60 shadow-sm pointer-events-none">
          حراج ملی هنر معاصر ایران • دوره ۲۱ {isFullscreen && "• (کلیک در بیرون جهت خروج)"}
        </h1>
      </header>

      {/* محفظه میانی */}
      <div className="relative z-10 flex items-center justify-center my-auto w-full max-w-full gap-3 sm:gap-6 md:gap-8 lg:gap-12 px-2 min-h-0">
        
        {/* دکمه سمت راست: بعدی */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFlipNext();
          }}
          disabled={isAtEnd}
          aria-label="صفحه بعدی"
          className={`hidden md:flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/85 hover:bg-white text-stone-800 hover:text-amber-800 border border-white/90 shadow-xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95 group shrink-0 ${
            isAtEnd ? "opacity-30 cursor-not-allowed hover:scale-100 hover:bg-white/85 hover:text-stone-800" : "cursor-pointer"
          }`}
        >
          <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>

        {/* کادر کتاب */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-auto max-w-[98vw] flex items-center justify-center p-1.5 sm:p-2.5 rounded-2xl bg-white/35 backdrop-blur-md border border-white/60 shadow-2xl overflow-hidden cursor-default shrink-0"
        >
          <div className="flex items-center justify-center">
            <HTMLFlipBook
              key={`${isMobile ? "mobile" : "desktop"}-${isFullscreen ? "fs" : "reg"}-${bookDimensions.height}`}
              width={bookDimensions.width}
              height={bookDimensions.height}
              size="fixed"
              minWidth={240}
              maxWidth={600}
              minHeight={250}
              maxHeight={750}
              showCover={!isMobile}
              flippingTime={800}
              usePortrait={isMobile}
              startZIndex={0}
              autoSize={true}
              maxShadowOpacity={0.4}
              drawShadow={true}
              showPageCorners={true}
              disableFlipByClick={true}
              onFlip={(e: { data: number }) => setCurrentPage(e.data)}
              ref={bookRef}
              className="catalog-flipbook"
              style={{ margin: "0 auto" }}
            >
              <Page number={1} isCover>
                <div className="h-full flex flex-col items-center justify-between text-center p-3 sm:p-5 border border-amber-600/30 relative rounded-sm shadow-[inset_0_0_20px_rgba(0,0,0,0.6)]">
                  <div className="absolute inset-1.5 sm:inset-2 border border-amber-500/20 pointer-events-none" />

                  <div className="w-full flex justify-between items-center text-[9px] sm:text-[10px] font-gallery text-amber-400/90 font-medium tracking-[0.2em] uppercase">
                    <span>دوره بیست و یکم</span>
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                    <span>پاییز ۱۴۰۳</span>
                  </div>

                  <div className="my-auto py-1">
                    <span className="text-amber-400/80 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase block mb-0.5 font-serif">
                      Tehran Auction
                    </span>

                    <h2 className="font-nastaliq text-2xl sm:text-3xl md:text-4xl text-amber-300/95 leading-[1.7] drop-shadow-md my-0.5">
                      مجموعه زرین هنر ایران
                    </h2>

                    <div className="w-10 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent mx-auto my-1.5" />

                    <p className="font-gallery text-[9px] sm:text-[11px] text-stone-300 font-light max-w-[240px] mx-auto leading-relaxed tracking-wide">
                      کاتالوگ نفیس نقاشی، خط و مجسمه‌سازی اساتید پیشگام هنر نوین
                    </p>
                  </div>

                  <div className="font-gallery text-[8px] sm:text-[9px] text-stone-400 tracking-wider font-light">
                    برای باز کردن، لبه برگه را به چپ بکشید
                  </div>
                </div>
              </Page>

              {mockLots.flatMap((lot, index) => [
                <Page key={`details-${lot.id}`} number={index * 2 + 2} isRightPage={true}>
                  <div className="flex flex-col justify-between h-full text-right" dir="rtl">
                    <div>
                      <div className="flex justify-between items-baseline border-b border-stone-200 pb-1 mb-1">
                        <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                          LOT #{lot.lotNumber}
                        </span>
                        <span className="font-gallery text-[9px] sm:text-[10px] text-stone-500 font-medium">بخش هنر مدرن</span>
                      </div>

                      <h3 className="font-nastaliq text-xl sm:text-2xl md:text-3xl text-stone-950 leading-[1.4] mt-0.5">
                        {lot.artist}
                      </h3>
                      <p className="text-[9px] sm:text-[10px] text-stone-500 font-mono">({lot.artistBirthDeath})</p>

                      <h4 className="font-gallery text-xs sm:text-sm font-semibold text-amber-900 mt-1 sm:mt-1.5 leading-snug">
                        {lot.title}
                      </h4>

                      <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1 text-[9px] sm:text-[11px] text-stone-700 bg-stone-100/80 p-2 sm:p-2.5 rounded-lg border border-stone-200/70 font-gallery leading-relaxed">
                        <p><span className="text-stone-400 font-normal">تکنیک:</span> {lot.medium}</p>
                        <p><span className="text-stone-400 font-normal">ابعاد:</span> {lot.dimensions}</p>
                        <p><span className="text-stone-400 font-normal">امضا:</span> {lot.signedDetails}</p>
                      </div>
                    </div>

                    <div className="border-t border-stone-300 pt-1.5">
                      <span className="font-gallery text-[8px] sm:text-[9px] tracking-wider text-stone-400 block mb-0.5">
                        برآورد ارزش کارشناسی:
                      </span>
                      <div className="text-xs sm:text-sm md:text-base font-bold text-stone-950 font-serif">
                        {lot.estimateMin.toLocaleString()} - {lot.estimateMax.toLocaleString()}
                        <span className="font-gallery text-[9px] sm:text-[10px] font-normal text-stone-600 mr-1">میلیون تومان</span>
                      </div>
                    </div>
                  </div>
                </Page>,

                <Page key={`image-${lot.id}`} number={index * 2 + 3} isRightPage={false}>
                  <div className="flex flex-col h-full justify-between items-center py-0.5">
                    <div className="w-full flex justify-between font-gallery text-[8px] sm:text-[9px] text-stone-500 border-b border-stone-200/60 pb-1">
                      <span>شماره اثر: {lot.lotNumber.toString().padStart(2, "0")}</span>
                      <span className="italic text-stone-400">حراج حضوری</span>
                    </div>

                    <div className="w-full flex-1 min-h-0 my-1.5 sm:my-2 p-1.5 sm:p-2 bg-white shadow-md border border-stone-200/80 rounded-sm flex items-center justify-center overflow-hidden">
                      <img
                        src={lot.imageUrl}
                        alt={lot.title}
                        loading="eager"
                        decoding="sync"
                        className="w-full h-full object-contain pointer-events-none select-none"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800";
                        }}
                      />
                    </div>

                    <div className="font-gallery text-[10px] sm:text-[11px] font-medium text-stone-700 truncate w-full text-center pt-0.5">
                      {lot.artist} — {lot.title}
                    </div>
                  </div>
                </Page>,
              ])}

              <Page number={totalPages} isCover>
                <div className="h-full flex flex-col items-center justify-between text-center p-3 sm:p-5 border border-amber-600/30 rounded-sm">
                  <span className="text-[10px] sm:text-[11px] tracking-widest text-amber-400/80 font-serif uppercase">Tehran Auction</span>
                  <div className="my-auto">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500/60 mx-auto mb-1" />
                    <h3 className="font-nastaliq text-xl sm:text-2xl md:text-3xl text-stone-200 leading-[1.8]">
                      پایان کاتالوگ دوره ۲۱
                    </h3>
                    <p className="font-gallery text-[10px] sm:text-[11px] text-stone-400 mt-0.5 font-light">کلیه حقوق محفوظ است.</p>
                  </div>
                  <p className="text-[8px] sm:text-[9px] text-amber-500/60 font-mono tracking-widest">WWW.TEHRANAUCTION.COM</p>
                </div>
              </Page>
            </HTMLFlipBook>
          </div>
        </div>

        {/* دکمه سمت چپ: قبلی */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleFlipPrev();
          }}
          disabled={isAtStart}
          aria-label="صفحه قبلی"
          className={`hidden md:flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/85 hover:bg-white text-stone-800 hover:text-amber-800 border border-white/90 shadow-xl backdrop-blur-md transition-all duration-300 transform hover:scale-110 active:scale-95 group shrink-0 ${
            isAtStart ? "opacity-30 cursor-not-allowed hover:scale-100 hover:bg-white/85 hover:text-stone-800" : "cursor-pointer"
          }`}
        >
          <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>
      </div>

      {/* نوار ناوبری پایین */}
      <nav
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-white/60 shadow-lg shrink-0 cursor-default"
        dir="rtl"
      >
        <button
          onClick={handleFlipNext}
          disabled={isAtEnd}
          className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-gallery font-medium text-neutral-800 hover:text-amber-700 transition px-2 py-1 rounded-full hover:bg-neutral-100 ${
            isAtEnd ? "opacity-40 cursor-not-allowed" : ""
          }`}
          title="صفحه بعدی"
        >
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">بعدی</span>
        </button>

        <div className="flex items-center gap-1 px-1.5 sm:px-2 border-r border-neutral-300 font-mono text-[10px] sm:text-[11px]">
          <input
            type="text"
            value={pageInputValue}
            onChange={(e) => setPageInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handlePageJump}
            className="w-12 sm:w-16 text-center bg-stone-100/90 hover:bg-white focus:bg-white text-neutral-900 font-bold py-0.5 rounded border border-stone-300 focus:border-amber-600 focus:outline-none transition-all shadow-inner"
            title="شماره صفحه را تایپ کرده و Enter بزنید"
          />
          <span className="text-neutral-500 select-none">/ {totalPages}</span>
        </div>

        <button
          onClick={() => setShowOverview(true)}
          className="flex items-center gap-1 text-[10px] sm:text-[11px] font-gallery font-medium text-neutral-800 hover:text-amber-800 hover:bg-amber-50/80 px-2 py-1 rounded-full border border-stone-200/80 transition"
          title="نمایش فهرست و پیش‌نمایش صفحات"
        >
          <LayoutGrid className="w-3 h-3 text-amber-700" />
          <span className="hidden sm:inline">فهرست صفحات</span>
        </button>

        <button
          onClick={() => setIsFullscreen(!isFullscreen)}
          className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-gallery font-medium px-2 sm:px-2.5 py-1 rounded-full border transition ${
            isFullscreen
              ? "bg-amber-600 text-white border-amber-600 hover:bg-amber-700"
              : "text-neutral-800 hover:text-amber-800 hover:bg-amber-50/80 border-stone-200/80"
          }`}
          title={isFullscreen ? "خروج از تمام‌صفحه" : "نمایش تمام‌صفحه"}
        >
          {isFullscreen ? (
            <>
              <Minimize2 className="w-3 h-3" />
              <span className="hidden sm:inline">خروج</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3 h-3 text-amber-700" />
              <span className="hidden sm:inline">تمام‌صفحه</span>
            </>
          )}
        </button>

        <button
          onClick={handleFlipPrev}
          disabled={isAtStart}
          className={`flex items-center gap-1 text-[10px] sm:text-[11px] font-gallery font-medium text-neutral-800 hover:text-amber-700 transition px-2 py-1 rounded-full hover:bg-neutral-100 ${
            isAtStart ? "opacity-40 cursor-not-allowed" : ""
          }`}
          title="صفحه قبلی"
        >
          <span className="hidden sm:inline">قبلی</span>
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
      </nav>

      {/* مدال پیش‌نمایش صفحات */}
      {showOverview && (
        <div
          onClick={() => setShowOverview(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-stone-950/85 backdrop-blur-md animate-in fade-in duration-200 cursor-pointer"
          dir="rtl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[85vh] bg-[#FAF8F3] rounded-2xl shadow-2xl border border-stone-200/80 flex flex-col overflow-hidden cursor-default"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-stone-200/80 bg-white/70">
              <div className="flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-amber-800" />
                <h3 className="font-gallery text-sm sm:text-base font-bold text-stone-900">
                  نمای کلی صفحات کاتالوگ
                </h3>
              </div>
              <button
                onClick={() => setShowOverview(false)}
                className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition"
                title="بستن"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {overviewItems.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    jumpToSpecificPage(item.pageNumber);
                    setShowOverview(false);
                  }}
                  className="group cursor-pointer flex flex-col bg-white rounded-xl border border-stone-200 p-2 shadow-sm hover:shadow-md hover:border-amber-600 transition-all transform hover:-translate-y-0.5"
                >
                  <div className="relative w-full aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden flex items-center justify-center border border-stone-200/60">
                    {item.isCover ? (
                      <div className="w-full h-full bg-[#161513] flex flex-col items-center justify-center p-2 text-center text-amber-200/80">
                        <Award className="w-5 h-5 text-amber-500 mb-1" />
                        <span className="font-nastaliq text-sm text-amber-300">{item.title}</span>
                      </div>
                    ) : (
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-contain p-1 group-hover:scale-105 transition duration-300"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=400";
                        }}
                      />
                    )}
                    <span className="absolute bottom-1 right-1 font-mono text-[9px] bg-black/70 text-white px-1.5 py-0.5 rounded">
                      {item.pageEndNumber ? `${item.pageNumber}-${item.pageEndNumber}` : item.pageNumber}
                    </span>
                  </div>

                  <div className="mt-1.5 text-right">
                    <p className="font-gallery text-[11px] font-bold text-stone-900 truncate">
                      {item.title}
                    </p>
                    <p className="font-gallery text-[9px] text-stone-500 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}