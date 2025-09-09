import { Badge } from "@/components/ui/badge";

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "Postgres", 
  "Tailwind", "Framer Motion", "Vercel", "Cloudflare", "Stripe"
];

export function TechSection() {
  return (
    <section id="tech" className="py-24 lg:py-32 bg-white/5 backdrop-blur-sm">
      <div className="container-custom text-center">
        <div className="mb-16">
          <h2 className="text-h2 text-brand-text mb-6">Tech We Love</h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            We work with the best tools in the industry to deliver 
            cutting-edge solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <Badge 
              key={tech} 
              variant="outline"
              className="px-6 py-3 text-base border-white/20 bg-white/10 text-brand-text hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-default backdrop-blur-sm"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-primary rounded-3xl shadow-medium max-w-2xl mx-auto">
          <p className="text-brand-text-muted italic">
            "We choose our stack based on what's best for your project, 
            not what's trendy."
          </p>
        </div>
      </div>
    </section>
  );
}