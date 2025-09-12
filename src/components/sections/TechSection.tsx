import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Cloud, Palette, Zap, Shield } from "lucide-react";

const techCategories = [
  {
    icon: Code2,
    title: "Frontend",
    gradient: "from-blue-500 to-cyan-500",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    icon: Database,
    title: "Backend",
    gradient: "from-green-500 to-emerald-500",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    gradient: "from-purple-500 to-pink-500",
    technologies: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    icon: Palette,
    title: "Design & UI",
    gradient: "from-orange-500 to-red-500",
    technologies: ["Figma", "Storybook", "Radix UI", "Shadcn/ui", "Lucide"]
  },
  {
    icon: Zap,
    title: "Performance",
    gradient: "from-yellow-500 to-orange-500",
    technologies: ["Cloudflare", "Redis", "Prisma", "tRPC", "Zustand"]
  },
  {
    icon: Shield,
    title: "Security & Payments",
    gradient: "from-indigo-500 to-purple-500",
    technologies: ["Auth0", "Stripe", "Clerk", "NextAuth", "Supabase"]
  }
];

export function TechSection() {
  return (
    <section id="tech" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-white/10 mb-6">
            <Code2 className="w-4 h-4 mr-2 text-indigo-400" />
            <span className="text-sm font-medium text-brand-text">Technology Stack</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-text mb-6">
            Technologies We
            <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Master
            </span>
          </h2>
          <p className="text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies and proven frameworks to build scalable,
            performant, and maintainable solutions that stand the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur-sm border-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              <CardContent className="p-8 relative z-10">
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-text mb-4 group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Technology badges */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-white/20 bg-white/5 text-brand-text-muted hover:bg-white/10 group-hover:border-white/30 transition-all duration-300"
                      style={{
                        animationDelay: `${techIndex * 0.1}s`
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-card/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl">💡</span>
                  </div>
                </div>
                <blockquote className="text-xl lg:text-2xl font-medium text-brand-text mb-4 leading-relaxed">
                  "We choose our stack based on what's best for your project, not what's trendy."
                </blockquote>
                <p className="text-brand-text-muted">
                  Our technology decisions are driven by performance, scalability, and long-term maintainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}