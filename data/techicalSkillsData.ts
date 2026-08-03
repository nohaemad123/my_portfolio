import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiShadcnui,
  SiGit,
  SiGithub,
  SiVite,
  SiNpm,
  SiPnpm,
  SiJira,
  SiTrello,
  SiAxios,
  SiNgrx,
  SiMui,
} from "react-icons/si";

import { FaProjectDiagram, FaCodeBranch, FaCss3 } from "react-icons/fa";
import { FaLayerGroup, FaPeopleGroup } from "react-icons/fa6";
import { MdWidgets, MdViewQuilt, MdCloud } from "react-icons/md";

export const technicalSkillsData = [
  {
    id: 1,
    category: {
      en: "Frontend Frameworks & Libraries",
      ar: "أطر العمل والمكتبات",
    },
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "RxJS", icon: FaCodeBranch },
      { name: "NgRx", icon: SiNgrx },
      { name: "Zustand", icon: FaLayerGroup },
    ],
  },

  {
    id: 2,
    category: {
      en: "Languages & Markup",
      ar: "لغات البرمجة وتقنيات الويب",
    },
    skills: [
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: FaCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Sass", icon: SiSass },
    ],
  },

  {
    id: 3,
    category: {
      en: "Styling & UI",
      ar: "التصميم وواجهات المستخدم",
    },
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Material UI (MUI)", icon: SiMui },
      { name: "Angular Material", icon: MdViewQuilt },
      { name: "Flowbite", icon: MdWidgets },
    ],
  },

  {
    id: 4,
    category: {
      en: "Build Tools & Package Managers",
      ar: "أدوات البناء وإدارة الحزم",
    },
    skills: [
      { name: "Vite", icon: SiVite },
      { name: "npm / npx", icon: SiNpm },
      { name: "pnpm", icon: SiPnpm },
    ],
  },

  {
    id: 5,
    category: {
      en: "Tools & Methodologies",
      ar: "الأدوات ومنهجيات العمل",
    },
    skills: [
      { name: "Agile Development", icon: FaProjectDiagram },
      { name: "Scrum", icon: FaPeopleGroup },
      { name: "Jira", icon: SiJira },
      { name: "Trello", icon: SiTrello },
    ],
  },

  {
    id: 6,
    category: {
      en: "Version Control & Collaboration",
      ar: "إدارة الإصدارات والتعاون",
    },
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },

  {
    id: 7,
    category: {
      en: "Cloud & Deployment",
      ar: "الحوسبة السحابية والنشر",
    },
    skills: [{ name: "Microsoft Azure", icon: MdCloud }],
  },

  {
    id: 8,
    category: {
      en: "API Integration",
      ar: "تكامل واجهات البرمجة (API)",
    },
    skills: [
      { name: "REST API", icon: SiAxios },
      { name: "Axios", icon: SiAxios },
    ],
  },
];
