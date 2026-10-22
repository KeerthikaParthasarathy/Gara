"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight, AudioLines, Columns3, Leaf, ScanLine } from "lucide-react";
import type { Property, PropertyImage } from "@/types/property";

const reveal = { initial: { y: 35, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, viewport: { once: true, amount: 0.25 } };

function firstSentence(value: string) {
  const sentence = value.match(/^.*?[.!?](?:\s|$)/)?.[0] ?? value;
  const clean = sentence.trim();
  return clean.length > 190 ? `${clean.slice(0, 187).trimEnd()}…` : clean;
}

export function PropertyVisualEditorial({ property, images }: { property: Property; images: PropertyImage[] }) {
  const materialStudies = property.materials.map((material) => ({
    image: { url: materialTexture(material), alt: `${material} architectural material texture` },
    material,
  }));
  const statements = property.description.slice(0, 2).map(firstSentence);
  const visual = images[1] ?? images[0];

  return (
    <>
      <section className="grid gap-12 px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-20 xl:px-20 xl:py-28 2xl:px-28">
        <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          <p className="mb-3 text-[9px] uppercase tracking-[.22em] text-[#C6A76A]">Curatorial overview</p>
          <h2 className="max-w-xl font-serif text-3xl font-light leading-tight sm:text-5xl">Spatial conception, <span className="italic text-[#E1CC9B]">atmosphere and character.</span></h2>
          {visual && <div className="relative mt-9 aspect-[16/9] overflow-hidden border border-[#C6A76A]/30 bg-[#121212]/60"><Image src={visual.url} alt={visual.alt} fill quality={80} sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" /><div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#090909]/60 to-transparent" /><span className="absolute bottom-4 left-4 border border-[#C6A76A]/40 bg-[#090909]/70 px-3 py-2 font-mono text-[8px] uppercase tracking-[.16em] text-[#E6D5B8] backdrop-blur-md">Spatial study · 01</span></div>}
        </motion.div>
        <div className="space-y-6">
          {statements.map((statement, index) => <motion.p key={statement} {...reveal} transition={{ duration: 0.65, delay: index * 0.13, ease: [0.16, 1, 0.3, 1] }} className="border-l border-[#C6A76A]/40 pl-5 font-serif text-xl font-light leading-relaxed text-[#FFFFFF] sm:pl-7 sm:text-2xl">{statement}</motion.p>)}
          <motion.div {...reveal} transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }} className="flex items-center gap-3 border-t border-white/15 pt-6 text-xs font-light leading-relaxed text-[#E6D5B8]"><ScanLine className="h-4 w-4 shrink-0 text-[#C6A76A]" />{firstSentence(property.architecturalNarrative)}</motion.div>
        </div>
      </section>

      <section className="border-y border-[#C6A76A]/20 px-4 py-20 sm:px-8 md:px-16 md:py-28 lg:px-20 xl:px-24">
        <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className="mb-10">
          <p className="mb-3 text-[9px] uppercase tracking-[.22em] text-[#C6A76A]">Terroir & materiality</p>
          <h2 className="max-w-4xl font-serif text-3xl font-light leading-tight sm:text-4xl">The language of the place, refined through material.</h2>
          <p className="mt-4 text-sm font-light text-white/55">{property.materials.slice(0, 3).join(" · ")}</p>
        </motion.div>
        <div className="overflow-hidden">
          <motion.div drag="x" dragConstraints={{ left: -440, right: 0 }} animate={{ x: [0, -360] }} transition={{ duration: 22, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="flex w-max cursor-grab gap-4 active:cursor-grabbing">
          {materialStudies.map(({ image, material }, index) => <article key={material} className="group relative h-[340px] w-[min(76vw,390px)] overflow-hidden border border-[#C6A76A]/20 bg-[#121212]/40">
            {image && <Image src={image.url} alt={image.alt} fill quality={80} sizes="(max-width: 640px) 76vw, 390px" className="object-cover transition-transform duration-1000 group-hover:scale-105" />}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#090909]/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6"><span className="inline-flex border border-[#C6A76A]/35 bg-[#090909]/60 px-3 py-2 text-[8px] uppercase tracking-[.16em] text-[#C6A76A] backdrop-blur-md">Material study {String(index + 1).padStart(2, "0")}</span><p className="mt-3 font-serif text-xl font-light text-[#F4F0E8]">{material}</p></div>
          </article>)}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function materialTexture(material: string) {
  const value = material.toLowerCase();
  if (/molding|plaster/.test(value)) return "/images/materiality/handcrafted-plaster.svg";
  if (/teak|timber|wood|oak|ebony|cedar|pine|accoya|millwork/.test(value)) return "/images/materiality/reclaimed-timber.svg";
  if (/marble/.test(value)) return "/images/materiality/white-marble.svg";
  if (/travertine/.test(value)) return "/images/materiality/travertine-stone.svg";
  if (/basalt|black granite|charred|anthracite/.test(value)) return "/images/materiality/dark-stone.svg";
  if (/glass|glaz/.test(value)) return "/images/materiality/fluted-glass.svg";
  if (/metal|bronze|steel|titanium|hardware|corten|zinc|brass|platinum/.test(value)) return "/images/materiality/architectural-metal.svg";
  if (/concrete|microcement/.test(value)) return "/images/materiality/board-formed-concrete.svg";
  return "/images/materiality/sandstone-masonry.svg";
}

const categoryLabels: Record<Property["amenities"][number]["category"], string> = {
  "Wellness & Leisure": "Wellness & Leisure",
  "Security & Discretion": "Private Services & Security",
  "Architecture & Tech": "Architecture & Technology",
  "Staff & Service": "Staff & Service",
};

export function PropertyAmenitiesShowcase({ property, images }: { property: Property; images: PropertyImage[] }) {
  const landscapeHighlights = property.location.highlights.filter((highlight) => /garden|mangrove|forest|canopy|landscape|ecolog|tree|wetland|flora|nature|coast|waterfront/i.test(highlight));
  const panels = [
    ...property.amenities.map((group) => ({
      key: group.category,
      label: categoryLabels[group.category],
      items: group.items,
      image: group.category === "Wellness & Leisure" ? "/images/property/amenity-wellness-pool.jpg" : group.category === "Security & Discretion" ? "/images/property/amenity-private-services.jpg" : undefined,
      imageAlt: group.category === "Wellness & Leisure" ? "Infinity reflection pool beside a contemporary spa pavilion" : group.category === "Security & Discretion" ? "Discreet estate gatehouse and concierge pavilion" : undefined,
    })),
    {
      key: "Landscape & Ecology",
      label: "Landscape & Ecology",
      items: landscapeHighlights.length > 0 ? landscapeHighlights : [`Regional landscape: ${property.location.region}`],
      image: "/images/property/amenity-landscape-ecology.jpg",
      imageAlt: "Indigenous botanical canopy surrounding a private courtyard garden",
    },
  ];
  const [activeKey, setActiveKey] = useState(panels[0]?.key ?? "Landscape & Ecology");
  const activePanel = panels.find((panel) => panel.key === activeKey) ?? panels[0];
  if (!activePanel) return null;

  const imageTerms = activePanel.key === "Architecture & Tech" ? /interior|living|lighting|salon|architecture/i : /kitchen|dining|service|staff/i;
  const propertyImage = images.find((image) => imageTerms.test(`${image.alt} ${image.caption ?? ""}`)) ?? images[0];
  const imageSrc = activePanel.image ?? propertyImage?.url;
  const imageAlt = activePanel.imageAlt ?? propertyImage?.alt ?? activePanel.label;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:px-10 md:py-28 lg:px-14 xl:px-20 2xl:px-28" aria-labelledby="estate-amenities-heading">
      <div className="mb-10"><p className="mb-3 text-[9px] uppercase tracking-[.22em] text-[#C6A76A]">Estate amenities</p><h2 id="estate-amenities-heading" className="font-serif text-3xl font-light text-white sm:text-4xl">Considered for every dimension of living.</h2></div>
      <div className="grid gap-6 lg:grid-cols-[.82fr_1.18fr] lg:gap-8">
        <div className="space-y-3" role="tablist" aria-label="Estate amenity categories">
          {panels.map((panel) => (
            <button key={panel.key} type="button" role="tab" aria-selected={activeKey === panel.key} onClick={() => setActiveKey(panel.key)} className={`w-full border p-5 text-left backdrop-blur-md transition-all duration-300 ${activeKey === panel.key ? "border-[#C6A76A]/50 bg-[#161616]/85 shadow-[0_0_25px_rgba(198,167,106,0.10)]" : "border-[#C6A76A]/20 bg-[#121212]/55 hover:border-[#C6A76A]/35 hover:bg-[#161616]/75"}`}>
              <span className="flex items-center justify-between gap-4"><span className="font-serif text-xl font-light text-[#E6D5B8]">{panel.label}</span><ArrowUpRight className={`h-4 w-4 shrink-0 text-[#C6A76A] transition-transform ${activeKey === panel.key ? "translate-x-0.5 -translate-y-0.5" : "opacity-45"}`} /></span>
              <span className="mt-2 block text-[9px] uppercase tracking-[.15em] text-white/60">{panel.items.length} curated features</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activePanel.key} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -24, opacity: 0 }} transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }} role="tabpanel" className="relative min-h-[430px] overflow-hidden rounded-xl border border-[#C6A76A]/30 bg-[#151515]/80 shadow-[0_0_30px_rgba(198,167,106,0.10)]">
            {imageSrc && <Image src={imageSrc} alt={imageAlt} fill quality={80} sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#090909]/95 via-[#090909]/25 to-[#090909]/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><p className="mb-3 text-[9px] uppercase tracking-[.2em] text-[#C6A76A]">{activePanel.label}</p><ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">{activePanel.items.map((item) => <li key={item} className="border-t border-white/25 pt-2.5 text-xs font-light leading-relaxed text-white">{item}</li>)}</ul></div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function PropertyTechnicalPillars({ property }: { property: Property }) {
  const technologyFeatures = property.amenities.find((group) => group.category === "Architecture & Tech")?.items ?? [];
  const acousticFeature = technologyFeatures.find((item) => /audio|sound|acoustic/i.test(item)) ?? "No specific feature listed";
  const pillars = [
    { title: "Structure & Facade", Icon: Columns3, visual: "structure" as const, detail: property.architecturalStyle, value: property.yearBuilt.toString(), metric: "Year built" },
    { title: "Finishes & Glazing", Icon: ScanLine, visual: "glazing" as const, detail: property.materials.slice(0, 2).join(" · "), value: property.materials.length.toString(), metric: "Recorded materials" },
    { title: "Environmental & Climate", Icon: Leaf, visual: "climate" as const, detail: `${technologyFeatures.length} listed features`, value: property.specs.facing ?? property.location.region, metric: "Aspect" },
    { title: "Acoustic Engineering", Icon: AudioLines, visual: "acoustic" as const, detail: acousticFeature, value: property.specs.bedrooms.toString(), metric: "Private suites" },
  ];

  return <section className="border-y border-[#C6A76A]/20 bg-[#121212]/25 py-12 backdrop-blur-sm md:py-20 xl:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28"><p className="mb-3 text-[9px] uppercase tracking-[.22em] text-[#C6A76A]">Technical details</p><h2 className="mb-10 font-serif text-3xl font-light text-[#FFFFFF] sm:text-4xl">Performance, material and environmental intelligence.</h2><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{pillars.map(({ title, Icon, visual, detail, value, metric }, index) => <motion.article key={title} {...reveal} transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }} className="border border-[#C6A76A]/30 bg-[#151515]/85 p-5 shadow-[0_0_25px_rgba(198,167,106,0.08)]"><div className="mb-5 flex h-28 items-center justify-center border border-[#C6A76A]/20 bg-gradient-to-br from-[#C6A76A]/10 to-[#090909]/45"><TechnicalMicroVisual type={visual} /></div><span className="mb-4 flex h-10 w-10 items-center justify-center border border-[#C6A76A]/45 bg-[#090909]/75 text-[#C6A76A]"><Icon className="h-4 w-4" /></span><p className="font-serif text-lg font-light text-[#FFFFFF]">{title}</p><p className="mt-2 line-clamp-2 text-[9px] uppercase tracking-[.14em] text-[#FFFFFF]/75">{detail}</p><p className="mt-4 border-t border-white/20 pt-3 font-serif text-lg font-light text-[#E6D5B8]">{value}<span className="ml-2 font-sans text-[8px] uppercase tracking-[.13em] text-[#FFFFFF]/70">{metric}</span></p></motion.article>)}</div><div className="mt-8 grid gap-3 border-t border-white/15 pt-6 text-xs font-light text-[#FFFFFF]/80 sm:grid-cols-3"><p>Registration: {property.specs.reraRegistration ?? "Not listed"}</p><p>Orientation: {property.specs.facing ?? "Not stated"}</p><p>Built area: {new Intl.NumberFormat("en-IN").format(property.specs.builtAreaSqFt)} sq. ft.</p></div></div></section>;
}

