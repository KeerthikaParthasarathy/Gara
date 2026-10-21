"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  Bookmark,
  ChevronRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Collection", href: "/properties" },
  { name: "About GARA", href: "/about" },
  { name: "Developer Partnerships", href: "/partnerships" },
  { name: "Advisory & Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { currency, setCurrency, savedIds, openEnquiryModal } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-obsidian/90 backdrop-blur-md border-b border-graphite-border/70 py-4"
            : "bg-gradient-to-b from-obsidian/80 via-obsidian/30 to-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2">
            <span className="font-serif tracking-[0.28em] text-xl md:text-2xl font-normal text-ivory group-hover:text-gold transition-colors duration-300">
              GARA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold transition-transform duration-300 group-hover:scale-125" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase font-sans tracking-[0.14em] transition-all duration-300 py-1 relative",
                    isActive
                      ? "text-gold font-medium"
                      : "text-ivory-muted hover:text-ivory"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center border border-graphite-border bg-charcoal/80 p-0.5 rounded-none text-[11px] font-sans">
              <button
                onClick={() => setCurrency("INR")}
                className={cn(
                  "px-2.5 py-1 tracking-wider transition-colors",
                  currency === "INR"
                    ? "bg-graphite text-gold font-medium"
                    : "text-ivory-muted hover:text-ivory"
                )}
                title="View in Indian Rupees (Crores)"
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={cn(
                  "px-2.5 py-1 tracking-wider transition-colors",
                  currency === "USD"
                    ? "bg-graphite text-gold font-medium"
                    : "text-ivory-muted hover:text-ivory"
                )}
                title="View in US Dollars (Millions)"
              >
                $ USD
              </button>
            </div>

            {savedIds.length > 0 && (
              <Link
                href="/properties?filter=saved"
                className="flex items-center gap-1.5 text-xs text-gold border border-gold/30 bg-gold/5 px-3 py-1.5 hover:bg-gold/10 transition-colors"
                title={`${savedIds.length} residences saved to your private shortlist`}
              >
                <Bookmark className="w-3.5 h-3.5 fill-gold" />
                <span className="text-[11px] font-sans font-medium">{savedIds.length}</span>
              </Link>
            )}

            <Button
              variant="gold"
              size="sm"
              onClick={() => openEnquiryModal()}
              className="tracking-[0.12em]"
            >
              Private Advisory
            </Button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setCurrency(currency === "INR" ? "USD" : "INR")}
              className="text-[11px] font-sans border border-graphite-border bg-charcoal px-2.5 py-1 text-gold"
            >
              {currency === "INR" ? "₹ INR" : "$ USD"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ivory hover:text-gold transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-8 lg:hidden",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        )}
      >
        <div className="flex items-center justify-between border-b border-graphite-border/70 pb-6">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
            <span className="font-serif tracking-[0.28em] text-2xl text-ivory">GARA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-ivory hover:text-gold"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 py-8">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between text-2xl font-serif text-ivory hover:text-gold transition-colors"
            >
              <span className="flex items-baseline gap-4">
                <span className="text-xs font-sans text-gold/60">0{idx + 1}</span>
                {link.name}
              </span>
              <ChevronRight className="w-5 h-5 text-graphite-border group-hover:text-gold group-hover:translate-x-1 transition-all" />
            </Link>
          ))}

          {savedIds.length > 0 && (
            <Link
              href="/properties?filter=saved"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-lg font-sans text-gold border-t border-graphite-border/60 pt-4"
            >
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 fill-gold" />
                Saved Residences ({savedIds.length})
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </nav>

        <div className="border-t border-graphite-border/70 pt-6 flex flex-col gap-4">
          <Button
            variant="gold"
            size="lg"
            onClick={() => {
              setMobileMenuOpen(false);
              openEnquiryModal();
            }}
            className="w-full justify-center"
          >
            Request Private Advisory
          </Button>

          <div className="flex items-center justify-between text-xs text-ivory-muted font-sans pt-2">
            <span>Mumbai • New Delhi • Goa • Bengaluru</span>
            <span className="text-gold flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Ultra-Luxury
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
