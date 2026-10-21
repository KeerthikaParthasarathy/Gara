"use client";

import Image from "next/image";
import { useState } from "react";

interface ArtisticRenditionCarouselProps {
  propertyTitle: string;
  dayImage?: string;
  nightImage?: string;
}

export function ArtisticRenditionCarousel({
  propertyTitle,
  dayImage,
  nightImage,
}: ArtisticRenditionCarouselProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const dayImageSrc = dayImage || nightImage;
  const nightImageSrc = nightImage || dayImage;

  return (
    <section
      aria-label={`${propertyTitle} day and night artistic rendition`}
      className="relative left-1/2 mb-16 w-[90vw] max-w-[1440px] -translate-x-1/2"
    >
      <div className="grid overflow-hidden border border-graphite-border bg-charcoal lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
        <div className="relative min-h-[320px] overflow-hidden bg-obsidian sm:min-h-[440px] lg:min-h-[540px]">
          {dayImageSrc ? (
            <Image
              src={dayImageSrc}
              alt={`${propertyTitle} in daylight`}
              fill
              priority={false}
              sizes="(max-width: 1024px) 90vw, 60vw"
              className="object-cover animate-rendition-pan"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-obsidian to-[#252016]" />
          )}

          {nightImageSrc && (
            <div
              className="absolute inset-0"
              style={{
                clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
              }}
            >
              <Image
                src={nightImageSrc}
                alt={`${propertyTitle} at night`}
                fill
                sizes="(max-width: 1024px) 90vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-obsidian/20" />
            </div>
          )}

          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 p-4 sm:p-6">
            <span className="border border-white/20 bg-obsidian/75 px-3 py-2 text-[9px] font-sans uppercase tracking-[0.18em] text-ivory backdrop-blur-sm sm:text-[10px]">
              Artistic Rendition · Spatial Perspective
            </span>
            <span className="border border-white/20 bg-obsidian/75 px-3 py-2 text-[9px] font-sans tracking-[0.12em] text-ivory backdrop-blur-sm sm:text-[10px]">
              5600K&nbsp; DAY
            </span>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-4 sm:p-6">
            <span className="border border-white/20 bg-obsidian/75 px-3 py-2 text-[9px] font-sans tracking-[0.12em] text-ivory backdrop-blur-sm sm:text-[10px]">
              2700K&nbsp; NIGHT
            </span>
            <span className="text-[9px] font-sans uppercase tracking-[0.18em] text-white/80">
              Drag to compare
            </span>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 z-20 w-px bg-gold shadow-[0_0_18px_rgba(198,167,106,0.8)]"
            style={{ left: `${sliderPos}%` }}
          >
            <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-obsidian/90 text-gold shadow-lg">
              <span className="text-lg leading-none">↔</span>
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            step="1"
            value={sliderPos}
            onChange={(event) => setSliderPos(Number(event.currentTarget.value))}
            aria-label="Adjust day and night image comparison"
            aria-valuetext={`${100 - sliderPos}% night view`}
            className="absolute inset-0 z-30 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-gold"
          />
        </div>

        <div className="flex flex-col justify-between gap-10 border-t border-graphite-border p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
          <div className="animate-rendition-editorial">
            <span className="mb-5 block text-[10px] font-sans uppercase tracking-[0.25em] text-gold">
              Light, material &amp; time
            </span>
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-ivory sm:text-4xl">
              A study in
              <span className="mt-1 block text-gold">changing light.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm font-sans font-light leading-relaxed text-stone-400">
              {propertyTitle} reveals a different character as daylight gives
              way to evening. Move the gilded control to explore the
              architectural atmosphere across both moments.
            </p>
          </div>

          <div className="animate-rendition-editorial">
            <div className="mb-4 flex items-center justify-between text-[9px] font-sans uppercase tracking-[0.18em] text-stone-500">
              <span>Daylight</span>
              <span>After dark</span>
            </div>
            <div className="flex border border-graphite-border bg-obsidian p-1">
              <button
                type="button"
                onClick={() => setSliderPos(100)}
                aria-pressed={sliderPos === 100}
                className={`flex-1 px-3 py-3 text-[10px] font-sans uppercase tracking-[0.16em] transition-colors ${
                  sliderPos === 100
                    ? "bg-gold text-obsidian"
                    : "text-stone-400 hover:text-ivory"
                }`}
              >
                Day
              </button>
              <button
                type="button"
                onClick={() => setSliderPos(0)}
                aria-pressed={sliderPos === 0}
                className={`flex-1 px-3 py-3 text-[10px] font-sans uppercase tracking-[0.16em] transition-colors ${
                  sliderPos === 0
                    ? "bg-gold text-obsidian"
                    : "text-stone-400 hover:text-ivory"
                }`}
              >
                Night
              </button>
            </div>
            <p className="mt-4 text-[9px] font-sans uppercase tracking-[0.14em] text-stone-600">
              Visualisation for illustrative purposes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtisticRenditionCarousel;
