import React from "react";
import { motion } from "motion/react";
import { Language } from "../types";
import { TRANSLATIONS, SUBSCRIPTION_PLANS } from "../data";
import Icon from "./Icon";

interface SubscriptionPlansProps {
  locale: Language;
}

export default function SubscriptionPlans({ locale }: SubscriptionPlansProps) {
  const t = TRANSLATIONS[locale];

  const getPlanDetails = (plan: typeof SUBSCRIPTION_PLANS[0]) => {
    switch (plan.id) {
      case "sub-10":
        return {
          titleAr: "الباقة الفضية الفاخرة",
          titleEn: "Silver Premium",
          featuresAr: [
            "احصل على ضعف القيمة فورا",
            "خدمة استلام وتوصيل معيارية",
            "صلاحية رصيد لمدّة ٦ أشهر",
            "عناية لجميع أنواع الملابس العادية",
          ],
          featuresEn: [
            "Get double value instantly",
            "Standard premium delivery",
            "6 Months balance validity",
            "Covers standard wardrobe care",
          ]
        };
      case "sub-15":
        return {
          titleAr: "الباقة الذهبية الممتازة",
          titleEn: "Gold Prestige",
          featuresAr: [
            "احصل على ضعف القيمة فورا",
            "استلام وتوصيل مجدول مرن",
            "صلاحية رصيد لمدّة ٩ أشهر",
            "عناية خاصة بالفساتين والأزياء",
          ],
          featuresEn: [
            "Get double value instantly",
            "Flexible scheduled collection",
            "9 Months balance validity",
            "Covers delicate gowns and suit wear",
          ]
        };
      case "sub-20":
        return {
          titleAr: "الباقة البلاتينية الفاخرة",
          titleEn: "Platinum Elite",
          featuresAr: [
            "احصل على ضعف القيمة فورا",
            "أولوية الاستلام والتوصيل السريع",
            "صلاحية رصيد غير محدودة",
            "تغليف معقم وعلاقات خشبية مميزة",
          ],
          featuresEn: [
            "Get double value instantly",
            "Priority express pickup",
            "Lifetime balance validity",
            "Sterilized dust covers & wooden hangers",
          ]
        };
      case "sub-40":
      default:
        return {
          titleAr: "الباقة الملكية الفوق العادة",
          titleEn: "Royal Imperial",
          featuresAr: [
            "وفر ٢٠ د.ك إضافية فوراً",
            "مندوب طوارئ خاص متاح طوال اليوم",
            "كي وتجهيز فوري فائق السرعة",
            "تغليف أوبرا الملكي الفاخر الحصري",
            "رصيد صالح مدى الحياة",
          ],
          featuresEn: [
            "Receive 20 KD complimentary bonus",
            "24/7 dedicated personal concierge",
            "Ultra-rapid same day processing",
            "Opera Royal luxury packaging suite",
            "Lifetime balance validity",
          ]
        };
    }
  };

  const getWhatsAppLink = (planId: string, pay: number, val: number) => {
    const baseNum = "96591102095";
    const textAr = `مرحباً أوبرا كلين، أود الاشتراك في باقة العضوية: دفع ${pay} د.ك والحصول على رصيد بقيمة ${val} د.ك.`;
    const textEn = `Hello Opera Clean, I want to subscribe to membership: Pay ${pay} KD and get ${val} KD value.`;
    const encodedText = encodeURIComponent(locale === "ar" ? textAr : textEn);
    return `https://wa.me/${baseNum}?text=${encodedText}`;
  };

  return (
    <section id="subscriptions" className="py-24 bg-[#111111] relative overflow-hidden">
      {/* Background decoration glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] gold-glow-radial opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-bold">
            {locale === "ar" ? "اشتراكات النخبة" : "MEMBERSHIP ECONOMIES OF COUTURE"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mt-3">
            {t.subscriptionTitle}
          </h2>
          <p className="text-gray-400 mt-4 text-sm sm:text-base font-sans">
            {t.subscriptionSubtitle}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan, index) => {
            const details = getPlanDetails(plan);
            const title = locale === "ar" ? details.titleAr : details.titleEn;
            const features = locale === "ar" ? details.featuresAr : details.featuresEn;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="h-full"
              >
                <div
                  className={`group relative h-full rounded-[24px] p-8 flex flex-col justify-between transition-colors duration-500 border ${
                    plan.isBestValue
                      ? "bg-[#1E1C18] border-gold shadow-xl shadow-gold/10 lg:scale-105"
                      : "bg-[#1D1D1D] border-white/5 hover:border-gold/30 shadow-lg"
                  }`}
                >
                {/* Best Value Badge */}
                {plan.isBestValue && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                    {t.bestValue}
                  </span>
                )}

                <div>
                  {/* Card Title */}
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-1">
                      {locale === "ar" ? "عضوية" : "MEMBERSHIP"}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white">
                      {title}
                    </h3>
                  </div>

                  {/* Pricing metrics */}
                  <div className="mb-8 pb-6 border-b border-white/5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-semibold text-gray-400">{locale === "ar" ? "" : t.kd}</span>
                      <span className="text-5xl font-display font-black text-white">
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold text-gray-400">{locale === "ar" ? t.kd : ""}</span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs text-gray-400">{locale === "ar" ? "تحصل على رصيد:" : "Get active balance:"}</span>
                      <span className="text-lg font-bold text-gold">
                        {plan.value} {t.kd}
                      </span>
                    </div>

                    <div className="mt-2 text-xs text-green-500 font-bold flex items-center gap-1.5">
                      <Icon name="Check" size={12} />
                      <span>
                        {locale === "ar"
                          ? `وفرت ${plan.bonus} د.ك مجاناً`
                          : `Saved ${plan.bonus} KD Free`}
                      </span>
                    </div>
                  </div>

                  {/* Feature Lists */}
                  <ul className="space-y-4 mb-8">
                    {features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>
                        <span className="font-sans leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Action */}
                <a
                  href={getWhatsAppLink(plan.id, plan.price, plan.value)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-[14px] font-extrabold text-xs transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.isBestValue
                      ? "bg-gold text-black hover:bg-[#D7BE82] shadow-lg shadow-gold/20"
                      : "bg-white/5 text-white hover:bg-gold hover:text-black"
                  }`}
                >
                  <Icon name="Sparkles" size={12} />
                  <span>{t.subscribeNow}</span>
                </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
