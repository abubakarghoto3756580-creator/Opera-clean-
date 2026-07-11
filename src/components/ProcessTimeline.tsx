import React, { useState } from "react";
import { Language } from "../types";
import { TRANSLATIONS, PROCESS_STEPS } from "../data";
import Icon from "./Icon";

interface ProcessTimelineProps {
  locale: Language;
}

export default function ProcessTimeline({ locale }: ProcessTimelineProps) {
  const t = TRANSLATIONS[locale];
  const [activeStep, setActiveStep] = useState(2); // Default center step

  const iconsMap = [
    "Smartphone", // Book
    "Truck",       // Pickup
    "Sparkles",    // Cleaning
    "ShieldCheck", // Quality Check
    "Shirt"        // Delivery
  ];

  return (
    <section id="process" className="py-24 bg-[#151515] relative overflow-hidden">
      {/* Background elegant grid pattern */}
      <div className="absolute inset-0 bg-premium-grid opacity-15 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
            {locale === "ar" ? "آلية العمل المتقنة" : "FIVE STAGES OF COUTURE DISPATCH"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3">
            {t.processTitle}
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-sans">
            {t.processSubtitle}
          </p>
        </div>

        {/* Process Steps Desktop Timeline */}
        <div className="hidden md:block relative mb-16">
          {/* Progress bar background line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2"></div>
          
          {/* Active progress bar highlight */}
          <div
            className="absolute top-1/2 left-0 h-[3px] bg-gradient-to-r from-gold to-[#D7BE82] -translate-y-1/2 transition-all duration-700 ease-out"
            style={{
              width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%`,
              left: locale === "ar" ? "auto" : "0",
              right: locale === "ar" ? "0" : "auto"
            }}
          ></div>

          {/* Steps node loop */}
          <div className="relative flex justify-between">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx <= activeStep;
              const isCurrent = idx === activeStep;
              
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center cursor-pointer group"
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Step bubble */}
                  <div
                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-500 z-10 bg-[#151515] ${
                      isCurrent
                        ? "border-gold text-gold scale-110 shadow-lg shadow-gold/20"
                        : isActive
                        ? "border-gold/50 text-gold/80"
                        : "border-white/10 text-gray-500 hover:border-gold/30 hover:text-gray-300"
                    }`}
                  >
                    <Icon name={iconsMap[idx]} size={20} />
                  </div>

                  {/* Step label */}
                  <span
                    className={`mt-4 text-sm font-semibold tracking-wide transition-colors ${
                      isCurrent ? "text-gold" : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {locale === "ar" ? step.titleAr.split(".")[1].trim() : step.titleEn.split(".")[1].trim()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Card based on active step (Desktop) */}
        <div className="hidden md:block p-8 bg-[#1D1D1D] rounded-[24px] border border-gold/10 relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 right-0 w-40 h-40 gold-glow-radial opacity-30"></div>
          
          <div className="flex gap-8 items-center relative z-10">
            <div className="w-20 h-20 rounded-[20px] bg-gold/5 border border-gold/20 flex items-center justify-center text-gold">
              <Icon name={iconsMap[activeStep]} size={36} />
            </div>

            <div className="flex-grow">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-gold font-bold">
                  {locale === "ar" ? `الخطوة ${activeStep + 1}` : `STAGE 0${activeStep + 1}`}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <h3 className="text-xl font-display font-bold text-white">
                  {locale === "ar" ? PROCESS_STEPS[activeStep].titleAr : PROCESS_STEPS[activeStep].titleEn}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mt-3 max-w-2xl font-sans leading-relaxed">
                {locale === "ar" ? PROCESS_STEPS[activeStep].descAr : PROCESS_STEPS[activeStep].descEn}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Stack (Very clean, mobile-first design) */}
        <div className="block md:hidden space-y-4">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.id}
                className={`p-6 rounded-[20px] border transition-all duration-300 ${
                  isSelected
                    ? "bg-[#1D1D1D] border-gold/30 shadow-lg shadow-gold/5"
                    : "bg-[#1A1A1A]/50 border-white/5"
                }`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                      isSelected
                        ? "bg-gold border-gold text-black"
                        : "bg-[#151515] border-white/10 text-gray-400"
                    }`}
                  >
                    <Icon name={iconsMap[idx]} size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-gold block">
                      {locale === "ar" ? `المرحلة 0${idx + 1}` : `STAGE 0${idx + 1}`}
                    </span>
                    <h3 className="text-base font-display font-bold text-white mt-0.5">
                      {locale === "ar" ? step.titleAr.split(".")[1].trim() : step.titleEn.split(".")[1].trim()}
                    </h3>
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isSelected ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed border-t border-white/5 pt-3">
                    {locale === "ar" ? step.descAr : step.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
