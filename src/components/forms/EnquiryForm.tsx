"use client";

import React, { useState } from "react";
import { Property } from "@/types/property";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, Loader2, Shield } from "lucide-react";

interface EnquiryFormProps {
  property?: Property;
  onSuccess?: () => void;
  className?: string;
}

export function EnquiryForm({ property, onSuccess, className }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredContact: "WhatsApp",
    interestType: property ? "Specific Residence Enquiry" : "Private Portfolio Acquisition",
    budgetRange: "₹50 Cr - ₹100 Cr",
    message: property
      ? `I am interested in receiving confidential details and discussing private acquisition terms for ${property.title} in ${property.location.neighborhood}, ${property.location.city}.`
      : "I am looking for an ultra-luxury residence in India and would like to schedule a private advisory consultation.",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquire", {
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
        throw new Error(data.message || "Failed to submit enquiry.");
      }

      setStatus("success");
      if (onSuccess) {
        setTimeout(onSuccess, 3000);
      }
    } catch (err: unknown) {
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "A network error occurred. Please try again or reach our desk directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 bg-charcoal border border-gold/40 text-center animate-fade-in">
        <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4 border border-gold/30">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h4 className="text-xl font-serif text-ivory mb-2">Advisory Request Received</h4>
        <p className="text-xs text-ivory-muted leading-relaxed max-w-md mx-auto mb-6">
          Thank you, <span className="text-ivory font-medium">{formData.fullName}</span>. A Senior Managing Director from GARA’s Private Client Practice will review your dossier and initiate confidential correspondence via {formData.preferredContact}.
        </p>
        <div className="p-3 bg-obsidian border border-graphite-border text-[11px] text-stone-400 flex items-center justify-center gap-2">
          <Shield className="w-3.5 h-3.5 text-gold" />
          <span>Strict Non-Disclosure & Buyer Protection Protocol Active</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {property && (
        <div className="mb-6 p-4 bg-obsidian border border-graphite-border flex items-center gap-3">
          <div className="w-1.5 h-10 bg-gold" />
          <div>
            <p className="text-[10px] uppercase font-sans tracking-[0.15em] text-gold">
              Inquiring Regarding Residence
            </p>
            <p className="text-sm font-serif text-ivory">{property.title}</p>
            <p className="text-[11px] text-stone-400">
              {property.location.neighborhood}, {property.location.city} • Ref: {property.id}
            </p>
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
        <div>
          <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Yashvardhan Singhania"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
              Confidential Email *
            </label>
            <input
              type="email"
              required
              placeholder="name@familyoffice.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
              Contact Number *
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
              Preferred Protocol
            </label>
            <select
              value={formData.preferredContact}
              onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              <option value="WhatsApp">Private WhatsApp Channel</option>
              <option value="Phone Call">Confidential Phone Call</option>
              <option value="Email">Secure Email Correspondence</option>
              <option value="In-Person">In-Person at GARA Regional Office</option>
            </select>
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
              Acquisition Horizon
            </label>
            <select
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
            >
              <option value="₹30 Cr - ₹50 Cr">₹30 Cr - ₹50 Cr ($3.6M - $6M)</option>
              <option value="₹50 Cr - ₹100 Cr">₹50 Cr - ₹100 Cr ($6M - $12M)</option>
              <option value="₹100 Cr - ₹200 Cr">₹100 Cr - ₹200 Cr ($12M - $24M)</option>
              <option value="₹200 Cr+">₹200 Cr+ ($24M+ Sovereign Scale)</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
            Bespoke Requirements / Advisory Notes
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors resize-none leading-relaxed"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[10px] text-stone-500 leading-tight">
          Client data is stored under end-to-end encryption. No third-party brokers.
        </div>
        <Button
          variant="gold"
          size="md"
          type="submit"
          disabled={status === "submitting"}
          className="w-full sm:w-auto min-w-[180px]"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Securing Advisory...
            </span>
          ) : (
            "Transmit Advisory Request"
          )}
        </Button>
      </div>
    </form>
  );
}
