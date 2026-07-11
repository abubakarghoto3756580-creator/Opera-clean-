import React from "react";
import { Language } from "../types";
import { TRANSLATIONS, BRANCHES_DATA } from "../data";
import Logo from "./Logo";
import Icon from "./Icon";

interface FooterProps {
  locale: Language;
}

export default function Footer({ locale }: FooterProps) {
  const t = TRANSLATIONS[locale];

  return (
    <footer className="bg-[#0C0C0C] border-t border-white/5 pt-16 pb-32 md:pb-16 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
          {/* Brand Presentation column */}
          <div className="flex flex-col gap-6">
            <Logo size="sm" />
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mt-2">
              {locale === "ar"
                ? "أوبرا كلين هي علامة تجارية رائدة ومتخصصة في تقديم خدمات الغسيل الفاخر والكي والتنظيف الجاف للعناية بأزيائكم الفاخرة ومنسوجاتكم الثمينة وفقاً لأعلى معايير الجودة الفندقية."
                : "Opera Clean is a pioneering luxury laundry brand offering dry cleaning and delicate fabric finishing to preserve your wardrobe to the highest levels of global excellence."}
            </p>
            {/* Socials Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com/opera_clean"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
                title="Instagram"
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a
                href="https://wa.me/96591102095"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
                title="WhatsApp Support"
              >
                <Icon name="Smartphone" size={18} />
              </a>
              <a
                href="tel:+96591102095"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/40 hover:bg-gold/5 transition-all duration-300"
                title="Direct Phone Call"
              >
                <Icon name="Phone" size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 font-display">
              {locale === "ar" ? "وصول سريع" : "NAVIGATION"}
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#hero" className="hover:text-gold transition-colors">
                  {t.navHome}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold transition-colors">
                  {t.navWhy}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gold transition-colors">
                  {t.navServices}
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-gold transition-colors">
                  {t.navCompare}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold transition-colors">
                  {t.navProcess}
                </a>
              </li>
            </ul>
          </div>

          {/* Branches list column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 font-display">
              {locale === "ar" ? "فروع الكويت" : "OUR SHOWROOMS"}
            </h4>
            <ul className="space-y-4 text-sm">
              {BRANCHES_DATA.map((branch) => (
                <li key={branch.id} className="flex flex-col">
                  <span className="font-semibold text-gray-300">
                    {locale === "ar" ? branch.nameAr : branch.nameEn}
                  </span>
                  <a
                    href={branch.phoneCall}
                    className="text-gold/80 hover:text-gold text-xs flex items-center gap-1 mt-1 transition-colors"
                  >
                    <Icon name="Phone" size={12} />
                    <span>91102095</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & License */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 font-display">
                {locale === "ar" ? "معلومات التواصل" : "CENTRAL INQUIRIES"}
              </h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Icon name="Phone" size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500">{locale === "ar" ? "الطلب والاستفسار" : "Support Helpline"}</span>
                    <a href="tel:+96591102095" className="text-white hover:text-gold font-bold transition-colors">
                      91102095
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="AlertTriangle" size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500">{t.complaints}</span>
                    <a href="tel:+96550401700" className="text-white hover:text-gold font-bold transition-colors">
                      50401700
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Instagram" size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-xs text-gray-500">Instagram</span>
                    <a
                      href="https://instagram.com/opera_clean"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gold font-semibold transition-colors"
                    >
                      @opera_clean
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* License details */}
            <div className="mt-8 pt-4 border-t border-white/5 text-[11px] text-gray-600">
              <p>{t.license}</p>
            </div>
          </div>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 gap-4">
          <span>{t.allRightsReserved}</span>
          <div className="flex items-center gap-2">
            <span>Kuwait City, State of Kuwait</span>
            <span>•</span>
            <span className="text-gold/60">Designed with Absolute Excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
