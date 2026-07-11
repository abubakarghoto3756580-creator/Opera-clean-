import React from "react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";
import Icon from "./Icon";

interface CtaBannerProps {
  locale: Language;
}

export default function CtaBanner({ locale }: CtaBannerProps) {
  const t = TRANSLATIONS[locale];

  return (
    <section className="relative py-24 bg-[#111111] overflow-hidden">
      {/* Decorative premium golden border line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

      {/* Extreme back glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] gold-glow-radial opacity-30 pointer-events-none"></div>

      {/* Real garment bag photo, subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage: "url('/images/cta-garment-bag.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-gold font-bold">
          {locale === "ar" ? "أرقى عناية بملابسك" : "ELEVATE YOUR WARDROBE EXPERIENCE"}
        </span>

        <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-4 tracking-tight leading-tight max-w-3xl mx-auto">
          {locale === "ar" ? (
            <>
              جاهز لتجربة <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#D7BE82]">تنظيف فاخرة</span> تفوق التوقعات؟
            </>
          ) : (
            <>
              Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#D7BE82]">Premium Laundry</span> Beyond Comparison?
            </>
          )}
        </h2>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
          {locale === "ar"
            ? "تواصل معنا اليوم لحجز موعد استلام مقتنياتك الفاخرة وسيقوم مناديبنا بزيارتك أينما كنت في الكويت."
            : "Connect with our concierge dispatch team. We collect, care, and deliver on your timeline anywhere in Kuwait."}
        </p>

        {/* Large action button */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <a
            href="https://wa.me/96591102095"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-gold hover:bg-[#D7BE82] text-black font-extrabold rounded-[14px] text-sm sm:text-base tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-2xl shadow-gold/30 pulse-glow-gold"
          >
            <Icon name="Smartphone" size={20} className="text-black" />
            <span>{t.bookPickup}</span>
          </a>

          {/* Quick contact backup phone links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Icon name="Phone" size={14} className="text-gold/60" />
              <a href="tel:+96591102095" className="hover:text-gold transition-colors font-semibold">
                91102095
              </a>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10 hidden sm:inline"></span>
            <span className="flex items-center gap-1.5">
              <Icon name="AlertTriangle" size={14} className="text-gold/60" />
              <a href="tel:+96550401700" className="hover:text-gold transition-colors font-semibold">
                {locale === "ar" ? "قسم الشكاوى: 50401700" : "Complaints: 50401700"}
              </a>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/10"></span>
            <span className="flex items-center gap-1.5">
              <Icon name="Instagram" size={14} className="text-gold/60" />
              <a href="https://instagram.com/opera_clean" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors font-semibold">
                @opera_clean
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
