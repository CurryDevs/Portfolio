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
        {/* LIQUIDD BTN */}
        {/* <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
            CASE STUDIES
          </span>
          <div className="inline-flex items-center px-4 py-2 bg-black rounded-full glass mb-8 animate-fade-in">
            <LiquidButton className="z-10 -translate-x-1/2 -translate-y-1/2">
              CASE STUDIES
            </LiquidButton>
          </div>
          <h2 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
            Client Projects
          </h2>
        </div> */}
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-foreground">
            <span className="relative inline-block">
              <span className="relative z-10">Case Studies</span>
              <span className="absolute left-0 bottom-2 w-full h-[6px] bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 rounded-md opacity-30" />
            </span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects showcasing modern design and
            engineering solutions.
          </p>
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

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudies;
