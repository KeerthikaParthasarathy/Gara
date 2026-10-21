"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Property } from "@/types/property";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  Shield,
  Calendar,
  Clock,
  Car,
  FileText,
  Eye,
  ArrowRight,
} from "lucide-react";

interface EnquiryFormProps {
  property?: Property;
  initialMode?: "viewing" | "portfolio";
  onSuccess?: () => void;
  className?: string;
}

export function EnquiryForm({
  property,
  initialMode = "portfolio",
  onSuccess,
  className,
}: EnquiryFormProps) {
  const [activeTab, setActiveTab] = useState<"viewing" | "portfolio">(
    property ? "viewing" : initialMode
  );

  const [portfolioData, setPortfolioData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredContact: "WhatsApp",
    budgetRange: "₹50 Cr - ₹100 Cr",
    interestType: property ? property.category : "Curated Multi-Estate Portfolio",
    message: property
      ? `I wish to request a confidential dossier and private acquisition terms for ${property.title} in ${property.location.neighborhood}, ${property.location.city}.`
      : "I am seeking representation for an ultra-luxury acquisition in India and wish to review GARA's private off-market portfolio.",
  });

  const [viewingData, setViewingData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "11:00 AM — Morning Architectural Light",
    chauffeurRequired: false,
    specialRequests: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");

  const handlePortfolioSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...portfolioData,
          propertyId: property?.id,
          propertyTitle: property?.title,
          propertySlug: property?.slug,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to transmit portfolio request.");
      }

      setReferenceNumber(data.referenceId || `GARA-ADV-${Date.now().toString(36).toUpperCase()}`);
      setStatus("success");
      if (onSuccess) setTimeout(onSuccess, 4000);
    } catch (err: unknown) {
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Network error. Please try again or reach our desk directly.");
    }
  };

  const handleViewingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/schedule-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...viewingData,
          propertyId: property?.id,
          propertyTitle: property?.title || "Selected Private Estate",
          propertySlug: property?.slug,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to schedule private inspection.");
      }

      setReferenceNumber(data.bookingRef || `GARA-TOUR-${Date.now().toString(36).toUpperCase()}`);
      setStatus("success");
      if (onSuccess) setTimeout(onSuccess, 4000);
    } catch (err: unknown) {
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Could not complete viewing reservation. Please retry.");
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 md:p-12 bg-charcoal border border-gold/40 text-center animate-fade-in relative overflow-hidden">
        <div className="w-14 h-14 rounded-none bg-gold/10 text-gold flex items-center justify-center mx-auto mb-5 border border-gold/40">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-gold block mb-2">
          Confidential Dossier Logged
        </span>
        <h4 className="text-2xl font-serif text-ivory mb-3 font-light">
          {activeTab === "viewing" ? "Private Viewing Reserved" : "Private Portfolio Request Received"}
        </h4>
        <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed max-w-md mx-auto mb-6 font-light">
          {activeTab === "viewing" ? (
            <>
              Your viewing request for{" "}
              <span className="text-ivory font-medium">{property?.title || "selected estate"}</span> on{" "}
              <span className="text-gold font-medium">{viewingData.preferredDate}</span> has been routed to our Senior Managing Director. Security verification credentials will be issued within 4 hours.
            </>
          ) : (
            <>
              Thank you, <span className="text-ivory font-medium">{portfolioData.fullName}</span>. A Senior Managing Director from GARA’s Private Client Practice will initiate confidential correspondence via {portfolioData.preferredContact}.
            </>
          )}
        </p>

        <div className="p-3.5 bg-obsidian border border-graphite-border text-[11px] text-stone-400 flex flex-wrap items-center justify-center gap-4 max-w-lg mx-auto">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-gold" />
            <span>Strict NDA Protocol Active</span>
          </div>
          <span className="text-stone-600">•</span>
          <span className="font-mono text-gold/90">Ref: {referenceNumber}</span>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      {property && (
        <div className="mb-6 p-4 bg-obsidian border border-graphite-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-10 bg-gold" />
            <div>
              <p className="text-[10px] uppercase font-sans tracking-[0.18em] text-gold font-medium">
                Target Residence
              </p>
              <p className="text-sm font-serif text-ivory">{property.title}</p>
              <p className="text-[11px] text-stone-400 font-sans">
                {property.location.neighborhood}, {property.location.city}
              </p>
            </div>
          </div>
          <span className="hidden sm:inline text-[10px] uppercase tracking-wider text-stone-400 border border-graphite-border px-2.5 py-1">
            {property.specs.facing}
          </span>
        </div>
      )}

      {/* Bespoke VIP Interface Mode Switcher */}
      <div className="flex border-b border-graphite-border mb-6">
        <button
          type="button"
          onClick={() => setActiveTab("portfolio")}
          className={`pb-3 px-4 text-xs uppercase tracking-[0.18em] font-sans transition-all duration-300 relative flex items-center gap-2 ${
            activeTab === "portfolio"
              ? "text-gold font-medium"
              : "text-stone-400 hover:text-ivory"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Request Private Portfolio</span>
          {activeTab === "portfolio" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("viewing")}
          className={`pb-3 px-4 text-xs uppercase tracking-[0.18em] font-sans transition-all duration-300 relative flex items-center gap-2 ${
            activeTab === "viewing"
              ? "text-gold font-medium"
              : "text-stone-400 hover:text-ivory"
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Private Viewing Booking</span>
          {activeTab === "viewing" && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" />
          )}
        </button>
      </div>

      {status === "error" && (
        <div className="mb-5 p-3.5 bg-red-950/40 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5">
          <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Tab 1: Request Private Portfolio */}
      {activeTab === "portfolio" && (
        <form onSubmit={handlePortfolioSubmit} className="space-y-4 text-xs font-sans">
          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Yashvardhan Singhania"
              value={portfolioData.fullName}
              onChange={(e) => setPortfolioData({ ...portfolioData, fullName: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
                Confidential Email *
              </label>
              <input
                type="email"
                required
                placeholder="principal@familyoffice.com"
                value={portfolioData.email}
                onChange={(e) => setPortfolioData({ ...portfolioData, email: e.target.value })}
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
                Contact Number (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98200 00000"
                value={portfolioData.phone}
                onChange={(e) => setPortfolioData({ ...portfolioData, phone: e.target.value })}
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
                Preferred Advisory Channel
              </label>
              <select
                value={portfolioData.preferredContact}
                onChange={(e) => setPortfolioData({ ...portfolioData, preferredContact: e.target.value })}
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all cursor-pointer"
              >
                <option value="WhatsApp">Private WhatsApp Channel</option>
                <option value="Phone Call">Confidential Phone Call</option>
                <option value="Email">Secure Email Correspondence</option>
                <option value="In-Person">In-Person at GARA Regional Office</option>
              </select>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
                Acquisition Horizon
              </label>
              <select
                value={portfolioData.budgetRange}
                onChange={(e) => setPortfolioData({ ...portfolioData, budgetRange: e.target.value })}
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all cursor-pointer"
              >
                <option value="₹30 Cr - ₹50 Cr">₹30 Cr - ₹50 Cr ($3.6M - $6M)</option>
                <option value="₹50 Cr - ₹100 Cr">₹50 Cr - ₹100 Cr ($6M - $12M)</option>
                <option value="₹100 Cr - ₹200 Cr">₹100 Cr - ₹200 Cr ($12M - $24M)</option>
                <option value="₹200 Cr+">₹200 Cr+ ($24M+ Sovereign Scale)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
              Bespoke Portfolio Specifications & Location Preference
            </label>
            <textarea
              rows={3}
              value={portfolioData.message}
              onChange={(e) => setPortfolioData({ ...portfolioData, message: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-none leading-relaxed"
            />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[10px] text-stone-500 font-sans">
              All discussions are protected under bilateral non-disclosure agreements.
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto min-w-[220px] bg-gold hover:bg-gold-soft text-obsidian px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Transmitting Dossier...
                </span>
              ) : (
                "Request Private Portfolio"
              )}
            </button>
          </div>
        </form>
      )}

      {/* Tab 2: Private Viewing Booking */}
      {activeTab === "viewing" && (
        <form onSubmit={handleViewingSubmit} className="space-y-4 text-xs font-sans">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
                Principal Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Mahindra"
                value={viewingData.fullName}
                onChange={(e) => setViewingData({ ...viewingData, fullName: e.target.value })}
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
                Contact Phone (WhatsApp) *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98200 00000"
                value={viewingData.phone}
                onChange={(e) => setViewingData({ ...viewingData, phone: e.target.value })}
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
              Confidential Email Address *
            </label>
            <input
              type="email"
              required
              placeholder="office@principal.com"
              value={viewingData.email}
              onChange={(e) => setViewingData({ ...viewingData, email: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                <span>Preferred Inspection Date *</span>
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={viewingData.preferredDate}
                onChange={(e) => setViewingData({ ...viewingData, preferredDate: e.target.value })}
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all cursor-pointer"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gold" />
                <span>Viewing Window</span>
              </label>
              <select
                value={viewingData.preferredTime}
                onChange={(e) => setViewingData({ ...viewingData, preferredTime: e.target.value })}
                className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all cursor-pointer"
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

          <div className="flex items-center gap-3 p-3.5 bg-obsidian border border-graphite-border">
            <input
              type="checkbox"
              id="chauffeur-toggle"
              checked={viewingData.chauffeurRequired}
              onChange={(e) => setViewingData({ ...viewingData, chauffeurRequired: e.target.checked })}
              className="w-4 h-4 accent-[#C6A76A] cursor-pointer"
            />
            <label htmlFor="chauffeur-toggle" className="text-xs text-stone-300 cursor-pointer flex items-center gap-2">
              <Car className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Request GARA Private Chauffeur & Escort Transfer (Airport / Residence / Office)</span>
            </label>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium mb-1.5 block">
              Discretion, Entourage & Special Requirements
            </label>
            <textarea
              rows={2}
              placeholder="Specify security entourage details, helicopter arrival requirements, or specific architectural focus points..."
              value={viewingData.specialRequests}
              onChange={(e) => setViewingData({ ...viewingData, specialRequests: e.target.value })}
              className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-none leading-relaxed"
            />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-[10px] text-stone-500 font-sans">
              Accompanied exclusively by a Senior Managing Director.
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto min-w-[220px] bg-gold hover:bg-gold-soft text-obsidian px-6 py-3.5 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 disabled:opacity-50"
            >
              {status === "submitting" ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Securing Slot...
                </span>
              ) : (
                "Confirm Private Viewing Booking"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default EnquiryForm;
