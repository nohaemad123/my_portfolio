import { ProjectType } from "@/types/projectType";

import {
  MonitorSmartphone,
  Truck,
  LayoutGrid,
  Building2,
  Phone,
  Smartphone,
  Code2,
} from "lucide-react";

export const elyousr: ProjectType = {
  id: 25,
  image: "/elyousr.png",
  scrollImage: true,

  features: [
    {
      icon: Building2,
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Present the company's experience, values, and moving expertise.",
        ar: "عرض خبرات الشركة وقيمها وخدماتها في مجال نقل الأثاث.",
      },
    },
    {
      icon: Truck,
      title: {
        en: "Moving Services",
        ar: "خدمات نقل الأثاث",
      },
      description: {
        en: "Showcase furniture relocation, packing, transportation, and storage solutions.",
        ar: "عرض خدمات نقل الأثاث والتغليف والنقل والتخزين.",
      },
    },
    {
      icon: LayoutGrid,
      title: {
        en: "Service Information",
        ar: "معلومات الخدمات",
      },
      description: {
        en: "Provide detailed information about available moving and logistics services.",
        ar: "تقديم معلومات تفصيلية حول خدمات النقل والخدمات اللوجستية.",
      },
    },
    {
      icon: Phone,
      title: {
        en: "Contact Section",
        ar: "التواصل",
      },
      description: {
        en: "Allow customers to communicate easily through multiple contact channels.",
        ar: "إتاحة وسائل تواصل متعددة لسهولة التواصل مع العملاء.",
      },
    },
    {
      icon: Smartphone,
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
      icon: MonitorSmartphone,
      title: {
        en: "Professional Interface",
        ar: "واجهة احترافية",
      },
      description: {
        en: "Clean business-oriented design with easy navigation and clear content.",
        ar: "واجهة احترافية بتصميم بسيط وتنقل سهل ومحتوى واضح.",
      },
    },
  ],

  challenges: [
    {
      en: "Presenting multiple moving and logistics services in a clear and organized structure.",
      ar: "عرض خدمات النقل والخدمات اللوجستية المتعددة بطريقة واضحة ومنظمة.",
    },
    {
      en: "Designing a professional interface that builds customer trust.",
      ar: "تصميم واجهة احترافية تعكس مصداقية الشركة وتزيد من ثقة العملاء.",
    },
    {
      en: "Maintaining a consistent layout across multiple website pages and service sections.",
      ar: "الحفاظ على تصميم متناسق عبر جميع صفحات الموقع وأقسام الخدمات.",
    },
    {
      en: "Ensuring responsive behavior across different screen sizes and devices.",
      ar: "ضمان توافق الموقع مع مختلف أحجام الشاشات والأجهزة.",
    },
  ],

  solutions: [
    {
      en: "Organized moving services into structured sections for easier navigation.",
      ar: "تنظيم خدمات النقل داخل أقسام واضحة لتسهيل التصفح والوصول للمعلومات.",
    },
    {
      en: "Built reusable page layouts to maintain visual consistency.",
      ar: "إنشاء تخطيطات قابلة لإعادة الاستخدام للحفاظ على اتساق التصميم في جميع الصفحات.",
    },
    {
      en: "Implemented responsive layouts using Bootstrap Grid System.",
      ar: "تطبيق تصميم متجاوب باستخدام Bootstrap Grid System.",
    },
    {
      en: "Applied clean typography and spacing to improve readability and user experience.",
      ar: "استخدام تنسيق خطوط ومسافات مدروس لتحسين قابلية القراءة وتجربة المستخدم.",
    },
  ],

  learned: [
    {
      icon: MonitorSmartphone,
      title: {
        en: "Built responsive corporate websites.",
        ar: "تطوير مواقع شركات متجاوبة.",
      },
    },
    {
      icon: LayoutGrid,
      title: {
        en: "Designed service-oriented business interfaces.",
        ar: "تصميم واجهات احترافية للمواقع الخدمية.",
      },
    },
    {
      icon: Smartphone,
      title: {
        en: "Improved responsive layouts using Bootstrap.",
        ar: "تحسين التصميمات المتجاوبة باستخدام Bootstrap.",
      },
    },
    {
      icon: Code2,
      title: {
        en: "Created reusable website sections and components.",
        ar: "إنشاء أقسام ومكونات قابلة لإعادة الاستخدام.",
      },
    },
    {
      icon: Building2,
      title: {
        en: "Organized business content for a better user experience.",
        ar: "تنظيم محتوى الموقع لتحسين تجربة المستخدم.",
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

  slug: "elyousr",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "Moving & Furniture Services Website",
    ar: "موقع اليسر لنقل الأثاث",
  },

  framework: "HTML/CSS",

  type: {
    en: "Logistics & Moving Company Website",
    ar: "موقع شركة نقل أثاث وخدمات لوجستية",
  },

  short_description: {
    en: "A responsive corporate website developed for a furniture moving company to showcase relocation, packing, transportation, and storage services through a modern user experience.",
    ar: "موقع مؤسسي متجاوب تم تطويره لشركة نقل أثاث لعرض خدمات النقل والتغليف والتخزين من خلال تجربة استخدام احترافية.",
  },

  description: {
    en: "Al Yosr is a responsive corporate website developed for a furniture moving and logistics company. The website presents the company's relocation, packing, loading, transportation, and storage services through a clean and professional interface, allowing visitors to explore available services and easily contact the company.",
    ar: "اليسر هو موقع مؤسسي متجاوب تم تطويره لشركة متخصصة في نقل الأثاث والخدمات اللوجستية. يعرض الموقع خدمات النقل والتغليف والتحميل والتخزين، بالإضافة إلى معلومات الشركة ووسائل التواصل، من خلال واجهة احترافية ومنظمة ومتوافقة مع جميع الأجهزة.",
  },

  links: {
    demo: "https://nohaemad123.github.io/elyousr/",
    github: "https://github.com/nohaemad123/elyousr.git",
  },
};
