"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavbarSidebar from "../navbar_sidebar/NavbarSidebar";
import { FaRegMoon } from "react-icons/fa";
import { useTheme } from "@/hooks/use-theme";
import { IoSunnyOutline } from "react-icons/io5";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/language-provider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 hidden md:block
      ${
        scrolled
          ? "bg-white dark:bg-black shadow-md py-4 shadow-[0_30px_40px_rgba(0,0,0,0.30)]"
          : "bg-transparent dark:bg-transparent py-6"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-3 items-center">
            <span className="bg-primary w-10 h-10 flex justify-center items-center text-white rounded-md font-bold">
              NE
            </span>

            <div className="flex flex-col gap-y-1">
              <h3 className="text-primary text-2xl font-extrabold">
                Noha emad
              </h3>

              <p className="text-black dark:text-white">{t.navbar.job}</p>
            </div>
          </div>

          {/* Links */}
          <ul className="flex gap-x-5 items-center text-lg font-bold">
            <li>
              <Link className="text-black dark:text-white" href="/">
                {t.navbar.home}
              </Link>
            </li>

            <li>
              <Link className="text-black dark:text-white" href="/about">
                {t.navbar.about}
              </Link>
            </li>

            <li>
              <Link
                href="/#skills"
                className={
                  activeSection === "skills"
                    ? "text-primary font-extrabold"
                    : "text-black dark:text-white"
                }
              >
                {t.navbar.skills}
              </Link>
            </li>

            <li>
              <Link
                href="/#experience"
                className={
                  activeSection === "experience"
                    ? "text-primary font-extrabold"
                    : "text-black dark:text-white"
                }
              >
                {t.navbar.experience}
              </Link>
            </li>

            <li>
              <Link
                href="/#projects"
                className={
                  activeSection === "projects"
                    ? "text-primary font-extrabold"
                    : "text-black dark:text-white"
                }
              >
                {t.navbar.projects}
              </Link>
            </li>

            <li>
              <Link className="text-black dark:text-white" href="/contact">
                {t.navbar.contact}
              </Link>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex gap-x-5 items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <IoSunnyOutline /> : <FaRegMoon />}
            </button>

            <div className="flex gap-x-2 text-black dark:text-white">
              <button
                onClick={() => setLocale("en")}
                className={locale === "en" ? "font-bold text-primary" : ""}
              >
                EN
              </button>

              <span>|</span>

              <button
                onClick={() => setLocale("ar")}
                className={locale === "ar" ? "font-bold text-primary" : ""}
              >
                AR
              </button>
            </div>

            <NavbarSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
