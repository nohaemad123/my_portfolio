import { useLanguage } from "@/components/language-provider";
import { experienceType } from "@/types/experienceType";
import { BsSuitcaseLg } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { motion } from "motion/react";

interface ExperienceCardProps {
  experienceDetails: experienceType;
}

export default function ExperienceCard({
  experienceDetails,
}: ExperienceCardProps) {
  const { locale } = useLanguage();

  return (
    <div className="group relative rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] p-6 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl before:absolute before:start-0 before:top-0 before:h-full before:w-1 before:rounded-l-2xl before:bg-primary">
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.15,
            }}
            transition={{ duration: 0.25 }}
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-6"
          >
            <BsSuitcaseLg className="text-lg" />
          </motion.div>

          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
              {locale === "en"
                ? experienceDetails.title.en
                : experienceDetails.title.ar}
            </h4>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-1 font-semibold text-primary"
            >
              {experienceDetails.company}
            </motion.p>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <CiCalendar className="text-base" />

              <span>
                {locale === "en"
                  ? experienceDetails.period.en
                  : experienceDetails.period.ar}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {experienceDetails.tools.map((tool, index) => (
            <motion.span
              key={tool}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.08,
              }}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              {tool}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
          }}
          className="text-sm leading-7 text-gray-600 dark:text-gray-300"
        >
          {locale === "en"
            ? experienceDetails.description.en
            : experienceDetails.description.ar}
        </motion.p>
      </div>
    </div>
  );
}
