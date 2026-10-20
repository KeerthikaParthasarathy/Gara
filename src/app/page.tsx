import React from "react";
import { Architectural3DHero } from "@/components/home/Architectural3DHero";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { PropertyCategories } from "@/components/home/PropertyCategories";
import { BrandPhilosophy } from "@/components/home/BrandPhilosophy";
import { ArchitecturalSpotlight } from "@/components/home/ArchitecturalSpotlight";
import { DeveloperSection } from "@/components/home/DeveloperSection";
import { FinalEnquirySection } from "@/components/home/FinalEnquirySection";

export default function HomePage() {
  return (
    <>
      {/* 1. Cinematic Architectural 3D Hero */}
      <Architectural3DHero />

      {/* 2. Featured Properties Collection */}
      <FeaturedProperties />

      {/* 3. Property Categories / Archetypes */}
      <PropertyCategories />

      {/* 4. Brand Philosophy & Curation Standards */}
      <BrandPhilosophy />

      {/* 5. Architectural Visual Feature */}
      <ArchitecturalSpotlight />

      {/* 6. Developer Partnerships */}
      <DeveloperSection />

      {/* 7. Final Acquisition Enquiry */}
      <FinalEnquirySection />
    </>
  );
}
