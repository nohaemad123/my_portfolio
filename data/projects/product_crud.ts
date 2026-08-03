import { ProjectType } from "@/types/projectType";

import {
  Search,
  Database,
  Smartphone,
  Trash2,
  Pencil,
  SquarePlus,
  ShieldCheck,
  HardDrive,
  Blocks,
  Code2,
} from "lucide-react";

export const product_crud: ProjectType = {
  id: 13,

  image: "/product_crud.png",
  scrollImage: true,

  name: {
    en: "Product CRUD System",
    ar: "نظام إدارة المنتجات (CRUD)",
  },

  type: {
    en: "Product Management System",
    ar: "نظام إدارة المنتجات",
  },

  short_description: {
    en: "A responsive product management system that enables users to create, update, delete, and search products using browser Local Storage.",
    ar: "نظام متجاوب لإدارة المنتجات يتيح إنشاء المنتجات وتعديلها وحذفها والبحث عنها مع حفظ البيانات باستخدام Local Storage.",
  },

  description: {
    en: "Product CRUD System is a responsive product management application built using HTML, CSS, Bootstrap, JavaScript, and jQuery. The project allows users to create, update, delete, and search products while storing data locally using the browser's Local Storage. It focuses on CRUD operations, DOM manipulation, client-side validation, and responsive user experience.",
    ar: "تطبيق متجاوب لإدارة المنتجات تم تطويره باستخدام HTML وCSS وBootstrap وJavaScript وjQuery. يتيح للمستخدمين إنشاء المنتجات وتعديلها وحذفها والبحث عنها مع تخزين البيانات محليًا باستخدام Local Storage، مع التركيز على عمليات CRUD والتعامل مع عناصر الصفحة (DOM) والتحقق من صحة البيانات وتحسين تجربة المستخدم.",
  },

  slug: "product-crud-system",

  links: {
    demo: "https://nohaemad123.github.io/products_crud/",
    github: "https://github.com/nohaemad123/products_crud.git",
  },

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    client: {
      en: "Personal Project",
      ar: "مشروع شخصي",
    },
    duration: {
      en: "1 Week",
      ar: "أسبوع",
    },
    status: {
      en: "Completed",
      ar: "تم الانجاز",
    },
    year: "2024",
  },

  technologies: [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "JavaScript",
    "jQuery",
    "Local Storage",
  ],

  framework: "HTML/CSS",

  category: {
    en: "Web Application",
    ar: "تطبيق ويب",
  },

  features: [
    {
      title: {
        en: "Product Management",
        ar: "إدارة المنتجات",
      },
      description: {
        en: "Create, update, delete, and manage product records.",
        ar: "إنشاء المنتجات وتعديلها وحذفها وإدارتها بسهولة.",
      },
      icon: Database,
    },
    {
      title: {
        en: "Create Products",
        ar: "إضافة المنتجات",
      },
      description: {
        en: "Add new products with complete details.",
        ar: "إضافة منتجات جديدة مع جميع التفاصيل.",
      },
      icon: SquarePlus,
    },
    {
      title: {
        en: "Update Products",
        ar: "تعديل المنتجات",
      },
      description: {
        en: "Edit existing product information instantly.",
        ar: "تعديل بيانات المنتجات بشكل فوري.",
      },
      icon: Pencil,
    },
    {
      title: {
        en: "Delete Products",
        ar: "حذف المنتجات",
      },
      description: {
        en: "Remove products individually or in bulk.",
        ar: "حذف المنتجات بشكل فردي أو جماعي.",
      },
      icon: Trash2,
    },
    {
      title: {
        en: "Product Search",
        ar: "البحث عن المنتجات",
      },
      description: {
        en: "Search products instantly by name.",
        ar: "البحث الفوري عن المنتجات بالاسم.",
      },
      icon: Search,
    },
    {
      title: {
        en: "Local Storage",
        ar: "التخزين المحلي",
      },
      description: {
        en: "Store and retrieve product data using browser Local Storage.",
        ar: "حفظ واسترجاع بيانات المنتجات باستخدام Local Storage.",
      },
      icon: HardDrive,
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
      en: "Keeping product data synchronized after every CRUD operation.",
      ar: "الحفاظ على تزامن بيانات المنتجات بعد كل عملية CRUD.",
    },
    {
      en: "Synchronizing Local Storage with the user interface.",
      ar: "مزامنة Local Storage مع واجهة المستخدم.",
    },
    {
      en: "Implementing fast real-time product search.",
      ar: "تنفيذ بحث سريع وفوري عن المنتجات.",
    },
    {
      en: "Validating user inputs before saving products.",
      ar: "التحقق من صحة البيانات قبل حفظ المنتجات.",
    },
  ],

  solutions: [
    {
      en: "Created reusable JavaScript functions for all CRUD operations.",
      ar: "إنشاء دوال JavaScript قابلة لإعادة الاستخدام لجميع عمليات CRUD.",
    },
    {
      en: "Automatically synchronized Local Storage after every operation.",
      ar: "مزامنة Local Storage تلقائيًا بعد كل عملية.",
    },
    {
      en: "Implemented dynamic search using JavaScript filtering.",
      ar: "تنفيذ بحث ديناميكي باستخدام JavaScript Filtering.",
    },
    {
      en: "Added input validation to prevent invalid product data.",
      ar: "إضافة التحقق من صحة البيانات لمنع إدخال معلومات غير صحيحة.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built complete CRUD applications using JavaScript.",
        ar: "بناء تطبيقات CRUD متكاملة باستخدام JavaScript.",
      },
      icon: Database,
    },
    {
      title: {
        en: "Worked extensively with browser Local Storage.",
        ar: "اكتساب خبرة في استخدام Local Storage.",
      },
      icon: HardDrive,
    },
    {
      title: {
        en: "Improved DOM manipulation skills.",
        ar: "تطوير مهارات التعامل مع DOM.",
      },
      icon: Code2,
    },
    {
      title: {
        en: "Built reusable JavaScript functions.",
        ar: "إنشاء دوال JavaScript قابلة لإعادة الاستخدام.",
      },
      icon: Blocks,
    },
    {
      title: {
        en: "Implemented client-side form validation.",
        ar: "تنفيذ التحقق من صحة النماذج على جانب العميل.",
      },
      icon: ShieldCheck,
    },
  ],

  full_date: {
    en: "May 2024",
    ar: "مايو 2024",
  },
};
