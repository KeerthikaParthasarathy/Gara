"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ALLIANCES = [
  {
    name: "Oberoi Realty",
    monogram: "OR",
    detail: "Tier-1 Structural Design",
  },
  {
    name: "Sovereign Heritage",
    monogram: "SH",
    detail: "Cadastral Verification",
  },
  {
    name: "Vayu Studio",
    monogram: "VS",
    detail: "Chartered Architectural Practice",
  },
  {
    name: "Aurelia Structural Lab",
    monogram: "AS",
    detail: "Coastal Engineering & Materials",
  },
];

const badgeContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export function DeveloperSection() {
  return (
    <section
      id="developments"
      className="relative overflow-hidden border-y border-graphite-border/70 py-24 text-ivory md:py-36"
    >
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
        <motion.div
          variants={badgeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7 lg:col-start-1 lg:row-start-1"
        >
          {ALLIANCES.map((alliance, index) => {
            return (
              <motion.article
                key={alliance.name}
                variants={badgeVariants}
                whileHover={{ scale: 1.02 }}
                onPointerMove={(event) => {
                  const bounds = event.currentTarget.getBoundingClientRect();
                  event.currentTarget.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
                  event.currentTarget.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
                }}
                onPointerLeave={(event) => {
                  event.currentTarget.style.removeProperty("--pointer-x");
                  event.currentTarget.style.removeProperty("--pointer-y");
                }}
                className="group relative isolate min-h-52 overflow-hidden border border-[#C6A76A]/25 bg-gradient-to-b from-[#181818] to-[#0e0e0e] p-6 transition-[border-color,box-shadow] duration-500 hover:border-[#C6A76A]/60 hover:shadow-[0_0_32px_-12px_rgba(198,167,106,0.35)]"
              >
                <svg aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.06]" viewBox="0 0 64 64" preserveAspectRatio="none">
                  <path d="M0 16 16 0 32 16 16 32 0 16Zm32 0L48 0l16 16-16 16-16-16ZM0 48l16-16 16 16-16 16L0 48Zm32 0 16-16 16 16-16 16-16-16Z" fill="none" stroke="#C6A76A" strokeWidth="0.55" />
                  <path d="M0 0 64 64M64 0 0 64" fill="none" stroke="#C6A76A" strokeWidth="0.35" />
                </svg>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "radial-gradient(360px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(198, 167, 106, 0.16), transparent 68%)" }}
                />
                <span aria-hidden="true" className="absolute right-0 top-0 h-5 w-px bg-gold/40" />
                <span aria-hidden="true" className="absolute right-0 top-0 h-px w-5 bg-gold/40" />
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-5 w-px bg-gold/40" />
                <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-5 bg-gold/40" />
                <span aria-hidden="true" className="absolute left-0 top-0 h-5 w-px bg-gold/60" />
                <span aria-hidden="true" className="absolute left-0 top-0 h-px w-5 bg-gold/60" />
                <span aria-hidden="true" className="absolute bottom-0 right-0 h-5 w-px bg-gold/40" />
                <span aria-hidden="true" className="absolute bottom-0 right-0 h-px w-5 bg-gold/40" />

                <div className="mb-8 flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-stone-600">
                    CADASTRE LEDGER #{String(index + 48).padStart(3, "0")}
                  </span>
                  <div className="relative flex h-10 w-10 items-center justify-center border border-gold/30 bg-black/20 text-gold/90 transition-colors duration-300 group-hover:border-gold/60 group-hover:text-gold">
                    <svg aria-hidden="true" viewBox="0 0 40 40" className="absolute inset-1 h-8 w-8 fill-none stroke-current">
                      <path d="M20 2 38 20 20 38 2 20 20 2Z" strokeWidth="0.65" />
                      <path d="M20 7 33 20 20 33 7 20 20 7Z" strokeWidth="0.45" />
                    </svg>
                    <span className="relative font-serif text-[10px] tracking-tight">{alliance.monogram}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-light tracking-tight text-ivory sm:text-2xl">
                  {alliance.name}
                </h3>
                <p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-stone-500">
                  {alliance.detail}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.25em] text-gold"
          >
            <span className="h-px w-6 bg-gold" />
            Master Developer & Architectural Practice
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl font-light leading-[1.12] tracking-tight text-ivory sm:text-5xl"
          >
            Collaborations of Rare Provenance.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 text-sm font-light leading-relaxed text-ivory-muted/90 sm:text-base"
          >
            GARA works with distinguished developers, architectural ateliers, and technical practices to represent exceptional residences with considered design, verified provenance, and enduring craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.85, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Link
              href="/properties"
              className="group inline-flex items-center gap-2 border-b border-gold/50 pb-1.5 font-sans text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:border-gold hover:text-ivory"
            >
              <span>Explore Properties</span>
              <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/partnerships"
              className="group inline-flex items-center gap-2 border-b border-stone-600 pb-1.5 font-sans text-xs uppercase tracking-[0.18em] text-stone-300 transition-all duration-300 hover:border-gold hover:text-gold"
            >
              <span>View Partnerships</span>
              <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperSection;
