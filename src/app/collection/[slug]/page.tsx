import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

const images = {
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=90&w=2200&auto=format&fit=crop",
  architecture: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1500&auto=format&fit=crop",
  interior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1500&auto=format&fit=crop",
  landscape: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1500&auto=format&fit=crop",
};

const narratives = [
  {
    number: "01",
    eyebrow: "A considered form",
    title: "Architecture shaped by its setting.",
    body: "A quiet dialogue between proportion, material and light gives this residence its unmistakable presence. Every line has been considered to create a home that feels both quietly confident and entirely at ease in its surroundings.",
    image: images.architecture,
    alt: "Sculptural contemporary architecture framed by mature trees",
    imageFirst: true,
  },
  {
    number: "02",
    eyebrow: "Craft in every detail",
    title: "Interiors with a sense of permanence.",
    body: "Natural stone, tactile timber and a restrained palette create spaces that reward a closer look. Generous proportions and carefully placed openings bring the outside in, allowing daylight to become part of the interior architecture.",
    image: images.interior,
    alt: "Warm contemporary living room with natural materials",
    imageFirst: false,
  },
  {
    number: "03",
    eyebrow: "A private retreat",
    title: "Room to slow down and look out.",
    body: "Terraces and planted gardens extend daily life beyond the walls. Set apart from the pace of the city, the landscape creates a rare sense of privacy while keeping the surrounding neighbourhood within easy reach.",
    image: images.landscape,
    alt: "Private terrace opening onto a lush landscaped garden",
    imageFirst: true,
  },
];

const specifications = [
  { value: "₹ 8.5 Cr", label: "Starting from" },
  { value: "4,250", label: "Total area · sq. ft." },
  { value: "3–4", label: "Bedrooms · configuration" },
  { value: "2026", label: "Expected handover" },
];

const amenities = [
  { title: "Private arrival court", description: "A discreet, dedicated entrance." },
  { title: "Residents’ wellness", description: "A considered space to restore." },
  { title: "Landscaped gardens", description: "Quiet greenery, just beyond home." },
  { title: "Concierge on call", description: "Thoughtful assistance, whenever needed." },
  { title: "Secure parking", description: "Private parking for every residence." },
  { title: "Generous terraces", description: "An open-air extension of your home." },
];

function propertyName(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const name = propertyName(slug);
  return {
    title: `${name} | GARA Collection`,
    description: `Discover ${name}, an exceptional residence curated by GARA. Explore its architecture, interiors and private viewing details.`,
  };
}

