import type {
  HeroContent,
  PromoContent,
  MenuContent,
  BranchContent,
  LocationContent,
  FacilityContent,
  AdvantageContent,
  AboutContent,
  FAQContent,
  CTAContent,
  FooterContent,
} from "@/types";

export const HERO_CONTENT: HeroContent = {
  eyebrow:     "All In One Rental & Sales Solution",
  headline:    "Karindo LED",
  subheadline: "Solusi LED Display & Video Processor Kelas Dunia",
  description: "Penyedia solusi tampilan LED berkualitas tinggi dan berkinerja terbaik untuk aplikasi dalam ruangan (indoor), luar ruangan (outdoor), serta persewaan event skala nasional.",
  badge:       "15+ Tahun Pengalaman",
  cta: {
    primary:   "Hubungi WhatsApp Sales",
    secondary: "Lihat Katalog Produk",
  },
  totalFrames: 101,
  frameDir:    "/frame-karindo-parallax",
  frameName:   "frame_",
  slides: [
    {
      id: "slide-prep",
      headline: "Hadirkan Setiap Momen dengan Solusi LED Display Profesional",
      description: "Ciptakan pengalaman visual yang memukau dengan solusi LED display yang andal untuk berbagai kebutuhan bisnis dan acara."
    },
    {
      id: "slide-install",
      headline: "Persiapan Peralatan yang Terencana",
      description: "Setiap proyek dimulai dengan persiapan LED display yang profesional, memastikan seluruh komponen telah tertata, diperiksa, dan siap dipasang secara optimal."
    },
    {
      id: "slide-ready",
      headline: "Instalasi Profesional dan Presisi",
      description: "Tim teknisi berpengalaman kami memastikan setiap pemasangan LED display dilakukan dengan presisi, mengubah panggung kosong menjadi pengalaman visual yang seamless dan berkesan."
    },
    {
      id: "slide-final",
      headline: "Siap Menghadirkan Tampilan Terbaik",
      description: "Setelah instalasi selesai dan seluruh pengujian dilakukan, LED display siap beroperasi untuk menghadirkan visual berkualitas tinggi dalam setiap acara."
    }
  ]
};

// ── PROMO ────────────────────────────────────────────────────────
export const PROMO_CONTENT: PromoContent = {
  eyebrow: "Solusi & Layanan Utama",
  headline: "Layanan Terintegrasi Karindo LED",
  subheadline:
    "Kami menawarkan ekosistem layanan lengkap dari penjualan produk berkualitas tinggi, persewaan event besar, hingga servis center resmi.",
  note: "*Seluruh produk Karindo LED didukung garansi resmi 1 tahun dan layanan unit pengganti (replacement unit) selama masa perbaikan.",
  groups: [
    {
      id: "sales-rental",
      title: "Sales & Rental LED Display",
      items: [
        "LED Display berkualitas tinggi untuk aplikasi indoor, outdoor, dan rental cabinet",
        "Menggunakan material premium Die Cast Aluminum dan desain baru anti-collision plate",
        "Dipercaya mendukung event besar seperti Java Jazz, DWP, hingga TikTok SEA Growth Summit",
        "Instalasi panggung super cepat dengan quick lock upgrade dan handling yang ergonomis",
      ],
    },
    {
      id: "rental-network",
      title: "Karindo Rental Network",
      items: [
        "Jaringan khusus yang dibentuk Karindo untuk membantu memasarkan produk milik mitra rental",
        "Sebaran anggota meliputi Jakarta, Bandung, Palembang, Jogja, Solo, Surabaya, Bali, Balikpapan, dan Jambi",
        "Kolaborasi sinergis antar member untuk kebutuhan sewa layar LED skala besar di berbagai kota",
        "Membuka pendaftaran member bagi pelaku bisnis rental LED mandiri untuk bertumbuh bersama",
      ],
    },
    {
      id: "service-center",
      title: "Service & After Sales Center",
      items: [
        "Garansi resmi 1 tahun sejak barang tiba untuk menjamin kenyamanan operasional pembeli",
        "Pemberian replacement unit (unit pengganti sementara) selama unit Anda dalam masa servis",
        "Pelatihan (training) gratis penggunaan hardware dan software langsung dari tim ahli Karindo",
        "Solusi perbaikan terpercaya untuk LED, LCD, Video Processor, dan aksesori panggung kelistrikan",
      ],
    },
  ],
};

