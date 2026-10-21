"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Compass,
  ArrowUpRight,
  MapPin,
  Trees,
  Waves,
  Mountain,
  Landmark,
  ShieldCheck,
  Radio,
  Clock,
} from "lucide-react";

interface CityPresence {
  id: string;
  name: string;
  region: string;
  icon: React.ElementType;
  flagship: string;
  price: string;
  type: string;
  slug: string;
  coordinates: string;
  acres: string;
  transit: string;
  x: number;
  y: number;
}

const CITIES: CityPresence[] = [
  {
    id: "kasauli",
    name: "Kasauli Hills",
    region: "Himachal Pradesh",
    icon: Mountain,
    flagship: "The Pinecrest Retreat",
    price: "₹52 Cr",
    type: "Alpine Ridge Compound",
    slug: "celestia-crest",
    coordinates: "30.9013° N, 76.9649° E",
    acres: "3.20 Private Acres",
    transit: "On-Premise Private Helipad Access",
    x: 43.5,
    y: 19.5,
  },
  {
    id: "delhi",
    name: "Delhi (LBZ)",
    region: "National Capital Region",
    icon: Landmark,
    flagship: "Amaltas Estate",
    price: "₹385 Cr",
    type: "Heritage Sovereign Manor",
    slug: "amaltas-estate",
    coordinates: "28.5983° N, 77.2140° E",
    acres: "1.85 Sovereign Grounds",
    transit: "12 Mins to IGI Private Jet Hangar",
    x: 45.2,
    y: 28.5,
  },
  {
    id: "mumbai",
    name: "South Mumbai",
    region: "Worli Sea Face",
    icon: Building2,
    flagship: "The Oberoi Sky Penthouse",
    price: "₹145 Cr",
    type: "Triplex Sky Mansion",
    slug: "the-oberoi-sky-penthouse",
    coordinates: "18.9986° N, 72.8174° E",
    acres: "14,500 Sq.Ft Sky Footprint",
    transit: "4 Mins to Bandra-Worli Sea Link",
    x: 32.5,
    y: 56.5,
  },
  {
    id: "alibaug",
    name: "Alibaug Coast",
    region: "Mandwa Coastline",
    icon: Trees,
    flagship: "Aura Mar Vista",
    price: "₹72 Cr",
    type: "Oceanfront Compound",
    slug: "aura-mar-vista",
    coordinates: "18.7583° N, 72.8800° E",
    acres: "4.80 Coastal Acres",
    transit: "10 Mins via Private Speedboat",
    x: 34.0,
    y: 61.0,
  },
  {
    id: "goa",
    name: "North Goa",
    region: "Nerul Riverfront",
    icon: Waves,
    flagship: "The Vayu Sanctuary",
    price: "₹48 Cr",
    type: "Brutalist Riverfront Villa",
    slug: "the-vayu-sanctuary",
    coordinates: "15.5034° N, 73.8278° E",
    acres: "2.40 Riverfront Acres",
    transit: "35 Mins to Mopa Int'l Airport",
    x: 35.8,
    y: 72.0,
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    region: "Sadashivnagar",
    icon: Building2,
    flagship: "The Banyan Pavilion",
    price: "₹65 Cr",
    type: "Modernist Private Villa",
    slug: "the-banyan-pavilion",
    coordinates: "13.0068° N, 77.5813° E",
    acres: "0.95 Sovereign Acres",
    transit: "28 Mins to Kempegowda Terminal",
    x: 46.5,
    y: 79.5,
  },
];

