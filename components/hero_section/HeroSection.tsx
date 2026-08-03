"use client";

import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { MdWavingHand } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import Link from "next/link";
import { FaArrowRight, FaCode } from "react-icons/fa";
import { BriefcaseIcon, Star } from "lucide-react";
import { ProjectsData } from "@/data/projectsData";
import { IoMdDownload } from "react-icons/io";
import { useLanguage } from "../language-provider";
import StatisticsSection from "../statistics_section/StatisiticsSection";

export default function HeroSection() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <section className="relative bg-[#F8FAFF] dark:bg-[#0a0a0a] h-auto md:h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FAFF] to-[#EEF3FF] dark:from-[#0a0a0a] dark:via-[#111827] dark:to-[#0f172a] " />
      <div className="absolute  top-0 h-[250px] w-[250px] rounded-full bg-primary/20 blur-[150px] hidden md:block" />

      <div className="absolute -start-20 bottom-0 h-[250px] w-[250px] rounded-full bg-primary/10 blur-[100px] hidden md:block" />
      <div className="absolute end-20 top-24 h-44 w-44 rounded-full border border-primary/15 hidden md:block" />

      <div className="absolute start-12 bottom-20 h-24 w-24 rounded-full border border-primary/15 hidden md:block" />

      <div className="absolute end-28 top-28 grid grid-cols-6 gap-3 opacity-25 hidden md:block">
        {Array.from({ length: 36 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
        ))}
      </div>

      <div className="absolute start-16 bottom-24 grid grid-cols-5 gap-3 opacity-20 hidden md:block">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
        ))}
      </div>

      {/* Small Circles */}
      <div className="absolute top-40 start-[48%] h-3 w-3 rounded-full bg-primary/60 hidden md:block" />
      <div className="absolute top-72 end-[32%] h-4 w-4 rounded-full border border-primary hidden md:block" />
      <div className="absolute bottom-32 end-40 h-2 w-2 rounded-full bg-primary hidden md:block" />

      {/* Ring */}
      <div className="absolute bottom-44 start-[42%] h-8 w-8 rounded-full border-2 border-primary/20 hidden md:block" />

      {/* Decorative Line */}
      <svg
        className="absolute start-[48%] top-32 opacity-20 hidden md:block"
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
      >
        <path
          d="M20 20 C120 10,120 170,170 160"
          stroke="#6C63FF"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>

      {/* Arrow */}
      <svg
        className="absolute end-[38%] top-48 opacity-30 hidden md:block"
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
      >
        <path d="M15 55L55 15" stroke="#6C63FF" strokeWidth="2" />
        <path d="M38 15H55V32" stroke="#6C63FF" strokeWidth="2" />
      </svg>

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] hidden md:block [background-image:radial-gradient(#000_1px,transparent_1px)] dark:[background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* المحتوى */}
      <div className="container relative z-10 h-full pt-28">
        <div className="grid grid-cols-12 h-auto md:h-[calc(100%-120px)] items-center md:gap-10">
          <div className="col-span-12 lg:col-span-6">
            {/* <p>Hero Content</p> */}
            <div className="flex flex-col gap-y-4">
              <span className="bg-gray-400/20 dark:bg-white/10 py-2 px-3 rounded-sm flex gap-x-2 w-fit items-center text-primary font-bold text-md">
                <MdWavingHand className="text-yellow-500" />{" "}
                {t.hero_section.badge}
              </span>
              <h3 className="text-[60px] font-extrabold leading-[1.5] text-black dark:text-white">
                {t.hero_section.title}
                <span className="text-primary inline-block mx-2">
                  {t.hero_section.span}
                </span>
              </h3>
              <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-lg">
                {t.hero_section.description}
              </p>
              <div className="flex flex-col md:flex-row gap-y-5  md:gap-x-5 md:gap-y-0 *:font-bold">
                <button className="group bg-primary text-white border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 px-8 py-4 rounded-lg flex items-center gap-3 font-semibold cursor-pointer">
                  <IoMdDownload className="transition-transform duration-300 group-hover:translate-y-[1px]" />
                  {t.hero_section.download_cv}
                </button>
                <button className="group border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 rounded-lg flex items-center gap-3 font-semibold cursor-pointer">
                  {t.navbar.lets_talk}
                  <IoIosSend className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <Link
                  href="/all-projects"
                  className="group text-primary   flex items-center gap-3 font-semibold cursor-pointer"
                >
                  {t.hero_section.view_projects}
                  {locale === "ar" && (
                    <FaArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
                  )}
                  {locale === "en" && (
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </Link>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="col-span-12 lg:col-span-6 relative flex items-center justify-center">
            <div className="absolute w-[650px] h-[650px] rounded-full bg-primary/15 blur-[120px] hidden md:block" />

            <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[470px] md:h-[470px] hidden md:block rounded-full bg-gradient-to-br from-primary/8 to-primary/15" />

            <div className="absolute w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[470px] md:h-[470px] rounded-full border hidden md:block border-primary/10" />

            <Image
              src="/5ddcf2ca-9995-4455-9953-c19ef89a2423.png"
              alt=""
              width={520}
              height={520}
              className="relative z-20 m-auto w-[300px] sm:w-[360px] md:w-[470px] lg:w-[520px] h-auto object-contain"
            />
            <div className="absolute start-8 top-2 z-30 hidden md:block">
              <div className="flex flex-col gap-y-2 bg-white dark:bg-[#111827]  px-4 py-4 rounded-md shadow-md ">
                <div className="icon w-10 h-10">
                  <BriefcaseIcon className="text-lg text-primary" />
                </div>
                <h4 className="text-xl font-bold leading-tight text-black dark:text-white">
                  +5
                </h4>
                <p className=" text-lg font-bold text-black dark:text-white">
                  {t.stats_section.years} <br /> {t.stats_section.experience}
                </p>
              </div>
            </div>

            <div className="absolute end-5 top-5 z-30 hidden md:block">
              <div className="flex flex-col gap-y-2 bg-white px-4 dark:bg-[#111827]  py-4 rounded-md shadow-md ">
                <div className="icon w-10 h-10">
                  <FaCode className="text-lg text-primary" />
                </div>
                <h4 className="text-xl font-bold leading-tight text-black dark:text-white">
                  +{ProjectsData.length}
                </h4>
                <p className=" text-lg font-bold text-black dark:text-white">
                  {t.stats_section.projects} <br /> {t.stats_section.created}
                </p>
              </div>
            </div>

            <div className="absolute end-20 bottom-[-40px] z-30 hidden md:block">
              <div className="flex flex-col gap-y-2 bg-white px-4 py-4 dark:bg-[#111827]  rounded-md shadow-md ">
                <div className="icon w-10 h-10">
                  <Star className="text-lg text-primary" />
                </div>
                <h4 className="text-xl font-bold leading-tight text-black dark:text-white">
                  100%
                </h4>
                <p className=" text-lg font-bold text-black dark:text-white">
                  {locale === "ar" && (
                    <>
                      {t.stats_section.satistication} <br />{" "}
                      {t.stats_section.client}{" "}
                    </>
                  )}

                  {locale === "en" && (
                    <>
                      {t.stats_section.client} <br />{" "}
                      {t.stats_section.satistication}{" "}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <StatisticsSection />
        </div>
      </div>
    </section>
  );
}
