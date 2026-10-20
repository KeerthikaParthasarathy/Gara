"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useApp } from "@/context/AppContext";
import { ArrowUpRight, Building2, Handshake, Users, Award } from "lucide-react";

export function DeveloperSection() {
  const { openPartnershipModal } = useApp();

  return (
    <section className="py-24 md:py-32 bg-charcoal border-b border-graphite-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-3">
              Institutional & Master Developer Practice
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-ivory tracking-tight leading-[1.15] mb-6">
              Building Relationships Around Exceptional Places.
            </h2>
            <p className="text-sm sm:text-base text-ivory-muted font-sans font-light leading-relaxed mb-8 max-w-2xl">
              GARA partners with visionary developers, architectural studios, and family offices to position, brand, and represent India’s most ambitious residential developments to qualified high-net-worth buyers globally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 mb-10 border-t border-graphite-border/70">
              <div>
                <Building2 className="w-5 h-5 text-gold mb-2.5" />
                <h4 className="text-xs uppercase tracking-wider text-ivory font-medium mb-1">
                  Bespoke Representation
                </h4>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Turnkey marketing and discrete private treaty syndicate placement.
                </p>
              </div>
              <div>
                <Users className="w-5 h-5 text-gold mb-2.5" />
                <h4 className="text-xs uppercase tracking-wider text-ivory font-medium mb-1">
                  Global NRI Outreach
                </h4>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Direct syndication across London, Dubai, Singapore, and New York.
                </p>
              </div>
              <div>
                <Award className="w-5 h-5 text-gold mb-2.5" />
                <h4 className="text-xs uppercase tracking-wider text-ivory font-medium mb-1">
                  Design Consultation
                </h4>
                <p className="text-[11px] text-stone-400 leading-relaxed">
                  Pre-construction spatial feedback and luxury amenity curation.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="gold" size="md" href="/partnerships">
                Discuss a Partnership
              </Button>
              <Button variant="outline" size="md" href="/contact">
                Schedule Developer Advisory
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-obsidian border border-graphite-border p-8 md:p-10 relative">
            <div className="w-1.5 h-12 bg-gold absolute top-0 left-0" />
            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold block mb-2">
              Developer Representation Criteria
            </span>
            <h3 className="text-xl font-serif text-ivory mb-4">
              Curation Threshold for Portfolio Inclusion
            </h3>
            <ul className="space-y-4 text-xs text-ivory-muted/90 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-gold font-serif text-sm">01</span>
                <span>Unencumbered freehold title and comprehensive RERA registration.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-serif text-sm">02</span>
                <span>Collaboration with recognized international or Indian architectural masters.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-serif text-sm">03</span>
                <span>Low-density layout with genuine private grounds or sovereign floorplates.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-serif text-sm">04</span>
                <span>Commitment to non-commoditized, bespoke marketing standards.</span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-graphite-border/70 flex items-center justify-between text-xs">
              <span className="text-stone-400">Ready to present a development?</span>
              <Link href="/partnerships" className="text-gold hover:underline flex items-center gap-1">
                View Protocol <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
