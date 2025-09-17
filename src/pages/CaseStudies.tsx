
import { AdvancedHeader } from "@/components/layout/AdvancedHeader";
import { ProjectSection } from "@/components/sections/ProjectSection";
import Footer from "@/components/layout/Footer";

const CaseStudies = () => {


  return (
    <div className="min-h-screen">
      <AdvancedHeader />
      <main>
        <ProjectSection />
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudies;
