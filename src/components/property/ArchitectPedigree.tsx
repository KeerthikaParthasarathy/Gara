"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Award, Building2, Compass } from "lucide-react";

export interface ArchitectProfile {
  firm: string;
  role: string;
  leadArchitect: string;
  headquarters: string;
  philosophy: string;
  notableWorks: string[];
  accolades: string;
}

interface ArchitectPedigreeProps {
  architects?: ArchitectProfile[];
  propertyTitle?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const DEFAULT_PEDIGREE_IMAGE = "/images/property/architectural-atelier-editorial.jpg";

const DEFAULT_PEDIGREE: ArchitectProfile[] = [
  {
    firm: "Studio Lotus & Morphogenesis",
    role: "Master Planning & Biophilic Architecture",
    leadArchitect: "Manit Rastogi / Ambrish Arora",
    headquarters: "New Delhi & London",
    philosophy: "Passive climatic responsiveness through regional masonry and sculpted volumetric voids.",
    notableWorks: ["Baradari at City Palace", "The Roseate Ganges", "Krushi Bhawan"],
    accolades: "World Architecture Festival WAF Winner · Aga Khan Award Nominee",
  },
  {
    firm: "Khosla Associates",
    role: "Principal Tropical Modernist Design",
    leadArchitect: "Sandeep Khosla",
    headquarters: "Bengaluru, India",
    philosophy: "Purity of board-formed concrete juxtaposed against artisanal timber brise-soleil and water pavilions.",
    notableWorks: ["Cliff House Kerala", "Assagao Pavilion Villa", "Retreat in the Sahyadris"],
    accolades: "Architectural Digest AD100 Hall of Fame",
  },
  {
    firm: "WOHA Architects",
    role: "High-Rise Environmental Engineering",
    leadArchitect: "Wong Mun Summ / Richard Hassell",
    headquarters: "Singapore",
    philosophy: "Breathing architecture integrating vertical vegetation systems and wind-sculpted aerodynamic skins.",
    notableWorks: ["Parkroyal on Pickering", "Oasia Hotel Downtown", "Sky Green Spire"],
    accolades: "RIBA International Award · Venice Biennale Exhibitor",
  },
];

export function ArchitectPedigree({ architects = DEFAULT_PEDIGREE, propertyTitle = "This Residence", imageUrl = DEFAULT_PEDIGREE_IMAGE, imageAlt = "Architectural atelier and provenance" }: ArchitectPedigreeProps) {
  return (
    <section className="border-y border-[#C6A76A]/20 bg-transparent py-12 text-[#F4F0E8] md:py-20 xl:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28">
        <div className="mb-10 grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div><p className="mb-3 flex items-center gap-2 text-[9px] uppercase tracking-[.22em] text-[#C6A76A]"><Compass className="h-3.5 w-3.5" /> Architectural provenance</p><h2 className="font-serif text-3xl font-light leading-tight sm:text-5xl">Master <span className="italic text-[#E1CC9B]">pedigree.</span></h2></div>
          <p className="max-w-2xl text-sm font-light leading-relaxed text-white/80">A glimpse into the studio disciplines behind enduring architecture. {propertyTitle} is framed here through the craft of drawing, model making, and material study.</p>
        </div>

        <div className="rounded-2xl border border-[#C6A76A]/25 bg-[#151515]/80 p-6 shadow-[0_0_25px_rgba(198,167,106,0.08)] backdrop-blur-md lg:p-10">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="relative min-h-[460px] w-full overflow-hidden rounded-xl border border-white/5 bg-[#090909] lg:col-span-5">
              <Image src={imageUrl || DEFAULT_PEDIGREE_IMAGE} alt={imageAlt} fill priority={false} quality={80} sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-center brightness-[1.02] contrast-[1.05]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090909]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6"><p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C6A76A]">Architectural Atelier</p><h4 className="mt-1 text-sm font-medium uppercase tracking-wider text-white">{propertyTitle || "Amaltas Estate"}</h4></div>
            </div>

            <div className="flex flex-col justify-between space-y-6 divide-y divide-white/10 lg:col-span-7">
            {architects.map((architect, index) => <motion.article key={architect.firm} initial={{ y: 18, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className="border-b border-white/15 p-5 last:border-b-0 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-3"><div><p className="mb-2 text-[8px] uppercase tracking-[.18em] text-[#C6A76A]">{architect.role}</p><h3 className="font-serif text-xl font-light text-[#FFFFFF] sm:text-2xl">{architect.firm}</h3></div><span className="font-mono text-[8px] uppercase tracking-[.15em] text-white/65">Atelier 0{index + 1}</span></div>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] text-white/75"><span>{architect.leadArchitect}</span><span>{architect.headquarters}</span></div>
              <p className="mt-4 line-clamp-2 max-w-2xl text-xs font-light leading-relaxed text-[#FFFFFF]/85">{architect.philosophy}</p>
              <div className="mt-4 flex items-start gap-2 border-t border-white/15 pt-4 text-[9px] leading-relaxed text-[#E6D5B8]"><Award className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C6A76A]" />{architect.accolades}</div>
            </motion.article>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArchitectPedigree;
