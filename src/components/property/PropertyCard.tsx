"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Property } from "@/types/property";
import { useApp } from "@/context/AppContext";
import { formatPrice, formatArea } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Bookmark, ArrowUpRight, Bed, Bath, Maximize2, MapPin, ShieldCheck } from "lucide-react";

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
  const [isHovered, setIsHovered] = useState(false);

  const heroImage =
    property.images[0]?.url ||
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop";

  if (layout === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`group relative bg-charcoal border border-graphite-border hover:border-gold/60 hover:shadow-[0_0_35px_-5px_rgba(198,167,106,0.2)] transition-all duration-700 overflow-hidden flex flex-col lg:flex-row ${
          className || ""
        }`}
      >
        <div className="relative w-full lg:w-3/5 min-h-[360px] sm:min-h-[460px] lg:min-h-[540px] overflow-hidden bg-obsidian">
          <Image
            src={heroImage}
            alt={property.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent lg:hidden" />

          <div className="absolute top-5 left-5 flex flex-wrap items-center gap-2 z-10">
            <Badge variant="status">Featured Residence</Badge>
            <Badge variant="graphite">{property.category}</Badge>
          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleSaveProperty(property.id);
            }}
            className="absolute top-5 right-5 z-10 p-2.5 bg-obsidian/80 backdrop-blur-md border border-graphite-border hover:border-gold text-ivory transition-colors duration-300"
            aria-label={saved ? "Remove from shortlist" : "Save to shortlist"}
            title={saved ? "Remove from shortlist" : "Save to shortlist"}
          >
            <Bookmark className={`w-4 h-4 ${saved ? "fill-gold text-gold" : "text-ivory"}`} />
          </button>

          <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between text-xs font-sans">
            <div className="flex items-center gap-2 bg-obsidian/85 backdrop-blur-md px-3 py-1.5 border border-graphite-border/80 text-ivory">
              <MapPin className="w-3.5 h-3.5 text-gold" />
              <span>{property.location.neighborhood}, {property.location.city}</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-stone-400 bg-obsidian/85 backdrop-blur-md px-2.5 py-1.5 border border-graphite-border/80 text-[10px] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span>{property.specs.reraRegistration ? property.specs.reraRegistration.split(" ")[0] : "Verified Title"}</span>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-[0.18em] mb-3 font-sans">
              <span className="w-4 h-[1px] bg-gold" />
              <span>{property.architecturalStyle}</span>
            </div>

            <Link href={`/properties/${property.slug}`} className="block group-hover:text-gold transition-colors duration-300">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ivory tracking-tight mb-4 font-light">
                {property.title}
              </h3>
            </Link>

            <p className="text-xs sm:text-sm text-ivory-muted/90 font-sans leading-relaxed line-clamp-3 mb-8 font-light">
              {property.tagline}
            </p>

            <div className="border-t border-b border-graphite-border/80 py-5 my-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-1.5 text-ivory font-serif text-xl font-light">
                  <Bed className="w-4 h-4 text-gold" />
                  <span>{property.specs.bedrooms}</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400 mt-1">Bedrooms</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1.5 text-ivory font-serif text-xl font-light">
                  <Bath className="w-4 h-4 text-gold" />
                  <span>{property.specs.bathrooms}</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400 mt-1">Baths</div>
              </div>
              <div>
                <div className="flex items-center justify-center gap-1.5 text-ivory font-serif text-xl font-light">
                  <Maximize2 className="w-4 h-4 text-gold" />
                  <span>{Math.round(property.specs.builtAreaSqFt / 1000)}k</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400 mt-1">Sq.Ft</div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-graphite-border/60 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.18em] text-stone-400 block mb-1">
                Acquisition Value
              </span>
              <span className="text-2xl font-serif text-gold font-light">
                {formatPrice(property.priceInrCrores, currency, property.priceUsdMillions)}
              </span>
            </div>

            <Link
              href={`/properties/${property.slug}`}
              className="group/btn inline-flex items-center gap-2 border-b border-gold/50 pb-1.5 text-xs uppercase tracking-[0.18em] text-ivory hover:text-gold hover:border-gold transition-all duration-300 font-sans"
            >
              <span>Explore Dossier</span>
              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-charcoal border border-graphite-border hover:border-gold/60 hover:shadow-[0_0_30px_-5px_rgba(198,167,106,0.18)] transition-all duration-500 flex flex-col justify-between overflow-hidden ${
        className || ""
      }`}
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-obsidian">
        <Image
          src={heroImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-[1.05] transition-transform duration-1000 ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
          <Badge variant="status">{property.category}</Badge>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSaveProperty(property.id);
          }}
          className="absolute top-4 right-4 z-10 p-2 bg-obsidian/80 backdrop-blur-md border border-graphite-border hover:border-gold text-ivory transition-colors duration-300"
          aria-label={saved ? "Remove from shortlist" : "Save to shortlist"}
        >
          <Bookmark className={`w-3.5 h-3.5 ${saved ? "fill-gold text-gold" : "text-ivory"}`} />
        </button>

        <div className="absolute bottom-3.5 left-3.5 flex items-center gap-1.5 text-[11px] text-ivory font-sans bg-obsidian/85 backdrop-blur-sm px-2.5 py-1 border border-graphite-border/70">
          <MapPin className="w-3 h-3 text-gold" />
          <span>{property.location.neighborhood}, {property.location.city}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="text-[10px] uppercase font-sans tracking-[0.16em] text-gold/80 mb-2">
            {property.architecturalStyle}
          </div>

          <Link href={`/properties/${property.slug}`} className="block group-hover:text-gold transition-colors duration-300">
            <h3 className="text-xl font-serif text-ivory tracking-tight mb-2 line-clamp-1 font-normal">
              {property.title}
            </h3>
          </Link>

          <p className="text-xs text-ivory-muted/80 font-sans line-clamp-2 mb-5 font-light leading-relaxed">
            {property.tagline}
          </p>

          <div className="grid grid-cols-3 gap-2 py-3 border-t border-b border-graphite-border/70 text-center text-xs">
            <div>
              <span className="text-ivory font-serif text-sm font-light">{property.specs.bedrooms}</span>
              <span className="text-[9px] text-stone-400 block uppercase tracking-wider">Beds</span>
            </div>
            <div>
              <span className="text-ivory font-serif text-sm font-light">{property.specs.bathrooms}</span>
              <span className="text-[9px] text-stone-400 block uppercase tracking-wider">Baths</span>
            </div>
            <div>
              <span className="text-ivory font-serif text-sm font-light">
                {formatArea(property.specs.builtAreaSqFt).replace(" sq.ft", "")}
              </span>
              <span className="text-[9px] text-stone-400 block uppercase tracking-wider">Sq.Ft</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-2 flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-stone-400 block">
              Acquisition Value
            </span>
            <span className="text-lg font-serif text-gold font-light">
              {formatPrice(property.priceInrCrores, currency, property.priceUsdMillions)}
            </span>
          </div>

          <Link
            href={`/properties/${property.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-ivory-muted hover:text-gold pb-1 border-b border-transparent hover:border-gold transition-all duration-300 font-sans"
            aria-label={`View dossier for ${property.title}`}
          >
            <span>Dossier</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
