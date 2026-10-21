"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";

const STORIES = [
  {
    number: "01",
    label: "SOVEREIGN CALIBER",
    headlineMain: "A rare address,",
    headlineAccent: "by every measure.",
    copy: "Considered architecture, generous private landscapes, and a setting shaped for those who value the exceptional. Discover a quieter expression of distinction.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    alt: "Contemporary villa framed by mature trees and a landscaped garden",
    icon: Compass,
    location: "Nerul & Candolim, Goa",
    href: "/properties/the-vayu-sanctuary",
  },
  {
    number: "02",
    label: "TIMELESS PROVENANCE",
    headlineMain: "Made to belong",
    headlineAccent: "for generations.",
    copy: "Enduring materials and thoughtful proportions give each home its own quiet character—crafted to feel as meaningful decades from now as it does today.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    alt: "Warmly lit architectural residence with timeless natural materials",
    icon: Sparkles,
    location: "Worli Sea Face, Mumbai",
    href: "/properties/the-oberoi-sky-penthouse",
  },
];

export function AlternatingBrandStory() {
  return (
    <section className="border-y border-graphite-border py-20 text-ivory sm:py-28 lg:py-36 relative overflow-hidden">
      <div className="mx-auto max-w-7xl space-y-24 px-6 sm:space-y-32 md:px-12">
        {STORIES.map((story, index) => {
          const Icon = story.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={story.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="grid items-center gap-10 md:grid-cols-12 lg:gap-16"
            >
              {/* Image Frame */}
              <div
                className={`relative aspect-[16/11] overflow-hidden border border-graphite-border bg-charcoal group md:col-span-7 ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-sans text-stone-300">
                  <span className="bg-obsidian/80 backdrop-blur-sm px-2.5 py-1 border border-graphite-border/70">
                    {story.location}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gold/80">
                    Curated Collection
                  </span>
                </div>
              </div>

              {/* Narrative Content */}
              <div
                className={`flex flex-col justify-center py-2 sm:py-6 md:col-span-5 ${
                  isEven ? "md:order-2 md:pl-4" : "md:order-1 md:pr-4"
                }`}
              >
                <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-gold font-medium">
                  <Icon className="h-3.5 w-3.5 text-gold" />
                  <span>{story.number} · {story.label}</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-light leading-[1.12] tracking-tight text-ivory">
                  {story.headlineMain} <br />
                  <span className="italic font-normal text-gold-soft">{story.headlineAccent}</span>
                </h2>

                <p className="mt-6 text-sm sm:text-base leading-relaxed text-ivory-muted/90 font-sans font-light">
                  {story.copy}
                </p>

                <div className="mt-8 flex items-center gap-6">
                  <Link
                    href={story.href}
                    className="group/cta inline-flex items-center gap-2 border-b border-gold/50 pb-1.5 text-xs uppercase tracking-[0.18em] text-gold-soft hover:text-ivory hover:border-gold transition-all duration-300 font-sans"
                  >
                    <span>View Architectural Dossier</span>
                    <ArrowUpRight className="h-3.5 w-3.5 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default AlternatingBrandStory;