// ── MENU (SHOP / CATALOG) ────────────────────────────────────────
export const MENU_CONTENT: MenuContent = {
  eyebrow: "Katalog Produk",
  headline: "Solusi Display Pilihan",
  subheadline:
    "Rangkaian solusi tampilan LED dan LCD premium berkualitas tinggi untuk menyukseskan promosi bisnis dan event Anda.",
  categories: [
    {
      id: "lcd-display",
      name: "LCD Display",
      items: [
        {
          id: "standing-floor",
          name: "Standing Floor",
          price: "",
          description:
            "Layar promosi digital berdiri (Kiosk Box) beresolusi tinggi, ideal untuk periklanan interaktif di pameran, mall, dan lobby kantor.",
          image: "/products/product-1.webp",
          tag: "Digital Signage",
        },
        {
          id: "interactive-whiteboard",
          name: "Interactive Whiteboard",
          price: "",
          description:
            "Smartboard interaktif 4K dengan Intel i7, RAM 32GB, dan dual OS. Pilihan terbaik untuk kolaborasi rapat cerdas dan ruang kelas.",
          image: "/products/product-2.webp",
          tag: "KMI Smartboard",
        },
        {
          id: "smart-tv",
          name: "Smart TV",
          price: "",
          description:
            "Layar TV komersial profesional dengan fitur smart platform terintegrasi untuk kebutuhan display menu, monitoring, maupun presentasi.",
          image: "/products/product-3.webp",
          tag: "Smart TV",
        },
        {
          id: "video-wall",
          name: "Video Wall",
          price: "",
          description:
            "Splicing display multi-screen dengan bezel ultra-tipis untuk menghasilkan visual video wall raksasa yang seamless dan dramatis.",
          image: "/products/product-4.webp",
          tag: "Video Wall",
        },
      ],
    },
    {
      id: "led-display",
      name: "LED Display",
      items: [
        {
          id: "led-poster",
          name: "LED Poster",
          price: "",
          description:
            "LED Poster ramping dan portable dengan kemudahan setting software, andalan praktis untuk promosi visual dinamis yang fleksibel.",
          image: "/products/product-5.webp",
          tag: "LED Poster",
        },
        {
          id: "led-transparent",
          name: "LED Transparent",
          price: "",
          description:
            "Teknologi layar LED transparan estetik untuk kaca gedung atau showroom, memberikan efek visual melayang yang futuristik.",
          image: "/products/product-6.webp",
          tag: "Special LED",
        },
        {
          id: "led-outdoor",
          name: "LED Outdoor",
          price: "",
          description:
            "Cabinet display outdoor tangguh dengan tingkat kecerahan tinggi (high brightness) dan fitur waterproof untuk panggung luar ruangan.",
          image: "/products/product-7.webp",
          tag: "Outdoor LED",
        },
        {
          id: "led-indoor",
          name: "LED Indoor",
          price: "",
          description:
            "Cabinet display indoor dengan pixel pitch ultra rapat untuk ketajaman gambar maksimal, contrast ratio tinggi, dan operasional senyap.",
          image: "/products/product-8.webp",
          tag: "Indoor LED",
        },
      ],
    },
  ],
};

// ── BRANCHES ─────────────────────────────────────────────────────
export const BRANCHES_CONTENT: BranchContent = {
  eyebrow: "Kantor Cabang",
  headline: "Jangkauan Operasional Regional",
  subheadline:
    "Karindo LED memiliki kantor regional utama yang siap melayani kebutuhan multimedia di wilayah barat dan tengah Indonesia.",
  branches: [
    {
      id: "br-yogyakarta",
      name: "Karindo Mitra Yogyakarta",
      address:
        "Jl. Elang Jawa No.1 Malangrejo, Wedomartani, Ngemplak, Sleman, Yogyakarta",
      phone: "+62 811-1223-402",
      hours:
        "10.00 – 18.00 (Senin - Jumat), 08.00 - 18.00 (Sabtu), 09.00 - 17.00 (Minggu)",
    },
    {
      id: "br-bali",
      name: "Karindo Mitra Bali",
      address:
        "Jalan Uluwatu 100x, banjar kelan abian, kelan, Tuban, Kec. Kuta, Kabupaten Badung, Bali 80361",
      phone: "+62 812-8126-391",
      hours:
        "10.00 – 18.00 (Senin - Jumat), 08.00 - 18.00 (Sabtu), 09.00 - 17.00 (Minggu)",
    },
    {
      id: "br-surabaya",
      name: "Karindo Mitra Surabaya",
      address:
        "Ruko Rungkut Megah Raya, 27 Kedung Baruk Kec Blk Q, Kedung Baruk, Kec. Rungkut, Surabaya, Jawa Timur 60246",
      phone: "+62 811-1285-535",
      hours:
        "10.00 – 18.00 (Senin - Jumat), 08.00 - 18.00 (Sabtu), 09.00 - 17.00 (Minggu)",
    },
  ],
};

