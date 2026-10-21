"use client";

import { FileText, MessageCircle } from "lucide-react";
import { Property } from "@/types/property";
import { useApp } from "@/context/AppContext";

export function PropertyInquiryDesk({ property }: { property: Property }) {
  const { openEnquiryModal } = useApp();
  const message = `Hello GARA Advisory. I am requesting confidential information regarding ${property.title} (Ref:${property.id}).`;

  return (
    <aside className="rounded-2xl border border-[#303030] bg-[#141414] p-5 shadow-xl sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-[9px] uppercase tracking-[.2em] text-[#C6A76A]">Private Advisory</p>
          <h2 className="mt-1 font-serif text-xl text-[#F4F0E8]">Partner Desk</h2>
        </div>
        <span className="rounded-full border border-[#C6A76A]/30 bg-[#C6A76A]/[0.08] px-2.5 py-1 text-[9px] uppercase tracking-[.12em] text-[#E1CC9B]">
          Direct Partner Desk
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2 text-[11px] text-white/50">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Confidential enquiry · {property.location.state}
      </div>

      <div className="space-y-2.5">
        <a
          href={`https://wa.me/919820000000?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#C6A76A]/35 bg-[#C6A76A]/[0.08] px-4 py-3 text-[10px] uppercase tracking-[.14em] text-[#E1CC9B] transition-colors hover:border-[#C6A76A]/70 hover:bg-[#C6A76A]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A76A]"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp the partner
        </a>
        <p className="text-center text-[10px] text-white/40">A direct line for this residence.</p>
        <button
          type="button"
          onClick={() => openEnquiryModal(property)}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#C6A76A] px-4 py-3 text-[10px] font-medium uppercase tracking-[.14em] text-[#090909] transition-colors hover:bg-[#E1CC9B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A76A]"
        >
          <FileText aria-hidden="true" className="h-4 w-4" /> Request Spatial Dossier
        </button>
      </div>
    </aside>
  );
}
