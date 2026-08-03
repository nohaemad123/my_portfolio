"use client";

import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import MobileNavbarSidebar from "../mobile_navbar_sidebar/MobileNavbarSidebar";
import { useTheme } from "@/hooks/use-theme";
import { IoSunnyOutline } from "react-icons/io5";
import { useLanguage } from "../language-provider";

export default function MobileNavbar() {
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
    <div className="md:hidden">
      <div
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
          scrolled
            ? `
              bg-white
              dark:bg-[#151515]
              shadow-md
              shadow-black/20
              py-4
            `
            : "bg-transparent py-6"
        }`}
      >
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-3 items-center">
              <span
                className="
                bg-primary
                w-8
                h-8
                flex
                justify-center
                items-center
                text-white
                text-sm
                rounded-md
                font-bold
                "
              >
                NE
              </span>

              <div className="flex flex-col gap-y-1">
                <h3 className="text-primary text-lg font-extrabold">
                  Noha emad
                </h3>

                <p className="text-xs text-gray-700 dark:text-gray-400">
                  {t.navbar.job}
                </p>
              </div>
            </div>

            <div className="flex gap-x-3 items-center">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="cursor-pointer text-xl text-black dark:text-white"
              >
                {theme === "dark" ? <IoSunnyOutline /> : <FaRegMoon />}
              </button>

              <div className="flex gap-x-2 items-center text-sm">
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

              <MobileNavbarSidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
