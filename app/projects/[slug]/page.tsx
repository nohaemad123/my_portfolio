"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { ProjectsData } from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaArrowLeft, FaGithub } from "react-icons/fa";
import { frameworkConfig } from "@/data/frameworks";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { cn } from "@/lib/utils";
import { LuClipboardList } from "react-icons/lu";
import { LuBookOpenText } from "react-icons/lu";
import { FcWorkflow } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { LuAlarmClock } from "react-icons/lu";
import { BriefcaseBusiness } from "lucide-react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { technologyIcons } from "@/data/technologies";
import { CiStar } from "react-icons/ci";
import { LuBrainCircuit } from "react-icons/lu";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useLanguage } from "@/components/language-provider";
import { useParams } from "next/navigation";
import { useTheme } from "@/hooks/use-theme";
import InterestedSection from "@/components/interested_section/InterestedSection";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  const { slug } = useParams<{ slug: string }>();

  const { locale, t } = useLanguage();
  const { theme } = useTheme();

  const project = ProjectsData.find((item) => item.slug === slug);

  if (!project) {
    return <p>Not found</p>;
  }

  const framework = frameworkConfig[project.framework];
  const FrameworkIcon = framework.icon;

  const currentIndex = ProjectsData.findIndex((item) => item.slug === slug);

  const currentProject = ProjectsData[currentIndex];
  const previousProject =
    currentIndex > 0 ? ProjectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < ProjectsData.length - 1
      ? ProjectsData[currentIndex + 1]
      : null;

  const statusStyles = {
    Completed: {
      bg: "bg-green-400/20",
      text: "text-green-600",
      hover: "hover:bg-green-500 hover:text-white",
    },
    "In Progress": {
      bg: "bg-blue-400/20",
      text: "text-blue-600",
      hover: "hover:bg-blue-600 hover:text-white",
    },
  } as const;

  const statusKey = project.info.status.en;
  const currentStatus = statusStyles[statusKey as keyof typeof statusStyles];

  return (
    <div>
      <Breadcrumb
        title={locale === "en" ? project?.name.en : project?.name.ar}
      />

      <div className="dark:bg-[#0b0b0b] bg-slate-50 py-10">
        <div className="container">
          <div className="bg-white dark:bg-[#151515] px-10 py-10 rounded-md shadow-md border dark:border-[#2a2a2a] border-gray-200">
            <div className="grid grid-cols-12  h-full gap-y-10 lg:gap-x-12 items-center">
              {/* Left Side */}
              <div className="col-span-12 lg:col-span-5">
                <div className="flex flex-col gap-y-4">
                  <h4 className="flex items-center gap-x-3 uppercase tracking-[3px] text-primary font-extrabold">
                    <span className="w-5 h-5 bg-primary inline-block rounded-full"></span>
                    {locale === "en"
                      ? project?.category.en
                      : project?.category.ar}
                  </h4>
                  <h3 className="text-4xl font-bold">
                    {locale === "en" ? project?.name.en : project?.name.ar}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 leading-7">
                    {locale === "en"
                      ? project?.short_description.en
                      : project?.short_description.ar}
                  </p>
                  <div className="flex gap-y-3 w-full md:w-fit flex-wrap  gap-x-5">
                    {project.links?.demo && (
                      <Link
                        href={project.links?.demo}
                        target="_blank"
                        className=" flex gap-x-3 w-full md:w-fit items-center border border-transparent rounded-md bg-primary px-8 py-4 text-md font-medium text-white transition hover:scale-105 hover:border hover:border-primary hover:bg-white dark:bg-[#151515] hover:text-primary duration-500"
                      >
                        {t.all_projects.live_demo} <FaArrowUpRightFromSquare />
                      </Link>
                    )}

                    {project.links?.github && (
                      <Link
                        href={project.links?.github}
                        target="_blank"
                        className="flex gap-x-3 w-full md:w-fit items-center rounded-md border border-gray-500 px-8 py-4 text-md font-mediumtext-black transition  hover:border hover:border-transparent hover:text-white hover:bg-primary  duration-500 hover:scale-105"
                      >
                        {t.all_projects.view_github} <FaGithub />
                      </Link>
                    )}
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center mt-4 text-lg font-medium">
                    <div className="flex items-center gap-2">
                      {FrameworkIcon && (
                        <>
                          <FrameworkIcon
                            size={28}
                            color={
                              theme === "dark"
                                ? framework.darkColor
                                : framework.lightColor
                            }
                          />

                          {project.framework}
                        </>
                      )}
                    </div>
                    <span className="w-2 h-2 bg-gray-400 inline-block rounded-full"></span>
                    <div className="flex items-center gap-2">
                      <CiCalendar className="text-2xl text-primary" />

                      <span>
                        {locale === "en"
                          ? project?.info?.duration.en
                          : project?.info?.duration.ar}
                      </span>
                    </div>
                    <span className="w-2 h-2 bg-gray-400 inline-block rounded-full"></span>
                    <div className="flex items-center gap-2">
                      <CiUser className="text-2xl text-primary" />

                      <span>
                        {locale === "en"
                          ? project?.info?.client.en
                          : project?.info?.client.ar}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <div className="group  rounded-2xl border shadow-xl">
                  <div className="relative md:overflow-hidden h-auto md:max-h-[500px]  rounded-2xl">
                    <Image
                      src={project?.image}
                      alt={
                        locale === "en" ? project?.name.en : project?.name.ar
                      }
                      width={1600}
                      height={6000}
                      className={cn(
                        "w-full object-cover object-top transition-transform duration-[9000ms] ease-linear",
                        project.scrollImage &&
                          "group-hover:-translate-y-[calc(100%-650px)]",
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#151515] px-5 md:px-10 py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200">
            <h3 className="flex items-center gap-x-3 font-bold text-xl">
              <div className="icon">
                <LuClipboardList className="text-2xl text-primary" />
              </div>
              {t.project_details.overview}
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              {locale === "en"
                ? project.description.en
                : project.description.ar}
            </p>
          </div>
          <div className="grid grid-cols-12  h-full gap-y-10 lg:gap-x-12 ">
            <div className="col-span-12 lg:col-span-6">
              <div className="bg-white dark:bg-[#151515] px-5 md:px-10  py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200">
                <h3 className="flex items-center gap-x-3 font-bold text-xl">
                  <div className="icon">
                    <LuBookOpenText className="text-2xl text-primary" />
                  </div>
                  {t.project_details.personal_information}
                </h3>
                <div className="grid grid-cols-12  h-full gap-y-5 lg:gap-x-5 items-center">
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex gap-x-3 items-center">
                      <FaUser className="text-2xl text-primary" />
                      <div className="flex flex-col">
                        <h3 className="text-lg font-medium">
                          {t.project_details.role}
                        </h3>
                        <p className="text-md font-bold">
                          {locale === "en"
                            ? project.info?.role.en
                            : project.info?.role.ar}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex gap-x-3 items-center">
                      <LuAlarmClock className="text-2xl text-primary" />
                      <div className="flex flex-col">
                        <h3 className="text-lg font-medium">
                          {t.project_details.duration}
                        </h3>
                        <p className="text-md font-bold">
                          {locale === "en"
                            ? project.info?.duration.en
                            : project.info?.duration.ar}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex gap-x-3 items-center">
                      <BriefcaseBusiness className="text-2xl text-primary" />
                      <div className="flex flex-col">
                        <h3 className="text-lg font-medium">
                          {t.project_details.project_type}
                        </h3>
                        <p className="text-md font-bold">
                          {locale === "en"
                            ? project.info?.client.en
                            : project.info?.client.ar}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <div className="flex  items-center justify-between">
                      <div className="flex gap-x-3 items-center">
                        <IoShieldCheckmarkOutline className="text-2xl text-primary" />
                        <h3 className="text-lg font-medium">
                          {t.project_details.project_status}
                        </h3>
                      </div>
                      <p
                        className={cn(
                          "rounded-full px-3 py-1 text-xs font-bold transition-all duration-300",
                          currentStatus.bg,
                          currentStatus.text,
                          currentStatus.hover,
                        )}
                      >
                        {project.info.status[locale]}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-12">
                    <div className="flex gap-x-3 items-center">
                      <CiCalendar className="text-2xl text-primary" />
                      <div className="flex flex-col">
                        <h3 className="text-lg font-medium">
                          {t.project_details.date}
                        </h3>
                        <p className="text-md font-bold">
                          {locale === "en"
                            ? project.full_date.en
                            : project.full_date.ar}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="bg-white dark:bg-[#151515]  px-5 md:px-10  py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200">
                <h3 className="flex items-center gap-x-3 font-bold text-xl">
                  <div className="icon">
                    <FcWorkflow className="text-2xl text-primary" />
                  </div>
                  {t.project_details.technologies_used}
                </h3>
                <div className="flex gap-x-3 flex-wrap gap-y-5">
                  {project?.technologies?.map((tech) => {
                    const item =
                      technologyIcons[tech as keyof typeof technologyIcons];

                    if (!item) {
                      return <span key={tech}>{tech}</span>;
                    }

                    const Icon = item.icon;

                    return (
                      <span
                        key={tech}
                        className="flex items-center gap-2 rounded-xl hover:scale-105 border dark:border-[#2a2a2a] border-gray-200 bg-white dark:bg-[#151515] px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                      >
                        <Icon
                          className="text-xl"
                          style={{ color: item.color }}
                        />
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12  h-full gap-y-10 lg:gap-x-8 ">
            <div className="col-span-12 lg:col-span-7">
              <div className="bg-white dark:bg-[#151515] px-5 py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200">
                <h3 className="flex items-center gap-x-3 font-bold text-xl">
                  <div className="icon">
                    <CiStar className="text-2xl text-primary" />
                  </div>
                  {t.project_details.key_features}
                </h3>
                <div className="grid grid-cols-12  h-full gap-y-5 lg:gap-x-5 ">
                  {project?.features?.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <div
                        key={
                          locale === "en" ? feature.title.en : feature.title.ar
                        }
                        className="col-span-12 md:col-span-6 xl:col-span-4"
                      >
                        <div className="h-full rounded-2xl border dark:border-[#2a2a2a] border-gray-200 bg-white dark:bg-[#151515] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>

                          <h3 className="mb-1 text-base font-semibold">
                            {locale === "en"
                              ? feature.title.en
                              : feature.title.ar}
                          </h3>

                          <p className=" text-gray-500 dark:text-gray-300 text-sm leading-6">
                            {locale === "en"
                              ? feature.description.en
                              : feature.description.ar}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="bg-white dark:bg-[#151515]  px-5 md:px-10  py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200">
                <h3 className="flex items-center gap-x-3 font-bold text-xl">
                  <div className="icon">
                    <LuBrainCircuit className="text-2xl text-primary" />
                  </div>
                  {t.project_details.challenges_solution}
                </h3>

                <div
                  className="rounded-md bg-red-400/20 px-5 mb-3 py-4 text-[14px] transition-all duration-300 flex flex-col gap-y-2">
                  <h4 className="text-red-500 text-lg font-extrabold ">
                    {t.project_details.challenges}
                  </h4>

                  <ul className="flex flex-col gap-y-2 list-disc ps-5 marker:text-red-500">
                    {project?.challenges?.map((Challenge) => {
                      return <li key={locale==="en"?Challenge.en:Challenge.ar}>{locale==="en"?Challenge.en:Challenge.ar}</li>;
                    })}
                  </ul>
                </div>
                <div
                  className="rounded-md bg-green-400/20 px-5 mb-3 py-4 text-[14px] transition-all duration-300"
                >
                  <h4 className="text-green-600 text-lg font-extrabold ">
                    {t.project_details.solutions}
                  </h4>
                  <ul className="flex flex-col gap-y-2 list-disc ps-5 marker:text-green-600">
                    {project?.solutions?.map((solution) => {
                      return <li key={locale==="en"?solution.en:solution.ar}>{locale==="en"?solution.en:solution.ar}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-[#151515] px-5 md:px-10  py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200">
            <h3 className="flex items-center gap-x-3 font-bold text-xl">
              <div className="icon">
                <FaGraduationCap className="text-2xl text-primary" />
              </div>
             {t.project_details.what_learned}
            </h3>
            <div className="grid grid-cols-12 justify-between h-full gap-y-8 lg:gap-x-5 px-5">
              {project?.learned?.map((item, index) => {
                const Icon = item.icon;

                const isLastInRow = (index + 1) % 4 === 0;
                const isLastItem = index === project?.learned?.length - 1;

                return (
                  <div
                    key={locale==="en"?item.title.en:item.title.ar}
                    className="relative col-span-12 md:col-span-6 xl:col-span-3"
                  >
                    <div className="flex items-center gap-3 pr-5">
                      <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                        {locale==="en"?item.title.en:item.title.ar}
                      </p>
                    </div>

                    {!isLastInRow && !isLastItem && (
                      <div className="absolute right-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-gray-200 xl:block" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        
        <InterestedSection/>
          <div className="bg-white dark:bg-[#151515]  px-10 py-8 rounded-md shadow-md mt-10 flex flex-col md:flex-row gap-y-3 justify-between items-center border dark:border-[#2a2a2a] border-gray-200">
            {previousProject ? (
              <div className="">
                <Link href={`/projects/${previousProject.slug}`}>
                  <p className="text-md flex items-center gap-x-3 text-gray-500 dark:text-gray-300 font-extrabold">
                   {locale === "ar" && <FaArrowLeft className="rotate-180" />}
        {locale === "en" && <FaArrowLeft />} {t.project_details.previous_project}
                  </p>
                </Link>
              </div>
            ) : (
              <div />
            )}

            <div>
              <Link href={`/all_projects`}>
                <p className="text-md items-center text-gray-500 dark:text-gray-300 font-extrabold flex gap-x-3">
                  {t.all_projects.title}
                  <BsGrid3X3GapFill />
                </p>
              </Link>
            </div>
            {nextProject ? (
              <div className="">
                <Link href={`/projects/${nextProject.slug}`}>
                  <p className="text-md text-gray-500 flex items-center gap-x-3 dark:text-gray-300 font-extrabold">
                   {t.project_details.next_project} {locale === "ar" && <FaArrowRight className="rotate-180" />}
        {locale === "en" && <FaArrowRight />} 
                  </p>
                </Link>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
