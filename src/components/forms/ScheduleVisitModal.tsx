"use client";

import React, { useState } from "react";
import { Property } from "@/types/property";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Car } from "lucide-react";

interface ScheduleVisitModalProps {
  property?: Property;
  onSuccess?: () => void;
  className?: string;
}

export function ScheduleVisitModal({ property, onSuccess, className }: ScheduleVisitModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "11:00 AM — Morning Natural Light",
    guestCount: "2 Guests",
    chauffeurRequired: false,
    specialRequests: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/schedule-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          propertyId: property?.id,
          propertyTitle: property?.title,
          propertySlug: property?.slug,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit viewing request.");
      }

      setStatus("success");
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    } catch (err: unknown) {
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Could not schedule viewing. Please retry or contact our desk.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-charcoal border border-gold/40 text-center animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4 border border-gold/30">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-serif text-ivory mb-2">Private Viewing Requested</h4>
        <p className="text-xs text-ivory-muted leading-relaxed max-w-md mx-auto mb-6">
          Your request to tour <span className="text-ivory font-medium">{property?.title || "selected estate"}</span> on <span className="text-gold font-medium">{formData.preferredDate}</span> ({formData.preferredTime}) has been registered. Our private concierge will contact you within 4 hours to verify security clearance and dispatch private entry credentials.
        </p>
        <div className="p-3 bg-obsidian border border-graphite-border text-[11px] text-stone-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-gold" />
          <span>Accompanied Exclusively by a GARA Senior Partner</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {property && (
        <div className="mb-6 p-4 bg-obsidian border border-graphite-border flex items-center justify-between">
          <div>
            <p className="text-[10px] uppercase font-sans tracking-[0.15em] text-gold">
              Private On-Site Architectural Inspection
            </p>
            <p className="text-base font-serif text-ivory">{property.title}</p>
            <p className="text-xs text-stone-400">
              {property.location.neighborhood}, {property.location.city}
            </p>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-xs text-gold border border-gold/30 px-2.5 py-1">
              Verified Title
            </span>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="mb-5 p-3.5 bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4 text-xs font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Anand Mahindra"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
              Contact Phone (WhatsApp) *
            </label>
            <input
              type="tel"
              required
              placeholder="+91 98200 00000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
            Confidential Email Address *
          </label>
          <input
            type="email"
            required
            placeholder="office@principal.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold" /> Preferred Date *
            </label>
            <input
              type="date"
              required
              min={new Date().toISOString().split("T")[0]}
              value={formData.preferredDate}
              onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold" /> Preferred Viewing Window
            </label>
            <select
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              <option value="10:00 AM — Morning Architectural Light">
                10:00 AM — Morning Architectural Light
              </option>
              <option value="02:30 PM — Afternoon Spatial Inspection">
                02:30 PM — Afternoon Spatial Inspection
              </option>
              <option value="05:30 PM — Golden Hour & Sunset Ambiance">
                05:30 PM — Golden Hour & Sunset Ambiance
              </option>
              <option value="08:00 PM — Evening Illumination & Acoustic Profile">
                08:00 PM — Evening Illumination & Acoustic Profile
              </option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-obsidian/70 border border-graphite-border">
          <input
            type="checkbox"
            id="chauffeur"
            checked={formData.chauffeurRequired}
            onChange={(e) => setFormData({ ...formData, chauffeurRequired: e.target.checked })}
            className="w-4 h-4 accent-[#C6A76A] cursor-pointer"
          />
          <label htmlFor="chauffeur" className="text-xs text-ivory-muted cursor-pointer flex items-center gap-2">
            <Car className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Request GARA Private Chauffeur & Armored Escort Transfer (Airport / Hotel / Office)</span>
          </label>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
            Security / Dietary / Non-Disclosure Specifications
          </label>
          <textarea
            rows={2}
            placeholder="Specify any private security entourage, helicopter arrival requirements, or specific architectural focus points..."
            value={formData.specialRequests}
            onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors resize-none leading-relaxed"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-stone-500">
          Due to high discretion, viewings are subject to client identity verification.
        </p>
        <Button
          variant="gold"
          size="md"
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto min-w-[200px]"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Reserving Slot...
            </span>
          ) : (
            "Confirm Private Viewing Request"
          )}
        </Button>
      </div>
    </form>
  );
}
