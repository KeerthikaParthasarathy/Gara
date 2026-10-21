import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Non-Disclosure Protocol | GARA",
  description: "GARA's client confidentiality policy and data protection commitments.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent text-ivory pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-12">
          <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-gold block mb-3">
            Client Discretion
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif text-ivory tracking-tight mb-4">
            Privacy Policy & Non-Disclosure Protocol
          </h1>
          <p className="text-xs text-stone-500 font-sans">
            Effective Date: October 2024 • Last updated for Indian Digital Personal Data Protection (DPDP) Act compliance.
          </p>
        </div>

        <div className="space-y-10 text-xs sm:text-sm text-ivory-muted/90 font-sans leading-relaxed font-light border-t border-graphite-border pt-8">
          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">1. Foundational Commitment to Discretion</h2>
            <p>
              At GARA, privacy is not merely a legal compliance mandate; it is the cornerstone of our advisory relationship with ultra-high-net-worth individuals, sovereign funds, and private family offices. We operate under stringent non-disclosure parameters and never share client names, identity dossiers, or private treaty acquisition prices with external media or third-party marketing entities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">2. Data We Collect</h2>
            <p className="mb-2">We collect only necessary information required to facilitate verified real estate representations:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-300">
              <li>Direct identity credentials provided voluntarily during advisory consultations (Full Name, Family Office details, Contact Numbers, Email addresses).</li>
              <li>Acquisition preferences and criteria (desired square footage, preferred micro-markets, financial brackets).</li>
              <li>Technical site interaction data collected strictly to enhance user experience and ensure security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">3. Use of Information</h2>
            <p>
              Collected information is utilized solely to provide customized property dossiers, coordinate private on-site architectural viewings, verify title authenticity under Indian real estate statutes, and maintain confidential correspondence between your appointed representative and our Senior Partners.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">4. Security Infrastructure</h2>
            <p>
              All advisory communications and database entries are safeguarded using enterprise-grade encryption (TLS 1.3 / AES-256). Access to confidential client records is restricted exclusively to vetted GARA Managing Directors on a strict need-to-know basis.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-serif text-ivory mb-3">5. Inquiries & Data Rights</h2>
            <p>
              Clients retain full ownership of their personal dossiers and may at any time request complete deletion or withdrawal of their acquisition profile by contacting our Data Protection Officer at <span className="text-gold">privacy@gara-luxury.com</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
