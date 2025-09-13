import { Globe, Zap, ShoppingCart, Layers, Code2, Smartphone, Database, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    tags: ["React", "Next.js", "TypeScript"],
    gradient: "from-blue-500 to-cyan-500",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.",
    tags: ["React Native", "Flutter", "Swift"],
    gradient: "from-purple-500 to-pink-500",
    features: ["Cross-Platform", "Native Performance", "App Store Ready"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and conversion optimization.",
    tags: ["Shopify", "WooCommerce", "Stripe"],
    gradient: "from-green-500 to-emerald-500",
    features: ["Payment Gateway", "Inventory System", "Analytics"]
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side solutions with robust APIs, database design, and cloud infrastructure.",
    tags: ["Node.js", "Python", "PostgreSQL"],
    gradient: "from-orange-500 to-red-500",
    features: ["RESTful APIs", "Database Design", "Cloud Hosting"]
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Comprehensive design systems and UI component libraries that ensure consistency across your products.",
    tags: ["Figma", "Storybook", "Tailwind"],
    gradient: "from-indigo-500 to-purple-500",
    features: ["Component Library", "Design Tokens", "Documentation"]
  },
  {
    icon: Shield,
    title: "DevOps & Security",
    description: "Secure deployment pipelines, monitoring, and infrastructure management for reliable applications.",
    tags: ["Docker", "AWS", "CI/CD"],
    gradient: "from-teal-500 to-blue-500",
    features: ["Automated Deployment", "Security Audits", "Performance Monitoring"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 mb-6">
            <Code2 className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium text-brand-text">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6">
            Comprehensive Digital
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we deliver end-to-end digital solutions that drive growth,
            enhance user experience, and scale with your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-brand-text-muted leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Features list */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-brand-text-muted group-hover:text-gray-300 transition-colors duration-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs border-white/20 bg-white/5 text-brand-text-muted hover:bg-white/10 group-hover:border-white/30 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Learn more button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/10"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}