export default async function CollectionDetailPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const name = propertyName(slug) || "The Residence";

  return (
    <main className="min-h-screen overflow-hidden bg-transparent text-ivory">
      <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-28 sm:px-8 md:px-12 md:pt-36">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-ivory-muted sm:mb-12">
          <Link href="/" className="transition-colors hover:text-gold">Home</Link>
          <span className="text-graphite-border">/</span>
          <Link href="/properties" className="transition-colors hover:text-gold">Collection</Link>
          <span className="text-graphite-border">/</span>
          <span aria-current="page" className="truncate text-gold-soft">{name}</span>
        </nav>

        <section className="grid items-center gap-9 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div className="group relative aspect-[4/3] overflow-hidden bg-charcoal animate-fade-in sm:aspect-[16/10] lg:aspect-[1.38/1]">
            <Image
              src={images.hero}
              alt={`${name}, an exceptional private residence`}
              fill
              priority
              quality={90}
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.22em] text-white/75 sm:bottom-7 sm:left-7">A GARA private collection</span>
          </div>

          <div className="py-2 lg:py-12 animate-fade-up">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-7 bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold">A residence of distinction</span>
            </div>
            <h1 className="font-display text-5xl font-light leading-[0.98] tracking-tight text-ivory sm:text-6xl xl:text-7xl">{name}<span className="text-gold">.</span></h1>
            <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-ivory-muted">
              <MapPin size={14} strokeWidth={1.4} className="text-gold" />
              <span>Alibaug, Maharashtra</span>
            </div>
            <p className="mt-8 max-w-lg font-sans text-sm font-light leading-7 text-ivory-muted sm:text-[15px] sm:leading-8">
              A rare expression of considered design, natural materials and unhurried living. Set within a private landscape, {name} offers a distinctive perspective on the art of coming home.
            </p>
            <Link href="#viewing" className="mt-9 inline-flex items-center gap-3 border-b border-gold/60 pb-2 text-[10px] uppercase tracking-[0.2em] text-gold-soft transition-colors hover:border-gold hover:text-white">
              Arrange a private viewing <ArrowDown size={13} strokeWidth={1.5} />
            </Link>
          </div>
        </section>

        <section aria-label="Property story" className="py-20 sm:py-28 lg:py-36">
          <div className="mb-12 max-w-xl sm:mb-16">
            <span className="mb-3 block text-[10px] uppercase tracking-[0.24em] text-gold">The residence</span>
            <p className="font-display text-3xl font-light leading-tight text-ivory sm:text-4xl">A closer look at the details that make this home exceptional.</p>
          </div>
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {narratives.map((story) => (
              <article key={story.number} className={`grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20 ${story.imageFirst ? "" : ""}`}>
                <div className={`group relative aspect-[4/3] overflow-hidden bg-charcoal ${story.imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                  <img src={story.image} alt={story.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" />
                  <span className="absolute bottom-4 left-4 font-serif text-xs tracking-[0.18em] text-white/80">{story.number}</span>
                </div>
                <div className={`max-w-xl py-3 lg:py-8 ${story.imageFirst ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8"}`}>
                  <span className="mb-4 block text-[10px] uppercase tracking-[0.24em] text-gold">{story.eyebrow}</span>
                  <h2 className="font-display text-4xl font-light leading-[1.05] tracking-tight text-ivory sm:text-5xl">{story.title}</h2>
                  <p className="mt-6 max-w-lg font-sans text-sm font-light leading-7 text-ivory-muted sm:leading-8">{story.body}</p>
                  <span className="mt-8 block h-px w-12 bg-gold/70" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-label="Property specifications" className="border-y border-graphite-border/80 py-14 sm:py-16">
          <div className="mb-9 flex items-end justify-between gap-5">
            <div>
              <span className="mb-2 block text-[10px] uppercase tracking-[0.23em] text-gold">At a glance</span>
              <h2 className="font-display text-3xl font-light sm:text-4xl">The particulars</h2>
            </div>
            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-ivory-muted sm:block">{name}</span>
          </div>
          <dl className="grid grid-cols-2 md:grid-cols-4">
            {specifications.map((item, index) => (
              <div key={item.label} className={`py-5 md:px-6 md:py-6 ${index % 2 === 0 ? "border-r border-graphite-border/70 md:border-r" : "md:border-r md:border-graphite-border/70"} ${index > 1 ? "border-t border-graphite-border/70 md:border-t-0" : ""} ${index === 3 ? "md:border-r-0" : ""} ${index === 0 || index === 2 ? "md:pl-0" : ""}`}>
                <dt className="font-display text-3xl font-light text-ivory sm:text-4xl">{item.value}</dt>
                <dd className="mt-2 text-[9px] uppercase tracking-[0.17em] text-ivory-muted sm:text-[10px]">{item.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mb-10 flex items-end justify-between gap-5 sm:mb-12">
            <div>
              <span className="mb-2 block text-[10px] uppercase tracking-[0.23em] text-gold">Considered comforts</span>
              <h2 className="font-display text-4xl font-light sm:text-5xl">A life, well appointed.</h2>
            </div>
            <p className="hidden max-w-xs pb-1 text-xs font-light leading-6 text-ivory-muted md:block">Every detail is designed to make the everyday feel exceptional.</p>
          </div>
          <div className="grid grid-cols-1 border-l border-t border-graphite-border/80 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <article key={amenity.title} className="group min-h-36 border-b border-r border-graphite-border/80 p-6 transition-colors duration-300 hover:bg-charcoal sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-medium text-ivory">{amenity.title}</h3>
                    <p className="mt-2 text-xs font-light leading-5 text-ivory-muted">{amenity.description}</p>
                  </div>
                  <ArrowUpRight size={16} strokeWidth={1.3} className="shrink-0 text-gold/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="viewing" className="scroll-mt-24 border border-graphite-border bg-charcoal/50">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-between border-b border-graphite-border p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div>
                <span className="mb-4 block text-[10px] uppercase tracking-[0.24em] text-gold">By private appointment</span>
                <h2 className="max-w-md font-display text-4xl font-light leading-[1.05] sm:text-5xl">Experience {name} in person.</h2>
                <p className="mt-5 max-w-sm text-sm font-light leading-7 text-ivory-muted">Share a few details and a GARA property advisor will be in touch to arrange your private viewing.</p>
              </div>
              <span className="mt-10 text-[9px] uppercase tracking-[0.2em] text-ivory-muted/70">Discreet. Personal. By invitation.</span>
            </div>
            <form action="/contact" method="get" className="grid gap-x-6 gap-y-5 p-7 sm:grid-cols-2 sm:p-10 lg:p-12">
              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-ivory-muted">Your name</span>
                <input required name="name" autoComplete="name" placeholder="Full name" className="w-full border-b border-graphite-border bg-transparent py-3 text-sm text-ivory outline-none transition-colors placeholder:text-ivory-muted/45 focus:border-gold" />
              </label>
              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-ivory-muted">Email address</span>
                <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" className="w-full border-b border-graphite-border bg-transparent py-3 text-sm text-ivory outline-none transition-colors placeholder:text-ivory-muted/45 focus:border-gold" />
              </label>
              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-ivory-muted">Phone number</span>
                <input required type="tel" name="phone" autoComplete="tel" placeholder="+91" className="w-full border-b border-graphite-border bg-transparent py-3 text-sm text-ivory outline-none transition-colors placeholder:text-ivory-muted/45 focus:border-gold" />
              </label>
              <label className="block">
                <span className="mb-2 block text-[9px] uppercase tracking-[0.18em] text-ivory-muted">Preferred viewing date</span>
                <input required type="date" name="date" className="w-full border-b border-graphite-border bg-transparent py-3 text-sm text-ivory outline-none [color-scheme:dark] transition-colors focus:border-gold" />
              </label>
              <input type="hidden" name="property" value={name} />
              <div className="pt-2 sm:col-span-2">
                <button type="submit" className="group inline-flex min-h-12 w-full items-center justify-between bg-gold px-5 text-[10px] font-medium uppercase tracking-[0.18em] text-obsidian transition-colors duration-300 hover:bg-gold-soft sm:w-auto sm:min-w-64">
                  Request a private viewing <ArrowRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <p className="mt-4 text-[9px] leading-5 text-ivory-muted/70">Your enquiry is handled personally and in confidence.</p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
