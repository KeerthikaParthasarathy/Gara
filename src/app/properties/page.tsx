import React, { Suspense } from "react";
import { PropertiesCatalogue } from "@/components/property/PropertiesCatalogue";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exceptional Properties & Residences | GARA Collection",
  description:
    "Explore GARA's considered portfolio of luxury villas in Goa, Worli sky penthouses in Mumbai, Lutyens' Delhi estates, and oceanfront Alibaug sanctuaries.",
};

export default function PropertiesPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-obsidian flex items-center justify-center text-gold text-xs uppercase tracking-[0.2em]">
          Loading Curated Portfolio...
        </div>
      }
    >
      <PropertiesCatalogue />
    </Suspense>
  );
}
