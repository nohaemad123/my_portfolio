import { ProjectType } from "@/types/projectType";
import {
  CloudSun,
  Database,
  Globe,
  Layout,
  MonitorSmartphone,
  RefreshCw,
  Search,
  Sparkles,
  Thermometer,
} from "lucide-react";

export const weather: ProjectType = {
  id: 10,
  image: "/weather.png",
  scrollImage: false,

  features: [
    {
      title: {
        en: "City Search",
        ar: "البحث عن مدينة",
      },
      description: {
        en: "Search weather conditions by entering any city name.",
        ar: "ابحث عن حالة الطقس بإدخال اسم أي مدينة.",
      },
      icon: Search,
    },
    {
      title: {
        en: "Real-Time Weather",
        ar: "الطقس المباشر",
      },
      description: {
        en: "Display current weather information instantly.",
        ar: "يعرض معلومات الطقس الحالية بشكل فوري.",
      },
      icon: CloudSun,
    },
    {
      title: {
        en: "Weather API Integration",
        ar: "ربط Weather API",
      },
      description: {
        en: "Fetch live weather data using the Weather API and AJAX.",
        ar: "يجلب بيانات الطقس المباشرة باستخدام Weather API وAJAX.",
      },
      icon: Database,
    },
    {
      title: {
        en: "Weather Details",
        ar: "تفاصيل الطقس",
      },
      description: {
        en: "View temperature, humidity, wind speed, and weather conditions.",
        ar: "يعرض درجة الحرارة والرطوبة وسرعة الرياح وحالة الطقس.",
      },
      icon: Thermometer,
    },
    {
      title: {
        en: "Dynamic Updates",
        ar: "تحديثات ديناميكية",
      },
      description: {
        en: "Refresh weather information without reloading the page.",
        ar: "يحدث بيانات الطقس بدون إعادة تحميل الصفحة.",
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
      en: "Integrating external weather data through asynchronous AJAX requests.",
      ar: "دمج بيانات الطقس الخارجية باستخدام طلبات AJAX غير المتزامنة.",
    },
    {
      en: "Managing API response errors and invalid city searches.",
      ar: "معالجة أخطاء الـ API وعمليات البحث عن مدن غير صحيحة.",
    },
    {
      en: "Updating the interface dynamically without refreshing the page.",
      ar: "تحديث الواجهة ديناميكيًا دون إعادة تحميل الصفحة.",
    },
    {
      en: "Formatting and displaying weather data clearly.",
      ar: "تنسيق وعرض بيانات الطقس بشكل واضح.",
    },
    {
      en: "Ensuring responsiveness across different devices.",
      ar: "ضمان توافق الموقع مع مختلف الأجهزة.",
    },
  ],

  solutions: [
    {
      en: "Integrated the Weather API to retrieve live weather data dynamically.",
      ar: "تم دمج Weather API لجلب بيانات الطقس المباشرة بشكل ديناميكي.",
    },
    {
      en: "Implemented error handling for invalid locations and failed requests.",
      ar: "تمت إضافة معالجة للأخطاء الخاصة بالمواقع غير الصحيحة والطلبات الفاشلة.",
    },
    {
      en: "Updated weather information dynamically using JavaScript and jQuery.",
      ar: "تم تحديث بيانات الطقس ديناميكيًا باستخدام JavaScript وjQuery.",
    },
    {
      en: "Designed a clean and responsive user interface with Bootstrap.",
      ar: "تم تصميم واجهة نظيفة ومتجاوبة باستخدام Bootstrap.",
    },
    {
      en: "Organized JavaScript code for better readability and maintainability.",
      ar: "تم تنظيم كود JavaScript لتحسين سهولة القراءة والصيانة.",
    },
  ],

  learned: [
    {
      title: {
        en: "Working with REST APIs using AJAX.",
        ar: "التعامل مع REST APIs باستخدام AJAX.",
      },
      icon: Globe,
    },
    {
      title: {
        en: "Handling asynchronous JavaScript requests.",
        ar: "التعامل مع الطلبات غير المتزامنة في JavaScript.",
      },
      icon: RefreshCw,
    },
    {
      title: {
        en: "Processing JSON responses from external APIs.",
        ar: "معالجة بيانات JSON القادمة من الـ APIs.",
      },
      icon: Database,
    },
    {
      title: {
        en: "Building dynamic interfaces with JavaScript and jQuery.",
        ar: "بناء واجهات ديناميكية باستخدام JavaScript وjQuery.",
      },
      icon: Layout,
    },
    {
      title: {
        en: "Improving user experience with real-time updates.",
        ar: "تحسين تجربة المستخدم بالتحديثات الفورية.",
      },
      icon: Sparkles,
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
    en: "December 2025",
    ar: "ديسمبر 2025",
  },

  technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery", "AJAX"],

  slug: "weather",

  category: {
    en: "Website",
    ar: "موقع إلكتروني",
  },

  name: {
    en: "Weather App",
    ar: "تطبيق الطقس",
  },

  framework: "HTML/CSS",

  type: {
    en: "Weather Forecast Website",
    ar: "موقع توقعات الطقس",
  },

  short_description: {
    en: "A responsive weather website that displays real-time weather conditions using Weather API and AJAX.",
    ar: "موقع طقس متجاوب يعرض حالة الطقس في الوقت الفعلي باستخدام Weather API وAJAX.",
  },

  description: {
    en: "A responsive weather website built using HTML, CSS, Bootstrap, JavaScript, jQuery, and AJAX. The application integrates with the Weather API to retrieve real-time weather information, including temperature, humidity, wind speed, and weather conditions based on user searches.",
    ar: "تطبيق طقس متجاوب تم تطويره باستخدام HTML وCSS وBootstrap وJavaScript وjQuery وAJAX. يعتمد على Weather API لجلب بيانات الطقس المباشرة مثل درجة الحرارة والرطوبة وسرعة الرياح وحالة الطقس وفقًا لبحث المستخدم.",
  },

  links: {
    demo: "https://nohaemad123.github.io/weather",
    github: "https://github.com/nohaemad123/weather.git",
  },
};
