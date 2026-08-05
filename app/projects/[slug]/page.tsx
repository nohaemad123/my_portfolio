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
import { FaArrowRight } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { useLanguage } from "@/components/language-provider";
import { useParams } from "next/navigation";
import { useTheme } from "@/hooks/use-theme";
import InterestedSection from "@/components/interested_section/InterestedSection";
import { motion } from "motion/react";

type Props = {
  params: {
    slug: string;
  };
};

export default function page({ params }: Props) {
  const { slug } = useParams<{ slug: string }>();

  const fadeUp = {
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

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const { locale, t } = useLanguage();
  const { theme } = useTheme();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item_variant = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
      },
    },
  };

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

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="dark:bg-[#0b0b0b] bg-slate-50 py-10"
      >
        <div className="container">
          <div className="bg-white dark:bg-[#151515] px-10 py-10 rounded-md shadow-md border dark:border-[#2a2a2a] border-gray-200">
            <div className="grid grid-cols-12  h-full gap-y-10 lg:gap-x-12 items-center">
              <motion.div
                variants={fadeRight}
                className="col-span-12 lg:col-span-5"
              >
                <div className="flex flex-col gap-y-4">
                  <motion.h4
                    variants={fadeUp}
                    className="flex items-center gap-x-3 uppercase tracking-[3px] text-primary font-extrabold"
                  >
                    <span className="w-5 h-5 bg-primary inline-block rounded-full"></span>
                    {locale === "en"
                      ? project?.category.en
                      : project?.category.ar}
                  </motion.h4>
                  <motion.h3
                    variants={fadeUp}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-bold"
                  >
                    {locale === "en" ? project?.name.en : project?.name.ar}
                  </motion.h3>
                  <motion.p
                    variants={fadeUp}
                    transition={{ delay: 0.2 }}
                    className="text-gray-500 dark:text-gray-300 leading-7"
                  >
                    {locale === "en"
                      ? project?.short_description.en
                      : project?.short_description.ar}
                  </motion.p>
                  <motion.div
                    variants={fadeUp}
                    transition={{ delay: 0.3 }}
                    className="flex gap-y-3 w-full md:w-fit flex-wrap  gap-x-5"
                  >
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
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col md:flex-row justify-between items-center mt-4 text-lg font-medium"
                  >
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
                  </motion.div>
                </div>
              </motion.div>

              <div className="col-span-12 lg:col-span-7">
                <div className="group  rounded-2xl border shadow-xl">
                  <div className="relative md:overflow-hidden h-auto md:max-h-[500px]  rounded-2xl">
                    <motion.div variants={fadeLeft}>
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
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="bg-white dark:bg-[#151515] px-5 md:px-10 py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex items-center gap-x-3 font-bold text-xl"
            >
              <div className="icon">
                <LuClipboardList className="text-2xl text-primary" />
              </div>
              {t.project_details.overview}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="text-gray-600 dark:text-gray-300 leading-7"
            >
              {locale === "en"
                ? project.description.en
                : project.description.ar}
            </motion.p>
          </motion.div>
          <div className="grid grid-cols-12  h-full gap-y-10 lg:gap-x-12 ">
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="bg-white dark:bg-[#151515] px-5 md:px-10  py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="flex items-center gap-x-3 font-bold text-xl"
                >
                  <div className="icon">
                    <LuBookOpenText className="text-2xl text-primary" />
                  </div>
                  {t.project_details.personal_information}
                </motion.h3>
                <div className="grid grid-cols-12  h-full gap-y-5 lg:gap-x-5 items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="col-span-12 lg:col-span-6"
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="col-span-12 lg:col-span-6"
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="col-span-12 lg:col-span-6"
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="col-span-12 lg:col-span-6"
                  >
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
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="col-span-12 lg:col-span-12"
                  >
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
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-[#151515]  px-5 md:px-10  py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex items-center gap-x-3 font-bold text-xl"
                >
                  <div className="icon">
                    <FcWorkflow className="text-2xl text-primary" />
                  </div>
                  {t.project_details.technologies_used}
                </motion.h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex gap-x-3 flex-wrap gap-y-5"
                >
                  {project?.technologies?.map((tech) => {
                    const item =
                      technologyIcons[tech as keyof typeof technologyIcons];

                    if (!item) {
                      return <span key={tech}>{tech}</span>;
                    }

                    const Icon = item.icon;

                    return (
                      <motion.span
                        variants={item_variant}
                        whileHover={{
                          y: -4,
                          scale: 1.05,
                        }}
                        key={tech}
                        className="flex items-center gap-2 rounded-xl hover:scale-105 border dark:border-[#2a2a2a] border-gray-200 bg-white dark:bg-[#151515] px-4 py-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                      >
                        <Icon
                          className="text-xl"
                          style={{ color: item.color }}
                        />
                        {tech}
                      </motion.span>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>
          <div className="grid grid-cols-12  h-full gap-y-10 lg:gap-x-8 ">
            <div className="col-span-12 lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-[#151515] px-5 py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex items-center gap-x-3 font-bold text-xl"
                >
                  <div className="icon">
                    <CiStar className="text-2xl text-primary" />
                  </div>
                  {t.project_details.key_features}
                </motion.h3>
                <div className="grid grid-cols-12  h-full gap-y-5 lg:gap-x-5 ">
                  {project?.features?.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={
                          locale === "en" ? feature.title.en : feature.title.ar
                        }
                        className="col-span-12 md:col-span-6 xl:col-span-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                        }}
                        whileHover={{
                          y: -6,
                          scale: 1.02,
                        }}
                      >
                        <div className="h-full rounded-2xl border dark:border-[#2a2a2a] border-gray-200 bg-white dark:bg-[#151515] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
                          <motion.div
                            whileHover={{
                              rotate: 10,
                              scale: 1.15,
                            }}
                            transition={{ duration: 0.25 }}
                            className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
                          >
                            <Icon className="h-6 w-6 text-primary" />
                          </motion.div>

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
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-[#151515]  px-5 md:px-10  py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200"
              >
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="flex items-center gap-x-3 font-bold text-xl"
                >
                  <div className="icon">
                    <LuBrainCircuit className="text-2xl text-primary" />
                  </div>
                  {t.project_details.challenges_solution}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0, x: locale === "ar" ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-md bg-red-400/20 px-5 mb-3 py-4 text-[14px] transition-all duration-300 flex flex-col gap-y-2"
                >
                  <h4 className="text-red-500 text-lg font-extrabold ">
                    {t.project_details.challenges}
                  </h4>

                  <ul className="flex flex-col gap-y-2 list-disc ps-5 marker:text-red-500">
                    {project?.challenges?.map((Challenge, index) => {
                      return (
                        <motion.li
                          initial={{
                            opacity: 0,
                            x: locale === "ar" ? 15 : -15,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.08,
                            duration: 0.35,
                          }}
                          key={locale === "en" ? Challenge.en : Challenge.ar}
                        >
                          {locale === "en" ? Challenge.en : Challenge.ar}
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: locale === "ar" ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-md bg-green-400/20 px-5 mb-3 py-4 text-[14px] transition-all duration-300"
                >
                  <h4 className="text-green-600 text-lg font-extrabold ">
                    {t.project_details.solutions}
                  </h4>
                  <ul className="flex flex-col gap-y-2 list-disc ps-5 marker:text-green-600">
                    {project?.solutions?.map((solution, index) => {
                      return (
                        <motion.li
                          initial={{
                            opacity: 0,
                            x: locale === "ar" ? 15 : -15,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            delay: index * 0.08,
                            duration: 0.35,
                          }}
                          key={locale === "en" ? solution.en : solution.ar}
                        >
                          {locale === "en" ? solution.en : solution.ar}
                        </motion.li>
                      );
                    })}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#151515] px-5 md:px-10  py-8 rounded-md shadow-md mt-10 flex flex-col gap-y-3 border dark:border-[#2a2a2a] border-gray-200"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex items-center gap-x-3 font-bold text-xl"
            >
              <div className="icon">
                <FaGraduationCap className="text-2xl text-primary" />
              </div>
              {t.project_details.what_learned}
            </motion.h3>
            <div className="grid grid-cols-12 justify-between h-full gap-y-8 lg:gap-x-5 px-5">
              {project?.learned?.map((item, index) => {
                const Icon = item.icon;

                const isLastInRow = (index + 1) % 4 === 0;
                const isLastItem = index === project?.learned?.length - 1;

                return (
                  <motion.div
                    key={locale === "en" ? item.title.en : item.title.ar}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.03,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.35,
                    }}
                    className="relative col-span-12 md:col-span-6 xl:col-span-3"
                  >
                    <div className="flex items-center gap-3 pr-5">
                      <motion.div
                        whileHover={{
                          rotate: 12,
                          scale: 1.12,
                        }}
                        transition={{ duration: 0.25 }}
                        className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-primary/10"
                      >
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>

                      <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">
                        {locale === "en" ? item.title.en : item.title.ar}
                      </p>
                    </div>

                    {!isLastInRow && !isLastItem && (
                      <div className="absolute end-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-gray-200 xl:block" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <InterestedSection />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#151515]  px-10 py-8 rounded-md shadow-md mt-10 flex flex-col md:flex-row gap-y-3 justify-between items-center border dark:border-[#2a2a2a] border-gray-200"
          >
            {previousProject ? (
              <motion.div
                initial={{ opacity: 0, x: locale === "ar" ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ x: locale === "ar" ? 5 : -5, scale: 1.03 }}
                className=""
              >
                <Link href={`/projects/${previousProject.slug}`}>
                  <p className="text-md flex items-center gap-x-3 text-gray-500 dark:text-gray-300 font-extrabold">
                    {locale === "ar" && <FaArrowLeft className="rotate-180" />}
                    {locale === "en" && <FaArrowLeft />}{" "}
                    {t.project_details.previous_project}
                  </p>
                </Link>
              </motion.div>
            ) : (
              <div />
            )}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.08 }}
            >
              <Link href={`/all_projects`}>
                <p className="text-md items-center text-gray-500 dark:text-gray-300 font-extrabold flex gap-x-3">
                  {t.all_projects.title}
                  <BsGrid3X3GapFill />
                </p>
              </Link>
            </motion.div>
            {nextProject ? (
              <motion.div
                initial={{ opacity: 0, x: locale === "ar" ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ x: locale === "ar" ? -5 : 5, scale: 1.03 }}
                className=""
              >
                <Link href={`/projects/${nextProject.slug}`}>
                  <p className="text-md text-gray-500 flex items-center gap-x-3 dark:text-gray-300 font-extrabold">
                    {t.project_details.next_project}{" "}
                    {locale === "ar" && <FaArrowRight className="rotate-180" />}
                    {locale === "en" && <FaArrowRight />}
                  </p>
                </Link>
              </motion.div>
            ) : (
              <div />
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
