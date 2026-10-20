import React from "react";
import Link from "next/link";
import { PROPERTIES } from "@/data/properties";
import { PropertyCard } from "@/components/property/PropertyCard";
import { ArrowRight } from "lucide-react";

export function FeaturedProperties() {
  const featuredHero = PROPERTIES.find((p) => p.featured) || PROPERTIES[0];
  const supportingFeatured = PROPERTIES.filter((p) => p.id !== featuredHero.id).slice(0, 2);

  return (
    <section id="collection" className="py-24 md:py-32 bg-obsidian border-b border-graphite-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
                The GARA Collection
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight">
              Residences Worth Discovering.
            </h2>
          </div>

          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold hover:text-gold-soft transition-colors font-sans pb-1 border-b border-gold/40 hover:border-gold"
          >
            <span>Explore Complete Catalogue ({PROPERTIES.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Showcase: 1 Hero Featured + 2 Supporting Grid */}
        <div className="space-y-8">
          {/* Main Hero Card */}
          <PropertyCard property={featuredHero} layout="featured" />

          {/* Supporting Dual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {supportingFeatured.map((property) => (
              <PropertyCard key={property.id} property={property} layout="standard" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
