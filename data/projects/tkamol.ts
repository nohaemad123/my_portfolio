import { ProjectType } from "@/types/projectType";

import {
  LayoutDashboard,
  Globe,
  MonitorSmartphone,
  Building2,
  Package,
  Laptop,
  Smartphone,
} from "lucide-react";

export const tkamol: ProjectType = {
  id: 21,

  image: "/tkamol.png",

  scrollImage: true,

  name: {
    en: "Tkamol",
    ar: "التكامل",
  },

  type: {
    en: "Software Company Website",
    ar: "موقع شركة برمجيات",
  },

  short_description: {
    en: "A responsive corporate website developed for a software company to showcase business management solutions, software products, and company services through a professional user experience.",
    ar: "موقع شركة متجاوب تم تطويره لشركة برمجيات لعرض حلول إدارة الأعمال والمنتجات البرمجية وخدمات الشركة من خلال تجربة مستخدم احترافية.",
  },

  description: {
    en: "Tkamol is a responsive corporate website developed for a software company specializing in business management solutions. The website presents the company's software products, ERP solutions, financial systems, services, and corporate information through a clean, professional, and responsive multi-page interface designed to strengthen its online presence.",
    ar: "تكامل هو موقع شركة متجاوب تم تطويره لشركة متخصصة في حلول إدارة الأعمال. يعرض الموقع منتجات الشركة البرمجية، وأنظمة ERP، والأنظمة المالية، والخدمات، ومعلومات الشركة من خلال واجهة احترافية متعددة الصفحات ومتجاوبة تهدف إلى تعزيز الحضور الرقمي للشركة.",
  },

  slug: "tkamol",

  links: {
    demo: "https://nohaemad123.github.io/tkamol/",
    github: "https://github.com/nohaemad123/tkamol.git",
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
    ar: "موقع ويب",
  },

  features: [
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Introduces the company, its history, expertise, and software development services.",
        ar: "يعرض نبذة عن الشركة وتاريخها وخبراتها وخدمات تطوير البرمجيات.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Software Solutions",
        ar: "الحلول البرمجية",
      },
      description: {
        en: "Showcases ERP, financial, HR, and business management software solutions.",
        ar: "يعرض حلول ERP والأنظمة المالية والموارد البشرية وحلول إدارة الأعمال.",
      },
      icon: Laptop,
    },
    {
      title: {
        en: "Products Showcase",
        ar: "عرض المنتجات",
      },
      description: {
        en: "Presents software products with organized service and solution sections.",
        ar: "يعرض المنتجات البرمجية من خلال أقسام منظمة للخدمات والحلول.",
      },
      icon: Package,
    },
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Provides a seamless experience across desktop, tablet, and mobile devices.",
        ar: "يوفر تجربة استخدام سلسة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Business Services",
        ar: "خدمات الأعمال",
      },
      description: {
        en: "Highlights the company's consulting, implementation, and technical support services.",
        ar: "يعرض خدمات الاستشارات والتنفيذ والدعم الفني التي تقدمها الشركة.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Contact Information",
        ar: "بيانات التواصل",
      },
      description: {
        en: "Provides multiple communication channels for customers and business inquiries.",
        ar: "يوفر وسائل متعددة للتواصل مع العملاء والاستفسارات التجارية.",
      },
      icon: Globe,
    },
  ],

  challenges: [
    {
      en: "Presenting a large portfolio of software products in an organized way.",
      ar: "عرض مجموعة كبيرة من المنتجات البرمجية بطريقة منظمة.",
    },
    {
      en: "Designing a responsive corporate website with multiple content sections.",
      ar: "تصميم موقع شركة متجاوب يحتوي على العديد من الأقسام.",
    },
    {
      en: "Maintaining a consistent design across all pages.",
      ar: "الحفاظ على تناسق التصميم في جميع صفحات الموقع.",
    },
    {
      en: "Organizing technical business information for different audiences.",
      ar: "تنظيم المعلومات التقنية والتجارية لتناسب مختلف فئات المستخدمين.",
    },
  ],

  solutions: [
    {
      en: "Designed reusable page layouts for consistent presentation.",
      ar: "تصميم قوالب صفحات قابلة لإعادة الاستخدام للحفاظ على تناسق العرض.",
    },
    {
      en: "Organized software solutions into structured business sections.",
      ar: "تنظيم الحلول البرمجية داخل أقسام واضحة ومنظمة.",
    },
    {
      en: "Built responsive layouts using the Bootstrap grid system.",
      ar: "إنشاء تصميمات متجاوبة باستخدام Bootstrap Grid System.",
    },
    {
      en: "Maintained a unified design language across the entire website.",
      ar: "الحفاظ على هوية تصميم موحدة في جميع صفحات الموقع.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built multilingual corporate websites.",
        ar: "تطوير مواقع شركات متعددة اللغات.",
      },
      icon: Globe,
    },
    {
      title: {
        en: "Designed scalable corporate user interfaces.",
        ar: "تصميم واجهات شركات قابلة للتوسع.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Organized large business websites into reusable sections.",
        ar: "تنظيم مواقع الشركات الكبيرة باستخدام أقسام قابلة لإعادة الاستخدام.",
      },
      icon: Package,
    },
    {
      title: {
        en: "Improved responsive design implementation.",
        ar: "تحسين تطبيق التصميم المتجاوب.",
      },
      icon: MonitorSmartphone,
    },
    {
      title: {
        en: "Presented business software through structured content.",
        ar: "عرض البرمجيات التجارية من خلال محتوى منظم.",
      },
      icon: Laptop,
    },
  ],

  full_date: {
    en: "February 2017",
    ar: "فبراير 2017",
  },
};
