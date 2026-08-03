"use client";

import { frameworkColors } from "@/data/frameworkColors";
import { technologyIcons } from "@/data/technologies";
import { cn } from "@/lib/utils";
import { ProjectType } from "@/types/projectType";
import Image from "next/image";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { FaArrowRight, FaLongArrowAltRight } from "react-icons/fa";
import { useLanguage } from "@/components/language-provider";
import { useTheme } from "@/hooks/use-theme";
import { frameworkConfig } from "@/data/frameworks";

interface ProjectCardProps {
  projectDetails: ProjectType;
}

export default function AllProjectCard({ projectDetails }: ProjectCardProps) {
  const { image, name, short_description, framework, slug, technologies } =
    projectDetails;
  const { locale, t } = useLanguage();
  const { theme } = useTheme();

  const frameworkStyle = frameworkConfig[framework] ?? frameworkConfig.React;

  

  const bgClass =
    theme === "dark" ? frameworkStyle.darkBg : frameworkStyle.lightBg;

  const textClass =
    theme === "dark" ? frameworkStyle.darkText : frameworkStyle.lightText;

  const style =
    frameworkColors[projectDetails.framework as keyof typeof frameworkColors];

  return (
    <div className="group bg-white dark:bg-[#151515] px-4 py-4 rounded-md shadow-md border border-gray-200 dark:border-[#2a2a2a] mt-10 transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden rounded-md">
        <Image
          src={image}
          alt={locale === "en" ? name.en : name.ar}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />

        <div className="absolute start-4 top-4">
          <span
            className={cn(
              "rounded-md px-4 py-1 text-[14px] font-extrabold",
              theme === "dark" ? frameworkStyle.darkBg : frameworkStyle.lightBg,
              theme === "dark"
                ? frameworkStyle.darkText
                : frameworkStyle.lightText,
            )}
          >
            {framework}

            
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 mt-5">
        <Link href={`/projects/${slug}`}>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white transition hover:text-primary">
            {locale === "en" ? name.en : name.ar}
          </h3>
        </Link>

        <p className="text-sm line-clamp-2 leading-7 text-gray-600 dark:text-gray-300">
          {locale === "en" ? short_description.en : short_description.ar}
        </p>

        <div className="flex gap-x-4 flex-wrap gap-y-2 mt-2">
          <TooltipProvider>
            {technologies?.map((tech) => {
              const item =
                technologyIcons[tech as keyof typeof technologyIcons];

              if (!item) return null;

              const Icon = item.icon;

              return (
                <Tooltip key={tech}>
                  <TooltipTrigger asChild>
                    <button className="flex items-center justify-center rounded-full">
                      <Icon className="text-xl" style={{ color: item.color }} />
                    </button>
                  </TooltipTrigger>

                  <TooltipContent className="dark:bg-[#1f1f1f] dark:text-white">
                    <p>{tech}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>

        <Link href={`/projects/${slug}`}>
          <h3 className="text-md font-medium text-primary flex gap-x-3 items-center mt-2">
            {t.all_projects.view_project} {locale === "ar" && <FaArrowRight className="rotate-180"/>}
            {locale === "en" && <FaArrowRight />}
          </h3>
        </Link>
      </div>
    </div>
  );
}
