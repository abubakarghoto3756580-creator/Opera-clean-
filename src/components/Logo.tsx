import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const heights = {
    sm: "h-12",
    md: "h-16",
    lg: "h-28",
  };

  return (
    <img
      src="/images/logo-real.png"
      alt="Opera Clean — أوبرا كلين"
      className={`${heights[size]} w-auto self-start shrink-0 grow-0 select-none ${className}`}
    />
  );
}
