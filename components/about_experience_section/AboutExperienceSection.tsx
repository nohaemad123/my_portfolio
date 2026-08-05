"use client";

import { ExperienceData } from "@/data/experienceData";
import { BriefcaseBusiness, Code2 } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { motion } from "motion/react";
import { useLanguage } from "../language-provider";

export default function AboutExperienceSection() {
  const { t, locale } = useLanguage();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-white dark:bg-[#151515] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md px-8 py-8 mt-8 overflow-hidden">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold dark:text-white">
          {t.about.experience}
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          {t.about.experience_desc}
        </p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute start-[29px] top-6 bottom-6 hidden lg:block w-px bg-primary/20" />

        {ExperienceData.map((itemData, index) => (
          <motion.div
            key={itemData.id}
            variants={item}
            className={`relative grid items-start gap-8 py-10
              lg:grid-cols-[60px_minmax(180px,220px)_1fr_90px]
              ${
                index !== ExperienceData.length - 1
                  ? "border-b border-gray-100 dark:border-[#2a2a2a]"
                  : ""
              }`}
          >
            {/* Timeline Dot */}
            <div className="relative hidden lg:flex justify-center">
              <span className="z-10 flex h-7 w-7 items-center justify-center rounded-full border-4 border-white dark:border-[#151515] bg-primary shadow-lg">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </span>
            </div>

            {/* Date */}
            <div className="w-full rounded-xl bg-primary/10 px-4 py-3">
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <CiCalendar size={16} />

                <span>
                  {locale === "en" ? itemData.period.en : itemData.period.ar}
                </span>
              </div>
            </div>

            <div className="border-gray-200 dark:border-[#2a2a2a] lg:border-s lg:ps-8">
              <h3 className="text-2xl lg:text-3xl font-bold dark:text-white">
                {locale === "en" ? itemData.title.en : itemData.title.ar}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-primary font-semibold">
                <BriefcaseBusiness size={18} />
                {itemData.company}
              </div>

              <p className="mt-5 max-w-4xl leading-8 text-gray-600 dark:text-gray-400">
                {locale === "en"
                  ? itemData.description.en
                  : itemData.description.ar}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {itemData.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-gray-100 dark:bg-[#222] px-3 py-1 text-sm text-gray-700 dark:text-gray-300 transition hover:bg-primary hover:text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center pt-2">
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 6,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
              >
                <Code2 className="text-primary" size={34} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
