"use client"
import AboutExperienceSection from "@/components/about_experience_section/AboutExperienceSection";
import AboutHeroSection from "@/components/about_hero_section/AboutHeroSection";
import { useLanguage } from "@/components/language-provider";
import { servicesData } from "@/data/servicesData";
import { technologyIcons } from "@/data/technologies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Page() {
    const { t, locale } = useLanguage();
  
  return (
    <>
      <AboutHeroSection />
      <div className="bg-slate-50 dark:bg-[#0b0b0b] py-10">
        <div className="container">
          <div className="grid grid-cols-12 gap-8 mt-10">
            <div className="col-span-12 lg:col-span-5 flex">
              <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-8 flex flex-col">
                <h3 className="text-3xl font-extrabold mb-6 text-gray-900 dark:text-white">
                  {t.about.my_story}
                </h3>

                <p className="text-gray-500 dark:text-gray-300 leading-8 mb-5">
                 {t.about.description_1}
                </p>

                <p className="text-gray-500 dark:text-gray-300 leading-8 mb-5">
                                 {t.about.description_2}

                </p>

                <p className="text-gray-500 dark:text-gray-300 leading-8">
                                 {t.about.description_3}

                </p>

                <h3 className="font-signature text-4xl text-primary mt-auto pt-6">
                  Noha Emad
                </h3>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-8 flex flex-col">
                <h3 className="text-3xl font-extrabold mb-6 dark:text-white">
                  {t.about.technologies}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                  {Object.keys(technologyIcons).map((tech) => {
                    const item =
                      technologyIcons[tech as keyof typeof technologyIcons];

                    const Icon = item.icon;

                    return (
                      <div key={tech}
                        className="flex flex-col items-center justify-center rounded-xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] h-24 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                        <Icon size={28} style={{ color: item.color }} />

                        <span className="text-sm font-semibold mt-2 dark:text-gray-200">
                          {tech}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <AboutExperienceSection />
          <div className="bg-white dark:bg-[#151515] mt-8 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-8">
            <div className="mb-8">
              <h2 className="text-4xl font-extrabold dark:text-white">
                {t.about.what_do}
              </h2>

              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {t.about.what_do_desc}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicesData.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.id}
                    className="group rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
                    <div className="mb-5 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                        <Icon className="text-3xl text-primary" />
                      </div>
                    </div>

                    <h3 className=" mb-3 rtl:text-lg text-center text-xl font-bold dark:text-white transition-colors duration-300 group-hover:text-primary">
                      {locale==="en"?service.title.en:service.title.ar}
                    </h3>

                    <p className="text-center text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {locale==="en"?service.description.en:service.description.ar}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
