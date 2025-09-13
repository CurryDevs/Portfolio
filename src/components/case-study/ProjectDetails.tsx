import { Calendar, Clock, Target, Zap } from "lucide-react";
import { ScrollAnimateWrapper, useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectDetails = () => {
  useScrollAnimation();
  
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimateWrapper id="details-header" className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm font-medium text-foreground">Project Overview</span>
          </div>
          <h2 className="text-section-title text-foreground mb-6">
            Transforming Digital Experiences
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            A comprehensive redesign project that redefined user experience standards 
            and delivered measurable business impact.
          </p>
        </ScrollAnimateWrapper>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Project Info Cards */}
          <ScrollAnimateWrapper id="project-cards" className="space-y-8" delay={200}>
            {/* Client Info */}
            <div className="glass p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Client</h3>
                  <p className="text-text-secondary">Fortune 500 E-commerce</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                A leading retail company looking to modernize their digital presence 
                and improve customer engagement across all platforms.
              </p>
            </div>

            {/* Duration */}
            <div className="glass p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Duration</h3>
                  <p className="text-text-secondary">6 Months</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Intensive design and development sprint from initial research 
                to final launch and optimization.
              </p>
            </div>

            {/* Timeline */}
            <div className="glass p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Timeline</h3>
                  <p className="text-text-secondary">Q1 2024</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                Strategic planning, rapid prototyping, and agile development 
                delivered on schedule and within budget.
              </p>
            </div>
          </ScrollAnimateWrapper>

          {/* Challenge vs Solution */}
          <ScrollAnimateWrapper id="challenge-solution" className="space-y-12" delay={400}>
            {/* Challenge */}
            <div className="neumorphic-inset p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Challenge</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">Outdated user interface causing high bounce rates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">Poor mobile experience affecting conversions</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">Complex checkout process losing customers</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">Inconsistent brand experience across platforms</p>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="glass p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">The Solution</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">Modern, intuitive interface with improved navigation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">Mobile-first responsive design optimized for all devices</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">Streamlined one-click checkout with multiple payment options</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-text-secondary">Cohesive design system ensuring brand consistency</p>
                </div>
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;