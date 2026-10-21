"use client";

import React, { useState } from "react";
import { Property } from "@/types/property";
import { useApp } from "@/context/AppContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Bookmark, Calendar, FileText, Share2, Check } from "lucide-react";

interface PropertyDetailClientActionsProps {
  property: Property;
  showPrice?: boolean;
}

export function PropertyDetailClientActions({ property, showPrice = true }: PropertyDetailClientActionsProps) {
  const { currency, isSaved, toggleSaveProperty, openEnquiryModal, openVisitModal } = useApp();
  const saved = isSaved(property.id);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: property.title,
          text: property.tagline,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-5 lg:self-end">
      {showPrice && <div>
        <span className="text-[10px] uppercase tracking-widest text-stone-400 block mb-1">
          Private Acquisition Value
        </span>
        <div className="text-2xl sm:text-4xl font-serif text-gold tracking-tight">
          {formatPrice(property.priceInrCrores, currency, property.priceUsdMillions)}
        </div>
      </div>}

      <div className="flex items-center gap-2.5">
        <Button
          variant="gold"
          size="md"
          onClick={() => openVisitModal(property)}
          className="flex items-center gap-2"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Schedule Private Viewing</span>
        </Button>

        <Button
          variant="outline"
          size="md"
          onClick={() => openEnquiryModal(property)}
          className="flex items-center gap-2"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Download Dossier</span>
        </Button>

        <button
          onClick={() => toggleSaveProperty(property.id)}
          className={`p-3.5 border transition-colors ${
            saved
              ? "bg-gold/10 border-gold text-gold"
              : "border-graphite-border bg-charcoal text-stone-400 hover:text-ivory"
          }`}
          title={saved ? "Saved to private shortlist" : "Save to private shortlist"}
          aria-label={saved ? "Saved to shortlist" : "Save to shortlist"}
        >
          <Bookmark className={`w-4 h-4 ${saved ? "fill-gold" : ""}`} />
        </button>

        <button
          onClick={handleShare}
          className="p-3.5 border border-graphite-border bg-charcoal text-stone-400 hover:text-ivory transition-colors"
          title="Share confidential listing link"
          aria-label="Share listing"
        >
          {copied ? <Check className="w-4 h-4 text-gold" /> : <Share2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
