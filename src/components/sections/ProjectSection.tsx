"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface ProjectSectionProps {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const ProjectSection = ({
  items = [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "#",
      image:
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
  ],
}: ProjectSectionProps) => {
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
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const goNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const goPrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleCardClick = (e: React.MouseEvent, itemId: string) => {
    e.preventDefault();
    window.location.href = '/case-studies';
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  return (
    <section className="py-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="relative z-10 flex flex-col items-center justify-center text-center mb-12">
          <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-xl text-transparent">
            CASE STUDIES
          </span>
          <h2 className="mb-8 text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
            How We Build Amazing Projects
          </h2>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div></div>
          <div className="flex gap-2">
            <button
              onClick={goPrev}
              disabled={!canGoPrev}
              className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-2 transition-colors duration-200
                ${canGoPrev
                  ? 'bg-accent text-accentCS-foreground border-accent hover:bg-accent/90 hover:scale-105 active:scale-95'
                  : 'bg-muted text-muted-foreground border-muted cursor-not-allowed opacity-60'}
              `}
              aria-label="Previous projects"
            >
              <ArrowLeft className="h-7 w-7" />
            </button>
            <button
              onClick={goNext}
              disabled={!canGoNext}
              className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg border-2 transition-colors duration-200
                ${canGoNext
                  ? 'bg-accent text-accentCS-foreground border-accent hover:bg-accent/90 hover:scale-105 active:scale-95'
                  : 'bg-muted text-muted-foreground border-muted cursor-not-allowed opacity-60'}
              `}
              aria-label="Next projects"
            >
              <ArrowRight className="h-7 w-7" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0"
                style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
              >
                <a
                  href="/case-studies"
                  className="group flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {item.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {item.summary}
                  </div>
                  <div className="flex items-center text-sm">
                    Read more{" "}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProjectSection };