"use client";
import { Button } from "@/components/ui/button";
import { AnimatedText } from "@/components/ui/animatedText";

const avatars = [
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
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
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5">
                Explore Collection
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-brand-text hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                Unlock Unlimited Access
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="space-y-6 animate-fade-in stagger-4">
              <p className="text-sm text-brand-text-muted">
                Trusted by Founders and Entrepreneurs from all over the world.
              </p>

              {/* Avatars */}
              <div className="flex justify-center items-center gap-2 mb-8">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`User ${index + 1}`}
                    className="w-10 h-10 rounded-full border-2 border-white/20 -ml-2 first:ml-0 hover:scale-110 transition-transform duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
