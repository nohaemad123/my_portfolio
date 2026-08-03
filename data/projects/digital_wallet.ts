import { ProjectType } from "@/types/projectType";

import {
  Wallet,
  CreditCard,
  Settings,
  Smartphone,
  ShieldCheck,
  ArrowLeftRight,
  History,
  Bell,
  User,
  Receipt,
  Landmark,
  Workflow,
  Blocks,
  FolderTree,
} from "lucide-react";

export const digital_wallet: ProjectType = {
  id: 6,
  image: "/tokens.png",
  scrollImage: false,
  features: [
    {
      icon: ShieldCheck,
      title: {
        en: "Secure Authentication",
        ar: "تسجيل دخول آمن",
      },
      description: {
        en: "Protect user accounts with secure authentication and authorization.",
        ar: "حماية حسابات المستخدمين من خلال نظام تسجيل دخول وصلاحيات آمن.",
      },
    },
    {
      icon: Wallet,
      title: {
        en: "Digital Wallet",
        ar: "المحفظة الرقمية",
      },
      description: {
        en: "Manage wallet balances and perform financial operations securely.",
        ar: "إدارة أرصدة المحافظ وتنفيذ العمليات المالية بأمان.",
      },
    },
    {
      icon: CreditCard,
      title: {
        en: "Payment Services",
        ar: "خدمات الدفع",
      },
      description: {
        en: "Perform multiple payment operations through an intuitive workflow.",
        ar: "تنفيذ عمليات دفع متعددة من خلال خطوات سهلة وواضحة.",
      },
    },
    {
      icon: ArrowLeftRight,
      title: {
        en: "Money Transfers",
        ar: "تحويل الأموال",
      },
      description: {
        en: "Transfer funds quickly and securely between wallet accounts.",
        ar: "تحويل الأموال بسرعة وأمان بين المحافظ.",
      },
    },
    {
      icon: History,
      title: {
        en: "Transaction History",
        ar: "سجل المعاملات",
      },
      description: {
        en: "Track all wallet transactions with detailed status updates.",
        ar: "متابعة جميع معاملات المحفظة مع عرض حالتها بالتفصيل.",
      },
    },
    {
      icon: Receipt,
      title: {
        en: "Transaction Details",
        ar: "تفاصيل المعاملات",
      },
      description: {
        en: "View complete payment records and transaction information.",
        ar: "عرض تفاصيل المدفوعات وسجل العمليات بالكامل.",
      },
    },
    {
      icon: Bell,
      title: {
        en: "Notifications",
        ar: "الإشعارات",
      },
      description: {
        en: "Receive real-time notifications for wallet activities.",
        ar: "استقبال إشعارات فورية بجميع أنشطة المحفظة.",
      },
    },
    {
      icon: User,
      title: {
        en: "Profile Management",
        ar: "إدارة الملف الشخصي",
      },
      description: {
        en: "Manage personal information and account details.",
        ar: "إدارة البيانات الشخصية ومعلومات الحساب.",
      },
    },
    {
      icon: Settings,
      title: {
        en: "Account Settings",
        ar: "إعدادات الحساب",
      },
      description: {
        en: "Customize wallet preferences and account configuration.",
        ar: "تخصيص إعدادات المحفظة والحساب.",
      },
    },
    {
      icon: Smartphone,
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
      en: "Managing secure financial workflows while maintaining a smooth user experience.",
      ar: "إدارة العمليات المالية الآمنة مع الحفاظ على تجربة استخدام سلسة.",
    },
    {
      en: "Handling complex transaction states and payment operations.",
      ar: "التعامل مع حالات المعاملات المختلفة وعمليات الدفع المعقدة.",
    },
    {
      en: "Building reusable components across multiple wallet modules.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام عبر وحدات المحفظة المختلفة.",
    },
    {
      en: "Keeping account information and transaction history synchronized.",
      ar: "الحفاظ على تزامن بيانات الحساب وسجل المعاملات.",
    },
    {
      en: "Creating responsive layouts for different screen sizes.",
      ar: "ضمان توافق التطبيق مع مختلف أحجام الشاشات.",
    },
  ],

  solutions: [
    {
      en: "Built reusable and modular components to improve maintainability.",
      ar: "إنشاء مكونات مرنة وقابلة لإعادة الاستخدام لتحسين سهولة الصيانة.",
    },
    {
      en: "Organized the application using a scalable feature-based architecture.",
      ar: "تنظيم التطبيق باستخدام هيكل يعتمد على تقسيمه إلى وحدات قابلة للتوسع.",
    },
    {
      en: "Implemented efficient state management for wallet operations.",
      ar: "تطبيق إدارة فعالة للحالة الخاصة بعمليات المحفظة.",
    },
    {
      en: "Created responsive layouts to ensure a consistent user experience.",
      ar: "تطبيق تصميمات متجاوبة لضمان تجربة استخدام متناسقة.",
    },
    {
      en: "Integrated REST APIs to handle transactions and account data dynamically.",
      ar: "دمج REST APIs لإدارة المعاملات وبيانات الحساب بشكل ديناميكي.",
    },
  ],

  learned: [
    {
      title: {
        en: "Building secure financial applications with Angular.",
        ar: "تطوير تطبيقات مالية آمنة باستخدام Angular.",
      },
      icon: Landmark,
    },
    {
      title: {
        en: "Managing transaction workflows and business logic.",
        ar: "إدارة سير العمل الخاص بالمعاملات ومنطق التطبيق.",
      },
      icon: Workflow,
    },
    {
      title: {
        en: "Creating reusable enterprise UI components.",
        ar: "إنشاء مكونات واجهة احترافية قابلة لإعادة الاستخدام.",
      },
      icon: Blocks,
    },
    {
      title: {
        en: "Structuring scalable Angular applications.",
        ar: "تنظيم تطبيقات Angular بطريقة قابلة للتوسع.",
      },
      icon: FolderTree,
    },
    {
      title: {
        en: "Integrating secure APIs and responsive interfaces.",
        ar: "دمج واجهات API آمنة وبناء واجهات متجاوبة.",
      },
      icon: ShieldCheck,
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
  slug: "ino_wallet",
  category: {
    en: "Web Application",
    ar: "تطبيق ويب",
  },

  name: {
    en: "INO Wallet",
    ar: "محفظة INO",
  },
  framework: "Angular",
  type: {
    en: "Digital Wallet",
    ar: "محفظة رقمية",
  },

  short_description: {
    en: "A secure digital wallet application that enables users to manage balances, transfer money, and monitor financial transactions through a responsive interface.",
    ar: "تطبيق محفظة رقمية آمن يتيح للمستخدمين إدارة الأرصدة وتحويل الأموال ومتابعة المعاملات المالية من خلال واجهة متجاوبة.",
  },

  description: {
    en: "INO Wallet is a secure digital wallet application developed to simplify financial transactions and account management. Users can manage wallet balances, transfer funds, review transaction history, and perform payment operations through a responsive and user-friendly interface. The application was built with scalability, performance, and usability in mind.",
    ar: "INO Wallet هو تطبيق محفظة رقمية آمن تم تطويره لتسهيل إدارة الحسابات والعمليات المالية. يتيح للمستخدمين إدارة الأرصدة وتحويل الأموال ومراجعة سجل المعاملات وتنفيذ عمليات الدفع من خلال واجهة احترافية ومتجاوبة، مع التركيز على الأداء وقابلية التوسع وسهولة الاستخدام.",
  },
  links: {
    demo: "",
    github: "https://github.com/nohaemad123/digital_wallet.git",
  },
};
