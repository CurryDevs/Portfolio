import { Calendar, Clock, Target, Zap } from "lucide-react";
import { ScrollAnimateWrapper, useScrollAnimation } from "@/hooks/useScrollAnimation";

type ProjectDetailsProps = {
  headline?: string;
  summary?: string;
  client: { name: string; description: string };
  duration: { length: string; description: string };
  timeline: { timeframe: string; description: string };
  challenge: string[];
  solution: string[];
}

const ProjectDetails = ({headline, summary, client, duration, timeline, challenge, solution}: ProjectDetailsProps) => {
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
                  <p className="text-text-secondary">{client.name}</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {client.description}
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
                  <p className="text-text-secondary">{duration.length}</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {duration.description}
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
                  <p className="text-text-secondary">{timeline.description}</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {timeline.description}
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
                {challenge.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white/50 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-text-secondary">{item}</p>
                  </div>
                ))}
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
                {solution.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimateWrapper>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;