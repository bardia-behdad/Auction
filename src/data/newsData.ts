export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: "خبر" | "گزارش حراج" | "مصاحبه" | "نقد و بررسی";
  date: string;
  imageUrl: string;
  readTime: string;
  author?: string;
  content?: string;
}

export interface FeaturedWork {
  id: string;
  title: string;
  artist: string;
  soldPrice: string;
  imageUrl: string;
  lotNumber: number;
}

export interface MonthlyEdition {
  id: string;
  monthName: string; // نام ماه و سال برای تب‌ها
  editionTitle: string; // تیتر دوره
  totalSales: string; // رقم فروش کل دوره
  soldCount: string; // تعداد آثار فروخته شده
  clearanceRate: string; // درصد موفقیت فروش
  news: NewsArticle[];
  featuredWorks: FeaturedWork[];
}

export const mockMonthlyEditions: MonthlyEdition[] = [
  {
    id: "tir-1405",
    monthName: "تیر ۱۴۰۵",
    editionTitle: "بیست و پنجمین دوره حراج تهران (هنر مدرن و کلاسیک)",
    totalSales: "۴۶۴,۲۶۶,۰۰۰,۰۰۰ تومان",
    soldCount: "۹۶ اثر از ۱۰۰ اثر",
    clearanceRate: "۹۶٪",
    news: [
      {
        id: "news-1",
        title: "شکستن رکورد تاریخی در بیست و پنجمین حراج تهران",
        summary:
          "بیست و پنجمین دوره حراج تهران با ثبت رقم بی‌سابقه ۴۶۴ میلیارد تومان و فروش ۹۶ درصد از آثار ارائه شده به کار خود پایان داد.",
        category: "گزارش حراج",
        date: "۲۹ تیر ۱۴۰۵",
        readTime: "۴ دقیقه",
        imageUrl:
          "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "news-2",
        title: "اثر سهراب سپهری رکوردار گران‌ترین اثر سال شد",
        summary:
          "تابلوی بدون عنوان از مجموعه درخت‌های سهراب سپهری با قیمت چکش‌خورده ۳۸.۵ میلیارد تومان عنوان باارزش‌ترین اثر دوره را کسب کرد.",
        category: "خبر",
        date: "۲۸ تیر ۱۴۰۵",
        readTime: "۳ دقیقه",
        imageUrl:
          "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "news-3",
        title: "درخشش مینیاتور و هنرهای سنتی با آثار استاد فرشچیان",
        summary:
          "دو شاهکار استاد محمود فرشچیان با رقابت فشرده خریداران مرز ۱۰ میلیارد تومان را پشت سر گذاشتند و رکورد جدیدی در بخش سنتی به جای گذاشتند.",
        category: "خبر",
        date: "۲۷ تیر ۱۴۰۵",
        readTime: "۵ دقیقه",
        imageUrl:
          "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=800",
      },
    ],
    featuredWorks: [
      {
        id: "work-1",
        title: "از مجموعه درخت‌ها",
        artist: "سهراب سپهری",
        soldPrice: "۴۲,۳۵۰,۰۰۰,۰۰۰ تومان",
        lotNumber: 45,
        imageUrl:
          "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "work-2",
        title: "گل و مرغ",
        artist: "محمود فرشچیان",
        soldPrice: "۱۵,۶۲۰,۰۰۰,۰۰۰ تومان",
        lotNumber: 18,
        imageUrl:
          "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "work-3",
        title: "هیچ روی سنگ",
        artist: "پرویز تناولی",
        soldPrice: "۱۲,۴۰۰,۰۰۰,۰۰۰ تومان",
        lotNumber: 62,
        imageUrl:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    id: "mehr-1404",
    monthName: "مهر ۱۴۰۴",
    editionTitle: "بیست و چهارمین دوره حراج تهران (هنر معاصر ایران)",
    totalSales: "۱۴۷,۲۱۳,۰۰۰,۰۰۰ تومان",
    soldCount: "۸۴ اثر از ۹۰ اثر",
    clearanceRate: "۹۳٪",
    news: [
      {
        id: "news-4",
        title: "حضور پررنگ نسل نوین مجموعه‌داران در حراج معاصر",
        summary:
          "حراج بیست و چهارم با حضور چشمگیر خریداران جوان و مجموعه‌داران بین‌المللی با استقبالی کم‌نظیر همراه شد.",
        category: "گزارش حراج",
        date: "۱۸ مهر ۱۴۰۴",
        readTime: "۴ دقیقه",
        imageUrl:
          "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&q=80&w=800",
      },
      {
        id: "news-5",
        title: "نگاهی به اقبال مجسمه‌سازی نوین ایران در بازار جهانی",
        summary:
          "بررسی آثار حجمی ارائه‌شده در دوره ۲۴ و استقبال گالری‌ها از ترکیب‌بندی‌های فلزی و برنزی اساتید نوگرا.",
        category: "نقد و بررسی",
        date: "۱۴ مهر ۱۴۰۴",
        readTime: "۶ دقیقه",
        imageUrl:
          "https://images.unsplash.com/photo-1549887534-1541e9326642?auto=format&fit=crop&q=80&w=800",
      },
    ],
    featuredWorks: [
      {
        id: "work-4",
        title: "ترکیب‌بندی فیگوراتیو",
        artist: "منوچهر یکتایی",
        soldPrice: "۹,۸۰۰,۰۰۰,۰۰۰ تومان",
        lotNumber: 31,
        imageUrl:
          "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=600",
      },
      {
        id: "work-5",
        title: "آینه‌کاری روی چوب",
        artist: "منیر فرمانفرمائیان",
        soldPrice: "۸,۵۰۰,۰۰۰,۰۰۰ تومان",
        lotNumber: 54,
        imageUrl:
          "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
  {
    id: "khordad-1404",
    monthName: "خرداد ۱۴۰۴",
    editionTitle: "بیست و سومین دوره حراج تهران (پیشگامان نقاشی‌خط)",
    totalSales: "۱۱۸,۵۰۰,۰۰۰,۰۰۰ تومان",
    soldCount: "۷۲ اثر از ۷۶ اثر",
    clearanceRate: "۹۴٪",
    news: [
      {
        id: "news-6",
        title: "نقاشی‌خط ایران؛ تلاقی هویت کلاسیک و فرم‌های آوانگارد",
        summary:
          "گزارش تصویری از شب حراج آثار خوشنویسی و خط‌نقاشی با تمرکز بر آثار اساتید مکتب سقاخانه.",
        category: "گزارش حراج",
        date: "۵ خرداد ۱۴۰۴",
        readTime: "۳ دقیقه",
        imageUrl:
          "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=800",
      },
    ],
    featuredWorks: [
      {
        id: "work-6",
        title: "طواف کلمات",
        artist: "محمد احصایی",
        soldPrice: "۷,۱۰۰,۰۰۰,۰۰۰ تومان",
        lotNumber: 12,
        imageUrl:
          "https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=600",
      },
    ],
  },
];