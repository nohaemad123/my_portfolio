import EducationSection from "@/components/education_section/EducationSection";
import ExperienceSection from "@/components/experience_section/ExperienceSection";
import HeroSection from "@/components/hero_section/HeroSection";
import ProjectsSection from "@/components/projects_section/ProjectsSection";
import Services from "@/components/services/Services";
import SkillsSection from "@/components/skills_section/SkillsSection";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Services />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection/>
      <EducationSection/>
    </>
  );
}
