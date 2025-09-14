import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";

type HeroSectionProps = {
  category: string;
  headline: {h1: string; h2: string};
  subtitle: string;
  cta: { label: string; url: string }[];
};

const HeroSection = ({ category, headline, subtitle, cta }: HeroSectionProps) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create the stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xbbbbbb,
      size: 0.7,
      opacity: 0.9,
      transparent: true
    });

    // Create a buffer for the stars
    const starCount = 10000;
    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Create the stars in the scene
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Set camera position
    camera.position.z = 5;

    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      
      // Rotate the stars for movement effect
      stars.rotation.x += 0.0005;
      stars.rotation.y += 0.0005;

      renderer.render(scene, camera);
    }

    // Start the animation
    animate();

    // Adjust the canvas size when the window is resized
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Three.js Stars Background */}
      <div ref={mountRef} className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }} />

      {/* Animated Background Spheres */}
      <div className="absolute inset-0 opacity-30 z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full animate-pulse-glow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02] z-10">
        <div className="w-full h-full" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        {/* Project Category */}
        <div className="inline-flex items-center px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="text-sm font-medium text-foreground">{category}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-hero mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <span className="block text-text-secondary text-2xl md:text-3xl font-normal mb-4">
            {headline.h1}
          </span>
          <span className="bg-gradient-to-r from-foreground via-white to-foreground bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
            {headline.h2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-body-large text-text-secondary max-w-3xl mx-auto mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {cta.map((ct, index) => (
            <a
              key={index}
              href={ct.url}
              target={ct.url.startsWith("http") ? "_blank" : undefined} // external links open in new tab
            >
              <Button
                size="lg"
                variant={index === 0 ? "default" : "outline"} // styling based on order
                className="group px-8 py-4 text-lg font-semibold hover-lift"
              >
                {ct.label}
                {index === 0 ? (
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                )}
              </Button>
            </a>
          ))}
        </div>


        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;