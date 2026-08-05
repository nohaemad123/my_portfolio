"use client";
import { ProjectsData } from "@/data/projectsData";
import ProjectCard from "@/shared_commponents/project_card/ProjectCard";
import Link from "next/link";
import Background from "../background/Background";
import Heading from "@/shared_commponents/heading/Heading";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

export default function ProjectsSection() {
  const { t } = useLanguage();
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
    <section className="relative  py-20 bg-[#FAFBFF]" id="projects">
      <Background />
      <div className="container relative z-10">
        <Heading
          title={t.featured_projects.title}
          description={t.featured_projects.description}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-10"
        >
          {ProjectsData.slice(0, 6).map((project) => {
            return (
              <motion.div key={project.id} variants={item}>
                <ProjectCard key={project.id} projectDetails={project} />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center mb-0"
        >
          <Link
            href="/all_projects"
            className="rounded-full bg-primary px-5 mb-0 py-2 text-white transition text-lg font-bold"
          >
            {t.featured_projects.more_projects}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
