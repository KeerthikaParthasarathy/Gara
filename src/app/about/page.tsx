import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { CURATION_PRINCIPLES } from "@/data/properties";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Compass, Award, Building, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About GARA | The Art of Exceptional Living",
  description:
    "GARA is India's premier ultra-luxury real estate advisory, curating unrepeatable architectural residences with absolute discretion and verified legal title.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-obsidian text-ivory pt-28 pb-32">
      {/* Editorial Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
              The GARA Manifesto
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory tracking-tight leading-[1.1] mb-6">
            The Art of <br />
            <span className="italic font-light text-gold-soft">Exceptional</span> Living.
          </h1>
          <p className="text-base sm:text-lg text-ivory-muted/90 font-sans font-light leading-relaxed">
            GARA was conceived to provide a different perspective on luxury real estate in India. We reject the commoditization of living spaces. Instead, we treat exceptional residences as works of architecture, craftsmanship, and enduring legacy.
          </p>
        </div>
      </section>

      {/* Narrative & Visual Feature */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[16/11] overflow-hidden border border-graphite-border shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
              alt="Architectural purity and light - GARA vision"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
          </div>

          <div className="lg:col-span-6 space-y-6 text-sm text-ivory-muted/90 font-sans font-light leading-relaxed">
            <h2 className="text-2xl sm:text-4xl font-serif text-ivory tracking-tight">
              Architecture as the Primary Language.
            </h2>
            <p>
              In a market crowded with generic luxury clichés, GARA introduces an architectural filter. Every residence in our collection is evaluated through the lens of structural honesty, volumetric harmony, and natural illumination.
            </p>
            <p>
              We collaborate with discerning families, private collectors, and visionary developers who understand that true luxury is found in the restraint of a raw concrete cantilever, the cool permanence of hand-chiseled Dholpur stone, or the gentle movement of coastal breeze across an open living pavilion.
            </p>
            <div className="p-4 bg-charcoal border border-graphite-border text-xs text-stone-300 italic font-serif">
              “A home of rare provenance does not simply reflect wealth; it articulates an intellectual appreciation for space, craftsmanship, and timeless dignity.”
            </div>
          </div>
        </div>
      </section>

      {/* Curation Standards Matrix */}
      <section id="curation" className="py-24 bg-charcoal border-y border-graphite-border mb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-2">
              Our 4 Inviolable Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory tracking-tight">
              The GARA Curation Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CURATION_PRINCIPLES.map((principle) => (
              <div key={principle.num} className="p-6 bg-obsidian border border-graphite-border flex flex-col justify-between">
                <div>
                  <span className="text-xl font-serif text-gold block mb-4">{principle.num}</span>
                  <h3 className="text-base font-serif text-ivory mb-3">{principle.title}</h3>
                  <p className="text-xs text-stone-400 font-sans leading-relaxed">
                    {principle.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-graphite-border/70 flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-gold font-sans">
                  <Check className="w-3.5 h-3.5" />
                  <span>Strictly Enforced</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Foothold & Presence */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-2">
              National Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ivory tracking-tight">
              Strategic Geographic Desks
            </h2>
          </div>
          <Link
            href="/contact"
            className="text-xs uppercase tracking-wider text-gold hover:underline font-sans flex items-center gap-1"
          >
            <span>Connect with Regional Directors</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-charcoal border border-graphite-border">
            <span className="text-xs uppercase tracking-widest text-gold block mb-1">South Mumbai</span>
            <h4 className="text-lg font-serif text-ivory mb-2">One BKC & Worli</h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              Commanding sea-facing sky penthouses, sovereign triplexes on Malabar Hill, and prime commercial estate holdings.
            </p>
          </div>

          <div className="p-6 bg-charcoal border border-graphite-border">
            <span className="text-xs uppercase tracking-widest text-gold block mb-1">Delhi NCR</span>
            <h4 className="text-lg font-serif text-ivory mb-2">Lutyens’ Bungalow Zone</h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              Curating sovereign heritage acreage along Amrita Shergill Marg, Golf Links, and modern farm retreats in Chhatarpur.
            </p>
          </div>

          <div className="p-6 bg-charcoal border border-graphite-border">
            <span className="text-xs uppercase tracking-widest text-gold block mb-1">Goa & Konkan</span>
            <h4 className="text-lg font-serif text-ivory mb-2">Nerul, Assagao & Alibaug</h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              Exclusive oceanfront compounds, private riverfront jetties, and brutalist tropical sanctuaries.
            </p>
          </div>

          <div className="p-6 bg-charcoal border border-graphite-border">
            <span className="text-xs uppercase tracking-widest text-gold block mb-1">Bengaluru</span>
            <h4 className="text-lg font-serif text-ivory mb-2">Sadashivnagar</h4>
            <p className="text-xs text-stone-400 font-sans leading-relaxed">
              Biophilic architectural masterpieces and low-density luxury mansions nestled within old-money garden enclaves.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="p-12 md:p-16 bg-charcoal border border-graphite-border max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-4xl font-serif text-ivory mb-4">
            Experience the GARA Standard
          </h3>
          <p className="text-xs sm:text-sm text-ivory-muted max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Whether seeking confidential acquisition advisory or wishing to submit an architectural masterpiece for private representation, our Senior Partners welcome your dialogue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="md" href="/properties">
              Explore Available Residences
            </Button>
            <Button variant="outline" size="md" href="/contact">
              Initiate Private Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
