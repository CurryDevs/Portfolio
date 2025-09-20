import { AdvancedHeader } from "@/components/layout/AdvancedHeader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/layout/ProjectCardSingle";
import projects from "@/data/caseStudy.json";

interface GalleryItem {
  id: string;
  title: string;
  client: string;
  techStack: string[];
  summary: string;
  url: string;
  image: string;
}

interface ProjectsProps {
  items?: GalleryItem[];
}

const CaseStudies = ({ items: propItems = projects }: ProjectsProps) => {
  const items = propItems || projects;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1); // Always 1 per row for now

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      // Keep 1 item per row for all screen sizes
      setItemsPerView(1);

      // Reset index on resize to avoid empty spaces
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent, itemId: string) => {
    e.preventDefault();
    window.location.href = "/case-studies";
  };

  return (
    <div className="min-h-screen">
      <AdvancedHeader />
      <main className="max-w-7xl mx-auto px-8 pt-24">
        {/* Section Title */}
        <div className="relative z-10 flex flex-col items-center justify-center mt-12 mb-20 sm:mb-28">
          <div className="inline-flex items-center px-4 py-2 bg-black rounded-full glass mb-8 animate-fade-in">
            <LiquidButton className="max-sm:scale-[0.8] max-md:scale-[0.9] z-10 absolute left-5 top-2 -translate-x-1/2 -translate-y-1/2">
              CASE STUDIES
            </LiquidButton>
          </div>
          <h2 className="text-center text-4xl min-[400px]:text-5xl  font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
            Our Client Projects
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 items-stretch">
          {items.map((project) => (
            <div key={project.id} className="flex">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudies;
