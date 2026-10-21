import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Bed, Building2, Car, MapPin, Maximize2 } from "lucide-react";
import { PROPERTIES } from "@/data/properties";
import type { Property } from "@/types/property";
import { PropertyGallery } from "@/components/property/PropertyGallery";
import { PropertyCard } from "@/components/property/PropertyCard";
import { PropertyDetailClientActions } from "@/components/property/PropertyDetailClientActions";
import { TerroirDossier } from "@/components/property/TerroirDossier";
import { ArchitectPedigree } from "@/components/property/ArchitectPedigree";
import { ArchitecturalSchematics } from "@/components/property/ArchitecturalSchematics";
import { PropertyWalkthroughPlayer } from "@/components/property/PropertyWalkthroughPlayer";
import { PropertyHeroVideo } from "@/components/property/PropertyHeroVideo";
import VillaArchetypeTiers from "@/components/property/VillaArchetypeTiers";
import { PropertyAmenitiesShowcase, PropertyTechnicalPillars, PropertyVisualEditorial } from "@/components/property/PropertyVisualEditorial";

type PropertyPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROPERTIES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = PROPERTIES.find((item) => item.slug === slug);
  if (!property) return { title: "Property Not Found | GARA" };
  return {
    title: `${property.title} — ${property.location.neighborhood}, ${property.location.city} | GARA`,
    description: property.tagline,
    openGraph: { title: `${property.title} | GARA Ultra-Luxury Real Estate`, description: property.tagline, images: [{ url: property.images[0]?.url, width: 1200, height: 630, alt: property.title }] },
  };
}