export function TerritoryMap() {
  const [selectedCity, setSelectedCity] = useState<CityPresence>(CITIES[4]);

  return (
    <section className="relative text-ivory py-28 border-t border-graphite-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 border-b border-graphite-border/50 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium">
              <Compass className="h-4 w-4" />
              <span>Operational Segments & City Footprint</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-light text-ivory sm:text-5xl">
              Geographic <span className="italic text-gold-soft">Presence.</span>
            </h2>
          </div>
          <p className="mt-4 max-w-md font-sans text-sm text-stone-400 font-light leading-relaxed md:mt-0">
            A unified architectural standard operating across India’s most revered prime and coastal terroirs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            <div className="space-y-2.5">
              {CITIES.map((city) => {
                const isSelected = selectedCity.id === city.id;
                const IconComponent = city.icon;

                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className={`w-full flex items-center justify-between p-4 border text-left transition-all duration-300 ${
                      isSelected
                        ? "border-gold bg-charcoal shadow-[0_0_25px_rgba(198,167,106,0.18)]"
                        : "border-graphite-border/60 bg-obsidian hover:border-gold/40 hover:bg-charcoal/50"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-11 w-11 items-center justify-center border transition-colors ${
                          isSelected
                            ? "border-gold bg-gold text-obsidian"
                            : "border-graphite-border bg-obsidian text-gold"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </div>

                      <div>
                        <div className="font-serif text-lg text-ivory font-normal">{city.name}</div>
                        <div className="text-xs text-stone-400 flex items-center gap-1.5 font-sans font-light">
                          <MapPin className="h-3 w-3 text-gold" />
                          <span>{city.region}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-sm text-gold-soft block">{city.price}</span>
                      <span className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">Active Hub</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pt-3 text-[11px] text-stone-400 font-sans">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>Full Sovereign Clearances & Verified Developer Pedigree</span>
            </div>
          </div>

          <div className="lg:col-span-7 border border-graphite-border bg-charcoal overflow-hidden flex flex-col justify-between shadow-2xl relative min-h-[580px]">
            <div className="relative z-10 px-6 py-4 flex items-center justify-between border-b border-graphite-border/60 bg-black/70 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <Radio className="h-4 w-4 text-gold animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-widest text-gold">
                  ACTIVE TERROIR: {selectedCity.name}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#E6D5B8]">
                {selectedCity.coordinates}
              </span>
            </div>

            <div className="relative z-10 flex-1 flex items-center justify-center p-6">
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(#C6A76A 0.75px, transparent 0.75px), radial-gradient(#C6A76A 0.75px, #0c0c0c 0.75px)",
                  backgroundSize: "28px 28px",
                  backgroundPosition: "0 0, 14px 14px",
                }}
              />

              <div className="relative w-full max-w-[420px] aspect-[4/5]">
                <svg
                  viewBox="0 0 400 500"
                  className="w-full h-full fill-[#1c1b17] stroke-[#C6A76A]/75 stroke-[1.4] filter brightness-[1.12] contrast-[1.15] drop-shadow-[0_0_24px_rgba(198,167,106,0.18)]"
                >
                  <path
                    d="M 180 35 
                       L 215 45 L 240 70 L 255 105 L 235 125 L 260 145 L 290 140 
                       L 340 160 L 375 165 L 360 195 L 315 205 L 280 205 L 270 235 
                       L 285 270 L 270 310 L 255 350 L 225 410 L 195 470 L 175 440 
                       L 155 380 L 135 320 L 120 280 L 105 240 L 95 210 L 80 185 
                       L 110 170 L 130 145 L 140 100 L 155 60 Z"
                  />
                  <line x1="200" y1="35" x2="195" y2="470" stroke="#C6A76A" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.6" />
                  <line x1="80" y1="210" x2="360" y2="210" stroke="#C6A76A" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.6" />
                </svg>

                {CITIES.map((city) => {
                  const isSelected = selectedCity.id === city.id;

                  return (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none transition-transform"
                      style={{ left: `${city.x}%`, top: `${city.y}%` }}
                    >
                      {isSelected && (
                        <span className="absolute -inset-3 rounded-full border border-gold animate-ping opacity-75" />
                      )}

                      <div
                        className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                          isSelected
                            ? "h-7 w-7 bg-gold text-obsidian shadow-[0_0_20px_#C6A76A] scale-110"
                            : "h-3.5 w-3.5 bg-charcoal border border-gold/60 hover:bg-gold hover:scale-125"
                        }`}
                      >
                        {isSelected ? (
                          <MapPin className="h-4 w-4 text-obsidian fill-obsidian" />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        )}
                      </div>

                      <span
                        className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-mono tracking-wider px-2 py-0.5 border transition-all ${
                          isSelected
                            ? "border-gold bg-black text-gold font-semibold"
                            : "border-transparent text-[#E6D5B8] opacity-90 group-hover:opacity-100"
                        }`}
                      >
                        {city.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 p-6 border-t border-graphite-border/80 bg-black/85 backdrop-blur-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-sans">
                    {selectedCity.name} Flagship · {selectedCity.type}
                  </span>
                  <span className="text-xs font-serif text-gold-soft border-l border-graphite-border pl-3">
                    {selectedCity.acres}
                  </span>
                </div>
                <h3 className="font-serif text-2xl text-ivory mt-1 font-light">{selectedCity.flagship}</h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-stone-400 font-sans font-light">
                  <Clock className="h-3.5 w-3.5 text-gold" />
                  <span>{selectedCity.transit}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-serif text-2xl text-gold hidden sm:block font-light">
                  {selectedCity.price}
                </span>
                <Link
                  href={`/properties/${selectedCity.slug}`}
                  className="inline-flex items-center justify-center gap-2 border border-gold bg-gold px-6 py-3 font-sans text-xs uppercase tracking-widest text-obsidian transition-all hover:bg-transparent hover:text-ivory"
                >
                  <span>View Residence</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TerritoryMap;
