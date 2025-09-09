const clients = [
  "TechCorp", "InnovateHub", "DataFlow", "CloudVision", "NextGen", 
  "DigitalFirst", "ScaleUp", "FutureWorks", "CodeCraft", "WebForge"
];

export function LogoMarquee() {
  return (
    <section className="py-16 border-y border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-brand-text-muted text-sm mb-8 uppercase tracking-wide">
          Trusted by innovative companies
        </p>
        
        {/* Marquee container */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-bg via-brand-bg/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-bg via-brand-bg/80 to-transparent z-10"></div>
          
          {/* Marquee content */}
          <div className="flex">
            <div className="flex items-center space-x-16 animate-marquee">
              {/* First set */}
              {clients.map((client, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 text-2xl font-heading font-semibold text-brand-text-muted hover:text-brand-text transition-smooth cursor-default"
                >
                  {client}
                </div>
              ))}
            </div>
            
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-16 animate-marquee ml-16">
              {clients.map((client, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 text-2xl font-heading font-semibold text-brand-text-muted hover:text-brand-text transition-smooth cursor-default"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}