"use client";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animatedText";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Kshitij Singh Bisht",
    designation: "Co-Founder | Software Engineer",
    image:
      "/kshitij.jpg",
  },
  {
    id: 2,
    name: "Mohit Singh",
    designation: "Co-Founder | Software Engineer",
    image:
      "mohit.jpg",
  },
  {
    id: 3,
    name: "Gautam Gupta",
    designation: "Co-Founder | Software Engineer",
    image:"/gautam.png"  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden "
      >
        <div className="relative z-10 container-custom text-center py-20 pt-40">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-text leading-tight animate-slide-up">
              <AnimatedText text="Build world class websites at warp speed" />
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-brand-text-muted max-w-3xl mx-auto leading-relaxed animate-slide-up stagger-2">
              Access an ever-growing collection of premium, meticulously crafted
              templates and component packs.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in stagger-3">
              <Button
                className="bg-black text-white border border-white hover:bg-white hover:text-black hover:border-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Projects
              </Button>
              <Button
                className="bg-white text-black border border-black hover:bg-black hover:text-white hover:border-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Book a Call with Currydevs
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
    </section>
  );
}
