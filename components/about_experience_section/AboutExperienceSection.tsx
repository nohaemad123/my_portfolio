import { ExperienceData } from "@/data/experienceData";
import { BriefcaseBusiness, Code2 } from "lucide-react";
import { CiCalendar } from "react-icons/ci";
import { useLanguage } from "../language-provider";

export default function AboutExperienceSection() {
  const { t, locale } = useLanguage();

  return (
    <div className="bg-white dark:bg-[#151515] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md px-8 py-8 mt-8 overflow-hidden">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold dark:text-white">
          {t.about.experience}
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2">
          {t.about.experience_desc}
        </p>
      </div>

      <div className="relative">
        <div className="absolute start-[30px] top-0 h-full w-[2px] bg-primary/20 hidden md:block" />

        {ExperienceData.map((item, index) => (
          <div
            key={item.id}
            className={`relative grid lg:grid-cols-[60px_220px_1fr_90px] gap-8 items-center py-10 ${
              index !== ExperienceData.length - 1
                ? "border-b border-gray-100 dark:border-[#2a2a2a]"
                : ""
            }`}
          >
            <div className="relative flex justify-center hidden md:block">
              <span className="z-10 flex  h-7 w-7 items-center justify-center rounded-full border-4 border-white dark:border-[#151515] bg-primary shadow-lg">
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              </span>
            </div>

            <div className="w-[200px] rounded-xl bg-primary/10 px-4 py-3">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <CiCalendar size={15} />
                <span>{locale === "en" ? item.period.en : item.period.ar}</span>
              </div>
            </div>

            <div className="md:border-l border-gray-200 dark:border-[#2a2a2a] pl-8">
              <h3 className="text-3xl rtl:text-2xl font-bold dark:text-white">
                {locale === "en" ? item.title.en : item.title.ar}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-primary font-semibold text-lg">
                <BriefcaseBusiness size={18} />
                {item.company}
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8 max-w-3xl">
                {locale === "en" ? item.description.en : item.description.ar}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {item.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-[#222] text-sm text-gray-700 dark:text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <Code2 className="text-primary" size={34} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
