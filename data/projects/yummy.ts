import { ProjectType } from "@/types/projectType";

import {
  Search,
  BookOpen,
  Database,
  RefreshCw,
  Globe,
  Code2,
  Carrot,
  Smartphone,
  LayoutGrid,
  MonitorSmartphone,
  Wifi,
} from "lucide-react";

export const yummy: ProjectType = {
  id: 12,
  image: "/6e00df78-d285-48b6-b55e-096a09cb7a15.png",
  scrollImage: false,

  features: [
    {
      title: {
        en: "Recipe Search",
        ar: "البحث عن الوصفات",
      },
      description: {
        en: "Search meals instantly by recipe name.",
        ar: "ابحث عن الوجبات فورًا باستخدام اسم الوصفة.",
      },
      icon: Search,
    },
    {
      title: {
        en: "Browse Categories",
        ar: "تصفح التصنيفات",
      },
      description: {
        en: "Explore meals organized by food categories.",
        ar: "استعرض الوجبات المصنفة حسب أنواع الطعام.",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Area Filter",
        ar: "التصفية حسب الدولة",
      },
      description: {
        en: "Discover recipes from different countries.",
        ar: "اكتشف وصفات من مختلف دول العالم.",
      },
      icon: Globe,
    },
    {
      title: {
        en: "Ingredients Filter",
        ar: "التصفية حسب المكونات",
      },
      description: {
        en: "Find meals using selected ingredients.",
        ar: "اعثر على وجبات باستخدام المكونات التي تختارها.",
      },
      icon: Carrot,
    },
    {
      title: {
        en: "Recipe Details",
        ar: "تفاصيل الوصفة",
      },
      description: {
        en: "View ingredients, measurements, and cooking instructions.",
        ar: "اعرض المكونات والكميات وطريقة التحضير.",
      },
      icon: BookOpen,
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
      en: "Managing multiple API endpoints for categories, areas, ingredients, and meal details.",
      ar: "إدارة عدة نقاط API للتصنيفات والدول والمكونات وتفاصيل الوجبات.",
    },
    {
      en: "Updating the UI dynamically without page reloads.",
      ar: "تحديث واجهة المستخدم ديناميكيًا دون إعادة تحميل الصفحة.",
    },
    {
      en: "Handling asynchronous AJAX requests efficiently.",
      ar: "التعامل بكفاءة مع طلبات AJAX غير المتزامنة.",
    },
    {
      en: "Organizing JavaScript code into reusable and maintainable modules.",
      ar: "تنظيم كود JavaScript في وحدات قابلة لإعادة الاستخدام وسهلة الصيانة.",
    },
  ],

  solutions: [
    {
      en: "Created reusable AJAX functions for communicating with the API.",
      ar: "تم إنشاء دوال AJAX قابلة لإعادة الاستخدام للتواصل مع الـ API.",
    },
    {
      en: "Rendered content dynamically using jQuery DOM manipulation.",
      ar: "تم عرض المحتوى ديناميكيًا باستخدام jQuery والتعامل مع DOM.",
    },
    {
      en: "Implemented loading indicators while fetching API data.",
      ar: "تم إضافة مؤشرات تحميل أثناء جلب البيانات من الـ API.",
    },
    {
      en: "Separated application logic into reusable modules.",
      ar: "تم فصل منطق التطبيق إلى وحدات قابلة لإعادة الاستخدام.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built dynamic websites powered by AJAX requests.",
        ar: "بناء مواقع ديناميكية تعتمد على طلبات AJAX.",
      },
      icon: Wifi,
    },
    {
      title: {
        en: "Integrated external REST APIs efficiently.",
        ar: "دمج REST APIs الخارجية بكفاءة.",
      },
      icon: Database,
    },
    {
      title: {
        en: "Improved DOM manipulation using jQuery.",
        ar: "تحسين التعامل مع DOM باستخدام jQuery.",
      },
      icon: Code2,
    },
    {
      title: {
        en: "Handled asynchronous data fetching smoothly.",
        ar: "التعامل بسلاسة مع جلب البيانات غير المتزامن.",
      },
      icon: RefreshCw,
    },
    {
      title: {
        en: "Designed responsive layouts with Bootstrap.",
        ar: "تصميم واجهات متجاوبة باستخدام Bootstrap.",
      },
      icon: MonitorSmartphone,
    },
  ],

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
      en: "3 Days",
      ar: "3 أيام",
    },
    status: {
      en: "Completed",
      ar: "تم الانجاز",
    },
    year: "2025",
  },

  full_date: {
    en: "May 2025",
    ar: "مايو 2025",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "AJAX"],

  slug: "yummy_receipe",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "Yummy Recipes",
    ar: "وصفات شهية",
  },

  framework: "HTML/CSS",

  type: {
    en: "Recipe Website",
    ar: "موقع وصفات",
  },

  short_description: {
    en: "A responsive recipe website that allows users to discover meals by category, area, ingredients, and search using TheMealDB API.",
    ar: "موقع وصفات متجاوب يتيح للمستخدمين اكتشاف الوجبات حسب التصنيف أو الدولة أو المكونات، بالإضافة إلى البحث باستخدام TheMealDB API.",
  },

  description: {
    en: "Yummy Recipes is a responsive recipe website built using HTML, CSS, Bootstrap, JavaScript, jQuery, and AJAX. The project integrates TheMealDB API to allow users to browse meals by category, country, and ingredients, search for recipes instantly, and explore detailed cooking instructions with ingredients and measurements through a dynamic interface.",
    ar: "Yummy Recipes هو موقع وصفات متجاوب تم تطويره باستخدام HTML وCSS وBootstrap وJavaScript وjQuery وAJAX. يعتمد المشروع على TheMealDB API لتمكين المستخدمين من تصفح الوجبات حسب التصنيف أو الدولة أو المكونات، والبحث عن الوصفات بشكل فوري، بالإضافة إلى عرض تفاصيل الوصفات والمكونات والكميات وطريقة التحضير من خلال واجهة ديناميكية.",
  },

  links: {
    demo: "https://nohaemad123.github.io/noha_yummy_exam/",
    github: "https://github.com/nohaemad123/noha_yummy_exam.git",
  },
};
