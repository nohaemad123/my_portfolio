import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  LayoutGrid,
  SearchCheck,
  Ticket,
  Code2,
} from "lucide-react";

export const salaha: ProjectType = {
  id: 26,

  image: "/salaha.png",
  scrollImage: true,

  name: {
    en: "Salaha",
    ar: "صلحها",
  },

  type: {
    en: "Customer Service Portal",
    ar: "بوابة خدمة العملاء",
  },

  short_description: {
    en: "A responsive customer support portal that enables users to submit service requests, create support tickets, and monitor request status through a simple and organized interface.",
    ar: "بوابة دعم عملاء متجاوبة تتيح للمستخدمين إرسال طلبات الخدمة وإنشاء تذاكر الدعم ومتابعة حالتها من خلال واجهة بسيطة ومنظمة.",
  },

  description: {
    en: "Salaha is a responsive customer support portal designed to simplify communication between customers and support teams. The platform allows users to submit service requests, create support tickets, browse service categories, and monitor the progress of their requests through a clean, responsive, and user-friendly interface.",
    ar: "صلاحة هو نظام متجاوب لخدمة العملاء صُمم لتسهيل التواصل بين العملاء وفريق الدعم. يتيح للمستخدمين إرسال طلبات الخدمة وإنشاء تذاكر الدعم وتصفح فئات الخدمات ومتابعة حالة الطلبات من خلال واجهة حديثة وسهلة الاستخدام ومتوافقة مع جميع الأجهزة.",
  },

  slug: "salaha",

  links: {
    demo: "https://nohaemad123.github.io/sal7ha/",
    github: "https://github.com/nohaemad123/sal7ha.git",
  },

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
      ar: "تم الانجاز",
    },
    year: "2017",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],

  framework: "HTML/CSS",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  features: [
    {
      title: {
        en: "Support Ticket Submission",
        ar: "إرسال تذاكر الدعم",
      },
      description: {
        en: "Allow users to create support tickets for technical issues and service requests.",
        ar: "يتيح للمستخدمين إنشاء تذاكر دعم للمشكلات الفنية وطلبات الخدمة.",
      },
      icon: Ticket,
    },
    {
      title: {
        en: "Request Tracking",
        ar: "متابعة الطلبات",
      },
      description: {
        en: "Track the current status and progress of submitted support tickets.",
        ar: "متابعة حالة وتقدم تذاكر الدعم المرسلة.",
      },
      icon: SearchCheck,
    },
    {
      title: {
        en: "Service Categories",
        ar: "تصنيفات الخدمات",
      },
      description: {
        en: "Organize requests into different service categories for easier management.",
        ar: "تنظيم الطلبات داخل تصنيفات مختلفة لتسهيل إدارتها.",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Customer Portal",
        ar: "بوابة العملاء",
      },
      description: {
        en: "Provide customers with a centralized place to submit and review requests.",
        ar: "توفير مكان موحد للعملاء لإرسال الطلبات ومراجعتها.",
      },
      icon: Code2,
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
  ],

  challenges: [
    {
      en: "Designing a simple and intuitive support request workflow.",
      ar: "تصميم مسار بسيط وسهل لإنشاء طلبات الدعم.",
    },
    {
      en: "Presenting ticket information in a clear and organized layout.",
      ar: "عرض معلومات التذاكر بطريقة واضحة ومنظمة.",
    },
    {
      en: "Creating reusable components across multiple support pages.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام عبر صفحات الدعم المختلفة.",
    },
    {
      en: "Ensuring responsive behavior on different screen sizes.",
      ar: "ضمان توافق التصميم مع مختلف أحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Designed a structured workflow for creating and tracking support requests.",
      ar: "تصميم سير عمل منظم لإنشاء طلبات الدعم ومتابعتها.",
    },
    {
      en: "Built reusable UI sections to simplify future maintenance.",
      ar: "بناء مكونات واجهة قابلة لإعادة الاستخدام لتسهيل الصيانة المستقبلية.",
    },
    {
      en: "Used Bootstrap to create responsive layouts across devices.",
      ar: "استخدام Bootstrap لإنشاء تصميمات متجاوبة تعمل على جميع الأجهزة.",
    },
    {
      en: "Organized ticket information into clear and user-friendly sections.",
      ar: "تنظيم بيانات التذاكر داخل أقسام واضحة وسهلة الاستخدام.",
    },
  ],

  learned: [
    {
      title: {
        en: "Designed customer support interfaces.",
        ar: "تصميم واجهات أنظمة دعم العملاء",
      },
      icon: Ticket,
    },
    {
      title: {
        en: "Built ticket submission workflows.",
        ar: "بناء سير عمل لإرسال تذاكر الدعم",
      },
      icon: SearchCheck,
    },
    {
      title: {
        en: "Created organized service management layouts.",
        ar: "تصميم واجهات منظمة لإدارة الخدمات",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Improved responsive design using Bootstrap.",
        ar: "تحسين التصميم المتجاوب باستخدام Bootstrap",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "Developed reusable frontend components.",
        ar: "تطوير مكونات Frontend قابلة لإعادة الاستخدام",
      },
      icon: Code2,
    },
  ],

  full_date: {
    en: "March 2017",
    ar: "مارس 2017",
  },
};
