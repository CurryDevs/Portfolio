import HeroSection from "@/components/case-study/HeroSection";
import ProjectDetails from "@/components/case-study/ProjectDetails";
import TechStack from "@/components/case-study/TechStack";
import Results from "@/components/case-study/Results";
import Gallery from "@/components/case-study/Gallery";
import Footer from "@/components/layout/Footer";
import { AdvancedHeader } from "@/components/layout/AdvancedHeader";

const CaseStudy = () => {
  return (
    <div className="min-h-screen">
      <AdvancedHeader />
      <main>
        <HeroSection />
        <ProjectDetails />
        <TechStack />
        <Results />
        <Gallery />
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudy;
