"use client";
import { ExperienceData } from "@/data/experienceData";
import ExperienceCard from "@/shared_commponents/experience_card/ExperienceCard";
import Heading from "@/shared_commponents/heading/Heading";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

export default function ExperienceSection() {
  const { t } = useLanguage();
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
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
  return (
    <section className="py-20 " id="experience">
      <div className="container">
        <Heading
          title={t.experience.title}
          description={t.experience.description}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 lg:grid-cols-3"
        >
          {ExperienceData?.map((experience) => (
            <motion.div key={experience.id} variants={cardVariants}>
              <ExperienceCard
                experienceDetails={experience}
                key={experience.id}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
