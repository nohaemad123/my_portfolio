import { ProjectType } from "@/types/projectType";

import {
  Code2,
  FolderTree,
  Palette,
  MonitorSmartphone,
  BadgePercent,
  ShoppingCart,
  Grid2x2,
  Search,
  ShoppingBag,
  LayoutGrid,
} from "lucide-react";

export const hafalat: ProjectType = {
  id: 20,
  image: "/haflat.png",
  scrollImage: true,
  features: [
    {
      icon: ShoppingBag,
      title: {
        en: "Product Catalog",
        ar: "كتالوج المنتجات",
      },
      description: {
        en: "Browse party supplies and event decorations through organized product collections.",
        ar: "تصفح مستلزمات الحفلات وديكورات المناسبات من خلال مجموعات منتجات منظمة.",
      },
    },
    {
      icon: Search,
      title: {
        en: "Product Search",
        ar: "البحث عن المنتجات",
      },
      description: {
        en: "Quickly search for products using keywords and categories.",
        ar: "ابحث بسرعة عن المنتجات باستخدام الكلمات المفتاحية أو الأقسام.",
      },
    },
    {
      icon: Grid2x2,
      title: {
        en: "Category Navigation",
        ar: "التنقل بين الأقسام",
      },
      description: {
        en: "Explore products organized into multiple event and decoration categories.",
        ar: "استعرض المنتجات المصنفة في أقسام مختلفة خاصة بالحفلات والديكورات.",
      },
    },
    {
      icon: ShoppingCart,
      title: {
        en: "Shopping Cart",
        ar: "سلة التسوق",
      },
      description: {
        en: "Add, review, and manage products before completing a purchase.",
        ar: "إضافة المنتجات ومراجعتها وإدارتها قبل إتمام عملية الشراء.",
      },
    },
    {
      icon: BadgePercent,
      title: {
        en: "Featured Offers",
        ar: "العروض المميزة",
      },
      description: {
        en: "Highlight featured products and promotional offers on the homepage.",
        ar: "عرض المنتجات المميزة والعروض الترويجية في الصفحة الرئيسية.",
      },
    },
    {
      icon: MonitorSmartphone,
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Provides a consistent shopping experience across desktop, tablet, and mobile devices.",
        ar: "يوفر تجربة استخدام متناسقة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
      },
    },
  ],

  challenges: [
    {
      en: "Designing an organized product catalog for a large number of items.",
      ar: "تصميم كتالوج منظم لعدد كبير من المنتجات.",
    },
    {
      en: "Building intuitive navigation across multiple product categories.",
      ar: "إنشاء نظام تنقل سهل بين أقسام المنتجات المختلفة.",
    },
    {
      en: "Creating a responsive shopping experience for different screen sizes.",
      ar: "توفير تجربة تسوق متجاوبة مع جميع أحجام الشاشات.",
    },
    {
      en: "Maintaining a clean and user-friendly interface using frontend technologies only.",
      ar: "الحفاظ على واجهة بسيطة وسهلة الاستخدام باستخدام تقنيات الواجهة الأمامية فقط.",
    },
  ],

  solutions: [
    {
      en: "Used Bootstrap grid system to organize product cards.",
      ar: "استخدام نظام Grid الخاص بـ Bootstrap لتنظيم بطاقات المنتجات.",
    },
    {
      en: "Implemented category-based navigation for easier browsing.",
      ar: "تنفيذ نظام تنقل يعتمد على الأقسام لتسهيل التصفح.",
    },
    {
      en: "Created reusable product cards and shared UI sections for better maintainability.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام وأقسام مشتركة لتحسين سهولة الصيانة.",
    },
    {
      en: "Applied responsive layouts to support all devices.",
      ar: "تطبيق تصميم متجاوب لدعم جميع الأجهزة.",
    },
  ],
  learned: [
    {
      icon: ShoppingBag,
      title: {
        en: "Designed responsive e-commerce user interfaces.",
        ar: "تصميم واجهات تجارة إلكترونية متجاوبة.",
      },
    },
    {
      icon: Search,
      title: {
        en: "Implemented product search and filtering.",
        ar: "تنفيذ البحث وتصفية المنتجات.",
      },
    },
    {
      icon: LayoutGrid,
      title: {
        en: "Built responsive product catalog layouts.",
        ar: "بناء تخطيطات متجاوبة لكتالوج المنتجات.",
      },
    },
    {
      icon: Palette,
      title: {
        en: "Improved user experience through clean interface design.",
        ar: "تحسين تجربة المستخدم من خلال تصميم واجهات نظيفة.",
      },
    },
    {
      icon: Code2,
      title: {
        en: "Built reusable layouts using Bootstrap.",
        ar: "إنشاء تخطيطات قابلة لإعادة الاستخدام باستخدام Bootstrap.",
      },
    },
    {
      icon: FolderTree,
      title: {
        en: "Organized frontend project structure for maintainability.",
        ar: "تنظيم هيكل المشروع لتحسين سهولة الصيانة.",
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
      en: "1 week",
      ar: "أسبوع",
    },
    status: {
      en: "Completed",
      ar: "تم الإنجاز",
    },
    year: "2017",
  },
  full_date: {
    en: "December 2017",
    ar: "ديسمبر 2017",
  },
  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
  slug: "hafalat",
  category: {
    en: "E-commerce",
    ar: "التجارة الإلكترونية",
  },
  name: {
    en: "Party Supplies Store",
    ar: "متجر مستلزمات الحفلات",
  },
  framework: "HTML/CSS",
  type: {
    en: "Party Supplies E-commerce Website",
    ar: "موقع تجارة إلكترونية لمستلزمات الحفلات",
  },
  short_description: {
    en: "A responsive e-commerce website for browsing, searching, and purchasing party supplies and event decoration products through a clean and organized shopping experience.",
    ar: "موقع تجارة إلكترونية متجاوب يتيح تصفح والبحث وشراء مستلزمات الحفلات وديكورات المناسبات من خلال تجربة تسوق منظمة وسهلة الاستخدام.",
  },
  description: {
    en: "Hafalat is a responsive e-commerce website developed for selling party supplies and event decoration products. The platform allows users to browse products by category, search for items, explore featured offers, and manage their shopping cart through a clean, organized, and user-friendly interface optimized for all devices.",
    ar: "حفلات هو موقع تجارة إلكترونية متجاوب تم تطويره لبيع مستلزمات الحفلات وديكورات المناسبات. يتيح للمستخدمين تصفح المنتجات حسب الأقسام، والبحث عن المنتجات، واستعراض العروض المميزة، وإدارة سلة التسوق من خلال واجهة بسيطة ومنظمة ومتوافقة مع جميع الأجهزة.",
  },
  links: {
    demo: "https://nohaemad123.github.io/7aflat/",
    github: "https://github.com/nohaemad123/7aflat.git",
  },
};
