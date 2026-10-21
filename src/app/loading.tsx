import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-obsidian/85 backdrop-blur-sm flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-gold/20 border-t-gold animate-spin" />
        <span className="absolute font-serif text-xs text-gold tracking-widest">G</span>
      </div>
      <p className="mt-4 text-[10px] font-sans uppercase tracking-[0.28em] text-gold/80">
        Loading GARA Sanctuary...
      </p>
    </div>
  );
}
