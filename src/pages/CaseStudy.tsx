import HeroSection from "@/components/case-study/HeroSection";
import ProjectDetails from "@/components/case-study/ProjectDetails";
import TechStack from "@/components/case-study/TechStack";
import Gallery from "@/components/case-study/Gallery";
import Footer from "@/components/layout/Footer";
import { AdvancedHeader } from "@/components/layout/AdvancedHeader";

import { useParams } from "react-router-dom";
import data from "@/data/projects.json";

export type SectionLink = {
  name: string;
  link: string;
};

const CaseStudy = () => {
  const { id } = useParams();
  const project = data.find((item) => item.id === id);

  if (!project)
    return (
      <div className="text-center mt-20 text-red-500">Project not found</div>
    );

  const footerLink: SectionLink[] = [
    {
      name: "Home",
      link: "/project-overview",
    },
    {
      name: "Overview",
      link: "/project-details",
    },
    {
      name: "Technology",
      link: "/tech-stack",
    },
    {
      name: "Gallery",
      link: "/project-gallery",
    },
  ];

  return (
    <div className="min-h-screen">
      <AdvancedHeader />
      <main>
        <HeroSection {...project.components.HeroSection} />
        <ProjectDetails {...project.components.ProjectDetails} />
        <TechStack techStack={project.components.TechStack} />
        <Gallery />
      </main>
      <div className="mt-10">
        <Footer sectionLinks={footerLink} />
      </div>
    </div>
  );
};

export default CaseStudy;
