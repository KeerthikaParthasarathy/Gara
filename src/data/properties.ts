import { Property } from "@/types/property";

export const PROPERTIES: Property[] = [
  {
    id: "gara-goa-vayu",
    slug: "the-vayu-sanctuary",
    title: "The Vayu Sanctuary",
    tagline: "Tropical Brutalism Along the Quiet Nerul Backwaters",
    architecturalStyle: "Tropical Brutalist & Teak Pavilion",
    category: "Luxury Villa",
    status: "Exclusive Representation",
    featured: true,
    priceInrCrores: 68.5,
    walkthroughVideo: "/hero-drone.mp4",
    priceUsdMillions: 8.2,
    location: {
      city: "Nerul & Candolim",
      neighborhood: "Nerul Riverfront",
      state: "Goa",
      region: "West Coast India",
      coordinates: { lat: 15.5126, lng: 73.7824 },
      highlights: [
        "180m private waterfront with deep-draft mooring jetty",
        "8 mins to Candolim beach by speedboat",
        "Surrounded by protected mangrove bio-reserve",
        "Direct access to Goa's emerging fine-dining culinary belt"
      ]
    },
    specs: {
      bedrooms: 6,
      bathrooms: 8,
      builtAreaSqFt: 14200,
      plotAreaAcres: 1.85,
      carParks: 6,
      furnishingStatus: "Bespoke Furnished",
      facing: "Sea Facing",
      reraRegistration: "PRGO11240982 (Verified)"
    },
    description: [
      "The Vayu Sanctuary is a masterwork of tropical architectural brutalism designed to blur the boundary between raw volcanic basalt, cast board-formed concrete, and lush Goan coastal flora.",
      "Conceived around a central cascading courtyard and a 32-metre basalt infinity pool that spills into the Nerul estuary, the residence celebrates natural air movement and filtered equatorial light through monumental teak louvers.",
      "The living pavilion features double-height 7.2-metre ceilings with seamless floor-to-ceiling minimal glass walls that glide into concealed wall pockets, transforming interior lounges into an open riverfront veranda."
    ],
    architecturalNarrative:
      "Material honesty is fundamental: hand-chiseled Goan laterite stone walls meet raw board-formed cementitious planes and salvaged Burma teak joists. Thermal mass strategies and prevailing south-westerly river winds eliminate the need for mechanical cooling across primary living spaces during monsoon and winter months.",
    materials: [
      "Board-formed Architectural Concrete",
      "Chiseled Basalt & Laterite Stone",
      "Reclaimed Burma Teak Brise-Soleil",
      "Reynaers Hi-Finity Slim Profile Glazing",
      "Honed Grey Kota & Fluted Travertine"
    ],
    amenities: [
      {
        category: "Wellness & Leisure",
        items: [
          "32m Riverfront Basalt Infinity Pool",
          "Subterranean Himalayan Salt Sauna & Cold Plunge",
          "Private River Jetty with Pontoon Berth",
          "Open-Air Sunset Mezcal & Wine Pavilion"
        ]
      },
      {
        category: "Security & Discretion",
        items: [
          "Biometric Perimeter Access Control",
          "Discrete Private Security Outpost",
          "Secure Private Jetty Arrival Gate",
          "Encrypted Smart Home Substation"
        ]
      },
      {
        category: "Architecture & Tech",
        items: [
          "Crestron Horizon Automation System",
          "Sonance Invisible In-Wall Architectural Audio",
          "Solar Microgrid with Tesla Powerwall Storage",
          "Greywater Wetland Filtration System"
        ]
      },
      {
        category: "Staff & Service",
        items: [
          "Dedicated 4-Bedroom Staff Residence & Quarters",
          "Professional Stainless Steel Commercial Chef's Kitchen",
          "Temperature-Controlled Wine Vault (1,200 bottles)",
          "Covered Chauffeur Lounge & EV Fast Chargers"
        ]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
        alt: "The Vayu Sanctuary - Riverfront Brutalist Facade at Dusk",
        caption: "Main architectural elevation featuring board-formed concrete and cantilevered master suite",
        isHero: true
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        alt: "Open-plan double height living pavilion facing Nerul waters",
        caption: "Living pavilion with 7.2m ceiling and bespoke teak joinery"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop",
        alt: "32-metre Basalt riverfront infinity pool",
        caption: "Reflecting pool blending into the river horizon"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
        alt: "Master bedroom suite with fluted travertine and private terrace",
        caption: "Master sanctuary overlooking protected mangrove canopy"
      },
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2000&auto=format&fit=crop",
        alt: "Subterranean wine vault and cigar lounge",
        caption: "Temperature-controlled 1,200-bottle private cellar"
      }
    ],
    floorPlans: [
      {
        level: "Level 01 — Arrival & Grounds",
        title: "Pavilion Level & Waterfront Decks",
        dimensions: "8,400 sq.ft covered / 12,000 sq.ft terrace",
        description:
          "Entry atrium with water courtyard, open formal salon, guest wing (2 suites), commercial kitchen, dining veranda, 32m pool, and boat house.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 02 — Private Quarters",
        title: "Upper Master Wing & Suites",
        dimensions: "5,800 sq.ft covered",
        description:
          "Dual primary master suites with private river-facing cantilevers, study salon, library bridge, and four en-suite bedrooms.",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    curatorNote:
      "Vayu stands as one of the rarest riverfront parcels remaining in North Goa with verifiable freehold title. An architectural triumph suited for discerning collectors of tropical modernism.",
    yearBuilt: 2024
  },
  {
    id: "gara-mumbai-oberoi-sky",
    slug: "the-oberoi-sky-penthouse",
    title: "The Oberoi Sky Penthouse",
    tagline: "A 360-Degree Triplex Hanging Above the Arabian Sea",
    architecturalStyle: "International High-Rise Modernism",
    category: "Sky Mansion",
    status: "Private Treaty",
    featured: true,
    priceInrCrores: 145.0,
    priceUsdMillions: 17.4,
    location: {
      city: "Worli",
      neighborhood: "Worli Sea Face",
      state: "Maharashtra",
      region: "South Mumbai",
      coordinates: { lat: 19.0144, lng: 72.8154 },
      highlights: [
        "Unobstructed panoramic vistas of the Bandra-Worli Sea Link",
        "Direct access to Coastal Road arterial transit",
        "Walking distance to Mumbai's premier yacht club moorings",
        "Highest private residential observatory deck in Worli"
      ]
    },
    specs: {
      bedrooms: 5,
      bathrooms: 7,
      builtAreaSqFt: 11500,
      carParks: 8,
      furnishingStatus: "Bespoke Furnished",
      facing: "Sea Facing",
      reraRegistration: "P51900018742 (Verified)"
    },
    description: [
      "Rising across the 68th, 69th, and 70th levels of South Mumbai's most prestigious residential spire, The Oberoi Sky Penthouse presents an unrepeatable vantage point across the Arabian Sea horizon.",
      "The residence includes a dedicated internal glass pneumatic elevator connecting all three levels, culminating in a 3,000 sq.ft private rooftop observatory terrace with a heated cantilevered glass-bottom lap pool.",
      "Designed with understated quiet luxury, materials include Italian Statuario marble slabs, acoustic triple-laminated acoustic glass, brushed champagne brass detailing, and sound-engineered walnut acoustic paneling."
    ],
    architecturalNarrative:
      "Engineered to withstand high-altitude maritime wind forces while maintaining absolute acoustic silence within. The triple-height 10.5m atrium acts as a vertical spatial sculpture, bathed in changing hues of maritime dusk and twilight.",
    materials: [
      "Bookmatched Italian Statuario Marble",
      "Brushed Champagne Titanium Accents",
      "Acoustic Triple-Glazed Low-E Glass",
      "European Smoked French Oak Parquet",
      "Solid Walnut Millwork"
    ],
    amenities: [
      {
        category: "Wellness & Leisure",
        items: [
          "Private Heated Cantilevered Glass Rooftop Lap Pool",
          "Dedicated Private Screening Cinema (Dolby Atmos, 12 seats)",
          "Bespoke TechnoGym Wellness Suite with Sea Views",
          "Sky Spa with Cryotherapy Chamber"
        ]
      },
      {
        category: "Security & Discretion",
        items: [
          "Private High-Speed Direct Car Elevator to Penthouse Garage",
          "Keycard & Iris Biometric Private Foyer",
          "Reinforced Secure Safe Room (Class V Vault Standard)",
          "Dedicated Staff Entry Elevator Core"
        ]
      },
      {
        category: "Architecture & Tech",
        items: [
          "Lutron Palladiom Architectural Lighting Controls",
          "Kevlar Acoustic Isolation Floating Floor System",
          "Automated Motorised Double-Layer Blackout Shading",
          "Hospital-Grade Hepa-14 Air Filtration Integration"
        ]
      },
      {
        category: "Staff & Service",
        items: [
          "Separate 3-Staff Residential Suite & Prep Pantry",
          "Commercial Refrigeration & Butler's Pantry",
          "Valet & Private Chauffeur Rest Lounge",
          "24/7 Dedicated Building Concierge & Butler Dispatch"
        ]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop",
        alt: "The Oberoi Sky Penthouse - Glass Facade overlooking Mumbai Skyline",
        caption: "Triple-height glass perimeter commanding the Arabian Sea and Sea Link",
        isHero: true
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2000&auto=format&fit=crop",
        alt: "Grand double-height salon with Statuario marble",
        caption: "Grand reception salon with continuous ocean panoramas"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
        alt: "Private cantilevered rooftop pool at night",
        caption: "Rooftop glass-bottom pool floating 700 feet above the coast"
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2000&auto=format&fit=crop",
        alt: "Primary Master Suite with private sunset terrace",
        caption: "Primary suite with bespoke dressing salons and spa bathroom"
      }
    ],
    floorPlans: [
      {
        level: "Level 68 — Entertaining & Grand Living",
        title: "Reception Salon & Culinary Gallery",
        dimensions: "4,600 sq.ft covered",
        description:
          "Triple-height gallery foyer, formal sea-facing living room, 16-seat banquet dining room, presentation kitchen, and guest suite.",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 69 — Private Family Quarters",
        title: "Primary Suites & Wellness",
        dimensions: "4,200 sq.ft covered",
        description:
          "Grand master suite spanning the entire western ocean frontage, three secondary junior suites, family den, and gymnasium.",
        imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 70 — The Crown Observatory",
        title: "Rooftop Pool & Private Lounge",
        dimensions: "2,700 sq.ft covered + terrace",
        description:
          "Cantilevered pool, sunset cocktail lounge, barbecue terrace, observatory sky garden, and Dolby Atmos screening room.",
        imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
      }
    ],
    curatorNote:
      "An apex residence without equal in South Mumbai. Properties of this vertical scale with genuine 360-degree marine horizons surface only once in a generation.",
    yearBuilt: 2023
  },
  {
    id: "gara-delhi-amaltas",
    slug: "amaltas-estate",
    title: "Amaltas Estate",
    tagline: "Classical Dignity and Serene Acreage in Lutyens' Delhi",
    architecturalStyle: "Colonial-Contemporary Heritage",
    category: "Heritage Residence",
    status: "Private Treaty",
    featured: true,
    priceInrCrores: 285.0,
    priceUsdMillions: 34.2,
    location: {
      city: "Lutyens' Delhi",
      neighborhood: "Amrita Shergill Marg",
      state: "Delhi NCR",
      region: "North India",
      coordinates: { lat: 28.5983, lng: 77.2241 },
      highlights: [
        "Situated within the secure, elite Lutyens' Bungalow Zone (LBZ)",
        "Moments from Lodhi Gardens and India Habitat Centre",
        "2.2 acres of centennial neem and amaltas tree canopy",
        "Maximum diplomatic zoning and diplomatic corps adjacency"
      ]
    },
    specs: {
      bedrooms: 7,
      bathrooms: 9,
      builtAreaSqFt: 18000,
      plotAreaAcres: 2.2,
      carParks: 12,
      furnishingStatus: "Architectural Shell",
      facing: "Forest Canopy",
      reraRegistration: "Heritage Zone Clearance Verified"
    },
    description: [
      "Occupying 2.2 verdant acres on Delhi's most revered avenue, Amaltas Estate represents the pinnacle of residential provenance in India.",
      "The residence blends Sir Edwin Lutyens' timeless architectural geometry—deep porticos, symmetric colonnades, and Dholpur sandstone plinths—with contemporary internal volumetric freedom, creating 18,000 sq.ft of curated living space.",
      "Lush century-old foliage shields the property from the outside world, yielding a quiet countryside ambiance in the heart of the national capital."
    ],
    architecturalNarrative:
      "Crafted with hand-dressed pink Dholpur and Agra red sandstone, the facade respects strict architectural conservation covenants while interior engineering incorporates geothermal earth-tube pre-cooling, solar radiant flooring, and earthquake-resistant sub-foundations.",
    materials: [
      "Dholpur Pink Sandstone & Agra Red Stone",
      "Antique Teak Columns & Handcrafted Moldings",
      "Makrana Pure White Marble Flooring",
      "Hand-Hammered Solid Bronze Door Hardware",
      "Cast Iron Veranda Balustrades"
    ],
    amenities: [
      {
        category: "Wellness & Leisure",
        items: [
          "25m Olympic-Length Heated Garden Pool with Classical Pavilion",
          "Private Tennis Court with Floodlit Championship Turf",
          "Zen Sculpture Pavilion designed by renowned Japanese artist",
          "Private Orangery & Organic Kitchen Herb Garden"
        ]
      },
      {
        category: "Security & Discretion",
        items: [
          "Z+ Category Security Compatible Guard House",
          "Perimeter Infrared Motion Array & 4m Masonry Boundary",
          "Private Subterranean Bunker with Emergency Telecom",
          "Separate Diplomatic Visitor Access Gate"
        ]
      },
      {
        category: "Architecture & Tech",
        items: [
          "Geothermal Earth Air Tunnel HVAC Pre-Cooling",
          "Central VRV VI Climate Control with Air Purifier 0.1 Micron",
          "Bespoke German Architectural Casement Windows",
          "Integrated Historic Rainwater Harvesting Stepwell"
        ]
      },
      {
        category: "Staff & Service",
        items: [
          "Two Standalone 2-Story Staff Cottages (Accommodates 12)",
          "Industrial Laundromat and Linen Care Facility",
          "Guardhouse with Armoury and Surveillance Hub",
          "Dedicated Estate Manager's Office Suite"
        ]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop",
        alt: "Amaltas Estate - Dholpur Stone Facade amidst Ancient Trees",
        caption: "Colonnaded classical facade nestled within 2.2 acres of private grounds",
        isHero: true
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop",
        alt: "Formal reception courtyard with fountains",
        caption: "Central sandstone courtyard reflecting classical symmetry"
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=90&w=2400&auto=format&fit=crop",
        alt: "Formal dining room with pale stone flooring and warm natural light",
        caption: "Formal dining hall with honed Makrana marble flooring and restored antique coffered ceilings"
      },
      {
        url: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2000&auto=format&fit=crop",
        alt: "Championship tennis court and lawn pavilion",
        caption: "Manicured estate grounds with private sports and leisure amenities"
      }
    ],
    floorPlans: [
      {
        level: "Ground Level — The State Rooms",
        title: "Colonnaded Salons & Banqueting",
        dimensions: "11,500 sq.ft covered",
        description:
          "Grand arrival portico, state banquet hall (30 seats), morning library, private study, 2 guest suites, catering wing, and verandas.",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 01 — Family Sanctuaries",
        title: "Primary Residences & Master Wings",
        dimensions: "6,500 sq.ft covered",
        description:
          "Five extensive en-suite family suites with dressing rooms, morning terrace gardens, private sitting gallery, and pantry.",
        imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop"
      }
    ],
    curatorNote:
      "A freehold parcel in Lutyens' Delhi is arguably the most secure and prestigious landholding in South Asia. Amaltas Estate offers generational legacy value.",
    yearBuilt: 2021
  },
  {
    id: "gara-alibaug-aura-mar",
    slug: "aura-mar-vista",
    title: "Aura Mar Vista",
    tagline: "Travertine and Ocean Horizons on the Mandwa Coast",
    architecturalStyle: "Minimalist Coastal Modernism",
    category: "Coastal Estate",
    status: "Available",
    featured: false,
    priceInrCrores: 52.0,
    priceUsdMillions: 6.25,
    location: {
      city: "Mandwa & Awas",
      neighborhood: "Mandwa Coastline",
      state: "Maharashtra",
      region: "Konkan Coast",
      coordinates: { lat: 18.7915, lng: 72.8712 },
      highlights: [
        "18 minutes by private speedboat from Gateway of India, Mumbai",
        "Direct private path to secluded white sand beach",
        "Elevated ridge offering panoramic sunset sea perspectives",
        "Private certified helicopter landing pad on site"
      ]
    },
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      builtAreaSqFt: 12000,
      plotAreaAcres: 1.4,
      carParks: 6,
      furnishingStatus: "Bespoke Furnished",
      facing: "Sea Facing",
      reraRegistration: "P52000029311 (Verified)"
    },
    description: [
      "Aura Mar Vista is an homage to Mediterranean-inspired coastal minimalism translated to the coconut groves of Alibaug.",
      "The compound is structured as a series of connected pavilions constructed in ivory travertine and pale microcement, opening entirely toward the Arabian Sea sunsets.",
      "Featuring a 28-metre cantilevered dark saltwater pool and an amphitheatre lawn overlooking the surf, this is Mumbai's premier weekend sanctuary for high-profile business families."
    ],
    architecturalNarrative:
      "Floor-to-ceiling glass pavilions pivot open on ball-bearing tracks, completely removing barriers between the internal living volumes and the coastal ocean breeze.",
    materials: [
      "Roman Silver Travertine",
      "Polished White Microcement Floors",
      "Accoya Sustainable Timber Louvers",
      "Cor-Ten Steel Architectural Planters",
      "Marine-Grade Stainless Hardware"
    ],
    amenities: [
      {
        category: "Wellness & Leisure",
        items: [
          "28m Saltwater Cantilevered Infinity Pool",
          "Private Beachfront Fire Pit Pavilion",
          "Yoga & Meditation Deck over Coastal Ridge",
          "Paddle Tennis Court with Ocean Backdrop"
        ]
      },
      {
        category: "Security & Discretion",
        items: [
          "Certified Private Helipad on Estate Grounds",
          "Discrete Double-Gate Coastal Entry Hub",
          "24/7 Security Patrol and CCTV Net",
          "Private Sea Gate with Wave-Resistant Barrier"
        ]
      },
      {
        category: "Architecture & Tech",
        items: [
          "Off-Grid Capable Solar Battery Infrastructure",
          "Desalination & Reverse Osmosis Water Plant",
          "Loxone Automated Ambient Lighting",
          "High-Efficiency Marine-Grade Air Conditioning"
        ]
      },
      {
        category: "Staff & Service",
        items: [
          "Independent Staff Compound (3 Bedrooms)",
          "Chef's Prep Kitchen & Seafood Cold Store",
          "Covered Golf Cart Transit Fleet",
          "Speedboat Maintenance & Boathouse Berth"
        ]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop",
        alt: "Aura Mar Vista - White Travertine Villa facing the Ocean",
        caption: "Minimalist travertine pavilion extending toward the Mandwa coastline",
        isHero: true
      },
      {
        url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop",
        alt: "Infinity pool at sunset overlooking sea",
        caption: "Saltwater infinity pool blending into the Arabian Sea horizon"
      },
      {
        url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2000&auto=format&fit=crop",
        alt: "Spacious minimalist salon with ocean views",
        caption: "Open-concept living room with seamless glass pocket doors"
      }
    ],
    floorPlans: [
      {
        level: "Ground Pavilion",
        title: "Living, Dining & Outdoor Verandas",
        dimensions: "7,500 sq.ft covered / 6,000 sq.ft pool deck",
        description:
          "Triple-aspect living salon, chef kitchen, indoor-outdoor dining, guest suite, helipad connection, and ocean deck.",
        imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Upper Suite Level",
        title: "Master Suites & Sunset Balconies",
        dimensions: "4,500 sq.ft covered",
        description:
          "Four sea-facing bedroom suites with deep private cedar pergolas, outdoor showers, and wellness lounge.",
        imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=800&auto=format&fit=crop"
      }
    ],
    curatorNote:
      "A short marine commute from South Mumbai makes this estate the ultimate luxury retreat for prominent leaders requiring tranquility and immediacy.",
    yearBuilt: 2024
  },
  {
    id: "gara-bengaluru-banyan",
    slug: "the-banyan-pavilion",
    title: "The Banyan Pavilion",
    tagline: "Biophilic Masterpiece Surrounded by Historic Greenery",
    architecturalStyle: "Biophilic Modern Architecture",
    category: "Luxury Villa",
    status: "Available",
    featured: false,
    priceInrCrores: 48.0,
    priceUsdMillions: 5.75,
    location: {
      city: "Bengaluru",
      neighborhood: "Sadashivnagar",
      state: "Karnataka",
      region: "South India",
      coordinates: { lat: 13.0068, lng: 77.5813 },
      highlights: [
        "Situated in Bengaluru's most traditional aristocratic enclave",
        "Preserved 90-year-old heritage Banyan tree as the architectural core",
        "Minutes from Bangalore Palace and Sankey Tank promenade",
        "Quiet tree-lined residential boulevard with zero commercial traffic"
      ]
    },
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      builtAreaSqFt: 9800,
      plotAreaSqFt: 14500,
      carParks: 5,
      furnishingStatus: "Bespoke Furnished",
      facing: "Forest Canopy",
      reraRegistration: "PRM/KA/RERA/1251/309 (Verified)"
    },
    description: [
      "The Banyan Pavilion represents a progressive dialogue between contemporary architecture and ancient nature in the garden city of Bengaluru.",
      "Engineered around an awe-inspiring heritage banyan tree, the residence features cantilevered glass volumes and slatted cedar louvers that project out into the foliage canopy.",
      "An internal triple-height rainforest courtyard with automated microclimate misting ensures year-round thermal comfort and natural birdsong inside the home."
    ],
    architecturalNarrative:
      "Constructed using exposed cast architectural concrete, locally quarried Sadahalli grey granite, and sustainably harvested plantation teak. Passive solar orientation and water cascades keep temperatures 4°C cooler than ambient city levels.",
    materials: [
      "Sadahalli Granite Plinths",
      "Off-Shutter Exposed Concrete",
      "Certified Plantation Teakwood",
      "Low-Iron Structural Glass Fins",
      "Corten Steel Landscaping Elements"
    ],
    amenities: [
      {
        category: "Wellness & Leisure",
        items: [
          "Internal Heated Glass Courtyard Swimming Pool",
          "Rooftop Zen Bonsai Garden & Star Gazing Terrace",
          "Private Temperature-Controlled Wine & Whiskey Cellar",
          "Acoustically Tuned Steinway Music Salon"
        ]
      },
      {
        category: "Security & Discretion",
        items: [
          "Discrete Dual-Gated Entry System",
          "Smart Biometric Facial Recognition Nodes",
          "Secured Underground Garage Gallery",
          "Integrated Anti-Intrusion Beam Fence"
        ]
      },
      {
        category: "Architecture & Tech",
        items: [
          "KNX Smart Home Automation & Environmental Sensors",
          "Rainwater Harvesting with 100,000L Cistern Storage",
          "Rooftop Solar Bifacial Array with Grid Feed",
          "Ultra-Quiet Geothermal Heat Exchange Chilling"
        ]
      },
      {
        category: "Staff & Service",
        items: [
          "2-Bedroom Separate Staff Living Quarter",
          "Catering Kitchen with Commercial Exhaust and Cold Room",
          "Private Security Outpost with Dedicated Restroom",
          "Covered Chauffeur Station"
        ]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop",
        alt: "The Banyan Pavilion - Concrete and Glass Residence within Greenery",
        caption: "Cantilevered glass decks hovering within the historic banyan canopy",
        isHero: true
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        alt: "Internal courtyard with water cascade and lush trees",
        caption: "Central biophilic courtyard bringing nature into the heart of the home"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop",
        alt: "Minimalist master bedroom suite overlooking treetops",
        caption: "Master sanctuary framed by ancient foliage"
      }
    ],
    floorPlans: [
      {
        level: "Ground Level",
        title: "Courtyard Living & Gardens",
        dimensions: "5,400 sq.ft covered",
        description:
          "Entry water garden, double-height living salon, dining pavilion, tea room, guest suite, chef kitchen, and garage.",
        imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 01",
        title: "Canopy Suites & Family Lounge",
        dimensions: "4,400 sq.ft covered",
        description:
          "Primary suite with cantilevered forest deck, three children's suites, library gallery, and outdoor yoga terrace.",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
      }
    ],
    curatorNote:
      "Sadashivnagar remains the definitive address for old-money families and tech visionaries alike in South India. A rare modern trophy residence.",
    yearBuilt: 2023
  },
  {
    id: "gara-kasauli-celestia",
    slug: "celestia-crest",
    title: "Celestia Crest",
    tagline: "Minimalist Alpine Glass Sanctuary in the Pine Ridges",
    architecturalStyle: "Contemporary Alpine Brutalism",
    category: "Alpine Retreat",
    status: "Under Offer",
    featured: false,
    priceInrCrores: 36.5,
    priceUsdMillions: 4.4,
    location: {
      city: "Kasauli Hills",
      neighborhood: "Upper Mall Ridge",
      state: "Himachal Pradesh",
      region: "Western Himalayas",
      coordinates: { lat: 30.9013, lng: 76.9649 },
      highlights: [
        "6,400 ft altitude offering crisp alpine pine air and snowline vistas",
        "65 mins from Chandigarh International Airport via Himalayan Expressway",
        "Surrounded by protected reserve pine forest with zero chance of encroachment",
        "Direct panoramic views towards the Dhauladhar snow peaks"
      ]
    },
    specs: {
      bedrooms: 4,
      bathrooms: 5,
      builtAreaSqFt: 8200,
      plotAreaAcres: 0.95,
      carParks: 4,
      furnishingStatus: "Bespoke Furnished",
      facing: "Panoramic Valley",
      reraRegistration: "HPRERA20220194 (Verified)"
    },
    description: [
      "Perched on a dramatic private spur in Kasauli, Celestia Crest is an audacious architectural expression of cantilevered glass and hand-dressed quartzite stone.",
      "The residence opens entirely toward the majestic Himalayan sunset valley, offering uninterrupted vistas of rolling pine slopes and shimmering plains below.",
      "Features a glass-enclosed heated cantilevered swimming pool, a Scandinavian cedar hot sauna, and three wood-burning basalt fireplaces."
    ],
    architecturalNarrative:
      "Built with local Himachal slate, charred Shou Sugi Ban cedar siding, and quadruple-glazed thermal argon glass to ensure exceptional thermal efficiency even during alpine winters.",
    materials: [
      "Local Hand-Chiseled Quartzite Stone",
      "Shou Sugi Ban Charred Japanese Cedar",
      "Swiss Air-Lux Thermal Glazing",
      "Alpine Pine Timber Beams",
      "Honed Dark Basalt Hearthstones"
    ],
    amenities: [
      {
        category: "Wellness & Leisure",
        items: [
          "Heated Glass-Enclosed Cantilevered Mountain Pool",
          "Panoramic Cedar Barrel Sauna with Himalayan Valley Views",
          "Three Wood-Burning Suspended Focus Fireplaces",
          "Underfloor Radiant Heating throughout all living areas"
        ]
      },
      {
        category: "Security & Discretion",
        items: [
          "Private Gated Mountain Spur Access Road",
          "Automated Heated Driveway with Snow-Melt System",
          "High-Resolution Thermal Camera Perimeter",
          "Secure Mountain-Facing Perimeter Decking"
        ]
      },
      {
        category: "Architecture & Tech",
        items: [
          "Triple-Glazed Argon-Filled High Altitude Glass",
          "Geothermal Heat Pump Central Heating",
          "Automated Backup Micro-Hydro & Battery Bank",
          "Starlink High-Speed Satellite Ground Station"
        ]
      },
      {
        category: "Staff & Service",
        items: [
          "Dedicated 2-Bedroom Caretaker & Chef Cottage",
          "Heated 4-Car Indoor Collector Garage",
          "Wine & Charcuterie Tasting Cellar",
          "Ski and Mountain Equipment Drying Room"
        ]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2000&auto=format&fit=crop",
        alt: "Celestia Crest - Cantilevered Alpine Glass Villa in Himalayan Pines",
        caption: "Minimalist stone and glass cantilever over the Himalayan valley",
        isHero: true
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
        alt: "Suspended fireplace with panoramic valley views",
        caption: "Fireplace salon with floor-to-ceiling alpine vistas"
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop",
        alt: "Heated mountain cantilever pool at dusk",
        caption: "Heated pool suspended above the pine canopy"
      }
    ],
    floorPlans: [
      {
        level: "Level 01 — Valley Horizon",
        title: "Grand Lounge, Fireplace & Decks",
        dimensions: "4,600 sq.ft covered / 3,000 sq.ft deck",
        description:
          "Suspended fireplace salon, dining room, open culinary island, heated pool pavilion, and guest suite.",
        imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 02 — Eagle's Roost",
        title: "Master Sanctuary & Observatory",
        dimensions: "3,600 sq.ft covered",
        description:
          "Primary suite with dual dressing salons, two secondary suites, cedar sauna, and stargazing telescope deck.",
        imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop"
      }
    ],
    curatorNote:
      "A transcendent Himalayan retreat that combines absolute seclusion with easy highway proximity to Chandigarh and New Delhi.",
    yearBuilt: 2024
  },
  {
    id: "gara-mumbai-sovereign",
    slug: "the-sovereign-triplex",
    title: "The Sovereign Triplex",
    tagline: "Ultra-Rare Sea-Facing Sky Villa on Malabar Hill",
    architecturalStyle: "Art Deco Modernist Resurgence",
    category: "Penthouse",
    status: "Private Treaty",
    featured: false,
    priceInrCrores: 195.0,
    priceUsdMillions: 23.4,
    location: {
      city: "Malabar Hill",
      neighborhood: "Walkeshwar & Malabar Hill",
      state: "Maharashtra",
      region: "South Mumbai",
      coordinates: { lat: 18.9548, lng: 72.7985 },
      highlights: [
        "Unobstructed views of Marine Drive Queen's Necklace and Back Bay",
        "Direct proximity to Governor's Estate and Hanging Gardens",
        "Heritage landmark street with maximum police protocol security",
        "Mumbai's most historically exclusive residential PIN code (400006)"
      ]
    },
    specs: {
      bedrooms: 6,
      bathrooms: 8,
      builtAreaSqFt: 13000,
      carParks: 10,
      furnishingStatus: "Bespoke Furnished",
      facing: "Sea Facing",
      reraRegistration: "P51900030491 (Verified)"
    },
    description: [
      "The Sovereign Triplex represents one of the most historically coveted real estate opportunities in India: a 13,000 sq.ft sky estate directly over the Queen's Necklace on Malabar Hill.",
      "The triplex commands uninterrupted views of the Arabian Sea and the glowing sweep of South Mumbai's crescent bay at night.",
      "Features private high-speed biometric elevators, a personal internal cantilevered glass staircase, and a 4,000 sq.ft bay-facing private terrace with infinity edge pool."
    ],
    architecturalNarrative:
      "Designed with an aesthetic of understated heritage opulence, pairing French polished macassar ebony with Italian Calacatta gold marble and fluted cast crystal lighting fixtures.",
    materials: [
      "Italian Calacatta Gold Marble",
      "Macassar Ebony Millwork",
      "Hand-Cast Murano Crystal Accents",
      "Brushed Platinum Hardware",
      "Schüco Structural Glazing"
    ],
    amenities: [
      {
        category: "Wellness & Leisure",
        items: [
          "Private Infinity Edge Pool Overlooking Marine Drive",
          "Private Cigar & Single Malt Tasting Salon",
          "Private Massage & Holistic Wellness Suite",
          "Temperature-Controlled Art Vault with Museum Humidity Control"
        ]
      },
      {
        category: "Security & Discretion",
        items: [
          "Dual Private High-Speed Elevators with Retinal Access",
          "Dedicated Armed Escort Waiting Anteroom",
          "Secure Communications Room with EMP Shielding",
          "Reinforced Vault Safe with Ballistic Rating"
        ]
      },
      {
        category: "Architecture & Tech",
        items: [
          "Acoustic Triple Glazing with Marine Salinity Coating",
          "Whole-Penthouse Pure Air HEPA-14 Micro-Climate",
          "Integrated Bang & Olufsen Bespoke Audio System",
          "Automated Sun-Tracking Glazing Dimming"
        ]
      },
      {
        category: "Staff & Service",
        items: [
          "Dedicated 4-Staff Residential Quarters & Mess",
          "Commercial Scullery & Industrial Dishwashing Wing",
          "Private Concierge Desk with Direct Valet Dispatch",
          "10 Reserved Basements Stalls with High-Speed EV Chargers"
        ]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop",
        alt: "The Sovereign Triplex - Skyline and Bay View",
        caption: "Marine Drive Queen's Necklace glowing below the sky villa terrace",
        isHero: true
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        alt: "Grand reception room with Calacatta marble",
        caption: "Bespoke formal salon with unobstructed ocean perspectives"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop",
        alt: "Master bedroom suite facing the sunset",
        caption: "Primary suite with dual master bathrooms and walk-in dressing galleries"
      }
    ],
    floorPlans: [
      {
        level: "Level 01 — Entertaining Grandeur",
        title: "Ballroom Salon & Private Dining",
        dimensions: "5,200 sq.ft covered",
        description:
          "Grand foyer, 24-seat dining gallery, formal salon, caterer kitchen, presentation bar, and guest suite.",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 02 — Family Sanctuary",
        title: "Master Suite & Private Suites",
        dimensions: "4,800 sq.ft covered",
        description:
          "Presidential master bedroom suite, four family bedrooms, family media lounge, and private study.",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 03 — The Sky Terrace",
        title: "Infinity Pool & Wellness Club",
        dimensions: "3,000 sq.ft covered + 4,000 sq.ft open terrace",
        description:
          "Private infinity pool, outdoor lounge, sauna, teppanyaki counter, and sunset viewing deck.",
        imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    curatorNote:
      "Malabar Hill remains India's most pedigree-conscious residential bastion. A triplex of this stature defines sovereign luxury.",
    yearBuilt: 2023
  },
  {
    id: "gara-hyderabad-glass-monolith",
    slug: "the-glass-monolith",
    title: "The Glass Monolith",
    tagline: "Sculptural Contemporary Villa in Jubilee Hills",
    architecturalStyle: "Sculptural Brutalism & Titanium Zinc",
    category: "Luxury Villa",
    status: "Available",
    featured: false,
    priceInrCrores: 78.0,
    priceUsdMillions: 9.35,
    location: {
      city: "Hyderabad",
      neighborhood: "Jubilee Hills, Road No. 36",
      state: "Telangana",
      region: "South-Central India",
      coordinates: { lat: 17.4325, lng: 78.4071 },
      highlights: [
        "Situated on the highest ridge of Jubilee Hills with city vistas",
        "Private 12-car subterranean collector showroom garage",
        "Direct access to Hyderabad's elite private clubs and corporate hubs",
        "Architecturally acclaimed by international design publications"
      ]
    },
    specs: {
      bedrooms: 5,
      bathrooms: 7,
      builtAreaSqFt: 15500,
      plotAreaSqFt: 18000,
      carParks: 12,
      furnishingStatus: "Bespoke Furnished",
      facing: "Panoramic Valley",
      reraRegistration: "P02500004921 (Verified)"
    },
    description: [
      "The Glass Monolith is a dramatic architectural tour-de-force that redefines luxury living in Hyderabad's premier enclave.",
      "A bold composition of cantilevered dark titanium zinc boxes and floor-to-ceiling glass pavilions that float above black granite water bodies.",
      "The residence features a subterranean contemporary art gallery, a 12-car museum garage with turntable, and a temperature-controlled glass wine corridor."
    ],
    architecturalNarrative:
      "Conceived by internationally renowned architects, the residence balances monumental stone geometry with delicate transparency. The cantilevered second level hovers 8 meters over the courtyard without visible support pillars.",
    materials: [
      "Anthracite Titanium Zinc Cladding",
      "Flamed Telangana Black Granite",
      "Low-Iron Optiwhite Architectural Glass",
      "Hand-Burnished Gunmetal Finishes",
      "Smoked Grey Oak Millwork"
    ],
    amenities: [
      {
        category: "Wellness & Leisure",
        items: [
          "25m Cantilevered Black Granite Reflection Lap Pool",
          "Subterranean Art Gallery & 12-Car Collector Showroom",
          "16-Seat Laser 4K Cinema with Acoustic Decoupling",
          "Rooftop Glass Cigar Pavilion with City Skyline Vistas"
        ]
      },
      {
        category: "Security & Discretion",
        items: [
          "Private Guard House with Blast-Resistant Glazing",
          "Underground Vehicle Screening Checkpoint",
          "Biometric Access throughout all private domains",
          "Perimeter Laser Intrusion Detection Network"
        ]
      },
      {
        category: "Architecture & Tech",
        items: [
          "Savant Whole-Home Integrated Automation",
          "Independent High-Efficiency Solar Microgrid",
          "Automated Kinetic Exterior Louver System for Solar Shading",
          "Hospital-Grade Clean-Air Mechanical System"
        ]
      },
      {
        category: "Staff & Service",
        items: [
          "Dedicated 3-Bedroom Staff Annex & Kitchen",
          "Professional Commercial Grade Cooking Suite",
          "Chauffeur Rest Suite with Showers and Lockers",
          "Separate Service Elevators & Loading Dock"
        ]
      }
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
        alt: "The Glass Monolith - Titanium Zinc and Glass Facade",
        caption: "Sculptural facade overlooking the illuminated courtyard pool",
        isHero: true
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop",
        alt: "Subterranean art gallery and collector car showroom",
        caption: "Gallery space accommodating 12 collector automobiles"
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2000&auto=format&fit=crop",
        alt: "Double height living salon with flamed black granite",
        caption: "Monumental living salon with seamless floor-to-ceiling glass"
      }
    ],
    floorPlans: [
      {
        level: "Level 00 — Subterranean Gallery",
        title: "Collector Car Showroom & Cinema",
        dimensions: "6,000 sq.ft covered",
        description:
          "12-car gallery with turntable, art vault, 16-seat cinema, wine corridor, and staff quarters.",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 01 — The Living Pavilion",
        title: "Reception, Pool & Courtyard",
        dimensions: "5,500 sq.ft covered / 4,000 sq.ft terrace",
        description:
          "Double-height reception salon, formal dining, presentation kitchen, guest suite, and 25m pool.",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
      },
      {
        level: "Level 02 — Private Suites",
        title: "Master Sanctuary & Suites",
        dimensions: "4,000 sq.ft covered",
        description:
          "Primary master suite with cantilevered city deck, three en-suite bedrooms, and private family library.",
        imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop"
      }
    ],
    curatorNote:
      "A landmark architectural statement in Jubilee Hills that sets a brand new benchmark for high-contemporary residential design in Hyderabad.",
    yearBuilt: 2024
  }
];

