import { ProjectType } from "@/types/projectType";
import {
  Smartphone,
  ShieldCheck,
  LayoutGrid,
  Heart,
  Search,
  Layers3,
  Blocks,
  ClipboardCheck,
  FolderTree,
  MonitorSmartphone,
  Sparkles,
  LayoutDashboard,
  Package,
  Repeat,
  Database,
} from "lucide-react";

export const bdel: ProjectType = {
  id: 4,
  image: "/bdel.png",
  slug: "bdel",
  scrollImage: true,

  category: {
    en: "Web Application",
    ar: "تطبيق ويب",
  },

  name: {
    en: "Bdel",
    ar: "بدّل",
  },

  framework: "Next.js",

  type: {
    en: "Product Exchange Platform",
    ar: "منصة لتبادل المنتجات",
  },

  description: {
    en: "Bdel is a modern product exchange platform that allows users to list products, browse exchange opportunities, send exchange requests, and manage their listings through a clean and responsive interface. The application focuses on usability, modular architecture, and delivering a seamless exchange experience.",
    ar: "بدّل هي منصة حديثة لتبادل المنتجات تتيح للمستخدمين إضافة منتجاتهم، واستعراض فرص التبادل، وإرسال طلبات التبادل، وإدارة منتجاتهم من خلال واجهة نظيفة ومتجاوبة، مع التركيز على سهولة الاستخدام وبنية مرنة وتجربة استخدام سلسة.",
  },

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    client: {
      en: "Personal Client",
      ar: "عميل شخصي",
    },
    status: {
      en: "Completed",
      ar: "تم الإنجاز",
    },
    year: "2026",
    duration: {
      en: "1 Month",
      ar: "شهر",
    },
  },

  full_date: {
    en: "May 2026 - June 2026",
    ar: "مايو 2026 - يونيو 2026",
  },

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Formik",
    "Yup",
    "Axios",
    "shadcn/ui",
  ],

  features: [
    {
      title: {
        en: "User Authentication",
        ar: "تسجيل المستخدمين",
      },
      description: {
        en: "Secure registration, login, and account management for all users.",
        ar: "تسجيل وإنشاء حساب وإدارة الحسابات بشكل آمن.",
      },
      icon: ShieldCheck,
    },
    {
      title: {
        en: "Product Listings",
        ar: "إضافة المنتجات",
      },
      description: {
        en: "Create, edit, and manage personal product listings with images and descriptions.",
        ar: "إضافة المنتجات وتعديلها وإدارتها مع الصور والوصف.",
      },
      icon: Package,
    },
    {
      title: {
        en: "Category Browsing",
        ar: "تصفح الأقسام",
      },
      description: {
        en: "Browse products organized into different categories.",
        ar: "استعراض المنتجات المصنفة في أقسام مختلفة.",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Product Search",
        ar: "البحث عن المنتجات",
      },
      description: {
        en: "Quickly search and discover products.",
        ar: "البحث السريع عن المنتجات واكتشافها.",
      },
      icon: Search,
    },
    {
      title: {
        en: "Exchange Requests",
        ar: "طلبات التبادل",
      },
      description: {
        en: "Send and receive exchange requests between users.",
        ar: "إرسال واستقبال طلبات التبادل بين المستخدمين.",
      },
      icon: Repeat,
    },
    {
      title: {
        en: "Favorites",
        ar: "المفضلة",
      },
      description: {
        en: "Save interesting products for quick access.",
        ar: "حفظ المنتجات المفضلة للوصول إليها بسهولة.",
      },
      icon: Heart,
    },
    {
      title: {
        en: "User Dashboard",
        ar: "لوحة التحكم",
      },
      description: {
        en: "Manage listings, exchange requests, and account information.",
        ar: "إدارة المنتجات وطلبات التبادل وبيانات الحساب.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Real-Time Data",
        ar: "بيانات مباشرة",
      },
      description: {
        en: "Display dynamic product information through API integration.",
        ar: "عرض بيانات المنتجات بشكل ديناميكي من خلال الـ APIs.",
      },
      icon: Database,
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
    {
      title: {
        en: "Modern UI",
        ar: "واجهة حديثة",
      },
      description: {
        en: "Clean interface built with reusable components.",
        ar: "واجهة حديثة مبنية باستخدام مكونات قابلة لإعادة الاستخدام.",
      },
      icon: Sparkles,
    },
  ],

  challenges: [
    {
      en: "Designing a smooth and intuitive product exchange experience instead of a traditional e-commerce flow.",
      ar: "تصميم تجربة تبادل منتجات سلسة بدلاً من تجربة التجارة الإلكترونية التقليدية.",
    },
    {
      en: "Managing complex forms for creating and editing product listings.",
      ar: "إدارة النماذج المعقدة الخاصة بإضافة وتعديل المنتجات.",
    },
    {
      en: "Building reusable UI components while maintaining a consistent design system.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام مع الحفاظ على تصميم موحد.",
    },
    {
      en: "Ensuring seamless navigation and responsive layouts across all devices.",
      ar: "ضمان سهولة التنقل وتوافق التصميم مع جميع الأجهزة.",
    },
    {
      en: "Organizing the application using the Next.js App Router architecture.",
      ar: "تنظيم المشروع باستخدام بنية App Router في Next.js.",
    },
  ],

  solutions: [
    {
      en: "Built reusable UI components using shadcn/ui for consistency and maintainability.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام باستخدام shadcn/ui لتحسين الاتساق وسهولة الصيانة.",
    },
    {
      en: "Used Formik and Yup to simplify form handling and validation.",
      ar: "استخدام Formik و Yup لتسهيل إدارة النماذج والتحقق من البيانات.",
    },
    {
      en: "Leveraged Next.js App Router to organize routes and improve application structure.",
      ar: "استخدام App Router في Next.js لتنظيم الصفحات وتحسين هيكل المشروع.",
    },
    {
      en: "Implemented responsive layouts with Tailwind CSS for all screen sizes.",
      ar: "تطبيق تصميم متجاوب باستخدام Tailwind CSS لجميع أحجام الشاشات.",
    },
    {
      en: "Structured the project into modular components to improve scalability and code maintainability.",
      ar: "تنظيم المشروع في مكونات مستقلة لتحسين قابلية التوسع وسهولة صيانة الكود.",
    },
  ],

  learned: [
    {
      title: {
        en: "Building scalable applications with Next.js App Router.",
        ar: "بناء تطبيقات قابلة للتوسع باستخدام Next.js App Router.",
      },
      icon: Layers3,
    },
    {
      title: {
        en: "Creating reusable UI components with shadcn/ui.",
        ar: "إنشاء مكونات قابلة لإعادة الاستخدام باستخدام shadcn/ui.",
      },
      icon: Blocks,
    },
    {
      title: {
        en: "Managing forms using Formik and Yup.",
        ar: "إدارة النماذج باستخدام Formik و Yup.",
      },
      icon: ClipboardCheck,
    },
    {
      title: {
        en: "Structuring modular and maintainable applications.",
        ar: "تنظيم التطبيقات بطريقة مرنة وسهلة الصيانة.",
      },
      icon: FolderTree,
    },
    {
      title: {
        en: "Building responsive interfaces with Tailwind CSS.",
        ar: "بناء واجهات متجاوبة باستخدام Tailwind CSS.",
      },
      icon: MonitorSmartphone,
    },
  ],

  short_description: {
    en: "A modern platform that enables users to list, discover, and exchange products through a secure and user-friendly experience.",
    ar: "منصة حديثة تتيح للمستخدمين إضافة المنتجات واكتشافها وتبادلها من خلال تجربة آمنة وسهلة الاستخدام.",
  },

  links: {
    demo: "https://bdel-kd859siz2-nohaemad123s-projects.vercel.app",
    github: "https://github.com/nohaemad123/bdel.git",
  },
};
