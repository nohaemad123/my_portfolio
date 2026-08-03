import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  Building2,
  MonitorSmartphone,
  Globe,
  Headset,
  LayoutGrid,
} from "lucide-react";

export const fastteleco: ProjectType = {
  id: 23,
  image: "/fastteleco.png",
  scrollImage: true,

  features: [
    {
      title: {
        en: "Cloud Invoice Solution",
        ar: "حل الفواتير السحابي",
      },
      description: {
        en: "Present the platform's cloud-based invoicing and business management features.",
        ar: "عرض مميزات نظام الفواتير السحابي وإدارة الأعمال.",
      },
      icon: Globe,
    },
    {
      title: {
        en: "Business Features",
        ar: "مزايا الأعمال",
      },
      description: {
        en: "Showcase accounting, billing, reporting, and business management capabilities.",
        ar: "استعراض إمكانيات المحاسبة والفوترة والتقارير وإدارة الأعمال.",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Pricing Plans",
        ar: "خطط الأسعار",
      },
      description: {
        en: "Display subscription plans and available business packages.",
        ar: "عرض خطط الاشتراك والباقات المتاحة للشركات.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Company Information",
        ar: "معلومات الشركة",
      },
      description: {
        en: "Introduce the company, its mission, and software expertise.",
        ar: "التعريف بالشركة ورؤيتها وخبراتها في تطوير البرمجيات.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Customer Support",
        ar: "دعم العملاء",
      },
      description: {
        en: "Provide contact information and support channels for customers.",
        ar: "توفير وسائل التواصل وقنوات الدعم الفني للعملاء.",
      },
      icon: Headset,
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
      en: "Presenting a software product through a clear and engaging business website.",
      ar: "عرض منتج برمجي بطريقة واضحة وجذابة من خلال موقع احترافي.",
    },
    {
      en: "Organizing product features, pricing, and company information into an intuitive structure.",
      ar: "تنظيم المزايا وخطط الأسعار ومعلومات الشركة في هيكل سهل التصفح.",
    },
    {
      en: "Maintaining responsive layouts across different screen sizes.",
      ar: "الحفاظ على توافق التصميم مع مختلف أحجام الشاشات.",
    },
    {
      en: "Creating reusable sections while keeping the interface visually consistent.",
      ar: "إنشاء أقسام قابلة لإعادة الاستخدام مع الحفاظ على اتساق التصميم.",
    },
  ],

  solutions: [
    {
      en: "Built reusable website sections for product features and business content.",
      ar: "إنشاء أقسام قابلة لإعادة الاستخدام لعرض مزايا المنتج ومحتوى الموقع.",
    },
    {
      en: "Used Bootstrap's responsive grid system to support multiple screen sizes.",
      ar: "استخدام نظام Bootstrap Grid لإنشاء تصميم متجاوب يدعم جميع الأجهزة.",
    },
    {
      en: "Organized software information into clear and easy-to-navigate pages.",
      ar: "تنظيم معلومات النظام داخل صفحات واضحة وسهلة التصفح.",
    },
    {
      en: "Applied consistent styling and component structure across the website.",
      ar: "تطبيق تصميم موحد وهيكل مكونات متناسق في جميع صفحات الموقع.",
    },
  ],

  learned: [
    {
      title: {
        en: "Building responsive corporate software websites.",
        ar: "تطوير مواقع شركات البرمجيات المتجاوبة.",
      },
      icon: MonitorSmartphone,
    },
    {
      title: {
        en: "Structuring product-focused business content.",
        ar: "تنظيم محتوى المواقع الموجهة للمنتجات البرمجية.",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Designing clean Bootstrap-based interfaces.",
        ar: "تصميم واجهات احترافية باستخدام Bootstrap.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Creating reusable website sections.",
        ar: "إنشاء أقسام قابلة لإعادة الاستخدام.",
      },
      icon: Building2,
    },
  ],

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

  full_date: {
    en: "August 2016",
    ar: "أغسطس 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "fastteleco",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "FASTteleco Cloud Invoice System",
    ar: "نظام الفواتير السحابي FASTteleco",
  },

  framework: "HTML/CSS",

  type: {
    en: "Business Software Website",
    ar: "موقع لشركة برمجيات",
  },

  short_description: {
    en: "A responsive corporate website showcasing a cloud-based billing and business management solution with product features, pricing, and company information.",
    ar: "موقع إلكتروني متجاوب لعرض نظام فوترة سحابي وحلول إدارة الأعمال مع استعراض المزايا وخطط الأسعار ومعلومات الشركة.",
  },

  description: {
    en: "FASTteleco is a responsive corporate website built to present a cloud-based billing and business management solution. The website showcases the platform's features, pricing plans, business benefits, and company information through a clean, modern, and responsive interface that helps businesses understand the product and its capabilities.",
    ar: "FASTteleco هو موقع إلكتروني متجاوب تم تطويره لعرض نظام فوترة سحابي وحلول متكاملة لإدارة الأعمال. يستعرض الموقع مزايا النظام وخطط الاشتراك والفوائد التي يقدمها للشركات، بالإضافة إلى معلومات عن الشركة، من خلال واجهة حديثة وسهلة الاستخدام ومتوافقة مع جميع الأجهزة.",
  },

  links: {
    demo: "https://nohaemad123.github.io/fastteleco/",
    github: "https://github.com/nohaemad123/fastteleco.git",
  },
};
