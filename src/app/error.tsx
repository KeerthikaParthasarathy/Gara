"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[GARA Platform Exception]", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] bg-transparent text-ivory flex items-center justify-center px-6">
      <div className="max-w-md text-center py-20 p-8 bg-charcoal border border-graphite-border">
        <div className="w-12 h-12 rounded-full bg-red-950/40 border border-red-500/40 flex items-center justify-center mx-auto mb-4 text-red-400">
          <AlertCircle className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-gold block mb-2">
          Advisory System Notice
        </span>
        <h2 className="text-2xl font-serif text-ivory tracking-tight mb-3">
          Temporary Interruption
        </h2>
        <p className="text-xs text-stone-400 font-sans leading-relaxed mb-6">
          We encountered a momentary disturbance retrieving the architectural dossier. Please refresh or contact our advisory desk directly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="gold" size="sm" onClick={() => reset()} className="flex items-center gap-2">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry Connection</span>
          </Button>
          <Button variant="outline" size="sm" href="/">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
