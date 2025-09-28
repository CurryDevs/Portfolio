// src/pages/CaseStudy.tsx
import HeroSection from "@/components/case-study/HeroSection";
import ProjectDetails from "@/components/case-study/ProjectDetails";
import TechStack from "@/components/case-study/TechStack";
import Gallery from "@/components/case-study/Gallery";
import Footer from "@/components/layout/Footer";
import { AdvancedHeader } from "@/components/layout/AdvancedHeader";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import projects from "@/data/projects.json";
import SEO from "@/components/seo/SEO";

export type SectionLink = {
  name: string;
  link: string;
};

const CaseStudy = ({ scrollTo }: { scrollTo?: string }) => {
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo, location]);

  const project = projects.find((item) => item.id === id);

  if (!project)
    return <div className="text-center mt-20 text-red-500">Project not found</div>;

  const footerLinks: SectionLink[] = [
    { name: "Home", link: `/case-studies/${id}/` },
    { name: "Overview", link: `/case-studies/${id}/project-overview` },
    { name: "Technology", link: `/case-studies/${id}/tech-stack` },
    { name: "Gallery", link: `/case-studies/${id}/project-gallery` },
  ];

  // Breadcrumb structured data
  const breadcrumbs = [
    { position: 1, name: "Home", item: "https://currydevs.com/" },
    { position: 2, name: "Case Studies", item: "https://currydevs.com/case-studies" },
    { position: 3, name: project.title, item: `https://currydevs.com/case-studies/${project.id}` },
  ];

  return (
    <div className="min-h-screen">
      {/* SEO */}
      <SEO
        title={`${project.title} | CurryDevs`}
        description={project.components.ProjectDetails.summary}
        url={project.canonical}
        image={project.curryPreview}
        twitterImage="https://currydevs.com/seo-images/twitter-image.png"
        type="article"
        publishedTime={project.publishedTime}
        modifiedTime={project.modifiedTime}
        author="CurryDevs"
        tags={project.tags}
        canonical={project.canonical}
        breadcrumbs={breadcrumbs}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.components.ProjectDetails.summary,
          url: project.canonical,
          image: project.components.Gallery.livePreview,
          creator: {
            "@type": "Organization",
            name: "CurryDevs",
            url: "https://currydevs.com",
          },
          keywords: project.tags.join(", "),
          about: project.components.HeroSection.headline.h2,
        }}
      />

      <AdvancedHeader />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="sr-only">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/case-studies">Case Studies</a></li>
          <li>{project.title}</li>
        </ol>
      </nav>

      <main>
        <HeroSection {...project.components.HeroSection} />
        <ProjectDetails {...project.components.ProjectDetails} />
        <TechStack techStack={project.components.TechStack} />
        <Gallery {...project.components.Gallery} />
      </main>

      <div className="mt-10">
        <Footer sectionLinks={footerLinks} />
      </div>
    </div>
  );
};

export default CaseStudy;