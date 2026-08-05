"use client";

import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { ProjectsData } from "@/data/projectsData";
import Heading from "@/shared_commponents/heading/Heading";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AllProjectCard from "@/shared_commponents/all_project_card/AllProjectCard";
import { Button } from "@/components/ui/button";

import { ProjectType } from "@/types/projectType";
import StatisiticsSection from "@/components/statistics_section/StatisiticsSection";
import { useLanguage } from "@/components/language-provider";
import InterestedSection from "@/components/interested_section/InterestedSection";
import { motion } from "motion/react";

export default function page() {
  const { locale, t } = useLanguage();

  const [search, setSearch] = useState("");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const allLabel = locale === "en" ? "All" : "الكل";

  const [activeFilter, setActiveFilter] = useState(allLabel);

  const [visibleProjects, setVisibleProjects] = useState(9);
  const getCategory = (project: ProjectType) =>
    locale === "en" ? project.category.en : project.category.ar;

  const filters = [
    allLabel,
    ...new Set(ProjectsData.map(getCategory).filter(Boolean)),
  ];

  const getSearchableText = (project: ProjectType) => {
    return (
      locale === "en"
        ? [
            project.name.en,
            project.type.en,
            project.short_description.en,
            project.description.en,
            project.framework,
            project.category.en,
            ...project.technologies,
          ]
        : [
            project.name.ar,
            project.type.ar,
            project.short_description.ar,
            project.description.ar,
            project.framework,
            project.category.ar,
            ...project.technologies,
          ]
    )
      .join(" ")
      .toLowerCase();
  };

  let filteredProjects = ProjectsData.filter((project) => {
    const matchesCategory =
      activeFilter === allLabel || getCategory(project) === activeFilter;

    const matchesSearch = getSearchableText(project).includes(
      search.trim().toLowerCase(),
    );

    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (category: string) => {
    if (category === allLabel) return ProjectsData.length;

    return ProjectsData.filter((project) => getCategory(project) === category)
      .length;
  };

  const [sortBy, setSortBy] = useState("newest");

  if (sortBy === "newest") {
    filteredProjects = [...filteredProjects].sort(
      (a, b) => Number(b.info.year) - Number(a.info.year),
    );
  }

  if (sortBy === "oldest") {
    filteredProjects = [...filteredProjects].sort(
      (a, b) => Number(a.info.year) - Number(b.info.year),
    );
  }

  useEffect(() => {
    setVisibleProjects(9);
  }, [activeFilter, search]);

  useEffect(() => {
    setActiveFilter(allLabel);
  }, [locale]);

  return (
    <>
      <Breadcrumb title={t.all_projects.title} />
      <div className="bg-slate-50 dark:bg-[#0a0a0a] py-10">
        <div className="container">
          <Heading
            title={t.all_projects.title}
            description={`${t.all_projects.description_1} ${ProjectsData.length}  ${t.all_projects.description_2}`}
          />

          <StatisiticsSection />

          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-[#151515] px-10 py-8 rounded-md shadow-md border border-gray-200dark:border-[#2a2a2a] mt-10"
          >
            <form className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between">
              <motion.div
                whileFocus={{
                  scale: 1.02,
                }}
                initial={{ opacity: 0, x: locale === "ar" ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative"
              >
                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  id="input-demo-api-key"
                  type="text"
                  placeholder={t.all_projects.search}
                  className="h-10! px-5 w-full md:w-90! dark:bg-[#1f1f1f] dark:border-[#2a2a2a] dark:text-white dark:placeholder:text-gray-400"
                />

                <div className="absolute end-3 top-3 text-gray-500 dark:text-gray-300">
                  <CiSearch />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: locale === "ar" ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Select
                  value={sortBy}
                  onValueChange={setSortBy}
                  dir={locale === "ar" ? "rtl" : "ltr"}
                >
                  <SelectTrigger className=" w-full md:w-[220px] dark:bg-[#1f1f1f] dark:border-[#2a2a2a] dark:text-white">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent className="dark:bg-[#1f1f1f] dark:border-[#2a2a2a]">
                    <SelectItem
                      value="newest"
                      className="dark:text-white dark:focus:bg-primary/20"
                    >
                      {t.all_projects.newest}
                    </SelectItem>

                    <SelectItem
                      value="oldest"
                      className="dark:text-white dark:focus:bg-primary/20"
                    >
                      {t.all_projects.oldest}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
            </form>

            <div className="flex items-center flex-wrap gap-y-3 justify-center mt-5 gap-x-4">
              {filters.map((filter, index) => (
                <motion.button
                  type="button"
                  key={filter}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "rounded-md border px-8 py-2 transition-all duration-300",
                    activeFilter === filter
                      ? "border-primary bg-primary text-white"
                      : "border-gray-200 bg-gray-100/80 hover:border-primary dark:border-[#2a2a2a] dark:bg-[#1f1f1f] dark:text-gray-200",
                  )}
                >
                  {filter} ({getCategoryCount(filter)})
                </motion.button>
              ))}
            </div>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-10"
          >
            {filteredProjects
              .slice(0, visibleProjects)
              .map((project, index) => (
                <AllProjectCard
                  key={project.slug}
                  projectDetails={{
                    ...project,
                    id: index + 1,
                  }}
                />
              ))}
          </motion.div>

          {visibleProjects < filteredProjects.length && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-10 flex justify-center"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <Button
                  onClick={() => setVisibleProjects((prev) => prev + 8)}
                  className="px-8"
                >
                  {t.all_projects.load_projects}
                </Button>
              </motion.div>
            </motion.div>
          )}
          <InterestedSection />
        </div>
      </div>
    </>
  );
}
