import { ProjectType } from "@/types/projectType";

import {
  FaCode,
  FaHandHoldingMedical,
  FaHospital,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import { FaMobileScreenButton, FaUserDoctor } from "react-icons/fa6";

export const elagy: ProjectType = {
  id: 29,
  image: "/elagy.png",
  scrollImage: false,

  features: [
    {
      icon: FaSearch,
      title: {
        en: "Medicine Search",
        ar: "البحث عن الأدوية",
      },
      description: {
        en: "Search for medicines quickly through a simple and user-friendly interface.",
        ar: "البحث عن الأدوية بسهولة من خلال واجهة بسيطة وسهلة الاستخدام.",
      },
    },
    {
      icon: FaUserDoctor,
      title: {
        en: "Free Medical Campaigns",
        ar: "القوافل الطبية المجانية",
      },
      description: {
        en: "Browse available free medical checkups and healthcare initiatives.",
        ar: "استعراض القوافل الطبية المجانية والمبادرات الصحية المتاحة.",
      },
    },
    {
      icon: FaHandHoldingMedical,
      title: {
        en: "Medicine Donation",
        ar: "التبرع بالأدوية",
      },
      description: {
        en: "Support the community by donating unused medicines to people in need.",
        ar: "دعم المجتمع من خلال التبرع بالأدوية غير المستخدمة للمحتاجين.",
      },
    },
    {
      icon: FaHospital,
      title: {
        en: "Healthcare Information",
        ar: "المعلومات الصحية",
      },
      description: {
        en: "Provide organized healthcare resources and public medical services.",
        ar: "توفير معلومات صحية وخدمات طبية منظمة للمستخدمين.",
      },
    },
    {
      icon: FaMobileScreenButton,
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Optimized for desktop, tablet, and mobile devices.",
        ar: "متوافق مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
    },
  ],

  challenges: [
    {
      en: "Designing a healthcare interface that is simple and easy to navigate.",
      ar: "تصميم واجهة للرعاية الصحية تكون بسيطة وسهلة الاستخدام.",
    },
    {
      en: "Organizing multiple healthcare services within a clear layout.",
      ar: "تنظيم الخدمات الصحية المتعددة داخل تخطيط واضح وسهل التصفح.",
    },
    {
      en: "Presenting medical information without overwhelming users.",
      ar: "عرض المعلومات الطبية بطريقة واضحة دون تشتيت المستخدم.",
    },
    {
      en: "Ensuring responsive behavior across different screen sizes.",
      ar: "ضمان توافق الموقع مع مختلف أحجام الشاشات والأجهزة.",
    },
  ],

  solutions: [
    {
      en: "Designed a clean card-based interface to organize healthcare services.",
      ar: "تصميم واجهة تعتمد على البطاقات لتنظيم الخدمات الصحية بشكل واضح.",
    },
    {
      en: "Structured content into dedicated sections for better usability.",
      ar: "تقسيم المحتوى إلى أقسام مستقلة لتحسين سهولة الاستخدام.",
    },
    {
      en: "Implemented responsive layouts using Bootstrap's grid system.",
      ar: "استخدام Bootstrap Grid لإنشاء تصميم متجاوب يدعم جميع الأجهزة.",
    },
    {
      en: "Simplified navigation to improve accessibility and user experience.",
      ar: "تبسيط التنقل بين الصفحات لتحسين سهولة الوصول وتجربة المستخدم.",
    },
  ],

  learned: [
    {
      icon: FaHospital,
      title: {
        en: "Designed healthcare-focused user interfaces.",
        ar: "تصميم واجهات مخصصة لقطاع الرعاية الصحية.",
      },
    },
    {
      icon: FaMobileScreenButton,
      title: {
        en: "Built responsive websites using Bootstrap.",
        ar: "تطوير مواقع متجاوبة باستخدام Bootstrap.",
      },
    },
    {
      icon: FaUsers,
      title: {
        en: "Improved user experience through simple navigation.",
        ar: "تحسين تجربة المستخدم من خلال التنقل البسيط.",
      },
    },
    {
      icon: FaHandHoldingMedical,
      title: {
        en: "Organized service-based website layouts.",
        ar: "تنظيم تخطيطات المواقع المعتمدة على الخدمات.",
      },
    },
    {
      icon: FaCode,
      title: {
        en: "Developed clean and maintainable frontend code.",
        ar: "كتابة كود واجهات أمامية منظم وسهل الصيانة.",
      },
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
      ar: "تم الإنجاز",
    },
    year: "2016",
  },

  full_date: {
    en: "October 2016",
    ar: "أكتوبر 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "elagy",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "Elagy",
    ar: "علاجي",
  },

  framework: "HTML/CSS",

  type: {
    en: "Healthcare Portal",
    ar: "بوابة خدمات صحية",
  },

  short_description: {
    en: "A responsive healthcare portal that helps users search for medicines, discover free medical campaigns, and donate unused medicines through a simple and accessible interface.",
    ar: "بوابة صحية متجاوبة تساعد المستخدمين على البحث عن الأدوية، واستعراض القوافل الطبية المجانية، والتبرع بالأدوية غير المستخدمة من خلال واجهة بسيطة وسهلة الاستخدام.",
  },

  description: {
    en: "Elagy is a responsive healthcare portal designed to connect users with essential medical services. The platform allows users to search for medicines, discover free medical campaigns, donate unused medicines, and access healthcare resources through a clean, responsive, and user-friendly interface.",
    ar: "علاجي هو موقع خدمات صحية متجاوب يهدف إلى ربط المستخدمين بالخدمات الطبية الأساسية. يتيح الموقع البحث عن الأدوية، واستعراض القوافل الطبية المجانية، والتبرع بالأدوية غير المستخدمة، والوصول إلى الموارد الصحية من خلال واجهة نظيفة ومتجاوبة وسهلة الاستخدام.",
  },

  links: {
    demo: "https://nohaemad123.github.io/elagy/",
    github: "https://github.com/nohaemad123/elagy.git",
  },
};
