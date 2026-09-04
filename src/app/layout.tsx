import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "ایران حراج | حراج تخصصی آثار هنری مدرن و معاصر",
  description: "مرجع و بستر رسمی نمایش و کاتالوگ حراج ملی آثار اساتید هنر ایران",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-stone-950 text-stone-100 min-h-screen flex flex-col antialiased selection:bg-amber-700 selection:text-white">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}