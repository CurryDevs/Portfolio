import { CheckCircle } from "lucide-react";

const highlights = [
  "Frontend excellence (React/Next/Vue)",
  "Robust backends (Node, Python, Postgres)",
  "Design systems & accessibility baked in"
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-h2 text-brand-text mb-6">About Us</h2>
              <p className="text-lg text-brand-text-muted leading-relaxed mb-8">
                We're a tight team of engineers and designers. We ship quickly, 
                communicate clearly, and obsess over details that make your users smile.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-accent-primary flex-shrink-0 mt-0.5" />
                  <p className="text-brand-text">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-brand-text-muted italic">
                "Crafted with care, shipped with confidence."
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-primary rounded-3xl p-8 shadow-medium relative overflow-hidden">
              {/* Code preview mockup */}
              <div className="bg-black/20 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm text-brand-text-muted font-mono">
                  <div className="text-blue-300">const</div>
                  <div className="ml-4 text-brand-text">magic = await craftWebsite({'{'}
</div>
                  <div className="ml-8 text-green-300">performance: "blazing",</div>
                  <div className="ml-8 text-green-300">design: "stunning",</div>
                  <div className="ml-8 text-green-300">code: "clean"</div>
                  <div className="ml-4 text-brand-text">{'}'});</div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-accent-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-purple/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}