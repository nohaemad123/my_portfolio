"use client";

import {
  FaArrowRight,
  FaPhone,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export default function ContactInfo() {
  const { locale, t } = useLanguage();

  const contacts = [
    {
      title: t.contact.email,
      value: "noha2697@gmail.com",
      icon: TfiEmail,
      href: "mailto:noha2697@gmail.com",
    },
    {
      title: t.contact.phone,
      value: "01005839637",
      icon: FaPhone,
      href: "tel:01005839637",
    },
    {
      title: t.contact.location,
      value: t.footer.address,
      icon: IoLocationOutline,
    },
    {
      title: t.contact.whatsapp,
      value: "01119577144",
      icon: FaWhatsapp,
      href: "https://wa.me/201119577144",
    },
    {
      title: "Github",
      value: "github.com/nohaemad123",
      icon: FaGithub,
      href: "https://github.com/nohaemad123",
    },
    {
      title: "Linkedin",
      value: "linkedin.com/in/noha-emad-b86449173",
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/noha-emad-b86449173/",
    },
  ];

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-col gap-y-4"
    >
      {contacts.map((contact) => {
        const Icon = contact.icon;

        return (
          <motion.div
            key={contact.title}
            variants={item}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{ duration: 0.25 }}
            className="group bg-white dark:bg-[#151515] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-5 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-4">
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.15,
                  }}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10"
                >
                  <Icon className="text-primary text-xl" />
                </motion.div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-bold dark:text-white">
                    {contact.title}
                  </h3>

                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={
                        contact.href.startsWith("http") ? "_blank" : undefined
                      }
                      className="text-gray-600 dark:text-gray-400 hover:text-primary transition break-all"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      {contact.value}
                    </p>
                  )}
                </div>
              </div>

              <motion.div
                whileHover={{
                  x: locale === "ar" ? -5 : 5,
                }}
                transition={{ duration: 0.2 }}
                className="text-primary"
              >
                {locale === "ar" ? (
                  <FaArrowRight className="rotate-180" />
                ) : (
                  <FaArrowRight />
                )}
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}