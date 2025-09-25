"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animatedText";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Kshitij Singh Bisht",
    designation: "Co-Founder | Software Engineer",
    image: "/kshitij.jpg",
    portfolio: "https://kshitijbisht.vercel.app/",
    github: "https://github.com/hailex798/",
    linkedIn: "https://www.linkedin.com/in/kshitijsinghbisht/",
  },
  {
    id: 2,
    name: "Mohit Singh",
    designation: "Co-Founder | Software Engineer",
    image: "mohit.jpg",
    portfolio: "https://mohitsinghgarryportfolio.vercel.app/",
    github: "https://github.com/mohitsinghgarry/",
    linkedIn: "https://www.linkedin.com/in/mohit-singh-95a883225/",
  },
  {
    id: 3,
    name: "Gautam Gupta",
    designation: "Co-Founder | Software Engineer",
    image: "/gautam.png",
    portfolio: "https://gautamgupta24.netlify.app/",
    github: "https://github.com/24-gautam/",
    linkedIn: "https://www.linkedin.com/in/gautam-gupta-gg24/",
  },
];

export function HeroSection() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const openCalendlyInNewTab = () => {
    // Open Calendly in a new tab
    window.open("https://cal.com/currydevs/30min", "_blank");
  };

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 375);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg2.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 90%, transparent 100%)",
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container-custom text-center py-20 pt-40 max-[600px]:pt-32">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight animate-slide-up">
            <AnimatedText text="Build world class websites at warp speed" />
          </h1>

          {/* Subheading */}
          <p className="text-base max-[640px]:text-[0.9rem] sm:1xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-2">
            Access an ever-growing collection of premium, meticulously crafted
            templates and component packs.
          </p>

          {/* CTAs */}
          <div className="flex flex-col min-[240px]:flex-row gap-4 justify-center items-center animate-scale-in stagger-3">
            <Button className="bg-black text-white border border-white hover:bg-white hover:text-black hover:border-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5">
              Projects
            </Button>
            <Button
              onClick={openCalendlyInNewTab}
              className="bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white max-[375px]:px-8 max-[410px]:px-4 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
            >
              {isSmallScreen ? "Book a Call" : "Book a Call with Currydevs"}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="space-y-6 animate-fade-in stagger-4">
            <p className="text-sm text-brand-text-muted">
              Meet our passionate Co-Founders leading the way.
            </p>

            {/* Animated Avatars with Tooltip */}
            <div className="flex justify-center items-center mb-8">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
