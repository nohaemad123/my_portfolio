"use client"
import { ExperienceData } from "@/data/experienceData";
import ExperienceCard from "@/shared_commponents/experience_card/ExperienceCard";
import Heading from "@/shared_commponents/heading/Heading";
import { useLanguage } from "../language-provider";

export default function ExperienceSection() {
  
    const { t} = useLanguage();
  
  return (
    <section className="py-20 " id="experience">
      <div className="container">
        <Heading
          title={t.experience.title}
          description={t.experience.description}/>

        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-3 lg:grid-cols-3">
          {ExperienceData?.map((experience) => (
            <ExperienceCard
              experienceDetails={experience}
              key={experience.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
