/**
 * SITE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────
 * Ganti nilai di sini untuk mengkustomisasi branding per client.
 * Semua section mengambil data dari file ini — tidak ada hardcode.
 */

export const SITE_CONFIG = {
  /** Nama proyek / perusahaan */
  name: "Karindo LED",

  /** Tagline singkat */
  tagline: "All In One Rental Solution",

  /** Description untuk SEO */
  description:
    "Karindo LED — PT Karindo Mitra Internasional. Penyedia solusi tampilan LED Display dan Video Processor berstandar dunia baik penjualan (sales) maupun penyewaan (rental).",

  /** URL canonical */
  url: "https://karindoled.co.id",

  /** Path logo */
  logo: "/karindo.png",

  /** Nomor WhatsApp (format internasional, tanpa +) */
  whatsapp: {
    number: "628111612238",
    message:
      "Halo Karindo LED, saya tertarik dengan produk dan solusi LED Display atau Video Processor.",
  },

  /** Social media */
  social: {
    instagram: "https://www.instagram.com/karindo.led/",
    facebook: "https://www.facebook.com/profile.php?id=100011580812335",
    youtube: "https://www.youtube.com/results?search_query=Karindo+LED",
    tiktok: "https://www.tiktok.com/@karindo.led",
  },

  /** Google Maps Embed URL (Grand Wisata Bekasi) */
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.848739321622!2d107.04060167453201!3d-6.283606161505018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698f6f749bcce9%3A0xb54e7359294bb1c7!2sKarindo%20LED!5e0!3m2!1sid!2sid!4v1783658701350!5m2!1sid!2sid",

  /** Tahun untuk copyright */
  year: new Date().getFullYear(),
} as const;

/** WhatsApp URL builder */
export const getWhatsAppUrl = (message?: string) => {
  const text = encodeURIComponent(message ?? SITE_CONFIG.whatsapp.message);
  return `https://wa.me/${SITE_CONFIG.whatsapp.number}?text=${text}`;
};
