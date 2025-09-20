import {
  SiReact, SiTypescript, SiTailwindcss, SiFramer, SiExpo, SiExpress, SiPostgresql, SiRedis,
  SiKubernetes, SiAmazonwebservices, SiGoogleanalytics, SiMixpanel, SiHotjar, SiAuth0, SiJsonwebtokens, SiSst, SiMdx, SiJavascript, SiHtml5, SiCss3, SiAstro, SiVercel
} from "react-icons/si";
import { FaNodeJs, FaAws, FaDocker, FaFigma } from "react-icons/fa";
import { MdInstallMobile, MdSpeed } from "react-icons/md";

// Map icon string to actual component
const iconMap = {
  SiReact, SiTypescript, SiTailwindcss, SiFramer, SiExpo, FaNodeJs, SiExpress, SiPostgresql, SiRedis,
  FaAws, FaDocker, SiKubernetes, SiAmazonwebservices, FaFigma, SiGoogleanalytics, SiMixpanel, SiHotjar,
  SiAuth0, SiJsonwebtokens, SiSst, MdInstallMobile, MdSpeed, SiMdx, SiJavascript, SiHtml5, SiCss3, SiAstro, SiVercel
};

const TechStack = ({ techStack }) => {
  // Duplicate the array for seamless infinite loop
  const allTechs = [
    ...techStack.frontend,
    ...techStack.mobile,
    ...techStack.backend,
    ...techStack.devops,
    ...techStack.tools,
    ...techStack.security
  ];

  const loopIcons = [...allTechs, ...allTechs];

  return (
    <section id="tech-stack" className="py-8 md:py-16 mb-4 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
            CUTTING-EDGE
          </span>
          <h2 className="mb-12 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
            Technology Stack
          </h2>
        </div>
        <div className="relative overflow-hidden">
          {/* Fade overlays for smooth edge transitions */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-28 z-10" style={{ background: 'linear-gradient(to right, #090a0b 60%, rgba(14,14,14,0.01) 100%)' }} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-28 z-10" style={{ background: 'linear-gradient(to left, #090a0b 60%, rgba(14,14,14,0.01) 100%)' }} />
          <div
            className="flex items-center gap-4 md:gap-8 animate-tech-carousel relative"
            style={{
              width: 'max-content',
            }}
          >
            {loopIcons.map((tech, idx) => {
              const Icon = iconMap[tech.icon];
              return (
                <div key={idx} className="flex flex-col items-center justify-center min-w-[60px] md:min-w-[90px]">
                  <div className="mb-1 md:mb-2">
                    {Icon && <Icon className="h-8 w-8 md:h-12 md:w-12 text-accentCS" />}
                  </div>
                  <span className="text-xs md:text-xs text-text-secondary font-medium" style={{ color: '#fff', fontSize: '10px' }}>
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Carousel animation keyframes and fade effect */}
      <style>{`
        @keyframes tech-carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-tech-carousel {
          animation: tech-carousel 30s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-tech-carousel {
            animation: tech-carousel 20s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;