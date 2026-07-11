import React, { useState, useEffect } from "react";
import { Language } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import ProcessTimeline from "./components/ProcessTimeline";
import SubscriptionPlans from "./components/SubscriptionPlans";
import Branches from "./components/Branches";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

export default function App() {
  const [locale, setLocale] = useState<Language>("ar");

  // Dynamically set HTML lang and dir for perfect RTL / LTR layout switching
  useEffect(() => {
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <div className="relative min-h-screen bg-[#111111] text-white selection:bg-gold/30 selection:text-white overflow-x-hidden">
      {/* Sticky Top Glass Navbar */}
      <Navbar locale={locale} setLocale={setLocale} />

      {/* Sections layout in requested exact sequence */}
      <main className="relative">
        {/* 1. Hero */}
        <Hero locale={locale} />

        {/* 2. Trust Bar */}
        <TrustBar locale={locale} />

        {/* 3. Why Choose Us */}
        <WhyChooseUs locale={locale} />

        {/* 4. Services */}
        <Services locale={locale} />

        {/* 5. Before/After Slider */}
        <BeforeAfter locale={locale} />

        {/* 6. Process Timeline */}
        <ProcessTimeline locale={locale} />

        {/* 7. Subscription Plans */}
        <SubscriptionPlans locale={locale} />

        {/* 8. Branches */}
        <Branches locale={locale} />

        {/* 9. CTA Banner */}
        <CtaBanner locale={locale} />
      </main>

      {/* 10. Footer */}
      <Footer locale={locale} />

      {/* Floating Call, Chat and Bottom Sticky widgets */}
      <FloatingWidgets locale={locale} />
    </div>
  );
}
