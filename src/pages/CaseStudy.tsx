import HeroSection from "@/components/case-study/HeroSection";
import ProjectDetails from "@/components/case-study/ProjectDetails";
import TechStack from "@/components/case-study/TechStack";
import Gallery from "@/components/case-study/Gallery";
import Footer from "@/components/layout/Footer";
import { AdvancedHeader } from "@/components/layout/AdvancedHeader";

import { useLocation, useParams } from "react-router-dom";
import data from "@/data/projects.json";

export type SectionLink = {
  name: string;
  link: string;
};

const CaseStudy = ({ scrollTo }: { scrollTo?: string }) => {
  const location = useLocation();

  // useEffect(() => {
  //   if (scrollTo) {
  //     const el = document.getElementById(scrollTo);
  //     if (el) {
  //       el.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [scrollTo, location]);
  const { id } = useParams();
  const project = data.find((item) => item.id === id);

  if (!project)
    return (
      <div className="text-center mt-20 text-red-500">Project not found</div>
    );

  const footerLink: SectionLink[] = [
    {
      name: "Home",
      link: `/case-studies/${id}/`,
    },
    {
      name: "Overview",
      link: `/case-studies/${id}/project-overview`,
    },
    {
      name: "Technology",
      link: `/case-studies/${id}/tech-stack`,
    },
    {
      name: "Gallery",
      link: `/case-studies/${id}/project-gallery`,
    },
  ];

  return (
    <div className="min-h-screen">
      <AdvancedHeader />
      <main>
        <HeroSection {...project.components.HeroSection} />
        <ProjectDetails {...project.components.ProjectDetails} />
        <TechStack techStack={project.components.TechStack} />
        <Gallery {...project.components.Gallery} />
      </main>
      <div className="mt-10">
        <Footer sectionLinks={footerLink} />
      </div>
    </div>
  );
};

export default CaseStudy;
