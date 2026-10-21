"use client";

import { useState } from "react";
import { Car, Check, FileCheck, Lock, Monitor, Plane, ShieldCheck } from "lucide-react";
import type { Property } from "@/types/property";
import { useApp } from "@/context/AppContext";

type ViewingMode = "limousine" | "helipad" | "digital";

const VIEWING_MODES: Array<{ id: ViewingMode; label: string; detail: string; Icon: typeof Car }> = [
  { id: "limousine", label: "Chauffeured Limousine", detail: "Ground transfer", Icon: Car },
  { id: "helipad", label: "Private Helipad Transfer", detail: "Air transfer", Icon: Plane },
  { id: "digital", label: "Confidential Digital Walkthrough", detail: "Private remote viewing", Icon: Monitor },
];

export function PrivateViewingDesk({ property }: { property: Property }) {
  const [mode, setMode] = useState<ViewingMode>("limousine");
  const { openVisitModal } = useApp();

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[#C6A76A]/50 bg-[#141414] text-[#F4F0E8] shadow-[0_20px_80px_rgba(0,0,0,.35)]" aria-labelledby="private-viewing-title">
      <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-[#E1CC9B] to-transparent opacity-80" />
      <div className="p-5 sm:p-8 lg:p-10">
        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[.24em] text-[#C6A76A]">Black Card · Private Treaty Desk</p>
            <h2 id="private-viewing-title" className="font-serif text-2xl font-light sm:text-4xl">Arrange a private inspection.</h2>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[.14em] text-white/35">Residence · {property.id.toUpperCase()}</span>
        </div>

        <div className="grid gap-7 lg:grid-cols-[.85fr_1.15fr] lg:gap-10">
          <div className="rounded-xl border border-white/10 bg-[#090909]/70 p-5 sm:p-6">
            <p className="mb-4 text-[9px] uppercase tracking-[.2em] text-white/40">Dedicated Partner Contact</p>
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#C6A76A]/50 bg-[#C6A76A]/10 font-serif text-lg text-[#E1CC9B]">GP</div>
              <div>
                <p className="font-serif text-lg">GARA Private Partner</p>
                <p className="mt-1 text-[10px] text-white/45">Direct contact · {property.location.state}</p>
              </div>
            </div>
            <div className="space-y-2 border-t border-white/10 pt-4">
              <TrustBadge Icon={ShieldCheck} label="Direct Desk" />
              <TrustBadge Icon={Lock} label="Swiss Encryption" />
              <TrustBadge Icon={FileCheck} label="Bilateral NDA" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-[9px] uppercase tracking-[.2em] text-white/45">Select viewing protocol</p>
              <span className="font-mono text-[9px] uppercase tracking-[.12em] text-[#C6A76A]">01 / 03</span>
            </div>
            <div className="grid flex-1 gap-2.5 sm:grid-cols-3" role="radiogroup" aria-label="Private viewing mode">
              {VIEWING_MODES.map(({ id, label, detail, Icon }, index) => {
                const selected = mode === id;
                return (
                  <button key={id} type="button" role="radio" aria-checked={selected} onClick={() => setMode(id)} className={`flex min-h-[104px] flex-col items-start justify-between gap-3 rounded-2xl border px-3 py-3.5 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A76A] ${selected ? "border-[#C6A76A]/70 bg-[#C6A76A]/[0.08]" : "border-white/10 bg-[#090909]/40 hover:border-white/25"}`}>
                    <span className="flex w-full items-center justify-between">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-full border ${selected ? "border-[#C6A76A]/40 text-[#C6A76A]" : "border-white/10 text-white/40"}`}><Icon className="h-4 w-4" aria-hidden="true" /></span>
                      <span className={`flex h-4 w-4 items-center justify-center rounded-full border ${selected ? "border-[#C6A76A] bg-[#C6A76A] text-[#090909]" : "border-white/20 text-transparent"}`}>{selected && <Check className="h-3 w-3" />}</span>
                    </span>
                    <span className="min-w-0"><span className={`block text-[10px] leading-snug ${selected ? "text-[#F4F0E8]" : "text-white/65"}`}>{label}</span><span className="mt-1 block text-[9px] text-white/35">{detail}</span></span>
                    <span className="sr-only">Option {index + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <button type="button" onClick={() => openVisitModal(property)} className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#C6A76A] px-5 py-4 text-[10px] font-semibold uppercase tracking-[.18em] text-[#090909] transition-colors hover:bg-[#E1CC9B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E1CC9B]">
          Authorize Private Inspection <Check className="h-4 w-4" aria-hidden="true" />
        </button>
        <p className="mt-3 text-center font-mono text-[8px] uppercase tracking-[.15em] text-white/30">{property.title} · Private treaty protocol</p>
      </div>
    </section>
  );
}

function TrustBadge({ Icon, label }: { Icon: typeof ShieldCheck; label: string }) {
  return <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[.12em] text-white/60"><Icon aria-hidden="true" className="h-3.5 w-3.5 text-[#C6A76A]" />{label}</div>;
}
