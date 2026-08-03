import { ProjectType } from "@/types/projectType";
import {
  Smartphone,
  Code2,
  LayoutDashboard,
  MousePointerClick,
  Palette,
  Navigation,
  GraduationCap,
} from "lucide-react";

export const wakel: ProjectType = {
  id: 18,
  image: "/wakel.png",
  scrollImage: true,

  features: [
    {
      title: {
        en: "Multi-page Structure",
        ar: "هيكل متعدد الصفحات",
      },
      description: {
        en: "Well-organized pages for school administration services and information.",
        ar: "صفحات منظمة لإدارة المدرسة والخدمات والمعلومات الإدارية.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Administrative Sections",
        ar: "الأقسام الإدارية",
      },
      description: {
        en: "Dedicated pages for school management, services, and organizational content.",
        ar: "صفحات مخصصة للإدارة المدرسية والخدمات والمحتوى التنظيمي.",
      },
      icon: GraduationCap,
    },
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Optimized for desktop, tablet, and mobile devices.",
        ar: "متوافق مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف المحمولة.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Smooth Navigation",
        ar: "تنقل سلس",
      },
      description: {
        en: "Simple navigation between all website sections for better usability.",
        ar: "تنقل بسيط بين جميع أقسام الموقع لتحسين سهولة الاستخدام.",
      },
      icon: Navigation,
    },
    {
      title: {
        en: "Modern User Interface",
        ar: "واجهة مستخدم حديثة",
      },
      description: {
        en: "Professional layouts built with Bootstrap and custom styling.",
        ar: "تصميمات احترافية باستخدام Bootstrap مع تنسيقات مخصصة.",
      },
      icon: Palette,
    },
    {
      title: {
        en: "Interactive Components",
        ar: "عناصر تفاعلية",
      },
      description: {
        en: "Enhanced user interactions using JavaScript and jQuery.",
        ar: "تحسين تفاعل المستخدم باستخدام JavaScript و jQuery.",
      },
      icon: MousePointerClick,
    },
  ],

  challenges: [
    {
      en: "Designing a clear navigation system for multiple administrative pages.",
      ar: "تصميم نظام تنقل واضح لعدد كبير من الصفحات الإدارية.",
    },
    {
      en: "Maintaining a consistent design across the entire website.",
      ar: "الحفاظ على تصميم موحد في جميع صفحات الموقع.",
    },
    {
      en: "Creating reusable page layouts while keeping development simple.",
      ar: "إنشاء تخطيطات قابلة لإعادة الاستخدام مع الحفاظ على بساطة التطوير.",
    },
    {
      en: "Ensuring responsiveness across different devices and screen sizes.",
      ar: "ضمان التوافق مع مختلف الأجهزة وأحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Designed reusable page layouts to keep the interface consistent.",
      ar: "تصميم تخطيطات قابلة لإعادة الاستخدام للحفاظ على تناسق الواجهة.",
    },
    {
      en: "Used Bootstrap Grid to build responsive pages efficiently.",
      ar: "استخدام Bootstrap Grid لإنشاء صفحات متجاوبة بكفاءة.",
    },
    {
      en: "Organized styles and page structure for easier maintenance.",
      ar: "تنظيم ملفات التنسيق وهيكل الصفحات لتسهيل الصيانة.",
    },
    {
      en: "Implemented JavaScript and jQuery interactions to improve usability.",
      ar: "إضافة تفاعلات باستخدام JavaScript و jQuery لتحسين تجربة الاستخدام.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built a structured multi-page school administration website.",
        ar: "تطوير موقع متعدد الصفحات لإدارة المدارس.",
      },
      icon: GraduationCap,
    },
    {
      title: {
        en: "Improved page organization and navigation structure.",
        ar: "تحسين تنظيم الصفحات وهيكل التنقل.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Enhanced responsive layouts using Bootstrap.",
        ar: "تحسين التصميمات المتجاوبة باستخدام Bootstrap.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Applied consistent UI design across multiple pages.",
        ar: "تطبيق تصميم موحد عبر جميع صفحات الموقع.",
      },
      icon: Palette,
    },
    {
      title: {
        en: "Improved JavaScript and jQuery integration for interactive websites.",
        ar: "تعزيز استخدام JavaScript و jQuery لإنشاء مواقع أكثر تفاعلاً.",
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

  full_date: {
    en: "July 2017",
    ar: "يوليو 2017",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "wakel",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "School Agent Portal",
    ar: "بوابة وكيل المدرسة",
  },

  framework: "HTML/CSS",

  type: {
    en: "School Administration Portal",
    ar: "بوابة إدارة المدارس",
  },

  short_description: {
    en: "Multi-page educational portal developed for school management, providing organized access to administrative sections, forms, tasks, and daily operations.",
    ar: "بوابة تعليمية متعددة الصفحات لإدارة المدارس، توفر وصولاً منظماً إلى الأقسام الإدارية والنماذج والمهام والعمليات اليومية.",
  },

  description: {
    en: "Wakel is a responsive multi-page school administration website developed to support daily management activities through a structured and easy-to-navigate interface. The website includes administrative pages, management services, official forms, announcements, and organized content sections while maintaining a clean design and responsive experience across different devices.",
    ar: "Wakel هو موقع متجاوب متعدد الصفحات لإدارة المدارس، تم تطويره لدعم الأنشطة الإدارية اليومية من خلال واجهة منظمة وسهلة الاستخدام. يضم الموقع صفحات إدارية وخدمات تنظيمية ونماذج رسمية وإعلانات وأقساماً مرتبة مع الحفاظ على تصميم احترافي وتجربة استخدام متجاوبة على جميع الأجهزة.",
  },

  links: {
    demo: "https://nohaemad123.github.io/wakel/",
    github: "https://github.com/nohaemad123/wakel.git",
  },
};
