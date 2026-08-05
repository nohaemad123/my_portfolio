import { useLanguage } from "@/components/language-provider";
import { serviceType } from "@/types/serviceType";
import { motion } from "motion/react";

interface ServiceCardProps {
  serviceDetails: serviceType;
}

export default function ServiceCard({ serviceDetails }: ServiceCardProps) {
  const Icon = serviceDetails.icon;
  const { locale, setLocale, t } = useLanguage();

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative overflow-hidden rounded-3xl border border-[#E9E9F7] dark:border-white/10 bg-gradient-to-br from-white via-[#FCFCFF] to-[#F4F2FF] dark:from-[#111111] dark:via-[#151515] dark:to-[#1b1b1b] p-8 shadow-[0_15px_35px_rgba(91,61,245,0.08)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.3)]
        transition-all duration-500 h-full
        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-[0_25px_60px_rgba(91,61,245,0.15)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent dark:from-white/5 pointer-events-none" />

      <div className="absolute top-0 start-0 h-1 w-full bg-gradient-to-r from-primary via-violet-400 to-primary" />

      <div className="absolute -end-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl" />

      <div className="absolute end-8 top-8 grid grid-cols-3 gap-2 opacity-20">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
        ))}
      </div>

      <motion.div
        whileHover={{
          rotate: 8,
          scale: 1.1,
        }}
        transition={{ duration: 0.25 }}
        className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-violet-200 dark:from-primary/30 dark:to-violet-900/40 shadow-md"
      >
        <Icon className="text-4xl text-primary" />
      </motion.div>

      <h3 className="relative z-10 text-2xl font-bold text-[#111827] dark:text-white">
        {locale === "en" ? serviceDetails.title.en : serviceDetails.title.ar}
      </h3>

      <div className="relative z-10 mt-4 mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-violet-400" />

      <p className="relative z-10 text-lg leading-8 text-gray-600 dark:text-gray-300">
        {locale === "en"
          ? serviceDetails.description.en
          : serviceDetails.description.ar}
      </p>

      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.05] dark:from-primary/[0.08] dark:to-primary/[0.03]" />
    </motion.div>
  );
}
