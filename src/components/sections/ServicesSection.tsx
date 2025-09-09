import { Globe, Zap, ShoppingCart, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: Globe,
    title: "Product Websites",
    description: "Launch-ready marketing sites with dazzling performance.",
    tags: ["SEO", "A/B ready", "CMS optional"]
  },
  {
    icon: Zap,
    title: "Web Applications",
    description: "SaaS dashboards and tooling that scale cleanly.",
    tags: ["Next.js", "tRPC/REST", "Auth"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Conversion-first storefronts with smooth UX.",
    tags: ["Headless", "Stripe", "Analytics"]
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Reusable components and tokens that speed teams up.",
    tags: ["Figma", "Storybook", "Accessibility"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-text mb-6">Services</h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            From concept to launch, we handle every aspect of your web presence 
            with precision and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group bg-card border-white/10 hover:shadow-medium hover:scale-105 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="h-7 w-7 text-brand-text" />
                  </div>
                  <h3 className="text-xl font-semibold text-brand-text mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-text-muted leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline"
                      className="text-xs border-white/20 bg-white/5 text-brand-text-muted hover:bg-white/10 transition-smooth"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}