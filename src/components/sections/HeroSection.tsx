import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const badges = ["Web Apps", "Landing Pages", "SaaS", "E-commerce"];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-glow opacity-60"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-gradient-to-br from-brand-accent-primary/20 to-transparent blur-3xl animate-pulse-glow"></div>
      </div>

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float stagger-1"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-white/10 rounded-full animate-float stagger-3"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-white/30 rounded-full animate-float stagger-5"></div>

      <div className="relative z-10 container-custom text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eyebrow */}
          <div className="text-eyebrow animate-fade-in stagger-1">
            CurryDevs
          </div>

          {/* Main heading */}
          <h1 className="text-hero text-brand-text leading-tight animate-slide-up stagger-2">
            We craft fast, elegant{" "}
            <span className="bg-gradient-to-r from-brand-accent-primary via-white to-brand-text-muted bg-clip-text text-transparent animate-gradient-shift">
              web experiences
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-brand-text-muted max-w-2xl mx-auto leading-relaxed animate-slide-up stagger-3">
            Modern frontend, solid backend, and a product mindset.
            Your idea, our code.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in stagger-4">
            <Button variant="hero" size="xl" asChild className="hover-lift hover-glow">
              <a href="#contact">Get a Quote</a>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild className="hover-lift">
              <a href="#case-studies">View Work</a>
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in stagger-5">
            {badges.map((badge, index) => (
              <Badge
                key={badge}
                variant="outline"
                className={`px-4 py-2 text-sm border-white/20 bg-white/5 text-brand-text hover:bg-white/10 transition-smooth backdrop-blur-sm hover-scale animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce-subtle stagger-6">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover-glow cursor-pointer">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}