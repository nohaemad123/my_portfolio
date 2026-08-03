import React from "react";

type breadcrumbProps = {
  title: string | any;
  description: string | any;
};

export default function Heading({ title, description }: breadcrumbProps) {
  
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="flex items-center gap-4 mb-5">
        <div className="relative w-5 md:w-20 h-[2px] bg-gray-300 dark:bg-gray-700">
          <span className="absolute start-0 -top-[3px] h-2 w-2 rounded-full bg-primary"></span>
        </div>

        <h2 className="text-md md:text-lg font-bold uppercase tracking-[3px] text-primary">
          {title}
        </h2>

        <div className="relative w-5 md:w-20 h-[2px] bg-gray-300 dark:bg-gray-700">
          <span className="absolute end-0 -top-[3px] h-2 w-2 rounded-full bg-primary"></span>
        </div>
      </div>

      <p className="max-w-3xl text-center text-lg md:text-2xl font-bold leading-snug text-gray-900 dark:text-gray-100">
        {description}
      </p>
    </div>
  );
}