function TechnicalMicroVisual({ type }: { type: "structure" | "glazing" | "climate" | "acoustic" }) {
  return (
    <svg viewBox="0 0 180 100" fill="none" className="h-24 w-44" aria-hidden="true">
      <g stroke="#E6D5B8" strokeOpacity=".8" strokeWidth="1.5">
        {type === "structure" && <><path d="M30 78h120M42 78V26h96v52M42 40h96M42 57h96" /><path d="M52 26v52m12-52v52m12-52v52m12-52v52m12-52v52m12-52v52m12-52v52" stroke="#C6A76A" strokeOpacity=".7" /><path d="M30 84h120M34 89h112" stroke="#C6A76A" /></>}
        {type === "glazing" && <><path d="M54 18h72v64H54zM63 18v64m8-64v64m48-64v64" /><path d="M42 86h96M48 91h84" stroke="#C6A76A" /><path d="M74 28h42M74 36h42" stroke="#C6A76A" strokeOpacity=".65" /></>}
        {type === "climate" && <><path d="M38 30h104M38 42h104M38 54h104M38 66h104" stroke="#C6A76A" /><path d="M44 30l18 12-18 12m88-24-18 12 18 12M90 67V26" /><path d="M86 34l4-8 4 8M86 59l4 8 4-8" /></>}
        {type === "acoustic" && <><path d="M48 18h84v64H48zM58 18v64m12-64v64m12-64v64m12-64v64m12-64v64m12-64v64" stroke="#C6A76A" /><path d="M32 35q8 0 8 8t8 8m-16 0q8 0 8 8t8 8m100-32q-8 0-8 8t-8 8m16 0q-8 0-8 8t-8 8" /><path d="M36 86h108" /></>}
      </g>
      <circle cx="90" cy="50" r="42" stroke="#C6A76A" strokeOpacity=".25" strokeDasharray="2 5" />
    </svg>
  );
}
