import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  Code2,
  Building2,
  Package,
  MonitorSmartphone,
  LayoutGrid,
  Phone,
  Briefcase,
} from "lucide-react";

export const light: ProjectType = {
  id: 33,
  image: "/light.png",
  scrollImage: true,

  name: {
    en: "Light Technology",
    ar: "لايت تكنولوجي",
  },

  type: {
    en: "Fiber Optics & Telecommunications Website",
    ar: "موقع شركة ألياف ضوئية واتصالات",
  },

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  framework: "HTML/CSS",

  slug: "light",

  short_description: {
    en: "A responsive corporate website developed for a fiber optics and telecommunications company, showcasing networking products, business solutions, and company services.",
    ar: "موقع شركة متجاوب تم تطويره لشركة متخصصة في الألياف الضوئية والاتصالات، يعرض المنتجات والحلول التقنية وخدمات الشركة.",
  },

  description: {
    en: "LIGHT Technology is a responsive corporate website developed for a company specializing in fiber optic communication systems, networking equipment, and telecommunications solutions. The website showcases the company's profile, products, services, and business expertise through a clean, modern, and user-friendly interface, providing clients with an accessible way to explore its solutions across all devices.",
    ar: "LIGHT Technology هو موقع شركة متجاوب تم تطويره لشركة متخصصة في أنظمة الألياف الضوئية، ومعدات الشبكات، وحلول الاتصالات. يعرض الموقع نبذة عن الشركة، والمنتجات، والخدمات، وخبراتها التقنية من خلال واجهة حديثة وسهلة الاستخدام تتيح للعملاء استكشاف حلولها المختلفة على جميع الأجهزة.",
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
    year: "2017",
  },

  full_date: {
    en: "February 2017",
    ar: "فبراير 2017",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  features: [
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Introduces the company's expertise in fiber optic and telecommunication solutions.",
        ar: "عرض خبرة الشركة في حلول الألياف الضوئية والاتصالات.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Products Catalog",
        ar: "كتالوج المنتجات",
      },
      description: {
        en: "Showcases fiber optic cables, networking equipment, and communication products.",
        ar: "عرض كابلات الألياف الضوئية، ومعدات الشبكات، ومنتجات الاتصالات.",
      },
      icon: Package,
    },
    {
      title: {
        en: "Business Solutions",
        ar: "الحلول التقنية",
      },
      description: {
        en: "Highlights networking, telecommunication, and infrastructure solutions.",
        ar: "استعراض حلول الشبكات والاتصالات والبنية التحتية.",
      },
      icon: Briefcase,
    },
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Provides an optimized browsing experience across desktop, tablet, and mobile devices.",
        ar: "تجربة استخدام محسنة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Contact & Inquiry",
        ar: "التواصل والاستفسارات",
      },
      description: {
        en: "Allows customers to easily contact the company for business inquiries.",
        ar: "إتاحة وسائل التواصل مع الشركة لإرسال الاستفسارات بسهولة.",
      },
      icon: Phone,
    },
  ],

  challenges: [
    {
      en: "Designing a professional interface that reflects the company's technology-focused identity.",
      ar: "تصميم واجهة احترافية تعكس هوية الشركة التقنية.",
    },
    {
      en: "Presenting a wide range of fiber optic products in a clear and organized structure.",
      ar: "تنظيم عدد كبير من منتجات الألياف الضوئية بطريقة واضحة وسهلة.",
    },
    {
      en: "Building a fully responsive website that maintains consistency across different screen sizes.",
      ar: "تطوير موقع متجاوب بالكامل يحافظ على اتساق التصميم في جميع أحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Organized products into categorized sections for easier navigation.",
      ar: "تنظيم المنتجات داخل أقسام مصنفة لتسهيل التصفح.",
    },
    {
      en: "Built reusable page layouts to maintain a consistent design across the website.",
      ar: "إنشاء تخطيطات قابلة لإعادة الاستخدام للحفاظ على اتساق التصميم.",
    },
    {
      en: "Implemented responsive Bootstrap components to support all screen sizes.",
      ar: "استخدام مكونات Bootstrap المتجاوبة لدعم جميع الأجهزة.",
    },
  ],

  learned: [
    {
      title: {
        en: "Responsive Web Development",
        ar: "تطوير مواقع متجاوبة",
      },
      icon: MonitorSmartphone,
    },
    {
      title: {
        en: "Corporate Website Architecture",
        ar: "بناء هيكل مواقع الشركات",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Bootstrap Grid & Components",
        ar: "استخدام Bootstrap Grid والمكونات",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Reusable Frontend Structure",
        ar: "إنشاء هيكل Frontend قابل لإعادة الاستخدام",
      },
      icon: Code2,
    },
  ],

  links: {
    demo: "https://nohaemad123.github.io/light/",
    github: "https://github.com/nohaemad123/light.git",
  },
};
