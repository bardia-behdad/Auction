"use client"
import dynamic from "next/dynamic";

const CatalogViewer = dynamic(() => import("./components/CatalogViewer"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-neutral-400 gap-3">
      <div className="w-6 h-6 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-xs font-mono tracking-wider">در حال آماده‌سازی کاتالوگ دیجیتال...</p>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <CatalogViewer />
    </main>
  );
}