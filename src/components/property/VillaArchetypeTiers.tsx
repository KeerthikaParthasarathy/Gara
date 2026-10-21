"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Layers, Map, Maximize2, X } from "lucide-react";

type ArchetypeId = "grand" | "ultimate" | "supreme";
type PlanOrientation = "North" | "South";
type Floor = "Ground Floor" | "First Floor";

interface Archetype {
  id: ArchetypeId;
  label: string;
  shortName: string;
  plot: string;
  accent: string;
}

interface FloorPlan {
  id: string;
  floor: Floor;
  orientation: PlanOrientation;
  imageUrl: string;
  alt: string;
}

interface ActivePlan {
  archetype: Archetype;
  plan: FloorPlan;
}

const ARCHETYPES: Archetype[] = [
  { id: "grand", label: "Grand", shortName: "Grand Villa", plot: "250 sq. yds.", accent: "#B58D52" },
  { id: "ultimate", label: "Ultimate", shortName: "Ultimate Villa", plot: "350 sq. yds.", accent: "#C6A76A" },
  { id: "supreme", label: "Supreme", shortName: "Supreme Villa", plot: "450+ sq. yds.", accent: "#E0C68F" },
];

const FLOORS: Array<{ floor: Floor; orientation: PlanOrientation }> = [
  { floor: "Ground Floor", orientation: "North" },
  { floor: "First Floor", orientation: "North" },
  { floor: "Ground Floor", orientation: "South" },
  { floor: "First Floor", orientation: "South" },
];

