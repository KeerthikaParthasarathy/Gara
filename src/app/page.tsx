import React from "react";
import { Architectural3DHero } from "@/components/home/Architectural3DHero";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { DeveloperSection } from "@/components/home/DeveloperSection";
import { TerritoryMap } from "@/components/home/TerritoryMap";
import { FinalEnquirySection } from "@/components/home/FinalEnquirySection";

export default function HomePage() {
  return (
    <main className="text-ivory overflow-x-hidden">
      <Architectural3DHero />
      <DeveloperSection />
      <FeaturedProperties />
      <TerritoryMap />
      <FinalEnquirySection />
    </main>
  );
}
