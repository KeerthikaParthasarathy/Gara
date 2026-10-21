"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Globe,
  Users,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const VERIFIED_DEVELOPMENTS = [
  {
    title: "The Oberoi Sky Penthouse",
    developer: "Oberoi Realty",
    location: "Worli Sea Face, Mumbai",
    type: "Sky Mansion",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
    slug: "the-oberoi-sky-penthouse",
    scale: "11,500 sq.ft · 68th–70th Levels",
  },
  {
    title: "The Vayu Sanctuary",
    developer: "Vayu Architectural Studio",
    location: "Nerul Riverfront, Goa",
    type: "Luxury Villa",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    slug: "the-vayu-sanctuary",
    scale: "14,200 sq.ft · 1.85 Acres Waterfront",
  },
  {
    title: "Amaltas Estate",
    developer: "Sovereign Heritage Practice",
    location: "Amrita Shergill Marg, Delhi",
    type: "Heritage Residence",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    slug: "amaltas-estate",
    scale: "18,000 sq.ft · 2.2 Centennial Acres",
  },
  {
    title: "Aura Mar Vista",
    developer: "Aurelia Coastal Living LLP",
    location: "Mandwa Coastline, Alibaug",
    type: "Coastal Estate",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1400&auto=format&fit=crop",
    slug: "aura-mar-vista",
    scale: "12,000 sq.ft · Private Helipad Grounds",
  },
];

