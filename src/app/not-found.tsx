import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Compass, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-obsidian text-ivory flex items-center justify-center px-6">
      <div className="max-w-md text-center py-20">
        <div className="w-16 h-16 rounded-full bg-charcoal border border-graphite-border flex items-center justify-center mx-auto mb-6 text-gold">
          <Compass className="w-8 h-8" />
        </div>
        <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block mb-2">
          Sanctuary Not Found
        </span>
        <h1 className="text-4xl font-serif text-ivory tracking-tight mb-4">
          Uncharted Coordinate
        </h1>
        <p className="text-xs text-stone-400 font-sans leading-relaxed mb-8">
          The residence or page you are seeking does not exist or has been withdrawn from our private registry under confidential treaty.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="gold" size="md" href="/properties">
            Explore Portfolio
          </Button>
          <Button variant="outline" size="md" href="/">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
