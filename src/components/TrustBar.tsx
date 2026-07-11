import React, { useEffect, useState, useRef } from "react";
import { Language } from "../types";
import Icon from "./Icon";

interface TrustBarProps {
  locale: Language;
}

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  trigger: boolean;
}

function Counter({ end, suffix = "", duration = 1500, trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));
    
    // For large numbers, increment by more than 1
    const increment = end > 500 ? Math.ceil(end / 100) : 1;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, Math.max(stepTime, 10));

    return () => clearInterval(timer);
  }, [end, duration, trigger]);

  return (
    <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gold">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustBar({ locale }: TrustBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: "branches",
      icon: "MapPin",
      endValue: 4,
      suffix: "",
      labelAr: "فروع فاخرة",
      labelEn: "Luxury Branches",
    },
    {
      id: "customers",
      icon: "User",
      endValue: 3100,
      suffix: "+",
      labelAr: "عميل سعيد",
      labelEn: "Happy Customers",
    },
    {
      id: "service",
      icon: "Clock",
      endValue: 24,
      suffix: "H",
      labelAr: "ساعة خدمة متواصلة",
      labelEn: "Hour Service Support",
    },
    {
      id: "since",
      icon: "Sparkles",
      endValue: 2022,
      suffix: "",
      labelAr: "العناية بكم منذ",
      labelEn: "Caring Since",
      isYear: true,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-gradient-to-r from-[#151515] via-[#1A1A1A] to-[#151515] border-y border-gold/10 py-10 md:py-14"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 divide-y divide-white/5 lg:divide-y-0 lg:divide-x lg:divide-white/5">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                index > 1 ? "pt-6 lg:pt-0" : ""
              } ${index % 2 === 1 ? "border-s-0 sm:border-s border-white/5 lg:border-s-0" : ""}`}
            >
              <div className="mb-3 p-2 bg-gold/5 rounded-full border border-gold/10 text-gold animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                <Icon name={stat.icon} size={20} />
              </div>
              
              <div className="flex items-baseline gap-1 mt-1">
                {stat.isYear && <span className="text-gray-400 text-sm font-semibold me-1">{locale === "ar" ? "عام" : ""}</span>}
                <Counter
                  end={stat.endValue}
                  suffix={stat.suffix}
                  trigger={isVisible}
                  duration={stat.isYear ? 1200 : 1500}
                />
              </div>

              <span className="text-gray-400 text-xs sm:text-sm font-medium mt-2 font-sans">
                {locale === "ar" ? stat.labelAr : stat.labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
