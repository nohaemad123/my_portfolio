import { personalSkillsData } from "@/data/PeaonalSkillsData";
import { useLanguage } from "../language-provider";

export default function PersonalSkills() {
  const { locale} = useLanguage();

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {personalSkillsData.map((section) => {
        const Icon = section.icon;

        return (
          <div
            key={section.id}
            className="group flex items-center gap-4 rounded-xl borderborder-gray-200 dark:border-[#2a2a2a]bg-white dark:bg-[#151515] p-5 shadow-md transition-all duration-300 hover:border-primary hover:shadow-xl"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary text-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-primary group-hover:text-white">
              <Icon className="text-2xl" />
            </div>

            <div>
              <h4 className="mb-2 text-lg font-boldtext-gray-900 dark:text-white transition-colors duration-300 group-hover:text-primary">
                {locale === "en" ? section.title.en : section.title.ar}
              </h4>

              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                {locale === "en"
                  ? section.description.en
                  : section.description.ar}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
