"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowUpRight, Compass } from "lucide-react";

export function CinematicWalkthrough() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative text-ivory py-28 border-t border-graphite-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 border-b border-graphite-border/50 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium">
              <Compass className="h-4 w-4" />
              <span>Spatial Inspection · Walkthrough Reel</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl font-light text-ivory sm:text-5xl">
              Step Inside the <span className="italic text-gold-soft">Sanctuary.</span>
            </h2>
          </div>
          <p className="mt-4 max-w-md font-sans text-sm text-stone-400 font-light leading-relaxed md:mt-0">
            A continuous architectural fly-through traversing private entrance pavilions, double-height galleries, and reflection terraces.
          </p>
        </div>

        <div className="relative w-full aspect-[16/9] max-h-[720px] rounded-none border border-graphite-border overflow-hidden bg-black shadow-2xl group">
          <video
            ref={videoRef}
            src="/hero-drone.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

          <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
            <div className="border border-gold/40 bg-black/80 px-4 py-1.5 text-xs font-mono tracking-widest text-gold backdrop-blur-md flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold animate-ping" />
              <span>4K SPATIAL SCAN · VAYU SANCTUARY</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 border border-graphite-border bg-black/80 px-3 py-1.5 text-xs font-mono text-stone-400 backdrop-blur-md">
              <Maximize2 className="h-3.5 w-3.5 text-gold" />
              <span>FPS: 60 · 3840 x 2160 UHD</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-20">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold block font-sans">
                Nerul Riverfront, North Goa
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl text-ivory mt-1 font-light">
                The Vayu Sanctuary Walkthrough
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="flex h-12 w-12 items-center justify-center rounded-none border border-gold bg-black/70 text-gold backdrop-blur-md transition-all hover:bg-gold hover:text-black"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
                className="flex h-12 w-12 items-center justify-center rounded-none border border-graphite-border bg-black/70 text-stone-400 backdrop-blur-md transition-all hover:border-gold hover:text-ivory"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              <Link
                href="/properties/the-vayu-sanctuary"
                className="inline-flex items-center gap-2 border border-gold bg-gold px-6 py-3.5 text-xs font-sans uppercase tracking-widest text-obsidian transition-all hover:bg-transparent hover:text-ivory"
              >
                <span>Schedule Private Viewing</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CinematicWalkthrough;
