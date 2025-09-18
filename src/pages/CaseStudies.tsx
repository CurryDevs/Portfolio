import { AdvancedHeader } from "@/components/layout/AdvancedHeader";
import { ProjectSection } from "@/components/sections/ProjectSection";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/layout/ProjectCardSingle";

const CaseStudies = () => {

  const items = [
    {
      id: "interlynk",
      title: "Build Modern UIs",
      client: "Design System",
      techStack: ["React", "TypeScript", "Tailwind CSS"],
      description:
        "Create stunning user interfaces with our comprehensive design system.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
    {
      id: "brevix",
      title: "Computer Vision Technology",
      techStack: ["Python", "TensorFlow", "OpenCV"],
      client: "AI Solutions",
      description:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
    {
      id: "torque-craft",
      title: "Machine Learning Automation",
      techStack: ["Python", "Scikit-learn", "Keras"],
      client: "Data Analytics",
      description:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      techStack: ["R", "Python", "SQL"],
      client: "Business Intelligence",
      description:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      techStack: ["Python", "PyTorch", "TensorFlow"],
      client: "Deep Learning",
      description:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      image:
        "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80&sat=-100",
    },
  ];

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
      <main>
        
        <section id="case-studies" className="py-32 bg-background relative">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
    <div className="flex flex-col gap-y-20">
      <div className="mb-12 text-center">
  <h2 className="text-4xl font-bold tracking-tight text-foreground">Case Studies</h2>
  <p className="mt-2 text-muted-foreground text-lg max-w-2xl mx-auto">
    A selection of projects showcasing our technical expertise.
  </p>
</div>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex-shrink-0 w-full"
        >
          <ProjectCard project={item} />
        </div>
      ))}
    </div>
  </div>
</section>

      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudies;
