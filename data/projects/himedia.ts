import { ProjectType } from "@/types/projectType";
import {
  Smartphone,
  Blocks,
  Code2,
  PhoneCall,
  Building,
  Pill,
  ClipboardList,
  Files,
  LayoutDashboard,
  HeartPulse,
} from "lucide-react";

export const himedia: ProjectType = {
  id: 17,
  image: "/himedia.png",
  scrollImage: true,

  name: {
    en: "Himedia",
    ar: "هايميديا",
  },

  type: {
    en: "Medical Products Website",
    ar: "موقع منتجات طبية",
  },

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  framework: "HTML/CSS",

  slug: "himedia",

  short_description: {
    en: "A responsive corporate website developed to showcase medical products, healthcare solutions, and company information through a modern multi-page experience.",
    ar: "موقع شركة متجاوب لعرض المنتجات الطبية والحلول الصحية ومعلومات الشركة من خلال تجربة متعددة الصفحات بتصميم حديث.",
  },

  description: {
    en: "Himedia is a responsive corporate website developed for a medical products company. The website showcases product categories, healthcare solutions, company information, and contact details through a clean, professional, and user-friendly interface. Built with a responsive layout, it helps customers easily explore the company's products and services across all devices.",
    ar: "Himedia هو موقع شركة متجاوب تم تطويره لإحدى شركات المنتجات الطبية. يعرض الموقع تصنيفات المنتجات، والحلول الصحية، ومعلومات الشركة، وبيانات التواصل من خلال واجهة احترافية وسهلة الاستخدام. كما يوفر تجربة متجاوبة تساعد العملاء على استعراض منتجات وخدمات الشركة بسهولة على جميع الأجهزة.",
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
      en: "2 Weeks",
      ar: "أسبوعان",
    },
    status: {
      en: "Completed",
      ar: "تم الانجاز",
    },
    year: "2016",
  },

  full_date: {
    en: "May 2016",
    ar: "مايو 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  features: [
    {
      title: {
        en: "Medical Product Catalog",
        ar: "كتالوج المنتجات الطبية",
      },
      description: {
        en: "Browse medical products organized into clear categories.",
        ar: "استعرض المنتجات الطبية المصنفة ضمن أقسام واضحة وسهلة التصفح.",
      },
      icon: Pill,
    },
    {
      title: {
        en: "Product Details",
        ar: "تفاصيل المنتجات",
      },
      description: {
        en: "View detailed information about healthcare products and specifications.",
        ar: "عرض معلومات تفصيلية عن المنتجات الطبية ومواصفاتها.",
      },
      icon: ClipboardList,
    },
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Present the company's background, services, and healthcare expertise.",
        ar: "عرض نبذة عن الشركة وخدماتها وخبرتها في المجال الطبي.",
      },
      icon: Building,
    },
    {
      title: {
        en: "Multi-Page Website",
        ar: "موقع متعدد الصفحات",
      },
      description: {
        en: "Includes dedicated pages for products, company information, and contact.",
        ar: "يتضمن صفحات مخصصة للمنتجات ومعلومات الشركة والتواصل.",
      },
      icon: Files,
    },
    {
      title: {
        en: "Contact & Inquiry",
        ar: "التواصل والاستفسارات",
      },
      description: {
        en: "Allow customers to communicate with the company through dedicated contact pages.",
        ar: "يتيح للعملاء التواصل مع الشركة من خلال صفحات مخصصة للاستفسارات.",
      },
      icon: PhoneCall,
    },
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Optimized for desktop, tablet, and mobile devices.",
        ar: "مصمم ليعمل بكفاءة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
      icon: Smartphone,
    },
  ],

  challenges: [
    {
      en: "Designing a professional healthcare corporate website.",
      ar: "تصميم موقع احترافي يعكس هوية شركة تعمل في المجال الطبي.",
    },
    {
      en: "Organizing medical products in a clear and structured way.",
      ar: "تنظيم المنتجات الطبية بطريقة واضحة وسهلة التصفح.",
    },
    {
      en: "Maintaining consistent layouts across multiple pages.",
      ar: "الحفاظ على تصميم موحد عبر جميع صفحات الموقع.",
    },
    {
      en: "Ensuring responsiveness across different devices.",
      ar: "ضمان عمل الموقع بشكل متجاوب على جميع الأجهزة.",
    },
  ],

  solutions: [
    {
      en: "Created reusable page layouts to simplify maintenance.",
      ar: "إنشاء قوالب صفحات قابلة لإعادة الاستخدام لتسهيل الصيانة.",
    },
    {
      en: "Organized medical products into structured categories.",
      ar: "تنظيم المنتجات الطبية داخل تصنيفات واضحة ومنظمة.",
    },
    {
      en: "Used Bootstrap Grid to build responsive layouts.",
      ar: "استخدام Bootstrap Grid لإنشاء تصميمات متجاوبة.",
    },
    {
      en: "Applied a clean visual hierarchy to improve readability and navigation.",
      ar: "تطبيق هيكل بصري واضح لتحسين سهولة القراءة والتنقل.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built responsive healthcare corporate websites.",
        ar: "تطوير مواقع شركات طبية متجاوبة.",
      },
      icon: HeartPulse,
    },
    {
      title: {
        en: "Designed reusable multi-page website layouts.",
        ar: "تصميم تخطيطات متعددة الصفحات قابلة لإعادة الاستخدام.",
      },
      icon: Blocks,
    },
    {
      title: {
        en: "Improved responsive design using Bootstrap.",
        ar: "تحسين التصميم المتجاوب باستخدام Bootstrap.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Organized product catalogs with clear information architecture.",
        ar: "تنظيم كتالوجات المنتجات بهيكل معلومات واضح.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Enhanced frontend code organization and maintainability.",
        ar: "تحسين تنظيم الكود وسهولة صيانته.",
      },
      icon: Code2,
    },
  ],

  links: {
    demo: "https://nohaemad123.github.io/himedia/",
    github: "https://github.com/nohaemad123/himedia.git",
  },
};
