"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FloorPlan } from "@/types/property";
import { Layers, ZoomIn, Download, Compass, Check } from "lucide-react";

interface FloorPlanViewerProps {
  floorPlans: FloorPlan[];
  propertyTitle: string;
}

export function FloorPlanViewer({ floorPlans, propertyTitle }: FloorPlanViewerProps) {
  const [activePlanIndex, setActivePlanIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!floorPlans || floorPlans.length === 0) {
    return (
      <div className="p-8 border border-graphite-border bg-charcoal text-center text-xs text-stone-500">
        Detailed architectural CAD drawings available upon verified client representation.
      </div>
    );
  }

  const activePlan = floorPlans[activePlanIndex] || floorPlans[0];

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="border border-graphite-border bg-charcoal p-6 lg:p-8">
      {/* Header and Level Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-graphite-border/70">
        <div>
          <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-gold block mb-1">
            Architectural Schematics
          </span>
          <h3 className="text-xl font-serif text-ivory">Floor Plate & Volumetric Distribution</h3>
        </div>

        {/* Level Switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {floorPlans.map((plan, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActivePlanIndex(idx);
                setIsZoomed(false);
              }}
              className={`px-3.5 py-1.5 text-xs font-sans uppercase tracking-wider transition-all whitespace-nowrap border ${
                activePlanIndex === idx
                  ? "bg-graphite text-gold border-gold"
                  : "bg-obsidian border-graphite-border text-stone-400 hover:text-ivory"
              }`}
            >
              {plan.level.split("—")[0].trim()}
            </button>
          ))}
        </div>
      </div>

      {/* Plan Details Strip */}
      <div className="py-4 border-b border-graphite-border/60 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-ivory font-serif text-base">{activePlan.title}</span>
          <span className="text-stone-400 ml-3">({activePlan.dimensions})</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="flex items-center gap-1.5 text-stone-400 hover:text-gold transition-colors text-xs"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>{isZoomed ? "Reset Scale" : "Zoom Plate"}</span>
          </button>
          <span className="text-stone-600">|</span>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 text-stone-400 hover:text-gold transition-colors text-xs"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-gold" />
                <span className="text-gold">Plate Prepared</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Export Schematic PDF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Schematic Drawing Area */}
      <div className="relative my-6 min-h-[380px] sm:min-h-[460px] bg-obsidian border border-graphite-border overflow-hidden flex items-center justify-center p-6">
        {/* Subtle Architectural Blueprint Grid */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(198, 167, 106, 0.4) 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Blueprint Floor Plan Graphic with High-Contrast Monochromatic Lines */}
        <div
          className={`relative w-full max-w-2xl aspect-[16/10] transition-transform duration-500 cursor-zoom-in ${
            isZoomed ? "scale-125" : "scale-100"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {/* Stylized Architectural Blueprint Diagram */}
          <div className="w-full h-full border-2 border-gold/40 bg-charcoal/90 p-6 flex flex-col justify-between relative shadow-2xl">
            {/* Compass rose */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] text-gold tracking-widest font-mono">
              <Compass className="w-4 h-4 text-gold" />
              <span>N</span>
            </div>

            {/* Scale indicator */}
            <div className="absolute bottom-4 left-4 text-[10px] text-stone-500 font-mono">
              SCALE: 1:100 • DIMENSIONS VERIFIED BY GARA SPATIAL PRACTICE
            </div>

            {/* Room Distribution Grid representation */}
            <div className="grid grid-cols-3 gap-3 h-4/5 pt-6 pb-2">
              <div className="border border-gold/20 bg-graphite/40 p-3 flex flex-col justify-between">
                <span className="text-[10px] text-gold font-mono uppercase">Zone A</span>
                <span className="text-xs font-serif text-ivory">Grand Reception & Foyer</span>
                <span className="text-[9px] text-stone-400 font-mono">7.2m Ceiling</span>
              </div>
              <div className="border border-gold/40 bg-graphite/70 p-3 flex flex-col justify-between col-span-2">
                <div className="flex justify-between">
                  <span className="text-[10px] text-gold font-mono uppercase">Zone B</span>
                  <span className="text-[9px] text-gold font-mono">Cantilever Horizon</span>
                </div>
                <span className="text-sm font-serif text-ivory">Master Sanctuary & Sunset Deck</span>
                <span className="text-[9px] text-stone-400 font-mono">Bookmatched Travertine • Reynaers Glazing</span>
              </div>
              <div className="border border-gold/20 bg-graphite/40 p-3 flex flex-col justify-between col-span-2">
                <span className="text-[10px] text-gold font-mono uppercase">Zone C</span>
                <span className="text-xs font-serif text-ivory">Culinary Suite & Chef’s Scullery</span>
                <span className="text-[9px] text-stone-400 font-mono">Miele Commercial Grade</span>
              </div>
              <div className="border border-gold/20 bg-graphite/40 p-3 flex flex-col justify-between">
                <span className="text-[10px] text-gold font-mono uppercase">Zone D</span>
                <span className="text-xs font-serif text-ivory">Water Atrium & Lap Pool</span>
                <span className="text-[9px] text-stone-400 font-mono">Basalt Stone Plinth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Narrative */}
      <p className="text-xs text-ivory-muted/90 font-sans leading-relaxed pt-2">
        <span className="text-gold font-medium">Curatorial Spatial Analysis: </span>
        {activePlan.description}
      </p>
    </div>
  );
}
