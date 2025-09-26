"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ProjectItem = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
  icon?: React.ReactNode;
};

export interface ProjectFeaturesProps {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: "left" | "right" | "top" | "bottom";
  data: ProjectItem[];
  className?: string;
}

const LineProgress: React.FC<{
  position: ProjectFeaturesProps["linePosition"];
  isActive: boolean;
  duration: number;
}> = ({ position, isActive, duration }) => {
  const baseClasses = cn(
    "absolute overflow-hidden",
    position === "left" || position === "right"
      ? "inset-y-0 w-0.5"
      : "inset-x-0 h-0.5",
    "rounded-lg bg-white/20"
  );

  const progressClasses = cn(
    "absolute bg-brand-text transition-all ease-linear",
    position === "left" || position === "right"
      ? "left-0 top-0 w-full"
      : "left-0 h-full",
    position === "left" && "left-0 right-auto",
    position === "right" && "left-auto right-0",
    position === "top" && "top-0",
    position === "bottom" && "bottom-0",
    isActive
      ? position === "left" || position === "right"
        ? "h-full"
        : "w-full"
      : position === "left" || position === "right"
        ? "h-0"
        : "w-0"
  );

  return (
    <div className={baseClasses}>
      <div
        className={progressClasses}
        style={{
          transitionDuration: isActive ? `${duration}ms` : "0s",
          transformOrigin:
            position === "left" || position === "right" ? "top" : "left",
        }}
      />
    </div>
  );
};

const ProjectFeatureSection = ({
  collapseDelay = 8500,
  ltr = false,
  linePosition = "left",
  data = [],
  className,
}: ProjectFeaturesProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setCurrentIndex(0), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, collapseDelay);
    return () => clearInterval(timer);
  }, [collapseDelay, data.length]);

  const MediaContent = () => {
    const currentProject = data[currentIndex];
    if (!currentProject) {
      return (
        <Card className="aspect-auto size-full bg-white/5 border-white/10" />
      );
    }

    if (currentProject.image) {
      return (
        <motion.img
          key={currentIndex}
          src={currentProject.image}
          alt={currentProject.title}
          className="aspect-auto size-full rounded-xl border border-white/10 object-cover object-center p-1 shadow-strong"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        />
      );
    }

    if (currentProject.video) {
      return (
        <video
          preload="auto"
          src={currentProject.video}
          className="aspect-auto size-full rounded-lg object-cover shadow-strong"
          autoPlay
          loop
          muted
        />
      );
    }

    return (
      <Card className="aspect-auto size-full bg-white/5 border-white/10" />
    );
  };

  return (
    <section
      ref={containerRef}
      className={cn("py-20 sm:py-28", className)}
      id="benefits"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="relative z-10 flex flex-col items-center justify-center mb-0 sm:mb-12">
          <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
            BENEFITS
          </span>
          <h2 className="mb-0 sm:mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
            Delivering more than promises.
          </h2>
        </div>

        {/* Grid Content (same layout for all sizes) */}
        <div className="mx-auto my-12 grid h-full items-center gap-10 lg:grid-cols-2">
          {/* Accordion (kept for all screen sizes) */}
          <div
            className={cn(
              "order-1 flex w-full",
              ltr ? "lg:order-2 lg:justify-end" : "justify-start"
            )}
          >
            <Accordion
              type="single"
              value={`item-${currentIndex}`}
              onValueChange={(value) =>
                setCurrentIndex(Number(value.split("-")[1]))
              }
              className="w-full"
            >
              {data.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${index}`}
                  className="relative mb-6 last:mb-0 border-b-0"
                >
                  <LineProgress
                    position={linePosition}
                    isActive={currentIndex === index}
                    duration={collapseDelay}
                  />
                  <div className="relative flex items-start gap-3 p-2 sm:gap-4 sm:p-3">
                    {item.icon && (
                      <div className="flex size-9 sm:size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                        {item.icon}
                      </div>
                    )}
                    <div className="flex-1">
                      <AccordionTrigger className="py-1 sm:py-2 hover:no-underline text-brand-text">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold">
                          {item.title}
                        </h3>
                      </AccordionTrigger>
                      <AccordionContent className="text-xs sm:text-sm md:text-base text-brand-text-muted">
                        {item.content}
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Media Content (resizes responsively) */}
          <div
            className={cn(
              "h-[220px] sm:h-[280px] md:h-[350px] w-full",
              ltr && "lg:order-1"
            )}
          >
            <MediaContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatureSection;
