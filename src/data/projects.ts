import type { Localized } from "../i18n/translations";

export interface CurrentProject {
  client: string;
  via: string;
  title: Localized;
  description: Localized;
  /** ISO date (yyyy-mm-dd) when work on the project started. */
  startDate: string;
  tags: string[];
}

/** The ongoing project, highlighted above the public portfolio pieces. */
export const currentProject: CurrentProject = {
  client: "BNI",
  via: "NTT DATA Indonesia",
  title: {
    en: "Enterprise banking platform",
    id: "Platform perbankan enterprise",
  },
  description: {
    en: "Frontend development of an internal enterprise web platform at BNI (PT Bank Negara Indonesia), delivered through NTT DATA Indonesia. I build responsive modules and reusable React and TypeScript components, and integrate them with REST services.",
    id: "Pengembangan frontend untuk platform web enterprise internal di BNI (PT Bank Negara Indonesia), melalui NTT DATA Indonesia. Saya membangun modul responsif dan komponen React dan TypeScript yang dapat dipakai ulang, serta mengintegrasikannya dengan layanan REST.",
  },
  startDate: "2026-01-28",
  tags: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
};
import movieApp from "../assets/projects/movie-app.web.jpg";
import dashboardIuran from "../assets/projects/dashboard-jakmen.web.jpg";
import weatherApp from "../assets/projects/weather-app.web.jpg";

export interface FeaturedProject {
  name: string;
  description: Localized;
  image: string;
  imageAlt: Localized;
  tags: string[];
  demo?: string;
  source?: string;
}

export interface OtherProject {
  name: Localized;
  description: Localized;
  tags: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Cinema Explorer",
    description: {
      en: "Movie discovery app powered by the TMDB API, with real-time search, category filters, and detail views for each title.",
      id: "Aplikasi penemuan film berbasis TMDB API dengan pencarian real-time, filter kategori, dan tampilan detail untuk setiap judul.",
    },
    image: movieApp,
    imageAlt: {
      en: "Cinema Explorer movie discovery interface",
      id: "Antarmuka aplikasi penemuan film Cinema Explorer",
    },
    tags: ["React", "TMDB API", "Tailwind CSS", "Axios"],
    demo: "https://seryu-movie-app.netlify.app/",
  },
  {
    name: "Dashboard Iuran Warga",
    description: {
      en: "Community dues dashboard with revenue charts, member tracking, and payment status filters.",
      id: "Dashboard iuran warga dengan grafik pendapatan, pencatatan anggota, dan filter status pembayaran.",
    },
    image: dashboardIuran,
    imageAlt: {
      en: "Dashboard Iuran Warga analytics dashboard",
      id: "Dashboard analitik Dashboard Iuran Warga",
    },
    tags: ["React", "Data visualization", "Tailwind CSS"],
    demo: "https://iuran-warga.netlify.app/",
  },
  {
    name: "Weather Radar & Forecast",
    description: {
      en: "Weather app showing forecasts, humidity, and wind conditions by city through the OpenWeather API.",
      id: "Aplikasi cuaca yang menampilkan prakiraan, kelembapan, dan kondisi angin per kota melalui OpenWeather API.",
    },
    image: weatherApp,
    imageAlt: {
      en: "Weather forecast app interface",
      id: "Antarmuka aplikasi prakiraan cuaca",
    },
    tags: ["React", "OpenWeather API", "Axios", "Tailwind CSS"],
    demo: "https://wamandaka.github.io/react-app-weatherapp",
  },
];

export const otherProjects: OtherProject[] = [
  {
    name: { en: "VIP Tiket", id: "VIP Tiket" },
    description: {
      en: "Online event ticketing web app covering event browsing, booking, and checkout flows.",
      id: "Aplikasi web tiket event online yang mencakup penelusuran event, pemesanan, dan checkout.",
    },
    tags: ["Next.js", "React", "Tailwind CSS"],
  },
];
