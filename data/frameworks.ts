import { SiReact, SiNextdotjs, SiAngular, SiHtml5 } from "react-icons/si";
import { IconType } from "react-icons";

export type FrameworkConfig = {
  icon: IconType;
  lightBg: string;
  lightText: string;
  darkBg: string;
  darkText: string;
  lightColor: string;
  darkColor: string;
};

export const frameworkConfig: Record<string, FrameworkConfig> = {
  React: {
    icon: SiReact,
    lightBg: "bg-[#61DAFB]/70",
    lightText: "text-[#27444c]",
    darkBg: "bg-[#61DAFB]/70",
    darkText: "text-[#3b7e8c]",
    lightColor: "#27444c",
    darkColor: "#3b7e8c",
  },

  "HTML/CSS": {
    icon: SiHtml5,
    lightColor: "#E34F26",
    darkColor: "#E34F26",
    lightBg: "bg-[#E34F26]",
    lightText: "text-white",
    darkBg: "bg-[#E34F26]",
    darkText: "text-white",
  },

  "Next.js": {
    icon: SiNextdotjs,
    lightBg: "bg-black/70",
    lightText: "text-white",
    darkBg: "bg-white/70",
    darkText: "text-black",
    lightColor: "#000",
    darkColor: "#fff",
  },

  Angular: {
    icon: SiAngular,
    lightBg: "bg-[#DD0031]/70",
    lightText: "text-[#DD0031]",
    darkBg: "bg-[#DD0031]/70",
    darkText: "text-[#e8dfe1]",
    lightColor: "#DD0031",
    darkColor: "#e8dfe1",
  },
};
