"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { CURATION_PRINCIPLES } from "@/data/properties";
import { Button } from "@/components/ui/Button";
import {
  ShieldCheck,
  Compass,
  Building2,
  Sparkles,
  ArrowRight,
  Check,
  MapPin,
  Eye,
} from "lucide-react";

const PRINCIPLE_ICONS = [Building2, Compass, Sparkles, ShieldCheck];

const REGIONAL_DESKS = [
  {
    city: "Mumbai Salon",
    zone: "Western Coastal Desk",
    status: "Active Desk",
    enclave: "Worli & Malabar Hill",
    coords: "18.9548° N, 72.7985° E",
    description:
      "Commanding sea-facing sky penthouses, sovereign triplexes on Malabar Hill, and private coastal holdings across the harbour.",
    focus: "Sky Mansions & Historic Enclaves",
  },
  {
    city: "New Delhi Atelier",
    zone: "National Capital Zone",
    status: "Active Desk",
    enclave: "Lutyens’ Bungalow Zone",
    coords: "28.5983° N, 77.2241° E",
    description:
      "Curating sovereign heritage acreage along Amrita Shergill Marg, Golf Links, and low-density diplomatic compounds.",
    focus: "Heritage Estates & Sovereign Manors",
  },
  {
    city: "Goa & Konkan",
    zone: "Western Coastal Estates",
    status: "Active Desk",
    enclave: "Nerul, Assagao & Mandwa",
    coords: "15.5126° N, 73.7824° E",
    description:
      "Exclusive oceanfront compounds, private riverfront sanctuaries with deep-draft jetties, and brutalist tropical modernism.",
    focus: "Waterfront Sanctuaries & Coastal Estates",
  },
  {
    city: "Bengaluru Terroir Desk",
    zone: "Southern Garden District",
    status: "Active Desk",
    enclave: "Sadashivnagar",
    coords: "13.0068° N, 77.5813° E",
    description:
      "Biophilic architectural statements and low-density trophy residences nestled within historic garden enclaves.",
    focus: "Biophilic Architecture & Private Grounds",
  },
  {
    city: "Dubai Liaison",
    zone: "Gulf International Desk",
    status: "By Appointment",
    enclave: "Downtown & Palm Jumeirah",
    coords: "25.2048° N, 55.2708° E",
    description:
      "A discreet point of contact for international principals exploring cross-border residences and private acquisition opportunities.",
    focus: "International Principal Liaison",
  },
];

const MATERIAL_STUDIES = [
  {
    name: "Travertine & Roman Stone",
    origin: "Natural Limestone",
    propertyRef: "MOHS HARDNESS GRADE VII",
    note: "Open-pore mineral surfaces selected for tonal depth, thermal mass, and a patina that deepens with time.",
  },
  {
    name: "Obsidian Fluted Steel",
    origin: "Architectural Metalwork",
    propertyRef: "LOW-REFLECTANCE FINISH",
    note: "Precisely profiled dark metal with a quiet tactile rhythm and a durable, light-absorbing surface.",
  },
  {
    name: "Acoustic Triple Glazing",
    origin: "High-Performance Glass",
    propertyRef: "ACOUSTIC DAMPENING 48dB",
    note: "Layered glazing assemblies tuned to soften urban sound while preserving clarity, daylight, and long views.",
  },
  {
    name: "Handcrafted Teak",
    origin: "Responsibly Sourced Timber",
    propertyRef: "NATURAL OIL FINISH",
    note: "Carefully selected timber with visible grain, hand-finished joinery, and a warm response to changing light.",
  },
];

