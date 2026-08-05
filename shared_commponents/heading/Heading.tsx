import { motion } from "motion/react";

type breadcrumbProps = {
  title: string | any;
  description: string | any;
};

export default function Heading({ title, description }: breadcrumbProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center mb-16"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className="relative w-5 md:w-20 h-[2px] bg-gray-300 dark:bg-gray-700">
          <span className="absolute start-0 -top-[3px] h-2 w-2 rounded-full bg-primary"></span>
        </div>

        <motion.h2
          initial={{ opacity: 0, letterSpacing: "10px" }}
          whileInView={{ opacity: 1, letterSpacing: "3px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-md md:text-lg font-bold uppercase tracking-[3px] text-primary"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-5 md:w-20 h-[2px] bg-gray-300 dark:bg-gray-700"
        >
          <span className="absolute end-0 -top-[3px] h-2 w-2 rounded-full bg-primary"></span>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="max-w-3xl text-center text-lg md:text-2xl font-bold leading-snug text-gray-900 dark:text-gray-100"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
