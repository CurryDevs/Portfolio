const steps = [
  { 
    label: "1. Discover", 
    desc: "Clarify goals, scope, constraints." 
  },
  { 
    label: "2. Design", 
    desc: "Wireframes → polished UI with motion." 
  },
  { 
    label: "3. Build", 
    desc: "Component-driven development & CI/CD." 
  },
  { 
    label: "4. Launch", 
    desc: "Perf, SEO, analytics, handover." 
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white/5 backdrop-blur-sm">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-brand-text mb-6">How We Work</h2>
          <p className="text-lg text-brand-text-muted max-w-2xl mx-auto">
            Our proven process ensures your project stays on track, 
            on budget, and exceeds expectations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-accent-primary via-brand-text-muted to-brand-accent-primary"></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="bg-gradient-primary rounded-2xl p-8 shadow-medium">
                    <h3 className="text-2xl font-semibold text-brand-text mb-4">
                      {step.label}
                    </h3>
                    <p className="text-brand-text-muted text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow border-2 border-white/20">
                  <div className="w-6 h-6 bg-brand-accent-primary rounded-full"></div>
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 lg:block hidden"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}