export interface LotItem {
  id: string;
  lotNumber: number;
  artist: string;
  artistBirthDeath: string;
  title: string;
  medium: string;
  dimensions: string;
  signedDetails: string;
  estimateMin: number; // به میلیون تومان
  estimateMax: number;
  hammerPrice?: number; // قیمت چکش‌خورده نهایی
  imageUrl: string;
}