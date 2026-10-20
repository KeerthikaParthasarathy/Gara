# GARA — Ultra-Luxury Real Estate Advisory

> **"The Art of Exceptional Living. Exceptional Architecture. Distinctive Living."**

GARA is a production-grade digital platform for an ultra-luxury real estate agency serving the Indian prime and super-prime property market. Built with Next.js 15, TypeScript, Tailwind CSS, Three.js, and App Router.

---

## 1. Visual Design System

* **Main Background**: Obsidian Black (`#090909`)
* **Secondary Background**: Deep Charcoal (`#141414`)
* **Elevated Surfaces**: Graphite (`#1D1D1D`)
* **Primary Accent**: Champagne Gold (`#C6A76A`)
* **Light Gold**: Soft Champagne (`#E1CC9B`)
* **Primary Text**: Warm Ivory (`#F4F0E8`)
* **Secondary Text**: Muted Stone (`#A7A39B`)
* **Hairline Borders**: Dark Graphite (`#303030`)
* **Typography Pairing**:
  * Headings & Body: `Manrope` (Clean, geometric, modern)
  * Editorial Accents: `Cormorant Garamond` (Classic luxury serif)
  * Brand Monogram & Wordmark: `Cinzel` (Roman architectural capital proportions)

---

## 2. Key Pages & Routes

* **`/` (Homepage)**:
  * **Interactive 3D Architectural Hero**: Modernist cantilevered villa with reflection pool, ambient illumination, pointer parallax dampening, dynamic **Twilight / Golden Hour** atmosphere shift controls, and reduced-motion static fallback.
  * **Section 3 (The GARA Collection)**: Asymmetrical editorial showcase featuring primary featured residence and supporting companion villas.
  * **Section 4 (Archetypes of Living)**: Luxury Villas, Sky Mansions & Penthouses, Coastal Estates, Heritage Residences, Alpine Retreats.
  * **Section 5 (Brand Philosophy)**: Four core curation principles (Architectural Integrity, Unrepeatable Provenance, Material Mastery, Absolute Discretion).
  * **Section 6 (Architectural Spotlight)**: Full-bleed visual study in spatial mastery (Lutyens' Delhi Amaltas Estate).
  * **Section 7 (Developer Partnerships)**: Institutional representation criteria and collaboration terms.
  * **Section 8 (Final Enquiry)**: Private client acquisition advisory transmission form.
  * **Section 9 (Footer)**: Regional hubs (Mumbai, New Delhi, Goa, Bengaluru), RERA disclosures, newsletter dispatch.

* **`/properties` (Property Catalogue)**:
  * Full real-time search across architectural style, neighborhood, and city.
  * Multi-dimensional filtering: Location, Archetype, Valuation Tier (Under ₹50 Cr, ₹50-100 Cr, ₹100+ Cr), Bedroom count, and Private Shortlist view.
  * Dynamic sorting (Curated Priority, Price Low/High, Built Area).
  * View toggle (Editorial 3-Column Grid vs Detailed List view).
  * Active filter chips with instant reset.

* **`/properties/[slug]` (Property Detail Dossiers)**:
  * Pre-rendered static pages with `generateStaticParams()` for high performance.
  * Fullscreen Lightbox image gallery with keyboard arrow/escape controls and thumbnail navigation.
  * Architectural overview, spatial conception, and passive engineering notes.
  * Materiality breakdown (Travertine, Basalt, Teak, Reynaers glazing).
  * Categorized confirmed amenities (Wellness, Security, Architecture & Tech, Staff).
  * Interactive Floor Plan Viewer with level switcher, zoom toggle, and PDF export preview.
  * Geographic terroir and transit highlights.
  * Indian Ultra-Luxury Mortgage & State Stamp Duty Estimator (Maharashtra, Goa, Delhi NCR, Karnataka).
  * Direct WhatsApp Advisor link and Private Viewing scheduling flow.
  * Related curated residences.

* **`/about`**:
  * The GARA Manifesto, curation protocol, and regional advisory desks across India.

* **`/partnerships`**:
  * Master developer representation protocol, international NRI outreach benefits, and project review submission form.

* **`/contact`**:
  * Regional headquarters (BKC Mumbai, Golf Links New Delhi, Assagao Goa, Sadashivnagar Bengaluru) and direct advisory lines.

* **`/privacy` & `/terms`**:
  * DPDP Act-compliant privacy policy and legal representation terms.

* **`/sitemap.xml` & `/robots.txt`**:
  * Dynamic SEO metadata and search engine indexing.

---

## 3. Technology Stack

* **Framework**: Next.js 15 (App Router, Server Components, SSG)
* **Language**: TypeScript 5.8
* **Styling**: Tailwind CSS with custom luxury tokens
* **3D Visuals**: Three.js (WebGL with ACES Filmic tone mapping, ambient depth, dynamic lighting)
* **Icons**: Lucide React
* **State Management**: React Context (`AppContext`) with `localStorage` persistence for private shortlists and currency toggling

---

## 4. Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start -p 3000
```

---

## 5. Deployment on Vercel

The application is structured for zero-configuration deployment to [Vercel](https://vercel.com):

1. Push repository to GitHub/GitLab.
2. Import project into Vercel.
3. Framework Preset: Next.js.
4. Build command: `npm run build`.
5. Output directory: `.next`.
