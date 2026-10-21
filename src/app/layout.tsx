import type { Metadata, Viewport } from "next";
import { Manrope, Cormorant_Garamond, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlobalModal } from "@/components/forms/GlobalModal";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090909",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "GARA — Ultra-Luxury Real Estate | India",
  description:
    "The Art of Exceptional Living. GARA curates an unrepeatable portfolio of architectural villas, sky penthouses, and private coastal estates across India.",
  keywords: [
    "Luxury real estate India",
    "Ultra luxury villas Goa",
    "Worli penthouses Mumbai",
    "Lutyens Delhi bungalows",
    "Alibaug coastal estates",
    "GARA real estate",
  ],
  authors: [{ name: "GARA Real Estate Advisory" }],
  openGraph: {
    title: "GARA — Ultra-Luxury Real Estate | The Art of Exceptional Living",
    description:
      "Exclusive representation of India's most architecturally significant residences. Confidential advisory for collectors and family offices.",
    url: "https://gara-luxury.vercel.app",
    siteName: "GARA",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "GARA — Ultra-Luxury Real Estate India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GARA — Ultra-Luxury Real Estate",
    description: "Exceptional Architecture. Distinctive Living.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cormorant.variable} ${cinzel.variable} ${playfair.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-[#090909] font-sans text-[#F4F0E8] selection:bg-gold selection:text-obsidian flex flex-col">
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover filter brightness-[0.87] contrast-[1.08] opacity-38"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260815_030633_1712fc71-4979-4e14-98f9-9f95702ab3da.mp4"
          />
          <div className="absolute inset-0 bg-[#090909]/68 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(198,167,106,0.05)_0,transparent_100%)]" />
        </div>
        <AppProvider>
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <GlobalModal />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
