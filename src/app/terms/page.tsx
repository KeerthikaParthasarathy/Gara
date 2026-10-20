import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | GARA Ultra-Luxury Real Estate",
  description: "Terms and conditions governing the use of GARA digital platforms and advisory services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-obsidian text-ivory pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-3">
            Legal Framework
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-ivory tracking-tight mb-4">
            Terms & Conditions of Representation
          </h1>
          <p className="text-xs text-stone-500 font-sans">
            Effective as of October 2024 • Governing digital advisory interactions with GARA Real Estate Advisory LLP.
          </p>
        </div>

        <div className="space-y-10 text-xs sm:text-sm text-ivory-muted/90 font-sans leading-relaxed font-light border-t border-graphite-border pt-8">
          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">1. Scope of Digital Services</h2>
            <p>
              The digital portfolio hosted at gara-luxury.com is an invitation to explore curated architectural residences and initiate private advisory discussions. Publication of property photographs, architectural schematics, or valuation indicators does not constitute a binding unilateral offer for sale. All transactions are subject to formal contract execution, title diligence, and mutual agreement between principals.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">2. Accuracy & Verification</h2>
            <p>
              While GARA undertakes rigorous preliminary diligence regarding property specifications, square footage, RERA registrations, and architectural provenance, prospective buyers are advised to conduct independent legal verification through their designated counsel. Valuations and currency conversions (INR to USD) are illustrative and subject to prevailing exchange rates and negotiations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">3. Intellectual Property Rights</h2>
            <p>
              All architectural essays, high-resolution photography, bespoke 3D models, branding elements, and editorial layouts featured on this website are the intellectual property of GARA Advisory LLP or licensed from respective copyright holders. Reproduction or syndication without written consent is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">4. Private Viewing Protocols</h2>
            <p>
              Due to owner confidentiality and high security, private on-site viewings are arranged strictly after prospective client identity verification. GARA reserves the right to decline viewing requests that do not satisfy safety or credential benchmarks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">5. Governing Law & Jurisdiction</h2>
            <p>
              These terms are governed by the laws of the Republic of India. Any disputes arising out of the use of this digital platform shall be subject to the exclusive jurisdiction of the competent courts in Mumbai, Maharashtra.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
