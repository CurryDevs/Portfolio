import { AdvancedHeader } from "@/components/layout/AdvancedHeader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import Footer from "@/components/layout/Footer";
import { ProjectCard } from "@/components/layout/ProjectCardSingle";
import projects from "@/data/caseStudy.json";
import SEO from "@/components/seo/SEO";

interface GalleryItem {
  id: string;
  title: string;
  client: string;
  techStack: string[];
  summary: string;
  url: string;
  image: string;
}

interface ProjectsProps {
  items?: GalleryItem[];
}

const CaseStudies = ({ items: propItems = projects }: ProjectsProps) => {
  const items = propItems || projects;

  const pageTitle = "Case Studies | CurryDevs";
  const pageDescription =
    "Explore CurryDevs’ portfolio of client projects. From fintech to automotive, we build modern, scalable web apps with React, TypeScript, Tailwind, and more.";

  const canonicalUrl = "https://currydevs.com/case-studies";

  return (
    <div className="min-h-screen">
      <SEO
        title={pageTitle}
        description={pageDescription}
        url={canonicalUrl}
        image="https://currydevs.com/seo-images/case-studies.png"
        twitterImage="https://currydevs.com/seo-images/twitter-image.png"
        type="website"
        tags={["case studies", "portfolio", "web development projects", "React projects", "TypeScript projects"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: pageTitle,
          description: pageDescription,
          url: canonicalUrl,
          isPartOf: {
            "@type": "WebSite",
            url: "https://currydevs.com",
            name: "CurryDevs",
          },
          mainEntity: items.map((project) => ({
            "@type": "CreativeWork",
            "@id": `https://currydevs.com/case-studies/${project.id}`,
            name: project.title,
            description: project.summary,
            url: `https://currydevs.com/case-studies/${project.id}`,
            image: `https://currydevs.com${project.image}`,
            author: {
              "@type": "Organization",
              name: "CurryDevs",
            },
            about: project.client,
            keywords: project.techStack.filter(Boolean),
          })),
        }}
      />
      
      <AdvancedHeader />
      <main className="max-w-7xl mx-auto px-8 pt-24">
        {/* Section Title */}
        <div className="relative z-10 flex flex-col items-center justify-center mt-12 mb-20 sm:mb-28">
          <div className="inline-flex items-center px-4 py-2 bg-black rounded-full glass mb-8 animate-fade-in">
            <LiquidButton className="max-sm:scale-[0.8] max-md:scale-[0.9] z-10 absolute left-5 top-2 -translate-x-1/2 -translate-y-1/2">
              CASE STUDIES
            </LiquidButton>
          </div>
          <h2 className="text-center text-4xl min-[400px]:text-5xl  font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
            Our Client Projects
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 items-stretch">
          {items.map((project) => (
            <div key={project.id} className="flex">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </main>

      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
};

export default CaseStudies;