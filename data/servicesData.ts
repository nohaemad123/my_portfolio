import { serviceType } from "@/types/serviceType";

import { FaCode } from "react-icons/fa";
import { CiMobile1, CiPlug1, CiGlobe } from "react-icons/ci";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuCircleGauge } from "react-icons/lu";
import { GrCubes } from "react-icons/gr";
import { GoRocket } from "react-icons/go";

export const servicesData: serviceType[] = [
  {
    id: 1,
    icon: FaCode,
    title: {
      en: "Front-End Development",
      ar: "تطوير واجهات المستخدم",
    },
    description: {
      en: "Build modern and scalable web applications.",
      ar: "تطوير تطبيقات ويب حديثة، سريعة، وقابلة للتوسع باستخدام أحدث التقنيات.",
    },
  },
  {
    id: 2,
    icon: CiMobile1,
    title: {
      en: "Responsive Design",
      ar: "التصميم المتجاوب",
    },
    description: {
      en: "Create mobile-first layouts for all screen sizes.",
      ar: "تصميم واجهات تعمل بكفاءة على جميع الأجهزة وأحجام الشاشات.",
    },
  },
  {
    id: 3,
    icon: IoColorPaletteOutline,
    title: {
      en: "UI/UX Implementation",
      ar: "تنفيذ تصميمات UI/UX",
    },
    description: {
      en: "Transform Figma designs into pixel-perfect interfaces.",
      ar: "تحويل تصميمات Figma إلى واجهات دقيقة ومتوافقة مع جميع الأجهزة.",
    },
  },
  {
    id: 4,
    icon: CiPlug1,
    title: {
      en: "API Integration",
      ar: "ربط واجهات البرمجة (API)",
    },
    description: {
      en: "Connect applications with RESTful APIs efficiently.",
      ar: "دمج التطبيقات مع RESTful APIs بطريقة احترافية وآمنة.",
    },
  },
  {
    id: 5,
    icon: LuCircleGauge,
    title: {
      en: "Performance Optimization",
      ar: "تحسين الأداء",
    },
    description: {
      en: "Improve loading speed and user experience.",
      ar: "تحسين سرعة تحميل الموقع وتقديم تجربة استخدام أفضل.",
    },
  },
  {
    id: 6,
    icon: GrCubes,
    title: {
      en: "Reusable Components",
      ar: "مكونات قابلة لإعادة الاستخدام",
    },
    description: {
      en: "Create maintainable and reusable UI components.",
      ar: "بناء مكونات مرنة وقابلة لإعادة الاستخدام لتسهيل التطوير والصيانة.",
    },
  },
  {
    id: 7,
    icon: CiGlobe,
    title: {
      en: "SEO & Accessibility",
      ar: "تهيئة محركات البحث وإمكانية الوصول",
    },
    description: {
      en: "Build semantic and search-engine-friendly websites.",
      ar: "إنشاء مواقع متوافقة مع محركات البحث وسهلة الاستخدام لجميع المستخدمين.",
    },
  },
  {
    id: 8,
    icon: GoRocket,
    title: {
      en: "Deployment",
      ar: "نشر التطبيقات",
    },
    description: {
      en: "Deploy applications using modern hosting platforms.",
      ar: "نشر التطبيقات على منصات الاستضافة الحديثة وضمان جاهزيتها للإنتاج.",
    },
  },
];
