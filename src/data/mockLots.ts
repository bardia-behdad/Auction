export interface Lot {
  id: string;
  lotNumber: number;
  artist: string;
  artistBirthDeath: string;
  title: string;
  medium: string;
  dimensions: string;
  signedDetails: string;
  estimateMin: number;
  estimateMax: number;
  imageUrl: string;
}

export const mockLots: Lot[] = [
  {
    id: "lot-1",
    lotNumber: 1,
    artist: "سهراب سپهری",
    artistBirthDeath: "۱۳۰۷ - ۱۳۵۹",
    title: "طبیعت بی‌جان و تنه درختان",
    medium: "رنگ روغن روی بوم",
    dimensions: "۱۰۰ × ۷۰ سانتی‌متر",
    signedDetails: "امضا پایین راست: سهراب سپهری",
    estimateMin: 3200,
    estimateMax: 3800,
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "lot-2",
    lotNumber: 2,
    artist: "پرویز تناولی",
    artistBirthDeath: "متولد ۱۳۱۶",
    title: "هیچ نشسته بر صندلی",
    medium: "تندیس برنز با پاتین قهوه‌ای",
    dimensions: "۵۵ × ۳۵ × ۲۵ سانتی‌متر",
    signedDetails: "حک نام هنرمند و شماره نسخه ۲/۶",
    estimateMin: 2400,
    estimateMax: 2900,
    imageUrl: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "lot-3",
    lotNumber: 3,
    artist: "محمد احصایی",
    artistBirthDeath: "متولد ۱۳۱۸",
    title: "رقص آبی حروف و ذکر الست",
    medium: "اکریلیک و ورق طلا روی مقوا",
    dimensions: "۱۲۰ × ۹۰ سانتی‌متر",
    signedDetails: "امضا و تاریخ ۱۳۸۴ به خط کوفی",
    estimateMin: 1800,
    estimateMax: 2300,
    imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "lot-4",
    lotNumber: 4,
    artist: "حسین زنده‌رودی",
    artistBirthDeath: "متولد ۱۳۱۶",
    title: "ترکیب‌بندی ادعیه کهن و نشان‌ها",
    medium: "ترکیب مواد روی چوب",
    dimensions: "۱۱۰ × ۸۰ سانتی‌متر",
    signedDetails: "امضا و عنوان در حاشیه چپ اثر",
    estimateMin: 2900,
    estimateMax: 3500,
    imageUrl: "https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&q=80&w=800",
  },
];