import { ProjectType } from "@/types/projectType";

import {
  FaBuilding,
  FaEnvelope,
  FaGlobe,
  FaHandshake,
  FaLaptopCode,
  FaMobileAlt,
  FaUsers,
} from "react-icons/fa";

export const elmehwar: ProjectType = {
  id: 38,
  image: "/elmehwar.png",
  scrollImage: true,

  features: [
    {
      icon: FaBuilding,
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Introduces the company, its recruitment expertise, and HR consulting services.",
        ar: "التعريف بالشركة وخبراتها في التوظيف والاستشارات الإدارية.",
      },
    },
    {
      icon: FaUsers,
      title: {
        en: "Recruitment Services",
        ar: "خدمات التوظيف",
      },
      description: {
        en: "Showcases hiring solutions, recruitment services, and HR consulting.",
        ar: "عرض حلول التوظيف وخدمات الموارد البشرية والاستشارات.",
      },
    },
    {
      icon: FaHandshake,
      title: {
        en: "Partners & Clients",
        ar: "الشركاء والعملاء",
      },
      description: {
        en: "Highlights trusted partners and organizations working with the company.",
        ar: "استعراض الشركاء والعملاء الذين تتعامل معهم الشركة.",
      },
    },
    {
      icon: FaEnvelope,
      title: {
        en: "Contact & Inquiry",
        ar: "التواصل والاستفسارات",
      },
      description: {
        en: "Allows employers and candidates to contact the company through an inquiry form.",
        ar: "إتاحة التواصل مع الشركة من خلال نموذج للاستفسارات وطلبات التوظيف.",
      },
    },
    {
      icon: FaMobileAlt,
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
      en: "Designing a professional interface that reflects the company's corporate identity.",
      ar: "تصميم واجهة احترافية تعكس الهوية المؤسسية للشركة.",
    },
    {
      en: "Organizing recruitment services and company information into a clear and accessible structure.",
      ar: "تنظيم خدمات التوظيف ومعلومات الشركة داخل هيكل واضح وسهل التصفح.",
    },
    {
      en: "Building a responsive RTL website that performs consistently across different devices.",
      ar: "إنشاء موقع متجاوب يدعم اللغة العربية ويعمل بكفاءة على مختلف الأجهزة.",
    },
  ],

  solutions: [
    {
      en: "Structured recruitment services into dedicated business-focused sections.",
      ar: "تنظيم خدمات التوظيف داخل أقسام مستقلة تسهل على المستخدم الوصول إليها.",
    },
    {
      en: "Built reusable Bootstrap components to maintain a consistent interface.",
      ar: "استخدام مكونات Bootstrap قابلة لإعادة الاستخدام للحفاظ على اتساق التصميم.",
    },
    {
      en: "Implemented responsive RTL layouts to provide a seamless experience across all devices.",
      ar: "تطبيق تصميم متجاوب يدعم اتجاه الكتابة من اليمين إلى اليسار لتوفير تجربة استخدام متكاملة.",
    },
  ],

  learned: [
    {
      icon: FaBuilding,
      title: {
        en: "Corporate Website Development",
        ar: "تطوير المواقع المؤسسية",
      },
    },
    {
      icon: FaGlobe,
      title: {
        en: "Responsive RTL Design",
        ar: "تصميم متجاوب يدعم اللغة العربية",
      },
    },
    {
      icon: FaMobileAlt,
      title: {
        en: "Bootstrap UI Components",
        ar: "بناء واجهات باستخدام Bootstrap",
      },
    },
    {
      icon: FaLaptopCode,
      title: {
        en: "Reusable Frontend Structure",
        ar: "إنشاء هيكل واجهات قابل لإعادة الاستخدام",
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
    en: "August 2017",
    ar: "أغسطس 2017",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "elmehwar",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "Al Mehwar Recruitment",
    ar: "المحور للتوظيف",
  },

  framework: "HTML/CSS",

  type: {
    en: "Recruitment Company Website",
    ar: "موقع شركة توظيف",
  },

  short_description: {
    en: "A responsive corporate website developed for a recruitment and HR consulting company, showcasing hiring services, business solutions, and company information.",
    ar: "موقع مؤسسي متجاوب تم تطويره لشركة توظيف واستشارات موارد بشرية لعرض خدمات التوظيف وحلول الأعمال ومعلومات الشركة.",
  },

  description: {
    en: "Al Mehwar Recruitment is a responsive corporate website developed for a recruitment and HR consulting company. The website presents the company's hiring services, recruitment solutions, business expertise, partners, and contact information through a clean, professional, and user-friendly interface optimized for all devices.",
    ar: "المحور للتوظيف هو موقع مؤسسي متجاوب تم تطويره لشركة متخصصة في التوظيف والاستشارات الإدارية. يعرض الموقع خدمات التوظيف، وحلول الموارد البشرية، وخبرات الشركة، والشركاء، ووسائل التواصل من خلال واجهة احترافية ومنظمة ومتوافقة مع جميع الأجهزة.",
  },

  links: {
    demo: "https://nohaemad123.github.io/elmehwar/",
    github: "https://github.com/nohaemad123/elmehwar.git",
  },
};
