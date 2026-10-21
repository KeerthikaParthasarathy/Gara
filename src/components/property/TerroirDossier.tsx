"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { BadgeCheck, Compass, FileCheck2, MapPin, Ruler } from "lucide-react";

interface TerroirDossierProps {
  propertyTitle: string;
  propertyReference: string;
  landArea: string;
  coordinates: string;
  terroirType: string;
  reraNumber: string;
}

const hudCards = [
  { key: "coordinates", label: "Land coordinates", Icon: MapPin },
  { key: "terroirType", label: "Regional terroir", Icon: Compass },
  { key: "propertyReference", label: "Property reference", Icon: FileCheck2 },
  { key: "reraNumber", label: "RERA registration", Icon: BadgeCheck },
] as const;

export function TerroirDossier({ propertyTitle, propertyReference, landArea, coordinates, terroirType, reraNumber }: TerroirDossierProps) {
  const values = { coordinates, terroirType, propertyReference, reraNumber };

  return (
    <section className="relative overflow-hidden border-y border-[#C6A76A]/20 bg-transparent py-12 text-[#F4F0E8] md:py-20 xl:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(ellipse at 18% 55%, rgba(198,167,106,0.22), transparent 50%), linear-gradient(rgba(198,167,106,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(198,167,106,0.22) 1px, transparent 1px)", backgroundSize: "auto, 72px 72px, 72px 72px", maskImage: "linear-gradient(to right, black, transparent 80%)" }} />
      <div aria-hidden="true" className="pointer-events-none absolute left-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#C6A76A]/[0.10] blur-[100px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:px-10 lg:px-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-20 xl:px-20 2xl:px-28">
        <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative isolate flex min-h-[620px] flex-col items-center justify-center overflow-hidden rounded-xl border border-[#C6A76A]/35 bg-[#090909]/70 p-6 text-center shadow-[0_0_35px_rgba(198,167,106,0.12)] sm:p-8 lg:items-start lg:text-left">
          <Image src="/images/property/cadastral-survey-topography.jpg" alt="" fill quality={80} sizes="(max-width: 1024px) 100vw, 40vw" className="-z-20 object-cover brightness-125 contrast-110 opacity-75" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#121212]/65 via-[#C6A76A]/[0.08] to-[#121212]/80" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-5 -z-10 border border-[#C6A76A]/25"><span className="absolute left-1/2 top-0 h-3 w-px bg-[#E6D5B8]/90" /><span className="absolute bottom-0 left-1/2 h-3 w-px bg-[#E6D5B8]/90" /><span className="absolute left-0 top-1/2 h-px w-3 bg-[#E6D5B8]/90" /><span className="absolute right-0 top-1/2 h-px w-3 bg-[#E6D5B8]/90" /></div>
          <div className="relative mb-8 flex h-52 w-52 items-center justify-center rounded-full border border-[#C6A76A]/50 bg-[radial-gradient(circle,rgba(198,167,106,0.22),rgba(9,9,9,0.28)_65%)] shadow-[0_0_80px_rgba(198,167,106,0.18)]">
            <div className="absolute inset-3 rounded-full border border-dashed border-[#C6A76A]/25" />
            <div className="absolute inset-6 rounded-full border border-[#C6A76A]/15" />
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#C6A76A]/60 bg-[#090909]/70 font-serif text-4xl font-light tracking-[.15em] text-[#E6D5B8]">G</div>
            <span className="absolute -bottom-2 border border-[#C6A76A]/55 bg-[#090909]/95 px-3 py-1.5 font-mono text-[8px] uppercase tracking-[.2em] text-[#E6D5B8]">Site dossier</span>
          </div>
          <p className="relative mb-3 text-[9px] uppercase tracking-[.24em] text-[#E6D5B8]">Cadastral terroir · site provenance</p>
          <h2 className="relative max-w-lg font-serif text-4xl font-light leading-tight text-white sm:text-5xl">A right to <span className="italic text-[#E6D5B8]">rare land.</span></h2>
          <p className="relative mt-4 max-w-md text-sm font-light leading-relaxed text-white/90">Site information for {propertyTitle}, drawn from the current estate record.</p>
          <div className="relative mt-6 flex flex-wrap items-center gap-3 border-t border-[#C6A76A]/35 pt-4 font-mono text-[8px] uppercase tracking-[.15em] text-[#E6D5B8]"><span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C6A76A]/55 bg-[#090909]/65"><BadgeCheck className="h-4 w-4 text-[#C6A76A]" /></span><span>{reraNumber === "Not listed" ? "Registration record not listed" : `RERA record · ${reraNumber}`}</span><span className="ml-auto text-white/65">Illustrative terrain plate</span></div>
        </motion.div>

        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 border-b border-[#C6A76A]/20 pb-4">
            <p className="text-[9px] uppercase tracking-[.2em] text-white/75">Cadastral reference</p>
            <p className="font-mono text-[10px] tracking-[.12em] text-[#E6D5B8]">{propertyReference.toUpperCase()}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {hudCards.map(({ key, label, Icon }, index) => (
              <motion.article key={key} initial={{ y: 22, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className="min-h-36 border border-[#C6A76A]/40 bg-[#161616]/75 p-5 shadow-[0_0_25px_rgba(198,167,106,0.12)] backdrop-blur-md">
                <div className="mb-5 flex items-center justify-between"><span className="flex h-9 w-9 items-center justify-center border border-[#C6A76A]/40 bg-[#090909]/55 text-[#C6A76A]"><Icon className="h-4 w-4" /></span><span className="font-mono text-[8px] tracking-[.14em] text-white/60">0{index + 1} / 04</span></div>
                <p className="mb-1 text-[8px] uppercase tracking-[.17em] text-white/70">{label}</p>
                <p className="font-serif text-base font-light leading-snug text-[#FFFFFF]">{values[key]}</p>
              </motion.article>
            ))}
            <article className="flex items-center gap-4 border border-[#C6A76A]/40 bg-[#161616]/75 p-5 shadow-[0_0_25px_rgba(198,167,106,0.12)] backdrop-blur-md sm:col-span-2">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#C6A76A]/40 text-[#C6A76A]"><Ruler className="h-4 w-4" /></span>
              <div><p className="mb-1 text-[8px] uppercase tracking-[.17em] text-white/70">Recorded land area</p><p className="font-serif text-xl font-light text-[#E6D5B8]">{landArea}</p></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TerroirDossier;
