"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Compass, Sun, Wind } from "lucide-react";

type SchematicView = "section" | "axis";

export function ArchitecturalSchematics({ propertyTitle }: { propertyTitle: string }) {
  const [view, setView] = useState<SchematicView>("section");

  return (
    <section className="overflow-hidden rounded-2xl border border-[#C6A76A]/15 bg-[#121212]/40 text-[#F4F0E8] backdrop-blur-md" aria-labelledby="schematics-title">
      <div className="flex flex-col gap-5 border-b border-[#C6A76A]/20 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.22em] text-[#C6A76A]"><Compass className="h-3.5 w-3.5" /> Architectural Schematics</p>
          <h2 id="schematics-title" className="font-serif text-2xl font-light sm:text-3xl">Spatial section &amp; environmental axis</h2>
          <p className="mt-2 text-[10px] text-white/40">{propertyTitle} · Conceptual architectural study</p>
        </div>
        <div className="inline-flex w-fit rounded-full border border-[#C6A76A]/25 bg-[#141414]/50 p-1" role="tablist" aria-label="Schematic view">
          <button type="button" role="tab" aria-selected={view === "section"} onClick={() => setView("section")} className={`rounded-full px-3.5 py-2 text-[9px] uppercase tracking-[.12em] transition-colors sm:text-[10px] ${view === "section" ? "bg-[#C6A76A] text-[#090909]" : "text-white/55 hover:text-white"}`}>Longitudinal Section</button>
          <button type="button" role="tab" aria-selected={view === "axis"} onClick={() => setView("axis")} className={`rounded-full px-3.5 py-2 text-[9px] uppercase tracking-[.12em] transition-colors sm:text-[10px] ${view === "axis" ? "bg-[#C6A76A] text-[#090909]" : "text-white/55 hover:text-white"}`}>Solar / Wind Axis</button>
        </div>
      </div>

      <div className="relative overflow-hidden bg-[#090909]/30 p-3 sm:p-6">
        <div className="pointer-events-none absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(198,167,106,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(198,167,106,.12) 1px,transparent 1px)", backgroundSize: "32px 32px" }} />
        <svg viewBox="0 0 1200 590" role="img" aria-label={view === "section" ? "Architectural longitudinal cross-section with spatial elevations" : "Architectural solar and prevailing wind axis study"} className="relative z-10 h-auto min-h-[270px] w-full rounded-lg border border-[#C6A76A]/20 bg-[#090909]/45">
          <defs>
            <pattern id="cad-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#C6A76A" strokeOpacity=".11" strokeWidth=".7" /></pattern>
            <pattern id="stone-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V8" stroke="#C6A76A" strokeOpacity=".42" strokeWidth="1.4" /></pattern>
            <marker id="arrow-gold" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto"><path d="M0 0 9 4.5 0 9" fill="none" stroke="#C6A76A" strokeWidth="1.4" /></marker>
            <linearGradient id="glazing" x1="0" x2="1"><stop stopColor="#93c5d0" stopOpacity=".1"/><stop offset=".5" stopColor="#93c5d0" stopOpacity=".45"/><stop offset="1" stopColor="#93c5d0" stopOpacity=".1"/></linearGradient>
          </defs>
          <rect width="1200" height="590" fill="url(#cad-grid)" />
          <g fill="none" stroke="#C6A76A" strokeOpacity=".5" strokeWidth="1">
            <path d="M80 500H1110M125 150V500M105 150h40M105 500h40" />
            <path d="M160 527v12m0-6h820m0-6v12M200 172v-20h730v20" strokeDasharray="4 5" />
            <path d="M162 535l8-4v8zM988 535l-8-4v8zM125 145l-4 8h8zM125 505l-4-8h8z" fill="#C6A76A" />
          </g>
          <g fill="#C6A76A" fontFamily="monospace" fontSize="11" letterSpacing="2">
            <text x="495" y="557">LONGITUDINAL DATUM · 01—01</text><text x="64" y="340" transform="rotate(-90 64 340)">+18.00 m / SECTION HEIGHT</text><text x="200" y="137">ROOF TERRACE</text><text x="200" y="247">LEVEL 01</text><text x="200" y="365">GROUND LEVEL</text><text x="200" y="477">LANDSCAPE DATUM</text>
          </g>
          {/* Section-cut villa: deep roof plate, double-height void, living volume and garden */}
          <g stroke="#E8DAB8" strokeWidth="3" fill="none" strokeLinejoin="round">
            <path d="M260 184H1000M275 184v20h700v-20M282 295H975M282 309h700M282 410h700M282 424h700" />
            <path d="M300 204V410M384 204V410M596 204V410M688 204V410M920 204V410M975 204V410" />
            <path d="M300 315h84m212 0h92m92 0h140m55 0h35M384 204h212m92 0h232" strokeOpacity=".68" />
            <path d="M260 184 330 141h590l80 43" stroke="#C6A76A" />
            <path d="M415 212V288M428 212V288M442 212V288M456 212V288M470 212V288M484 212V288M498 212V288M512 212V288M526 212V288M540 212V288" stroke="#87B8C0" strokeWidth="1.5" />
            <path d="M597 212h82v76h-82zM690 212h82v76h-82zM785 212h82v76h-82z" strokeWidth="1.5" />
            <path d="M596 290v120" stroke="#C6A76A" strokeDasharray="5 5" />
            <path d="M282 424h700v22H282z" fill="url(#stone-hatch)" stroke="#C6A76A" />
            <path d="M280 447h705v17H280z" fill="#C6A76A" fillOpacity=".08" stroke="#C6A76A" strokeOpacity=".7" />
          </g>
          <g fill="#C6A76A" fontFamily="monospace" fontSize="10" letterSpacing="1.2" textAnchor="middle">
            <text x="338" y="271">ENTRY</text><text x="490" y="271">DOUBLE-HEIGHT VOID</text><text x="640" y="271">PRIVATE SUITE</text><text x="827" y="271">FAMILY LOUNGE</text><text x="947" y="271">TERRACE</text><text x="500" y="392">GREAT ROOM · 5.8 m CLEAR</text><text x="790" y="392">COURTYARD EDGE</text>
          </g>
          <g fill="#C6A76A" fontFamily="monospace" fontSize="9"><text x="1000" y="187">ROOF +18.00</text><text x="1000" y="300">LEVEL +6.00</text><text x="1000" y="416">GROUND ±0.00</text></g>
          {/* Technical callout leaders and targets */}
          <g fill="none" stroke="#C6A76A" strokeWidth="1.2"><path d="M490 251 460 170h-32M730 231l70-62h48M565 430l-55 38h-54"/><circle cx="490" cy="251" r="4" fill="#C6A76A"/><circle cx="730" cy="231" r="4" fill="#C6A76A"/><circle cx="565" cy="430" r="4" fill="#C6A76A"/></g>
          {view === "axis" && <g>
            <circle cx="1060" cy="104" r="28" fill="none" stroke="#C6A76A" strokeOpacity=".65"/><path d="M1060 62v30m0 24v30m-42-42h30m24 0h30m-72-30 22 22m36 36 22 22m0-80-22 22m-36 36-22 22" stroke="#C6A76A" strokeOpacity=".6"/><text x="1060" y="166" textAnchor="middle" fill="#C6A76A" fontFamily="monospace" fontSize="9">SOLAR PATH</text>
            <path d="M190 332C370 275 520 287 670 320s250 28 390-48" fill="none" stroke="#C6A76A" strokeWidth="2" strokeDasharray="8 7" markerEnd="url(#arrow-gold)"/><path d="M190 355C355 310 520 315 680 345" fill="none" stroke="#87B8C0" strokeWidth="2" strokeDasharray="7 6" markerEnd="url(#arrow-gold)"/><text x="195" y="300" fill="#C6A76A" fontFamily="monospace" fontSize="10">SOUTH-WEST SUN</text><text x="740" y="367" fill="#87B8C0" fontFamily="monospace" fontSize="10">PREVAILING MONSOON BREEZE</text>
          </g>}
          <g transform="translate(1060 485)" stroke="#C6A76A" fill="none"><circle r="24"/><path d="M0-18 5-3 0 0-5-3z" fill="#C6A76A"/><path d="M0 18V3"/><text x="0" y="42" textAnchor="middle" fill="#C6A76A" stroke="none" fontFamily="monospace" fontSize="10">N</text></g>
          <rect x="26" y="24" width="1148" height="542" rx="6" fill="none" stroke="#C6A76A" strokeOpacity=".23" />
        </svg>
        <div className="relative z-10 mt-4 flex flex-wrap gap-2" aria-label="Architectural performance callouts">
          <Callout icon={<ArrowUpRight className="h-3 w-3" />} label="18-Ft Double Height Void" />
          <Callout icon={<ArrowDownRight className="h-3 w-3" />} label="Acoustic Glazing 42dB" />
          <Callout icon={<Wind className="h-3 w-3" />} label="Thermal Mass Basalt Slab" />
        </div>
        <div className="relative z-10 mt-3 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/40">
          {view === "section" ? <Compass className="h-3.5 w-3.5 text-[#C6A76A]" /> : <Sun className="h-3.5 w-3.5 text-[#C6A76A]" />}
          {view === "section" ? "Spatial elevations · datum ±0.00" : "Solar orientation and prevailing wind corridors"}
        </div>
      </div>
    </section>
  );
}

function Callout({ icon, label }: { icon: ReactNode; label: string }) {
  return <span className="inline-flex items-center gap-2 rounded-full border border-[#C6A76A]/25 bg-[#141414]/50 px-3 py-2 font-mono text-[9px] uppercase tracking-[.08em] text-[#E1CC9B]"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C6A76A] opacity-70"/><span className="relative inline-flex h-2 w-2 rounded-full bg-[#C6A76A]"/></span>{icon}{label}</span>;
}
