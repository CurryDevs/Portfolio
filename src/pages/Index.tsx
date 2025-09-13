import { AdvancedHeader } from "@/components/layout/AdvancedHeader";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import LogoThree from "@/components/sections/LogoThree";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import ProjectFeatureSection from "@/components/sections/ProjectFeatureSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TechSection } from "@/components/sections/TechSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Code, Palette, Rocket } from "lucide-react";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  const projectData = [
    {
      id: 1,
      title: "1. Discovery & Planning",
      content:
        "We start by understanding your vision, goals, and requirements. Through detailed discussions and research, we create a comprehensive project roadmap that aligns with your business objectives.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      icon: <Code className="size-6 text-brand-text" />,
    },
    {
      id: 2,
      title: "2. Design & Development",
      content:
        "Our team crafts beautiful, user-centric designs and transforms them into high-performance, scalable applications using the latest technologies and best practices.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      icon: <Palette className="size-6 text-brand-text" />,
    },
    {
      id: 3,
      title: "3. Launch & Optimization",
      content:
        "We deploy your project with careful attention to performance, security, and user experience. Post-launch, we provide ongoing support and optimization to ensure continued success.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      icon: <Rocket className="size-6 text-brand-text" />,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <AdvancedHeader />
      <main>
        <HeroSection />
        <ProjectFeatureSection data={projectData} />
        <LogoThree />
        {/* <AboutSection /> */}
        <StatsSection />
        <ServicesSection />
        <TechSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
