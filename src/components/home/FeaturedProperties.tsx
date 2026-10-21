import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PROPERTIES } from "@/data/properties";
import { ArrowRight } from "lucide-react";

export function FeaturedProperties() {
  const featuredProperties = PROPERTIES.filter((property) => property.featured);

  return (
    <section id="collection" className="py-24 md:py-36 border-b border-graphite-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-graphite-border/70">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-gold" />
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
                The GARA Collection
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-ivory tracking-tight font-light">
              Residences of Exceptional Provenance.
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

        <div className="group/marquee relative overflow-hidden" role="region" aria-label="Featured residences">
          <div className="collection-marquee-track flex w-max py-2 group-hover/marquee:[animation-play-state:paused]">
            {[0, 1].map((groupIndex) => (
              <div key={groupIndex} className="flex shrink-0 gap-6 pr-6" aria-hidden={groupIndex === 1}>
                {featuredProperties.map((property) => {
                  const image = property.images.find((item) => item.isHero)?.url ?? property.images[0]?.url ?? "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop";

                  return (
                    <article
                      key={`${property.id}-${groupIndex}`}
                      className="group/card relative w-[min(80vw,320px)] shrink-0 snap-start overflow-hidden border border-graphite-border bg-charcoal transition-colors duration-500 hover:border-gold/60 sm:w-[350px]"
                    >
                      <Link href={`/properties/${property.slug}`} className="block" tabIndex={groupIndex === 1 ? -1 : undefined}>
                        <div className="relative aspect-[4/5] overflow-hidden bg-obsidian">
                          <Image src={image} alt={property.title} fill sizes="(max-width: 640px) 80vw, 350px" className="object-cover transition-transform duration-1000 ease-out group-hover/card:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/15 to-transparent" />
                          <div className="absolute inset-x-0 bottom-0 p-6">
                            <span className="mb-2 block text-[10px] uppercase tracking-[0.2em] text-gold">{property.category}</span>
                            <h3 className="font-serif text-2xl font-light text-ivory">{property.title}</h3>
                            <p className="mt-2 text-xs text-stone-300">{property.location.neighborhood}, {property.location.city}</p>
                          </div>
                        </div>
                      </Link>
                    </article>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
