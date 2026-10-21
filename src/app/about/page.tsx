import React from "react";
import { Metadata } from "next";
import { AboutEditorialStory } from "@/components/about/AboutEditorialStory";

export const metadata: Metadata = {
  title: "About GARA | The Art of Exceptional Living",
  description:
    "GARA is India's premier ultra-luxury real estate advisory, curating unrepeatable architectural residences with absolute discretion and verified legal title.",
};

export default function AboutPage() {
  return <AboutEditorialStory />;
}
