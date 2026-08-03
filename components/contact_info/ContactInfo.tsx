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

export default function ContactInfo() {
  const { locale, t } = useLanguage();

  return (
    <div className="flex flex-col gap-y-3">
      <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="icon rounded-md">
              <TfiEmail className="text-primary" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold dark:text-white">
                {t.contact.email}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                noha2697@gmail.com
              </p>
            </div>
          </div>
          {locale === "ar" && (
            <FaArrowRight className="rotate-180 text-primary" />
          )}
          {locale === "en" && <FaArrowRight />}
        </div>
      </div>

      <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="icon rounded-md">
              <FaPhone className="text-primary" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold dark:text-white">
                {t.contact.phone}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">01005839637</p>
            </div>
          </div>
          {locale === "ar" && (
            <FaArrowRight className="rotate-180 text-primary" />
          )}
          {locale === "en" && <FaArrowRight />}{" "}
        </div>
      </div>

      <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="icon rounded-md">
              <IoLocationOutline className="text-primary" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold dark:text-white">
                {t.contact.location}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t.footer.address}
              </p>
            </div>
          </div>
          {locale === "ar" && (
            <FaArrowRight className="rotate-180 text-primary" />
          )}
          {locale === "en" && <FaArrowRight />}{" "}
        </div>
      </div>

      <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="icon rounded-md">
              <FaWhatsapp className="text-primary" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold dark:text-white">
                {t.contact.whatsapp}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">01119577144</p>
            </div>
          </div>
          {locale === "ar" && (
            <FaArrowRight className="rotate-180 text-primary" />
          )}
          {locale === "en" && <FaArrowRight />}{" "}
        </div>
      </div>

      <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="icon rounded-md">
              <FaGithub className="text-primary" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold dark:text-white">Github</h3>
              <a
                href="https://github.com/nohaemad123"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition"
              >
                https://github.com/nohaemad123
              </a>
            </div>
          </div>
          {locale === "ar" && (
            <FaArrowRight className="rotate-180 text-primary" />
          )}
          {locale === "en" && <FaArrowRight />}{" "}
        </div>
      </div>

      <div className="bg-white dark:bg-[#151515] w-full rounded-2xl border border-gray-200 dark:border-[#2a2a2a] shadow-md p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-3">
            <div className="icon rounded-md">
              <FaLinkedin className="text-primary" />
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold dark:text-white">Linkedin</h3>

              <a
                href="https://www.linkedin.com/in/noha-emad-b86449173/"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-primary transition"
              >
                https://www.linkedin.com/in/noha-emad-b86449173/
              </a>
            </div>
          </div>
          {locale === "ar" && (
            <FaArrowRight className="rotate-180 text-primary" />
          )}
          {locale === "en" && <FaArrowRight />}{" "}
        </div>
      </div>
    </div>
  );
}
