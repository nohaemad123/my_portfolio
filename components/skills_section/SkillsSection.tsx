"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faCode, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechnicalSkills from "../technical_skills/TechnicalSkills";
import PersonalSkills from "../personal_skills/PersonalSkills";
import Background from "../background/Background";
import Heading from "@/shared_commponents/heading/Heading";
import { useLanguage } from "../language-provider";
import { motion ,AnimatePresence} from "motion/react";

export default function SkillsSection() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden py-20 bg-[#FAFBFF]"
      id="skills"
    >
      <Background />
      <div className="container relative z-10">
        <Heading title={t.skills.title} description={t.skills.description} />
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
        <Tabs defaultValue="technical" className="w-full flex flex-col">
          <TabsList
            dir={locale === "ar" ? "rtl" : "ltr"}
            className="mx-auto mb-8 flex w-fit flex-col md:flex-row rounded-full bg-gray-200 dark:bg-[#1f1f1f] p-1 h-auto"
          >
            <TabsTrigger
              value="technical"
              className="rounded-full px-8 py-3 text-lg font-semibold text-gray-600 dark:text-gray-100 transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <FontAwesomeIcon icon={faCode} className="mr-2" />
              {t.skills.technical_skills}
            </TabsTrigger>

            <TabsTrigger
              value="personal"
              className="rounded-full px-8 py-3 text-lg font-semibold text-gray-600 dark:text-gray-100 transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg"
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              {t.skills.personal_skills}
            </TabsTrigger>
          </TabsList>

       <AnimatePresence mode="wait">
          <TabsContent value="technical" className="w-full mt-0">
             <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
            <Card className="rounded-2xl border-none shadow-xl bg-white dark:bg-[#151515]" dir={locale === "ar" ? "rtl" : "ltr"}>
              <CardContent className="p-4 md:p-8">
                <TechnicalSkills />
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>
          </AnimatePresence>
<AnimatePresence mode="wait">
          <TabsContent value="personal" className="w-full mt-0">
              <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
  >
            <Card className="rounded-2xl border-none shadow-xl bg-white dark:bg-[#151515]" dir={locale === "ar" ? "rtl" : "ltr"}>
              <CardContent className="p-4 md:p-8">
                <PersonalSkills />
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>
          </AnimatePresence>
        </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
