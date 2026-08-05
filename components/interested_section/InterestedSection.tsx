import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";

export default function InterestedSection() {
  const { locale, t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=" bg-gray-200/80 dark:bg-[#151515] px-10 py-8 rounded-md shadow-md mt-10 flex justify-between items-center borderborder-gray-200 dark:border-[#2a2a2a]"
    >
      <div className="flex flex-col md:flex-row gap-x-3 items-center">
        <motion.div
          whileHover={{
            rotate: 12,
            scale: 1.08,
          }}
          transition={{ duration: 0.3 }}
          className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-primary"
        >
          <BsFillSendFill className="text-4xl text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: locale === "ar" ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-y-2"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {t.interested.title}
          </h3>

          <p className="leading-6 text-gray-700 dark:text-gray-300">
            {t.interested.description}
          </p>
        </motion.div>
      </div>

      <motion.div
        whileHover={{
          scale: 1.05,
          y: -3,
        }}
        whileTap={{
          scale: 0.96,
        }}
      >
        <Link
          href="/contact"
          className="flex gap-x-3 items-center border border-transparent rounded-md bg-primary px-8 py-4 text-md font-medium text-white transition hover:scale-105 hover:border-primary hover:bg-white hover:text-primary dark:hover:bg-[#151515] duration-500"
        >
          {t.interested.button}
          {locale === "ar" && (
            <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
              <FaArrowRight className="rotate-180" />
            </motion.div>
          )}

          {locale === "en" && (
            <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              <FaArrowRight />
            </motion.div>
          )}
        </Link>
      </motion.div>
    </motion.div>
  );
}
