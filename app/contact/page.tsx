"use client";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import { FaCircleDot } from "react-icons/fa6";
import ContactMe from "@/components/contact_me/ContactMe";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq_data";
import ContactInfo from "@/components/contact_info/ContactInfo";
import { useLanguage } from "@/components/language-provider";
import { motion, type Variants } from "motion/react";

export default function page() {
  const { locale, t } = useLanguage();
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariant: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <Breadcrumb title={t.navbar.contact} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-50 dark:bg-[#0b0b0b] py-10"
      >
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-12 gap-y-10 md:gap-10 mt-10"
          >
            <motion.div
              variants={itemVariant}
              className="col-span-12 md:col-span-4 flex flex-col gap-y-3"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-3"
              >
                <FaCircleDot className="text-primary" />

                <span className="text-primary uppercase tracking-[4px] font-extrabold text-md">
                  {t.navbar.contact}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                className="text-4xl capitalize lg:text-5xl font-extrabold leading-tight dark:text-white"
              >
                {t.contact.title} <br />
                <span className="text-primary ms-2">{t.contact.together}.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="text-lg leading-8 text-gray-600 dark:text-gray-400"
              >
                {t.contact.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
              >
                <ContactInfo />
              </motion.div>
            </motion.div>
            <motion.div
              variants={itemVariant}
              className="col-span-12 md:col-span-8 flex flex-col gap-y-3"
            >
              <ContactMe />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-[#151515] rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-8 mt-10"
          >
            <h3 className="text-3xl font-extrabold dark:text-white mb-6">
              {t.contact.location}
            </h3>

            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.7199196916217!2d31.37551092465162!3d30.130826974880147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458168dbe1d1277%3A0xd021543e0eb394a!2z2YfYtNin2YUg2KjYsdmD2KfYqg!5e0!3m2!1sar!2seg!4v1785111639753!5m2!1sar!2seg"
                className="h-[500px] w-full border-0 grayscale-[20%] transition duration-500 hover:grayscale-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="mt-8 space-y-4"
            >
              {faqData.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariant}
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <AccordionItem
                    value={`item-${item.id}`}
                    className="overflow-hidden rounded-xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-5 text-left text-lg font-bold hover:no-underline hover:bg-primary/5 dark:hover:bg-primary/10 transition-all">
                      {locale === "en" ? item.question.en : item.question.ar}
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-8">
                      {locale === "en" ? item.answer.en : item.answer.ar}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
