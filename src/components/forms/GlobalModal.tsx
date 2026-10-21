"use client";

import React, { useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { EnquiryForm } from "./EnquiryForm";
import { ScheduleVisitModal } from "./ScheduleVisitModal";
import { X } from "lucide-react";

export function GlobalModal() {
  const { modal, closeModal } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modal.isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modal.isOpen, closeModal]);

  if (!modal.isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-obsidian/70 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0"
        onClick={closeModal}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-[#121212]/95 border border-graphite-border shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-graphite-border/80 bg-obsidian">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block">
              GARA Private Advisory
            </span>
            <h3 className="text-xl font-serif text-ivory font-light">
              {modal.type === "visit"
                ? "Schedule Private Inspection"
                : modal.type === "partnership"
                ? "Developer Representation Protocol"
                : "Bespoke Acquisition Enquiry"}
            </h3>
          </div>
          <button
            onClick={closeModal}
            className="p-2 text-ivory-muted hover:text-gold transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto">
          {modal.type === "visit" ? (
            <ScheduleVisitModal property={modal.property} onSuccess={closeModal} />
          ) : (
            <EnquiryForm property={modal.property} onSuccess={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
}

export default GlobalModal;
