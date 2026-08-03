import { ProjectType } from "@/types/projectType";
import {
  Boxes,
  ReceiptText,
  ArrowRightLeft,
  Users,
  Landmark,
  ScanBarcode,
  BarChart3,
  LayoutDashboard,
  Building2,
  Package,
  Wallet,
  ShieldCheck,
  Workflow,
  Blocks,
  Brain,
  ClipboardCheck,
} from "lucide-react";

export const erp_react: ProjectType = {
  id: 1,
  image: "/erp.png",
  name: {
    en: "ERP System",
    ar: "نظام ERP",
  },

  category: {
    en: "Web Application",
    ar: "تطبيق ويب",
  },

  type: {
    en: "ERP System",
    ar: "نظام تخطيط موارد المؤسسات",
  },
  framework: "Next.js",
  slug: "erp_system",
  scrollImage: false,

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    client: {
      en: "Alnasyan Company",
      ar: "Alnasyan Company",
    },
    duration: {
      en: "3 months",
      ar: "3 أشهر",
    },
    status: {
      en: "Completed",
      ar: "تم الإنجاز",
    },
    year: "2024",
  },

  full_date: {
    en: "January 2024 - March 2024",
    ar: "يناير 2024 - مارس 2024",
  },
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "React Hook Form",
    "Axios",
    "Zustand",
    "react-i18next",
    "Material UI",
  ],

  features: [
    {
      title: {
        en: "Role-Based Authentication",
        ar: "تسجيل دخول بصلاحيات مختلفة",
      },
      description: {
        en: "Secure authentication with role-based access control for different user permissions.",
        ar: "نظام تسجيل دخول آمن مع صلاحيات مختلفة حسب دور كل مستخدم.",
      },
      icon: ShieldCheck,
    },
    {
      title: {
        en: "Responsive Dashboard",
        ar: "لوحة تحكم متجاوبة",
      },
      description: {
        en: "Modern dashboard optimized for desktop, tablet, and mobile devices.",
        ar: "لوحة تحكم حديثة ومتجاوبة تعمل على جميع الأجهزة.",
      },
      icon: LayoutDashboard,
    },
    {
      title: {
        en: "Inventory Management",
        ar: "إدارة المخزون",
      },
      description: {
        en: "Manage products, categories, stock levels, and inventory movements efficiently.",
        ar: "إدارة المنتجات، التصنيفات، المخزون، وحركة الأصناف بسهولة.",
      },
      icon: Boxes,
    },
    {
      title: {
        en: "Product Groups",
        ar: "مجموعات المنتجات",
      },
      description: {
        en: "Organize products into groups and categories for easier inventory management.",
        ar: "تنظيم المنتجات داخل مجموعات وتصنيفات لتسهيل الإدارة.",
      },
      icon: Package,
    },
    {
      title: {
        en: "Sales & Purchase Management",
        ar: "إدارة المبيعات والمشتريات",
      },
      description: {
        en: "Create, edit, and manage purchase invoices, sales invoices, and return transactions.",
        ar: "إدارة فواتير البيع والشراء وعمليات المرتجعات.",
      },
      icon: ReceiptText,
    },
    {
      title: {
        en: "Cashier (POS)",
        ar: "نقطة البيع (POS)",
      },
      description: {
        en: "Dedicated cashier module for processing sales quickly and efficiently.",
        ar: "نظام كاشير مخصص لإتمام عمليات البيع بسرعة وكفاءة.",
      },
      icon: ScanBarcode,
    },
    {
      title: {
        en: "Customer & Supplier Management",
        ar: "إدارة العملاء والموردين",
      },
      description: {
        en: "Maintain customers, suppliers, representatives, and branches from one place.",
        ar: "إدارة بيانات العملاء والموردين والمندوبين والفروع من مكان واحد.",
      },
      icon: Users,
    },
    {
      title: {
        en: "Stock Transfer",
        ar: "تحويلات المخزون",
      },
      description: {
        en: "Track stock transfers between warehouses and branches.",
        ar: "متابعة عمليات نقل المخزون بين المخازن والفروع.",
      },
      icon: ArrowRightLeft,
    },
    {
      title: {
        en: "Financial Management",
        ar: "الإدارة المالية",
      },
      description: {
        en: "Handle payments, receipts, expenses, taxes, banks, and cash safes.",
        ar: "إدارة المدفوعات، المقبوضات، المصروفات، الضرائب، البنوك والخزائن.",
      },
      icon: Landmark,
    },
    {
      title: {
        en: "Banking & Safe Accounts",
        ar: "الحسابات البنكية والخزائن",
      },
      description: {
        en: "Manage bank accounts, bank cards, and cash safes.",
        ar: "إدارة الحسابات البنكية، البطاقات البنكية، والخزائن.",
      },
      icon: Wallet,
    },
    {
      title: {
        en: "Reports & Analytics",
        ar: "التقارير والتحليلات",
      },
      description: {
        en: "Generate detailed reports to monitor sales, inventory, and business performance.",
        ar: "إنشاء تقارير تفصيلية لمتابعة المبيعات والمخزون وأداء الأعمال.",
      },
      icon: BarChart3,
    },
    {
      title: {
        en: "Multi-Branch Support",
        ar: "دعم الفروع المتعددة",
      },
      description: {
        en: "Manage multiple branches and stores through one centralized ERP system.",
        ar: "إدارة أكثر من فرع ومخزن من خلال نظام ERP مركزي.",
      },
      icon: Building2,
    },
  ],

  challenges: [
    {
      en: "Managing a large-scale ERP application with multiple interconnected modules.",
      ar: "إدارة نظام ERP كبير يحتوي على العديد من الوحدات المترابطة.",
    },
    {
      en: "Keeping application state synchronized across different business modules.",
      ar: "الحفاظ على تزامن حالة التطبيق بين جميع الوحدات المختلفة.",
    },
    {
      en: "Building reusable and maintainable UI components for repeated business workflows.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام لدعم العمليات التجارية المتكررة.",
    },
    {
      en: "Handling complex forms with validation and dynamic fields.",
      ar: "التعامل مع نماذج معقدة تحتوي على تحقق ديناميكي من البيانات.",
    },
    {
      en: "Integrating multiple APIs while maintaining performance and a smooth user experience.",
      ar: "دمج العديد من واجهات API مع الحفاظ على الأداء وتجربة استخدام سلسة.",
    },
  ],

  solutions: [
    {
      en: "Organized the project using reusable components and a feature-based architecture.",
      ar: "تنظيم المشروع باستخدام مكونات قابلة لإعادة الاستخدام وهيكلية تعتمد على تقسيم المزايا.",
    },
    {
      en: "Used Redux Toolkit and Zustand for efficient state management.",
      ar: "استخدام Redux Toolkit وZustand لإدارة حالة التطبيق بكفاءة.",
    },
    {
      en: "Implemented React Hook Form to simplify complex forms and validation.",
      ar: "استخدام React Hook Form لتبسيط إدارة النماذج والتحقق من البيانات.",
    },
    {
      en: "Optimized API requests using Axios with centralized configuration and interceptors.",
      ar: "تحسين استدعاءات API باستخدام Axios مع إعدادات واعتراضات مركزية.",
    },
    {
      en: "Applied responsive layouts and reusable UI patterns to maintain consistency across modules.",
      ar: "تطبيق تصميمات متجاوبة وأنماط واجهة قابلة لإعادة الاستخدام للحفاظ على الاتساق.",
    },
  ],

  learned: [
    {
      title: {
        en: "Building scalable enterprise applications.",
        ar: "بناء تطبيقات مؤسسية قابلة للتوسع.",
      },
      icon: Building2,
    },
    {
      title: {
        en: "Managing complex business logic in scalable React/Next.js applications.",
        ar: "إدارة منطق الأعمال المعقد داخل تطبيقات React وNext.js.",
      },
      icon: Workflow,
    },
    {
      title: {
        en: "Creating reusable and maintainable components.",
        ar: "إنشاء مكونات قابلة لإعادة الاستخدام وسهلة الصيانة.",
      },
      icon: Blocks,
    },
    {
      title: {
        en: "Improving state management using Redux Toolkit and Zustand.",
        ar: "تحسين إدارة الحالة باستخدام Redux Toolkit وZustand.",
      },
      icon: Brain,
    },
    {
      title: {
        en: "Building efficient forms with React Hook Form and advanced validation.",
        ar: "إنشاء نماذج احترافية باستخدام React Hook Form مع التحقق المتقدم من البيانات.",
      },
      icon: ClipboardCheck,
    },
  ],

  short_description: {
    en: "A scalable ERP system for managing inventory, sales, purchases, finance, and daily business operations through a centralized dashboard.",
    ar: "نظام ERP متكامل لإدارة المخزون والمبيعات والمشتريات والمالية والعمليات اليومية من خلال لوحة تحكم مركزية.",
  },

  description: {
    en: "A scalable Enterprise Resource Planning (ERP) system developed to centralize and streamline daily business operations. The application includes inventory management, sales, purchases, accounting, banking, customer and supplier management, cashier, reports, and administration modules, providing businesses with an efficient and scalable management solution.",
    ar: "نظام ERP متكامل تم تطويره لتوحيد وإدارة العمليات اليومية للشركات من خلال لوحة تحكم مركزية. يضم النظام وحدات لإدارة المخزون، المبيعات، المشتريات، الحسابات، البنوك، العملاء، الموردين، الكاشير، التقارير، وإدارة المستخدمين، مما يوفر حلاً احترافيًا وقابلًا للتوسع لإدارة الأعمال.",
  },

  links: {
    demo: "",
    github: "https://github.com/nohaemad123/erp_react",
  },
};
