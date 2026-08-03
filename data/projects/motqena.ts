import { ProjectType } from "@/types/projectType";
import {
  ShieldCheck,
  Users,
  ClipboardList,
  Truck,
  CalendarDays,
  MapPinned,
  FileBarChart2,
  Settings,
  Bell,
} from "lucide-react";

import {
  FaBuilding,
  FaCubes,
  FaProjectDiagram,
  FaTable,
  FaTasks,
} from "react-icons/fa";

export const motqena: ProjectType = {
  id: 7,
  image: "/motqena.png",
  scrollImage: false,

  name: {
    en: "Motqena",
    ar: "متقنة",
  },

  type: {
    en: "Home Services Platform",
    ar: "منصة إدارة خدمات منزلية",
  },

  category: {
    en: "Web Application",
    ar: "تطبيق ويب",
  },

  framework: "Next.js",

  slug: "motqena",

  short_description: {
    en: "A platform for managing home service requests, workers, scheduling, branches, and daily business operations through a centralized dashboard.",
    ar: "منصة لإدارة طلبات الخدمات المنزلية، والعمال، والجداول، والفروع، والعمليات اليومية من خلال لوحة تحكم مركزية.",
  },

  description: {
    en: "Motqena is a web-based home services management platform developed to simplify daily operations for service companies. The system enables administrators to manage customer requests, workers, schedules, branches, reports, and service operations through a centralized and responsive dashboard.",
    ar: "متقنة هي منصة ويب لإدارة الخدمات المنزلية تم تطويرها لتسهيل العمليات اليومية لشركات الخدمات. تتيح المنصة للمسؤولين إدارة طلبات العملاء، والعمال، والجداول، والفروع، والتقارير، وعمليات تقديم الخدمات من خلال لوحة تحكم مركزية ومتجاوبة.",
  },

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    client: {
      en: "Alnasyan Tech",
      ar: "Alnasyan Tech",
    },
    duration: {
      en: "3 Months",
      ar: "3 أشهر",
    },
    status: {
      en: "Completed",
      ar: "تم الانجاز",
    },
    year: "2025",
  },

  full_date: {
    en: "May 2025 - July 2025",
    ar: "مايو 2025 - يوليو 2025",
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
        en: "Role-Based Permissions",
        ar: "صلاحيات حسب الأدوار",
      },
      description: {
        en: "Secure access using roles and permission management.",
        ar: "إدارة وصول المستخدمين باستخدام نظام الأدوار والصلاحيات.",
      },
      icon: ShieldCheck,
    },
    {
      title: {
        en: "Order Management",
        ar: "إدارة الطلبات",
      },
      description: {
        en: "Create, assign, track, and manage customer service requests.",
        ar: "إنشاء وتعيين وتتبع وإدارة طلبات العملاء.",
      },
      icon: ClipboardList,
    },
    {
      title: {
        en: "Worker Management",
        ar: "إدارة العمال",
      },
      description: {
        en: "Manage workers, availability, profiles, and service assignments.",
        ar: "إدارة بيانات العمال، وتوفرهم، وتوزيع المهام عليهم.",
      },
      icon: Users,
    },
    {
      title: {
        en: "Trip & Shift Scheduling",
        ar: "جدولة الرحلات والورديات",
      },
      description: {
        en: "Organize daily trips, shifts, and worker schedules efficiently.",
        ar: "تنظيم الرحلات اليومية والورديات وجداول العمال.",
      },
      icon: CalendarDays,
    },
    {
      title: {
        en: "Service Management",
        ar: "إدارة الخدمات",
      },
      description: {
        en: "Manage available services, pricing, and service categories.",
        ar: "إدارة الخدمات والأسعار والتصنيفات المختلفة.",
      },
      icon: Settings,
    },
    {
      title: {
        en: "Live Delivery Tracking",
        ar: "تتبع مباشر للخدمة",
      },
      description: {
        en: "Track service trips and delivery status in real time.",
        ar: "متابعة الرحلات وحالة تنفيذ الخدمة بشكل لحظي.",
      },
      icon: Truck,
    },
    {
      title: {
        en: "Branch Management",
        ar: "إدارة الفروع",
      },
      description: {
        en: "Support multiple branches with centralized administration.",
        ar: "إدارة عدة فروع من خلال لوحة تحكم موحدة.",
      },
      icon: MapPinned,
    },
    {
      title: {
        en: "Reports & Analytics",
        ar: "التقارير والتحليلات",
      },
      description: {
        en: "Generate operational reports and performance analytics.",
        ar: "إنشاء تقارير تشغيلية وتحليلات للأداء.",
      },
      icon: FileBarChart2,
    },
    {
      title: {
        en: "Notifications",
        ar: "الإشعارات",
      },
      description: {
        en: "Receive instant updates for new requests and system events.",
        ar: "استقبال إشعارات فورية بالطلبات الجديدة وأحداث النظام.",
      },
      icon: Bell,
    },
  ],

  challenges: [
    {
      en: "Managing a large multi-module enterprise application.",
      ar: "إدارة تطبيق كبير يحتوي على العديد من الوحدات المختلفة.",
    },
    {
      en: "Implementing role-based access and permission management.",
      ar: "تطبيق نظام صلاحيات يعتمد على أدوار المستخدمين.",
    },
    {
      en: "Handling complex order lifecycle and service workflows.",
      ar: "إدارة دورة حياة الطلبات وسير العمل المعقد للخدمات.",
    },
    {
      en: "Keeping the dashboard responsive with large datasets.",
      ar: "الحفاظ على سرعة واستجابة لوحة التحكم مع كميات كبيرة من البيانات.",
    },
    {
      en: "Building reusable UI across dozens of management modules.",
      ar: "إنشاء مكونات واجهة قابلة لإعادة الاستخدام عبر العديد من الوحدات.",
    },
  ],

  solutions: [
    {
      en: "Applied a feature-based Next.js architecture for better scalability.",
      ar: "استخدام هيكل Feature-Based في Next.js لتحسين قابلية التوسع.",
    },
    {
      en: "Built reusable shared components to reduce duplication.",
      ar: "إنشاء مكونات مشتركة قابلة لإعادة الاستخدام لتقليل تكرار الكود.",
    },
    {
      en: "Implemented secure role and permission management.",
      ar: "تطبيق نظام آمن لإدارة الصلاحيات والأدوار.",
    },
    {
      en: "Optimized tables, filtering, and pagination for performance.",
      ar: "تحسين أداء الجداول والفلترة وتقسيم الصفحات.",
    },
    {
      en: "Separated business logic into maintainable services.",
      ar: "فصل منطق العمل داخل Services لسهولة الصيانة.",
    },
  ],

  learned: [
    {
      title: {
        en: "Building and maintaining large-scale Next.js applications.",
        ar: "تطوير وصيانة تطبيقات Next.js كبيرة الحجم.",
      },
      icon: FaBuilding,
    },
    {
      title: {
        en: "Designing scalable feature-based architecture.",
        ar: "تصميم هيكل Feature-Based قابل للتوسع.",
      },
      icon: FaProjectDiagram,
    },
    {
      title: {
        en: "Managing complex service workflows and business logic.",
        ar: "إدارة سير العمل ومنطق الأعمال المعقد.",
      },
      icon: FaTasks,
    },
    {
      title: {
        en: "Creating reusable and maintainable UI components.",
        ar: "إنشاء مكونات واجهة قابلة لإعادة الاستخدام وسهلة الصيانة.",
      },
      icon: FaCubes,
    },
    {
      title: {
        en: "Working with advanced tables, filtering, and reporting.",
        ar: "التعامل مع الجداول المتقدمة والفلترة والتقارير.",
      },
      icon: FaTable,
    },
  ],

  links: {
    demo: "https://dashboard.motqana.com/login",
    github: "https://github.com/nohaemad123/motqena.git",
  },
};
