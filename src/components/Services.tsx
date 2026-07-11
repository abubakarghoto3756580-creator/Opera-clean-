import React from "react";
import { Language } from "../types";
import { TRANSLATIONS, SERVICES_ITEMS } from "../data";
import Icon from "./Icon";

interface ServicesProps {
  locale: Language;
}

export default function Services({ locale }: ServicesProps) {
  const t = TRANSLATIONS[locale];

  // Helper to generate custom WhatsApp message per service
  const getWhatsAppLink = (serviceTitleEn: string, serviceTitleAr: string) => {
    const baseNum = "96591102095";
    const textAr = `مرحباً أوبرا كلين، أود الاستفسار وحجز خدمة: ${serviceTitleAr}`;
    const textEn = `Hello Opera Clean, I would like to book the service: ${serviceTitleEn}`;
    const encodedText = encodeURIComponent(locale === "ar" ? textAr : textEn);
    return `https://wa.me/${baseNum}?text=${encodedText}`;
  };

  return (
    <section id="services" className="py-24 bg-[#151515] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-premium-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
            {locale === "ar" ? "خدمات النخبة" : "EXCLUSIVE DISPATCH CAPABILITIES"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3">
            {t.servicesTitle}
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-sans">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* 8 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className="group bg-[#1D1D1D] rounded-[24px] overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              style={{
                boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              }}
            >
              {/* Image container — sized closer to the source image's aspect ratio to avoid awkward cropping */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0a0a0a]">
                <img
                  src={item.imageUrl}
                  alt={locale === "ar" ? item.titleAr : item.titleEn}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Subtle bottom-only gradient mask, so the image itself stays bright and visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1D] via-transparent to-transparent h-1/3 mt-auto top-auto"></div>

                {/* Corner floating luxury category badge */}
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 text-white/90 text-[10px] uppercase font-semibold tracking-wider px-3 py-1.5 rounded-full">
                  {locale === "ar" ? "عناية خاصة" : "PREMIUM"}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {locale === "ar" ? item.titleAr : item.titleEn}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans min-h-[48px]">
                    {locale === "ar" ? item.descAr : item.descEn}
                  </p>
                </div>

                {/* Direct WhatsApp Call to Action */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <a
                    href={getWhatsAppLink(item.titleEn, item.titleAr)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-4 rounded-[14px] bg-white/5 group-hover:bg-gold text-white group-hover:text-black hover:bg-gold-hover text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Icon name="Sparkles" size={12} />
                    <span>{t.bookThisService}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
