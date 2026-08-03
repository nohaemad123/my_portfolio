"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "../ui/drawer";

import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { FaBarsStaggered } from "react-icons/fa6";
import { MdWavingHand } from "react-icons/md";
import {
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaMoon,
  FaRegMoon,
  FaSun,
} from "react-icons/fa";

import { Switch } from "../ui/switch";
import Link from "next/link";

import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdOutlineFolderCopy } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { useTheme } from "@/hooks/use-theme";
import { useEffect, useState } from "react";
import { useLanguage } from "../language-provider";

export default function MobileNavbarSidebar() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const { locale, setLocale, t } = useLanguage();

  const navItems = [
    {
      href: "/",
      icon: <IoHomeOutline />,
      title: t.navbar.home,
    },
    {
      href: "/about",
      icon: <FaRegUser />,
      title: t.navbar.about,
    },
    {
      href: "/#skills",
      icon: <FaCode />,
      title: t.navbar.skills,
    },
    {
      href: "/#experience",
      icon: <IoBriefcaseOutline />,
      title: t.navbar.experience,
    },
    {
      href: "/#projects",
      icon: <MdOutlineFolderCopy />,
      title: t.navbar.projects,
    },
    {
      href: "/contact",
      icon: <FaRegEnvelope />,
      title: t.navbar.contact,
    },
  ];

  return (
    <>
      <Drawer direction={locale === "ar" ? "left" : "right"}>
        <DrawerTrigger asChild>
          <button
            className="
            py-2!
            px-2!
            bg-primary
            text-white
            rounded-md
            text-sm
            flex
            items-center
            font-bold
            "
          >
            <FaBarsStaggered />
          </button>
        </DrawerTrigger>

        <DrawerContent
          className="
          bg-white
          dark:bg-[#151515]
          border-gray-200
          dark:border-[#2a2a2a]
          "
        >
          <div
            className="
            no-scrollbar
            overflow-y-auto
            p-5
            flex
            flex-col
            gap-y-3
            "
          >
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

              <DrawerClose asChild>
                <Button
                  className="
                  bg-gray-300
                  dark:bg-[#252525]
                  text-black
                  dark:text-white
                  hover:bg-gray-400
                  dark:hover:bg-[#333]
                  "
                >
                  <FontAwesomeIcon icon={faTimes} />
                </Button>
              </DrawerClose>
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="dark-mode"
                  className="
          flex items-center gap-x-5
          text-gray-700
          dark:text-gray-200
        "
                >
                  {isDark ? <FaSun /> : <FaMoon />}
                  {isDark ? "Light" : "Dark"}
                </label>

                <Switch
                  id="dark-mode"
                  checked={isDark}
                  onCheckedChange={() => {
                    setTheme(isDark ? "light" : "dark");
                  }}
                />
              </div>

              <div className="flex items-center justify-between">
                <label
                  className="
                  flex
                  items-center
                  gap-x-5
                  text-gray-700
                  dark:text-gray-300
                  "
                >
                  <FaGlobe />
                  Language
                </label>

                <div className="flex gap-x-2">
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
              </div>

              <ul
                className="
                flex
                gap-y-3
                pt-3
                flex-col
                border-t
                border-gray-200
                dark:border-[#2a2a2a]
                "
              >
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="
          flex
          gap-x-3
          items-center
          text-lg
          font-medium
          text-gray-800
          dark:text-gray-200
          hover:text-primary
          transition
        "
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <div
                className="
                flex
                gap-y-3
                pt-3
                flex-col
                border-t
                border-gray-200
                dark:border-[#2a2a2a]
                "
              >
                <h3 className="text-lg font-bold">{t.navbar.contact_with}</h3>

                <div className="flex gap-x-3 items-center">
                  <a href="#" className="text-xl hover:text-primary transition">
                    <FaGithub />
                  </a>

                  <a href="#" className="text-xl hover:text-primary transition">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
