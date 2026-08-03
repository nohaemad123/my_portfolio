import { ProjectType } from "@/types/projectType";

import {
  UtensilsCrossed,
  Search,
  BookOpen,
  Database,
  RefreshCw,
  MonitorSmartphone,
  Globe,
  Layout,
  Code2,
} from "lucide-react";

export const tastyRecipe: ProjectType = {
  id: 11,

  image: "/tasty_recipe.png",

  scrollImage: true,

  name: {
    en: "Tasty Recipes",
    ar: "أشهى الوصفات",
  },

  type: {
    en: "Recipe Discovery Website",
    ar: "موقع وصفات طعام",
  },

  short_description: {
    en: "A responsive recipe website that integrates multiple REST APIs to display recipes, recipe details, and blog articles through a dynamic interface.",
    ar: "موقع وصفات متجاوب يدمج أكثر من REST API لعرض الوصفات وتفاصيلها والمقالات من خلال واجهة ديناميكية.",
  },

  description: {
    en: "Tasty Recipes is a responsive recipe website built using HTML, CSS, Bootstrap, JavaScript, jQuery, and AJAX. The project integrates the Forkify API to display recipes and detailed cooking instructions, while the JSONPlaceholder API is used to fetch blog articles. The application focuses on API integration, dynamic content rendering, and responsive user experience.",
    ar: "Tasty Recipes هو موقع وصفات متجاوب تم تطويره باستخدام HTML وCSS وBootstrap وJavaScript وjQuery وAJAX. يعتمد المشروع على Forkify API لعرض الوصفات وتعليمات الطهي، بالإضافة إلى JSONPlaceholder API لعرض المقالات. يركز المشروع على دمج واجهات برمجة التطبيقات وعرض البيانات بشكل ديناميكي مع توفير تجربة مستخدم متجاوبة.",
  },

  slug: "tasty_receipe",

  links: {
    demo: "https://nohaemad123.github.io/tasty-recipes/",
    github: "https://github.com/nohaemad123/tasty-recipes.git",
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
      en: "3 Days",
      ar: "3 أيام",
    },
    status: {
      en: "Completed",
      ar: "تم الانجاز",
    },
    year: "2025",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "AJAX"],

  framework: "HTML/CSS",

  category: {
    en: "Website",
    ar: "موقع ويب",
  },

  features: [
    {
      title: {
        en: "Recipe Search",
        ar: "البحث عن الوصفات",
      },
      description: {
        en: "Search recipes instantly using the Forkify API.",
        ar: "البحث عن الوصفات بشكل فوري باستخدام Forkify API.",
      },
      icon: Search,
    },
    {
      title: {
        en: "Recipe Details",
        ar: "تفاصيل الوصفة",
      },
      description: {
        en: "View ingredients, cooking instructions, and recipe information.",
        ar: "عرض المكونات وتعليمات الطهي وجميع تفاصيل الوصفة.",
      },
      icon: UtensilsCrossed,
    },
    {
      title: {
        en: "Blog Articles",
        ar: "مقالات المدونة",
      },
      description: {
        en: "Display blog posts dynamically using the JSONPlaceholder API.",
        ar: "عرض مقالات المدونة بشكل ديناميكي باستخدام JSONPlaceholder API.",
      },
      icon: BookOpen,
    },
    {
      title: {
        en: "Multiple API Integration",
        ar: "دمج عدة APIs",
      },
      description: {
        en: "Consume data from multiple REST APIs using AJAX.",
        ar: "جلب البيانات من عدة REST APIs باستخدام AJAX.",
      },
      icon: Database,
    },
    {
      title: {
        en: "Dynamic Content",
        ar: "محتوى ديناميكي",
      },
      description: {
        en: "Update content instantly without reloading the page.",
        ar: "تحديث المحتوى مباشرة دون إعادة تحميل الصفحة.",
      },
      icon: RefreshCw,
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
      icon: MonitorSmartphone,
    },
  ],

  challenges: [
    {
      en: "Integrating multiple REST APIs into a single application.",
      ar: "دمج أكثر من REST API داخل تطبيق واحد.",
    },
    {
      en: "Managing asynchronous AJAX requests efficiently.",
      ar: "إدارة طلبات AJAX غير المتزامنة بكفاءة.",
    },
    {
      en: "Rendering API responses dynamically in the user interface.",
      ar: "عرض بيانات الـ API بشكل ديناميكي داخل واجهة المستخدم.",
    },
    {
      en: "Handling invalid requests and API errors gracefully.",
      ar: "التعامل مع أخطاء الـ API والطلبات غير الصحيحة.",
    },
    {
      en: "Keeping the application responsive while displaying dynamic data.",
      ar: "الحفاظ على سرعة واستجابة التطبيق أثناء عرض البيانات الديناميكية.",
    },
  ],

  solutions: [
    {
      en: "Integrated multiple REST APIs using AJAX requests.",
      ar: "دمج عدة REST APIs باستخدام AJAX.",
    },
    {
      en: "Organized JavaScript code into reusable functions.",
      ar: "تنظيم كود JavaScript داخل دوال قابلة لإعادة الاستخدام.",
    },
    {
      en: "Implemented dynamic DOM rendering without page refreshes.",
      ar: "عرض البيانات داخل الـ DOM بدون إعادة تحميل الصفحة.",
    },
    {
      en: "Added error handling for failed API requests.",
      ar: "إضافة معالجة للأخطاء الناتجة عن فشل طلبات الـ API.",
    },
    {
      en: "Designed responsive layouts using Bootstrap and custom CSS.",
      ar: "تصميم واجهات متجاوبة باستخدام Bootstrap وCSS.",
    },
  ],

  learned: [
    {
      title: {
        en: "Working with multiple REST APIs.",
        ar: "التعامل مع أكثر من REST API.",
      },
      icon: Globe,
    },
    {
      title: {
        en: "Handling asynchronous AJAX requests.",
        ar: "إدارة طلبات AJAX غير المتزامنة.",
      },
      icon: RefreshCw,
    },
    {
      title: {
        en: "Processing JSON data dynamically.",
        ar: "معالجة بيانات JSON بشكل ديناميكي.",
      },
      icon: Database,
    },
    {
      title: {
        en: "Building responsive interfaces with Bootstrap.",
        ar: "بناء واجهات متجاوبة باستخدام Bootstrap.",
      },
      icon: Layout,
    },
    {
      title: {
        en: "Writing clean and reusable JavaScript code.",
        ar: "كتابة كود JavaScript نظيف وقابل لإعادة الاستخدام.",
      },
      icon: Code2,
    },
  ],

  full_date: {
    en: "December 2025",
    ar: "ديسمبر 2025",
  },
};
