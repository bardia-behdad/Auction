"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  Menu,
  X,
  Home,
  BookOpen,
  History,
  Image as ImageIcon,
  FileText,
  Info,
  ChevronLeft,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { label: "خانه", href: "/", icon: Home },
    { label: "کاتالوگ حراج", href: "/catalog", icon: BookOpen },
    { label: "نتایج قبلی", href: "/results", icon: History },
    { label: "اخبار و تصاویر", href: "/news", icon: ImageIcon },
    { label: "شرایط خرید و فروش", href: "/terms", icon: FileText },
    { label: "درباره ما", href: "/about", icon: Info },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-20 bg-[#141210]/95 backdrop-blur-md border-b border-amber-900/40 text-stone-200" dir="rtl">
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700&display=swap');
          .font-header {
            font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, serif !important;
          }
        `}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full gap-4">
            
            {/* لوگوی اختصاصی ایران حراج */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-900 p-[1px] shadow-lg shadow-amber-950/50">
                <div className="w-full h-full bg-[#191714] rounded-[11px] flex items-center justify-center overflow-hidden">
                  <svg
                    viewBox="0 0 44 44"
                    className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 group-hover:scale-105 transition-transform duration-300"
                    fill="none"
                  >
                    <circle cx="22" cy="22" r="19" stroke="url(#goldRim)" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                    <path
                      d="M22 6L26.5 16.5L38 18L29.5 25.5L32 37L22 31L12 37L14.5 25.5L6 18L17.5 16.5L22 6Z"
                      fill="url(#goldGrad)"
                      opacity="0.85"
                    />
                    <path d="M22 14V27" stroke="#161412" strokeWidth="2.2" strokeLinecap="round" />
                    <circle cx="22" cy="11.5" r="1.2" fill="#161412" />
                    <defs>
                      <linearGradient id="goldGrad" x1="6" y1="6" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FDE68A" />
                        <stop offset="0.45" stopColor="#D97706" />
                        <stop offset="1" stopColor="#92400E" />
                      </linearGradient>
                      <linearGradient id="goldRim" x1="3" y1="3" x2="41" y2="41" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FDE68A" />
                        <stop offset="1" stopColor="#B45309" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-header text-base sm:text-xl font-bold tracking-tight text-stone-100 group-hover:text-amber-300 transition-colors">
                  ایران حراج
                </span>
                <span className="text-[8px] sm:text-[9px] text-amber-500/80 font-mono tracking-[0.25em] uppercase">
                  IRAN AUCTION
                </span>
              </div>
            </Link>

            {/* منوی ناوبری دسکتاپ */}
            <nav className="hidden xl:flex items-center gap-2 2xl:gap-3 font-header text-xs tracking-wide">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-amber-500/15 border border-amber-500/35 text-amber-300 font-bold shadow-[0_0_15px_rgba(245,158,11,0.1)]"
                        : "text-stone-300 hover:text-white border border-transparent"
                    }`}
                  >
                    <Icon
                      className={`w-3.5 h-3.5 transition-colors duration-300 ${
                        isActive
                          ? "text-amber-300"
                          : "text-stone-400 group-hover:text-amber-300"
                      }`}
                    />
                    <span>{link.label}</span>

                    {!isActive && (
                      <span className="absolute bottom-0 right-3 left-3 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-300" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* نوار جستجو و دکمه منوی موبایل */}
            <div className="flex items-center gap-3">
              <form onSubmit={handleSearch} className="relative hidden md:block w-48 lg:w-60">
                <input
                  type="text"
                  placeholder="جست‌وجوی اثر، هنرمند..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-900/90 text-stone-200 text-xs font-header rounded-full py-2 pr-9 pl-4 border border-stone-800 focus:border-amber-600/80 focus:outline-none focus:ring-1 focus:ring-amber-500/30 placeholder:text-stone-500 transition-all"
                />
                <Search className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </form>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-xl text-stone-200 hover:text-amber-400 bg-stone-900/80 border border-stone-800 transition active:scale-95"
                aria-label="منوی اصلی"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* منوی بازشونده موبایل */}
        {isMobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-20 z-50 bg-[#141210]/98 border-b border-amber-900/40 backdrop-blur-2xl shadow-2xl px-5 py-6 space-y-4 animate-in slide-in-from-top-3 duration-200">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="جست‌وجوی اثر، هنرمند یا بخش..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-stone-900/90 text-stone-200 text-xs font-header rounded-full py-2.5 pr-10 pl-4 border border-stone-700/80 focus:border-amber-500 focus:outline-none placeholder:text-stone-500"
              />
              <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </form>

            <div className="space-y-1.5 pt-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-xs font-header transition-all ${
                      isActive
                        ? "text-amber-300 font-bold bg-amber-500/15 border border-amber-500/35 shadow-sm"
                        : "text-stone-300 hover:bg-stone-900/50 hover:text-white border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-stone-400"}`} />
                      <span>{link.label}</span>
                    </div>
                    <ChevronLeft className={`w-4 h-4 ${isActive ? "text-amber-300" : "text-stone-500"}`} />
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* پس‌زمینه نیمه‌شفاف برای بستن منوی موبایل با کلیک روی صفحه */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="xl:hidden fixed inset-0 top-20 z-40 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
          aria-hidden="true"
        />
      )}
    </>
  );
}