"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Film, Pause, Play, Sparkles } from "lucide-react";

interface PropertyWalkthroughPlayerProps {
  propertyTitle: string;
  videoUrl?: string;
  posterImage?: string;
  locationLabel?: string;
  cadastralCode?: string;
  description?: string;
}

export function PropertyWalkthroughPlayer({
  propertyTitle,
  videoUrl,
  posterImage,
  locationLabel = "Verified Prime Estate",
  cadastralCode = "SCAN-4K-UHD",
  description,
}: PropertyWalkthroughPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = Boolean(videoUrl && !/\.(jpg|jpeg|webp|png)(\?.*)?$/i.test(videoUrl));

  const toggleInspection = () => {
    const video = videoRef.current;
    if (hasVideo && video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        void video.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
      return;
    }
    setIsPlaying((playing) => !playing);
  };

  return (
    <section className="relative overflow-hidden border-t border-graphite-border/60 bg-transparent py-20 text-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-4 border-b border-graphite-border/50 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="flex items-center gap-2 text-[11px] uppercase tracking-[.25em] text-gold"><Film className="h-4 w-4" />Cinematic inspection · spatial reel</p>
            <h2 className="mt-3 font-serif text-3xl font-light sm:text-5xl">Architectural <span className="italic text-gold-soft">Walkthrough Reel.</span></h2>
          </div>
          <p className="max-w-md text-xs font-light leading-relaxed text-stone-400 sm:text-sm">{description ?? propertyTitle}</p>
        </div>

        <div className="group relative aspect-[16/9] max-h-[640px] w-full overflow-hidden border border-[#C6A76A]/25 bg-[#121212]/40 shadow-2xl">
          {hasVideo ? (
            <video ref={videoRef} src={videoUrl} poster={posterImage} loop muted playsInline className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.015]" />
          ) : posterImage ? (
            <Image src={posterImage} alt={`${propertyTitle} aerial spatial inspection`} fill quality={80} sizes="(max-width: 1024px) 100vw, 1200px" className={`object-cover transition-transform duration-[1600ms] ${isPlaying ? "scale-110" : "scale-100"}`} />
          ) : null}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/40" />
          <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
            <span className="flex items-center gap-2 border border-gold/40 bg-black/75 px-3.5 py-1.5 font-mono text-[9px] tracking-widest text-gold backdrop-blur-md"><span className={`h-2 w-2 rounded-full bg-gold ${isPlaying ? "animate-ping" : ""}`} />{cadastralCode} · SPATIAL INSPECTION</span>
            <span className="hidden items-center gap-2 border border-graphite-border bg-black/75 px-3 py-1.5 font-mono text-[9px] text-stone-400 backdrop-blur-md sm:flex"><Sparkles className="h-3.5 w-3.5 text-gold" />ESTATE REEL</span>
          </div>
          <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div><p className="text-[10px] uppercase tracking-[.22em] text-gold">{locationLabel}</p><h3 className="mt-1 font-serif text-xl font-light sm:text-3xl">{propertyTitle}</h3></div>
            <button type="button" onClick={toggleInspection} aria-label={isPlaying ? "Pause Spatial Inspection" : "Play Spatial Inspection"} className="flex h-12 w-12 items-center justify-center border border-gold bg-black/75 text-gold backdrop-blur-md transition-colors hover:bg-gold hover:text-black">{isPlaying ? <Pause className="h-4 w-4" /> : <Play className="ml-0.5 h-4 w-4" />}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyWalkthroughPlayer;
