import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  Code2,
  MonitorSmartphone,
  LayoutGrid,
  Building2,
  Briefcase,
  Speaker,
} from "lucide-react";

export const ro2ya: ProjectType = {
  id: 35,

  image: "/ro2ya.png",
  scrollImage: true,

  name: {
    en: "Audio & Vision Broadcasting Platform",
    ar: "منصة الرؤية السمعية للبث",
  },

  type: {
    en: "Hearing Solutions Website",
    ar: "موقع حلول سمعية",
  },

  short_description: {
    en: "Corporate website for a company specializing in hearing care solutions and hearing aid products.",
    ar: "موقع شركة متخصص في حلول العناية بالسمع وأجهزة المساعدات السمعية.",
  },

  description: {
    en: "A corporate website developed for Al Roaya Al Sam'iya, a company specializing in hearing care solutions, hearing aids, and audiology services. The website showcases the company's products, services, and expertise through a modern, responsive, and user-friendly interface.",
    ar: "موقع شركة تم تطويره لصالح شركة الرؤية السمعية المتخصصة في حلول العناية بالسمع، وأجهزة المساعدات السمعية، وخدمات السمعيات. يعرض الموقع منتجات الشركة وخدماتها وخبراتها من خلال واجهة حديثة ومتجاوبة وسهلة الاستخدام.",
  },

  slug: "roaya",

  links: {
    demo: "https://nohaemad123.github.io/ro2ya/",
    github: "https://github.com/nohaemad123/ro2ya.git",
  },

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    client: {
      en: "D-Tag",
      ar: "D-Tag",
    },
    duration: {
      en: "1 Week",
      ar: "أسبوع",
    },
    status: {
      en: "Completed",
      ar: "تم الانجاز",
    },
    year: "2017",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  framework: "HTML/CSS",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  features: [
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Introduces the company, its experience, and expertise in audio and visual solutions.",
        ar: "يقدم نبذة عن الشركة وخبراتها في حلول الصوت والصورة.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Products Showcase",
        ar: "عرض المنتجات",
      },
      description: {
        en: "Displays professional audio, visual, and broadcasting equipment.",
        ar: "يعرض معدات احترافية للصوت والصورة والبث.",
      },
      icon: Speaker,
    },
    {
      title: {
        en: "Services",
        ar: "الخدمات",
      },
      description: {
        en: "Highlights installation, consultation, and integrated AV solutions.",
        ar: "يعرض خدمات التركيب والاستشارات والحلول المتكاملة للصوت والصورة.",
      },
      icon: Briefcase,
    },
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Optimized for desktop, tablet, and mobile devices.",
        ar: "متوافق مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
      icon: Smartphone,
    },
  ],

  challenges: [
    {
      en: "Presenting a wide range of audio and visual products in a clear structure.",
      ar: "عرض مجموعة كبيرة من منتجات الصوت والصورة بطريقة منظمة وواضحة.",
    },
    {
      en: "Designing a professional interface that reflects the company's brand identity.",
      ar: "تصميم واجهة احترافية تعكس هوية الشركة.",
    },
    {
      en: "Building responsive layouts that work consistently across different devices.",
      ar: "إنشاء تصميمات متجاوبة تعمل بكفاءة على مختلف الأجهزة.",
    },
  ],

  solutions: [
    {
      en: "Organized products and services into dedicated sections for easier navigation.",
      ar: "تنظيم المنتجات والخدمات داخل أقسام مخصصة لتسهيل التصفح.",
    },
    {
      en: "Designed a clean and professional corporate interface.",
      ar: "تصميم واجهة احترافية وبسيطة تناسب مواقع الشركات.",
    },
    {
      en: "Implemented responsive layouts using Bootstrap components.",
      ar: "تنفيذ تصميمات متجاوبة باستخدام مكونات Bootstrap.",
    },
  ],

  learned: [
    {
      title: {
        en: "Responsive Corporate Website Development",
        ar: "تطوير مواقع الشركات المتجاوبة",
      },
      icon: MonitorSmartphone,
    },
    {
      title: {
        en: "Product Showcase Design",
        ar: "تصميم صفحات عرض المنتجات",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Reusable Frontend Components",
        ar: "بناء مكونات Frontend قابلة لإعادة الاستخدام",
      },
      icon: Code2,
    },
    {
      title: {
        en: "Bootstrap Responsive Layouts",
        ar: "تصميمات Bootstrap المتجاوبة",
      },
      icon: Smartphone,
    },
  ],

  full_date: {
    en: "May 2017",
    ar: "مايو 2017",
  },
};
