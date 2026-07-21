import { SITE_CONFIG } from "@/constants/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WAFloatingButton } from "@/components/ui";
import {
  HeroFrameBackground,
  Hero,
  Promo,
  Menu,
  Location,
  Facility,
  Advantage,
  AboutUs,
  FAQ,
  CTA,
  Branches,
  // MediaCoverage,
} from "@/components/sections";

/**
 * MAIN PAGE
 * ─────────────────────────────────────────────────────────────────
 * One-page landing page.
 */
export default function HomePage() {
  return (
    <main className="relative bg-brand-bg min-h-screen overflow-x-hidden">
      <HeroFrameBackground />
      <Navbar />
      <Hero />
      <Promo />
      <Menu />
      {/* <MediaCoverage /> */}
      <Facility />
      <Advantage />
      <Location />
      <Branches />
      <AboutUs />
      <FAQ />
      <CTA />

      {/* ── Footer ──────────────────────────────────────────────── */}
      <Footer />

      {/* ── Floating WhatsApp ────────────────────────────────────── */}
      <WAFloatingButton />

      {/* ── Structured Data Organization ────────────────────────────── */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_CONFIG.name,
            image: SITE_CONFIG.url + "/karindo.png",
            url: SITE_CONFIG.url,
            telephone: "+622100000000",
            logo: SITE_CONFIG.url + "/karindo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Ruko Celebration Grand Wisata Bekasi, Lambangsari, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510",
              addressLocality: "Bekasi",
              addressRegion: "Jawa Barat",
              postalCode: "17510",
              addressCountry: "ID",
            },
            sameAs: [
              "https://www.instagram.com/karindo.led/",
              "https://www.facebook.com/profile.php?id=100011580812335",
            ],
          }),
        }}
      />
    </main>
  );
}
