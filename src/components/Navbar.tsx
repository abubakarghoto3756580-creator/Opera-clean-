import React, { useState, useEffect } from "react";
import { Language } from "../types";
import { TRANSLATIONS } from "../data";
import Logo from "./Logo";
import Icon from "./Icon";

interface NavbarProps {
  locale: Language;
  setLocale: (lang: Language) => void;
}

export default function Navbar({ locale, setLocale }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = TRANSLATIONS[locale];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, href: "#hero" },
    { name: t.navWhy, href: "#why-us" },
    { name: t.navServices, href: "#services" },
    { name: t.navCompare, href: "#before-after" },
    { name: t.navProcess, href: "#process" },
    { name: t.navPlans, href: "#subscriptions" },
    { name: t.navBranches, href: "#branches" },
  ];

  const toggleLanguage = () => {
    setLocale(locale === "ar" ? "en" : "ar");
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[#111111]/90 border-b border-gold/10 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")} className="focus:outline-none">
            <Logo size="sm" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-gold font-sans text-sm font-medium tracking-wide transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Controls & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Bilingual Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 border border-gold/30 hover:border-gold text-xs text-gold rounded-full font-medium transition-all duration-300 bg-gold/5"
              title="Change Language"
            >
              <Icon name="Globe" size={14} />
              <span>{locale === "ar" ? "English" : "العربية"}</span>
            </button>

            {/* Direct Book Button */}
            <a
              href="https://wa.me/96591102095"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gold hover:bg-[#D7BE82] text-black font-semibold rounded-[14px] text-xs transition-all duration-300 font-sans tracking-wide shadow-md hover:shadow-gold/20"
            >
              {t.bookPickup}
            </a>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Bilingual Toggle (Always visible) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-gold/20 text-xs text-gold rounded-full bg-gold/5 font-semibold"
            >
              <Icon name="Globe" size={12} />
              <span>{locale === "ar" ? "EN" : "عربي"}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-gold p-2 rounded-md focus:outline-none"
            >
              <Icon name={isOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] border-b border-gold/10 bg-[#111111]/95" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-gold hover:bg-white/5 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
            <a
              href="https://wa.me/96591102095"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-gold hover:bg-[#D7BE82] text-black font-semibold rounded-[14px] text-sm transition-colors block"
            >
              {t.bookPickup}
            </a>
            <div className="flex justify-between items-center px-3 text-xs text-gray-400 mt-2">
              <span>Kuwait Support: 91102095</span>
              <span>Instagram: @opera_clean</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
