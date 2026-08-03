import { ProjectType } from "@/types/projectType";

import {
  FaBolt,
  FaBuilding,
  FaChartLine,
  FaChartPie,
  FaCubes,
  FaDesktop,
  FaExchangeAlt,
  FaHeartbeat,
  FaProjectDiagram,
  FaShieldAlt,
  FaUsersCog,
  FaWallet,
} from "react-icons/fa";

export const digital_wallet_dashboard: ProjectType = {
  id: 8,
  image: "/a0d357a4-13bb-4463-8e5f-e1c4a201f28b.png",
  scrollImage: false,
  features: [
    {
      title: {
        en: "Performance Dashboard",
        ar: "لوحة الأداء",
      },
      description: {
        en: "Visualize blockchain performance with interactive charts and analytics.",
        ar: "عرض أداء البلوك تشين من خلال الرسوم البيانية والإحصائيات التفاعلية.",
      },
      icon: FaChartPie,
    },
    {
      title: {
        en: "Blockchain Statistics",
        ar: "إحصائيات البلوك تشين",
      },
      description: {
        en: "Monitor nodes, blocks, transactions, memory usage, and CPU performance in real time.",
        ar: "متابعة العقد والبلوكات والمعاملات واستهلاك الذاكرة والمعالج بشكل لحظي.",
      },
      icon: FaChartLine,
    },
    {
      title: {
        en: "Wallet Management",
        ar: "إدارة المحافظ",
      },
      description: {
        en: "Manage blockchain accounts, balances, and digital wallet information.",
        ar: "إدارة حسابات البلوك تشين والأرصدة ومعلومات المحافظ الرقمية.",
      },
      icon: FaWallet,
    },
    {
      title: {
        en: "Transaction Monitoring",
        ar: "مراقبة المعاملات",
      },
      description: {
        en: "Track transaction pools, transaction history, and network activity.",
        ar: "متابعة تجمعات المعاملات وسجل العمليات ونشاط الشبكة.",
      },
      icon: FaExchangeAlt,
    },
    {
      title: {
        en: "Validators Management",
        ar: "إدارة المدققين",
      },
      description: {
        en: "View validators and monitor blockchain validation status.",
        ar: "عرض المدققين ومتابعة حالة التحقق داخل شبكة البلوك تشين.",
      },
      icon: FaShieldAlt,
    },
    {
      title: {
        en: "User & Admin Management",
        ar: "إدارة المستخدمين والمشرفين",
      },
      description: {
        en: "Manage administrators, permissions, and user accounts securely.",
        ar: "إدارة المشرفين والصلاحيات وحسابات المستخدمين بشكل آمن.",
      },
      icon: FaUsersCog,
    },
    {
      title: {
        en: "System Monitoring",
        ar: "مراقبة النظام",
      },
      description: {
        en: "Track workload, heartbeat, logs, and application errors.",
        ar: "متابعة الحمل وسجلات النظام ونبض الخدمة والأخطاء.",
      },
      icon: FaHeartbeat,
    },
    {
      title: {
        en: "Responsive Dashboard",
        ar: "لوحة متجاوبة",
      },
      description: {
        en: "Optimized for desktop and tablet devices.",
        ar: "متوافقة مع أجهزة الكمبيوتر والأجهزة اللوحية.",
      },
      icon: FaDesktop,
    },
  ],

  challenges: [
    {
      en: "Managing multiple blockchain entities such as accounts, validators, transactions, and blocks.",
      ar: "إدارة العديد من كيانات البلوك تشين مثل الحسابات والمدققين والمعاملات والبلوكات.",
    },
    {
      en: "Designing a dashboard capable of displaying large amounts of statistical data clearly.",
      ar: "تصميم لوحة تحكم تعرض كمية كبيرة من البيانات والإحصائيات بشكل واضح.",
    },
    {
      en: "Building reusable dashboard components across different management pages.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام عبر صفحات الإدارة المختلفة.",
    },
    {
      en: "Maintaining responsive layouts for complex data visualization.",
      ar: "الحفاظ على تصميم متجاوب مع واجهات تحتوي على بيانات معقدة.",
    },
    {
      en: "Keeping the application architecture organized as the number of modules increased.",
      ar: "تنظيم هيكل التطبيق مع زيادة عدد الوحدات والخصائص.",
    },
  ],

  solutions: [
    {
      en: "Organized the project using a scalable feature-based Angular architecture.",
      ar: "تنظيم المشروع باستخدام هيكل Angular يعتمد على تقسيمه إلى وحدات قابلة للتوسع.",
    },
    {
      en: "Created reusable dashboard cards, tables, and shared UI components.",
      ar: "إنشاء بطاقات وجداول ومكونات مشتركة قابلة لإعادة الاستخدام.",
    },
    {
      en: "Separated business logic into dedicated Angular services for better maintainability.",
      ar: "فصل منطق العمل داخل خدمات Angular مستقلة لتحسين سهولة الصيانة.",
    },
    {
      en: "Implemented responsive layouts that adapt across different screen sizes.",
      ar: "تطبيق تصميمات متجاوبة تعمل بكفاءة على مختلف أحجام الشاشات.",
    },
    {
      en: "Designed a scalable structure that simplifies adding new blockchain management modules.",
      ar: "تصميم هيكل مرن يسهل إضافة وحدات جديدة لإدارة البلوك تشين.",
    },
  ],

  learned: [
    {
      title: {
        en: "Building enterprise-level Angular dashboards.",
        ar: "تطوير لوحات تحكم احترافية باستخدام Angular.",
      },
      icon: FaBuilding,
    },
    {
      title: {
        en: "Working with blockchain analytics and monitoring.",
        ar: "التعامل مع تحليلات ومراقبة البلوك تشين.",
      },
      icon: FaChartPie,
    },
    {
      title: {
        en: "Creating reusable dashboard components.",
        ar: "إنشاء مكونات لوحة تحكم قابلة لإعادة الاستخدام.",
      },
      icon: FaCubes,
    },
    {
      title: {
        en: "Designing scalable admin panel architecture.",
        ar: "تصميم هيكل قابل للتوسع للوحات الإدارة.",
      },
      icon: FaProjectDiagram,
    },
    {
      title: {
        en: "Optimizing dashboard performance and maintainability.",
        ar: "تحسين أداء لوحة التحكم وسهولة صيانتها.",
      },
      icon: FaBolt,
    },
  ],
  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    client: {
      en: "Innovation",
      ar: "Innovation",
    },
    duration: {
      en: "2 Months",
      ar: "شهران",
    },
    status: {
      en: "Completed",
      ar: "تم الإنجاز",
    },
    year: "2018",
  },
  full_date: {
    en: "August 2018 - October 2018",
    ar: "أغسطس 2018 - أكتوبر 2018",
  },
  technologies: [
    "Angular",
    "TypeScript",
    "HTML5",
    "SweetAlert2",
    "Scss",
    "Bootstrap",
    "Angular Material",
    "RxJS",
    "REST API",
  ],
  slug: "ino_wallet_dg",
  category: {
    en: "Dashboard",
    ar: "لوحة تحكم",
  },

  name: {
    en: "Digital Wallet Dashboard",
    ar: "لوحة تحكم المحفظة الرقمية",
  },
  framework: "Angular",
  type: {
    en: "Digital Wallet Dashboard",
    ar: "لوحة تحكم للمحفظة الرقمية",
  },

  short_description: {
    en: "A blockchain administration dashboard for monitoring wallets, validators, transactions, and network performance through a centralized management interface.",
    ar: "لوحة تحكم لإدارة البلوك تشين تتيح متابعة المحافظ والمدققين والمعاملات وأداء الشبكة من خلال واجهة مركزية.",
  },

  description: {
    en: "A modern blockchain administration dashboard developed to monitor wallets, validators, blockchain accounts, transactions, and network performance. The platform provides administrators with real-time insights through interactive statistics, management modules, and a responsive interface designed for scalability and operational efficiency.",
    ar: "لوحة تحكم حديثة تم تطويرها لإدارة ومتابعة المحافظ الرقمية والمدققين وحسابات البلوك تشين والمعاملات وأداء الشبكة. توفر المنصة للمشرفين إحصائيات لحظية ووحدات إدارة متعددة من خلال واجهة احترافية ومتجاوبة وقابلة للتوسع.",
  },
  links: {
    demo: "",
    github: "https://github.com/nohaemad123/digital_wallet_dashboard.git",
  },
};
