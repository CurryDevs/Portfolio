import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Smartphone,
  Monitor,
} from "lucide-react";
import FullPreview from "./FullPreview";

type GalleryProps = {
  caseStudy: string;
  livePreview: string;
  desktop: { id: number; title: string; description: string; url: string; category: string; }[];
};

const Gallery = ({ caseStudy, livePreview, desktop }: GalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile" | "full">(
    "full"
  );

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const newIndex =
      direction === "prev"
        ? (selectedImage - 1 + desktop.length) % desktop.length
        : (selectedImage + 1) % desktop.length;

    setSelectedImage(newIndex);
  };

  return (
    <section id="project-gallery" className="py-20 px-2 sm:py-28 sm:px-4 md:py-32 md:px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
              PROOF-OF-WORK
            </span>
            <h2 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
              Project Gallery
            </h2>
          </div>

          {/* View Toggle */}
          <div
            className="inline-flex flex-wrap items-center p-0.5 sm:p-1 rounded-full neumorphic-inset animate-fade-in gap-0.5 sm:gap-1"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => setViewMode("full")}
              className={`flex items-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all text-xs sm:text-sm font-medium leading-tight ${viewMode === "full"
                ? "bg-accent text-accentCS-foreground shadow-sm"
                : "text-text-secondary hover:text-text-primary"
                }`}
              style={{ minWidth: "0", minHeight: "0" }}
            >
              <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Full Preview
            </button>
            <button
              onClick={() => setViewMode("desktop")}
              className={`flex items-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all text-xs sm:text-sm font-medium leading-tight ${viewMode === "desktop"
                ? "bg-accent text-accentCS-foreground shadow-sm"
                : "text-text-secondary hover:text-text-primary"
                }`}
              style={{ minWidth: "0", minHeight: "0" }}
            >
              <Monitor className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Desktop
            </button>
            <button
              onClick={() => setViewMode("mobile")}
              className={`flex items-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all text-xs sm:text-sm font-medium leading-tight ${viewMode === "mobile"
                ? "bg-accent text-accentCS-foreground shadow-sm"
                : "text-text-secondary hover:text-text-primary"
                }`}
              style={{ minWidth: "0", minHeight: "0" }}
            >
              <Smartphone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1.5 sm:mr-2" />
              Mobile
            </button>
          </div>
        </div>

        {/* Gallery Grid or Full Preview */}
        {viewMode === "full" ? (
          <FullPreview livePreview={livePreview} />
        ) : (
          <div className="grid grid-cols-1 min-[461px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-5 md:gap-8">
            {desktop.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-md xs:rounded-lg sm:rounded-xl neumorphic hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <img src={image.url} alt={image.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-accent/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Maximize2 className="h-5 w-5 xs:h-6 xs:w-6 sm:h-8 sm:w-8 mx-auto mb-1.5 xs:mb-2 sm:mb-2" />
                      <p className="font-medium text-[0.8rem] xs:text-xs sm:text-base">
                        View Full Size
                      </p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-1 left-1 xs:top-2 xs:left-2 sm:top-4 sm:left-4 px-1 xs:px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full glass text-[0.65rem] xs:text-xs sm:text-sm font-medium text-accentCS">
                    {image.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-1.5 xs:p-2 sm:p-4">
                  <h3 className="text-md xs:text-lg sm:text-xl font-semibold text-text-primary mb-0.5 xs:mb-1 sm:mb-2 group-hover:text-accentCS transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-text-secondary font-thin text-xs sm:text-sm md:text-base">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center pt-16 sm:pt-24 p-2 sm:p-4 overflow-y-auto"
            onClick={(e) => {
              // Only close if clicking the overlay, not the modal content
              if (e.target === e.currentTarget) {
                closeLightbox();
              }
            }}
          >
            {/* Image Container - responsive and centered */}
            <div className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[80vh] relative flex items-center justify-center">
              <div className="neumorphic p-2 xs:p-3 sm:p-4 md:p-6 md:pt-2 rounded-xl sm:rounded-xl md:rounded-xl w-full flex flex-col items-center justify-center shadow-xl border border-accent/10 relative"
                onClick={e => e.stopPropagation()}>
                {/* Close Button - minimal top spacing */}
                <div className="w-full flex justify-end items-center mb-0">
                  <button
                    onClick={closeLightbox}
                    className="p-2 rounded-full glass hover-glow text-text-primary z-10"
                    style={{ marginTop: 0 }}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                {/* Actual Image Display - restored previous image sizing */}
                <div className="aspect-[16/10] bg-surface rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-2 sm:mb-4 overflow-hidden w-full">
                  <img
                    src={desktop[selectedImage].url}
                    alt={desktop[selectedImage].title}
                    className="w-full h-auto max-h-[35vh] xs:max-h-[40vh] sm:max-h-[45vh] md:max-h-[50vh] object-contain rounded-lg sm:rounded-xl md:rounded-2xl"
                    style={{ maxWidth: '100%' }}
                  />
                </div>
                {/* Title and Description - centered, responsive */}
                <div className="w-full text-center mb-2 sm:mb-4 px-1 xs:px-2">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-text-primary mb-1">
                    {desktop[selectedImage].title}
                  </h3>
                  <p className="text-text-secondary text-xs xs:text-sm sm:text-base md:text-lg">
                    {desktop[selectedImage].description}
                  </p>
                </div>
                {/* Navigation - below text, centered for mobile/tablet */}
                <div className="w-full flex flex-row items-center justify-center gap-4 mb-2 sm:mb-4">
                  <button
                    onClick={() => navigateImage('prev')}
                    className="p-2 sm:p-3 rounded-full glass hover-glow text-text-primary"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                  <span className="text-text-muted text-xs xs:text-sm sm:text-base">
                    {selectedImage + 1} of {desktop.length}
                  </span>
                  <button
                    onClick={() => navigateImage('next')}
                    className="p-2 sm:p-3 rounded-full glass hover-glow text-text-primary"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