// ── LOCATION ─────────────────────────────────────────────────────
export const LOCATION_CONTENT: LocationContent = {
  eyebrow: "Kantor Pusat",
  headline: "Head Office Karindo LED",
  subheadline: "PT Karindo Mitra Internasional",
  description:
    "Berpusat di Grand Wisata Bekasi, kantor pusat kami mengoordinasikan seluruh distribusi penjualan, jaringan rental nasional, operasional import service, manajemen alkes, dan layanan perbaikan service center terpadu guna mewujudkan pelayanan multimedia visual nomor satu di Indonesia.",
  address:
    "Ruko Celebration Grand Wisata Bekasi, Lambangsari, Kec. Tambun Sel., Kabupaten Bekasi, Jawa Barat 17510, Bekasi 17510, Jawa Barat",
  phone: "+62 21-82623313 (Kantor) / +62 811-1161-2238 (Sales)",
  hours: {
    "Senin - Jumat": "10.00 – 18.00",
    Sabtu: "08.00 – 18.00",
    Minggu: "09.00 – 17.00",
  },
};

// ── FACILITY ─────────────────────────────────────────────────────
export const FACILITY_CONTENT: FacilityContent = {
  eyebrow: "Keunggulan & Kualitas",
  headline: "Mengapa Memilih Karindo LED?",
  subheadline:
    "Setiap produk dan sewa kami diproses secara profesional untuk menjamin kepuasan visual tertinggi di panggung acara Anda.",
  items: [
    {
      id: "after-sales",
      label: "After Sales & Garansi",
      description:
        "Garansi servis resmi 1 tahun untuk setiap produk, ditambah unit pengganti sementara agar operasional Anda tidak terganggu.",
      icon: "award",
    },
    {
      id: "durability",
      label: "Quality & Durability",
      description:
        "Cabinet Die-Cast Aluminum tangguh dengan fitur anti-collision plate yang mengurangi risiko kerusakan lampu LED panggung.",
      icon: "shield",
    },
    {
      id: "free-training",
      label: "Gratis Training Ahli",
      description:
        "Tim ahli kami siap melatih staf internal Anda langsung di lokasi untuk pengoperasian software & hardware secara mandiri.",
      icon: "users",
    },
    {
      id: "import-service",
      label: "Layanan Import Service",
      description:
        "Solusi impor suku cadang dan spare part multimedia terlengkap langsung dari produsen terkemuka secara resmi.",
      icon: "building",
    },
    {
      id: "brand-rep",
      label: "Representasi Resmi",
      description:
        "Partner perwakilan resmi Lightlink LED di Indonesia, serta distributor resmi video processor Novastar dan VD WALL.",
      icon: "shield",
    },
    {
      id: "virtual-event",
      label: "Virtual Event & Alkes",
      description:
        "Melayani solusi visual event virtual interaktif serta diversifikasi bisnis KMI Alkes berstandar medis.",
      icon: "activity",
    },
  ],
};

// ── ADVANTAGE ────────────────────────────────────────────────────
export const ADVANTAGE_CONTENT: AdvantageContent = {
  eyebrow: "Kredibilitas Kami",
  headline: "Penyedia Solusi Visual Terpercaya",
  subheadline:
    "Didukung pengalaman belasan tahun dan jaringan member rental terbesar di Indonesia untuk mewujudkan kesuksesan event berskala nasional.",
  items: [
    {
      id: "adv-exp",
      number: "01",
      title: "15+ Tahun Pengalaman",
      description:
        "Para pendiri kami telah berpengalaman lebih dari 15 tahun di bidang multimedia layar LED sejak sebelum PT didirikan tahun 2015.",
    },
    {
      id: "adv-rental",
      number: "02",
      title: "All In One Rental Solution",
      description:
        "Melayani sewa kabinet LED, rigging, level stage, power box, hingga pelindung kabel dalam satu pintu pemesanan yang praktis.",
    },
    {
      id: "adv-network",
      number: "03",
      title: "Karindo Rental Network",
      description:
        "Jaringan khusus yang membantu menyewakan produk LED milik member independen di puluhan kota besar di Indonesia.",
    },
    {
      id: "adv-cases",
      number: "04",
      title: "Event Skala Nasional",
      description:
        "Dipercaya oleh ratusan brand & event besar nasional seperti TikTok SEA Growth Summit, DWP, Java Jazz, dan Apel Kasatwil Polri.",
    },
  ],
};

