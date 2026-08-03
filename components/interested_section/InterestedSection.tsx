import Link from "next/link";
import { BsFillSendFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../language-provider";

export default function InterestedSection() {
  const { locale, t } = useLanguage();

  return (
    <div className=" bg-gray-200/80 dark:bg-[#151515] px-10 py-8 rounded-md shadow-md mt-10 flex justify-between items-center borderborder-gray-200 dark:border-[#2a2a2a]">
      <div className="flex flex-col md:flex-row gap-x-3 items-center">
        <div className="flex h-[80px] w-[80px] shrink-0 items-center justify-center rounded-full bg-primary">
          <BsFillSendFill className="text-4xl text-white" />
        </div>

        <div className="flex flex-col gap-y-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {t.interested.title}
          </h3>

          <p className="leading-6 text-gray-700 dark:text-gray-300">
            {t.interested.description}
          </p>
        </div>
      </div>

      <Link
        href="/contact"
        className="flex gap-x-3 items-center border border-transparent rounded-md bg-primary px-8 py-4 text-md font-medium text-white transition hover:scale-105 hover:border-primary hover:bg-white hover:text-primary dark:hover:bg-[#151515] duration-500"
      >
        {t.interested.button}
        {locale === "ar" && <FaArrowRight className="rotate-180" />}
        {locale === "en" && <FaArrowRight />}
      </Link>
    </div>
  );
}
