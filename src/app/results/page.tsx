"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  mockAuctionResults,
  AuctionResultLot,
} from "../../data/resultsData";
import {
  Search,
  BookOpen,
  CheckCircle2,
  XCircle,
  TrendingUp,
  LayoutGrid,
  List,
  Calendar,
  MapPin,
  Sparkles,
  Percent,
} from "lucide-react";

type FilterStatus = "all" | "sold" | "unsold";
type ViewMode = "grid" | "table";

export default function ResultsPage() {
  const [selectedEditionId, setSelectedEditionId] = useState<string>(
    mockAuctionResults[0].id
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const currentEdition = useMemo(() => {
    return (
      mockAuctionResults.find((e) => e.id === selectedEditionId) ||
      mockAuctionResults[0]
    );
  }, [selectedEditionId]);

  // فیلتر و جستجوی همزمان
  const filteredLots = useMemo(() => {
    return currentEdition.lots.filter((lot) => {
      const matchesSearch =
        lot.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lot.lotNumber.toString().includes(searchQuery);

      if (!matchesSearch) return false;

      if (filterStatus === "sold") return lot.isSold;
      if (filterStatus === "unsold") return !lot.isSold;
      return true;
    });
  }, [currentEdition, searchQuery, filterStatus]);

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

      {/* سربرگ معرفی نتایج حراج */}
      <section className="relative w-full py-14 sm:py-18 border-b border-amber-900/30 overflow-hidden bg-gradient-to-b from-[#181512] to-[#12100e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>آرشیو رسمی ارقام فروش و رکوردها</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight mb-3">
            نتایج دوره‌های حراج
          </h1>
          <p className="text-xs sm:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
            بررسی دقیق چکش‌خوردن آثار، رقم‌های نهایی، مقایسه با برآورد کارشناسی
            و گزارش‌های آماری هر دوره.
          </p>
        </div>
      </section>

      {/* تب انتخاب دوره‌ها (Sticky Bar) */}
      <section className="sticky top-20 z-40 bg-[#12100e]/95 backdrop-blur-md border-b border-amber-900/20 py-3.5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-stone-400 shrink-0 ml-2">
              دوره حراج:
            </span>
            {mockAuctionResults.map((edition) => {
              const isActive = edition.id === selectedEditionId;
              return (
                <button
                  key={edition.id}
                  onClick={() => setSelectedEditionId(edition.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-amber-500 text-stone-950 shadow-lg shadow-amber-500/20 font-bold scale-[1.02]"
                      : "bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800 hover:border-amber-500/40"
                  }`}
                >
                  {edition.editionName} ({edition.date})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        {/* باکس شناسنامه دوره انتخابی */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1b1814] to-[#141210] border border-amber-900/40 shadow-xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  LOTS 1 - {currentEdition.lotsCount}
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-500" />
                  {currentEdition.date}
                </span>
                <span className="text-xs text-stone-400 flex items-center gap-1 hidden sm:flex">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {currentEdition.venue}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-100">
                {currentEdition.title}
              </h2>
            </div>

            {/* دکمه کاتالوگ الکترونیک */}
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-amber-300 hover:text-white border border-amber-500/40 transition text-xs font-bold shrink-0"
            >
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>مشاهده کاتالوگ این دوره</span>
            </Link>
          </div>

          {/* کارت‌های تجمیعی آمار */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-stone-800/80">
            <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800/80">
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                فروش کل دوره
              </span>
              <span className="text-sm sm:text-base font-bold text-amber-300 font-mono mt-1 block">
                {currentEdition.totalSales.toLocaleString()} میلیارد
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800/80">
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                آثار عرضه شده
              </span>
              <span className="text-sm sm:text-base font-bold text-stone-100 font-mono mt-1 block">
                {currentEdition.lotsCount} اثر
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800/80">
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                آثار چکش‌خورده
              </span>
              <span className="text-sm sm:text-base font-bold text-stone-100 font-mono mt-1 block">
                {currentEdition.soldCount} اثر
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800/80">
              <span className="text-[11px] text-stone-400 flex items-center gap-1">
                <Percent className="w-3.5 h-3.5 text-amber-400" />
                درصد فروش
              </span>
              <span className="text-sm sm:text-base font-bold text-stone-100 font-mono mt-1 block">
                {currentEdition.clearanceRate}٪
              </span>
            </div>
          </div>
        </section>

        {/* فیلترها، جستجو و تغییر چینش */}
        <section className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-stone-900/70 border border-stone-800">
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="جستجوی هنرمند، عنوان اثر یا شماره Lot..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-950 text-stone-200 text-xs rounded-xl py-2.5 pr-10 pl-4 border border-stone-800 focus:border-amber-500 focus:outline-none placeholder:text-stone-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-3">
            {/* فیلتر وضعیت فروش */}
            <div className="flex items-center gap-1 p-1 bg-stone-950 rounded-lg border border-stone-800 text-xs">
              <button
                onClick={() => setFilterStatus("all")}
                className={`px-3 py-1 rounded-md transition ${
                  filterStatus === "all"
                    ? "bg-amber-500/20 text-amber-300 font-bold"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                همه
              </button>
              <button
                onClick={() => setFilterStatus("sold")}
                className={`px-3 py-1 rounded-md transition ${
                  filterStatus === "sold"
                    ? "bg-emerald-500/20 text-emerald-300 font-bold"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                فروخته‌شده
              </button>
              <button
                onClick={() => setFilterStatus("unsold")}
                className={`px-3 py-1 rounded-md transition ${
                  filterStatus === "unsold"
                    ? "bg-rose-500/20 text-rose-300 font-bold"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                فروش‌نرفته
              </button>
            </div>

            {/* سوئیچ نمایش کارت / جدول */}
            <div className="flex items-center gap-1 p-1 bg-stone-950 rounded-lg border border-stone-800">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-1.5 rounded-md transition ${
                  viewMode === "grid"
                    ? "bg-amber-500/20 text-amber-300"
                    : "text-stone-500 hover:text-stone-300"
                }`}
                title="نمای کارتی"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`p-1.5 rounded-md transition ${
                  viewMode === "table"
                    ? "bg-amber-500/20 text-amber-300"
                    : "text-stone-500 hover:text-stone-300"
                }`}
                title="نمای جدولی"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* لیست آثار نتایج: نمای کارتی */}
        {viewMode === "grid" ? (
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLots.map((lot) => (
              <div
                key={lot.id}
                className="group flex flex-col justify-between rounded-2xl bg-[#161412] border border-stone-800 hover:border-amber-500/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[4/3] w-full bg-stone-950 p-3 flex items-center justify-center overflow-hidden border-b border-stone-800/80">
                  <img
                    src={lot.imageUrl}
                    alt={lot.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-bold bg-black/80 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                    LOT #{lot.lotNumber}
                  </span>

                  {/* لیبل وضعیت فروش */}
                  <span
                    className={`absolute bottom-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1 ${
                      lot.isSold
                        ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
                        : "bg-stone-900/90 text-stone-400 border border-stone-700"
                    }`}
                  >
                    {lot.isSold ? (
                      <>
                        <CheckCircle2 className="w-3 h-3" />
                        فروخته شد
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3 h-3" />
                        چکش نخورد
                      </>
                    )}
                  </span>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-stone-100 truncate">
                      {lot.artist}
                    </h3>
                    <p className="text-[11px] text-stone-500 font-mono">
                      ({lot.artistBirthDeath})
                    </p>
                    <p className="text-xs text-amber-400/90 truncate mt-1">
                      {lot.title}
                    </p>
                  </div>

                  <div className="space-y-1 text-[11px] text-stone-400 bg-stone-900/60 p-2 rounded-lg border border-stone-800">
                    <p className="truncate">تکنیک: {lot.medium}</p>
                    <p>ابعاد: {lot.dimensions}</p>
                  </div>

                  <div className="pt-2 border-t border-stone-800 space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-stone-400">برآورد:</span>
                      <span className="font-mono text-stone-300">
                        {lot.estimateMin.toLocaleString()} - {lot.estimateMax.toLocaleString()} م.ت
                      </span>
                    </div>

                    <div className="flex justify-between text-xs items-baseline">
                      <span className="font-bold text-stone-300">قیمت فروش:</span>
                      {lot.isSold && lot.soldPrice ? (
                        <span className="font-mono font-bold text-amber-400 text-sm">
                          {lot.soldPrice.toLocaleString()} میلیون تومان
                        </span>
                      ) : (
                        <span className="text-stone-500 italic text-[11px]">
                          فروش نرفت
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        ) : (
          /* لیست آثار نتایج: نمای جدولی فشرده */
          <section className="overflow-x-auto rounded-2xl border border-stone-800 bg-[#161412]">
            <table className="w-full text-right text-xs">
              <thead className="bg-stone-900/90 text-stone-400 border-b border-stone-800">
                <tr>
                  <th className="py-3.5 px-4">Lot</th>
                  <th className="py-3.5 px-4">تصویر</th>
                  <th className="py-3.5 px-4">هنرمند</th>
                  <th className="py-3.5 px-4">عنوان اثر</th>
                  <th className="py-3.5 px-4">برآورد (میلیون تومان)</th>
                  <th className="py-3.5 px-4">قیمت نهایی</th>
                  <th className="py-3.5 px-4 text-center">وضعیت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/60 font-medium">
                {filteredLots.map((lot) => (
                  <tr
                    key={lot.id}
                    className="hover:bg-stone-900/40 transition-colors"
                  >
                    <td className="py-3 px-4 font-mono font-bold text-amber-400">
                      #{lot.lotNumber}
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-12 h-12 rounded-lg bg-stone-950 p-1 border border-stone-800 flex items-center justify-center">
                        <img
                          src={lot.imageUrl}
                          alt={lot.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4 text-stone-100 font-bold whitespace-nowrap">
                      {lot.artist}
                    </td>
                    <td className="py-3 px-4 text-stone-300 max-w-xs truncate">
                      {lot.title}
                    </td>
                    <td className="py-3 px-4 font-mono text-stone-400 whitespace-nowrap">
                      {lot.estimateMin.toLocaleString()} - {lot.estimateMax.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 font-mono font-bold whitespace-nowrap">
                      {lot.isSold && lot.soldPrice ? (
                        <span className="text-amber-400">
                          {lot.soldPrice.toLocaleString()} م.ت
                        </span>
                      ) : (
                        <span className="text-stone-500 italic">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          lot.isSold
                            ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                            : "bg-stone-800 text-stone-400"
                        }`}
                      >
                        {lot.isSold ? "فروخته شد" : "چکش نخورد"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        )}

        {filteredLots.length === 0 && (
          <div className="text-center py-16 bg-stone-900/40 rounded-2xl border border-stone-800">
            <p className="text-stone-400 text-sm">
              اثری با معیارهای جستجوی شما یافت نشد.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}