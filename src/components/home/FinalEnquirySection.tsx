"use client";

import React from "react";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Lock, PhoneCall, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function FinalEnquirySection() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-gold/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium block mb-3">
              Private Client Representation
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory tracking-tight leading-[1.12] mb-6 font-light">
              Your Next Chapter <br />
              <span className="italic font-normal text-gold-soft">Starts Here.</span>
            </h2>
            <p className="text-sm sm:text-base text-ivory-muted/90 font-sans font-light leading-relaxed mb-8">
              Tell us what you are looking for, and our team can help you explore suitable residences. Whether acquiring a generational legacy estate or seeking discreet private treaty sale representation.
            </p>

            <div className="space-y-4 border-t border-graphite-border/80 pt-6 text-xs text-stone-400 font-sans">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Strict non-disclosure agreements executed prior to private dossiers.</span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="w-4 h-4 text-gold flex-shrink-0" />
                <span>End-to-end legal title verification and escrow facilitation.</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Direct partner access: Mumbai, Delhi, Goa, Bengaluru desks.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 64 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-charcoal border border-graphite-border p-8 md:p-10 shadow-2xl"
          >
            <div className="mb-6 pb-4 border-b border-graphite-border/70 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-serif text-ivory font-light">Confidential Acquisition Advisory</h3>
                <p className="text-[11px] text-stone-400 font-sans mt-0.5">
                  Direct transmission to GARA Senior Managing Directors
                </p>
              </div>
              <span className="text-[10px] uppercase font-sans tracking-widest text-gold border border-gold/30 px-2.5 py-1">
                Encrypted
              </span>
            </div>

            <EnquiryForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FinalEnquirySection;
