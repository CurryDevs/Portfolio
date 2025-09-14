import { useEffect, useState } from 'react';

export const useScrollAnimation = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const id = target.dataset.animateId;
          
          if (entry.isIntersecting && id) {
            setAnimatedElements(prev => new Set(prev).add(id));
            target.classList.add('animate-fade-in');
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    // Observe all elements with data-animate-id
    const elements = document.querySelectorAll('[data-animate-id]');
    elements.forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.6s ease-out';
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return animatedElements;
};

export const ScrollAnimateWrapper = ({ 
  children, 
  id, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  id: string; 
  className?: string;
  delay?: number;
}) => {
  return (
    <div 
      data-animate-id={id}
      className={className}
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: 0,
        transform: 'translateY(30px)'
      }}
    >
      {children}
    </div>
  );
};