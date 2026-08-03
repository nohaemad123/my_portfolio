import { ProjectType } from "@/types/projectType";

import {
  Smartphone,
  ShieldCheck,
  ShoppingBag,
  LayoutGrid,
  ShoppingCart,
  Heart,
  CreditCard,
  Search,
  LoaderCircle,
  Sparkles,
  DatabaseZap,
  ClipboardCheck,
  Gauge,
  Blocks,
} from "lucide-react";

export const fresh_cart: ProjectType = {
  id: 2,
  image: "/fresh_cart.png",
  scrollImage: true,

  features: [
    {
      title: {
        en: "Responsive Design",
        ar: "تصميم متجاوب",
      },
      description: {
        en: "Optimized for desktop, tablet, and mobile devices to ensure a seamless shopping experience.",
        ar: "متوافق مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف لتوفير تجربة تسوق سلسة.",
      },
      icon: Smartphone,
    },
    {
      title: {
        en: "User Authentication",
        ar: "تسجيل الدخول",
      },
      description: {
        en: "Secure sign up, login, and account management for authenticated users.",
        ar: "تسجيل وإنشاء حساب وإدارة المستخدمين بشكل آمن.",
      },
      icon: ShieldCheck,
    },
    {
      title: {
        en: "Product Browsing",
        ar: "استعراض المنتجات",
      },
      description: {
        en: "Browse products with images, prices, ratings, and detailed information.",
        ar: "استعراض المنتجات مع الصور والأسعار والتقييمات والتفاصيل.",
      },
      icon: ShoppingBag,
    },
    {
      title: {
        en: "Category Filtering",
        ar: "تصفية حسب الأقسام",
      },
      description: {
        en: "Explore products by categories for faster and easier navigation.",
        ar: "تصفح المنتجات حسب الأقسام للوصول إليها بسهولة.",
      },
      icon: LayoutGrid,
    },
    {
      title: {
        en: "Shopping Cart",
        ar: "سلة المشتريات",
      },
      description: {
        en: "Add, update, and remove products with real-time cart synchronization.",
        ar: "إضافة وتعديل وحذف المنتجات مع تحديث السلة بشكل فوري.",
      },
      icon: ShoppingCart,
    },
    {
      title: {
        en: "Wishlist",
        ar: "المفضلة",
      },
      description: {
        en: "Save favorite products and manage them anytime.",
        ar: "حفظ المنتجات المفضلة وإدارتها في أي وقت.",
      },
      icon: Heart,
    },
    {
      title: {
        en: "Secure Checkout",
        ar: "إتمام الطلب",
      },
      description: {
        en: "Complete purchases through a clean and organized checkout process.",
        ar: "إتمام عمليات الشراء من خلال صفحة دفع منظمة وسهلة الاستخدام.",
      },
      icon: CreditCard,
    },
    {
      title: {
        en: "Product Search",
        ar: "البحث عن المنتجات",
      },
      description: {
        en: "Quickly find products using an integrated search feature.",
        ar: "البحث السريع عن المنتجات باستخدام خاصية البحث.",
      },
      icon: Search,
    },
    {
      title: {
        en: "Skeleton Loading",
        ar: "شاشات تحميل",
      },
      description: {
        en: "Smooth loading experience with skeleton placeholders while fetching data.",
        ar: "عرض عناصر تحميل مؤقتة أثناء جلب البيانات لتحسين تجربة المستخدم.",
      },
      icon: LoaderCircle,
    },
    {
      title: {
        en: "Modern UI",
        ar: "واجهة حديثة",
      },
      description: {
        en: "Clean, responsive, and user-friendly interface with reusable components.",
        ar: "واجهة عصرية ومتجاوبة تعتمد على مكونات قابلة لإعادة الاستخدام.",
      },
      icon: Sparkles,
    },
  ],

  challenges: [
    {
      en: "Providing a seamless loading experience while waiting for API responses.",
      ar: "توفير تجربة تحميل سلسة أثناء انتظار استجابة الـ API.",
    },
    {
      en: "Optimizing data fetching, caching, and synchronization across pages.",
      ar: "تحسين جلب البيانات والتخزين المؤقت والمزامنة بين الصفحات.",
    },
    {
      en: "Keeping the shopping cart and wishlist state consistent throughout the application.",
      ar: "الحفاظ على تزامن حالة سلة المشتريات والمفضلة في جميع أجزاء التطبيق.",
    },
    {
      en: "Creating reusable components without affecting maintainability.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام مع الحفاظ على سهولة الصيانة.",
    },
    {
      en: "Ensuring the application is fully responsive across desktop, tablet, and mobile devices.",
      ar: "ضمان توافق التطبيق مع أجهزة الكمبيوتر والأجهزة اللوحية والهواتف.",
    },
  ],

  solutions: [
    {
      en: "Implemented skeleton loading placeholders to improve the perceived loading experience.",
      ar: "استخدام Skeleton Loading لتحسين تجربة التحميل.",
    },
    {
      en: "Used TanStack Query for caching, background refetching, and efficient API management.",
      ar: "استخدام TanStack Query لإدارة البيانات والتخزين المؤقت بكفاءة.",
    },
    {
      en: "Built reusable UI components to improve scalability and maintainability.",
      ar: "إنشاء مكونات قابلة لإعادة الاستخدام لزيادة قابلية التوسع وسهولة الصيانة.",
    },
    {
      en: "Validated forms using Formik and Yup to provide a better user experience.",
      ar: "استخدام Formik و Yup للتحقق من النماذج وتحسين تجربة المستخدم.",
    },
    {
      en: "Implemented multilingual support with react-i18next for localization.",
      ar: "إضافة دعم تعدد اللغات باستخدام react-i18next.",
    },
  ],

  learned: [
    {
      title: {
        en: "Built scalable e-commerce applications using React.",
        ar: "تطوير تطبيقات تجارة إلكترونية قابلة للتوسع باستخدام React.",
      },
      icon: ShoppingCart,
    },
    {
      title: {
        en: "Learned advanced data fetching and caching techniques with TanStack Query.",
        ar: "تعلم تقنيات متقدمة لإدارة البيانات باستخدام TanStack Query.",
      },
      icon: DatabaseZap,
    },
    {
      title: {
        en: "Improved form validation and user experience using Formik and Yup.",
        ar: "تحسين التحقق من النماذج وتجربة المستخدم باستخدام Formik و Yup.",
      },
      icon: ClipboardCheck,
    },
    {
      title: {
        en: "Enhanced perceived performance with skeleton loading and optimized rendering.",
        ar: "تحسين الأداء الظاهري باستخدام Skeleton Loading وتحسين عملية العرض.",
      },
      icon: Gauge,
    },
    {
      title: {
        en: "Built reusable, maintainable, and responsive UI components.",
        ar: "إنشاء مكونات قابلة لإعادة الاستخدام وسهلة الصيانة ومتجاوبة.",
      },
      icon: Blocks,
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
      en: "2 Months",
      ar: "شهران",
    },
    status: {
      en: "Completed",
      ar: "تم الانجاز",
    },
    year: "2025",
  },

  full_date: {
    en: "April 2025 - June 2025",
    ar: "أبريل 2025 - يونيو 2025",
  },

  technologies: [
    "React",
    "JavaScript",
    "Vite",
    "Tailwind CSS",
    "Redux Toolkit",
    "TanStack Query",
    "Formik",
    "Yup",
    "Axios",
    "react-i18next",
  ],

  framework: "React",

  category: {
    en: "Web Application",
    ar: "تطبيق ويب",
  },

  slug: "fresh_cart",

  type: {
    en: "Online Store",
    ar: "متجر إلكتروني",
  },

  name: {
    en: "FreshCart",
    ar: "فريش كارت",
  },

  short_description: {
    en: "A modern online store that provides secure authentication, product browsing, shopping cart, wishlist, checkout, and a responsive shopping experience.",
    ar: "متجر إلكتروني حديث يوفر تسجيل دخول آمن، واستعراض المنتجات، وسلة مشتريات، وقائمة مفضلة، وصفحة دفع، وتجربة استخدام متجاوبة.",
  },

  description: {
    en: "FreshCart is a modern e-commerce web application that delivers a seamless online shopping experience. Users can browse products by category, search for items, manage their shopping cart and wishlist, securely authenticate their accounts, and complete the checkout process. The project focuses on performance, scalability, clean architecture, and an intuitive user experience.",
    ar: "FreshCart هو تطبيق تجارة إلكترونية حديث يوفر تجربة تسوق متكاملة، حيث يمكن للمستخدمين استعراض المنتجات حسب الأقسام، والبحث عنها، وإدارة سلة المشتريات والمفضلة، وتسجيل الدخول بشكل آمن، وإتمام عملية الشراء بسهولة. ركز المشروع على الأداء وقابلية التوسع وبنية الكود النظيفة وتجربة مستخدم مميزة.",
  },

  links: {
    demo: "https://fresh-cart-shop.vercel.app",
    github: "https://github.com/nohaemad123/fresh_cart_shop.git",
  },
};
