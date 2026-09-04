export interface AuctionResultLot {
  id: string;
  lotNumber: number;
  artist: string;
  artistBirthDeath: string;
  title: string;
  medium: string;
  dimensions: string;
  imageUrl: string;
  estimateMin: number; // میلیون تومان
  estimateMax: number; // میلیون تومان
  soldPrice: number | null; // میلیون تومان - null در صورت فروش نرفتن
  isSold: boolean;
}

export interface AuctionEditionResult {
  id: string;
  editionNumber: number;
  editionName: string;
  title: string;
  date: string;
  venue: string;
  totalSales: number; // میلیارد تومان
  lotsCount: number;
  soldCount: number;
  clearanceRate: number; // درصد
  catalogPdfUrl?: string;
  lots: AuctionResultLot[];
}

export const mockAuctionResults: AuctionEditionResult[] = [
  {
    id: "edition-25",
    editionNumber: 25,
    editionName: "دوره بیست و پنجم",
    title: "هنر مدرن، کلاسیک و هنرهای سنتی ایران",
    date: "تیر ۱۴۰۵",
    venue: "هتل پارسیان آزادی تهران",
    totalSales: 464.26,
    lotsCount: 100,
    soldCount: 96,
    clearanceRate: 96,
    catalogPdfUrl: "/catalog",
    lots: [
      {
        id: "lot-25-1",
        lotNumber: 1,
        artist: "سهراب سپهری",
        artistBirthDeath: "۱۳۰۷-۱۳۵۹",
        title: "بدون عنوان (از مجموعه تنه درختان)",
        medium: "رنگ‌روغن روی بوم",
        dimensions: "۱۰۰×۷۰ سانتی‌متر",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
        estimateMin: 32000,
        estimateMax: 36000,
        soldPrice: 42350,
        isSold: true,
      },
      {
        id: "lot-25-2",
        lotNumber: 2,
        artist: "محمود فرشچیان",
        artistBirthDeath: "متولد ۱۳۰۸",
        title: "معراج عشق و نیایش",
        medium: "اکریلیک روی مقوا",
        dimensions: "۸۰×۶۰ سانتی‌متر",
        imageUrl: "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=800",
        estimateMin: 12000,
        estimateMax: 15000,
        soldPrice: 15620,
        isSold: true,
      },
      {
        id: "lot-25-3",
        lotNumber: 3,
        artist: "پرویز تناولی",
        artistBirthDeath: "متولد ۱۳۱۶",
        title: "هیچ روی سنگ سیاه",
        medium: "برنز روی پایه سنگ گرانیت",
        dimensions: "۵۵×۳۰×۲۰ سانتی‌متر",
        imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=800",
        estimateMin: 10000,
        estimateMax: 12000,
        soldPrice: 12400,
        isSold: true,
      },
      {
        id: "lot-25-4",
        lotNumber: 4,
        artist: "منیر فرمانفرمائیان",
        artistBirthDeath: "۱۳۰۱-۱۳۹۸",
        title: "چهارضلعی در آینه‌کاری",
        medium: "آینه‌کاری و نقاشی پشت شیشه روی گچ و چوب",
        dimensions: "۹۰×۹۰ سانتی‌متر",
        imageUrl: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800",
        estimateMin: 9000,
        estimateMax: 11000,
        soldPrice: 8500,
        isSold: true,
      },
      {
        id: "lot-25-5",
        lotNumber: 5,
        artist: "محمد احصایی",
        artistBirthDeath: "متولد ۱۳۱۸",
        title: "الفبای ازلی",
        medium: "رنگ‌روغن روی بوم",
        dimensions: "۱۲۰×۱۲۰ سانتی‌متر",
        imageUrl: "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=800",
        estimateMin: 7000,
        estimateMax: 9000,
        soldPrice: null,
        isSold: false,
      },
    ],
  },
  {
    id: "edition-24",
    editionNumber: 24,
    editionName: "دوره بیست و چهارم",
    title: "هنر معاصر ایران",
    date: "مهر ۱۴۰۴",
    venue: "هتل پارسیان آزادی تهران",
    totalSales: 147.21,
    lotsCount: 90,
    soldCount: 84,
    clearanceRate: 93.3,
    catalogPdfUrl: "/catalog",
    lots: [
      {
        id: "lot-24-1",
        lotNumber: 1,
        artist: "منوچهر یکتایی",
        artistBirthDeath: "۱۳۰۱-۱۳۹۸",
        title: "طبیعت بی‌جان با گلدان",
        medium: "رنگ‌روغن روی بوم",
        dimensions: "۱۱۰×۹۵ سانتی‌متر",
        imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
        estimateMin: 8000,
        estimateMax: 10000,
        soldPrice: 9800,
        isSold: true,
      },
      {
        id: "lot-24-2",
        lotNumber: 2,
        artist: "حسین زنده‌رودی",
        artistBirthDeath: "متولد ۱۳۱۶",
        title: "صدا و سکوت",
        medium: "اکریلیک روی بوم",
        dimensions: "۱۴۰×۱۰۰ سانتی‌متر",
        imageUrl: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=800",
        estimateMin: 14000,
        estimateMax: 18000,
        soldPrice: 17500,
        isSold: true,
      },
    ],
  },
];