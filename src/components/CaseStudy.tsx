import HeroSection from "@/components/case-study/HeroSection";
import ProjectDetails from "@/components/case-study/ProjectDetails";
import TechStack from "@/components/case-study/TechStack";
import Results from "@/components/case-study/Results";
import Gallery from "@/components/case-study/Gallery";

const CaseStudy = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectDetails />
      <TechStack />
      <Results />
      <Gallery />
    </div>
  );
};


export default CaseStudy;
