"use client";

import React, { useState } from "react";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Scale,
  Sparkles,
  Gavel,
  Check,
  Copy,
} from "lucide-react";

export default function TermsPage() {
  const [copiedSheba, setCopiedSheba] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSheba(true);
    setTimeout(() => setCopiedSheba(false), 2000);
  };

  return (
    <div
      className="relative flex-1 w-full bg-[#100e0c] text-stone-200 font-gallery selection:bg-amber-700 selection:text-white pb-28 overflow-hidden"
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

      {/* ================= پس‌زمینه فرش اصیل ایرانی (سیاه و طلایی) ================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* پترن تکرارشونده اسلیمی و ختایی فرش */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-color-dodge"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0 C75 25 95 45 120 60 C95 75 75 95 60 120 C45 95 25 75 0 60 C25 45 45 25 60 0 Z M60 20 C68 38 82 52 100 60 C82 68 68 82 60 100 C52 82 38 68 20 60 C38 52 52 38 60 20 Z' fill='%23F59E0B' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* شمسه و ترنج مرکزی فرش دستباف */}
        <div className="absolute top-[160px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] sm:w-[950px] sm:h-[950px] opacity-[0.065] pointer-events-none">
          <svg viewBox="0 0 500 500" className="w-full h-full text-amber-400" fill="currentColor">
            <circle cx="250" cy="250" r="210" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="6 4" />
            <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="250" cy="250" r="110" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M250 20 C270 110 390 230 480 250 C390 270 270 390 250 480 C230 390 110 270 20 250 C110 230 230 110 250 20 Z" opacity="0.5" />
            <path d="M250 70 C260 140 360 240 430 250 C360 260 260 360 250 430 C240 360 140 260 70 250 C140 240 240 140 250 70 Z" opacity="0.35" />
            <circle cx="250" cy="250" r="45" fill="currentColor" opacity="0.25" />
          </svg>
        </div>

        {/* پرتوهای ملایم نور محیطی */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-b from-amber-500/[0.04] to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-to-t from-amber-700/[0.035] to-transparent blur-3xl" />
      </div>

      {/* ================= محتوای اصلی ================= */}
      <div className="relative z-10">
        {/* هدر صفحه */}
        <section className="relative w-full py-16 sm:py-20 border-b border-amber-900/30 text-center bg-gradient-to-b from-[#161310]/95 to-[#100e0c]/85 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>سند رسمی شرایط عمومی حراج تهران</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-100 tracking-tight mb-4">
              شرایط خرید و فروش و مقررات حراج
            </h1>

            <p className="text-xs sm:text-sm text-stone-400 max-w-2xl mx-auto leading-relaxed font-normal">
              ثبت‌نام برای شرکت در حراج به منزله قبول کلیه شرایط عمومی حراج بوده و از لحظه ثبت‌نام لازم‌الاجرا می‌باشد. خواهشمند است قبل از ثبت‌نام موارد ذیل را با دقت مطالعه فرمایید.
            </p>
          </div>
        </section>

        {/* متن حقوقی و مواد قرارداد */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
          
          {/* دیباچه و سند یکپارچه */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#161411]/90 border border-amber-500/30 backdrop-blur-md shadow-xl text-xs sm:text-sm text-stone-300 leading-loose space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm sm:text-base border-b border-amber-900/40 pb-2">
              <FileText className="w-5 h-5" />
              <span>شرایط حراج و سند یکپارچه</span>
            </div>
            <p>
              کلیه شروط مندرج در این سند در خصوص شرایط حراج و خرید و فروش آثار هنری و فرم جداگانه ثبت‌نام شرکت در حراج و همچنین توضیحات مندرج در کاتالوگ‌ها در مجموع به صورت یک کل یکپارچه <strong className="text-amber-300 font-semibold">«شرایط عمومی حراج تهران»</strong> (که زین پس شرایط عمومی حراج نامیده می‌شود) را تشکیل می‌دهند و حراج تهران بر اساس آنها آثار هنری را ارایه و به متقاضیان به فروش می‌رساند. ثبت‌نام شما برای شرکت در حراج به منزله قبول کلیه شرایط عمومی حراج بوده و از لحظه ثبت‌نام لازم‌الاجرا می‌باشند. خواهشمند است قبل از ثبت‌نام موارد ذیل را با دقت مطالعه نمایید.
            </p>
          </div>

          {/* کلیات (مواد ۱ تا ۸) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161411]/80 border border-stone-800 backdrop-blur-md shadow-lg space-y-6">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base sm:text-lg border-b border-stone-800 pb-3">
              <Gavel className="w-5 h-5" />
              <span>کلیات حراج و تشریفات معامله</span>
            </div>

            <div className="space-y-5 text-xs sm:text-sm text-stone-300 leading-loose">
              <p>
                بدینوسیله حراج‌گزار (موسسه حراج هنر تهران)، شرکت‌کنندگان در حراج را از جزئیات حراج به شرح ذیل مطلع می‌نماید:
              </p>

              <div className="space-y-4 pr-1">
                <div className="flex gap-3">
                  <span className="font-bold text-amber-400 shrink-0 font-mono">۱.</span>
                  <p>
                    آثار هنری بر مبنای ارزش کیفی آنها و بر حسب علاقه‌مندی متقاضیان، توسط برگزارکنندگان حراج، انتخاب و بر اساس قیمت پایه مورد توافق با مالک اثر در حراج ارایه خواهد شد. آثار انتخاب‌شده در نمایشگاهی به مدت سه روز در معرض مشاهده علاقه‌مندان بوده و در عصر روز چهارم طی مراسمی به شرح مندرج در شرایط عمومی حراج، به حراج گذاشته خواهد شد.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="font-bold text-amber-400 shrink-0 font-mono">۲.</span>
                  <p>
                    قیمت آثار در یک مزایده آزاد و بر مبنای رقم نهایی چکش‌خورده در حراج تعیین خواهد شد.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="font-bold text-amber-400 shrink-0 font-mono">۳.</span>
                  <p>
                    فروش آثار به ترتیب شماره آنها در کاتالوگ نمایشگاه صورت می‌پذیرد.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="font-bold text-amber-400 shrink-0 font-mono">۴.</span>
                  <p>
                    اعلام قیمت در مراسم حراجی توسط متقاضی خرید با نشان دادن شماره متقاضی به منزله ایجاب در عقد بیع بوده و فرود آمدن چکش توسط حراج‌گزار پس از آخرین پیشنهاد خرید (نشان دادن شماره توسط آخرین متقاضی) طبق مفاد ماده ۱۰ به منزله قبولی در عقد بیع اثر موضوع حراج است. فلذا پس از فرود آمدن چکش، خریدار ملتزم به پرداخت مبلغ اعلامی طبق ماده ۱۱ است.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="font-bold text-amber-400 shrink-0 font-mono">۵.</span>
                  <p>
                    خریدار کلیه خیارات قانونی و مربوط به معاملات از جمله خیار غبن فاحش و افحش ولو به اعلا درجه را از خود سلب و ساقط نمود و قرارداد بیع لازم‌الاجرا است. حراج‌گزار در طول برگزاری مراسم حراج می‌تواند در صورتی که پیشنهاد بالاتری پس از فرود آمدن چکش (که به منزله قبولی و انعقاد عقد بیع اثر موضوع حراج می‌باشد) در خصوص اثر فروخته شده دریافت کند، بلافاصله عقد اول را فسخ و با فرود آوردن چکش به بالاترین قیمت پیشنهادی اثر را به متقاضی خرید با بالاترین قیمت پیشنهادی به فروش رساند. (فرود آمدن چکش بعدی به منزله اعلام فسخ عقد قبلی و قبول ایجاب بعدی و انعقاد عقد جدید می‌باشد.)
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="font-bold text-amber-400 shrink-0 font-mono">۶.</span>
                  <p>
                    تنها متقاضیانی که پیشاپیش طبق شرایط عمومی حراج ثبت‌نام و شماره مزایده دریافت کرده‌اند، مجاز به شرکت در حراج می‌باشند. برای خرید آثار از نظر تعداد محدودیتی وجود ندارد، لیکن فروشنده و مالک اثر، مجاز به شرکت در مزایده آن اثر نیستند.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="font-bold text-amber-400 shrink-0 font-mono">۷.</span>
                  <p>
                    حراج‌گزار، مالک اثر نبوده و صرفاً به نمایندگی از طرف مالک اثر، برای فروش آن اقدام می‌نماید و هیچ‌گونه انتقال مالکیتی در خصوص اثر به حراج‌گزار صورت نمی‌پذیرد. حق‌الزحمه (حق‌العمل) حراج‌گزار صرفاً بابت آماده‌سازی شرایط حراج و برگزاری نمایشگاه آن و فراهم نمودن تسهیلات اجرای این معامله است. حراج‌گزار هیچ‌گونه مالکیتی و یا حقوق مالکانه دیگری چه جزئی و چه کلی، در آثار ارایه شده برای فروش در حراج ندارد. مالک اثر سابقاً کلیه اختیارات لازم جهت اجرا و تحقق مفاد شرایط عمومی حراج تهران را به حراج‌گزار اعطا نموده است و خریدار در این خصوص عالم بوده و حق هیچ‌گونه اعتراضی را ندارد و نخواهد داشت.
                  </p>
                </div>

                <div className="flex gap-3">
                  <span className="font-bold text-amber-400 shrink-0 font-mono">۸.</span>
                  <p>
                    حراج‌گزار مجاز است وکالتاً از جانب شخص ثالث به عنوان متقاضی در حراج به شرح مندرج در بند ج ماده ۱۰ از شرایط عمومی حراج، شرکت نموده و به وکالت و یا نمایندگی از خریدار، اثر را با رعایت تمامی شرایط عمومی حراج خریداری، ثمن مبیع را پرداخت و اثر را تحویل گرفته و تسلیم خریدار نماید.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ماده ۹: اصالت اثر */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161411]/80 border border-stone-800 backdrop-blur-md shadow-lg space-y-4 text-xs sm:text-sm text-stone-300 leading-loose">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base sm:text-lg border-b border-stone-800 pb-3">
              <ShieldCheck className="w-5 h-5" />
              <span>ماده ۹. اصالت اثر</span>
            </div>
            <p>
              کلیه آثار ارایه شده در حراج تهران توسط کارشناسان معتبر بررسی و اصالت آنها و انتساب آنها به پدیدآورنده اثر مورد بررسی قرار می‌گیرد. در خصوص آثار کلاسیک، عنداللزوم بررسی توسط کارشناسان سازمان میراث فرهنگی صورت خواهد گرفت. علی‌ایحال با توجه به آنکه آثار ارایه شده در حراج به مدت ۳ روز جهت رؤیت متقاضیان در معرض بازدید عموم قرار می‌گیرد، متقاضیان این امکان را جهت بررسی‌های کارشناسی متعارف از جانب کارشناسان منتخب خود در مدت مزبور دارا می‌باشند.
            </p>
            <div className="p-3.5 rounded-xl bg-stone-900/90 border border-amber-900/30">
              <p>
                <strong className="text-amber-400 font-bold font-mono">۹.۱.</strong> چنانچه در هر یک از مراحل برگزاری حراج تا پیش از فروش اثر، حراج‌گزار نسبت به اصالت اثر، مالکیت اثر، سایر اطلاعات اعلام شده از سوی مالک اثر و یا هر دلیل دیگری تردید و یا شبهه‌ای پیدا کند می‌تواند اثر را بی‌هیچ قید و شرطی از حراج خارج نماید.
              </p>
            </div>
          </div>

          {/* ماده ۱۰: روش‌های شرکت در حراج و گام‌های افزایش قیمت */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161411]/80 border border-stone-800 backdrop-blur-md shadow-lg space-y-6 text-xs sm:text-sm text-stone-300 leading-loose">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base sm:text-lg border-b border-stone-800 pb-3">
              <Gavel className="w-5 h-5" />
              <span>ماده ۱۰. روش‌های شرکت در حراج و گام‌های افزایش قیمت</span>
            </div>

            <div className="space-y-2">
              <p className="font-bold text-stone-100">۱۰.۱. شرکت در مراسم حراج به سه صورت ذیل امکان‌پذیر است:</p>
              <ul className="space-y-2 pr-4">
                <li><strong className="text-amber-400">الف)</strong> خریدار می‌تواند با ثبت‌نام و تکمیل فرم خرید حضوری با مشارکت در حراج شرکت کند.</li>
                <li><strong className="text-amber-400">ب)</strong> خریدار می‌تواند با ثبت‌نام و تکمیل فرم خرید غیرحضوری با ارتباط تلفنی هنگام حراج، در آن شرکت کند.</li>
                <li><strong className="text-amber-400">ج)</strong> خریدار می‌تواند با ثبت‌نام و تکمیل فرم خرید وکالتی، به حراج‌گزار وکالت دهد تا سقف رقم مورد نظرش در مزایده شرکت کند.</li>
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <p className="font-bold text-stone-100">
                ۱۰.۲. برای هر اثر، دو برآورد کمینه و بیشینه تعیین می‌شود. مزایده معمولاً از رقمی پایین‌تر از برآورد کمینه آغاز شده و به ترتیب زیر افزایش خواهد یافت:
              </p>

              {/* جدول مرتب گام‌های افزایش قیمت */}
              <div className="overflow-x-auto rounded-xl border border-stone-800 bg-stone-950/60 mt-3">
                <table className="w-full text-right text-xs">
                  <thead className="bg-stone-900/90 text-stone-300 border-b border-stone-800">
                    <tr>
                      <th className="py-2.5 px-4 font-bold">بازه قیمت اثر</th>
                      <th className="py-2.5 px-4 font-bold text-amber-400">میزان افزایش در هر گام چکش</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60 font-mono">
                    <tr>
                      <td className="py-2.5 px-4 text-stone-300">تا مبلغ ۵۰ میلیون تومان</td>
                      <td className="py-2.5 px-4 text-amber-300 font-bold">هر بار ۵ میلیون تومان</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-stone-300">از ۵۰ تا ۲۰۰ میلیون تومان</td>
                      <td className="py-2.5 px-4 text-amber-300 font-bold">هر بار ۱۰ میلیون تومان</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-stone-300">از ۲۰۰ تا ۵۰۰ میلیون تومان</td>
                      <td className="py-2.5 px-4 text-amber-300 font-bold">هر بار ۲۰ میلیون تومان</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-stone-300">از ۵۰۰ میلیون تا ۱ میلیارد تومان</td>
                      <td className="py-2.5 px-4 text-amber-300 font-bold">هر بار ۵۰ میلیون تومان</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-stone-300">از ۱ تا ۴ میلیارد تومان</td>
                      <td className="py-2.5 px-4 text-amber-300 font-bold">هر بار ۱۰۰ میلیون تومان</td>
                    </tr>
                    <tr>
                      <td className="py-2.5 px-4 text-stone-300">از ۴ میلیارد تومان به بالا</td>
                      <td className="py-2.5 px-4 text-amber-300 font-bold">هر بار ۲۰۰ میلیون تومان</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ماده ۱۱: نحوه پرداخت و ضمانت اجرای عدم پرداخت */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161411]/80 border border-stone-800 backdrop-blur-md shadow-lg space-y-5 text-xs sm:text-sm text-stone-300 leading-loose">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base sm:text-lg border-b border-stone-800 pb-3">
              <CreditCard className="w-5 h-5" />
              <span>ماده ۱۱. نحوه پرداخت و ضمانت اجرای عدم پرداخت</span>
            </div>

            <div className="space-y-4 pr-1">
              <div className="flex gap-3">
                <span className="font-bold text-amber-400 shrink-0 font-mono">۱۱.۱.</span>
                <p>
                  خریدار مکلف است مبلغی معادل ده درصد (۱۰٪) از مبلغ ثمن اثر خریداری شده (رقم چکش‌خورده نهایی) را به عنوان حق‌الزحمه (حق‌العمل) حراج‌گزار در مدت مقرر به حراج‌گزار پرداخت نماید. در صورت تاخیر می‌بایست علاوه بر پرداخت اصل مبلغ مذکور، روزانه مبلغی معادل یک درصد (۱٪) از مبلغ ثمن اثر خریداری شده (رقم چکش‌خورده نهایی) را به عنوان وجه التزام به حراج‌گزار پرداخت نماید.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-amber-400 shrink-0 font-mono">۱۱.۲.</span>
                <div className="space-y-3 w-full">
                  <p>
                    خریدار موظف است کل مبلغ ثمن اثر خریداری‌شده (رقم چکش‌خورده نهایی) به علاوه حق‌الزحمه (حق‌العمل) حراج‌گزار را حداکثر ظرف مدت پانزده روز پس از برگزاری حراج و خرید اثر به حراج‌گزار، که نماینده مالک اثر می‌باشد، پرداخت کند. این پرداخت باید شخصاً توسط خریدار و از حساب شخصی وی در وجه حساب موسسه حراج هنر تهران انجام پذیرد:
                  </p>

                  {/* کارت مشخصات بانکی با قابلیت کپی */}
                  <div className="p-4 rounded-xl bg-stone-950/90 border border-amber-500/40 space-y-2 font-mono text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-2">
                      <span className="text-stone-400 font-gallery">شماره حساب:</span>
                      <span className="text-stone-100 font-bold" dir="ltr">155-7400-1484110-1</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                      <span className="text-stone-400 font-gallery">شماره شبا (بانک گردشگری - حراج هنر تهران):</span>
                      <div className="flex items-center gap-2">
                        <span className="text-amber-300 font-bold" dir="ltr">IR320640015574001484110001</span>
                        <button
                          onClick={() => copyToClipboard("IR320640015574001484110001")}
                          className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-amber-300 border border-stone-700 transition"
                          title="کپی شماره شبا"
                        >
                          {copiedSheba ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-amber-400 shrink-0 font-mono">۱۱.۳.</span>
                <p>
                  آثار خریداری‌شده حداکثر ظرف یک هفته پس از دریافت کل مبلغ ثمن اثر خریداری‌شده (رقم چکش‌خورده نهایی) به علاوه حق‌الزحمه (حق‌العمل) حراج‌گزار و وجه التزام مذکور در بند ۱۱.۱، در ایران در محل دفتر حراج تهران تحویل خواهد شد.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-amber-400 shrink-0 font-mono">۱۱.۴.</span>
                <p>
                  در صورتی که به واسطه عدم پرداخت ثمن و حق‌الزحمه حراج‌گزار در موعد مقرر خساراتی به مالک اثر و یا حراج‌گزار وارد گردد خریدار مستنکف مسئول جبران ضرر و زیان‌های وارده علاوه بر وجه التزام مقرر در ماده ۱۱.۱ می‌باشد. معیار جبران خسارات وارده قیمت نهایی چکش‌خورده اثر می‌باشد، نه قیمت کمینه.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-amber-400 shrink-0 font-mono">۱۱.۵.</span>
                <p>
                  در صورتی که خریدار ظرف مهلت مذکور در بند ۱۱.۲ اقدام به پرداخت کامل مبلغ ثمن اثر خریداری‌شده (رقم چکش‌خورده نهایی) و حق‌الزحمه (حق‌العمل) حراج‌گزار ننماید، حراج‌گزار می‌تواند ظرف مدت شش ماه از تاریخ پایان مهلت تعیین شده در بند ۱۱.۲، بیع را به صورت یک‌جانبه و صرفاً از طریق اعلام کتبی به نشانی و یا شماره همراه و یا آدرس ایمیل‌های اعلامی از جانب خریدار در فرم ثبت‌نام، فسخ نماید. بدیهی است در این صورت حراج‌گزار هیچ‌گونه تعهدی نسبت به تحویل اثر به خریدار ندارد و در صورت دریافت اثر توسط خریدار وی موظف به استرداد آن به حراج‌گزار خواهد بود. در صورت اعمال حق فسخ مندرج در این بند، به‌عنوان توافقی مستقل از قرارداد، خریدار موظف است حق‌الزحمه (حق‌العمل) حراج‌گزار یعنی مبلغی معادل ده درصد (۱۰٪) از مبلغ ثمن اثر (رقم چکش‌خورده نهایی) را به حراج‌گزار پرداخت نماید (که این مبلغ از پرداختی خریدار به حساب حراج‌گزار قابل وصول می‌باشد). عدم اعمال حق فسخ مزبور از جانب حراج‌گزار، رافع مسئولیت خریدار به پرداخت وجه التزام مقرر در بند ۱۱.۱ نمی‌باشد.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="font-bold text-amber-400 shrink-0 font-mono">۱۱.۶.</span>
                <p>
                  خریدار تا زمان پرداخت کامل مبلغ ثمن اثر خریداری‌شده (رقم چکش‌خورده نهایی) به علاوه حق‌الزحمه (حق‌العمل) حراج‌گزار و وجه التزام مقرر در بند ۱۱.۱، حق انتقال اثر را به غیر ندارد و در صورت عمل بر خلاف این بند، انتقال انجام شده به غیر، باطل می‌باشد.
                </p>
              </div>
            </div>
          </div>

          {/* ماده ۱۲: حق‌الزحمه مالک اثر */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161411]/80 border border-stone-800 backdrop-blur-md shadow-lg space-y-4 text-xs sm:text-sm text-stone-300 leading-loose">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base sm:text-lg border-b border-stone-800 pb-3">
              <Scale className="w-5 h-5" />
              <span>ماده ۱۲. حق‌الزحمه (حق‌العمل) حراج‌گزار از فروشنده</span>
            </div>
            <p>
              مالک اثر نیز بابت هزینه معرفی و فروش اثر و برگزاری مراسم حراج، موظف به پرداخت حق‌الزحمه (حق‌العمل) حراج‌گزار به شرح زیر است که این مبلغ از درآمد فروش اثر کسر و مابقی به مالک اثر پرداخت خواهد شد:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-center">
                <span className="text-stone-400 block text-xs mb-1">تا مبلغ ۴ میلیارد تومان</span>
                <span className="text-amber-300 font-bold font-mono text-sm">۱۵ درصد</span>
                <span className="text-[11px] text-stone-500 block mt-0.5">رقم چکش‌خورده نهایی</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-center">
                <span className="text-stone-400 block text-xs mb-1">بیش از ۴ تا ۱۰ میلیارد تومان</span>
                <span className="text-amber-300 font-bold font-mono text-sm">۱۲ درصد</span>
                <span className="text-[11px] text-stone-500 block mt-0.5">رقم چکش‌خورده نهایی</span>
              </div>
              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 text-center">
                <span className="text-stone-400 block text-xs mb-1">بیش از ۱۰ میلیارد تومان</span>
                <span className="text-amber-300 font-bold font-mono text-sm">۱۰ درصد</span>
                <span className="text-[11px] text-stone-500 block mt-0.5">رقم چکش‌خورده نهایی</span>
              </div>
            </div>
          </div>

          {/* مواد ۱۳ تا ۱۷ */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#161411]/80 border border-stone-800 backdrop-blur-md shadow-lg space-y-6 text-xs sm:text-sm text-stone-300 leading-loose">
            
            {/* ماده ۱۳ */}
            <div className="space-y-2 border-b border-stone-800/80 pb-5">
              <h3 className="font-bold text-amber-400 text-sm sm:text-base">ماده ۱۳. محرمانگی</h3>
              <p>
                کلیه اطلاعات شخصی و اطلاعات بانکی اشخاص شرکت‌کننده در حراج، در صورتی که از جانب آنها به صورت کتبی در زمان ثبت‌نام درخواست شود، به صورت محرمانه نزد حراج‌گزار حفظ و نگهداری خواهد شد و به هیچ عنوان در معرض اطلاع عموم و یا در دسترس اشخاص ثالث قرار نخواهد گرفت مگر:
              </p>
              <ul className="space-y-1.5 pr-4 text-stone-300">
                <li><strong className="text-amber-400">الف)</strong> به دستور مقام قضایی که در آن صورت حراج‌گزار موظف خواهد بود که اطلاعات مزبور را در حد موضوع دستور در اختیار مقامات مربوطه قرار دهد، یا،</li>
                <li><strong className="text-amber-400">ب)</strong> هر یک از خریداران یا فروشندگان که جهت پیگیری قانونی و مطالبه حقوق خود طبق شرایط عمومی حراج به این اطلاعات نیاز داشته باشند.</li>
              </ul>
              <p className="pt-2">
                <strong className="text-amber-400 font-mono">۱۳.۱.</strong> حراج‌گزار مختار است که در خصوص قیمت نهایی آثار به فروش‌رفته و همچنین نام خریدار و یا فروشنده اثر جهت تبلیغات و یا هر منظور دیگری اطلاع‌رسانی نماید، مگر آنکه خریدار یا فروشنده اثر کتباً حراج‌گزار را از این امر منع نمایند. لازم به ذکر است در صورتی که اطلاعات مندرج در این ماده از هر طریق دیگری به جز از طرف حراج‌گزار (برای مثال از طریق سایر شرکت‌کنندگان در حراج) نشر پیدا کند، حراج‌گزار طبیعتاً مسئول نخواهد بود.
              </p>
              <p>
                <strong className="text-amber-400 font-mono">۱۳.۲.</strong> حراج‌گزار می‌تواند از کلیه مراحل برگزاری حراج فیلم‌برداری و ضبط صوتی و تصویری نموده و پخش نماید. در صورتی که متقاضی نخواهد تصویر و صوت وی ضبط یا پخش گردد می‌تواند از طرق غیر‌حضوری مندرج در ماده ۱۰ در حراج شرکت نماید. این فیلم و صدا در کلیه مراجع قضایی و داوری و غیره، به عنوان یک دلیل، ارزش اثباتی دارد.
              </p>
            </div>

            {/* ماده ۱۴ */}
            <div className="space-y-2 border-b border-stone-800/80 pb-5">
              <h3 className="font-bold text-amber-400 text-sm sm:text-base">ماده ۱۴. سایر شرایط</h3>
              <p>
                از آنجا که حراج‌گزار همانطور که در ماده ۷ بدان تاکید شد، چه کلاً و چه جزئاً مالک آثار ارایه شده در حراج نمی‌باشد، هیچ‌گونه مسئولیت و تعهدی در پرداخت مالیات، عوارض و هر‌گونه کسورات قانونی دیگری که مربوط به نقل و انتقال مالکیت آثار و خرید و فروش آنها بوده ندارد. وظیفه پرداخت هرگونه عوارض قانونی، مالیات و سایر کسورات قانونی بر اساس قوانین و مقررات مربوطه ناشی از خرید یا فروش اثر، بر عهده خریدار و یا فروشنده آن بوده و حراج‌گزار مسئولیتی در این خصوص ندارد.
              </p>
              <p>
                <strong className="text-amber-400 font-mono">۱۴.۱.</strong> به منظور تأمین هزینه‌های نگهداری، حمل و نقل و پوشش بیمه‌ آتش‌سوزی در طول برگزاری مراسم حراج، مالک اثر موظف است مبلغی معادل دو درصد رقم نهایی فروش اثر را بابت حق بیمه و هزینه‌های مزبور پرداخت نماید.
              </p>
              <p>
                <strong className="text-amber-400 font-mono">۱۴.۲.</strong> حراج‌گزار می‌تواند با صلاح‌دید خود نسبت به تعویض یا انتخاب قاب اثر اقدام کند، که مالک اثر مکلف به پرداخت هزینه‌های آن خواهد بود. در صورت عدم فروش اثر نیز مالک اثر موظف به پرداخت هزینه‌های موضوع ماده ۱۴ و نیز هزینه‌های احتمالی دیگر از قبیل مرمت یا قاب خواهد بود.
              </p>
            </div>

            {/* ماده ۱۵ */}
            <div className="space-y-2 border-b border-stone-800/80 pb-5">
              <h3 className="font-bold text-amber-400 text-sm sm:text-base">ماده ۱۵. حل و فصل اختلافات</h3>
              <p>
                کلیه اختلافات ناشی از شرایط عمومی حراج و هرگونه خرید و فروش آثار هنری از این طریق و دعاوی ناشی از آن و یا راجع به آن از جمله وجود، انعقاد، اعتبار، فسخ، نقض، تفسیر یا اجرا آن جهت حل و فصل نهایی به هیات داوری سه نفره به ترتیب ذیل ارجاع و رای داوری صادره قطعی، برای طرفین لازم‌الاتباع و لازم‌الاجرا می‌باشد:
              </p>
              <ul className="space-y-2 pr-4 pt-1">
                <li><strong className="text-amber-400 font-mono">۱۵.۱.</strong> در صورت بروز هرگونه اختلاف هر یک از طرفین می‌تواند با معرفی و ارائه نامه قبولی داور اختصاصی خود که دارای تابعیت ایرانی می‌باشد از طریق اظهارنامه درخواست ارجاع به داوری را به طرف دیگر اعلام نماید. طرف مقابل مکلف است ظرف مهلت ده روز داور اختصاصی خود را که دارای تابعیت ایرانی می‌باشد از طریق اظهارنامه به همراه نامه قبولی داور اختصاصی خود معرفی نماید. دو داور اختصاصی طرفین ظرف مهلت ده روز داور سوم را تعیین می‌نمایند. در صورت عدم حصول توافق در تعیین داور سوم، داور سوم از طریق دادگاه صالح تعیین می‌گردد.</li>
                <li><strong className="text-amber-400 font-mono">۱۵.۲.</strong> در صورت عدم معرفی داور اختصاصی به همراه نامه قبولی وی در مدت زمان مقرر در ماده ۱۵.۱، داور اعلامی از جانب طرف دیگر به عنوان داور مرضی‌الطرفین تلقی شده و به صورت انفرادی و مستقل اقدام به صدور رای می‌نماید. (عدم ارائه نامه قبولی داور اختصاصی در مدت مزبور به منزله عدم معرفی داور اختصاصی می‌باشد.)</li>
                <li><strong className="text-amber-400 font-mono">۱۵.۳.</strong> هیات داوری ظرف مهلت یک ماه (سی روز) از تاریخ دریافت قبولی داور سوم، موظف به رسیدگی به موضوع اختلاف بوده و مکلف به صدور رای طی مدت مزبور می‌باشد. در صورتی‌که وفق ماده ۱۵.۲ داور واحد مرضی‌الطرفین موظف به رسیدگی در موضوع اختلاف باشد، زمان شروع داوری از تاریخ انقضای مهلت ده روزه مقرر در ماده ۱۵.۱ می‌باشد.</li>
                <li><strong className="text-amber-400 font-mono">۱۵.۴.</strong> رای صادره قاطع دعوی و برای طرفین دعوی لازم‌الاتباع می‌باشد. اجرای رای داوری وفق قانون با دادگاه صالح به رسیدگی به اصل دعوی می‌باشد.</li>
                <li><strong className="text-amber-400 font-mono">۱۵.۵.</strong> هیات داوری یا داور موظف است رای صادره را حداکثر ظرف مهلت ۵ روز از تاریخ اتمام مهلت یک ماه مقرر در ماده ۱۵.۳ از طریق اظهارنامه به طرفین ابلاغ نماید.</li>
                <li><strong className="text-amber-400 font-mono">۱۵.۶.</strong> قانون حاکم بر شرایط عمومی حراج و شرط داوری قوانین کشور جمهوری اسلامی ایران بوده و مقر داوری شهر تهران می‌باشد.</li>
                <li><strong className="text-amber-400 font-mono">۱۵.۷.</strong> شرط داوری مندرج در این ماده شرط مستقلی از قرارداد بوده و ابطال، فسخ، انفساخ و اقاله و انقضای این قرارداد تاثیری در آن ندارد.</li>
              </ul>
            </div>

            {/* ماده ۱۶ */}
            <div className="space-y-2 border-b border-stone-800/80 pb-5">
              <h3 className="font-bold text-amber-400 text-sm sm:text-base">ماده ۱۶. قانون حاکم</h3>
              <p>
                قانون حاکم بر این قرارداد قانون و مقررات کشور جمهوری اسلامی ایران می‌باشد، حتی اگر قرارداد در خارج از خاک ایران تنظیم شده باشد، هر گونه اختلاف یا ادعایی که مرتبط با این قرارداد باشد، باید بر اساس قوانین جمهوری اسلامی ایران تفسیر و مورد رسیدگی قرار گیرد.
              </p>
            </div>

            {/* ماده ۱۷ */}
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 text-sm sm:text-base">ماده ۱۷. فورس‌ماژور</h3>
              <p>
                در صورت بروز حوادث غیر‌مترقبه و فورس‌ماژور از قبیل، ولی نه محدود به، بلایای طبیعی مانند سیل، زلزله، آتش‌سوزی، اعتصاب، شورش، جنگ، اپیدمی، پاندمی و قرنطینه، تغییرات اقتصادی و یا سیاسی غیر‌مترقبه، انقلاب، کودتا، اقدامات تروریستی و امثال موارد مذکور اجرای شرایط عمومی حراج، تا زمان برطرف شدن محدودیت‌های ناشی از فورس‌ماژور و بازگشت شرایط به حالت عادی به حالت تعلیق درخواهد آمد.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}