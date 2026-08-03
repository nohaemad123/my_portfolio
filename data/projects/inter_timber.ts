import { ProjectType } from "@/types/projectType";
import { FiPackage } from "react-icons/fi";
import { FaLanguage } from "react-icons/fa";
import {
  MdBusinessCenter,
  MdCompareArrows,
  MdDevices,
  MdVerified,
} from "react-icons/md";

export const inter_timber: ProjectType = {
  id: 32,
  image: "/inter_timber.png",
  scrollImage: true,

  name: {
    en: "Intercontinental Timber",
    ar: "إنتركونتيننتال تيمبر",
  },

  type: {
    en: "Timber Company Website",
    ar: "موقع شركة أخشاب",
  },

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  framework: "HTML/CSS",

  slug: "inter_timber",

  short_description: {
    en: "A multilingual corporate website developed for an international timber trading company, showcasing products, certifications, and business services through a responsive interface.",
    ar: "موقع شركة متعدد اللغات تم تطويره لشركة دولية متخصصة في تجارة الأخشاب، يعرض المنتجات والشهادات والخدمات التجارية من خلال واجهة احترافية ومتجاوبة.",
  },

  description: {
    en: "Intercontinental Timber is a multilingual corporate website developed for an international timber trading company. The website showcases timber products, company services, certifications, and business information while supporting Arabic, English, French, and Swedish. It provides a professional and responsive experience for customers across different regions and languages.",
    ar: "Intercontinental Timber هو موقع شركة متعدد اللغات تم تطويره لشركة دولية متخصصة في تجارة الأخشاب. يعرض الموقع منتجات الأخشاب، وخدمات الشركة، والشهادات، والمعلومات التجارية مع دعم اللغات العربية والإنجليزية والفرنسية والسويدية، مما يوفر تجربة احترافية ومتجاوبة للعملاء في مختلف الأسواق.",
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
    en: "January 2017",
    ar: "يناير 2017",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  features: [
    {
      title: {
        en: "Multilingual Website",
        ar: "دعم متعدد اللغات",
      },
      description: {
        en: "Supports Arabic, English, French, and Swedish with seamless language switching.",
        ar: "يدعم العربية والإنجليزية والفرنسية والسويدية مع إمكانية التبديل بين اللغات بسهولة.",
      },
      icon: FaLanguage,
    },
    {
      title: {
        en: "Product Catalog",
        ar: "كتالوج المنتجات",
      },
      description: {
        en: "Browse timber products through organized categories and detailed product pages.",
        ar: "استعراض منتجات الأخشاب من خلال أقسام منظمة وصفحات تفصيلية لكل منتج.",
      },
      icon: FiPackage,
    },
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Present the company's history, services, and international business expertise.",
        ar: "عرض تاريخ الشركة وخدماتها وخبرتها في مجال التجارة الدولية.",
      },
      icon: MdBusinessCenter,
    },
    {
      title: {
        en: "Quality Certifications",
        ar: "شهادات الجودة",
      },
      description: {
        en: "Highlight company certifications, industry standards, and quality assurance.",
        ar: "عرض شهادات الجودة والمعايير الصناعية التي تعتمدها الشركة.",
      },
      icon: MdVerified,
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
      icon: MdDevices,
    },
  ],

  challenges: [
    {
      en: "Building a multilingual website with consistent content across four languages.",
      ar: "تطوير موقع متعدد اللغات مع الحفاظ على اتساق المحتوى بين أربع لغات.",
    },
    {
      en: "Supporting both RTL and LTR layouts without affecting the design.",
      ar: "دعم اتجاهي العرض RTL وLTR دون التأثير على التصميم.",
    },
    {
      en: "Maintaining a consistent corporate identity across all localized pages.",
      ar: "الحفاظ على هوية بصرية موحدة في جميع النسخ المترجمة.",
    },
    {
      en: "Ensuring responsive layouts on different screen sizes.",
      ar: "ضمان توافق التصميم مع مختلف أحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Implemented multilingual support with dedicated localized pages.",
      ar: "تنفيذ دعم كامل للغات من خلال صفحات مخصصة لكل لغة.",
    },
    {
      en: "Handled RTL and LTR layouts while maintaining a consistent user experience.",
      ar: "دعم تخطيطات RTL وLTR مع الحفاظ على تجربة مستخدم موحدة.",
    },
    {
      en: "Created reusable layouts to simplify maintenance across language versions.",
      ar: "إنشاء تخطيطات قابلة لإعادة الاستخدام لتسهيل صيانة جميع النسخ.",
    },
    {
      en: "Built responsive pages using Bootstrap's grid system.",
      ar: "بناء صفحات متجاوبة باستخدام Bootstrap Grid.",
    },
  ],

  learned: [
    {
      title: {
        en: "Implemented multilingual website structures.",
        ar: "تطوير بنية مواقع متعددة اللغات.",
      },
      icon: FaLanguage,
    },
    {
      title: {
        en: "Worked with RTL and LTR layouts.",
        ar: "التعامل مع تخطيطات RTL وLTR.",
      },
      icon: MdCompareArrows,
    },
    {
      title: {
        en: "Designed international corporate websites.",
        ar: "تصميم مواقع احترافية لشركات دولية.",
      },
      icon: MdBusinessCenter,
    },
    {
      title: {
        en: "Built responsive interfaces using Bootstrap.",
        ar: "بناء واجهات متجاوبة باستخدام Bootstrap.",
      },
      icon: MdDevices,
    },
    {
      title: {
        en: "Improved reusable frontend layouts.",
        ar: "تحسين التخطيطات القابلة لإعادة الاستخدام.",
      },
      icon: FiPackage,
    },
  ],

  links: {
    demo: "https://intercontinentaltimber.com/",
    github: "",
  },
};
