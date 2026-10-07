"use client";
import Image from "next/image";
import { FaCircleDot } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import StatisiticsSection from "../statistics_section/StatisiticsSection";
import Background from "../background/Background";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

export default function AboutHeroSection() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  const { t, locale } = useLanguage();
  return (
    <section className="relative bg-[#F8FAFF] dark:bg-[#0b0b0b] pt-30 pb-6">
      <Background />
      <div className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-12 gap-y-10 items-center md:gap-10"
        >
          <motion.div variants={fadeLeft} className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-3 mb-3">
              <FaCircleDot className="text-primary" />
              <span className="text-primary uppercase tracking-[4px] font-extrabold text-md">
                {t.navbar.about}
              </span>
            </div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-5xl leading-[1.5] font-extrabold  mb-6"
            >
              {t.about.title}
              <br />
              <span className="text-primary ms-2">{t.about.impact}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-lg mb-8"
            >
              {t.hero_section.description}
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/noha emad Front end developer.pdf";
                  link.download = "noha emad Front end developer.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="group bg-primary text-white border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 px-8 py-4 rounded-lg flex items-center gap-3 font-semibold cursor-pointer"
              >
                <IoMdDownload className="transition-transform duration-300 group-hover:translate-y-[1px]" />
                {t.hero_section.download_cv}
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="group border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-6 py-3 rounded-lg flex items-center gap-3 font-semibold cursor-pointer"
              >
                {t.navbar.lets_talk}
                {locale === "ar" && (
                  <FaArrowRight className="rotate-180 transition-transform duration-300 group-hover:translate-y-[1px]" />
                )}
                {locale === "en" && (
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-y-[1px]" />
                )}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            className="col-span-12 lg:col-span-5 flex justify-center"
          >
            <div className="relative w-fit">
              <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-primary/20 blur-[70px] hidden md:block" />

              <div className="absolute left-1/2 top-1/2 -z-10 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[70px]" />
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/ad2a886b-5f94-4c70-9f64-5a5b54ca64b2.png"
                  alt="Front-End Developer Illustration"
                  width={650}
                  height={650}
                  priority
                  className="relative w-full md:w-[88%] object-contain  "
                />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                }}
                transition={{
                  delay: 0.5,
                }}
                className="absolute bottom-0 right-0 w-32 h-32 rounded-md bg-white dark:bg-[#151515] flex justify-center items-center text-center shadow-md border border-gray-200 dark:border-[#2a2a2a]"
              >
                <h3 className="font-bold flex flex-col text-lg text-gray-900 dark:text-white">
                  <span className="text-primary text-5xl">+5</span>
                  {t.about.years_experience}
                </h3>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <StatisiticsSection />
        </motion.div>
      </div>
    </section>
  );
}
