import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function ArchitecturalSpotlight() {
  return (
    <section className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-graphite-border">
      {/* Background Cinematic Visual */}
      <Image
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop"
        alt="Amaltas Estate - Dholpur Stone Colonnade in Lutyens' Delhi"
        fill
        sizes="100vw"
        className="object-cover object-center brightness-75 scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
      />

      {/* Editorial Scrim */}
      <div className="absolute inset-0 bg-obsidian/75 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />

      {/* Floating Content Card */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold border border-gold/30 bg-obsidian/80 backdrop-blur-md px-4 py-1.5 mb-6">
          <Compass className="w-3.5 h-3.5" />
          <span>Architectural Spotlight • Lutyens’ Delhi</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory tracking-tight leading-[1.12] mb-6">
          A Study in Spatial Mastery & Provenance.
        </h2>

        {/* Minimal Gold Divider */}
        <div className="w-16 h-[2px] bg-gold mx-auto mb-6" />

        <p className="text-sm sm:text-base text-ivory-muted/90 font-sans max-w-2xl mx-auto leading-relaxed mb-10 font-light">
          From hand-chiseled pink Dholpur sandstone to centennial tree canopies spanning over two acres, explore how historical dignity and contemporary engineering harmonize at Amaltas Estate.
        </p>

        <Link
          href="/properties/amaltas-estate"
          className="inline-flex items-center gap-3 bg-ivory text-charcoal hover:bg-gold hover:text-obsidian px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 shadow-2xl group"
        >
          <span>Examine The Amaltas Dossier</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
