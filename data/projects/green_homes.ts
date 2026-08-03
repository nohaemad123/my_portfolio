import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  Blocks,
  Code2,
  LayoutDashboard,
  PhoneCall,
  BriefcaseBusiness,
  User,
  Home,
  Building,
} from "lucide-react";

export const green_homes: ProjectType = {
  id: 15,
  image: "/green_homes.png",
  scrollImage: true,

  features: [
    {
      title: {
        en: "Property Listings",
        ar: "قائمة العقارات",
      },
      description: {
        en: "Browse residential and commercial properties through organized listing pages.",
        ar: "تصفح العقارات السكنية والتجارية من خلال صفحات عرض منظمة.",
      },
      icon: Building,
    },
    {
      title: {
        en: "Property Details",
        ar: "تفاصيل العقار",
      },
      description: {
        en: "Explore detailed property information, images, and specifications.",
        ar: "استعرض معلومات العقار والصور والمواصفات بالتفصيل.",
      },
      icon: Home,
    },
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Present the company's vision, experience, and real estate expertise.",
        ar: "يعرض رؤية الشركة وخبراتها في مجال العقارات.",
      },
      icon: User,
    },
    {
      title: {
        en: "Real Estate Services",
        ar: "الخدمات العقارية",
      },
      description: {
        en: "Showcase the services provided for buyers, sellers, and investors.",
        ar: "يعرض الخدمات المقدمة للمشترين والبائعين والمستثمرين.",
      },
      icon: BriefcaseBusiness,
    },
    {
      title: {
        en: "Contact & Inquiry",
        ar: "التواصل والاستفسارات",
      },
      description: {
        en: "Allow visitors to contact the company through dedicated contact pages.",
        ar: "يتيح للزوار التواصل مع الشركة من خلال صفحات مخصصة للاستفسارات.",
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
        ar: "متوافق مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
      icon: Smartphone,
    },
  ],

  challenges: [
    {
      en: "Building a professional multi-page real estate website.",
      ar: "بناء موقع عقاري احترافي متعدد الصفحات.",
    },
    {
      en: "Organizing property information in a clear and user-friendly way.",
      ar: "تنظيم معلومات العقارات بطريقة واضحة وسهلة الاستخدام.",
    },
    {
      en: "Maintaining a consistent design across multiple pages.",
      ar: "الحفاظ على تصميم موحد عبر جميع صفحات الموقع.",
    },
    {
      en: "Ensuring responsive layouts on different screen sizes.",
      ar: "ضمان توافق الموقع مع مختلف أحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Created reusable sections to simplify website maintenance.",
      ar: "تم إنشاء أقسام قابلة لإعادة الاستخدام لتسهيل صيانة الموقع.",
    },
    {
      en: "Used Bootstrap Grid to build responsive page layouts.",
      ar: "تم استخدام Bootstrap Grid لبناء صفحات متجاوبة.",
    },
    {
      en: "Designed organized property pages to improve readability.",
      ar: "تم تصميم صفحات عقارية منظمة لتحسين سهولة القراءة.",
    },
    {
      en: "Applied a consistent visual style and navigation across the website.",
      ar: "تم تطبيق تصميم موحد ونظام تنقل متناسق في جميع صفحات الموقع.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built responsive multi-page real estate websites.",
        ar: "تطوير مواقع عقارية متجاوبة متعددة الصفحات.",
      },
      icon: Building,
    },
    {
      title: {
        en: "Designed reusable website sections and layouts.",
        ar: "تصميم أقسام وتخطيطات قابلة لإعادة الاستخدام.",
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
        en: "Created user-friendly property presentation pages.",
        ar: "إنشاء صفحات عرض عقارات سهلة الاستخدام.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Enhanced HTML, CSS, and JavaScript development skills.",
        ar: "تطوير مهارات HTML وCSS وJavaScript.",
      },
      icon: Code2,
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
    en: "May 2016",
    ar: "مايو 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "green_homes",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "Green Homes",
    ar: "جرين هومز",
  },

  framework: "HTML/CSS",

  type: {
    en: "Real Estate Website",
    ar: "موقع عقارات",
  },

  short_description: {
    en: "A responsive real estate website designed to showcase properties, real estate services, and company information through a modern user experience.",
    ar: "موقع عقاري متجاوب صُمم لعرض العقارات والخدمات العقارية ومعلومات الشركة من خلال تجربة استخدام حديثة.",
  },

  description: {
    en: "Green Home is a responsive multi-page real estate website developed to showcase residential and commercial properties through a modern and user-friendly interface. The website includes property listings, company information, real estate services, and contact pages, providing visitors with a complete property browsing experience.",
    ar: "Green Home هو موقع عقاري متجاوب متعدد الصفحات تم تطويره لعرض العقارات السكنية والتجارية من خلال واجهة حديثة وسهلة الاستخدام. يضم الموقع صفحات لعرض العقارات، ومعلومات عن الشركة، والخدمات العقارية، وصفحات للتواصل، مما يوفر للزوار تجربة متكاملة لتصفح العقارات.",
  },

  links: {
    demo: "https://nohaemad123.github.io/green_home/",
    github: "https://github.com/nohaemad123/green_home.git",
  },
};
