import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-[0.1em] uppercase text-xs transition-all duration-300 select-none disabled:opacity-40 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "px-4 py-2 text-[11px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-xs tracking-[0.15em]",
  };

  const variantStyles = {
    primary:
      "bg-ivory text-charcoal hover:bg-gold hover:text-obsidian border border-transparent shadow-sm",
    secondary:
      "bg-graphite text-ivory hover:bg-charcoal-light border border-graphite-border hover:border-gold/40",
    gold: "bg-gold text-obsidian hover:bg-gold-soft font-medium shadow-sm hover:shadow-[0_0_20px_rgba(198,167,106,0.3)]",
    outline:
      "bg-transparent text-ivory border border-graphite-border hover:border-gold hover:text-gold",
    ghost: "bg-transparent text-ivory-muted hover:text-ivory hover:bg-graphite/40",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
