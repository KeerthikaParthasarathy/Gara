import React from "react";
import { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Phone, Mail, Clock, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Private Advisory | GARA",
  description:
    "Connect with GARA's Private Client Practice across our Mumbai, New Delhi, Goa, and Bengaluru advisory desks.",
};

const OFFICES = [
  {
    city: "South Mumbai",
    address: "One BKC, 14th Floor, G Block, Bandra Kurla Complex",
    region: "Mumbai 400051, Maharashtra",
    phone: "+91 22 6988 5000",
    email: "mumbai@gara-luxury.com",
    focus: "Worli Penthouses, Malabar Hill & Alibaug Estates",
  },
  {
    city: "New Delhi & NCR",
    address: "Amrita Shergill Marg & Golf Links Enclave",
    region: "New Delhi 110003, Delhi NCR",
    phone: "+91 11 4988 5000",
    email: "delhi@gara-luxury.com",
    focus: "Lutyens’ Bungalow Zone & Diplomatic Acreage",
  },
  {
    city: "Goa & West Coast",
    address: "Heritage Villa Quarter, Badem Road, Assagao",
    region: "North Goa 403507, Goa",
    phone: "+91 832 2988 500",
    email: "goa@gara-luxury.com",
    focus: "Nerul Waterfront, Candolim & Coastal Sanctuaries",
  },
  {
    city: "Bengaluru",
    address: "Sadashivnagar & 100 Feet Road, Indiranagar",
    region: "Bengaluru 560080, Karnataka",
    phone: "+91 80 4988 5000",
    email: "bengaluru@gara-luxury.com",
    focus: "Biophilic Residences & Trophy Villa Estates",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent text-ivory pt-28 pb-32">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-gold" />
            <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold font-medium">
              Private Client Advisory
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-ivory tracking-tight leading-[1.1] mb-6 font-light">
            Confidential <br />
            <span className="italic font-normal text-gold-soft">Consultation.</span>
          </h1>
          <p className="text-base sm:text-lg text-ivory-muted/90 font-sans font-light leading-relaxed">
            Our Senior Managing Directors assist families, institutional principals, and sovereign investors in acquiring and curating India’s most distinguished residential holdings.
          </p>
        </div>
      </section>

      <section id="schedule" className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-charcoal border border-graphite-border p-8 md:p-10 shadow-2xl">
            <div className="mb-6 pb-4 border-b border-graphite-border/70 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-serif text-ivory font-light">Direct Advisory Dispatch</h3>
                <p className="text-xs text-stone-400 font-sans mt-0.5">
                  Transmitted directly to senior client partners under strict NDA
                </p>
              </div>
              <ShieldCheck className="w-5 h-5 text-gold" />
            </div>

            <EnquiryForm />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-charcoal border border-graphite-border">
              <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-gold block mb-2">
                Concierge Desk
              </span>
              <h3 className="text-xl font-serif text-ivory mb-6 font-light">
                Immediate Private Access
              </h3>

              <div className="space-y-5 text-xs font-sans">
                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-[10px] uppercase tracking-wider">Private Advisory Hotline</p>
                    <p className="text-ivory font-medium text-sm mt-0.5">+91 22 6988 5000</p>
                    <p className="text-stone-500 text-[11px]">Mon – Sat: 09:00 to 20:00 IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-[10px] uppercase tracking-wider">Confidential Inquiries</p>
                    <p className="text-ivory font-medium text-sm mt-0.5">advisory@gara-luxury.com</p>
                    <p className="text-stone-500 text-[11px]">PGP encryption key available upon request</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-stone-400 text-[10px] uppercase tracking-wider">Response Protocol</p>
                    <p className="text-ivory font-medium mt-0.5">Guaranteed within 4 business hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-obsidian border border-graphite-border text-xs text-stone-400 space-y-3 font-sans">
              <div className="flex items-center gap-2 text-gold">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-medium uppercase tracking-wider text-[11px]">Verified Institutional Entity</span>
              </div>
              <p className="leading-relaxed">
                GARA Advisory LLP operates under RERA registration with verified credentials across Maharashtra, Goa, Delhi, and Karnataka regulatory authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="offices" className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-10 pb-4 border-b border-graphite-border/70">
          <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-gold block mb-2">
            Physical Consultancies
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif text-ivory font-light">
            Regional Advisory Desks
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICES.map((office) => (
            <div key={office.city} className="p-6 bg-charcoal border border-graphite-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-serif text-ivory">{office.city}</h4>
                  <MapPin className="w-3.5 h-3.5 text-gold/60" />
                </div>
                <p className="text-xs text-stone-300 font-sans mb-1">{office.address}</p>
                <p className="text-[11px] text-stone-500 font-sans mb-4">{office.region}</p>

                <div className="border-t border-graphite-border/70 pt-3 text-[11px] text-stone-400 space-y-1">
                  <p>
                    <span className="text-stone-500">Tel:</span> {office.phone}
                  </p>
                  <p>
                    <span className="text-stone-500">Email:</span> {office.email}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-graphite-border/70 text-[10px] text-gold uppercase tracking-wider font-sans">
                {office.focus}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
