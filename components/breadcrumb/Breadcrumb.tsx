"use client";
import Link from "next/link";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

type breadcrumbProps = {
  title: string | any;
};

export default function Breadcrumb({ title }: breadcrumbProps) {
  const { locale, t } = useLanguage();

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: -40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative bg-[#F8FAFF] dark:bg-[#0a0a0a] py-28  overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFF] via-white to-[#EEF3FF] dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#151515]" />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[350px] w-[350px] md:w-[650px] -translate-x-1/2 rounded-full  bg-primary/10  blur-[120px]"
      />

      <div className="absolute -left-0 top-0 h-72 w-72 rounded-full border border-primary/10 hidden md:block" />

      <div className="absolute -right-0 bottom-0 h-60 w-60 rounded-full border border-primary/10 hidden md:block" />

      <div className="absolute right-20 top-20 grid grid-cols-5 gap-3 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary/30" />
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] [background-image:linear-gradient(rgba(99,102,241,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,.4)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="text-5xl font-extrabold text-[#111827] dark:text-white"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
          }}
          className="mt-5 flex items-center gap-3 text-lg"
        >
          <motion.div
            whileHover={{
              x: locale === "ar" ? -3 : 3,
            }}
          >
            <Link
              href="/"
              className="text-gray-500 dark:text-gray-400 transition hover:text-primary "
            >
              {t.navbar.home}
            </Link>
          </motion.div>

          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.45,
            }}
          >
            /
          </motion.span>
          <motion.span
            initial={{
              opacity: 0,
              x: locale === "ar" ? 10 : -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="font-semibold text-primary"
          >
            {title}
          </motion.span>
        </motion.div>
      </div>
    </motion.section>
  );
}
