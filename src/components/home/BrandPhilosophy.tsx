import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CURATION_PRINCIPLES } from "@/data/properties";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";

export function BrandPhilosophy() {
  return (
    <section className="py-24 md:py-36 bg-obsidian border-b border-graphite-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Collage & Materiality */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-graphite-border shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
                alt="Architectural Materiality and Light - GARA Curation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Small Architectural Detail Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-64 p-5 bg-charcoal border border-graphite-border shadow-2xl">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold block mb-1">
                Discretion Protocol
              </span>
              <p className="text-xs font-serif text-ivory leading-snug">
                “Over 60% of our acquisitions are concluded through private treaties without public publication.”
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Principles */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-gold" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
                The GARA Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif text-ivory tracking-tight leading-[1.15] mb-6">
              Luxury Is in the Details.
            </h2>

            <p className="text-sm sm:text-base text-ivory-muted font-sans font-light leading-relaxed mb-10">
              GARA operates at the intersection of architectural critique and private real estate advisory. We do not aggregate generic inventory; we filter for spatial intelligence, material authenticity, and irreplaceable Indian terroir.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              {CURATION_PRINCIPLES.map((principle) => (
                <div key={principle.num} className="border-t border-graphite-border/80 pt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-serif text-gold">{principle.num}</span>
                    <h3 className="text-sm uppercase tracking-wider font-sans text-ivory font-medium">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-xs text-ivory-muted/80 leading-relaxed font-light">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" href="/about">
                Read The GARA Manifesto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
