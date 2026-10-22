import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

export function CurtainShowcase() {
  return (
    <section className="text-ivory" aria-label="Featured estate">
      <div className="h-px w-full bg-gold/30" />
      <div className="relative h-[62vh] min-h-[420px] max-h-[820px] w-full overflow-hidden bg-charcoal sm:h-[72vh]">
        <Image
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=90&w=2800&auto=format&fit=crop"
          alt="Panoramic view of a contemporary private estate nestled in a landscaped setting"
          fill
          sizes="100vw"
          className="object-cover object-center animate-fade-in"
          priority={false}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto flex max-w-7xl flex-col gap-5 px-6 pb-9 sm:flex-row sm:items-end sm:justify-between sm:px-10 sm:pb-12 lg:px-12">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-gold-soft font-sans">
              <Compass aria-hidden="true" className="h-3.5 w-3.5 text-gold" /> Nerul Riverfront · North Goa
            </p>
            <h2 className="font-serif text-3xl font-light sm:text-5xl text-ivory">The Vayu Sanctuary</h2>
          </div>
          <Link
            href="/properties/the-vayu-sanctuary"
            prefetch={true}
            className="inline-flex w-fit items-center gap-2 border-b border-gold/60 pb-2 text-[10px] uppercase tracking-[0.18em] text-ivory transition-colors hover:border-gold hover:text-gold-soft font-sans"
          >
            <span>View residence</span>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-gold" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CurtainShowcase;