export function AboutEditorialStory() {
  return (
    <div className="min-h-screen bg-transparent text-ivory pt-28 pb-32 overflow-hidden selection:bg-gold selection:text-obsidian">
      <div className="fixed top-20 right-10 w-96 h-96 bg-gold/5 blur-[160px] pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-96 h-96 bg-gold/5 blur-[160px] pointer-events-none" />

      <section id="manifesto" className="max-w-7xl mx-auto px-6 md:px-12 mb-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-gold" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
              The GARA Manifesto · Architectural Real Estate
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-ivory tracking-tight leading-[1.08] mb-8 font-light">
            Architecture as <br />
            <span className="italic font-normal text-gold-soft">enduring</span> legacy.
          </h1>

          <p className="text-base sm:text-xl text-ivory-muted/90 font-sans font-light leading-relaxed max-w-2xl">
            GARA rejects the commoditization of living spaces. We curate residences not as transactional inventory, but as irreplaceable works of craftsmanship, structural dignity, and generational provenance.
          </p>
        </motion.div>

        <div className="mt-14 pt-8 border-t border-graphite-border flex flex-wrap items-center justify-between gap-6 text-xs text-stone-400 font-sans">
          <div className="flex items-center gap-6">
            <span className="text-gold font-serif">MMXXIV</span>
            <span className="w-1 h-1 rounded-full bg-stone-600" />
            <span>Private Real Estate Advisory</span>
            <span className="w-1 h-1 rounded-full bg-stone-600" />
            <span>Goa · Mumbai · Delhi · Bengaluru</span>
          </div>
          <div className="text-[11px] uppercase tracking-widest text-stone-500">
            Confidential Syndicate · Non-Public Dossiers
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            <div className="relative aspect-[4/5] max-h-[720px] overflow-hidden border border-graphite-border bg-charcoal sm:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1800&auto=format&fit=crop"
                alt="Architectural purity, materiality, and light - GARA vision"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent pointer-events-none" />
              <span aria-hidden="true" className="absolute left-0 top-0 h-8 w-px bg-gold/70" />
              <span aria-hidden="true" className="absolute left-0 top-0 h-px w-8 bg-gold/70" />
              <span aria-hidden="true" className="absolute right-0 top-0 h-8 w-px bg-gold/50" />
              <span aria-hidden="true" className="absolute right-0 top-0 h-px w-8 bg-gold/50" />
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-8 w-px bg-gold/50" />
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-8 bg-gold/50" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 h-8 w-px bg-gold/70" />
              <span aria-hidden="true" className="absolute bottom-0 right-0 h-px w-8 bg-gold/70" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold block mb-1">
                    Spatial Principle
                  </span>
                  <p className="font-serif text-lg text-ivory font-light">Volumetric Harmony & Structural Truth</p>
                </div>
                <div className="hidden sm:block text-right text-[11px] font-sans text-stone-400">
                  Ref: Plate 01 · Cast Stone & Light
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -bottom-8 -right-8 w-72 p-6 bg-charcoal/95 backdrop-blur-md border border-graphite-border shadow-2xl">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold block mb-2">
                Curatorial Filter
              </span>
              <p className="text-xs font-serif text-ivory-muted leading-relaxed italic font-light">
                “Every residence in our collection is evaluated through structural honesty, volumetric restraint, and irreplaceable Indian terroir.”
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-5 space-y-6 text-sm text-ivory-muted/90 font-sans font-light leading-relaxed">
            <motion.div initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold font-medium">
              <Eye className="w-3.5 h-3.5" />
              <span>Architectural Lens</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }} className="text-3xl sm:text-4xl font-serif text-ivory tracking-tight leading-tight font-light">
              Architecture as the Primary Language.
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}>
              In a residential market flooded with generic luxury clichés, GARA introduces an architectural filter. We evaluate every potential residence through the lens of structural honesty, passive environmental intelligence, and proportional permanence.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}>
              We collaborate with discerning families, private collectors, and visionary developer practices who understand that true distinction is found in the restraint of a raw concrete cantilever, the cool permanence of hand-chiseled Dholpur stone, or the gentle movement of coastal breeze across an open living pavilion.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.48, ease: [0.16, 1, 0.3, 1] }} className="p-6 bg-charcoal border-l-2 border-l-gold border-y border-r border-graphite-border">
              <p className="font-serif text-sm text-ivory italic leading-relaxed font-light">
                “A home of rare provenance does not simply reflect capital; it articulates an intellectual appreciation for space, craftsmanship, and timeless dignity.”
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <div className="border border-graphite-border/80 bg-[linear-gradient(145deg,rgba(198,167,106,0.035),transparent_35%),#101010] p-6 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-graphite-border/70">
            <div>
              <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block mb-2 font-medium">
                Material Authenticity
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-ivory font-light">
                The Elements of Timeless Construction
              </h3>
            </div>
            <p className="text-xs text-stone-400 font-sans max-w-md font-light leading-relaxed">
              Residences selected by GARA feature authentic structural materials that develop an elegant patina over decades, rather than synthetic surface veneers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {MATERIAL_STUDIES.map((study, idx) => (
              <motion.article key={study.name} whileHover={{ y: -4 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="group relative isolate flex min-h-[340px] flex-col overflow-hidden border border-[#C6A76A]/20 bg-gradient-to-br from-[#161616] to-[#0d0d0d] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-[border-color,box-shadow] duration-500 hover:border-[#C6A76A]/60 hover:shadow-[0_12px_34px_-18px_rgba(198,167,106,0.4)]">
                <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.12]">
                  <filter id={`material-grain-${idx}`}>
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter={`url(#material-grain-${idx})`} />
                </svg>
                <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_90%_0%,rgba(198,167,106,0.12),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="mb-10 flex items-center justify-between">
                <span className="text-xs font-serif text-gold block font-light">0{idx + 1}</span>
                <span className="h-8 w-8 rotate-45 border border-gold/30 transition-colors duration-300 group-hover:border-gold/70" />
                </div>
                <h4 className="text-base font-serif text-ivory font-light">{study.name}</h4>
                <div className="flex items-center gap-2 text-[11px] text-stone-400 font-sans">
                  <span>{study.origin}</span>
                  <span className="text-stone-600">·</span>
                  <span className="text-gold/80">{study.propertyRef}</span>
                </div>
                <p className="mt-auto border-t border-graphite-border/70 pt-4 text-xs text-stone-400 font-sans font-light leading-relaxed">
                  {study.note}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="curation" className="py-28 bg-transparent border-y border-graphite-border mb-36 relative">
        <div id="approach" className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
          <div className="mb-2 lg:col-span-5 lg:self-center">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-3 font-medium">
              Values & Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory tracking-tight font-light mb-4">
              The GARA Curation Protocol
            </h2>
            <p className="text-sm text-stone-400 font-sans font-light leading-relaxed">
              Every residence considered for representation must satisfy four non-negotiable architectural and legal benchmarks before entering our portfolio.
            </p>
            <p className="mt-8 border-l border-gold/50 pl-5 font-serif text-base italic leading-relaxed text-ivory-muted">
              We regard each home as a lasting work of architecture, stewardship, and place.
            </p>
          </div>

          <div id="standards" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-7">
            {CURATION_PRINCIPLES.map((principle, index) => {
              const Icon = PRINCIPLE_ICONS[index] || Building2;
              return (
                <motion.div
                  key={principle.num}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.75, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                  className="group relative flex flex-col justify-between overflow-hidden border border-[#C6A76A]/25 bg-[linear-gradient(145deg,#151515,#090909)] p-7 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_30px_-16px_rgba(198,167,106,0.55)] md:p-8"
                >
                  <span aria-hidden="true" className="absolute right-0 top-0 h-6 w-px bg-gold/50" />
                  <span aria-hidden="true" className="absolute right-0 top-0 h-px w-6 bg-gold/50" />
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-2xl tracking-widest text-gold">{String(index + 1).padStart(2, "0")}</span>
                      <div className="w-10 h-10 border border-graphite-border group-hover:border-gold/40 flex items-center justify-center transition-colors">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                    </div>

                    <h3 className="text-lg font-serif text-ivory group-hover:text-gold transition-colors font-light">
                      {principle.title}
                    </h3>

                    <p className="text-xs text-stone-400 font-sans leading-relaxed font-light">
                      {principle.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-graphite-border/70 flex items-center justify-between text-[10px] uppercase tracking-wider text-gold font-sans">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5" />
                      <span>Strictly Verified</span>
                    </div>
                    <span className="text-stone-600 font-serif">Benchmark 0{index + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-graphite-border/80">
          <div>
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-2 font-medium">
              National Presence
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-ivory tracking-tight font-light">
              Strategic Geographic Desks
            </h2>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold hover:text-gold-soft transition-colors font-sans"
          >
            <span>Connect with Regional Partners</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {REGIONAL_DESKS.map((desk, idx) => (
            <motion.div
              key={desk.city}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -48 : 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col justify-between overflow-hidden border border-[#C6A76A]/20 bg-[linear-gradient(145deg,#161616,#0d0d0d)] p-7 transition-all duration-500 hover:border-gold/60 hover:shadow-[0_0_34px_-16px_rgba(198,167,106,0.55)] md:p-8"
            >
              <span aria-hidden="true" className="absolute right-0 top-0 h-6 w-px bg-gold/50" />
              <span aria-hidden="true" className="absolute right-0 top-0 h-px w-6 bg-gold/50" />
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-6 w-px bg-gold/40" />
              <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-6 bg-gold/40" />
              <div>
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-gold font-sans font-medium">
                    {desk.city}
                  </span>
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-[9px] uppercase tracking-wider text-emerald-300/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                    {desk.status}
                  </span>
                </div>
                <h4 className="text-xl font-serif text-ivory mb-2 font-light">{desk.enclave}</h4>
                <p className="mb-4 flex items-center gap-2 font-mono text-[10px] text-stone-500">
                  <MapPin className="h-3 w-3 text-gold/70" />
                  {desk.coords}
                </p>
                <p className="text-xs text-stone-400 font-sans leading-relaxed font-light">
                  {desk.description}
                </p>
              </div>

              <div className="mt-8 border-t border-graphite-border/70 pt-4">
                <span className="mb-2 inline-flex border border-gold/20 bg-black/20 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-gold/80">{desk.zone}</span>
                <p className="text-[10px] text-stone-300 uppercase tracking-wider font-sans">{desk.focus}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <div className="p-12 md:p-20 bg-charcoal border border-graphite-border max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gold/5 blur-[80px] pointer-events-none" />

          <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block mb-3 font-medium">
            Private Client Engagement
          </span>

          <h3 className="text-3xl sm:text-5xl font-serif text-ivory mb-6 font-light">
            Experience the GARA Standard.
          </h3>

          <p className="text-xs sm:text-sm text-ivory-muted max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Whether seeking confidential acquisition advisory or wishing to submit an architectural masterpiece for private representation, our Senior Managing Directors welcome your dialogue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" href="/properties">
              Explore Available Residences
            </Button>
            <Button variant="outline" size="lg" href="/contact">
              Initiate Private Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
