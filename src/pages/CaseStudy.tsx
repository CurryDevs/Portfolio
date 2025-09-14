import HeroSection from "@/components/case-study/HeroSection";
import ProjectDetails from "@/components/case-study/ProjectDetails";
import TechStack from "@/components/case-study/TechStack";
// import Results from "@/components/case-study/Results";
import Gallery from "@/components/case-study/Gallery";
import Footer from "@/components/layout/Footer";
import { AdvancedHeader } from "@/components/layout/AdvancedHeader";

import { useParams } from "react-router-dom";
import data from "@/data/projects.json";

const CaseStudy = () => {

  const { id } = useParams();
  const project = data.find((item) => item.id === id);

  if (!project) return <div className="text-center mt-20 text-red-500">Project not found</div>;


  return (
    <div className="min-h-screen">
      <AdvancedHeader />
      <main>
        <HeroSection {...project.components.HeroSection}/>
        <ProjectDetails {...project.components.ProjectDetails}/>
        <TechStack techStack={project.components.TechStack}/>
        {/* <Results {...project.components.Results}/> */}
        <Gallery />
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudy;
