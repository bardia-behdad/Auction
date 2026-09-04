"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isCatalogPage = pathname === "/catalog";

  return (
    <html lang="fa" dir="rtl">
      <body className="bg-stone-950 text-stone-100 min-h-screen flex flex-col antialiased selection:bg-amber-700 selection:text-white">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        {/* فوتر در تمامی صفحات نمایش داده می‌شود به جز صفحه کاتالوگ */}
        {!isCatalogPage && <Footer />}
      </body>
    </html>
  );
}