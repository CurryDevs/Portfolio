import { AdvancedHeader } from "@/components/layout/AdvancedHeader";
import Footer from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import ProjectFeatureSection from "@/components/sections/ProjectFeatureSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Code, Palette, Rocket } from "lucide-react";
import FAQSection from "@/components/sections/FAQSection";
import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "@/components/seo/SEO";

const Index = ({ scrollTo }: { scrollTo?: string }) => {
  const location = useLocation();

  useLayoutEffect(() => {
  if (scrollTo) {
    const el = document.getElementById(scrollTo);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }
}, [scrollTo, location]);

  
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
      image: "/lightning-fast.png",
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
    <>
      <SEO
        title="CurryDevs | Web Development & Design Agency"
        description="CurryDevs builds modern, high-performance websites and apps with React, TypeScript & Tailwind. Minimalist design, smooth interactions, and fast delivery."
        url="https://currydevs.com/"
        image="https://currydevs.com/seo-images/main-preview.png"
        twitterImage="https://currydevs.com/seo-images/twitter-image.png"
        type="website"
        tags={["CurryDevs", "web development", "React agency", "TypeScript", "Tailwind", "frontend developer India"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://currydevs.com/",
          "name": "CurryDevs",
          "description": "Web Development & Design Agency building modern, high-performance websites and apps",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://currydevs.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          "publisher": {
            "@type": "Organization",
            "name": "CurryDevs",
            "logo": "https://currydevs.com/logo.png"
          }
        }}
      />
      
      <div className="min-h-screen bg-brand-bg">
        <AdvancedHeader />
        <main>
          <HeroSection />
          <ProjectSection />
          <ProjectFeatureSection data={projectData} />
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
    </>
  );
};

export default Index;