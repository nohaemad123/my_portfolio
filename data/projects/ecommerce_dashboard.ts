import { ProjectType } from "@/types/projectType";

import {
  Users,
  BarChart3,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Layers3,
  Blocks,
  PencilRuler,
  TableProperties,
  FolderTree,
  Tags,
  TicketPercent,
  Palette,
  Settings,
  MonitorSmartphone,
} from "lucide-react";

export const ecommerce_dashboard: ProjectType = {
  id: 5,
  image: "/ecommerce_dashboard.png",
  slug: "ecommerce_dashboard",
  scrollImage: false,

  name: {
    en: "E-Commerce Dashboard",
    ar: "لوحة تحكم التجارة الإلكترونية",
  },

  category: {
    en: "Dashboard",
    ar: "لوحة تحكم",
  },

  framework: "Angular",

  type: {
    en: "Admin Dashboard",
    ar: "لوحة تحكم إدارية",
  },

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    client: {
      en: "Alnasyan Tech",
      ar: "النسيان تك",
    },
    duration: {
      en: "2 Months",
      ar: "شهران",
    },
    status: {
      en: "Completed",
      ar: "تم الإنجاز",
    },
    year: "2023",
  },

  full_date: {
    en: "May 2023 - July 2023",
    ar: "مايو 2023 - يوليو 2023",
  },

  technologies: [
    "Angular",
    "TypeScript",
    "HTML5",
    "SCSS",
    "Bootstrap",
    "Angular Material",
    "RxJS",
    "ngx-datatable",
    "Transloco",
    "REST API",
  ],

  features: [
    {
      icon: LayoutDashboard,
      title: {
        en: "Admin Dashboard",
        ar: "لوحة التحكم",
      },
      description: {
        en: "Centralized dashboard to monitor store performance and manage daily operations.",
        ar: "لوحة تحكم مركزية لمتابعة أداء المتجر وإدارة العمليات اليومية.",
      },
    },
    {
      icon: Package,
      title: {
        en: "Product Management",
        ar: "إدارة المنتجات",
      },
      description: {
        en: "Create, edit, delete, and organize products with categories and brands.",
        ar: "إضافة وتعديل وحذف وتنظيم المنتجات حسب الأقسام والعلامات التجارية.",
      },
    },
    {
      icon: Tags,
      title: {
        en: "Categories & Brands",
        ar: "الأقسام والعلامات التجارية",
      },
      description: {
        en: "Manage product categories and brands for better organization.",
        ar: "إدارة أقسام المنتجات والعلامات التجارية لتنظيم المحتوى.",
      },
    },
    {
      icon: ShoppingCart,
      title: {
        en: "Order Management",
        ar: "إدارة الطلبات",
      },
      description: {
        en: "Track customer orders and manage their status throughout the purchase process.",
        ar: "متابعة طلبات العملاء وإدارة حالتها خلال مراحل الشراء.",
      },
    },
    {
      icon: Users,
      title: {
        en: "Customer Management",
        ar: "إدارة العملاء",
      },
      description: {
        en: "Maintain customer information and user profiles.",
        ar: "إدارة بيانات العملاء وملفات المستخدمين.",
      },
    },
    {
      icon: TicketPercent,
      title: {
        en: "Coupons & Discounts",
        ar: "الكوبونات والخصومات",
      },
      description: {
        en: "Create and manage promotional coupons and discount campaigns.",
        ar: "إنشاء وإدارة الكوبونات والعروض الترويجية.",
      },
    },
    {
      icon: BarChart3,
      title: {
        en: "Reports & Analytics",
        ar: "التقارير والإحصائيات",
      },
      description: {
        en: "Generate reports to monitor sales and business performance.",
        ar: "إنشاء تقارير لمتابعة المبيعات وأداء المتجر.",
      },
    },
    {
      icon: Settings,
      title: {
        en: "Application Settings",
        ar: "إعدادات النظام",
      },
      description: {
        en: "Configure and customize the administration panel.",
        ar: "تخصيص وإدارة إعدادات لوحة التحكم.",
      },
    },
    {
      icon: Palette,
      title: {
        en: "Theme Builder",
        ar: "محرر الثيم",
      },
      description: {
        en: "Customize the dashboard appearance using the integrated theme builder.",
        ar: "تخصيص مظهر لوحة التحكم باستخدام محرر الثيم.",
      },
    },
    {
      icon: MonitorSmartphone,
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
      en: "Managing products, orders, customers, and reports within a single administration dashboard.",
      ar: "إدارة المنتجات والطلبات والعملاء والتقارير داخل لوحة تحكم واحدة.",
    },
    {
      en: "Handling large datasets efficiently inside data tables.",
      ar: "التعامل مع كميات كبيرة من البيانات داخل الجداول بكفاءة.",
    },
    {
      en: "Building reusable components shared across multiple management modules.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام بين صفحات الإدارة المختلفة.",
    },
    {
      en: "Maintaining a consistent user interface while supporting responsive layouts.",
      ar: "الحفاظ على واجهة موحدة مع دعم جميع أحجام الشاشات.",
    },
    {
      en: "Organizing the project to remain scalable as new modules were added.",
      ar: "تنظيم المشروع ليظل قابلاً للتوسع مع إضافة وحدات جديدة.",
    },
  ],

  solutions: [
    {
      en: "Developed reusable Angular components to reduce duplication and simplify maintenance.",
      ar: "تطوير مكونات Angular قابلة لإعادة الاستخدام لتقليل التكرار وتسهيل الصيانة.",
    },
    {
      en: "Integrated ngx-datatable to efficiently display and manage large datasets.",
      ar: "استخدام ngx-datatable لعرض وإدارة البيانات الكبيرة بكفاءة.",
    },
    {
      en: "Used Angular Material to provide a modern and consistent user interface.",
      ar: "الاعتماد على Angular Material لإنشاء واجهة حديثة ومتناسقة.",
    },
    {
      en: "Organized the project into feature-based modules to improve scalability and maintainability.",
      ar: "تنظيم المشروع إلى وحدات مستقلة حسب المزايا لتحسين قابلية التوسع والصيانة.",
    },
    {
      en: "Implemented responsive layouts to ensure a seamless experience across devices.",
      ar: "تطبيق تصميم متجاوب لضمان تجربة استخدام متناسقة على جميع الأجهزة.",
    },
  ],

  learned: [
    {
      icon: Layers3,
      title: {
        en: "Built scalable Angular applications using feature-based architecture.",
        ar: "بناء تطبيقات Angular قابلة للتوسع باستخدام Feature-Based Architecture.",
      },
    },
    {
      icon: Blocks,
      title: {
        en: "Created reusable Angular components.",
        ar: "إنشاء مكونات Angular قابلة لإعادة الاستخدام.",
      },
    },
    {
      icon: PencilRuler,
      title: {
        en: "Implemented complex CRUD operations.",
        ar: "تنفيذ عمليات CRUD المعقدة.",
      },
    },
    {
      icon: TableProperties,
      title: {
        en: "Worked with data tables, filtering, and pagination.",
        ar: "التعامل مع الجداول والفلترة وتقسيم الصفحات.",
      },
    },
    {
      icon: FolderTree,
      title: {
        en: "Structured large Angular projects for maintainability.",
        ar: "تنظيم مشاريع Angular الكبيرة لتحسين سهولة الصيانة.",
      },
    },
  ],

  short_description: {
    en: "A modern Angular-based administration dashboard for managing products, customers, orders, reports, and store operations.",
    ar: "لوحة تحكم إدارية حديثة مبنية باستخدام Angular لإدارة المنتجات والعملاء والطلبات والتقارير وعمليات المتجر.",
  },

  description: {
    en: "An enterprise administration dashboard built with Angular to simplify e-commerce management. The platform enables administrators to manage products, categories, brands, customers, orders, discount coupons, reports, and application settings through a responsive, scalable, and user-friendly interface.",
    ar: "لوحة تحكم إدارية متكاملة تم تطويرها باستخدام Angular لتسهيل إدارة أنظمة التجارة الإلكترونية. تتيح للمسؤولين إدارة المنتجات والأقسام والعلامات التجارية والعملاء والطلبات والكوبونات والتقارير وإعدادات النظام من خلال واجهة متجاوبة وسهلة الاستخدام وقابلة للتوسع.",
  },

  links: {
    demo: "",
    github: "https://github.com/nohaemad123/ecommerce_alnasayan.git",
  },
};
