import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Smartphone,
  Monitor,
} from "lucide-react";
import React from "react";
import FullPreview from "./FullPreview";

type GalleryProps = {
  livePreview: string;
  mobile : string;
  desktop: { id: number; title: string; description: string; alt?: string; url: string; category: string; }[];
};

const Gallery = ({ livePreview, desktop ,mobile}: GalleryProps) => {
  // Skeleton loading state for images
  const [imageLoaded, setImageLoaded] = useState(Array(desktop.length).fill(false));

  const handleImageLoad = (idx: number) => {
    setImageLoaded(prev => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  // Detect mobile device (simple check)
  const [isMobile, setIsMobile] = useState(false);
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile" | "full">(
    "full"
  );

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (selectedImage === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

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

        {/* Gallery Grid, Mobile Frame, or Full Preview */}
        {viewMode === "full" ? (
          <FullPreview livePreview={livePreview} />
        ) : viewMode === "mobile" ? (
          <div className="flex flex-col items-center justify-center px-4">
            <h4 className="text-md sm:text-base md:text-lg font-semibold text-text-primary mb-8">Interactive Mobile Preview</h4>

            {/* iPhone Frame Container */}
            <div className="flex items-center justify-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              {/* Phone Frame */}
              <div className="relative">
                <div
                  className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-2xl"
                  style={{
                    width: '280px',
                    height: '600px',
                  }}
                >
                  {/* Dynamic Island */}
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

                  {/* Screen */}
                  <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-between px-6 text-white text-sm">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                        </div>
                        <div className="w-6 h-3 border border-white rounded-sm">
                          <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* Website Content - Using iframe for actual website */}
                    <div
                      className="absolute overflow-hidden bg-white"
                      style={{
                        top: '48px',
                        bottom: '12px',
                        left: '0',
                        right: '0',
                        // Allow scrolling but hide scrollbars outside the screen
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        className="w-full h-full"
                        style={{
                          // Create a mask to hide scrollbars outside the screen
                          maskImage: 'linear-gradient(to bottom, black 0%, black 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 100%)',
                          overflow: 'auto',
                          // Ensure scrollbars are positioned outside the visible area
                          paddingRight: '30px', // Push scrollbar to the right
                          marginRight: '-30px', // Pull content back to compensate
                          width: 'calc(100% + 30px)', // Extend width to account for negative margin
                          height: '100%'
                        }}
                      >
                        <iframe
                          src={mobile}
                          className="w-full h-full border-0"
                          title="Mobile Website Preview"
                          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                          loading="lazy"
                          style={{
                            width: '430px',           // iPhone 15 Pro Max viewport width
                            height: '932px',          // iPhone 15 Pro Max viewport height
                            border: 'none',
                            borderRadius: '0',
                            position: 'absolute',
                            left: '-80px',
                            transform: 'scale(0.6)', // scale down to fit inside 280×600 frame
                            transformOrigin: 'top center',
                            overflow: 'hidden',
                            display: 'block'
                          }}
                          scrolling="yes"
                        />

                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
                  </div>

                  {/* Side Buttons */}
                  <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-l-lg" />
                  <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-l-lg" />
                  <div className="absolute left-0 top-48 w-1 h-12 bg-gray-700 rounded-l-lg" />
                  <div className="absolute right-0 top-32 w-1 h-16 bg-gray-700 rounded-r-lg" />
                </div>

                {/* Phone Reflection */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[3rem] pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  }}
                />
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-8 text-center max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-accent/10">
                <div className="text-sm sm:text-md md:text-base text-text-secondary/70">
                  <p>Note: The website is displayed at actual mobile size for authentic experience</p>
                </div>
              </div>
            </div>
          </div>
        ) : isMobile ? (
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-2 pb-6 hide-scrollbar">
            {desktop.map((image, index) => (
              <div
                key={image.id}
                className="min-w-[85vw] max-w-[90vw] snap-center rounded-xl neumorphic hover-lift cursor-pointer animate-scale-in transition-transform duration-300"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface rounded-xl">
                  <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{image.title}</h3>
                  <p className="text-text-secondary text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 min-[461px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-8 px-3 xs:px-4 sm:px-0">
            {desktop.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg sm:rounded-xl neumorphic hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${0.1 * index}s`, maxWidth: '420px', margin: '0 auto' }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  {/* Skeleton Loader for top image */}
                  {!imageLoaded[index] && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse flex items-center justify-center">
                      <div className="w-2/3 h-2/3 bg-gray-200 rounded-lg" />
                    </div>
                  )}
                  <img
                    src={image.url}
                    alt={image.alt || image.title}
                    className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${!imageLoaded[index] ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={() => handleImageLoad(index)}
                  />

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
                <div className="px-3 py-2 sm:p-4">
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-text-primary mb-1 sm:mb-2 group-hover:text-accentCS transition-colors">
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
        {
          selectedImage !== null && (
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
                      alt={desktop[selectedImage].alt || desktop[selectedImage].title}
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
          )
        }
      </div >
    </section >
  );
};

export default Gallery;