import type { Localized } from "../i18n/translations";

export interface SkillItem {
  name: string;
  /** Percentage width of the bottom underline bar (100 = Frequently Used, 25-75 = Occasionally) */
  progress: 100 | 75 | 50 | 25;
}

export interface SkillSubgroup {
  label: Localized;
  items: SkillItem[];
}

export interface SkillCategory {
  title: Localized;
  subgroups: SkillSubgroup[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: { en: "Languages", id: "Bahasa Pemrograman" },
    subgroups: [
      {
        label: { en: "FE related", id: "Terkait FE" },
        items: [
          { name: "HTML", progress: 100 },
          { name: "CSS/SCSS", progress: 100 },
          { name: "TypeScript", progress: 100 },
          { name: "JavaScript", progress: 100 },
        ],
      },
      {
        label: { en: "BE & Data", id: "BE & Data" },
        items: [
          { name: "SQL", progress: 50 },
          { name: "PHP", progress: 25 },
        ],
      },
    ],
  },
  {
    title: { en: "Technologies", id: "Teknologi" },
    subgroups: [
      {
        label: { en: "UI related", id: "Terkait UI" },
        items: [
          { name: "Tailwind CSS", progress: 100 },
          { name: "Framer Motion", progress: 75 },
          { name: "Material UI", progress: 50 },
          { name: "Bootstrap", progress: 50 },
        ],
      },
      {
        label: { en: "FE related", id: "Terkait FE" },
        items: [
          { name: "React", progress: 100 },
          { name: "Next.js", progress: 100 },
          { name: "REST APIs", progress: 100 },
          { name: "Axios", progress: 100 },
          { name: "Vite", progress: 75 },
        ],
      },
      {
        label: { en: "Low-code", id: "Low-code" },
        items: [
          { name: "Mendix Studio Pro", progress: 50 },
        ],
      },
    ],
  },
  {
    title: { en: "Tools & Softwares", id: "Tools & Perangkat Lunak" },
    subgroups: [
      {
        label: { en: "Coder related", id: "Terkait Coding" },
        items: [
          { name: "VS Code", progress: 100 },
          { name: "Git", progress: 100 },
          { name: "GitHub", progress: 100 },
          { name: "Node.js", progress: 75 },
          { name: "Postman", progress: 75 },
        ],
      },
      {
        label: { en: "Designer related", id: "Terkait Desain" },
        items: [
          { name: "Figma", progress: 75 },
        ],
      },
    ],
  },
];

