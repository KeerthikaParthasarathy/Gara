"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Mail } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-obsidian-dark border-t border-graphite-border text-ivory-muted font-sans relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gold/5 blur-[120px] pointer-events-none" />

      {/* Top Editorial Journal Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-16 border-b border-graphite-border/70">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-3">
              The GARA Private Ledger
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-ivory tracking-wide leading-tight">
              Curated perspectives on architecture, private market acquisitions, and exceptional estates.
            </h3>
            <p className="mt-4 text-sm text-ivory-muted/80 max-w-xl leading-relaxed">
              Dispatched quarterly to accredited collectors, institutional partners, and private family offices. Strict privacy guaranteed.
            </p>
          </div>

          <div className="lg:col-span-5">
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 bg-charcoal border border-gold/40 text-gold text-xs">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Your invitation to the GARA Private Ledger has been registered.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ivory-muted" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter private office email"
                    required
                    className="w-full bg-charcoal border border-graphite-border px-4 py-3.5 pl-11 text-xs text-ivory placeholder:text-stone-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-ivory text-charcoal hover:bg-gold hover:text-obsidian px-6 py-3.5 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 whitespace-nowrap"
                >
                  Request Dispatch
                </button>
              </form>
            )}
            <p className="text-[11px] text-stone-500 mt-2.5">
              By subscribing, you agree to our confidential advisory terms and privacy policy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand & Ethos */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group mb-6">
              <span className="font-serif tracking-[0.28em] text-2xl font-normal text-ivory group-hover:text-gold transition-colors">
                GARA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            </Link>
            <p className="text-xs text-ivory-muted/90 leading-relaxed max-w-sm mb-6">
              GARA is India’s foremost ultra-luxury real estate advisory, curating architectural triumphs across Goa, South Mumbai, Lutyens’ Delhi, Alibaug, and the Himalayan ridges.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold border border-gold/20 bg-gold/5 px-3 py-2 max-w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span className="tracking-wider uppercase text-[10px]">100% Verified Legal Titles & RERA Compliance</span>
            </div>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="text-xs uppercase font-sans tracking-[0.2em] text-ivory mb-5">
              Portfolio
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/properties" className="hover:text-gold transition-colors">
                  Complete Catalogue
                </Link>
              </li>
              <li>
                <Link href="/properties?category=luxury-villa" className="hover:text-gold transition-colors">
                  Tropical Luxury Villas
                </Link>
              </li>
              <li>
                <Link href="/properties?category=sky-mansion" className="hover:text-gold transition-colors">
                  Sky Mansions & Penthouses
                </Link>
              </li>
              <li>
                <Link href="/properties?category=coastal-estate" className="hover:text-gold transition-colors">
                  Coastal Oceanfront Estates
                </Link>
              </li>
              <li>
                <Link href="/properties?category=heritage-residence" className="hover:text-gold transition-colors">
                  Lutyens’ Heritage Acreage
                </Link>
              </li>
              <li>
                <Link href="/properties?category=alpine-retreat" className="hover:text-gold transition-colors">
                  Alpine Mountain Retreats
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency & Advisory */}
          <div>
            <h4 className="text-xs uppercase font-sans tracking-[0.2em] text-ivory mb-5">
              Agency
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  The GARA Manifesto
                </Link>
              </li>
              <li>
                <Link href="/about#curation" className="hover:text-gold transition-colors">
                  Curation Standards
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-gold transition-colors">
                  Developer Representation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Private Client Advisory
                </Link>
              </li>
              <li>
                <Link href="/contact#schedule" className="hover:text-gold transition-colors">
                  Request Private Viewing
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Advisory Hubs */}
          <div>
            <h4 className="text-xs uppercase font-sans tracking-[0.2em] text-ivory mb-5">
              Regional Hubs
            </h4>
            <div className="space-y-4 text-xs">
              <div>
                <p className="text-ivory font-medium">South Mumbai</p>
                <p className="text-stone-400 text-[11px]">One BKC, Bandra Kurla Complex</p>
              </div>
              <div>
                <p className="text-ivory font-medium">New Delhi</p>
                <p className="text-stone-400 text-[11px]">Golf Links / Amrita Shergill Marg</p>
              </div>
              <div>
                <p className="text-ivory font-medium">Goa & Coastal</p>
                <p className="text-stone-400 text-[11px]">Assagao Heritage Quarter</p>
              </div>
              <div>
                <p className="text-ivory font-medium">Bengaluru</p>
                <p className="text-stone-400 text-[11px]">Sadashivnagar & Indiranagar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / RERA Bar */}
      <div className="border-t border-graphite-border/70 py-8 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} GARA Real Estate Advisory LLP. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-stone-600">|</span>
            <span>RERA Registered Agent: MahaRERA / GoaRERA / DelhiRERA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
