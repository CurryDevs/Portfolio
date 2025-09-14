import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2, Smartphone, Monitor } from "lucide-react";
import FullPreview from "./FullPreview";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile' | 'full'>('desktop');

  // Mock image data - in real project these would be actual screenshots
  const images = [
    {
      id: 1,
      title: "Homepage Redesign",
      description: "Clean, modern landing page with improved navigation and hero section",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Homepage"
    },
    {
      id: 2,
      title: "Product Catalog",
      description: "Intuitive product browsing with advanced filtering and search",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Catalog"
    },
    {
      id: 3,
      title: "Checkout Process",
      description: "Streamlined 2-step checkout with progress indicators",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Checkout"
    },
    {
      id: 4,
      title: "User Dashboard",
      description: "Personalized user experience with order history and preferences",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Account"
    },
    {
      id: 5,
      title: "Mobile App",
      description: "Native mobile experience with offline capabilities",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Mobile"
    },
    {
      id: 6,
      title: "Admin Panel",
      description: "Comprehensive admin dashboard for content and order management",
      desktop: "/api/placeholder/1200/800",
      mobile: "/api/placeholder/400/800",
      category: "Admin"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;

    const newIndex = direction === 'prev'
      ? (selectedImage - 1 + images.length) % images.length
      : (selectedImage + 1) % images.length;

    setSelectedImage(newIndex);
  };

  return (
    <section className="py-32 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-section-title mb-6 animate-fade-in">
            Project <span className="text-accentCS">Gallery</span>
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore the complete transformation through interactive previews of key pages and features.
          </p>

          {/* View Toggle */}
          <div className="inline-flex items-center p-1 rounded-full neumorphic-inset animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setViewMode('full')}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${viewMode === 'full'
                ? 'bg-accent text-accentCS-foreground'
                : 'text-text-secondary hover:text-text-primary'
                }`}
            >
              <Maximize2 className="h-4 w-4 mr-2" />
              Full Preview
            </button>
            <button
              onClick={() => setViewMode('desktop')}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${viewMode === 'desktop'
                ? 'bg-accent text-accentCS-foreground'
                : 'text-text-secondary hover:text-text-primary'
                }`}
            >
              <Monitor className="h-4 w-4 mr-2" />
              Desktop
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`flex items-center px-4 py-2 rounded-full transition-all ${viewMode === 'mobile'
                ? 'bg-accent text-accentCS-foreground'
                : 'text-text-secondary hover:text-text-primary'
                }`}
            >
              <Smartphone className="h-4 w-4 mr-2" />
              Mobile
            </button>
          </div>
        </div>

        {/* Gallery Grid or Full Preview */}
        {viewMode === 'full' ? (
          <FullPreview />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl neumorphic hover-lift cursor-pointer animate-scale-in"
                style={{ animationDelay: `${0.1 * index}s` }}
                onClick={() => openLightbox(index)}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-elevated flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                        <Maximize2 className="h-8 w-8 text-accentCS" />
                      </div>
                      <p className="text-text-secondary font-medium">{image.title}</p>
                      <p className="text-sm text-text-muted mt-1">
                        {viewMode === 'desktop' && 'Desktop View'}
                        {viewMode === 'mobile' && 'Mobile View'}
                      </p>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Maximize2 className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-medium">View Full Size</p>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-sm font-medium text-accentCS">
                    {image.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accentCS transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-lg flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full glass hover-glow text-text-primary z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass hover-glow text-text-primary z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-3 rounded-full glass hover-glow text-text-primary z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <div className="max-w-6xl w-full max-h-[80vh] relative">
              <div className="neumorphic p-8 rounded-3xl">
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-surface rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent/20 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                      <Monitor className="h-12 w-12 text-accentCS" />
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">
                      {images[selectedImage].title}
                    </h3>
                    <p className="text-text-secondary">
                      {images[selectedImage].description}
                    </p>
                  </div>
                </div>

                {/* Image Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {images[selectedImage].title}
                    </h3>
                    <p className="text-text-secondary">
                      {images[selectedImage].description}
                    </p>
                  </div>
                  <div className="text-text-muted text-sm">
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