"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/property";
import { useApp } from "@/context/AppContext";
import { formatPrice, formatArea } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Bookmark, ArrowUpRight, Bed, Bath, Maximize2, MapPin } from "lucide-react";

interface PropertyCardProps {
  property: Property;
  layout?: "standard" | "featured" | "compact";
  className?: string;
}

export function PropertyCard({
  property,
  layout = "standard",
  className,
}: PropertyCardProps) {
  const { currency, isSaved, toggleSaveProperty } = useApp();
  const saved = isSaved(property.id);

  const heroImage = property.images[0]?.url || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop";

  if (layout === "featured") {
    return (
      <article className={`group relative bg-charcoal border border-graphite-border hover:border-gold/50 transition-all duration-500 overflow-hidden flex flex-col lg:flex-row ${className || ""}`}>
        {/* Large Image Column */}
        <div className="relative w-full lg:w-3/5 min-h-[360px] sm:min-h-[460px] lg:min-h-[540px] overflow-hidden">
          <Image
            src={heroImage}
            alt={property.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:hidden" />

          {/* Badges Overlay */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
            <Badge variant="status">Featured Residence</Badge>
            <Badge variant="graphite">{property.category}</Badge>
          </div>

          {/* Save Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSaveProperty(property.id);
            }}
            className="absolute top-4 right-4 z-10 p-2.5 bg-obsidian/75 backdrop-blur-md border border-graphite-border hover:border-gold text-ivory transition-colors"
            aria-label={saved ? "Remove from shortlist" : "Save to shortlist"}
            title={saved ? "Remove from shortlist" : "Save to shortlist"}
          >
            <Bookmark className={`w-4 h-4 ${saved ? "fill-gold text-gold" : "text-ivory"}`} />
          </button>
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-[0.16em] mb-2 font-sans">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.location.neighborhood}, {property.location.city}</span>
            </div>

            <Link href={`/properties/${property.slug}`} className="block group-hover:text-gold transition-colors">
              <h3 className="text-2xl sm:text-3xl font-serif text-ivory tracking-tight mb-3">
                {property.title}
              </h3>
            </Link>

            <p className="text-xs sm:text-sm text-ivory-muted/90 font-sans leading-relaxed line-clamp-3 mb-6 font-light">
              {property.tagline}
            </p>

            {/* Architectural Highlights */}
            <div className="border-t border-b border-graphite-border/80 py-4 my-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-1.5 text-ivory font-serif text-lg">
                  <Bed className="w-4 h-4 text-gold" />
                  <span>{property.specs.bedrooms}</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400 mt-0.5">Bedrooms</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1.5 text-ivory font-serif text-lg">
                  <Bath className="w-4 h-4 text-gold" />
                  <span>{property.specs.bathrooms}</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400 mt-0.5">Baths</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1.5 text-ivory font-serif text-lg">
                  <Maximize2 className="w-4 h-4 text-gold" />
                  <span>{Math.round(property.specs.builtAreaSqFt / 1000)}k</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400 mt-0.5">Sq.Ft</div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.15em] text-stone-400 block">
                Acquisition Value
              </span>
              <span className="text-xl sm:text-2xl font-serif text-gold">
                {formatPrice(property.priceInrCrores, currency, property.priceUsdMillions)}
              </span>
            </div>

            <Link
              href={`/properties/${property.slug}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-ivory hover:text-gold transition-colors group/link"
            >
              <span>Explore Dossier</span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Standard Card Layout
  return (
    <article className={`group relative bg-charcoal border border-graphite-border hover:border-gold/50 transition-all duration-400 flex flex-col justify-between overflow-hidden ${className || ""}`}>
      {/* Image Area */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-obsidian">
        <Image
          src={heroImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent pointer-events-none" />

        {/* Status Tag */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-2 z-10">
          <Badge variant="status">{property.category}</Badge>
        </div>

        {/* Bookmark / Shortlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSaveProperty(property.id);
          }}
          className="absolute top-3.5 right-3.5 z-10 p-2 bg-obsidian/75 backdrop-blur-md border border-graphite-border hover:border-gold text-ivory transition-colors"
          aria-label={saved ? "Remove from shortlist" : "Save to shortlist"}
        >
          <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-gold text-gold" : "text-ivory"}`} />
        </button>

        {/* Location pill */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-ivory font-sans bg-obsidian/80 backdrop-blur-sm px-2.5 py-1 border border-graphite-border/70">
          <MapPin className="w-3 h-3 text-gold" />
          <span>{property.location.neighborhood}, {property.location.city}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <Link href={`/properties/${property.slug}`} className="block group-hover:text-gold transition-colors">
            <h3 className="text-xl font-serif text-ivory tracking-tight mb-1.5 line-clamp-1">
              {property.title}
            </h3>
          </Link>
          <p className="text-xs text-ivory-muted/80 font-sans line-clamp-2 mb-4 font-light leading-relaxed">
            {property.tagline}
          </p>

          {/* Quick Specs */}
          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-graphite-border/70 text-center text-xs">
            <div>
              <span className="text-ivory font-medium">{property.specs.bedrooms}</span>
              <span className="text-[10px] text-stone-400 block uppercase">Beds</span>
            </div>
            <div>
              <span className="text-ivory font-medium">{property.specs.bathrooms}</span>
              <span className="text-[10px] text-stone-400 block uppercase">Baths</span>
            </div>
            <div>
              <span className="text-ivory font-medium">{formatArea(property.specs.builtAreaSqFt).replace(" sq.ft", "")}</span>
              <span className="text-[10px] text-stone-400 block uppercase">Sq.Ft</span>
            </div>
          </div>
        </div>

        {/* Bottom Price & Link */}
        <div className="mt-5 pt-2 flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-stone-400 block">
              Investment
            </span>
            <span className="text-lg font-serif text-gold">
              {formatPrice(property.priceInrCrores, currency, property.priceUsdMillions)}
            </span>
          </div>

          <Link
            href={`/properties/${property.slug}`}
            className="p-2 border border-graphite-border group-hover:border-gold group-hover:bg-gold/10 text-ivory group-hover:text-gold transition-all"
            aria-label={`View details of ${property.title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
