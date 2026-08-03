import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  LayoutDashboard,
  Building2,
  Package,
  Palette,
  Boxes,
  MonitorSmartphone,
  Briefcase,
} from "lucide-react";

export const spread: ProjectType = {
  id: 22,

  image: "/spread.png",

  scrollImage: true,

  name: {
    en: "Spread Factory Website",
    ar: "موقع سبريد فاكتوري",
  },

  type: {
    en: "Manufacturing Company Website",
    ar: "موقع شركة تصنيع",
  },

  short_description: {
    en: "A responsive corporate website developed for an HVAC manufacturing company to showcase products, completed projects, and industrial solutions through a professional user experience.",
    ar: "موقع شركة متجاوب تم تطويره لشركة متخصصة في تصنيع أنظمة التكييف والتهوية لعرض المنتجات والمشروعات والحلول الصناعية من خلال تجربة مستخدم احترافية.",
  },

  description: {
    en: "Spread Factory is a responsive corporate website developed for an Egyptian HVAC manufacturer specializing in air outlets, duct accessories, ventilation systems, and industrial solutions. The website presents the company's product catalog, completed projects, certifications, and manufacturing capabilities through a modern multi-page interface designed to strengthen its digital presence and support customer engagement.",
    ar: "سبريد فاكتوري هو موقع شركة متجاوب تم تطويره لإحدى الشركات المصرية المتخصصة في تصنيع أنظمة التكييف والتهوية ومخارج الهواء وإكسسوارات مجاري الهواء والحلول الصناعية. يعرض الموقع منتجات الشركة، والمشروعات المنفذة، والشهادات، وإمكانيات التصنيع من خلال واجهة حديثة متعددة الصفحات تهدف إلى تعزيز التواجد الرقمي للشركة وتحسين تفاعل العملاء.",
  },

  slug: "spread",

  links: {
    demo: "https://nohaemad123.github.io/spread/",
    github: "https://github.com/nohaemad123/spread.git",
  },

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    client: {
      en: "Knock Target",
      ar: "Knock Target",
    },
    duration: {
      en: "1 Week",
      ar: "أسبوع",
    },
    status: {
      en: "Completed",
      ar: "تم الانجاز",
    },
    year: "2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  framework: "HTML/CSS",

  category: {
    en: "Website",
    ar: "موقع ويب",
  },

  features: [
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Introduces the company, its manufacturing expertise, and industry experience.",
        ar: "يعرض نبذة عن الشركة وخبرتها في التصنيع والمجال الصناعي.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "HVAC Product Catalog",
        ar: "كتالوج منتجات HVAC",
      },
      description: {
        en: "Showcases HVAC products, air outlets, duct accessories, and ventilation systems.",
        ar: "يعرض منتجات التكييف والتهوية ومخارج الهواء وإكسسوارات مجاري الهواء.",
      },
      icon: Package,
    },
    {
      title: {
        en: "Projects Portfolio",
        ar: "معرض المشروعات",
      },
      description: {
        en: "Highlights completed governmental and private sector projects across Egypt.",
        ar: "يعرض المشروعات الحكومية والخاصة التي نفذتها الشركة في مختلف أنحاء مصر.",
      },
      icon: Briefcase,
    },
    {
      title: {
        en: "Product Categories",
        ar: "تصنيفات المنتجات",
      },
      description: {
        en: "Organizes products into structured categories for easier navigation.",
        ar: "ينظم المنتجات داخل تصنيفات واضحة لتسهيل التصفح.",
      },
      icon: Boxes,
    },
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Provides a seamless browsing experience across desktop, tablet, and mobile devices.",
        ar: "يوفر تجربة استخدام سلسة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Modern User Interface",
        ar: "واجهة مستخدم حديثة",
      },
      description: {
        en: "Delivers a clean corporate interface focused on usability and readability.",
        ar: "يوفر واجهة احترافية بتصميم عصري يركز على سهولة الاستخدام والوضوح.",
      },
      icon: Palette,
    },
  ],

  challenges: [
    {
      en: "Presenting a large HVAC product catalog in an organized structure.",
      ar: "عرض عدد كبير من منتجات التكييف والتهوية بطريقة منظمة.",
    },
    {
      en: "Designing a professional corporate interface that reflects the company's identity.",
      ar: "تصميم واجهة احترافية تعكس هوية الشركة.",
    },
    {
      en: "Maintaining consistency across multiple website pages.",
      ar: "الحفاظ على تناسق التصميم بين صفحات الموقع المختلفة.",
    },
    {
      en: "Ensuring responsive layouts across different screen sizes.",
      ar: "ضمان عمل التصميم بشكل متجاوب على جميع أحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Organized products into structured categories for easier browsing.",
      ar: "تنظيم المنتجات داخل تصنيفات واضحة لتسهيل التصفح.",
    },
    {
      en: "Built reusable page sections to maintain consistent layouts.",
      ar: "إنشاء أقسام قابلة لإعادة الاستخدام للحفاظ على تناسق التصميم.",
    },
    {
      en: "Used Bootstrap's grid system to create responsive interfaces.",
      ar: "استخدام نظام Grid الخاص بـ Bootstrap لإنشاء تصميم متجاوب.",
    },
    {
      en: "Optimized images and visual assets to improve loading performance.",
      ar: "تحسين الصور والعناصر البصرية لزيادة سرعة تحميل الموقع.",
    },
  ],

  learned: [
    {
      title: {
        en: "Designed professional corporate websites.",
        ar: "تصميم مواقع شركات احترافية.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Built responsive multi-page website layouts.",
        ar: "بناء مواقع متعددة الصفحات بتصميم متجاوب.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Organized large product catalogs efficiently.",
        ar: "تنظيم كتالوجات المنتجات الكبيرة بكفاءة.",
      },
      icon: Boxes,
    },
    {
      title: {
        en: "Maintained consistent branding across pages.",
        ar: "الحفاظ على هوية بصرية موحدة بين الصفحات.",
      },
      icon: Palette,
    },
    {
      title: {
        en: "Improved cross-device compatibility.",
        ar: "تحسين توافق الموقع مع مختلف الأجهزة.",
      },
      icon: MonitorSmartphone,
    },
  ],

  full_date: {
    en: "July 2016",
    ar: "يوليو 2016",
  },
};
