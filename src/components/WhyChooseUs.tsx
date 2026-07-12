import React from "react";
import { motion } from "motion/react";
import { Language } from "../types";
import { TRANSLATIONS, WHY_CHOOSE_US_ITEMS } from "../data";
import Icon from "./Icon";

interface WhyChooseUsProps {
  locale: Language;
}

export default function WhyChooseUs({ locale }: WhyChooseUsProps) {
  const t = TRANSLATIONS[locale];

  return (
    <section id="why-us" className="py-24 relative bg-[#111111] overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gold-glow-radial pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
            {locale === "ar" ? "لماذا أوبرا كلين" : "THE OPERA CLEAN STANDARD"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3">
            {t.whyChooseUsTitle}
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-sans">
            {t.whyChooseUsSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-[#1D1D1D] hover:bg-[#222222] border border-white/5 hover:border-gold/30 rounded-[20px] transition-colors duration-500 flex flex-col justify-between"
              style={{
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              {/* Subtle top light effect on hover */}
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Icon wrapper - rotates 360deg on group hover */}
                <div className="mb-6 w-14 h-14 rounded-[14px] bg-gold/5 group-hover:bg-gold/10 border border-gold/10 group-hover:border-gold/30 flex items-center justify-center text-gold transition-all duration-500">
                  <div className="transition-transform duration-700 ease-out group-hover:rotate-[360deg]">
                    <Icon name={item.iconName} size={26} />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {locale === "ar" ? item.titleAr : item.titleEn}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {locale === "ar" ? item.descAr : item.descEn}
                </p>
              </div>

              {/* Card index accent */}
              <div className="mt-8 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-gold/50 transition-colors">
                <span>OPERA 0{index + 1}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gold">★</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
