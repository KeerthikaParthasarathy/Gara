"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PropertyImage } from "@/types/property";
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Camera,
} from "lucide-react";

interface PropertyGalleryProps {
  images: PropertyImage[];
  title: string;
}

export function PropertyGallery({ images, title }: PropertyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, images.length]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxOpen]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 md:gap-3 h-[420px] sm:h-[520px] lg:h-[600px]">
        <div
          onClick={() => {
            setActiveIndex(0);
            setLightboxOpen(true);
          }}
          className="relative md:col-span-2 md:row-span-2 group cursor-pointer overflow-hidden bg-charcoal border border-graphite-border"
        >
          <Image
            src={images[0]?.url}
            alt={images[0]?.alt || title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

          <button
            onClick={() => {
              setActiveIndex(0);
              setLightboxOpen(true);
            }}
            className="absolute bottom-4 left-4 z-10 flex items-center gap-2 bg-obsidian/85 backdrop-blur-md border border-graphite-border px-3 py-1.5 text-xs text-ivory hover:text-gold transition-colors"
          >
            <Camera className="w-3.5 h-3.5 text-gold" />
            <span>View Fullscreen Gallery ({images.length} Plates)</span>
          </button>
        </div>

        {images.slice(1, 5).map((img, idx) => (
          <div
            key={idx}
            onClick={() => {
              setActiveIndex(idx + 1);
              setLightboxOpen(true);
            }}
            className="relative hidden md:block group cursor-pointer overflow-hidden bg-charcoal border border-graphite-border"
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              sizes="(max-width: 1200px) 25vw, 20vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-obsidian/20 group-hover:bg-transparent transition-colors" />

            {idx === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-obsidian/75 backdrop-blur-[2px] flex items-center justify-center text-ivory group-hover:text-gold transition-colors text-xs uppercase tracking-widest font-sans font-medium">
                +{images.length - 5} More
              </div>
            )}
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between border-b border-graphite-border/70 pb-4">
            <div>
              <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-gold block">
                Architectural Plate {activeIndex + 1} of {images.length}
              </span>
              <h4 className="text-sm font-serif text-ivory font-light">{title}</h4>
            </div>

            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2.5 text-stone-400 hover:text-gold transition-colors border border-graphite-border bg-charcoal"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full max-w-6xl max-h-[75vh]">
              <Image
                src={images[activeIndex]?.url}
                alt={images[activeIndex]?.alt || title}
                fill
                priority
                sizes="100vw"
                className="object-contain object-center"
              />
            </div>

            <button
              onClick={() =>
                setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
              }
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 bg-obsidian/80 border border-graphite-border hover:border-gold text-ivory hover:text-gold transition-colors"
              aria-label="Previous plate"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 bg-obsidian/80 border border-graphite-border hover:border-gold text-ivory hover:text-gold transition-colors"
              aria-label="Next plate"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="border-t border-graphite-border/70 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-stone-400 font-sans italic text-center md:text-left font-light">
              {images[activeIndex]?.caption || images[activeIndex]?.alt}
            </p>

            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-14 h-10 flex-shrink-0 border transition-all ${
                    activeIndex === idx
                      ? "border-gold opacity-100 scale-105"
                      : "border-graphite-border opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="60px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyGallery;
