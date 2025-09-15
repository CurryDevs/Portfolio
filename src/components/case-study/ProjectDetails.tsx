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

const ProjectDetails = ({ headline, summary, client, duration, timeline, challenge, solution }: ProjectDetailsProps) => {
  useScrollAnimation();

  return (
    <section className="py-16 md:py-24 lg:py-32 px-2 sm:px-4 md:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollAnimateWrapper id="details-header" className="text-center mb-10 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-medium text-foreground">Project Overview</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-section-title text-foreground mb-3 sm:mb-6">
            Transforming Digital Experiences
          </h2>
          <p className="text-sm sm:text-base md:text-body-large text-text-secondary max-w-md sm:max-w-2xl md:max-w-3xl mx-auto">
            A comprehensive redesign project that redefined user experience standards
            and delivered measurable business impact.
          </p>
        </ScrollAnimateWrapper>

        <div className="grid gap-8 md:gap-14 lg:gap-20 items-center grid-cols-1 lg:grid-cols-2">
          {/* Project Info Cards */}
          <ScrollAnimateWrapper id="project-cards" className="space-y-6 sm:space-y-8" delay={200}>
            {/* Client Info */}
            <div className="glass p-4 sm:p-6 md:p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Client</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">{client.name}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                {client.description}
              </p>
            </div>

            {/* Duration */}
            <div className="glass p-4 sm:p-6 md:p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Duration</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">{duration.length}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                {duration.description}
              </p>
            </div>

            {/* Timeline */}
            <div className="glass p-4 sm:p-6 md:p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">Timeline</h3>
                  <p className="text-xs sm:text-sm text-text-secondary">{timeline.description}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-text-secondary leading-relaxed">
                {timeline.description}
              </p>
            </div>
          </ScrollAnimateWrapper>

          {/* Challenge vs Solution */}
          <ScrollAnimateWrapper id="challenge-solution" className="space-y-8 sm:space-y-10 md:space-y-12" delay={400}>
            {/* Challenge */}
            <div className="neumorphic-inset p-4 sm:p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">The Challenge</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {challenge.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-text-secondary">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="glass p-4 sm:p-6 md:p-8 rounded-2xl hover-lift">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-foreground">The Solution</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {solution.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <p className="text-xs sm:text-sm md:text-base text-text-secondary">{item}</p>
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