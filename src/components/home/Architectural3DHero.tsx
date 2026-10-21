"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  ChevronDown,
  Play,
  Pause,
} from "lucide-react";

interface Architectural3DHeroProps {
  videoUrl?: string;
  posterUrl?: string;
}

const PURE_LUXURY_ESTATE_VIDEO = "/hero-cinematic.mp4";

export function Architectural3DHero({
  videoUrl = PURE_LUXURY_ESTATE_VIDEO,
  posterUrl,
}: Architectural3DHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    const videoWrapper = videoWrapperRef.current;
    if (!container || !videoWrapper) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId = 0;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      targetX = x * 10;
      targetY = -y * 8;
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const updateMotion = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (videoWrapper) {
        videoWrapper.style.transform = `
          scale(1.06)
          perspective(1000px)
          rotateX(${currentY}deg)
          rotateY(${currentX}deg)
          translate3d(${currentX * 1.2}px, ${-currentY}px, 0px)
        `;
      }

      animationFrameId = requestAnimationFrame(updateMotion);
    };

    container.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave);
    animationFrameId = requestAnimationFrame(updateMotion);

    return () => {
      container.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const toggleVideoPlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[92vh] w-full items-center justify-between overflow-hidden pt-24 md:min-h-screen md:pt-16"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={videoWrapperRef}
          className="absolute inset-[-30px] brightness-100 contrast-[1.02] saturate-100 transition-all duration-700 ease-out will-change-transform"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <video
            ref={videoRef}
            poster={posterUrl}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover filter brightness-[1.12] contrast-[1.06] saturate-[1.08]"
            onError={(event) => {
              const video = event.currentTarget;
              if (video.dataset.fallbackAttempted) return;
              video.dataset.fallbackAttempted = "true";
              video.src = "/hero-cinematic.mp4";
              video.load();
            }}
          >
            <source src={videoUrl} type="video/mp4" />
            <source src="/videos/hero_cinematic.mp4" type="video/mp4" />
            <source src="/video/hero_cinematic.mp4" type="video/mp4" />
            <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#090909] via-black/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[75vh] w-full max-w-7xl flex-col justify-end px-6 py-20 md:px-12 md:py-24">
        <div className="max-w-3xl">
          <h1 className="mb-7 animate-fade-up font-serif text-5xl font-light leading-[1.05] tracking-tight text-ivory drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] sm:text-7xl lg:text-8xl">
            A different perspective<br /><span className="italic text-gold-soft">on luxury.</span>
          </h1>
          <Button variant="gold" size="lg" href="/properties" className="group shadow-lg">
            <span className="flex items-center gap-2">Explore residences<ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" /></span>
          </Button>
        </div>
        <button
          type="button"
          onClick={toggleVideoPlayback}
          className="absolute right-6 top-24 z-10 flex items-center gap-1.5 border border-white/20 bg-black/20 px-3 py-2 text-[10px] uppercase tracking-wider text-white/75 backdrop-blur-sm transition-colors hover:border-[#C6A76A]/50 hover:text-[#C6A76A] md:right-12 md:top-auto md:bottom-10"
          aria-label={isPlaying ? "Pause drone video" : "Play drone video"}
        >
          {isPlaying ? <><Pause className="h-3 w-3 text-gold" /><span>Pause</span></> : <><Play className="h-3 w-3 text-gold" /><span>Play</span></>}
        </button>
      </div>
      <a
        href="#developments"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-stone-300 transition-colors hover:text-gold"
        aria-label="Scroll to featured residences"
      >
        <span>Discover</span>
        <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
      </a>
    </section>
  );
}

export default Architectural3DHero;
