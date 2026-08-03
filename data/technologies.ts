import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiAxios,
  SiReacthookform,
  SiMui,
  SiShadcnui,
  SiVite,
} from "react-icons/si";

import { FaAngular, FaBootstrap, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { BsFiletypeScss } from "react-icons/bs";
import { MdTranslate, MdWidgets } from "react-icons/md";
import { CiDatabase } from "react-icons/ci";
import {
  Boxes,
  Workflow,
  Table,
  Cable,
  BellRing,
  Languages,
  RefreshCw,
  DatabaseZap,
} from "lucide-react";
import { TbForms } from "react-icons/tb";
import { RiCheckboxCircleLine } from "react-icons/ri";

export const technologyIcons = {
  React: {
    icon: SiReact,
    color: "#61DAFB",
  },

  "Next.js": {
    icon: SiNextdotjs,
    color: "#000000",
  },

  Angular: {
    icon: FaAngular,
    color: "#DD0031",
  },

  JavaScript: {
    icon: SiJavascript,
    color: "#F7DF1E",
  },

  TypeScript: {
    icon: SiTypescript,
    color: "#3178C6",
  },

  HTML5: {
    icon: FaHtml5,
    color: "#E34F26",
  },

  CSS3: {
    icon: FaCss3Alt,
    color: "#1572B6",
  },

  Scss: {
    icon: BsFiletypeScss,
    color: "#CC6699",
  },

  Bootstrap: {
    icon: FaBootstrap,
    color: "#7952B3",
  },

  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
  },

  "Angular Material": {
    icon: MdWidgets,
    color: "#757575",
  },

  RxJS: {
    icon: Workflow,
    color: "#B7178C",
  },

  "ngx-datatable": {
    icon: Table,
    color: "#00ACC1",
  },

  "REST API": {
    icon: Cable,
    color: "#0EA5E9",
  },

  AJAX: {
    icon: RefreshCw,
    color: "#0EA5E9",
  },

  jQuery: {
    icon: DiJqueryLogo,
    color: "#0769AD",
  },

  Axios: {
    icon: SiAxios,
    color: "#5A29E4",
  },

  Firebase: {
    icon: SiFirebase,
    color: "#FFCA28",
  },

  "Redux Toolkit": {
    icon: SiRedux,
    color: "#764ABC",
  },

  Zustand: {
    icon: Boxes,
    color: "#7C5C3B",
  },

  "TanStack Query": {
    icon: DatabaseZap,
    color: "#FF4154",
  },

  Formik: {
    icon: TbForms,
    color: "#2563EB",
  },

  Yup: {
    icon: RiCheckboxCircleLine,
    color: "#22C55E",
  },

  "React Hook Form": {
    icon: SiReacthookform,
    color: "#EC5990",
  },

  "Material ui": {
    icon: SiMui,
    color: "#007FFF",
  },

  "shadcn/ui": {
    icon: SiShadcnui,
    color: "#000000",
  },

  Transloco: {
    icon: Languages,
    color: "#2563EB",
  },

  "react-i18next": {
    icon: MdTranslate,
    color: "#2563EB",
  },

  SweetAlert2: {
    icon: BellRing,
    color: "#7066E0",
  },

  "local storage": {
    icon: CiDatabase,
    color: "#4B5563",
  },

  Vite: {
    icon: SiVite,
    color: "#646CFF",
  },
};
