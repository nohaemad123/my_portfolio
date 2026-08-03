import { ProjectType } from "@/types/projectType";
import {
  FaMapMarkedAlt,
  FaSearchLocation,
  FaPaw,
  FaUserCircle,
  FaHeart,
  FaShoppingBag,
  FaComments,
  FaNewspaper,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

import {
  Blocks,
  Database,
  MonitorSmartphone,
  Network,
  Wrench,
} from "lucide-react";

export const bytary: ProjectType = {
  id: 3,
  image: "/bytary.png",
  name: {
    en: "Bytary",
    ar: "بيطري",
  },
  category: {
    en: "Web Application",
    ar: "تطبيق ويب",
  },
  framework: "React",
  slug: "bytary",
  type: {
    en: "Veterinary Platform",
    ar: "منصة بيطرية",
  },
  scrollImage: true,
  short_description: {
    en: "A modern veterinary platform that helps pet owners discover clinics, manage pets, explore products, and access veterinary services.",
    ar: "منصة بيطرية حديثة تساعد أصحاب الحيوانات الأليفة على العثور على العيادات، وإدارة الحيوانات، واستعراض المنتجات، والوصول إلى الخدمات البيطرية.",
  },

  description: {
    en: "Bytary is a modern veterinary platform developed to simplify pet healthcare services. The application enables users to discover veterinary clinics, browse pet products, manage their pets, book appointments, and access healthcare services through a responsive and intuitive interface. MockAPI was integrated to simulate real-world backend interactions during development.",
    ar: "بيطري هي منصة بيطرية حديثة تم تطويرها لتسهيل خدمات الرعاية الصحية للحيوانات الأليفة. تتيح للمستخدمين اكتشاف العيادات البيطرية، واستعراض منتجات الحيوانات، وإدارة بيانات حيواناتهم، وحجز المواعيد، والوصول إلى الخدمات البيطرية من خلال واجهة متجاوبة وسهلة الاستخدام. كما تم استخدام MockAPI لمحاكاة التفاعل مع الخادم أثناء التطوير.",
  },

  info: {
    role: {
      en: "Frontend Developer",
      ar: "مطور واجهات أمامية",
    },
    duration: {
      en: "1 month",
      ar: "شهر",
    },
    client: {
      en: "Personal Project",
      ar: "مشروع شخصي",
    },
    status: {
      en: "Completed",
      ar: "تم الإنجاز",
    },
    year: "2026",
  },

  full_date: {
    en: "April 2026 - May 2026",
    ar: "أبريل 2026 - مايو 2026",
  },
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Redux Toolkit",
    "TanStack Query",
    "Formik",
    "Yup",
    "Axios",
  ],
  features: [
    {
      title: {
        en: "Interactive Map Search",
        ar: "البحث عبر الخريطة",
      },
      description: {
        en: "Find veterinary clinics, pet stores, pharmacies, and veterinarians using an interactive map.",
        ar: "ابحث عن العيادات البيطرية ومتاجر الحيوانات والصيدليات والأطباء البيطريين من خلال خريطة تفاعلية.",
      },
      icon: FaMapMarkedAlt,
    },
    {
      title: {
        en: "Advanced Filtering",
        ar: "البحث المتقدم",
      },
      description: {
        en: "Search locations by governorate, region, and distance.",
        ar: "البحث حسب المحافظة والمنطقة والمسافة.",
      },
      icon: FaSearchLocation,
    },
    {
      title: {
        en: "Pet Management",
        ar: "إدارة الحيوانات",
      },
      description: {
        en: "Add, edit, and manage your pets and their information.",
        ar: "إضافة وتعديل وإدارة الحيوانات الأليفة وبياناتها.",
      },
      icon: FaPaw,
    },
    {
      title: {
        en: "Pet Products",
        ar: "منتجات الحيوانات",
      },
      description: {
        en: "Browse veterinary products and pet supplies.",
        ar: "استعراض المنتجات البيطرية ومستلزمات الحيوانات الأليفة.",
      },
      icon: FaShoppingBag,
    },
    {
      title: {
        en: "Favorites",
        ar: "المفضلة",
      },
      description: {
        en: "Save your favorite clinics, veterinarians, and pet stores.",
        ar: "حفظ العيادات والأطباء البيطريين ومتاجر الحيوانات المفضلة.",
      },
      icon: FaHeart,
    },
    {
      title: {
        en: "Community Forum",
        ar: "منتدى المجتمع",
      },
      description: {
        en: "Join discussions and connect with other pet owners.",
        ar: "المشاركة في النقاشات والتواصل مع أصحاب الحيوانات الآخرين.",
      },
      icon: FaComments,
    },
    {
      title: {
        en: "Blog & Pet Care",
        ar: "المدونة والعناية بالحيوانات",
      },
      description: {
        en: "Read articles and expert pet care tips.",
        ar: "قراءة المقالات ونصائح الخبراء للعناية بالحيوانات.",
      },
      icon: FaNewspaper,
    },
    {
      title: {
        en: "User Dashboard",
        ar: "لوحة المستخدم",
      },
      description: {
        en: "Manage profile, messages, favorites, and account settings.",
        ar: "إدارة الملف الشخصي والرسائل والمفضلة وإعدادات الحساب.",
      },
      icon: FaUserCircle,
    },
    {
      title: {
        en: "MockAPI Integration",
        ar: "التكامل مع MockAPI",
      },
      description: {
        en: "Fetch and manage dynamic data using MockAPI.",
        ar: "جلب وإدارة البيانات الديناميكية باستخدام MockAPI.",
      },
      icon: FaDatabase,
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
      icon: FaMobileAlt,
    },
  ],

  challenges: [
    {
      en: "Structuring a scalable application with multiple interconnected modules.",
      ar: "بناء تطبيق قابل للتوسع يضم عدة وحدات مترابطة.",
    },
    {
      en: "Simulating real backend interactions using MockAPI during development.",
      ar: "محاكاة التفاعل مع الخادم باستخدام MockAPI أثناء التطوير.",
    },
    {
      en: "Managing reusable UI components while maintaining a consistent design system.",
      ar: "إنشاء مكونات واجهة قابلة لإعادة الاستخدام مع الحفاظ على تصميم موحد.",
    },
    {
      en: "Creating a seamless experience for pet management, products, and veterinary services.",
      ar: "توفير تجربة استخدام سلسة لإدارة الحيوانات الأليفة والمنتجات والخدمات البيطرية.",
    },
    {
      en: "Ensuring responsive layouts across different screen sizes and devices.",
      ar: "ضمان توافق التصميم مع مختلف أحجام الشاشات والأجهزة.",
    },
  ],

  solutions: [
    {
      en: "Integrated MockAPI to simulate real-world backend operations.",
      ar: "دمج MockAPI لمحاكاة عمليات الخادم أثناء التطوير.",
    },
    {
      en: "Built reusable React components to improve maintainability.",
      ar: "إنشاء مكونات React قابلة لإعادة الاستخدام لتحسين سهولة الصيانة.",
    },
    {
      en: "Implemented responsive layouts using Tailwind CSS.",
      ar: "تطبيق تصميمات متجاوبة باستخدام Tailwind CSS.",
    },
    {
      en: "Organized the application into feature-based modules for better scalability.",
      ar: "تنظيم التطبيق إلى وحدات مستقلة حسب المزايا لزيادة قابلية التوسع.",
    },
    {
      en: "Optimized API requests using Axios for efficient data handling.",
      ar: "تحسين استدعاءات الـ API باستخدام Axios لإدارة البيانات بكفاءة.",
    },
  ],
  learned: [
    {
      title: {
        en: "Building scalable React applications.",
        ar: "بناء تطبيقات React قابلة للتوسع.",
      },
      icon: Blocks,
    },
    {
      title: {
        en: "Working with REST APIs using MockAPI and Axios.",
        ar: "التعامل مع REST APIs باستخدام MockAPI و Axios.",
      },
      icon: Database,
    },
    {
      title: {
        en: "Designing responsive user interfaces.",
        ar: "تصميم واجهات مستخدم متجاوبة.",
      },
      icon: MonitorSmartphone,
    },
    {
      title: {
        en: "Structuring feature-based React applications.",
        ar: "تنظيم تطبيقات React حسب المزايا (Feature-based).",
      },
      icon: Network,
    },
    {
      title: {
        en: "Writing reusable and maintainable components.",
        ar: "كتابة مكونات قابلة لإعادة الاستخدام وسهلة الصيانة.",
      },
      icon: Wrench,
    },
  ],
  links: {
    demo: "https://bytary-ar4ki7p4p-nohaemad123s-projects.vercel.app",
    github: "https://github.com/nohaemad123/bytary.git",
  },
};
