import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Fintech Dashboard",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    summary: "Real-time insights, crisp charts, 99+ Lighthouse.",
    link: "#"
  },
  {
    title: "SaaS Marketing Site",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    summary: "Micro-interactions and layered gradients.",
    link: "#"
  },
  {
    title: "Headless Shop",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
    summary: "Frictionless checkout with Stripe.",
    link: "#"
  }
];

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-float stagger-3"></div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-text mb-6 animate-slide-up">Selected Work</h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto animate-fade-in stagger-2">
            A glimpse into the digital experiences we've crafted for
            forward-thinking companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group bg-card border-white/10 overflow-hidden hover:shadow-strong transition-all duration-500 cursor-pointer hover-lift hover-glow animate-scale-in stagger-${index + 3}`}
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-primary">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover-rotate">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </div>
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brand-text mb-2 group-hover:text-brand-accent-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-text-muted leading-relaxed">
                  {project.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}