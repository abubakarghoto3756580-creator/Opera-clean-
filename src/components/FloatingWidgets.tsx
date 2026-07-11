import React from "react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";
import Icon from "./Icon";

interface FloatingWidgetsProps {
  locale: Language;
}

export default function FloatingWidgets({ locale }: FloatingWidgetsProps) {
  const t = TRANSLATIONS[locale];

  return (
    <>
      {/* 1. FLOATING WHATSAPP BUTTON (Visible on desktop / hidden or adjusted on mobile to prevent blocking sticky bar) */}
      <div className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-40">
        <a
          href="https://wa.me/96591102095"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group w-14 h-14 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 pulse-glow-green"
          title={t.whatsappPulseText}
        >
          {/* Animated pulsing rings */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping" style={{ animationDuration: "2s" }}></span>
          
          {/* Main logo icon */}
          <svg
            className="w-8 h-8 relative z-10"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.456h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>

          {/* Desktop Hover Label */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#1A1A1A]/95 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-gold/10 whitespace-nowrap">
            {t.whatsappPulseText}
          </span>
        </a>
      </div>

      {/* 2. BOTTOM STICKY ACTION BAR FOR MOBILE DEVICES ONLY */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111111]/90 backdrop-blur-md border-t border-gold/15 p-4 flex gap-4 shadow-2xl">
        {/* Call Now Button */}
        <a
          href="tel:+96591102095"
          className="flex-1 py-3.5 px-4 rounded-[14px] bg-white/5 border border-gold/30 hover:bg-gold/10 text-gold text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Icon name="Phone" size={14} />
          <span>{t.callNow}</span>
        </a>

        {/* Book Pickup Button */}
        <a
          href="https://wa.me/96591102095"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] py-3.5 px-4 rounded-[14px] bg-gold text-black text-xs font-extrabold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-gold/10"
        >
          <Icon name="Smartphone" size={14} />
          <span>{t.bookPickup}</span>
        </a>
      </div>
    </>
  );
}
