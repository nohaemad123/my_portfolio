"use client";
import Link from "next/link";
import { LuMailOpen } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { HiArrowDownTray } from "react-icons/hi2";
import { FileText, Download } from "lucide-react";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

export default function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer className="relative overflow-hidden bg-[#0B1220] text-white">
      <div className="container">
        <svg
          className="absolute top-0 left-0 w-full"
          viewBox="0 0 1440 340"
          preserveAspectRatio="none"
        >
          <defs>
            {" "}
            <linearGradient
              id="footer-wave"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="rgba(255,255,255,.08)" />
              <stop offset="100%" stopColor="rgba(255,255,255,.02)" />
            </linearGradient>
          </defs>

          <path
            fill="url(#footer-wave)"
            d="M0,170 C180,300 430,40 720,140 C980,230 1180,60 1440,150 L1440,0 L0,0 Z"
          />
        </svg>
        <div className="hidden md:block">
          <div className="absolute right-12 top-10 h-[260px] w-[260px] rounded-full border border-white/5 hidden md:block" />

          <div className="absolute -left-24 w-[340px] rounded-full border border-white/5 hidden md:block" />

          <div className="absolute left-1/2 -translate-x-1/2 -top-56 w-[800px] rounded-fullbg-primary/15 blur-[180px] hidden md:block" />

          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,.25))]" />
        <div className="relative z-10  pb-10">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <section className="py-8 text-center flex flex-col gap-y-3 items-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">
                {t.footer.title}
              </h3>
              <p className="font-medium text-gray-300 text-md">
                {t.footer.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-4"
              >
                <Link
                  href="/contact"
                  className="bg-primary  text-white border text-lg font-bold border-primary hover:bg-transparent hover:text-primary transition-all duration-300 px-6 py-3 rounded-lg flex items-center shadow-lg gap-3 cursor-pointer"
                >
                  <LuMailOpen /> {t.footer.get_touch}
                  {locale === "ar" && (
                    <FaArrowRight className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
                  )}
                  {locale === "en" && (
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  )}
                </Link>
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/noha emad Front end developer.pdf";
                    link.download = "noha emad Front end developer.pdf";
                    link.click();
                  }}
                  className="bg-transparent text-white border text-lg font-bold border-gray-300 hover:bg-transparent hover:text-primary transition-all duration-300 px-6 py-3 rounded-lg flex items-center shadow-lg gap-3 cursor-pointer"
                >
                  <FileText size={16} />
                  {t.hero_section.download_cv}
                  <HiArrowDownTray />
                </button>
              </motion.div>
            </section>
          </motion.section>

          <section className=" py-6 px-8 rounded-3xl bg-gradient-to-br from-[#101A33] via-[#0E162C] to-[#0A1326] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.35)] backdrop-blur-xl">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.18,
                  },
                },
              }}
              className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                className="flex flex-col gap-y-4 "
              >
                <h3 className="text-lg font-bold uppercase tracking-[1px] text-primary/90">
                  {t.footer.contact}
                </h3>
                <p className="flex gap-x-3 items-center text-lg text-gray-200">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#223867] via-[#18284A] to-[#111D36] border border-white/5">
                    <CiMail className="text-2xl text-white" />
                  </span>
                  noha2697@gmail.com
                </p>
                <p className="flex gap-x-3 items-center text-lg text-gray-200">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#223867] via-[#18284A] to-[#111D36] border border-white/5">
                    <FaWhatsapp className="text-2xl text-white" />
                  </span>
                  01119577144
                </p>
                <p className="flex gap-x-3 items-center text-lg text-gray-200">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#223867] via-[#18284A] to-[#111D36] border border-white/5">
                    <CiPhone className="text-2xl text-white" />
                  </span>
                  01005839637
                </p>
                <p className="flex gap-x-3 items-center text-lg text-gray-200">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#223867] via-[#18284A] to-[#111D36] border border-white/5">
                    <GrLocation className="text-2xl text-white" />
                  </span>
                  {t.footer.address}
                </p>
              </motion.div>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                className="flex flex-col gap-y-4 "
              >
                <h3 className="text-lg font-bold uppercase tracking-[1px] text-primary/90">
                  {t.footer.quick_links}
                </h3>
                <ul className="gap-y-3 flex flex-col">
                  <li>
                    <Link href="/" className="transition hover:text-primary">
                      {t.navbar.home}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="transition hover:text-primary"
                    >
                      {t.navbar.about}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#skills"
                      className="transition hover:text-primary"
                    >
                      {t.navbar.skills}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#experience"
                      className="transition hover:text-primary"
                    >
                      {t.navbar.experience}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#projects"
                      className="transition hover:text-primary"
                    >
                      {t.navbar.projects}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#education"
                      className="transition hover:text-primary"
                    >
                      {t.education.education}
                    </Link>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 35,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
                className="flex flex-col gap-y-4 "
              >
                <h3 className="text-lg font-bold uppercase tracking-[1px] text-primary/90">
                  {t.footer.follow_me}
                </h3>
                <p className="flex gap-x-3 items-center text-lg text-gray-200">
                  <motion.span
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#223867] via-[#18284A] to-[#111D36] border border-white/5"
                  >
                    <FaGithub className="text-xl text-white" />
                  </motion.span>
                  <a href="">Github</a>
                </p>
                <p className="flex gap-x-3 items-center text-lg text-gray-200">
                  <motion.span
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#223867] via-[#18284A] to-[#111D36] border border-white/5"
                  >
                    <FaLinkedinIn className="text-xl text-white" />
                  </motion.span>
                  <a href="">Linkedin</a>
                </p>
                <p className="flex gap-x-3 items-center text-lg text-gray-200">
                  <motion.span
                    whileHover={{
                      scale: 1.15,
                      rotate: 8,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-br from-[#223867] via-[#18284A] to-[#111D36] border border-white/5"
                  >
                    <FaFacebookF className="text-xl text-white" />
                  </motion.span>
                  Facebook
                </p>
              </motion.div>
            </motion.div>
            <div className="mx-auto h-px w-full bg-white/10 mt-5"></div>
            <section className="py-5 text-center flex flex-col gap-y-2">
              <motion.h3
                initial={{
                  opacity: 0,
                  letterSpacing: "-5px",
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  letterSpacing: "3px",
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="text-4xl md:text-5xl font-extrabold uppercase tracking-[3px] text-primary"
              >
                NOHA EMAD
              </motion.h3>
              <p className="font-medium text-gray-100 text-md">
                {t.navbar.job}
              </p>
            </section>
            <div className="mt-3 h-px w-full bg-white/10"></div>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center justify-between gap-3 pt-4 text-sm text-gray-400 md:flex-row"
            >
              <p>&copy; noha emad | {t.footer.copyright} </p>
              <p>{t.footer.built_with}</p>
            </motion.section>
          </section>
        </div>
      </div>
    </footer>
  );
}
