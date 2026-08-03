import { ProjectType } from "@/types/projectType";
import { FileImage } from "lucide-react";

import {
  HiOutlineBuildingOffice2,
  HiOutlineGlobeAlt,
  HiOutlineSparkles,
  HiOutlineDevicePhoneMobile,
  HiOutlinePhoto,
  HiOutlineEnvelope,
} from "react-icons/hi2";

import { FiGrid, FiMonitor, FiLayers, FiGlobe } from "react-icons/fi";

import { IoFileTrayOutline } from "react-icons/io5";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

export const dtag: ProjectType = {
  id: 9,
  image: "/dtag.png",
  scrollImage: false,

  features: [
    {
      icon: HiOutlineBuildingOffice2,
      title: {
        en: "Company Overview",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Professional multi-page company website showcasing services, projects, and business information.",
        ar: "موقع شركة احترافي متعدد الصفحات يعرض الخدمات والمشروعات ومعلومات الشركة.",
      },
    },
    {
      icon: FiMonitor,
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Fully responsive layout optimized for desktop, tablet, and mobile devices.",
        ar: "متوافق بالكامل مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
    },
    {
      icon: FiLayers,
      title: {
        en: "Service Sections",
        ar: "أقسام الخدمات",
      },
      description: {
        en: "Organized service presentation with reusable content sections.",
        ar: "عرض الخدمات داخل أقسام منظمة وقابلة لإعادة الاستخدام.",
      },
    },
    {
      icon: HiOutlinePhoto,
      title: {
        en: "Project Showcase",
        ar: "معرض المشروعات",
      },
      description: {
        en: "Dedicated portfolio section to highlight completed company projects.",
        ar: "قسم مخصص لعرض مشروعات الشركة المنفذة.",
      },
    },
    {
      icon: HiOutlineEnvelope,
      title: {
        en: "Contact Section",
        ar: "التواصل",
      },
      description: {
        en: "Integrated contact information and inquiry section for clients.",
        ar: "عرض وسائل التواصل ونموذج للتواصل مع العملاء.",
      },
    },
    {
      icon: FiGrid,
      title: {
        en: "Modern UI",
        ar: "واجهة حديثة",
      },
      description: {
        en: "Clean and professional interface following modern design principles.",
        ar: "واجهة احترافية ونظيفة تعتمد على مبادئ التصميم الحديثة.",
      },
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      title: {
        en: "Cross-Browser Support",
        ar: "دعم جميع المتصفحات",
      },
      description: {
        en: "Consistent experience across modern browsers and devices.",
        ar: "تجربة استخدام متناسقة على مختلف المتصفحات والأجهزة.",
      },
    },
    {
      icon: FiGlobe,
      title: {
        en: "Company Branding",
        ar: "الهوية البصرية",
      },
      description: {
        en: "Strengthens the company's online presence with a consistent brand identity.",
        ar: "تعزيز الهوية الرقمية للشركة من خلال تصميم موحد.",
      },
    },
  ],

  challenges: [
    {
      en: "Designing a modern corporate website that reflects the company's identity.",
      ar: "تصميم موقع شركة حديث يعكس هوية العلامة التجارية.",
    },
    {
      en: "Ensuring a consistent experience across desktop, tablet, and mobile devices.",
      ar: "ضمان تجربة استخدام متناسقة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
    },
    {
      en: "Organizing company services and portfolio into clear, reusable sections.",
      ar: "تنظيم خدمات الشركة ومعرض الأعمال في أقسام واضحة وقابلة لإعادة الاستخدام.",
    },
    {
      en: "Optimizing images and assets without affecting visual quality.",
      ar: "تحسين الصور والملفات لضمان سرعة التحميل دون التأثير على الجودة.",
    },
    {
      en: "Maintaining a clean visual hierarchy across all website pages.",
      ar: "الحفاظ على تسلسل بصري واضح ومتناسق في جميع صفحات الموقع.",
    },
  ],

  solutions: [
    {
      en: "Built reusable page sections to simplify maintenance and future updates.",
      ar: "إنشاء أقسام قابلة لإعادة الاستخدام لتسهيل الصيانة والتطوير المستقبلي.",
    },
    {
      en: "Implemented responsive layouts using Bootstrap to support all screen sizes.",
      ar: "تطبيق تصميمات متجاوبة باستخدام Bootstrap لدعم جميع أحجام الشاشات.",
    },
    {
      en: "Optimized images and static assets to improve loading performance.",
      ar: "تحسين الصور والملفات الثابتة لزيادة سرعة تحميل الموقع.",
    },
    {
      en: "Designed structured navigation to make browsing services and projects easier.",
      ar: "تصميم نظام تنقل منظم لتسهيل استعراض الخدمات والمشروعات.",
    },
    {
      en: "Applied a unified design system to keep the interface visually consistent.",
      ar: "تطبيق نظام تصميم موحد للحفاظ على اتساق واجهة المستخدم.",
    },
  ],

  learned: [
    {
      icon: HiOutlineBuildingOffice2,
      title: {
        en: "Built a complete corporate website with a professional business layout.",
        ar: "تطوير موقع شركة احترافي متكامل.",
      },
    },
    {
      icon: TbDeviceDesktopAnalytics,
      title: {
        en: "Improved responsive design for desktop, tablet, and mobile devices.",
        ar: "تحسين التصميم المتجاوب لجميع الأجهزة.",
      },
    },
    {
      icon: HiOutlineSparkles,
      title: {
        en: "Created reusable UI sections for services, portfolio, and contact pages.",
        ar: "إنشاء أقسام قابلة لإعادة الاستخدام للخدمات والأعمال وصفحة التواصل.",
      },
    },
    {
      icon: FileImage,
      title: {
        en: "Optimized images and visual assets for better loading performance.",
        ar: "تحسين الصور والملفات لزيادة سرعة التحميل.",
      },
    },
    {
      icon: IoFileTrayOutline,
      title: {
        en: "Focused on clean layouts and intuitive navigation.",
        ar: "التركيز على تخطيطات نظيفة وتنقل سهل.",
      },
    },
    {
      icon: HiOutlineGlobeAlt,
      title: {
        en: "Delivered a production-ready corporate website.",
        ar: "تطوير موقع شركة جاهز للإطلاق الفعلي.",
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
      en: "2 Weeks",
      ar: "أسبوعان",
    },
    status: {
      en: "Completed",
      ar: "تم الإنجاز",
    },
    year: "2018",
  },

  full_date: {
    en: "August 2018",
    ar: "أغسطس 2018",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "dtag",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "D-Tag",
    ar: "D-Tag",
  },

  framework: "HTML/CSS",

  type: {
    en: "Corporate Website",
    ar: "موقع شركة",
  },

  short_description: {
    en: "A responsive corporate website designed to showcase D-Tag's services, portfolio, and business information through a clean and professional interface.",
    ar: "موقع شركة متجاوب يعرض خدمات D-Tag ومعرض الأعمال ومعلومات الشركة من خلال واجهة احترافية.",
  },

  description: {
    en: "D-Tag is a responsive corporate website developed to present the company's services, portfolio, and business information through a clean and professional interface. The website includes service pages, project showcases, contact information, and responsive layouts optimized for all devices, helping strengthen the company's online presence and brand identity.",
    ar: "D-Tag هو موقع شركة متجاوب تم تطويره لعرض خدمات الشركة ومشروعاتها ومعلوماتها من خلال واجهة احترافية ومنظمة. يتضمن الموقع صفحات للخدمات ومعرضًا للأعمال ووسائل التواصل مع تصميم متوافق مع جميع الأجهزة، مما يعزز من الحضور الرقمي والهوية البصرية للشركة.",
  },

  links: {
    demo: "https://nohaemad123.github.io/dtag/",
    github: "https://github.com/nohaemad123/dtag.git",
  },
};
