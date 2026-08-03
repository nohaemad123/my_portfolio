import {
  FaBootstrap,
  FaFileSignature,
  FaGlobe,
  FaMobileAlt,
  FaMoneyCheckAlt,
  FaUserShield,
  FaWpforms,
} from "react-icons/fa";

import { ProjectType } from "@/types/projectType";

export const osool_eltamweel: ProjectType = {
  id: 36,

  image: "/osool_eltamweel.png",
  scrollImage: false,

  name: {
    en: "Osool eltamwel Financing Portal",
    ar: "بوابة اصول التمويل للتمويل",
  },

  type: {
    en: "Financing Services Portal",
    ar: "بوابة خدمات التمويل",
  },

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  framework: "HTML/CSS",

  slug: "osool_eltamweel",

  short_description: {
    en: "A responsive financing services portal that allows users to register, submit financing applications, access required forms, and explore installment services.",
    ar: "بوابة تمويل متجاوبة تتيح للمستخدمين التسجيل، وتقديم طلبات التمويل، والوصول إلى النماذج المطلوبة، واستعراض خدمات التقسيط.",
  },

  description: {
    en: "Alshalkhi Financing Portal is a responsive web platform developed for financing and installment services. The website enables users to register, submit financing requests, access application forms, and explore available financial solutions through a clean, user-friendly, and RTL-optimized interface.",
    ar: "بوابة الشالخي للتمويل هي منصة ويب متجاوبة تم تطويرها لتقديم خدمات التمويل والتقسيط. تتيح للمستخدمين إنشاء حسابات، وتقديم طلبات التمويل، والوصول إلى النماذج المطلوبة، واستعراض الحلول المالية من خلال واجهة سهلة الاستخدام ومتوافقة مع اتجاه الكتابة من اليمين إلى اليسار.",
  },

  links: {
    demo: "https://nohaemad123.github.io/osool_eltamweel/",
    github: "https://github.com/nohaemad123/osool_eltamweel.git",
  },

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },

    client: {
      en: "D-Tag",
      ar: "دي تاج",
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
    en: "June 2017",
    ar: "يونيو 2017",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  features: [
    {
      title: {
        en: "Account Registration",
        ar: "تسجيل الحساب",
      },
      description: {
        en: "Provides user registration and login interfaces for financing services.",
        ar: "يوفر واجهات لتسجيل المستخدمين وتسجيل الدخول لخدمات التمويل.",
      },
      icon: FaUserShield,
    },
    {
      title: {
        en: "Financing Applications",
        ar: "طلبات التمويل",
      },
      description: {
        en: "Allows customers to submit financing and installment requests online.",
        ar: "يتيح للعملاء تقديم طلبات التمويل والتقسيط عبر الإنترنت.",
      },
      icon: FaFileSignature,
    },
    {
      title: {
        en: "Application Forms",
        ar: "نماذج الطلبات",
      },
      description: {
        en: "Offers downloadable and online forms required for financing procedures.",
        ar: "يوفر النماذج المطلوبة لإجراءات التمويل سواء للتحميل أو التعبئة عبر الإنترنت.",
      },
      icon: FaWpforms,
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
      icon: FaMobileAlt,
    },
  ],

  challenges: [
    {
      en: "Designing a simple and intuitive financing application workflow.",
      ar: "تصميم مسار بسيط وسهل لتقديم طلبات التمويل.",
    },
    {
      en: "Organizing multiple financial services into a clear navigation structure.",
      ar: "تنظيم الخدمات المالية المتعددة داخل هيكل تنقل واضح.",
    },
    {
      en: "Building a responsive RTL interface for Arabic users.",
      ar: "بناء واجهة متجاوبة تدعم اتجاه الكتابة من اليمين إلى اليسار للمستخدمين العرب.",
    },
  ],

  solutions: [
    {
      en: "Organized financing services into dedicated sections for easier navigation.",
      ar: "تنظيم خدمات التمويل في أقسام مستقلة لتسهيل الوصول إليها.",
    },
    {
      en: "Designed step-based application pages to simplify the user journey.",
      ar: "تصميم صفحات تقديم الطلبات على شكل خطوات لتسهيل تجربة المستخدم.",
    },
    {
      en: "Built responsive RTL layouts using Bootstrap components.",
      ar: "تطوير واجهات متجاوبة تدعم RTL باستخدام Bootstrap.",
    },
  ],

  learned: [
    {
      title: {
        en: "RTL Responsive Design",
        ar: "تصميم متجاوب يدعم RTL",
      },
      icon: FaGlobe,
    },
    {
      title: {
        en: "Authentication Interface Design",
        ar: "تصميم واجهات تسجيل الدخول",
      },
      icon: FaUserShield,
    },
    {
      title: {
        en: "Financial Service Workflows",
        ar: "بناء تدفقات خدمات التمويل",
      },
      icon: FaMoneyCheckAlt,
    },
    {
      title: {
        en: "Bootstrap UI Components",
        ar: "مكونات Bootstrap",
      },
      icon: FaBootstrap,
    },
  ],
};
