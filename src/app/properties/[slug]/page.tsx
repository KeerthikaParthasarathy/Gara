import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { PROPERTIES } from "@/data/properties";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { FloorPlanViewer } from "@/components/property/FloorPlanViewer";
import { MortgageCalculator } from "@/components/property/MortgageCalculator";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyDetailClientActions } from "@/components/property/PropertyDetailClientActions";
import { Badge } from "@/components/ui/Badge";
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Car,
  Calendar,
  ShieldCheck,
  Check,
  Compass,
  ArrowLeft,
  Share2,
  Bookmark,
  Building,
  Sparkles,
} from "lucide-react";

interface PropertyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    return {
      title: "Property Not Found | GARA",
    };
  }

  return {
    title: `${property.title} — ${property.location.neighborhood}, ${property.location.city} | GARA`,
    description: property.tagline,
    openGraph: {
      title: `${property.title} | GARA Ultra-Luxury Real Estate`,
      description: property.tagline,
      images: [
        {
          url: property.images[0]?.url,
          width: 1200,
          height: 630,
          alt: property.title,
        },
      ],
    },
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  // Related properties
  const relatedProperties = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-obsidian text-ivory pt-24 pb-32">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <nav className="flex items-center gap-2 text-xs text-stone-500 font-sans">
          <Link href="/" className="hover:text-gold transition-colors">
            GARA
          </Link>
          <span>/</span>
          <Link href="/properties" className="hover:text-gold transition-colors">
            Portfolio
          </Link>
          <span>/</span>
          <span className="text-gold truncate max-w-xs">{property.title}</span>
        </nav>
      </div>

      {/* Property Hero Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-graphite-border pb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <Badge variant="status">{property.category}</Badge>
              <Badge variant="graphite">{property.architecturalStyle}</Badge>
              <span className="text-[11px] text-stone-400 font-sans flex items-center gap-1.5 ml-1">
                <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                {property.specs.reraRegistration || "Title Verified"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-ivory tracking-tight mb-3">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-sm text-stone-400 font-sans">
              <MapPin className="w-4 h-4 text-gold" />
              <span>
                {property.location.neighborhood}, {property.location.city}, {property.location.state}
              </span>
            </div>
          </div>

          {/* Client-Side Interactive Actions: Price in selected currency, Viewing trigger, Shortlist */}
          <PropertyDetailClientActions property={property} />
        </div>
      </div>

      {/* Full-width Responsive Image Gallery with Lightbox */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <PropertyGallery images={property.images} title={property.title} />
      </div>

      {/* Main Content Layout: 8 cols dossier / 4 cols sticky advisory */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main 8-Column Editorial Dossier */}
          <div className="lg:col-span-8 space-y-16">
            {/* Key Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-charcoal border border-graphite-border">
              <div className="p-3 border-r border-graphite-border/70 last:border-r-0">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-1">
                  <Bed className="w-3.5 h-3.5 text-gold" /> Bedrooms
                </span>
                <span className="text-xl sm:text-2xl font-serif text-ivory">
                  {property.specs.bedrooms} Suites
                </span>
              </div>

              <div className="p-3 border-r border-graphite-border/70 last:border-r-0">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-1">
                  <Bath className="w-3.5 h-3.5 text-gold" /> Bathrooms
                </span>
                <span className="text-xl sm:text-2xl font-serif text-ivory">
                  {property.specs.bathrooms} Baths
                </span>
              </div>

              <div className="p-3 border-r border-graphite-border/70 last:border-r-0">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-1">
                  <Maximize2 className="w-3.5 h-3.5 text-gold" /> Built Area
                </span>
                <span className="text-xl sm:text-2xl font-serif text-ivory">
                  {new Intl.NumberFormat("en-IN").format(property.specs.builtAreaSqFt)} <span className="text-xs text-stone-400">sq.ft</span>
                </span>
              </div>

              <div className="p-3">
                <span className="text-[10px] uppercase tracking-wider text-stone-400 flex items-center gap-1.5 mb-1">
                  <Car className="w-3.5 h-3.5 text-gold" /> Private Garage
                </span>
                <span className="text-xl sm:text-2xl font-serif text-ivory">
                  {property.specs.carParks} Vehicles
                </span>
              </div>
            </div>

            {/* Architectural Narrative & Description */}
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block mb-2">
                Curatorial Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-ivory mb-6">
                Spatial Conception & Atmosphere
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-ivory-muted/90 font-sans font-light leading-relaxed">
                {property.description.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Architectural Critique Note */}
              <div className="mt-8 p-6 bg-charcoal border-l-2 border-gold border-y border-r border-graphite-border">
                <h4 className="text-xs uppercase tracking-wider font-sans text-gold mb-2 font-medium">
                  Architectural Integrity & Passive Engineering
                </h4>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">
                  {property.architecturalNarrative}
                </p>
              </div>
            </div>

            {/* Materiality Palette */}
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block mb-2">
                Sensory Palette
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-ivory mb-6">
                Material Authenticity
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.materials.map((mat, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-charcoal border border-graphite-border flex items-center gap-3 text-xs"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-ivory font-sans">{mat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Confirmed Amenities Grid */}
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block mb-2">
                Private Appointments
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-ivory mb-6">
                Confirmed Estate Amenities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {property.amenities.map((group, idx) => (
                  <div key={idx} className="p-6 bg-charcoal border border-graphite-border">
                    <h3 className="text-xs uppercase tracking-wider font-sans text-gold font-medium mb-4 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      {group.category}
                    </h3>
                    <ul className="space-y-2.5 text-xs text-stone-300 font-sans">
                      {group.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan Viewer with Levels */}
            <div>
              <FloorPlanViewer floorPlans={property.floorPlans} propertyTitle={property.title} />
            </div>

            {/* Neighborhood & Location Context */}
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block mb-2">
                Geographic Terroir
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-ivory mb-6">
                Neighborhood Provenance & Transit Corridors
              </h2>
              <div className="p-6 bg-charcoal border border-graphite-border">
                <div className="flex items-center gap-2 text-xs text-gold uppercase tracking-wider mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>Strategic Location Highlights</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {property.location.highlights.map((highlight, idx) => (
                    <div key={idx} className="p-3 bg-obsidian border border-graphite-border text-xs text-stone-300">
                      • {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Structuring & Stamp Duty Calculator */}
            <div>
              <MortgageCalculator
                priceInrCrores={property.priceInrCrores}
                stateName={property.location.state}
              />
            </div>
          </div>

          {/* Sticky 4-Column Advisory & Private Viewing Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="p-6 md:p-8 bg-charcoal border border-graphite-border shadow-2xl">
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-gold block mb-1">
                Private Advisory Desk
              </span>
              <h3 className="text-xl font-serif text-ivory mb-2">
                Acquisition Representation
              </h3>
              <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
                All property viewings and dossier disclosures are managed under strict confidentiality.
              </p>

              {/* Direct Partner Card */}
              <div className="flex items-center gap-3 p-3 bg-obsidian border border-graphite-border mb-6">
                <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center font-serif text-base font-medium border border-gold/30">
                  GP
                </div>
                <div>
                  <p className="text-xs font-serif text-ivory">GARA Partner Desk</p>
                  <p className="text-[10px] text-stone-400 font-sans">
                    Regional Director • {property.location.state}
                  </p>
                </div>
                <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500" title="Desk Active" />
              </div>

              {/* Curator Note */}
              <div className="p-4 bg-obsidian/70 border border-graphite-border/70 text-xs italic text-stone-300 font-serif leading-relaxed mb-6">
                “{property.curatorNote}”
              </div>

              {/* Client CTA triggers */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/919820000000?text=${encodeURIComponent(
                    `Hello GARA Advisory. I am requesting confidential information regarding ${property.title} (Ref: ${property.id}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-emerald-300 py-3.5 text-xs uppercase tracking-wider font-sans transition-colors"
                >
                  Direct WhatsApp Advisor
                </a>
              </div>
            </div>

            {/* Quick Assurance Box */}
            <div className="p-5 bg-obsidian border border-graphite-border space-y-3 text-xs text-stone-400 font-sans">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>RERA Registration: {property.specs.reraRegistration || "Verified Freehold"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Orientation: {property.specs.facing || "Prime Aspect"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Completion / Build Year: {property.yearBuilt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Properties Collection */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-28 pt-16 border-t border-graphite-border">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-gold block mb-1">
              Curated Comparisons
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif text-ivory">
              Comparable Residences in Portfolio
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-xs uppercase tracking-wider text-gold hover:underline font-sans hidden sm:inline"
          >
            View All ({PROPERTIES.length})
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProperties.map((rel) => (
            <PropertyCard key={rel.id} property={rel} layout="standard" />
          ))}
        </div>
      </div>
    </div>
  );
}
