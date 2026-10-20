"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PROPERTIES } from "@/data/properties";
import { Property, PropertyCategory } from "@/types/property";
import { PropertyCard } from "@/components/property/PropertyCard";
import { useApp } from "@/context/AppContext";
import { formatPrice } from "@/lib/utils";
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  LayoutGrid,
  List,
  Bookmark,
  Building,
  MapPin,
  ChevronDown,
} from "lucide-react";

const CITIES = ["All Locations", "Goa", "Worli", "Lutyens' Delhi", "Mandwa & Awas", "Bengaluru", "Kasauli Hills", "Hyderabad", "Malabar Hill"];

const CATEGORIES_FILTER = [
  "All Archetypes",
  "Luxury Villa",
  "Sky Mansion",
  "Penthouse",
  "Coastal Estate",
  "Heritage Residence",
  "Alpine Retreat",
];

export function PropertiesCatalogue() {
  const searchParams = useSearchParams();
  const { savedIds, currency } = useApp();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Locations");
  const [selectedCategory, setSelectedCategory] = useState("All Archetypes");
  const [priceTier, setPriceTier] = useState<"all" | "under50" | "50to100" | "above100">("all");
  const [bedrooms, setBedrooms] = useState<"all" | "4" | "5" | "6">("all");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc" | "area-desc">("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  // Sync with URL query params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const match = CATEGORIES_FILTER.find(
        (c) => c.toLowerCase().replace(/\s+/g, "-") === categoryParam.toLowerCase()
      );
      if (match) setSelectedCategory(match);
    }

    const filterParam = searchParams.get("filter");
    if (filterParam === "saved") {
      setShowSavedOnly(true);
    }
  }, [searchParams]);

  const activeFiltersCount = [
    selectedCity !== "All Locations",
    selectedCategory !== "All Archetypes",
    priceTier !== "all",
    bedrooms !== "all",
    showSavedOnly,
    Boolean(searchQuery.trim()),
  ].filter(Boolean).length;

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCity("All Locations");
    setSelectedCategory("All Archetypes");
    setPriceTier("all");
    setBedrooms("all");
    setShowSavedOnly(false);
  };

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Saved filter
      if (showSavedOnly && !savedIds.includes(property.id)) {
        return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = property.title.toLowerCase().includes(query);
        const matchesCity = property.location.city.toLowerCase().includes(query);
        const matchesNeighborhood = property.location.neighborhood.toLowerCase().includes(query);
        const matchesStyle = property.architecturalStyle.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCity && !matchesNeighborhood && !matchesStyle) {
          return false;
        }
      }

      // City
      if (selectedCity !== "All Locations") {
        if (!property.location.city.toLowerCase().includes(selectedCity.toLowerCase())) {
          return false;
        }
      }

      // Category
      if (selectedCategory !== "All Archetypes") {
        if (property.category !== selectedCategory) {
          return false;
        }
      }

      // Price tier
      if (priceTier === "under50" && property.priceInrCrores >= 50) return false;
      if (priceTier === "50to100" && (property.priceInrCrores < 50 || property.priceInrCrores > 100)) return false;
      if (priceTier === "above100" && property.priceInrCrores <= 100) return false;

      // Bedrooms
      if (bedrooms === "4" && property.specs.bedrooms < 4) return false;
      if (bedrooms === "5" && property.specs.bedrooms < 5) return false;
      if (bedrooms === "6" && property.specs.bedrooms < 6) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.priceInrCrores - b.priceInrCrores;
      if (sortBy === "price-desc") return b.priceInrCrores - a.priceInrCrores;
      if (sortBy === "area-desc") return b.specs.builtAreaSqFt - a.specs.builtAreaSqFt;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCity, selectedCategory, priceTier, bedrooms, sortBy, showSavedOnly, savedIds]);

  return (
    <div className="min-h-screen bg-obsidian pt-28 pb-32">
      {/* Header Intro */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-6 h-[1px] bg-gold" />
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
            Curated Portfolio
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl sm:text-6xl font-serif text-ivory tracking-tight">
              Exceptional Properties.
            </h1>
            <p className="mt-3 text-sm text-ivory-muted/90 font-sans max-w-xl font-light leading-relaxed">
              Explore a considered collection of residences across distinctive locations, chosen for their architectural pedigree and verifiable title.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 border transition-colors ${
                viewMode === "grid"
                  ? "bg-charcoal border-gold text-gold"
                  : "bg-obsidian border-graphite-border text-stone-400 hover:text-ivory"
              }`}
              title="Grid Layout"
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2.5 border transition-colors ${
                viewMode === "list"
                  ? "bg-charcoal border-gold text-gold"
                  : "bg-obsidian border-graphite-border text-stone-400 hover:text-ivory"
              }`}
              title="Editorial List View"
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Search Console */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <div className="bg-charcoal border border-graphite-border p-5 lg:p-6 shadow-xl space-y-4">
          {/* Top Search Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
            <div className="lg:col-span-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by architectural style, city, or residence name (e.g. 'Brutalist', 'Worli', 'Penthouse')..."
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 pl-11 text-xs text-ivory placeholder:text-stone-500 focus:outline-none focus:border-gold transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-ivory"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="lg:col-span-4 flex items-center gap-3">
              {/* Sort selector */}
              <div className="relative flex-1">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full bg-obsidian border border-graphite-border px-3.5 py-3 text-xs text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer appearance-none pr-8"
                >
                  <option value="featured">Sort: Curated Priority</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="area-desc">Area: Largest Built Sq.Ft</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 pointer-events-none" />
              </div>

              {/* Saved filter toggle */}
              <button
                onClick={() => setShowSavedOnly(!showSavedOnly)}
                className={`px-3 py-3 text-xs border flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                  showSavedOnly
                    ? "bg-gold text-obsidian border-gold font-medium"
                    : "bg-obsidian border-graphite-border text-stone-400 hover:text-ivory"
                }`}
                title="View your saved shortlist"
              >
                <Bookmark className={`w-3.5 h-3.5 ${showSavedOnly ? "fill-obsidian" : ""}`} />
                <span className="hidden sm:inline">Shortlist</span>
                {savedIds.length > 0 && <span>({savedIds.length})</span>}
              </button>
            </div>
          </div>

          {/* Secondary Filter Dropdowns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-graphite-border/70 text-xs">
            {/* Location */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">
                Location
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full bg-obsidian border border-graphite-border px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Archetype / Category */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">
                Archetype
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-obsidian border border-graphite-border px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                {CATEGORIES_FILTER.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Tier */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">
                Valuation Bracket
              </label>
              <select
                value={priceTier}
                onChange={(e) => setPriceTier(e.target.value as any)}
                className="w-full bg-obsidian border border-graphite-border px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                <option value="all">All Valuation Brackets</option>
                <option value="under50">Under ₹50 Cr (&lt; $6M)</option>
                <option value="50to100">₹50 Cr – ₹100 Cr ($6M – $12M)</option>
                <option value="above100">Above ₹100 Cr ($12M+ Trophy)</option>
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-stone-400 mb-1">
                Bedrooms
              </label>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value as any)}
                className="w-full bg-obsidian border border-graphite-border px-3 py-2 text-xs text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
              >
                <option value="all">Any Bed Count</option>
                <option value="4">4+ Bedroom Suites</option>
                <option value="5">5+ Bedroom Suites</option>
                <option value="6">6+ Sovereign Suites</option>
              </select>
            </div>
          </div>

          {/* Active Filter Chips & Reset */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-graphite-border/70 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-stone-400">Active Filters:</span>
                {selectedCity !== "All Locations" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-graphite border border-graphite-border text-gold text-[11px]">
                    {selectedCity}
                    <button onClick={() => setSelectedCity("All Locations")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {selectedCategory !== "All Archetypes" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-graphite border border-graphite-border text-gold text-[11px]">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("All Archetypes")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {priceTier !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-graphite border border-graphite-border text-gold text-[11px]">
                    Price: {priceTier}
                    <button onClick={() => setPriceTier("all")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {bedrooms !== "all" && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-graphite border border-graphite-border text-gold text-[11px]">
                    {bedrooms}+ Beds
                    <button onClick={() => setBedrooms("all")}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {showSavedOnly && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-graphite border border-graphite-border text-gold text-[11px]">
                    Saved Only
                    <button onClick={() => setShowSavedOnly(false)}>
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
              </div>

              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-gold transition-colors ml-auto"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset all filters</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 flex items-center justify-between text-xs text-stone-400 font-sans">
        <div>
          Showing <span className="text-ivory font-medium">{filteredProperties.length}</span> of{" "}
          <span className="text-ivory font-medium">{PROPERTIES.length}</span> verified residences
        </div>
        <div className="text-[11px] text-stone-500">
          All listings subject to private treaty verification
        </div>
      </div>

      {/* Property Cards Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {filteredProperties.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-graphite-border p-12 bg-charcoal/50">
            <Building className="w-10 h-10 text-stone-600 mx-auto mb-4" />
            <h3 className="text-2xl font-serif text-ivory mb-2">No Matching Residences Found</h3>
            <p className="text-xs text-ivory-muted max-w-md mx-auto mb-6">
              None of our current public listings match your precise criteria. Our private off-market registry contains additional unlisted estates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={resetFilters}
                className="bg-ivory text-charcoal hover:bg-gold hover:text-obsidian px-6 py-3 text-xs uppercase tracking-wider transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} layout="standard" />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} layout="featured" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
