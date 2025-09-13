// Inline SVGs for each tech stack item
const techIcons = [
  {
    name: "React 18",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">TS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <path d="M12 6.5c-2.5 0-4 1.5-4.5 4.5.5-1.5 1.5-2 3-2 1.2 0 2 .6 2.5 1.8.5 1.2 1.3 1.7 2.5 1.7 2 0 3-1.2 3-3.5-.5 2-1.5 2.5-3 2.5-1.2 0-2-.6-2.5-1.8-.5-1.2-1.3-1.7-2.5-1.7z" fill="#38BDF8" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#fff" />
        <path d="M6 3h12v6l-6 6H6V3zm0 12h6v6H6v-6z" fill="#0055FF" />
      </svg>
    ),
  },
  {
    name: "React Native",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <circle cx="12" cy="12" r="10" fill="#61DAFB" />
        <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Expo",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <circle cx="12" cy="12" r="10" fill="#000" />
        <path d="M8 16l4-8 4 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill="#8CC84B" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Node</text>
      </svg>
    ),
  },
  {
    name: "Express",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#fff" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#000" fontWeight="bold">Ex</text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="7" fill="#336791" />
        <text x="12" y="15" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">PG</text>
      </svg>
    ),
  },
  {
    name: "Redis",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#D82C20" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Redis</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#FF9900" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">AWS</text>
      </svg>
    ),
  },
  {
    name: "Docker",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#2496ED" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">Docker</text>
      </svg>
    ),
  },
  {
    name: "Kubernetes",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <circle cx="12" cy="12" r="10" fill="#326CE5" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">K8s</text>
      </svg>
    ),
  },
  {
    name: "CloudFront",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#FF9900" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">CF</text>
      </svg>
    ),
  },
  {
    name: "Webpack 5",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <polygon points="12,2 22,7 12,22 2,7" fill="#8ED6FB" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#1C78C0" fontWeight="bold">WP</text>
      </svg>
    ),
  },
  {
    name: "PWA",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#5A0FC8" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">PWA</text>
      </svg>
    ),
  },
  {
    name: "Figma",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <circle cx="12" cy="7" r="4" fill="#F24E1E" />
        <circle cx="12" cy="17" r="4" fill="#A259FF" />
      </svg>
    ),
  },
  {
    name: "Google Analytics",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#F9AB00" />
        <rect x="7" y="12" width="3" height="5" fill="#fff" />
        <rect x="14" y="8" width="3" height="9" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Mixpanel",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#6C47FF" />
        <circle cx="8" cy="16" r="2" fill="#fff" />
        <circle cx="16" cy="10" r="2" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Hotjar",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#FF5733" />
        <path d="M12 7c2 0 3 2 3 4s-1 4-3 4-3-2-3-4 1-4 3-4z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "OAuth 2.0",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <circle cx="12" cy="12" r="10" fill="#3DAB4A" />
        <rect x="9" y="9" width="6" height="6" rx="3" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "JWT",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#EA7C1A" />
        <text x="12" y="16" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="bold">JWT</text>
      </svg>
    ),
  },
  {
    name: "SSL/TLS",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#007396" />
        <path d="M8 12a4 4 0 1 1 8 0v3H8v-3z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Rate Limiting",
    svg: (
      <svg viewBox="0 0 24 24" className="h-8 w-8 text-accentCS" fill="none">
        <rect width="24" height="24" rx="4" fill="#FFB400" />
        <rect x="10" y="8" width="4" height="8" fill="#fff" />
      </svg>
    ),
  },
];

const TechStack = () => {
  // Duplicate the array for seamless infinite loop
  const loopIcons = [...techIcons, ...techIcons];
  return (
  <section className="py-16 px-4" style={{ background: '#0e0e0e' }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-section-title mb-10 text-white">
          Technology <span className="text-accentCS">Stack</span>
        </h2>
        <div className="relative overflow-hidden">
          {/* Fade overlays for smooth edge transitions */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to right, #0e0e0e 60%, rgba(14,14,14,0.01) 100%)'}} />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10" style={{background: 'linear-gradient(to left, #0e0e0e 60%, rgba(14,14,14,0.01) 100%)'}} />
          <div
            className="flex items-center gap-8 animate-tech-carousel relative"
            style={{
              width: 'max-content',
              animation: 'tech-carousel 30s linear infinite',
            }}
          >
            {loopIcons.map((tech, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[90px]"
              >
                {/* Only the icon, no circle */}
                <div className="mb-2">
                  {tech.svg}
                </div>
                <span className="text-xs text-text-secondary font-medium" style={{color: '#fff'}}>
                  {tech.name}
                </span>
              </div>
            ))}
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
      `}</style>
    </section>
  );
};

export default TechStack;