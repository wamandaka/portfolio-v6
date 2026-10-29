import type { Localized } from "../i18n/translations";

export interface ExperienceEntry {
  role: Localized;
  employmentType?: Localized;
  company: string;
  period: Localized;
  summary: Localized;
  tags: string[];
  highlights: Localized[];
}

export const experience: ExperienceEntry[] = [
  {
    role: {
      en: "Frontend Developer",
      id: "Frontend Developer",
    },
    employmentType: {
      en: "(contract)",
      id: "(kontrak)",
    },
    company: "NTT DATA Indonesia",
    period: { en: "Jan 2026 - present", id: "Jan 2026 - sekarang" },
    summary: {
      en: "Frontend development on an internal enterprise banking platform for BNI, as a contractor from NTT DATA.",
      id: "Pengembangan frontend untuk platform perbankan enterprise internal BNI, sebagai tenaga kontrak dari NTT DATA.",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    highlights: [
      {
        en: "Build responsive web modules and reusable UI components with React and TypeScript.",
        id: "Membangun modul web responsif dan komponen UI yang dapat dipakai ulang dengan React dan TypeScript.",
      },
      {
        en: "Integrate REST services with validation, error handling, and asynchronous data fetching.",
        id: "Mengintegrasikan layanan REST dengan validasi, penanganan error, dan pengambilan data asinkron.",
      },
      {
        en: "Work in an Agile squad with product owners, designers, backend engineers, and QA.",
        id: "Bekerja dalam tim Agile bersama product owner, desainer, backend engineer, dan QA.",
      },
    ],
  },
  {
    role: { en: "Frontend Developer", id: "Frontend Developer" },
    company: "PT Indosistem Teknologi Utama",
    period: { en: "Nov 2024 - Apr 2025", id: "Nov 2024 - Apr 2025" },
    summary: {
      en: "Responsive dashboards and a customer-facing event ticketing platform.",
      id: "Dashboard responsif dan platform tiket event untuk pelanggan.",
    },
    tags: ["React", "Next.js", "Tailwind CSS", "Axios", "REST APIs"],
    highlights: [
      {
        en: "Developed dashboard interfaces with React and Next.js.",
        id: "Mengembangkan antarmuka dashboard dengan React dan Next.js.",
      },
      {
        en: "Built the VIP Tiket ticketing web app and integrated REST APIs with Axios.",
        id: "Membangun aplikasi web tiket VIP Tiket dan mengintegrasikan REST API dengan Axios.",
      },
    ],
  },
  {
    role: { en: "Mendix Developer", id: "Mendix Developer" },
    employmentType: {
      en: "(internship)",
      id: "(magang)",
    },
    company: "PT Merkle Innovation Technology",
    period: { en: "Apr 2024 - Jul 2024", id: "Apr 2024 - Jul 2024" },
    summary: {
      en: "Low-code internship focused on business workflow applications.",
      id: "Magang low-code yang berfokus pada aplikasi alur kerja bisnis.",
    },
    tags: ["Mendix Studio Pro", "Low-Code", "Domain Models", "Microflows"],
    highlights: [
      {
        en: "Built a contract monitoring system in Mendix Studio Pro, including domain models and microflows.",
        id: "Membangun sistem pemantauan kontrak di Mendix Studio Pro, termasuk model domain dan microflow.",
      },
    ],
  },
];
