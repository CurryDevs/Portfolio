import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import Index from "./pages/Index";
import CaseStudy from "./pages/CaseStudy";
import CaseStudies from "./pages/CaseStudies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  function ScrollToTop() {
    const { key } = useLocation();

    useLayoutEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [key]);

    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/benefits" element={<Index scrollTo="benefits" />} />
            <Route path="/services" element={<Index scrollTo="services" />} />
            <Route
              path="/project"
              element={<Index scrollTo="project-section" />}
            />
            <Route path="/faqs" element={<Index scrollTo="faqs" />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudy />} />
            <Route
              path="/case-studies/:id/project-overview"
              element={<CaseStudy scrollTo="project-details" />}
            />
            <Route
              path="/case-studies/:id/tech-stack"
              element={<CaseStudy scrollTo="tech-stack" />}
            />
            <Route
              path="/case-studies/:id/project-gallery"
              element={<CaseStudy scrollTo="project-gallery" />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
