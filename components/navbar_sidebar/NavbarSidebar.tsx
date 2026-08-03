"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "../ui/drawer";

import {
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import { BsSend } from "react-icons/bs";
import { MdWavingHand } from "react-icons/md";
import ContactInfo from "../contact_info/ContactInfo";
import { FaCircle } from "react-icons/fa";
import { useLanguage } from "../language-provider";

export default function NavbarSidebar() {
    const { locale, setLocale, t } = useLanguage();
  
  return (
    <>
      <Drawer direction={locale === "ar" ? "left" : "right"}>
        <DrawerTrigger asChild>
          <button
            className="
            py-2!
            px-5!
            bg-primary
            text-white
            rounded-md
            text-md
            flex
            items-center
            font-bold
            gap-x-2
            "
          >
            {t.navbar.lets_talk} <BsSend />
          </button>
        </DrawerTrigger>

        <DrawerContent
          className="
          bg-white
          dark:bg-[#151515]
          border-l
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
            <div className="flex justify-between items-start">

              <div className="flex flex-col gap-y-1">
                <h3
                  className="
                  flex
                  gap-x-2
                  items-center
                  text-2xl
                  font-bold
                  "
                >
                  {t.navbar.lets_talk}
                  <MdWavingHand className="text-yellow-500" />
                </h3>

                <p className="text-gray-700 dark:text-gray-400 text-lg">
                  {t.navbar.description}
                </p>
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


            <ContactInfo />


            <p
              className="
              flex
              gap-x-3
              items-center
              text-gray-700
              dark:text-gray-300
              "
            >
              <FaCircle className="text-green-500" />
              {t.navbar.status}
            </p>

          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}