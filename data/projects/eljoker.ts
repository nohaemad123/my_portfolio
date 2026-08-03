import { ProjectType } from "@/types/projectType";

import {
  Code2,
  MonitorSmartphone,
  LayoutGrid,
  Languages,
  Sparkles,
  Plane,
  Mail,
  PanelsTopLeft,
} from "lucide-react";

export const joker: ProjectType = {
  id: 39,
  image: "/joker.png",
  scrollImage: true,

  features: [
    {
      icon: Plane,
      title: {
        en: "Travel Packages",
        ar: "باقات السفر",
      },
      description: {
        en: "Showcase featured travel packages, destinations, and seasonal offers.",
        ar: "عرض باقات السفر والوجهات السياحية والعروض الموسمية.",
      },
    },
    {
      icon: MonitorSmartphone,
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Optimized for desktop, tablet, and mobile devices.",
        ar: "متوافق مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
    },
    {
      icon: Languages,
      title: {
        en: "RTL Support",
        ar: "دعم اللغة العربية",
      },
      description: {
        en: "Provides a fully optimized right-to-left experience for Arabic users.",
        ar: "يوفر تجربة استخدام متكاملة تدعم اتجاه الكتابة من اليمين إلى اليسار.",
      },
    },
    {
      icon: Mail,
      title: {
        en: "Contact & Booking",
        ar: "التواصل والحجز",
      },
      description: {
        en: "Allows visitors to contact the agency and submit travel inquiries.",
        ar: "يتيح للمستخدمين التواصل مع الشركة وإرسال طلبات واستفسارات الحجز.",
      },
    },
    {
      icon: Sparkles,
      title: {
        en: "Modern Landing Page",
        ar: "واجهة عصرية",
      },
      description: {
        en: "Clean sections with engaging visuals and call-to-action components.",
        ar: "واجهة حديثة تحتوي على أقسام واضحة وعناصر تشجع المستخدم على التفاعل.",
      },
    },
  ],

  challenges: [
    {
      en: "Designing an attractive landing page that encourages users to explore travel offers.",
      ar: "تصميم صفحة هبوط جذابة تشجع المستخدمين على استكشاف عروض السفر.",
    },
    {
      en: "Creating a responsive RTL layout that works smoothly across different devices.",
      ar: "إنشاء تصميم متجاوب يدعم اللغة العربية ويعمل بكفاءة على جميع الأجهزة.",
    },
    {
      en: "Balancing visual appeal with fast loading performance.",
      ar: "تحقيق توازن بين التصميم الجذاب وسرعة تحميل الصفحة.",
    },
  ],

  solutions: [
    {
      en: "Organized the content into clear landing page sections for easier navigation.",
      ar: "تنظيم المحتوى داخل أقسام واضحة لتسهيل تصفح الصفحة.",
    },
    {
      en: "Built responsive layouts using Bootstrap's grid system.",
      ar: "استخدام Bootstrap Grid لإنشاء تصميم متجاوب يدعم جميع الشاشات.",
    },
    {
      en: "Optimized images and static assets to improve loading performance.",
      ar: "تحسين الصور والملفات الثابتة لتقليل وقت تحميل الصفحة.",
    },
  ],

  learned: [
    {
      icon: MonitorSmartphone,
      title: {
        en: "Responsive Landing Page Development",
        ar: "تطوير صفحات هبوط متجاوبة",
      },
    },
    {
      icon: LayoutGrid,
      title: {
        en: "Bootstrap Grid Layouts",
        ar: "بناء تخطيطات باستخدام Bootstrap Grid",
      },
    },
    {
      icon: Languages,
      title: {
        en: "RTL Website Development",
        ar: "تطوير مواقع تدعم اللغة العربية",
      },
    },
    {
      icon: PanelsTopLeft,
      title: {
        en: "Landing Page UI Design",
        ar: "تصميم واجهات صفحات الهبوط",
      },
    },
    {
      icon: Code2,
      title: {
        en: "JavaScript & jQuery Interactions",
        ar: "تنفيذ التفاعلات باستخدام JavaScript و jQuery",
      },
    },
  ],

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
      ar: "تم الإنجاز",
    },
    year: "2017",
  },

  full_date: {
    en: "September 2017",
    ar: "سبتمبر 2017",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "joker",

  category: {
    en: "Landing Page",
    ar: "صفحة تعريفيه",
  },

  name: {
    en: "Joker Travel",
    ar: "الجوكر ترافيل",
  },

  framework: "HTML/CSS",

  type: {
    en: "Travel Agency Landing Page",
    ar: "صفحة هبوط لوكالة سفر",
  },

  short_description: {
    en: "A responsive landing page developed for a travel agency to promote travel packages, destinations, and tourism services through a modern user experience.",
    ar: "صفحة هبوط متجاوبة تم تطويرها لوكالة سفر لعرض باقات السفر والوجهات والخدمات السياحية من خلال تجربة استخدام حديثة.",
  },

  description: {
    en: "Joker Travel is a responsive landing page developed for a travel agency to showcase travel packages, featured destinations, and tourism services. The project focuses on delivering an engaging browsing experience through modern layouts, RTL support, responsive design, and clear call-to-action sections.",
    ar: "جوكر ترافيل هي صفحة هبوط متجاوبة تم تطويرها لوكالة سفر لعرض باقات السفر والوجهات السياحية والخدمات المختلفة. يركز المشروع على تقديم تجربة استخدام مميزة من خلال تصميم حديث، ودعم كامل للغة العربية، وتخطيط متجاوب، وأقسام واضحة تشجع المستخدم على التواصل والحجز.",
  },

  links: {
    demo: "https://nohaemad123.github.io/joker/",
    github: "https://github.com/nohaemad123/joker.git",
  },
};
