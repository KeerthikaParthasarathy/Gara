import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/data/properties";
import { ArrowUpRight } from "lucide-react";

export function PropertyCategories() {
  return (
    <section className="py-24 md:py-32 bg-[#141414]/40 border-b border-graphite-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-3">
            Archetypes of Living
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight mb-4">
            Find Your Kind of Exceptional.
          </h2>
          <p className="text-xs sm:text-sm text-ivory-muted font-sans font-light">
            Every lifestyle demands its own spatial envelope. Explore our curated collections classified by geographic and architectural temperament.
          </p>
        </div>

        {/* 5-Column Luxury Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/properties?category=${category.slug}`}
              className="group relative h-[380px] sm:h-[440px] overflow-hidden border border-graphite-border hover:border-gold/60 transition-all duration-500 flex flex-col justify-end p-6"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent group-hover:from-obsidian/90 transition-colors duration-500" />

              {/* Text & Indicator */}
              <div className="relative z-10">
                <div className="flex items-center justify-between text-xs text-gold mb-2">
                  <span className="text-[10px] uppercase tracking-widest font-sans">
                    {category.count} {category.count === 1 ? "Estate" : "Estates"}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-obsidian/80 border border-graphite-border flex items-center justify-center text-ivory group-hover:border-gold group-hover:text-gold transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-lg md:text-xl font-serif text-ivory group-hover:text-gold transition-colors mb-2">
                  {category.name}
                </h3>

                <p className="text-[11px] text-ivory-muted/80 font-sans font-light line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
