import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";
import Icon from "./Icon";

interface BeforeAfterProps {
  locale: Language;
}

export default function BeforeAfter({ locale }: BeforeAfterProps) {
  const t = TRANSLATIONS[locale];
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-animate on mount to guide user action
  useEffect(() => {
    let direction = 1;
    let current = 50;
    
    const interval = setInterval(() => {
      if (isDragging) {
        clearInterval(interval);
        return;
      }
      
      current += direction * 0.5;
      if (current >= 75) {
        direction = -1;
      } else if (current <= 25) {
        direction = 1;
      }
      setSliderPosition(current);
    }, 40);

    // Stop animation on user scroll or touch
    const stopAnim = () => clearInterval(interval);
    window.addEventListener("mousedown", stopAnim);
    window.addEventListener("touchstart", stopAnim);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousedown", stopAnim);
      window.removeEventListener("touchstart", stopAnim);
    };
  }, [isDragging]);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after" className="py-24 bg-[#111111] relative overflow-hidden select-none">
      <div className="absolute top-0 right-0 w-80 h-80 gold-glow-radial opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
            {locale === "ar" ? "معجزة التنظيف الفاخر" : "FABRIC RESTORATION CASE STUDY"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3">
            {t.beforeAfterTitle}
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-sans">
            {t.beforeAfterSubtitle}
          </p>
        </motion.div>

        {/* Interactive Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          ref={containerRef}
          className="relative h-[350px] sm:h-[450px] md:h-[500px] w-full rounded-[24px] overflow-hidden border border-white/10 cursor-ew-resize shadow-2xl"
          onMouseMove={handleMouseMove}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setIsDragging(false)}
        >
          {/* AFTER (Clean - Background) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/images/blazer-sleeve-a.jpg"
              alt="Pristine luxury clothing"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none pointer-events-none brightness-105"
            />
            {/* After Tag */}
            <div className={`absolute bottom-6 ${locale === "ar" ? "left-6" : "right-6"} bg-gold/90 backdrop-blur-md text-black text-xs font-bold px-4 py-2 rounded-full tracking-wider shadow-md`}>
              {t.afterLabel}
            </div>
          </div>

          {/* BEFORE (Stained - Overlay container with dynamic width) */}
          <div
            className="absolute inset-0 h-full overflow-hidden border-r border-white/20"
            style={{ width: `${sliderPosition}%` }}
          >
            {/* We duplicate the same image, but apply custom CSS filters to represent 'dirty/stained' */}
            <div className="absolute top-0 left-0 w-[100vw] h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}>
              <img
                src="/images/blazer-sleeve-a.jpg"
                alt="Stained luxury clothing"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none pointer-events-none saturate-50 brightness-75 contrast-125 sepia-[30%]"
              />
              {/* Dirt / Speckles Overlay representing stains */}
              <div className="absolute inset-0 bg-black/15 mix-blend-multiply opacity-50"></div>
              {/* Before Tag */}
              <div className={`absolute bottom-6 ${locale === "ar" ? "right-6" : "left-6"} bg-black/75 backdrop-blur-md border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full tracking-wider shadow-md`}>
                {t.beforeLabel}
              </div>
            </div>
          </div>

          {/* DRAGGABLE BAR HANDLE */}
          <div
            className="absolute top-0 bottom-0 w-[3px] bg-gold cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
            onMouseDown={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* Visual handle pill */}
            <div className="w-10 h-10 rounded-full bg-gold hover:bg-[#D7BE82] text-black shadow-xl flex items-center justify-center transition-transform hover:scale-110 active:scale-95 border-2 border-white/20 select-none">
              <div className="flex gap-1 items-center">
                <Icon name="ChevronLeft" size={14} className="text-black" />
                <Icon name="ChevronRight" size={14} className="text-black -ml-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Interactive Prompt Hint */}
        <div className="flex items-center justify-center gap-2 mt-6 text-xs text-gray-500 font-medium">
          <Icon name="Scissors" className="text-gold/40 rotate-90" size={14} />
          <span>{locale === "ar" ? "اسحب المقبض في المنتصف للمقارنة" : "Slide the handle back and forth to compare"}</span>
        </div>
      </div>
    </section>
  );
}
