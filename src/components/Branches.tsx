import React from "react";
import { Language } from "../types";
import { TRANSLATIONS, BRANCHES_DATA } from "../data";
import Icon from "./Icon";

interface BranchesProps {
  locale: Language;
}

export default function Branches({ locale }: BranchesProps) {
  const t = TRANSLATIONS[locale];

  return (
    <section id="branches" className="py-24 bg-[#151515] relative overflow-hidden">
      {/* Background decoration grid */}
      <div className="absolute inset-0 bg-premium-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
            {locale === "ar" ? "أقرب فرع إليك" : "PHYSICAL SHOWROOM PRESENCE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3">
            {t.branchesTitle}
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-sans">
            {t.branchesSubtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRANCHES_DATA.map((branch, index) => (
            <div
              key={branch.id}
              className="group bg-[#1D1D1D] rounded-[24px] overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
              style={{
                boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              }}
            >
              {/* Luxury architectural pattern header */}
              <div className="relative h-28 bg-gradient-to-br from-charcoal via-[#252525] to-[#151515] p-6 flex items-center justify-between border-b border-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 gold-glow-radial opacity-30"></div>
                
                {/* Clean geometric design */}
                <div className="w-10 h-10 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                  <Icon name="MapPin" size={20} />
                </div>
                
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  KUWAIT 0{index + 1}
                </span>
              </div>

              {/* Card content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {locale === "ar" ? branch.nameAr : branch.nameEn}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                    {locale === "ar" ? branch.addressAr : branch.addressEn}
                  </p>
                </div>

                {/* Call & Direct Buttons */}
                <div className="mt-8 pt-4 border-t border-white/5 flex flex-col gap-3">
                  <a
                    href={branch.phoneCall}
                    className="w-full py-3 px-4 rounded-[14px] bg-white/5 group-hover:bg-gold/10 text-white border border-white/10 group-hover:border-gold/30 hover:bg-gold hover:text-black text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Icon name="Phone" size={14} className="text-gold" />
                    <span>{locale === "ar" ? "اتصل الآن للطلب" : "Call Now to Request"}</span>
                  </a>

                  {/* WhatsApp chat coordinate link */}
                  <a
                    href={`https://wa.me/96591102095?text=Hello%20Opera%20Clean%20branch%20${encodeURIComponent(branch.nameEn)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-[14px] bg-transparent text-gray-400 text-xs text-center font-semibold hover:text-gold transition-colors"
                  >
                    {locale === "ar" ? "تواصل مباشر مع الفرع" : "Chat with this branch"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight footer bar in branches */}
        <div className="mt-16 text-center max-w-2xl mx-auto border border-gold/10 bg-[#1D1D1D]/50 backdrop-blur-md p-6 rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold animate-float">
              <Icon name="Clock" size={18} />
            </div>
            <div className="text-start">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gold block">{locale === "ar" ? "ساعات العمل" : "CENTRAL TIMINGS"}</span>
              <span className="text-xs sm:text-sm text-gray-300 font-semibold">{locale === "ar" ? "مفتوح على مدار ٢٤ ساعة طوال أيام الأسبوع" : "Open 24 Hours / 7 Days A Week"}</span>
            </div>
          </div>
          <a
            href="tel:+96591102095"
            className="px-5 py-2.5 bg-gold text-black rounded-[14px] text-xs font-extrabold shadow-md hover:bg-[#D7BE82] transition-all"
          >
            {t.callNow}: 91102095
          </a>
        </div>
      </div>
    </section>
  );
}
