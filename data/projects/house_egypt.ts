import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  Code2,
  Building2,
  MonitorSmartphone,
  LayoutGrid,
  Briefcase,
  Home,
} from "lucide-react";

export const house_egypt: ProjectType = {
  id: 31,
  image: "/house_egypt.png",
  scrollImage: true,

  name: {
    en: "House Egypt",
    ar: "هاوس إيجيبت",
  },

  type: {
    en: "Real Estate Website",
    ar: "موقع عقارات",
  },

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  framework: "HTML/CSS",

  slug: "house_egypt",

  short_description: {
    en: "A responsive real estate website that showcases residential and commercial properties, investment opportunities, and real estate services through a modern browsing experience.",
    ar: "موقع عقاري متجاوب يعرض العقارات السكنية والتجارية، وفرص الاستثمار، وخدمات الوساطة العقارية من خلال تجربة تصفح حديثة.",
  },

  description: {
    en: "House Egypt is a responsive real estate website developed to present residential and commercial properties, investment opportunities, and real estate services. The website features organized property listings, detailed property pages, and a modern multi-page interface that provides users with a smooth browsing experience across all devices.",
    ar: "House Egypt هو موقع عقاري متجاوب تم تطويره لعرض العقارات السكنية والتجارية، وفرص الاستثمار، وخدمات الوساطة العقارية. يوفر الموقع قوائم عقارية منظمة، وصفحات تفصيلية لكل عقار، وواجهة متعددة الصفحات بتصميم حديث تمنح المستخدمين تجربة تصفح سهلة على جميع الأجهزة.",
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

  full_date: {
    en: "December 2016",
    ar: "ديسمبر 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  features: [
    {
      title: {
        en: "Property Listings",
        ar: "قوائم العقارات",
      },
      description: {
        en: "Browse residential and commercial properties in a well-organized catalog.",
        ar: "استعراض العقارات السكنية والتجارية من خلال قوائم منظمة.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Property Details",
        ar: "تفاصيل العقار",
      },
      description: {
        en: "Explore property specifications, images, locations, and pricing information.",
        ar: "عرض تفاصيل العقار، والصور، والموقع، والأسعار.",
      },
      icon: Home,
    },
    {
      title: {
        en: "Real Estate Services",
        ar: "الخدمات العقارية",
      },
      description: {
        en: "Present buying, selling, and real estate investment services.",
        ar: "عرض خدمات البيع والشراء والاستثمار العقاري.",
      },
      icon: Briefcase,
    },
    {
      title: {
        en: "Easy Navigation",
        ar: "سهولة التصفح",
      },
      description: {
        en: "Navigate smoothly between property categories and website sections.",
        ar: "التنقل بسهولة بين أقسام العقارات وصفحات الموقع.",
      },
      icon: LayoutGrid,
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
      en: "Organizing large numbers of property listings without overwhelming users.",
      ar: "تنظيم عدد كبير من العقارات دون التأثير على سهولة التصفح.",
    },
    {
      en: "Designing an intuitive browsing experience for different property types.",
      ar: "تصميم تجربة تصفح سهلة لأنواع العقارات المختلفة.",
    },
    {
      en: "Maintaining consistent layouts across multiple pages.",
      ar: "الحفاظ على تصميم موحد عبر جميع صفحات الموقع.",
    },
    {
      en: "Ensuring responsive performance on different screen sizes.",
      ar: "ضمان عمل الموقع بشكل متجاوب على مختلف أحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Organized properties into structured sections for easier browsing.",
      ar: "تنظيم العقارات داخل أقسام واضحة لتسهيل التصفح.",
    },
    {
      en: "Designed reusable property cards with consistent layouts.",
      ar: "تصميم بطاقات عقارية قابلة لإعادة الاستخدام مع الحفاظ على اتساق التصميم.",
    },
    {
      en: "Built responsive pages using Bootstrap's grid system.",
      ar: "استخدام Bootstrap Grid لإنشاء صفحات متجاوبة.",
    },
    {
      en: "Applied a clear visual hierarchy to improve navigation and readability.",
      ar: "تطبيق تسلسل بصري واضح لتحسين سهولة التنقل وقراءة المحتوى.",
    },
  ],

  learned: [
    {
      title: {
        en: "Designed responsive real estate websites.",
        ar: "تطوير مواقع عقارية متجاوبة.",
      },
      icon: MonitorSmartphone,
    },
    {
      title: {
        en: "Built reusable property listing components.",
        ar: "إنشاء مكونات قابلة لإعادة الاستخدام لعرض العقارات.",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Improved Bootstrap responsive layouts.",
        ar: "تحسين التصميمات المتجاوبة باستخدام Bootstrap.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Organized scalable frontend project structures.",
        ar: "تنظيم هيكل مشاريع Frontend بشكل قابل للتوسع.",
      },
      icon: Code2,
    },
    {
      title: {
        en: "Enhanced property browsing user experience.",
        ar: "تحسين تجربة تصفح العقارات للمستخدم.",
      },
      icon: Home,
    },
  ],

  links: {
    demo: "https://nohaemad123.github.io/house_egypt/",
    github: "https://github.com/nohaemad123/house_egypt.git",
  },
};
