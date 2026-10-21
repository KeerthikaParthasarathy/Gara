export type PropertyCategory =
  | "Luxury Villa"
  | "Sky Mansion"
  | "Penthouse"
  | "Coastal Estate"
  | "Heritage Residence"
  | "Alpine Retreat";

export type PropertyStatus = "Available" | "Private Treaty" | "Under Offer" | "Exclusive Representation";

export interface PropertyImage {
  url: string;
  alt: string;
  caption?: string;
  isHero?: boolean;
}

export interface FloorPlan {
  level: string;
  title: string;
  dimensions: string;
  description: string;
  imageUrl: string;
}

export interface LocationDetail {
  city: string;
  neighborhood: string;
  state: string;
  region: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  highlights: string[];
}

export interface PropertySpecs {
  bedrooms: number;
  bathrooms: number;
  builtAreaSqFt: number;
  plotAreaAcres?: number;
  plotAreaSqFt?: number;
  carParks: number;
  furnishingStatus: "Bespoke Furnished" | "Designer Semi-Furnished" | "Architectural Shell";
  facing?: "Sea Facing" | "Golf Course" | "Forest Canopy" | "Panoramic Valley" | "Private Bay";
  reraRegistration?: string;
}

export interface Property {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  architecturalStyle: string;
  category: PropertyCategory;
  status: PropertyStatus;
  featured: boolean;
  priceInrCrores: number;
  priceUsdMillions: number;
  priceDisplayCustom?: string;
  location: LocationDetail;
  specs: PropertySpecs;
  walkthroughVideo?: string;
  description: string[];
  architecturalNarrative: string;
  materials: string[];
  amenities: {
    category: "Wellness & Leisure" | "Security & Discretion" | "Architecture & Tech" | "Staff & Service";
    items: string[];
  }[];
  images: PropertyImage[];
  floorPlans: FloorPlan[];
  curatorNote: string;
  yearBuilt: number;
}

export interface PropertyFilterState {
  searchQuery: string;
  location: string;
  category: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  sortBy: "featured" | "price-asc" | "price-desc" | "area-desc";
}
