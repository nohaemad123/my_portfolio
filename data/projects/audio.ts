import { ProjectType } from "@/types/projectType";
import { FiNavigation } from "react-icons/fi";

import {
  Smartphone,
  Blocks,
  Code2,
  Headphones,
  Sparkles,
  LayoutDashboard,
  Monitor,
  Palette,
} from "lucide-react";

export const audio: ProjectType = {
  id: 14,
  image: "/audio.png",
  scrollImage: true,

  features: [
    {
      title: {
        en: "Product Showcase",
        ar: "عرض المنتجات",
      },
      description: {
        en: "Present premium audio products through well-organized sections.",
        ar: "عرض منتجات الصوت الاحترافية من خلال أقسام منظمة وواضحة.",
      },
      icon: Headphones,
    },
    {
      title: {
        en: "Company Information",
        ar: "معلومات الشركة",
      },
      description: {
        en: "Introduce the company, its products, and featured services.",
        ar: "التعريف بالشركة ومنتجاتها والخدمات التي تقدمها.",
      },
      icon: LayoutDashboard,
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
    {
      title: {
        en: "Smooth Navigation",
        ar: "تنقل سلس",
      },
      description: {
        en: "Navigate easily between different website sections.",
        ar: "سهولة التنقل بين أقسام الموقع المختلفة.",
      },
      icon: FiNavigation,
    },
    {
      title: {
        en: "Modern User Interface",
        ar: "واجهة مستخدم حديثة",
      },
      description: {
        en: "Clean, professional interface with a consistent visual design.",
        ar: "واجهة احترافية بتصميم نظيف ومتناسق.",
      },
      icon: Sparkles,
    },
    {
      title: {
        en: "Reusable Sections",
        ar: "أقسام قابلة لإعادة الاستخدام",
      },
      description: {
        en: "Structured layouts for products, company information, and featured content.",
        ar: "تخطيطات منظمة للمنتجات ومعلومات الشركة والمحتوى المميز.",
      },
      icon: Blocks,
    },
  ],

  challenges: [
    {
      en: "Designing a professional website that reflects the company's brand identity.",
      ar: "تصميم موقع احترافي يعكس هوية الشركة.",
    },
    {
      en: "Presenting products in a clear and visually appealing way.",
      ar: "عرض المنتجات بطريقة واضحة وجذابة.",
    },
    {
      en: "Maintaining responsive layouts across different screen sizes.",
      ar: "الحفاظ على توافق التصميم مع جميع أحجام الشاشات.",
    },
    {
      en: "Keeping the website simple while providing enough product information.",
      ar: "الحفاظ على بساطة الموقع مع توفير معلومات كافية عن المنتجات.",
    },
  ],

  solutions: [
    {
      en: "Designed reusable page sections for better maintainability.",
      ar: "تصميم أقسام قابلة لإعادة الاستخدام لتسهيل الصيانة.",
    },
    {
      en: "Used Bootstrap Grid to build fully responsive layouts.",
      ar: "استخدام Bootstrap Grid لإنشاء تخطيطات متجاوبة بالكامل.",
    },
    {
      en: "Applied modern UI principles to improve readability and user experience.",
      ar: "تطبيق مبادئ تصميم واجهات حديثة لتحسين تجربة المستخدم وسهولة القراءة.",
    },
    {
      en: "Optimized spacing, typography, and product presentation throughout the website.",
      ar: "تحسين المسافات والخطوط وطريقة عرض المنتجات في جميع أجزاء الموقع.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built responsive corporate and product showcase websites.",
        ar: "إنشاء مواقع شركات وصفحات لعرض المنتجات بشكل متجاوب.",
      },
      icon: Monitor,
    },
    {
      title: {
        en: "Improved responsive layout skills using Bootstrap.",
        ar: "تطوير مهارات التصميم المتجاوب باستخدام Bootstrap.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Created reusable website sections and layouts.",
        ar: "إنشاء أقسام وتخطيطات قابلة لإعادة الاستخدام.",
      },
      icon: Blocks,
    },
    {
      title: {
        en: "Applied modern UI design principles for product presentation.",
        ar: "تطبيق مبادئ تصميم واجهات حديثة لعرض المنتجات.",
      },
      icon: Palette,
    },
    {
      title: {
        en: "Enhanced HTML, CSS, and JavaScript development practices.",
        ar: "تطوير مهارات العمل باستخدام HTML وCSS وJavaScript.",
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
      en: "Personal Project",
      ar: "مشروع شخصي",
    },
    duration: {
      en: "1 Week",
      ar: "أسبوع",
    },
    status: {
      en: "Completed",
      ar: "تم الإنجاز",
    },
    year: "2016",
  },

  full_date: {
    en: "February 2016",
    ar: "فبراير 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "audio",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "Audio Website",
    ar: "موقع Audio",
  },

  framework: "HTML/CSS",

  type: {
    en: "Product Showcase Website",
    ar: "موقع لعرض المنتجات",
  },

  short_description: {
    en: "A responsive product showcase website developed to present premium audio products through a modern, clean, and user-friendly interface.",
    ar: "موقع متجاوب لعرض المنتجات تم تطويره لعرض منتجات الصوت الاحترافية من خلال واجهة حديثة ونظيفة وسهلة الاستخدام.",
  },

  description: {
    en: "Audio is a responsive product showcase website built using HTML, CSS, Bootstrap, JavaScript, and jQuery. The website presents premium audio products through organized product sections, modern layouts, and smooth navigation. The project focuses on delivering a professional browsing experience with responsive design and a clean user interface across all devices.",
    ar: "Audio هو موقع متجاوب لعرض المنتجات تم تطويره باستخدام HTML وCSS وBootstrap وJavaScript وjQuery. يعرض الموقع منتجات الصوت الاحترافية من خلال أقسام منظمة وتصميم حديث وتنقل سلس، مع التركيز على تقديم تجربة تصفح احترافية وواجهة مستخدم نظيفة ومتوافقة مع جميع الأجهزة.",
  },

  links: {
    demo: "https://nohaemad123.github.io/audio/",
    github: "https://github.com/nohaemad123/audio.git",
  },
};
