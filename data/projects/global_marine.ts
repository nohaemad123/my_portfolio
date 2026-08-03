import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  Blocks,
  Code2,
  LayoutDashboard,
  PhoneCall,
  BriefcaseBusiness,
  Building,
  Ship,
  File,
} from "lucide-react";

export const global_marine: ProjectType = {
  id: 16,
  image: "/global_marine.png",
  scrollImage: true,

  features: [
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Present the company's history, mission, expertise, and operational capabilities.",
        ar: "عرض تاريخ الشركة ورسالتها وخبراتها وإمكاناتها التشغيلية.",
      },
      icon: Building,
    },
    {
      title: {
        en: "Marine Services",
        ar: "الخدمات البحرية",
      },
      description: {
        en: "Showcase marine logistics, shipping, and offshore services through organized business sections.",
        ar: "عرض خدمات الشحن واللوجستيات والخدمات البحرية من خلال أقسام منظمة.",
      },
      icon: Ship,
    },
    {
      title: {
        en: "Projects Portfolio",
        ar: "معرض المشاريع",
      },
      description: {
        en: "Highlight completed projects, partnerships, and company achievements.",
        ar: "عرض المشاريع المنجزة والشراكات وإنجازات الشركة.",
      },
      icon: BriefcaseBusiness,
    },
    {
      title: {
        en: "Multi-Page Website",
        ar: "موقع متعدد الصفحات",
      },
      description: {
        en: "Includes dedicated pages for Home, About, Services, Projects, and Contact.",
        ar: "يتضمن صفحات رئيسية مثل الرئيسية، من نحن، الخدمات، المشاريع، والتواصل.",
      },
      icon: File,
    },
    {
      title: {
        en: "Contact Information",
        ar: "معلومات التواصل",
      },
      description: {
        en: "Provide company details and inquiry channels for potential clients.",
        ar: "يوفر بيانات الشركة ووسائل التواصل والاستفسار للعملاء المحتملين.",
      },
      icon: PhoneCall,
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
      en: "Designing a professional corporate website that reflects the company's identity.",
      ar: "تصميم موقع احترافي يعكس هوية الشركة.",
    },
    {
      en: "Organizing marine services and business information into a clear structure.",
      ar: "تنظيم الخدمات البحرية ومعلومات الشركة في هيكل واضح.",
    },
    {
      en: "Maintaining a consistent layout and navigation across multiple pages.",
      ar: "الحفاظ على تصميم وتنقل متناسق عبر جميع صفحات الموقع.",
    },
    {
      en: "Ensuring responsive behavior across different screen sizes and browsers.",
      ar: "ضمان عمل الموقع بشكل متجاوب على مختلف الأجهزة والمتصفحات.",
    },
  ],

  solutions: [
    {
      en: "Built reusable page layouts to maintain consistency across the website.",
      ar: "إنشاء تخطيطات قابلة لإعادة الاستخدام للحفاظ على اتساق التصميم.",
    },
    {
      en: "Implemented responsive layouts using Bootstrap's grid system.",
      ar: "استخدام نظام Bootstrap Grid لبناء صفحات متجاوبة.",
    },
    {
      en: "Organized business information into dedicated sections for better readability.",
      ar: "تنظيم معلومات الشركة داخل أقسام مخصصة لتحسين سهولة القراءة.",
    },
    {
      en: "Applied a consistent design system to deliver a professional user experience.",
      ar: "تطبيق نظام تصميم موحد لتقديم تجربة استخدام احترافية.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built professional multi-page corporate websites.",
        ar: "تطوير مواقع شركات احترافية متعددة الصفحات.",
      },
      icon: Building,
    },
    {
      title: {
        en: "Designed responsive business interfaces using Bootstrap.",
        ar: "تصميم واجهات أعمال متجاوبة باستخدام Bootstrap.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Created reusable website layouts and components.",
        ar: "إنشاء مكونات وتخطيطات قابلة لإعادة الاستخدام.",
      },
      icon: Blocks,
    },
    {
      title: {
        en: "Improved navigation and information architecture.",
        ar: "تحسين هيكل التنقل وتنظيم المعلومات.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Developed clean and maintainable frontend code.",
        ar: "كتابة كود Frontend نظيف وسهل الصيانة.",
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
    en: "May 2016",
    ar: "مايو 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "global_marine",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "Global Marine",
    ar: "جلوبال مارين",
  },

  framework: "HTML/CSS",

  type: {
    en: "Marine Services Website",
    ar: "موقع خدمات بحرية",
  },

  short_description: {
    en: "A responsive corporate website developed for a marine services company to showcase its business profile, services, projects, and contact information through a professional multi-page experience.",
    ar: "موقع إلكتروني متجاوب تم تطويره لشركة خدمات بحرية لعرض نبذة عن الشركة وخدماتها ومشاريعها وبيانات التواصل من خلال تجربة احترافية متعددة الصفحات.",
  },

  description: {
    en: "Global Marine is a responsive corporate website developed for a marine services company to strengthen its online presence and showcase its business professionally. The website includes dedicated pages for Home, About, Services, Projects, and Contact, allowing visitors to explore the company's expertise, marine logistics services, completed projects, and contact information through a clean, responsive, and user-friendly interface.",
    ar: "Global Marine هو موقع إلكتروني متجاوب تم تطويره لشركة متخصصة في الخدمات البحرية بهدف تعزيز حضورها الرقمي وعرض أعمالها بشكل احترافي. يتضمن الموقع صفحات مخصصة مثل الرئيسية، من نحن، الخدمات، المشاريع، والتواصل، مما يتيح للزوار التعرف على خبرات الشركة وخدماتها البحرية ومشاريعها المنفذة ووسائل التواصل من خلال واجهة نظيفة ومتجاوبة وسهلة الاستخدام.",
  },

  links: {
    demo: "https://nohaemad123.github.io/global_marine/",
    github: "https://github.com/nohaemad123/global_marine.git",
  },
};
