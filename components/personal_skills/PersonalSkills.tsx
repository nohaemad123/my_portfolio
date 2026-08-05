import { personalSkillsData } from "@/data/PeaonalSkillsData";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

export default function PersonalSkills() {
  const { locale } = useLanguage();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {personalSkillsData.map((section) => {
        const Icon = section.icon;

        return (
          <motion.div
            key={section.id}
            variants={cardVariants}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="group flex items-center gap-4 rounded-xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] p-5 shadow-md transition-all duration-300 hover:border-primary hover:shadow-xl"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-primary group-hover:text-white">
              <Icon className="text-2xl" />
            </div>

            <div>
              <h4 className="mb-2 text-lg font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary">
                {locale === "en" ? section.title.en : section.title.ar}
              </h4>

              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                {locale === "en"
                  ? section.description.en
                  : section.description.ar}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
