import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const dimensions = {
    sm: { height: "h-8", width: "w-auto", iconSize: 28, textSize: "text-lg" },
    md: { height: "h-12", width: "w-auto", iconSize: 42, textSize: "text-2xl" },
    lg: { height: "h-20", width: "w-auto", iconSize: 64, textSize: "text-4xl" },
  };

  const current = dimensions[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Hanger + Opera Shape Integrated SVG */}
      <svg
        className={`${current.height} ${current.width} text-gold animate-float`}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDuration: "6s" }}
      >
        {/* Glow effect */}
        <defs>
          <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D7BE82" />
            <stop offset="50%" stopColor="#C6A86A" />
            <stop offset="100%" stopColor="#A88B4E" />
          </linearGradient>
        </defs>

        {/* The Hanger Hook */}
        <path
          d="M60 40 C60 18, 72 15, 72 25 C72 32, 60 33, 60 44"
          stroke="url(#gold-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#gold-glow)"
        />

        {/* The Hanger Body (Triangle) */}
        <path
          d="M15 65 L60 44 L105 65 Z"
          stroke="url(#gold-gradient)"
          strokeWidth="3.5"
          strokeLinejoin="round"
          fill="none"
          filter="url(#gold-glow)"
        />

        {/* Crossbar design representing luxury fabric */}
        <path
          d="M30 65 C40 62, 80 62, 90 65"
          stroke="#FFFFFF"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Core letter mark inside the hanger */}
        <circle cx="60" cy="56" r="5" fill="#C6A86A" />
      </svg>

      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-bold tracking-[0.2em] text-white ${current.textSize}`}
          style={{ textShadow: "0 2px 10px rgba(198,168,106,0.15)" }}
        >
          OPERA
        </span>
        <span className="text-[9px] uppercase tracking-[0.35em] text-gold mt-1 font-sans">
          CLEAN • أوبرا
        </span>
      </div>
    </div>
  );
}
