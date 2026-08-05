"use client";
import { technicalSkillsData } from "@/data/techicalSkillsData";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

export default function TechnicalSkills() {
  const { locale, t } = useLanguage();
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const card = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillsContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const skillVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8"
    >
      {technicalSkillsData.map((section) => (
        <motion.div
          key={section.id}
          variants={card}
          className="rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-whitedark:bg-[#151515] p-6 shadow-md transition-all duration-300 hover:shadow-xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-primary"></span>
              <span className="h-[2px] w-12 bg-primary"></span>
            </div>

            <h3 className="text-md md:text-xl font-bold text-gray-900 dark:text-white">
              {locale === "en" ? section.category.en : section.category.ar}
            </h3>
          </div>

          <motion.div
            variants={skillsContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {section.skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover={{
                    y: -5,
                    scale: 1.04,
                  }}
                  className="group flex items-center gap-3 rounded-xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1f1f1f] p-3 transition-all duration-300 hover:border-primary hover:bg-primary/5"
                >
                  <Icon className="text-2xl text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