function landArea(property: Property) {
  if (property.specs.plotAreaAcres) return `${property.specs.plotAreaAcres} sovereign acres`;
  if (property.specs.plotAreaSqFt) return `${new Intl.NumberFormat("en-IN").format(property.specs.plotAreaSqFt)} sq. ft.`;
  return "Not stated";
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const propertyRecord = PROPERTIES.find((item) => item.slug === slug);
  if (!propertyRecord) notFound();

  const heroImage = propertyRecord.images.find((image) => image.isHero) ?? propertyRecord.images[0];
  const property = { ...propertyRecord, heroImage: heroImage?.url };
  const relatedProperties = PROPERTIES.filter((item) => item.id !== property.id).slice(0, 3);
  const coordinates = property.location.coordinates;

  return (
    <main className="min-h-screen bg-transparent pb-28 pt-24 text-[#F4F0E8] sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mx-auto mb-7 max-w-7xl px-4 text-[9px] uppercase tracking-[.16em] text-white/65 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28">
          <Link href="/" className="transition-colors hover:text-[#C6A76A]">GARA</Link><span>/</span><Link href="/properties" className="transition-colors hover:text-[#C6A76A]">Portfolio</Link><span>/</span><span className="max-w-[55vw] truncate text-[#C6A76A]">{property.title}</span>
        </nav>

        <section className="relative left-1/2 min-h-[85vh] w-screen -translate-x-1/2 overflow-hidden rounded-2xl border border-[#C6A76A]/20 bg-[#121212]/30 lg:min-h-[92vh]">
          <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
            {property.heroImage ? (
              <Image
                src={property.heroImage}
                alt={heroImage?.alt ?? `${property.title} property showcase`}
                fill
                priority
                quality={90}
                sizes="100vw"
                className="object-cover filter brightness-[1.05] contrast-[1.02]"
              />
            ) : (
              <PropertyHeroVideo />
            )}
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#090909] via-black/20 to-black/40" />
          <div className="absolute inset-x-0 bottom-0 z-10 p-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] sm:p-10 lg:p-14">
            <div className="flex max-w-4xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div><h1 className="font-serif text-4xl font-light leading-[1.04] tracking-tight text-[#F4F0E8] sm:text-6xl lg:text-7xl">{property.title}</h1><p className="mt-5 flex items-center gap-2 text-sm font-light text-white/70"><MapPin className="h-4 w-4 text-[#C6A76A]" />{property.location.neighborhood}, {property.location.city}, {property.location.state}</p></div>
              <div className="border-l border-[#C6A76A]/45 pl-5 sm:pl-7"><p className="text-[9px] uppercase tracking-[.18em] text-white/55">Private acquisition value</p><p className="mt-1 font-serif text-3xl font-light text-[#C6A76A] sm:text-4xl">{property.priceDisplayCustom ?? `₹ ${property.priceInrCrores.toLocaleString("en-IN")} Cr`}</p></div>
            </div>
            <div className="mt-7"><PropertyDetailClientActions property={property} showPrice={false} /></div>
          </div>
        </section>

        <section aria-label="Residence specifications" className="grid grid-cols-2 border-b border-[#C6A76A]/15 px-4 py-8 sm:px-6 md:px-10 md:py-12 sm:grid-cols-4 lg:px-14 xl:px-20 xl:py-16 2xl:px-28">
          <MetaCell Icon={Building2} label="Typology" value={property.category} /><MetaCell Icon={Bed} label="Configuration" value={`${property.specs.bedrooms} suites · ${property.specs.bathrooms} baths`} /><MetaCell Icon={Maximize2} label="Built area" value={`${new Intl.NumberFormat("en-IN").format(property.specs.builtAreaSqFt)} sq. ft.`} /><MetaCell Icon={Car} label="Private parking" value={`${property.specs.carParks} vehicles`} last />
        </section>

        <PropertyVisualEditorial property={property} images={property.images} />
      </div>

      <TerroirDossier propertyTitle={property.title} propertyReference={property.id} landArea={landArea(property)} coordinates={coordinates ? `${coordinates.lat.toFixed(4)}° N, ${coordinates.lng.toFixed(4)}° E` : "Not stated"} terroirType={property.location.region} reraNumber={property.specs.reraRegistration ?? "Not listed"} />

      <VillaArchetypeTiers />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:px-14 xl:px-20 xl:py-28 2xl:px-28"><Eyebrow>Architectural schematics</Eyebrow><div className="mb-9 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"><h2 className="font-serif text-3xl font-light sm:text-4xl">Spatial section &amp; environmental axis</h2><p className="max-w-md text-sm font-light leading-relaxed text-white/70">Longitudinal structure, solar orientation and prevailing wind response are documented as part of the residence&apos;s architectural character.</p></div><ArchitecturalSchematics propertyTitle={property.title} /></section>

      <ArchitectPedigree propertyTitle={property.title} imageUrl="/images/property/architectural-atelier-editorial.png" imageAlt="Architect working over a residence drawing in a contemporary design atelier" />

      <PropertyWalkthroughPlayer propertyTitle={property.title} posterImage={heroImage?.url} locationLabel={`${property.location.neighborhood}, ${property.location.city}`} cadastralCode={property.specs.reraRegistration ?? property.id.toUpperCase()} description={property.architecturalNarrative} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-10 md:py-20 lg:px-14 xl:px-20 xl:py-28 2xl:px-28"><Eyebrow>Curated gallery</Eyebrow><h2 className="mb-9 font-serif text-3xl font-light sm:text-4xl">A closer view of the residence.</h2><PropertyGallery images={property.images} title={property.title} /></section>

      <PropertyTechnicalPillars property={property} />

      <PropertyAmenitiesShowcase property={property} images={property.images} />

      {relatedProperties.length > 0 && <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 md:px-10 md:pt-20 lg:px-14 xl:px-20 xl:pt-28 2xl:px-28"><div className="mb-9 flex items-end justify-between gap-5"><div><Eyebrow>Curated comparisons</Eyebrow><h2 className="font-serif text-3xl font-light sm:text-4xl">Comparable residences.</h2></div><Link href="/properties" className="text-[9px] uppercase tracking-[.16em] text-[#C6A76A] transition-colors hover:text-[#E1CC9B]">View portfolio</Link></div><div className="grid gap-6 md:grid-cols-3">{relatedProperties.map((related) => <PropertyCard key={related.id} property={related} layout="standard" />)}</div></section>}
    </main>
  );
}

function MetaCell({ Icon, label, value, last = false }: { Icon: typeof Building2; label: string; value: string; last?: boolean }) {
  return <div className={`border-b border-[#C6A76A]/15 px-3 py-5 sm:border-b-0 sm:px-5 ${last ? "" : "sm:border-r sm:border-[#C6A76A]/15"}`}><p className="mb-2 flex items-center gap-2 text-[8px] uppercase tracking-[.14em] text-white/70"><Icon className="h-3.5 w-3.5 text-[#C6A76A]" />{label}</p><p className="font-serif text-sm font-light leading-snug text-[#FFFFFF] sm:text-base">{value}</p></div>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-[9px] uppercase tracking-[.22em] text-[#C6A76A]">{children}</p>;
}
