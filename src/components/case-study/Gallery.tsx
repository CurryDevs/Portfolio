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

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile" | "full">(
    "desktop"
  );

  // Mock image data - in real project these would be actual screenshots
  const images = [
    {
      id: 1,
      title: "Homepage Redesign",
      description:
        "Clean, modern landing page with improved navigation and hero section",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Homepage",
    },
    {
      id: 2,
      title: "Product Catalog",
      description:
        "Intuitive product browsing with advanced filtering and search",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Catalog",
    },
    {
      id: 3,
      title: "Checkout Process",
      description: "Streamlined 2-step checkout with progress indicators",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Checkout",
    },
    {
      id: 4,
      title: "User Dashboard",
      description:
        "Personalized user experience with order history and preferences",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Account",
    },
    {
      id: 5,
      title: "Mobile App",
      description: "Native mobile experience with offline capabilities",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Mobile",
    },
    {
      id: 6,
      title: "Admin Panel",
      description:
        "Comprehensive admin dashboard for content and order management",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Admin",
    },
  ];

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
        ? (selectedImage - 1 + images.length) % images.length
        : (selectedImage + 1) % images.length;

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
          <FullPreview />
        ) : (
          <div className="grid grid-cols-1 min-[461px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 xs:gap-3 sm:gap-5 md:gap-8">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-md xs:rounded-lg sm:rounded-xl neumorphic hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-elevated flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 xs:w-9 xs:h-9 sm:w-12 sm:h-12 bg-accent/20 rounded-md xs:rounded-lg sm:rounded-xl flex items-center justify-center mb-1.5 xs:mb-2 sm:mb-3 mx-auto">
                        <Maximize2 className="h-4 w-4 xs:h-5 xs:w-5 sm:h-7 sm:w-7 text-accentCS" />
                      </div>
                      <p className="text-text-secondary font-medium text-[0.75rem] xs:text-xs sm:text-base">
                        {image.title}
                      </p>
                      <p className="text-[0.65rem] xs:text-xs sm:text-sm text-text-muted mt-0.5 xs:mt-1">
                        {viewMode === "desktop" && "Desktop View"}
                        {viewMode === "mobile" && "Mobile View"}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-1 xs:p-2 sm:p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full glass hover-glow text-text-primary z-10"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full glass hover-glow text-text-primary z-10"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full glass hover-glow text-text-primary z-10"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Image Container */}
            <div className="w-full max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-6xl max-h-[80vh] relative">
              <div className="neumorphic p-2 xs:p-4 sm:p-8 rounded-2xl sm:rounded-3xl">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-surface rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 bg-accent/20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                      <Monitor className="h-8 w-8 sm:h-12 sm:w-12 text-accentCS" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-text-primary mb-1 sm:mb-2">
                      {images[selectedImage].title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-base">
                      {images[selectedImage].description}
                    </p>
                  </div>
                </div>

                {/* Image Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <div>
                    <h3 className="text-base sm:text-xl font-semibold text-text-primary">
                      {images[selectedImage].title}
                    </h3>
                    <p className="text-text-secondary text-xs sm:text-base">
                      {images[selectedImage].description}
                    </p>
                  </div>
                  <div className="text-text-muted text-xs sm:text-sm">
                    {selectedImage + 1} of {images.length}
                  </div>
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