// ── ABOUT ────────────────────────────────────────────────────────
export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "Tentang Kami",
  headline: "Karindo LED",
  subheadline: "PT Karindo Mitra Internasional — Layanan Visual Terdepan",
  description:
    "Didirikan pada tahun 2015 oleh Hamzah Junaid, PT Karindo Mitra Internasional (Karindo LED) hadir sebagai pemimpin solusi visual digital di Indonesia. Kami memproduksi dan memasarkan produk LED berkualitas tinggi, tahan lama, mudah dioperasikan, dan berharga terbaik di kelasnya. Kami merupakan representasi resmi produsen LED terkenal asal China, Lightlink LED, serta distributor resmi video processor VD WALL & Novastar. Dengan visi menjadi perusahaan multimedia terkemuka dan profesional, kami konsisten membangun ekosistem visual premium di tanah air.",
  stats: [
    { id: "stat-exp", value: "15+", label: "Tahun Pengalaman" },
    { id: "stat-established", value: "2015", label: "Tahun Berdiri PT" },
    { id: "stat-clients", value: "100+", label: "Brand & Event Nasional" },
    { id: "stat-network", value: "9+", label: "Kota Rental Network" },
  ],
};

// ── FAQ ──────────────────────────────────────────────────────────
export const FAQ_CONTENT: FAQContent = {
  eyebrow: "FAQ",
  headline: "Pertanyaan Umum",
  items: [
    {
      id: "faq-warranty",
      question: "Apakah setiap pembelian produk Karindo LED memiliki garansi?",
      answer:
        "Ya, Karindo LED memberikan garansi servis resmi selama 1 tahun. Selama masa perbaikan unit, kami juga menyediakan replacement unit (unit pengganti sementara) agar proyek atau bisnis Anda tetap dapat berjalan lancar.",
    },
    {
      id: "faq-training",
      question:
        "Apakah kami akan dibantu saat pertama kali menggunakan produk Karindo?",
      answer:
        "Tentu saja. Untuk setiap pembelian unit baru seperti LED Display maupun KMI Smartboard, tim teknisi ahli Karindo LED akan datang langsung untuk memberikan pelatihan (training) penggunaan software dan hardware secara gratis.",
    },
    {
      id: "faq-network",
      question: "Apa itu Karindo Rental Network dan bagaimana cara bergabung?",
      answer:
        "Karindo Rental Network adalah jaringan yang dibentuk oleh PT Karindo Mitra Internasional beranggotakan para pengusaha persewaan LED independen di berbagai daerah. Jaringan ini membantu para mitra memasarkan dan menyewakan produk LED mereka secara sinergis.",
    },
    {
      id: "faq-smartboard",
      question: "Apakah KMI Smartboard kompatibel dengan wall mount?",
      answer:
        "Sangat kompatibel. KMI Smartboard dirancang universal sehingga cocok dipasang pada berbagai jenis bracket TV di pasaran, baik stand beroda maupun bracket yang ditempel langsung ke dinding (wall-mounted).",
    },
    {
      id: "faq-branches",
      question: "Di mana saja kantor cabang resmi Karindo LED berada?",
      answer:
        "Kami memiliki 3 kantor regional yang dikelola langsung: Karindo Mitra Jakarta (Grand Wisata Bekasi), Karindo Mitra Yogyakarta (Sleman, DIY), dan Karindo Mitra Bali (Kuta, Bali). Ketiganya melayani sales, rental, dan after-sales support.",
    },
  ],
};

// ── CTA ──────────────────────────────────────────────────────────
export const CTA_CONTENT: CTAContent = {
  eyebrow: "Siap Berkolaborasi?",
  headline: "All In One Rental Solution",
  subheadline:
    "Hubungi sales kami sekarang untuk konsultasi kebutuhan LED Display, Video Processor, Smartboard, atau mendaftar sebagai member Karindo Rental Network.",
  cta: {
    primary: "Hubungi WhatsApp Resmi",
    secondary: "Gabung Rental Network",
  },
};

// ── FOOTER ───────────────────────────────────────────────────────
export const FOOTER_CONTENT: FooterContent = {
  tagline:
    "Penyedia solusi LED Display dan Video Processor berstandar dunia. Partner resmi Lightlink LED, VD WALL, dan Novastar di Indonesia.",
  copyright: `Copyright 2026 © PT Karindo Mitra Internasional. All rights reserved.`,
  links: [
    { label: "Produk", href: "#menu" },
    { label: "Layanan", href: "#promo" },
    { label: "Fasilitas", href: "#facility" },
    { label: "Media", href: "#media" },
    { label: "Cabang", href: "#branches" },
    { label: "Lokasi HQ", href: "#location" },
    { label: "FAQ", href: "#faq" },
  ],
};
