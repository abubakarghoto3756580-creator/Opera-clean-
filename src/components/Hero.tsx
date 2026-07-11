import React from "react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";
import Logo from "./Logo";
import Icon from "./Icon";

interface HeroProps {
  locale: Language;
}

export default function Hero({ locale }: HeroProps) {
  const t = TRANSLATIONS[locale];

  const handleScrollToServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#111111] overflow-hidden pt-20"
    >
      {/* Background: luxury showroom video, subtly dimmed so foreground text stays legible */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-25"
        src="/videos/hero-showroom.mp4"
        poster="/images/showroom-lifestyle.jpg"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-[#111111]/70"></div>

      {/* Background elegant grid pattern */}
      <div className="absolute inset-0 bg-premium-grid opacity-30 pointer-events-none"></div>

      {/* Radial soft champagne glow backdrops */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] gold-glow-radial pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] gold-glow-radial pointer-events-none"></div>

      {/* Floating particles (Vanilla pure-CSS implementation for fast/light performance) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold/15"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              animation: `float ${Math.random() * 5 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              filter: "blur(1px)",
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Logo display */}
        <div className="mb-8 transition-all duration-1000 transform hover:scale-105">
          <Logo size="lg" />
        </div>

        {/* Editorial Luxury Badge */}
        <div className="mb-6 inline-block px-4 py-1.5 rounded-full bg-[#C6A86A]/10 border border-[#C6A86A]/30 text-[#C6A86A] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] font-sans">
          {locale === "ar" ? "معايير العناية الراقية منذ ٢٠٢٢" : "Luxury Fabric Care Since 2022"}
        </div>

        {/* Headline with premium gold & white gradient, slide up transition style */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.25] sm:leading-[1.15] max-w-4xl"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          {locale === "ar" ? (
            <>
              تنظيف جاف وغسيل <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#E8D3A7] to-gold">فاخر</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.1em] text-gray-400 block mt-3">
                استلام وتوصيل في جميع أنحاء الكويت
              </span>
            </>
          ) : (
            <>
              Premium Laundry & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#E8D3A7] to-gold">Dry Cleaning</span>
              <br />
              <span className="text-lg sm:text-xl md:text-2xl font-light tracking-widest text-gray-400 block mt-3 uppercase">
                Pickup & Delivery Across Kuwait
              </span>
            </>
          )}
        </h1>

        {/* Sub-headline */}
        <p className="mt-8 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl font-sans leading-relaxed">
          {t.subTagline}
        </p>

        {/* Action CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          {/* Primary book via WhatsApp button with custom pulse glow */}
          <a
            href="https://wa.me/96591102095"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4.5 bg-gold hover:bg-[#D7BE82] text-black font-extrabold rounded-[14px] text-sm tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-gold/20 pulse-glow-gold"
          >
            <Icon name="Sparkles" className="animate-spin text-black" size={16} style={{ animationDuration: "3s" }} />
            <span>{t.bookPickup}</span>
          </a>

          {/* Secondary look services */}
          <button
            onClick={handleScrollToServices}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4.5 border border-white/10 hover:border-gold/50 hover:bg-white/5 text-white font-semibold rounded-[14px] text-sm tracking-wide transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
          >
            <span>{t.viewServices}</span>
            <Icon name={locale === "ar" ? "ChevronLeft" : "ChevronRight"} size={16} />
          </button>
        </div>

        {/* Quick features indicator */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full border-t border-white/5 pt-8">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Icon name="CheckCircle2" className="text-gold" size={14} />
            <span>{locale === "ar" ? "توصيل لكافة المناطق" : "All Kuwait Areas"}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Icon name="CheckCircle2" className="text-gold" size={14} />
            <span>{locale === "ar" ? "معالجة بأرقى المواد" : "Premium Solvents"}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Icon name="CheckCircle2" className="text-gold" size={14} />
            <span>{locale === "ar" ? "خدمة استلام سريعة" : "Express Doorstep"}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <Icon name="CheckCircle2" className="text-gold" size={14} />
            <span>{locale === "ar" ? "تعطير فرنسي فاخر" : "Signature Fragrance"}</span>
          </div>
        </div>
      </div>

      {/* Decorative luxury gradient bottom wash */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#111111] to-transparent pointer-events-none"></div>
    </section>
  );
}
