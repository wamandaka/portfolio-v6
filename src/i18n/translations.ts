export type Language = "en" | "id";

/** A string available in every supported language. */
export type Localized = Record<Language, string>;

const en = {
  meta: {
    title: "Waman Daka Wardani | Frontend Engineer — React, Next.js & TypeScript",
    description:
      "Waman Daka Wardani is a Frontend Engineer focused on React, Next.js, and TypeScript. Available for employment and freelance web development projects.",
  },
  nav: {
    label: "Primary",
    work: "Work",
    about: "About",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skip: "Skip to content",
    language: "Language",
  },
  hero: {
    eyebrow: "Frontend Engineer · Jakarta, Indonesia",
    headline: "I build thoughtful digital experiences.",
    description:
      "I'm a Frontend Engineer focused on React, Next.js, and TypeScript. I turn ideas and requirements into clean, responsive, and maintainable web interfaces.",
    primaryCta: "Explore my work",
    secondaryCta: "Have a project in mind? Let's talk",
    profiles: "Profiles",
    imageAlt: "Illustrated portrait of Waman Daka Wardani",
  },
  work: {
    eyebrow: "Selected work",
    title: "Projects I'm proud to share.",
    intro: "A few public projects built with React and modern tooling.",
    demo: "Live demo",
    source: "Source",
    other: "Also worked on",
    privateLabel: "Private project",
    currentLabel: "Current project",
    since: "Since",
    present: "present",
    clientLabel: "Client",
    viaLabel: "via",
    privateNote: "Internal system — no public demo available.",
  },
  services: {
    eyebrow: "What I do",
    title: "Interfaces that are fast to use and easy to maintain.",
    items: [
      {
        title: "Frontend development",
        description:
          "Component-driven interfaces in React, Next.js, and TypeScript, built to scale with your product.",
      },
      {
        title: "Responsive websites",
        description:
          "Layouts that feel considered on every screen, from small phones to wide desktops, with accessibility in mind.",
      },
      {
        title: "API integration",
        description:
          "Connecting interfaces to REST services with solid data fetching, validation, and error handling.",
      },
      {
        title: "Business websites",
        description:
          "Clear, credible websites for small businesses and teams that need an online presence.",
      },
    ],
  },
  about: {
    eyebrow: "About & experience",
    title: "Clean interfaces, clear communication.",
    paragraphs: [
      "I'm a Frontend Engineer based in Jakarta. I work with React, Next.js, and TypeScript, and care about readable code, responsive layouts, and interfaces people can actually use.",
      "I've worked on enterprise web applications, internal dashboards, and customer-facing products, collaborating with designers, backend engineers, and QA in Agile teams.",
    ],
    skillsLabel: "Core tools",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
    experienceTitle: "Experience",
    present: "Present",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's work together.",
    description:
      "Open to frontend roles and freelance projects. Send a short note about what you need and I'll get back to you.",
    email: "Send an email",
    copy: "Copy email",
    copied: "Email copied",
    elsewhere: "Elsewhere",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with React, TypeScript & Tailwind CSS",
    top: "Back to top",
  },
};

export type Dictionary = typeof en;

const id: Dictionary = {
  meta: {
    title: "Waman Daka Wardani | Frontend Engineer — React, Next.js & TypeScript",
    description:
      "Waman Daka Wardani adalah Frontend Engineer yang berfokus pada React, Next.js, dan TypeScript. Terbuka untuk peluang kerja dan proyek pengembangan web freelance.",
  },
  nav: {
    label: "Utama",
    work: "Karya",
    about: "Tentang",
    contact: "Kontak",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    skip: "Langsung ke konten",
    language: "Bahasa",
  },
  hero: {
    eyebrow: "Frontend Engineer · Jakarta, Indonesia",
    headline: "Saya membangun pengalaman digital yang dirancang dengan baik.",
    description:
      "Saya adalah Frontend Engineer yang berfokus pada React, Next.js, dan TypeScript. Saya mengubah ide dan kebutuhan menjadi antarmuka web yang rapi, responsif, dan mudah dikembangkan.",
    primaryCta: "Lihat proyek saya",
    secondaryCta: "Punya ide proyek? Mari berdiskusi",
    profiles: "Profil",
    imageAlt: "Potret ilustrasi Waman Daka Wardani",
  },
  work: {
    eyebrow: "Karya pilihan",
    title: "Proyek yang bangga saya bagikan.",
    intro: "Beberapa proyek publik yang dibangun dengan React dan tooling modern.",
    demo: "Demo langsung",
    source: "Kode sumber",
    other: "Proyek lainnya",
    privateLabel: "Proyek privat",
    currentLabel: "Proyek saat ini",
    since: "Sejak",
    present: "sekarang",
    clientLabel: "Klien",
    viaLabel: "melalui",
    privateNote: "Sistem internal — tidak tersedia demo publik.",
  },
  services: {
    eyebrow: "Yang saya kerjakan",
    title: "Antarmuka yang cepat digunakan dan mudah dirawat.",
    items: [
      {
        title: "Pengembangan frontend",
        description:
          "Antarmuka berbasis komponen dengan React, Next.js, dan TypeScript yang siap tumbuh bersama produk Anda.",
      },
      {
        title: "Website responsif",
        description:
          "Tata letak yang nyaman di setiap layar, dari ponsel kecil hingga desktop lebar, dengan memperhatikan aksesibilitas.",
      },
      {
        title: "Integrasi API",
        description:
          "Menghubungkan antarmuka dengan layanan REST disertai pengambilan data, validasi, dan penanganan error yang solid.",
      },
      {
        title: "Website bisnis",
        description:
          "Website yang jelas dan kredibel untuk bisnis kecil dan tim yang membutuhkan kehadiran online.",
      },
    ],
  },
  about: {
    eyebrow: "Tentang & pengalaman",
    title: "Antarmuka yang rapi, komunikasi yang jelas.",
    paragraphs: [
      "Saya Frontend Engineer yang berbasis di Jakarta. Saya bekerja dengan React, Next.js, dan TypeScript, serta peduli pada kode yang mudah dibaca, tata letak responsif, dan antarmuka yang benar-benar nyaman digunakan.",
      "Saya pernah mengerjakan aplikasi web enterprise, dashboard internal, dan produk untuk pelanggan, berkolaborasi dengan desainer, backend engineer, dan QA dalam tim Agile.",
    ],
    skillsLabel: "Tools utama",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST API", "Git"],
    experienceTitle: "Pengalaman",
    present: "Sekarang",
  },
  contact: {
    eyebrow: "Kontak",
    title: "Mari bekerja sama.",
    description:
      "Terbuka untuk posisi frontend dan proyek freelance. Kirim ringkasan kebutuhan Anda dan saya akan segera membalas.",
    email: "Kirim email",
    copy: "Salin email",
    copied: "Email disalin",
    elsewhere: "Di tempat lain",
  },
  footer: {
    rights: "Hak cipta dilindungi.",
    built: "Dibangun dengan React, TypeScript & Tailwind CSS",
    top: "Kembali ke atas",
  },
};

export const translations: Record<Language, Dictionary> = { en, id };
export const supportedLanguages: Language[] = ["id", "en"];
