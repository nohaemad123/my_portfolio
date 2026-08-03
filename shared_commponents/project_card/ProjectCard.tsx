"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { ProjectType } from "@/types/projectType";
import { useLanguage } from "@/components/language-provider";

interface ProjectCardProps {
  projectDetails: ProjectType;
}

export default function ProjectCard({ projectDetails }: ProjectCardProps) {
  const { locale, t } = useLanguage();

  const router = useRouter();

  const { image, name, type, short_description, links, slug } = projectDetails;

  return (
    <div
      onClick={() => router.push(`/projects/${slug}`)}
      className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#151515] shadow-lg transition hover:shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={locale === "en" ? name.en : name.ar}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-y-2 bg-gradient-to-t from-black via-black/70 to-transparent p-5 transition-all duration-500 group-hover:translate-y-full group-hover:opacity-0">
          <h3 className="text-2xl font-bold text-white">
            {locale === "en" ? name.en : name.ar}
          </h3>

          <span className=" w-fit rounded-full border border-primary/20 bg-primary px-3 py-1 text-xs font-medium text-white">
            {locale === "en" ? type.en : type.ar}
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 px-6 text-center opacity-0 transition-all duration-500 translate-y-8 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="mb-3 text-2xl font-bold text-white">
            {locale === "en" ? name.en : name.ar}
          </h3>

          <p className="mb-6 text-sm line-clamp-2 leading-7 text-gray-300">
            {locale === "en" ? short_description.en : short_description.ar}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {links?.demo && (
              <Link
                href={links.demo}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white transition hover:scale-105"
              >
                {t.all_projects.live_demo}
              </Link>
            )}

            {links?.github && (
              <Link
                href={links.github}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-black
                "
              >
                GitHub
              </Link>
            )}

            <Link
              href={`/projects/${slug}`}
              onClick={(e) => e.stopPropagation()}
              className="rounded-full border border-primary bg-white dark:bg-[#151515] px-5 py-2 text-sm font-medium text-primary transition primary hover:text-white"
            >
              {t.all_projects.view_details}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
