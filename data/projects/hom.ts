import { ProjectType } from "@/types/projectType";

import {
  Code2,
  LayoutDashboard,
  Palette,
  Phone,
  MonitorSmartphone,
  AirVent,
  Building2,
  LayoutPanelTop,
  Users,
} from "lucide-react";

export const hom: ProjectType = {
  id: 19,
  image: "/hom.png",
  scrollImage: true,

  name: {
    en: "H.O.M",
    ar: "إتش أو إم",
  },

  type: {
    en: "Corporate Business Website",
    ar: "موقع شركة",
  },

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  framework: "HTML/CSS",

  slug: "hom",

  short_description: {
    en: "Corporate website for H.O.M, showcasing HVAC solutions, electromechanical services, company profile, and customer-focused business information.",
    ar: "موقع شركة احترافي لعرض حلول التكييف والتهوية (HVAC)، والخدمات الكهروميكانيكية، والتعريف بالشركة وخدماتها.",
  },

  description: {
    en: "H.O.M is a responsive corporate website developed for a company specialized in HVAC systems, air treatment solutions, and electromechanical projects. The website presents the company's services, expertise, projects, and business information through a modern multi-page interface, providing clients with an easy way to explore solutions and connect with the company.",
    ar: "H.O.M هو موقع شركة متجاوب تم تطويره لشركة متخصصة في أنظمة التكييف والتهوية (HVAC)، ومعالجة الهواء، والمشروعات الكهروميكانيكية. يعرض الموقع خدمات الشركة وخبراتها ومشروعاتها ومعلوماتها التجارية من خلال واجهة احترافية متعددة الصفحات، مما يتيح للعملاء استكشاف الحلول والتواصل مع الشركة بسهولة.",
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
    en: "June 2016",
    ar: "يونيو 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  features: [
    {
      icon: Building2,
      title: {
        en: "Company Overview",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Introduced the company's vision, history, and expertise in HVAC and electromechanical solutions.",
        ar: "عرض رؤية الشركة وتاريخها وخبرتها في حلول التكييف والأنظمة الكهروميكانيكية.",
      },
    },
    {
      icon: AirVent,
      title: {
        en: "HVAC & Engineering Services",
        ar: "خدمات التكييف والهندسة",
      },
      description: {
        en: "Presented air treatment systems, HVAC services, and electromechanical projects in a structured layout.",
        ar: "عرض أنظمة معالجة الهواء وخدمات التكييف والمشروعات الكهروميكانيكية بطريقة منظمة.",
      },
    },
    {
      icon: LayoutDashboard,
      title: {
        en: "Multi-page Navigation",
        ar: "موقع متعدد الصفحات",
      },
      description: {
        en: "Built multiple pages with intuitive navigation for services, about, and contact information.",
        ar: "إنشاء صفحات متعددة مع تنقل سهل بين الخدمات، والتعريف بالشركة، وصفحة التواصل.",
      },
    },
    {
      icon: MonitorSmartphone,
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Optimized the website to provide a smooth experience across desktop, tablet, and mobile devices.",
        ar: "تهيئة الموقع ليعمل بكفاءة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
    },
    {
      icon: Phone,
      title: {
        en: "Contact Information",
        ar: "بيانات التواصل",
      },
      description: {
        en: "Provided customers with accessible contact details and company communication channels.",
        ar: "توفير وسائل التواصل مع الشركة بشكل واضح وسهل للعملاء.",
      },
    },
    {
      icon: Palette,
      title: {
        en: "Modern Business Interface",
        ar: "واجهة احترافية حديثة",
      },
      description: {
        en: "Designed a clean and modern interface that reflects the company's professional identity.",
        ar: "تصميم واجهة حديثة ونظيفة تعكس الهوية الاحترافية للشركة.",
      },
    },
  ],

  challenges: [
    {
      en: "Presenting technical engineering services through a clear and user-friendly interface.",
      ar: "عرض الخدمات الهندسية المعقدة بطريقة واضحة وسهلة للمستخدم.",
    },
    {
      en: "Organizing multiple business sections while maintaining intuitive navigation.",
      ar: "تنظيم أقسام الموقع المختلفة مع الحفاظ على سهولة التنقل.",
    },
    {
      en: "Ensuring responsive layouts across different screen sizes.",
      ar: "ضمان عمل الموقع بشكل متجاوب على جميع أحجام الشاشات.",
    },
    {
      en: "Maintaining a consistent visual identity throughout the website.",
      ar: "الحفاظ على هوية بصرية موحدة في جميع صفحات الموقع.",
    },
  ],

  solutions: [
    {
      en: "Designed reusable page layouts for consistent presentation.",
      ar: "تصميم تخطيطات صفحات قابلة لإعادة الاستخدام للحفاظ على الاتساق.",
    },
    {
      en: "Structured engineering services into dedicated sections for easier navigation.",
      ar: "تقسيم الخدمات الهندسية إلى أقسام واضحة لتسهيل التصفح.",
    },
    {
      en: "Built responsive layouts using Bootstrap grid system.",
      ar: "استخدام Bootstrap Grid لإنشاء تصميمات متجاوبة.",
    },
    {
      en: "Maintained a unified design language across all website pages.",
      ar: "الحفاظ على لغة تصميم موحدة في جميع صفحات الموقع.",
    },
  ],

  learned: [
    {
      icon: Building2,
      title: {
        en: "Designed modern corporate user interfaces.",
        ar: "تصميم واجهات حديثة للشركات.",
      },
    },
    {
      icon: LayoutPanelTop,
      title: {
        en: "Built structured multi-page business websites.",
        ar: "تطوير مواقع شركات متعددة الصفحات.",
      },
    },
    {
      icon: MonitorSmartphone,
      title: {
        en: "Improved responsive layout implementation.",
        ar: "تحسين تنفيذ التصميمات المتجاوبة.",
      },
    },
    {
      icon: Palette,
      title: {
        en: "Created interfaces aligned with business branding.",
        ar: "تصميم واجهات متوافقة مع الهوية التجارية.",
      },
    },
    {
      icon: Code2,
      title: {
        en: "Built reusable layouts using Bootstrap.",
        ar: "إنشاء تخطيطات قابلة لإعادة الاستخدام باستخدام Bootstrap.",
      },
    },
    {
      icon: Users,
      title: {
        en: "Developed professional business websites.",
        ar: "تطوير مواقع احترافية للشركات.",
      },
    },
  ],

  links: {
    demo: "https://nohaemad123.github.io/hom/",
    github: "https://github.com/nohaemad123/hom.git",
  },
};
