import { AdvancedHeader } from "@/components/layout/AdvancedHeader";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import LogoThree from "@/components/sections/LogoThree";
import ServicesSection from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import ProjectFeatureSection from "@/components/sections/ProjectFeatureSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Code, Palette, Rocket } from "lucide-react";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  const projectData = [
    {
      id: 1,
      title: "Responsive Design",
      content:
        "Flawless experiences across all devices and screen sizes. Your site adapts perfectly, whether on mobile, tablet, or desktop.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80&sat=-100", // B&W, multiple devices
      icon: <Code className="size-6 text-brand-text" />,
    },
    {
      id: 2,
      title: "Lightning Fast",
      content:
        "Rapid project delivery and seamless handover. We ensure your solution is launched quickly, with zero bottlenecks and instant readiness for your team.",
      image: "/src/assets/lightning-fast.png",
      icon: <Rocket className="size-6 text-brand-text" />,
    },
    {
      id: 3,
      title: "Custom Solutions",
      content:
        "Tailor-made frontend solutions to match your unique requirements. We build exactly what your business needs, no compromises.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80&sat=-100", // B&W, team collaboration workspace
      icon: <Palette className="size-6 text-brand-text" />,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg">
      <AdvancedHeader />
      <main>
        <HeroSection />
        <ProjectSection />
        <ProjectFeatureSection data={projectData} />
        {/* <LogoThree /> */}
        {/* <AboutSection /> */}
        <StatsSection />
        <ServicesSection />
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
