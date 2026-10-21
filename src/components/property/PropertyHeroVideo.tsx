"use client";

export function PropertyHeroVideo() {
  return (
    <video
      key="hero-video-active"
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full object-cover filter brightness-[1.12] contrast-[1.06] saturate-[1.08]"
      onError={(event) => {
        const video = event.currentTarget;
        if (video.dataset.fallbackAttempted) return;
        video.dataset.fallbackAttempted = "true";
        video.src = "/hero-cinematic.mp4";
        video.load();
      }}
    >
      <source src="/videos/hero_cinematic.mp4" type="video/mp4" />
      <source src="/video/hero_cinematic.mp4" type="video/mp4" />
      <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
