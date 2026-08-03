import { ProjectType } from "@/types/projectType";

import {
  BriefcaseBusiness,
  Building2,
  Palette,
  MonitorSmartphone,
  ShieldCheck,
  Shield,
  LayoutGrid,
  Smartphone,
  Phone,
} from "lucide-react";

export const alhadaf: ProjectType = {
  id: 24,
  image: "/alhadaf.png",
  scrollImage: true,

  features: [
    {
      title: {
        en: "Company Profile",
        ar: "نبذة عن الشركة",
      },
      description: {
        en: "Present the company's history, expertise, and business values.",
        ar: "عرض تاريخ الشركة وخبراتها وقيمها المهنية.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Security Services",
        ar: "الخدمات الأمنية",
      },
      description: {
        en: "Showcase guarding, protection, and security solutions in dedicated sections.",
        ar: "عرض خدمات الحراسة والحماية والحلول الأمنية في أقسام مخصصة.",
      },
      icon: ShieldCheck,
    },
    {
      title: {
        en: "Service Information",
        ar: "معلومات الخدمات",
      },
      description: {
        en: "Provide detailed information about available security solutions.",
        ar: "تقديم معلومات تفصيلية حول الحلول الأمنية المتاحة.",
      },
      icon: BriefcaseBusiness,
    },
    {
      title: {
        en: "Contact Section",
        ar: "قسم التواصل",
      },
      description: {
        en: "Allow visitors to communicate easily through company contact information.",
        ar: "إتاحة التواصل بسهولة عبر معلومات الاتصال الخاصة بالشركة.",
      },
      icon: Phone,
    },
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Optimized for desktop, tablet, and mobile devices.",
        ar: "متوافق مع أجهزة الكمبيوتر والتابلت والهواتف المحمولة.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Professional Interface",
        ar: "واجهة احترافية",
      },
      description: {
        en: "Modern corporate design focused on readability and trust.",
        ar: "تصميم مؤسسي حديث يركز على الوضوح وبناء الثقة.",
      },
      icon: Palette,
    },
  ],

  challenges: [
    {
      en: "Designing a professional interface that reflects the company's reliability.",
      ar: "تصميم واجهة احترافية تعكس موثوقية الشركة.",
    },
    {
      en: "Organizing business information into clear and accessible sections.",
      ar: "تنظيم معلومات الشركة في أقسام واضحة وسهلة الوصول.",
    },
    {
      en: "Maintaining a consistent design across multiple pages.",
      ar: "الحفاظ على تصميم متناسق عبر جميع صفحات الموقع.",
    },
    {
      en: "Ensuring responsive layouts for different screen sizes.",
      ar: "ضمان توافق التصميم مع مختلف أحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Built reusable page sections to improve consistency.",
      ar: "إنشاء أقسام قابلة لإعادة الاستخدام للحفاظ على تناسق الموقع.",
    },
    {
      en: "Used Bootstrap's responsive grid system for flexible layouts.",
      ar: "استخدام نظام Grid الخاص بـ Bootstrap لإنشاء تخطيطات مرنة ومتجاوبة.",
    },
    {
      en: "Organized services and business information into structured content blocks.",
      ar: "تنظيم الخدمات ومعلومات الشركة في أقسام مرتبة وسهلة القراءة.",
    },
    {
      en: "Applied a clean design system to enhance readability and user experience.",
      ar: "تطبيق تصميم بسيط واحترافي لتحسين تجربة المستخدم وسهولة القراءة.",
    },
  ],

  learned: [
    {
      icon: Shield,
      title: {
        en: "Building responsive corporate websites.",
        ar: "تطوير مواقع شركات متجاوبة.",
      },
    },
    {
      icon: LayoutGrid,
      title: {
        en: "Creating reusable Bootstrap layouts.",
        ar: "إنشاء تخطيطات قابلة لإعادة الاستخدام باستخدام Bootstrap.",
      },
    },
    {
      icon: MonitorSmartphone,
      title: {
        en: "Improving responsive design techniques.",
        ar: "تطوير مهارات التصميم المتجاوب.",
      },
    },
    {
      icon: Palette,
      title: {
        en: "Designing business-oriented user interfaces.",
        ar: "تصميم واجهات مستخدم موجهة للأعمال.",
      },
    },
    {
      icon: BriefcaseBusiness,
      title: {
        en: "Presenting professional business services effectively.",
        ar: "عرض الخدمات الاحترافية بطريقة واضحة وجذابة.",
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
    en: "September 2016",
    ar: "سبتمبر 2016",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  slug: "alhadaf",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "AlHadaf Security Services",
    ar: "شركة الهدف للخدمات الأمنية",
  },

  framework: "HTML/CSS",

  type: {
    en: "Corporate Security Website",
    ar: "موقع شركة خدمات أمنية",
  },

  short_description: {
    en: "A responsive corporate website developed to showcase security, guarding, and protection services through a professional and trustworthy user experience.",
    ar: "موقع إلكتروني متجاوب تم تطويره لعرض خدمات الأمن والحراسة والحماية من خلال تجربة استخدام احترافية تعكس الثقة والمصداقية.",
  },

  description: {
    en: "Al Hadaf is a responsive corporate website developed for a security services company. The website presents the company's expertise, security solutions, guarding services, and contact information through a modern, well-structured interface designed to build trust and provide visitors with easy access to business information.",
    ar: "الهدف هو موقع إلكتروني متجاوب تم تطويره لشركة متخصصة في الخدمات الأمنية. يعرض الموقع خبرات الشركة وخدمات الحراسة والحلول الأمنية ووسائل التواصل من خلال واجهة حديثة ومنظمة تهدف إلى بناء الثقة وتسهيل وصول الزوار إلى المعلومات.",
  },

  links: {
    demo: "https://nohaemad123.github.io/alhadaf/",
    github: "https://github.com/nohaemad123/alhadaf.git",
  },
};
