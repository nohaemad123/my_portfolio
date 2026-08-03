import { useLanguage } from "@/components/language-provider";
import { experienceType } from "@/types/experienceType";
import { BsSuitcaseLg } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

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
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
            <BsSuitcaseLg className="text-lg" />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-lg font-bold leading-tight text-gray-900 dark:text-white">
              {locale === "en"
                ? experienceDetails.title.en
                : experienceDetails.title.ar}
            </h4>

            <p className="mt-1 font-semibold text-primary">
              {experienceDetails.company}
            </p>

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

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experienceDetails.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
          {locale === "en"
            ? experienceDetails.description.en
            : experienceDetails.description.ar}
        </p>
      </div>
    </div>
  );
}