function makePlanUrl(archetype: Archetype, floor: Floor, orientation: PlanOrientation): string {
  const upper = floor === "First Floor";
  const south = orientation === "South";
  const title = `${archetype.shortName} | ${floor} | ${orientation}`;
  const wing = south ? "GUEST SUITE" : "LIVING ROOM";
  const center = upper ? "PRIMARY SUITE" : "COURTYARD";
  const right = south ? "FAMILY LOUNGE" : "DINING";
  const plan = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 800 550">
    <rect width="800" height="550" fill="#11110f"/><rect x="23" y="23" width="754" height="504" rx="8" fill="#141411" stroke="#c6a76a" stroke-opacity=".24"/>
    <g fill="none" stroke="#dfd5bf" stroke-width="5" stroke-linecap="square" stroke-linejoin="miter">
      <path d="M138 106H660V444H138z M138 260h522 M312 106v338 M484 106v338 M138 350h174 M484 350h176"/>
      <path d="M312 260h172 M224 106v70 M224 260v58 M396 106v66 M396 260v56 M572 106v70 M572 260v58 M224 350v94 M396 350v94 M572 350v94" stroke-width="3"/>
      <path d="M125 106h13m-13 0v13 M673 106h-13m13 0v13 M125 444h13m-13 0v-13 M673 444h-13m13 0v-13" stroke="#c6a76a" stroke-width="2"/>
    </g>
    <g fill="#c6a76a" font-family="Arial,sans-serif" font-size="12" letter-spacing="2" text-anchor="middle">
      <text x="220" y="194">${wing}</text><text x="398" y="194">${center}</text><text x="572" y="194">${right}</text>
      <text x="220" y="310">PRIVATE</text><text x="398" y="310">FOYER</text><text x="572" y="310">ENSUITE</text>
      <text x="220" y="405">BEDROOM</text><text x="398" y="405">TERRACE</text><text x="572" y="405">BEDROOM</text>
    </g>
    <g fill="none" stroke="#c6a76a" stroke-width="1.5" opacity=".8"><path d="M138 78v-12h522v12M106 106h-12v338h12"/><path d="M130 66l8-4v8zM668 66l-8-4v8zM94 100l-4 8h8zM94 450l-4-8h8z"/></g>
    <g fill="#aaa18f" font-family="Arial,sans-serif" font-size="10" letter-spacing="1.4"><text x="350" y="58">CONCEPTUAL PLAN</text><text x="56" y="287" transform="rotate(-90 56 287)">NORTH / SOUTH WING</text><text x="642" y="492">${archetype.plot.toUpperCase()}</text></g>
    <path d="M722 94v36m0-36-7 12m7-12 7 12" stroke="#c6a76a" fill="none"/><text x="722" y="146" fill="#c6a76a" font-family="Arial,sans-serif" font-size="9" text-anchor="middle">N</text>
    <text x="45" y="492" fill="#c6a76a" font-family="Arial,sans-serif" font-size="10" letter-spacing="2">PRIVATE ESTATE COLLECTION</text>
    <title>${title}</title></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(plan)}`;
}

const FLOOR_PLANS: Record<ArchetypeId, FloorPlan[]> = Object.fromEntries(
  ARCHETYPES.map((archetype) => [
    archetype.id,
    FLOORS.map(({ floor, orientation }) => ({
      id: `${archetype.id}-${floor}-${orientation}`,
      floor,
      orientation,
      imageUrl: makePlanUrl(archetype, floor, orientation),
      alt: `${archetype.shortName} ${floor.toLowerCase()} plan, ${orientation} orientation`,
    })),
  ]),
) as Record<ArchetypeId, FloorPlan[]>;

export default function VillaArchetypeTiers() {
  const [activeId, setActiveId] = useState<ArchetypeId>("grand");
  const [showMasterPlan, setShowMasterPlan] = useState(false);
  const [lightbox, setLightbox] = useState<ActivePlan | null>(null);
  const activeArchetype = ARCHETYPES.find(({ id }) => id === activeId) ?? ARCHETYPES[0];

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  return (
    <section className="border-t border-white/10 bg-transparent py-20 text-[#F4F0E8] md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-16 lg:px-20 xl:px-24">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[.24em] text-[#C6A76A]">
              <Layers className="h-4 w-4" aria-hidden="true" /> Estate Plans &amp; Perspectives
            </p>
            <h2 className="font-serif text-3xl font-light sm:text-5xl">A Plan for Every Point of View</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/75">Explore villa layouts and their settings within the estate.</p>
        </header>

        <nav aria-label="Villa plans and master site plan" className="mb-7 overflow-x-auto border-b border-white/10">
          <div className="flex min-w-max items-stretch gap-1">
            {ARCHETYPES.map((archetype) => (
              <button
                key={archetype.id}
                type="button"
                role="tab"
                aria-selected={!showMasterPlan && activeId === archetype.id}
                onClick={() => { setActiveId(archetype.id); setShowMasterPlan(false); }}
                className={`relative px-4 py-4 text-xs transition-colors sm:px-6 ${!showMasterPlan && activeId === archetype.id ? "text-[#F4F0E8]" : "text-white/45 hover:text-white/80"}`}
              >
                {archetype.label}
                {!showMasterPlan && activeId === archetype.id && <span className="absolute inset-x-4 bottom-0 h-0.5 bg-[#C6A76A] sm:inset-x-6" />}
              </button>
            ))}
            <button
              type="button"
              role="tab"
              aria-selected={showMasterPlan}
              onClick={() => setShowMasterPlan(true)}
              className={`relative flex items-center gap-2 px-4 py-4 text-xs transition-colors sm:px-6 ${showMasterPlan ? "text-[#F4F0E8]" : "text-white/45 hover:text-white/80"}`}
            >
              <Map aria-hidden="true" className="h-4 w-4 text-[#C6A76A]" /> Master Site Plan
              {showMasterPlan && <span className="absolute inset-x-4 bottom-0 h-0.5 bg-[#C6A76A] sm:inset-x-6" />}
            </button>
          </div>
        </nav>

        {showMasterPlan ? (
          <MasterSitePlan />
        ) : (
          <div role="tabpanel" aria-label={`${activeArchetype.label} floor plans`} className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {FLOOR_PLANS[activeId].map((plan) => (
              <button
                type="button"
                key={plan.id}
                onClick={() => setLightbox({ archetype: activeArchetype, plan })}
                className="group overflow-hidden rounded-xl border border-[#C6A76A]/15 bg-[#121212]/40 text-left backdrop-blur-md transition-colors hover:border-[#C6A76A]/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#C6A76A]"
                aria-label={`Open ${activeArchetype.shortName}, ${plan.floor} (${plan.orientation}) in fullscreen`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#11110f] p-2">
                  <Image src={plan.imageUrl} alt={plan.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" unoptimized className="object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
                  <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/75 p-2 text-[#C6A76A] opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><Maximize2 className="h-4 w-4" aria-hidden="true" /></span>
                </div>
                <div className="border-t border-white/10 px-4 py-4">
                  <p className="text-[9px] uppercase tracking-[.18em] text-[#C6A76A]">{plan.orientation} orientation</p>
                  <p className="mt-1 font-serif text-sm text-[#F4F0E8]">{activeArchetype.shortName} — {activeArchetype.plot} — {plan.floor} ({plan.orientation})</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && <PlanLightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}

function PlanLightbox({ item, onClose }: { item: ActivePlan; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-3 backdrop-blur-sm sm:p-8" role="dialog" aria-modal="true" aria-label={`${item.archetype.shortName} ${item.plan.floor} plan`} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <button type="button" onClick={onClose} aria-label="Close fullscreen plan" className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-[#141414]/90 p-3 text-white hover:border-[#C6A76A] hover:text-[#C6A76A]"><X className="h-5 w-5" /></button>
      <div className="w-full max-w-7xl">
        <div className="relative h-[75vh] w-full"><Image src={item.plan.imageUrl} alt={item.plan.alt} fill sizes="100vw" unoptimized className="object-contain" /></div>
        <p className="mt-4 text-center font-serif text-sm text-[#E1CC9B]">{item.archetype.shortName} — {item.archetype.plot} — {item.plan.floor} ({item.plan.orientation})</p>
      </div>
    </div>
  );
}

const SITE_PLAN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 850" class="h-full w-full" role="img" aria-labelledby="site-title site-desc"><title id="site-title">Conceptual estate master site plan</title><desc id="site-desc">Estate entry, private lake promenade, tree-lined boulevards, villa plots, and estate club.</desc>
  <defs><pattern id="water" width="46" height="22" patternUnits="userSpaceOnUse"><path d="M0 12q11-8 23 0t23 0" fill="none" stroke="#5d8790" stroke-opacity=".48" stroke-width="2"/></pattern></defs>
  <rect width="1600" height="850" fill="#111512"/><path d="M0 0h250q95 105 20 240t32 262q65 144-28 348H0z" fill="#294047"/><path d="M0 0h250q95 105 20 240t32 262q65 144-28 348H0z" fill="url(#water)"/>
  <path d="M251 0q95 105 20 240t32 262q65 144-28 348" fill="none" stroke="#c6a76a" stroke-width="10" stroke-opacity=".75"/><text x="63" y="375" fill="#e7dfcd" font-family="Arial,sans-serif" font-size="17" letter-spacing="5" transform="rotate(-90 63 375)">PRIVATE LAKE PROMENADE</text>
  <path d="M295 90H1450M295 420H1515M330 752H1450M405 90V752M795 90V752M1170 90V752" stroke="#45493d" stroke-width="52" fill="none"/><path d="M295 90H1450M295 420H1515M330 752H1450M405 90V752M795 90V752M1170 90V752" stroke="#b7a987" stroke-opacity=".55" stroke-width="2" stroke-dasharray="12 14" fill="none"/>
  <g fill="#536249" stroke="#788164" stroke-width="2"><circle cx="360" cy="140" r="14"/><circle cx="360" cy="225" r="14"/><circle cx="360" cy="330" r="14"/><circle cx="360" cy="505" r="14"/><circle cx="360" cy="610" r="14"/><circle cx="360" cy="700" r="14"/><circle cx="745" cy="140" r="14"/><circle cx="745" cy="225" r="14"/><circle cx="745" cy="330" r="14"/><circle cx="745" cy="505" r="14"/><circle cx="745" cy="610" r="14"/><circle cx="745" cy="700" r="14"/><circle cx="1120" cy="140" r="14"/><circle cx="1120" cy="225" r="14"/><circle cx="1120" cy="330" r="14"/><circle cx="1120" cy="505" r="14"/><circle cx="1120" cy="610" r="14"/><circle cx="1120" cy="700" r="14"/></g>
  <g stroke="#0b0c0a" stroke-width="3"><g fill="#b58d52"><rect x="450" y="135" width="112" height="66" rx="5"/><rect x="590" y="135" width="112" height="66" rx="5"/><rect x="450" y="240" width="112" height="66" rx="5"/><rect x="590" y="240" width="112" height="66" rx="5"/></g><g fill="#c6a76a"><rect x="850" y="135" width="132" height="76" rx="5"/><rect x="1005" y="135" width="132" height="76" rx="5"/><rect x="850" y="245" width="132" height="76" rx="5"/><rect x="1005" y="245" width="132" height="76" rx="5"/></g><g fill="#e0c68f"><rect x="1225" y="132" width="240" height="100" rx="5"/><rect x="1225" y="258" width="240" height="100" rx="5"/><rect x="1225" y="480" width="240" height="100" rx="5"/><rect x="1225" y="610" width="240" height="100" rx="5"/></g></g>
  <g fill="#171714" stroke="#c6a76a" stroke-width="3"><rect x="500" y="480" width="215" height="175" rx="8"/><rect x="850" y="500" width="235" height="130" rx="65"/></g><g fill="#e7dfcd" font-family="Arial,sans-serif" text-anchor="middle" letter-spacing="3"><text x="607" y="560" font-size="17">ESTATE CLUB</text><text x="607" y="591" font-size="12">CLUBHOUSE &amp; COURTS</text><text x="967" y="565" font-size="14">ENTRY COURT</text><text x="967" y="590" font-size="11">ARRIVAL GARDEN</text></g>
  <path d="M1300 850V758Q1300 724 1335 724h170" fill="none" stroke="#c6a76a" stroke-width="15"/><path d="M1300 850V758Q1300 724 1335 724h170" fill="none" stroke="#eee4ca" stroke-width="2" stroke-dasharray="12 10"/><circle cx="1490" cy="724" r="24" fill="#c6a76a"/><path d="M1478 724h24m-12-12v24" stroke="#111" stroke-width="4"/><text x="1370" y="812" fill="#e7dfcd" font-family="Arial,sans-serif" font-size="14" letter-spacing="3">ESTATE ENTRY</text>
  <g fill="#c6a76a" font-family="Arial,sans-serif" font-size="14" letter-spacing="3"><text x="446" y="112">GRAND VILLAS · 250 SQ.YD</text><text x="848" y="112">ULTIMATE VILLAS · 350 SQ.YD</text><text x="1225" y="110">SUPREME VILLAS · 450+ SQ.YD</text></g>
  <path d="M1530 70v50m0-50-9 15m9-15 9 15" fill="none" stroke="#e7dfcd" stroke-width="2"/><text x="1530" y="140" text-anchor="middle" fill="#e7dfcd" font-family="Arial,sans-serif" font-size="12">N</text></svg>`;

function MasterSitePlan() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#C6A76A]/15 bg-[#121212]/40 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-4 sm:px-6">
        <div><p className="text-[9px] uppercase tracking-[.2em] text-[#C6A76A]">Estate overview</p><h3 className="mt-1 font-serif text-lg">A considered landscape, from arrival to water.</h3></div>
        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[.15em] text-white/45"><Map className="h-4 w-4 text-[#C6A76A]" /> Conceptual master plan</span>
      </div>
      <div className="min-h-[300px] overflow-x-auto bg-[#111512] [&>svg]:min-w-[760px] [&>svg]:min-h-[400px]" dangerouslySetInnerHTML={{ __html: SITE_PLAN }} />
      <div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 px-4 py-4 sm:px-6">
        <Legend color="#B58D52" label="250 sq.yd Grand" />
        <Legend color="#C6A76A" label="350 sq.yd Ultimate" />
        <Legend color="#E0C68F" label="450+ sq.yd Supreme" />
        <Legend color="#8B7953" label="Estate Club" />
        <Legend color="#42636A" label="Private Lake" />
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return <span className="inline-flex items-center gap-2 text-[10px] text-white/65"><span className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: color }} />{label}</span>;
}
