import { ReactLenis } from "@studio-freight/react-lenis";
import React, { ReactNode } from "react";

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrolling: React.FC<SmoothScrollingProps> = ({ children }) => {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.99, // Near-instant response
        duration: 0.8, // Less inertia, more direct
        smoothWheel: true,
        wheelMultiplier: 2, // Small wheel movement = more scroll
        touchMultiplier: 2,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScrolling;
