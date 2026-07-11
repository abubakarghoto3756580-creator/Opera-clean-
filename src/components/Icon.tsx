import React from "react";
import * as Icons from "lucide-react";

interface IconProps {
  name: string;
  className?: string;
  size?: number;
  style?: React.CSSProperties;
}

export default function Icon({ name, className = "", size = 24, style }: IconProps) {
  // Map string name to Lucide components
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) {
    return <Icons.HelpCircle className={className} size={size} style={style} />;
  }
  return <LucideIcon className={className} size={size} style={style} />;
}
