import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "graphite" | "outline" | "status";
  className?: string;
}

export function Badge({
  children,
  variant = "graphite",
  className,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-2.5 py-1 text-[10px] uppercase font-sans tracking-[0.15em] transition-colors";

  const variantStyles = {
    gold: "bg-gold/10 text-gold border border-gold/30",
    graphite: "bg-graphite text-ivory-muted border border-graphite-border",
    outline: "bg-transparent text-ivory border border-graphite-border",
    status:
      "bg-obsidian/80 backdrop-blur-md text-gold border border-gold/40 shadow-sm",
  };

  return (
    <span className={cn(baseStyles, variantStyles[variant], className)}>
      {children}
    </span>
  );
}
