import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  inrCrores: number,
  currency: "INR" | "USD" = "INR",
  usdMillions?: number
): string {
  if (currency === "USD") {
    const val = usdMillions ?? (inrCrores / 8.3);
    return `$${val.toFixed(2)}M`;
  }
  return `₹${inrCrores.toFixed(1)} Cr`;
}

export function formatArea(sqFt: number): string {
  return new Intl.NumberFormat("en-IN").format(sqFt) + " sq.ft";
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