export const CATEGORIES: { name: string; slug: string; count: number; image: string; description: string }[] = [
  {
    name: "Luxury Villas",
    slug: "luxury-villa",
    count: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description: "Architectural residences harmonizing raw materiality with private acreage."
  },
  {
    name: "Sky Mansions & Penthouses",
    slug: "sky-mansion",
    count: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    description: "Vertical estates soaring above Mumbai's marine horizons with 360-degree vistas."
  },
  {
    name: "Coastal Estates",
    slug: "coastal-estate",
    count: 1,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    description: "Oceanfront sanctuaries with private moorings and direct helipad access."
  },
  {
    name: "Heritage Residences",
    slug: "heritage-residence",
    count: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    description: "Timeless classical provenance in India's most guarded diplomatic zones."
  },
  {
    name: "Alpine Retreats",
    slug: "alpine-retreat",
    count: 1,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
    description: "Minimalist glass and stone aeries perched among Himalayan pine ridges."
  }
];

export const CURATION_PRINCIPLES = [
  {
    num: "01",
    title: "Architectural Integrity",
    description:
      "We exclusively represent residences exhibiting visionary spatial proportion, structural honesty, and uncompromising architectural pedigree."
  },
  {
    num: "02",
    title: "Unrepeatable Provenance",
    description:
      "Every property in our portfolio commands a location that cannot be duplicated—from prime Lutyens' avenues to Goa's protected riverfronts."
  },
  {
    num: "03",
    title: "Material Mastery",
    description:
      "From hand-chiseled Dholpur sandstone to board-formed concrete and bespoke Italian marble, we champion craft that patinas with timeless grace."
  },
  {
    num: "04",
    title: "Absolute Discretion",
    description:
      "Serving high-net-worth families, institutional leaders, and sovereign offices with non-negotiable confidentiality and bespoke private treaty management."
  }
];
