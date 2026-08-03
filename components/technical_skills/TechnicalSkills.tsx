"use client";
import { technicalSkillsData } from "@/data/techicalSkillsData";
import { useLanguage } from "../language-provider";

export default function TechnicalSkills() {
  const { locale, t } = useLanguage();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {technicalSkillsData.map((section) => (
        <div
          key={section.id}
          className="rounded-2xl border border-gray-200 dark:border-[#2a2a2a]bg-whitedark:bg-[#151515] p-6 shadow-md transition-all duration-300 hover:shadow-xl"
        >
          {/* Category */}
          <div className="mb-6 flex items-center gap-3">
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-primary"></span>
              <span className="h-[2px] w-12 bg-primary"></span>
            </div>

            <h3 className="text-md md:text-xl font-bold text-gray-900 dark:text-white">
              {locale === "en" ? section.category.en : section.category.ar}
            </h3>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {section.skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.name}
                  className="group flex items-center gap-3 rounded-xl borderborder-gray-200dark:border-[#2a2a2a] bg-white dark:bg-[#1f1f1f] p-3 transition-all duration-300 hover:border-primary hover:bg-primary/5"
                >
                  <Icon className="text-2xl text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