export default function PartnershipsPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    projectType: "Boutique Luxury Villa Development",
    projectLocation: "",
    estimatedGdv: "₹100 Cr – ₹300 Cr",
    stage: "Under Construction (RERA Approved)",
    message: "",
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
          partnershipType: "Developer Agency Representation",
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit partnership application.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      const error = err as Error;
      setErrorMessage(error.message || "Network error. Please contact our institutional desk.");
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-ivory pt-28 pb-32">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
              Institutional & Master Developer Practice
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory tracking-tight leading-[1.1] mb-6 font-light">
            Developer <br />
            <span className="italic font-normal text-gold-soft">Partnerships.</span>
          </h1>
          <p className="text-base sm:text-lg text-ivory-muted/90 font-sans font-light leading-relaxed">
            GARA represents India’s most visionary residential creators. We provide end-to-end global positioning, brand storytelling, and discrete private treaty syndicate marketing for world-class developments.
          </p>
        </motion.div>
      </section>

      <section id="showcase" className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-graphite-border/70">
          <div>
            <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold block mb-1">
              Curated Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-ivory font-light">
              Represented Developments
            </h2>
          </div>
          <Link
            href="/properties"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-wider text-gold hover:text-gold-soft transition-colors font-sans"
          >
            <span>Complete Catalogue</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VERIFIED_DEVELOPMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-charcoal border border-graphite-border hover:border-gold/50 transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-obsidian">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 text-[9px] uppercase tracking-wider text-ivory bg-obsidian/85 px-2 py-0.5 border border-graphite-border">
                  {item.type}
                </span>
              </div>
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-gold block mb-1">
                    {item.developer}
                  </span>
                  <Link href={`/properties/${item.slug}`} className="block group-hover:text-gold transition-colors">
                    <h3 className="font-serif text-base text-ivory line-clamp-1">{item.title}</h3>
                  </Link>
                  <p className="text-[11px] text-stone-400 font-sans mt-1">{item.location}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-graphite-border/70 flex items-center justify-between text-[10px] text-stone-400 font-sans">
                  <span>{item.scale}</span>
                  <Link href={`/properties/${item.slug}`} className="text-gold hover:underline">
                    Dossier
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="dossier" className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-charcoal border border-graphite-border p-8 md:p-10 shadow-2xl">
            <div className="mb-8 pb-4 border-b border-graphite-border/70 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif text-ivory font-light">Project Representation Dossier</h3>
                <p className="text-xs text-stone-400 font-sans mt-0.5">
                  Submit your development for GARA curatorial review
                </p>
              </div>
              <Building2 className="w-5 h-5 text-gold" />
            </div>

            {status === "success" ? (
              <div className="p-8 bg-obsidian border border-gold/40 text-center animate-fade-in">
                <CheckCircle2 className="w-12 h-12 text-gold mx-auto mb-4" />
                <h4 className="text-2xl font-serif text-ivory mb-2">Dossier Registered</h4>
                <p className="text-xs text-stone-300 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <span className="text-ivory font-medium">{formData.fullName}</span> from{" "}
                  <span className="text-gold font-medium">{formData.companyName}</span>. Our Institutional Practice Director will contact your office within 24 hours to execute a mutual NDA and arrange a project briefing.
                </p>
                <div className="p-3 bg-charcoal border border-graphite-border text-[11px] text-stone-400">
                  Institutional Reference: GARA-DEV-{Date.now().toString(36).toUpperCase()}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs font-sans">
                {status === "error" && (
                  <div className="p-3.5 bg-red-950/40 border border-red-500/40 text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                      Managing Director / Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajiv Chandrasekhar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                      Development Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aurelia Living Projects LLP"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="director@developer.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                      Direct Telephone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 22 6123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                      Development Typology
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="Boutique Luxury Villa Development">Boutique Luxury Villa Development</option>
                      <option value="Sky Mansion / High-Rise Spire">Sky Mansion / High-Rise Spire</option>
                      <option value="Private Coastal Gated Enclave">Private Coastal Gated Enclave</option>
                      <option value="Heritage Restoration & Private Estates">Heritage Restoration & Private Estates</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                      Estimated Project GDV
                    </label>
                    <select
                      value={formData.estimatedGdv}
                      onChange={(e) => setFormData({ ...formData, estimatedGdv: e.target.value })}
                      className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="₹50 Cr – ₹100 Cr">₹50 Cr – ₹100 Cr ($6M – $12M)</option>
                      <option value="₹100 Cr – ₹300 Cr">₹100 Cr – ₹300 Cr ($12M – $36M)</option>
                      <option value="₹300 Cr – ₹1,000 Cr+">₹300 Cr – ₹1,000 Cr+ ($36M – $120M+)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Candolim, Goa or Worli, Mumbai"
                      value={formData.projectLocation}
                      onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                      className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                      Current Development Stage
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory focus:outline-none focus:border-gold transition-colors cursor-pointer"
                    >
                      <option value="Under Construction (RERA Approved)">Under Construction (RERA Approved)</option>
                      <option value="Ready for Occupancy / OC Received">Ready for Occupancy / OC Received</option>
                      <option value="Pre-Launch / Architectural Masterplanning">Pre-Launch / Architectural Masterplanning</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1.5">
                    Development Vision & Architectural Team
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on project architects, unit sizes, targeted price realizations, and scope of representation required..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-obsidian border border-graphite-border px-4 py-3 text-ivory placeholder:text-stone-600 focus:outline-none focus:border-gold transition-colors resize-none leading-relaxed"
                  />
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[10px] text-stone-500">
                    All submitted architectural materials remain proprietary under mutual NDA.
                  </div>
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
                        Transmitting Dossier...
                      </span>
                    ) : (
                      "Submit Project for Review"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>

          <div id="institutional" className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-charcoal border border-graphite-border">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold block mb-2">
                The GARA Advantage
              </span>
              <h3 className="text-xl font-serif text-ivory mb-6 font-light">
                Why Master Developers Partner with GARA
              </h3>

              <div className="space-y-6 text-xs font-sans">
                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-ivory font-medium uppercase tracking-wider mb-1">
                      International NRI & Family Office Syndication
                    </h4>
                    <p className="text-stone-400 leading-relaxed font-light">
                      Direct access to accredited buyers across Dubai, Singapore, Silicon Valley, and London seeking verified prime real estate in India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-ivory font-medium uppercase tracking-wider mb-1">
                      Bespoke Editorial Positioning
                    </h4>
                    <p className="text-stone-400 leading-relaxed font-light">
                      We do not list developments on mass aggregation portals. Every project is presented through cinematic 3D visuals, architectural essays, and private client evenings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-ivory font-medium uppercase tracking-wider mb-1">
                      Targeted Velocity & Price Preservation
                    </h4>
                    <p className="text-stone-400 leading-relaxed font-light">
                      By positioning residences as rare collector assets rather than bulk inventory, we preserve maximum price realization per square foot.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div id="criteria" className="p-8 bg-charcoal border border-graphite-border">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold block mb-2">
                Portfolio Threshold
              </span>
              <h3 className="text-base font-serif text-ivory mb-4">
                Curatorial Acceptance Criteria
              </h3>
              <ul className="space-y-3 text-xs text-stone-400 font-sans">
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-serif text-xs">01</span>
                  <span>Unencumbered freehold legal title with clear RERA certification.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-serif text-xs">02</span>
                  <span>Architectural design lead by recognized national or international masters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-gold font-serif text-xs">03</span>
                  <span>Low-density spatial layout with private grounds or sovereign floorplates.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-obsidian border border-graphite-border text-xs text-stone-400 space-y-2">
              <p className="text-gold uppercase tracking-wider text-[11px] font-medium">Direct Institutional Inquiries:</p>
              <p>partnerships@gara-luxury.com</p>
              <p>Institutional Practice Desk: +91 22 6988 5000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
