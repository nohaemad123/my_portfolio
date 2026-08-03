"use client";
import Heading from "@/shared_commponents/heading/Heading";
import Image from "next/image";
import { FaGraduationCap, FaBookmark } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { useLanguage } from "../language-provider";

export default function EducationSection() {
  const { locale, t } = useLanguage();

  return (
    <section className="py-24 bg-[#FAFBFF] dark:bg-[#0a0a0a]" id="education">
      <div className="container">
        <div className="grid grid-cols-12 items-center gap-y-16 lg:gap-x-16">
          {/* Left */}
          <div className="col-span-12 lg:col-span-6">
            <Heading
              title={t.education.title}
              description={t.education.description}
            />

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute start-8 top-8 bottom-8 w-[2px] bg-primary/20"></div>

              <div className="space-y-12">
                {/* Item */}
                <div className="relative flex gap-5 md:gap-8">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_30px_rgba(99,102,241,.35)]">
                    <FaGraduationCap className="text-3xl" />
                  </div>

                  <div className="flex-1 pt-2">
                    <h4 className="mb-2 text-xl font-bold text-primary">
                      2011 - 2015
                    </h4>

                    <div className="relative rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <div className="absolute end-5 top-5 text-2xl text-primary">
                        <FaBookmark />
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {t.education.computer_science}
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-primary">
                        {t.education.elshorouk_academy}
                      </p>

                      <p className="mt-3 leading-5 text-gray-500 dark:text-gray-300">
                        {t.education.computer_science_desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item */}
                <div className="relative flex gap-5 md:gap-8">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_30px_rgba(99,102,241,.35)]">
                    <PiCertificateFill className="text-3xl" />
                  </div>

                  <div className="flex-1 pt-2">
                    <h4 className="mb-2 text-xl font-bold text-primary">
                      2024 - 2025
                    </h4>

                    <div className="relative rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <div className="absolute end-5 top-5 text-2xl text-primary">
                        <FaBookmark />
                      </div>

                      <h3 className="mt-2 text-lg font-semibold text-primary">
                        {t.education.front_diploma}
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-primary">
                        {t.education.route_academy}
                      </p>

                      <p className="mt-3 leading-5 text-gray-500 dark:text-gray-300">
                        {t.education.front_diploma_desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/e0027de0-ab78-4ea8-87a7-4e6f5b1c4faa.png"
              alt="Education"
              width={700}
              height={700}
              className="mx-auto h-auto w-full max-w-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
