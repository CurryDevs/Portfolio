import { useState, useEffect } from "react";
import { TrendingUp, Users, Clock, Star } from "lucide-react";

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);

  const metrics = [
    {
      icon: TrendingUp,
      value: 340,
      suffix: "%",
      label: "Conversion Rate Increase",
      description: "From 2.1% to 9.2% across all devices",
      color: "accent"
    },
    {
      icon: Users,
      value: 89,
      suffix: "%",
      label: "User Satisfaction",
      description: "Based on post-launch user surveys",
      color: "accent"
    },
    {
      icon: Clock,
      value: 73,
      suffix: "%",
      label: "Faster Checkout",
      description: "Average checkout time reduced to 1.8 minutes",
      color: "accent"
    },
    {
      icon: Star,
      value: 156,
      suffix: "%",
      label: "Mobile Revenue Growth",
      description: "Mobile sales now account for 68% of total revenue",
      color: "accent"
    }
  ];

  const achievements = [
    "Reduced cart abandonment rate by 52%",
    "Increased average order value by 23%",
    "Improved page load speeds by 4.2 seconds",
    "Achieved 98% accessibility compliance",
    "Implemented in 6 months, 2 weeks ahead of schedule",
    "Generated $2.3M additional revenue in first quarter"
  ];

  // Counter animation hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return count;
  };

  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('results-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="results-section" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-section-title mb-6 animate-fade-in">
            Measurable <span className="text-accentCS">Impact</span>
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            The redesign delivered exceptional results that exceeded all expectations 
            and transformed TechFlow Commerce into an industry leader.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            const animatedValue = useCounter(metric.value, 2500 + index * 200);
            
            return (
              <div 
                key={metric.label}
                className="text-center neumorphic p-8 hover-lift group animate-scale-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-6 group-hover:bg-accent/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-accentCS" />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <span className="text-5xl font-bold text-text-primary">
                    {isVisible ? animatedValue : 0}
                  </span>
                  <span className="text-3xl font-bold text-accentCS">
                    {metric.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-secondary">
                  {metric.description}
                </p>

                {/* Progress Bar */}
                <div className="mt-4 h-1 bg-surface rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-accent/50 transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${0.5 + index * 0.2}s`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Achievements */}
        <div className="neumorphic p-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Key Achievements
            </h3>
            <p className="text-text-secondary">
              Beyond the numbers, here's what we accomplished for TechFlow Commerce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="flex items-center p-4 rounded-lg bg-surface/30 hover:bg-surface/50 transition-colors animate-fade-in-left"
                style={{animationDelay: `${1 + index * 0.1}s`}}
              >
                <div className="w-3 h-3 bg-accent rounded-full mr-4 flex-shrink-0"></div>
                <span className="text-text-primary font-medium">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full glass hover-glow">
            <Star className="h-5 w-5 text-accentCS mr-2" />
            <span className="text-text-primary font-semibold">
              Ready to achieve similar results? Let's discuss your project.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;