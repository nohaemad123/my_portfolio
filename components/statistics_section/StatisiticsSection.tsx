"use client"
import { ProjectsData } from "@/data/projectsData";
import { technologyIcons } from "@/data/technologies";
import { BriefcaseBusiness, BadgeCheck } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { IoLayersOutline } from "react-icons/io5";
import { useLanguage } from "../language-provider";

export default function StatisticsSection() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className=" grid grid-cols-12 mt-8 h-full gap-y-10 lg:gap-x-8 items-center bg-white dark:bg-[#151515] px-1 py-6 md:px-6 rounded-md shadow-md border">
      {/* Years Experience */}
      <div className="col-span-12 lg:col-span-3">
        <div className="relative">
          <div className="flex items-start gap-4 pr-5">
            <div className="w-15 h-15 icon">
              <FaCode className="text-lg text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                +5
              </h4>

              <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                {t.stats_section.years} {t.stats_section.experience}
              </p>

              <p className="mt-1 font-semibold text-gray-600 dark:text-gray-300">
                {t.stats_section.experience_description}
              </p>
            </div>
          </div>

          <div className="absolute end-0 top-0 hidden h-full w-px bg-gray-200 dark:bg-[#2a2a2a] xl:block" />
        </div>
      </div>

      {/* Projects */}
      <div className="col-span-12 lg:col-span-3">
        <div className="relative">
          <div className="flex items-start gap-4 pr-5">
            <div className="w-15 h-15 icon">
              <BriefcaseBusiness className="text-lg text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                {ProjectsData.length}
              </h4>

              <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                {t.stats_section.projects} {t.stats_section.created}
              </p>

              <p className="mt-1 text-md font-semibold text-gray-600 dark:text-gray-300">
                {t.stats_section.project_description}
              </p>
            </div>
          </div>

          <div className="absolute end-0 top-0 hidden h-full w-px bg-gray-200 dark:bg-[#2a2a2a] xl:block" />
        </div>
      </div>

      {/* Technologies */}
      <div className="col-span-12 lg:col-span-3">
        <div className="relative">
          <div className="flex items-start gap-4 pr-5">
            <div className="w-15 h-15 icon">
              <IoLayersOutline className="text-lg text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                {Object.keys(technologyIcons)?.length}
              </h4>

              <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                {t.stats_section.technologies}
              </p>

              <p className="mt-1 text-md font-semibold leading-[1.5] text-gray-600 dark:text-gray-300">
                {t.stats_section.technologies_description}
              </p>
            </div>
          </div>
          <div className="absolute end-0 top-0 hidden h-full w-px bg-gray-200 dark:bg-[#2a2a2a] xl:block" />
        </div>
      </div>

      {/* Satisfaction */}
      <div className="col-span-12 lg:col-span-3">
        <div className="relative">
          <div className="flex items-start gap-4 pr-5">
            <div className="w-15 h-15 icon">
              <BadgeCheck className="text-lg text-primary" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-xl font-bold leading-tight text-gray-900 dark:text-white">
                100%
              </h4>

              <p className="mt-1 text-lg font-bold text-gray-900 dark:text-white">
                {locale === "ar" && (
                  <>
                    {t.stats_section.satistication} {""}
                    {t.stats_section.client}
                  </>
                )}

                {locale === "en" && (
                  <>
                    {t.stats_section.client}
                    {t.stats_section.satistication}
                  </>
                )}
              </p>

              <p className="mt-1 text-md font-semibold text-gray-600 dark:text-gray-300">
                {t.stats_section.client_description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
