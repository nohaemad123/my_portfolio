import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  Code2,
  FileText,
  MonitorSmartphone,
  ShoppingCart,
  LayoutGrid,
  Package,
} from "lucide-react";

export const remedyline: ProjectType = {
  id: 34,

  image: "/remedyline.png",
  scrollImage: true,

  name: {
    en: "RemedyLine",
    ar: "ريميدي لاين",
  },

  type: {
    en: "Nutrition E-commerce Website",
    ar: "متجر إلكتروني للمنتجات الغذائية",
  },

  short_description: {
    en: "A responsive e-commerce website developed for selling nutrition products, dietary supplements, and healthy food items through a modern shopping experience.",
    ar: "متجر إلكتروني متجاوب لبيع المنتجات الغذائية والمكملات الصحية والأطعمة الصحية من خلال تجربة تسوق حديثة وسهلة.",
  },

  description: {
    en: "RemedyLine is a responsive e-commerce website developed for a health and nutrition store. The website allows customers to browse nutrition products, dietary supplements, and healthy food items through organized categories, detailed product pages, and a clean shopping experience optimized for all devices.",
    ar: "RemedyLine هو متجر إلكتروني متجاوب تم تطويره لمتجر متخصص في الصحة والتغذية. يتيح للمستخدمين تصفح المنتجات الغذائية والمكملات الصحية والأطعمة الصحية من خلال تصنيفات منظمة وصفحات منتجات تفصيلية وتجربة تسوق سهلة ومتوافقة مع جميع الأجهزة.",
  },

  slug: "remedyLine",

  links: {
    demo: "https://nohaemad123.github.io/remedyline/",
    github: "https://github.com/nohaemad123/remedyline.git",
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
    en: "E-commerce",
    ar: "متجر إلكتروني",
  },

  features: [
    {
      title: {
        en: "Product Catalog",
        ar: "كتالوج المنتجات",
      },
      description: {
        en: "Browse nutrition products, dietary supplements, and healthy food categories.",
        ar: "تصفح المنتجات الغذائية والمكملات الصحية والأطعمة الصحية من خلال تصنيفات منظمة.",
      },
      icon: Package,
    },
    {
      title: {
        en: "Product Details",
        ar: "تفاصيل المنتج",
      },
      description: {
        en: "View product descriptions, ingredients, pricing, and product information.",
        ar: "عرض وصف المنتجات والمكونات والأسعار وجميع المعلومات الخاصة بكل منتج.",
      },
      icon: FileText,
    },
    {
      title: {
        en: "Shopping Cart",
        ar: "سلة التسوق",
      },
      description: {
        en: "Add, update, and manage selected products before checkout.",
        ar: "إضافة المنتجات وتعديلها وإدارتها قبل إتمام عملية الشراء.",
      },
      icon: ShoppingCart,
    },
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Provides a seamless shopping experience across desktop, tablet, and mobile devices.",
        ar: "يوفر تجربة تسوق متكاملة على أجهزة الكمبيوتر والأجهزة اللوحية والهواتف المحمولة.",
      },
      icon: Smartphone,
    },
  ],

  challenges: [
    {
      en: "Organizing a wide range of nutrition products into clear categories.",
      ar: "تنظيم مجموعة كبيرة من المنتجات الغذائية داخل تصنيفات واضحة.",
    },
    {
      en: "Designing a simple and intuitive shopping experience.",
      ar: "تصميم تجربة تسوق بسيطة وسهلة الاستخدام.",
    },
    {
      en: "Building responsive layouts that work consistently across different devices.",
      ar: "بناء واجهات متجاوبة تعمل بكفاءة على مختلف الأجهزة.",
    },
  ],

  solutions: [
    {
      en: "Structured products into organized categories for easier browsing.",
      ar: "تنظيم المنتجات داخل تصنيفات مرتبة لتسهيل عملية التصفح.",
    },
    {
      en: "Designed reusable product cards to maintain a consistent shopping experience.",
      ar: "تصميم بطاقات منتجات قابلة لإعادة الاستخدام للحفاظ على تجربة مستخدم موحدة.",
    },
    {
      en: "Implemented responsive layouts using Bootstrap components.",
      ar: "تنفيذ تصميمات متجاوبة باستخدام مكونات Bootstrap.",
    },
  ],

  learned: [
    {
      title: {
        en: "Responsive E-commerce Development",
        ar: "تطوير متاجر إلكترونية متجاوبة",
      },
      icon: MonitorSmartphone,
    },
    {
      title: {
        en: "Product Catalog Organization",
        ar: "تنظيم كتالوج المنتجات",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Reusable Shopping Components",
        ar: "بناء مكونات تسوق قابلة لإعادة الاستخدام",
      },
      icon: Code2,
    },
    {
      title: {
        en: "Bootstrap Responsive Layouts",
        ar: "تصميمات Bootstrap المتجاوبة",
      },
      icon: Smartphone,
    },
  ],

  full_date: {
    en: "April 2017",
    ar: "أبريل 2017",
  },
};
