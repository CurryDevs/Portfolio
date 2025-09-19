"use client";

import { ProjectCard } from "@/components/layout/ProjectCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import items from "@/data/caseStudy.json";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface ProjectSectionProps {
  items?: GalleryItem[];
}

const ProjectSection = ({ items: propItems = items }: ProjectSectionProps) => {
  // Use propItems if provided, otherwise fall back to imported JSON
  const displayItems = propItems || items;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }

      // Reset index on resize to avoid empty spaces
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = Math.max(0, displayItems.length - itemsPerView);

  const goNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section id="project-section" className="py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative z-10 flex flex-col items-center justify-center text-center mb-0 sm:mb-12">
          <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
            CASE STUDIES
          </span>
          <h2 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
            How We Build Amazing Projects
          </h2>
        </div>

        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <a
              href={"/case-studies"}
              target={"_blank"}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary border border-white/10 text-white hover:font-semibold rounded-2xl hover:shadow-glow hover:cursor-pointer hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm hover-lift"
            >
              See All
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-2 transition-colors duration-200
                ${
                  canGoPrev
                    ? "bg-accent text-accentCS-foreground border-accent hover:bg-accent/90 hover:scale-105 active:scale-95"
                    : "bg-muted text-muted-foreground border-muted cursor-not-allowed opacity-60"
                }
              `}
              aria-label="Previous projects"
            >
              <ArrowLeft className="h-7 w-7" />
            </button>
            <button
              onClick={goNext}
              disabled={!canGoNext}
              className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-2 transition-colors duration-200
                ${
                  canGoNext
                    ? "bg-accent text-accentCS-foreground border-accent hover:bg-accent/90 hover:scale-105 active:scale-95"
                    : "bg-muted text-muted-foreground border-muted cursor-not-allowed opacity-60"
                }
              `}
              aria-label="Next projects"
            >
              <ArrowRight className="h-7 w-7" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {displayItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-3"
                style={{
                  width: `${100 / itemsPerView}%`,
                }}
              >
                <ProjectCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectSection };