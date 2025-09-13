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
import { Code, Palette, Rocket } from "lucide-react";

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

const ProjectCard: React.FC<{
    project: ProjectItem;
    isActive: boolean;
    onClick: () => void;
    collapseDelay: number;
}> = ({ project, isActive, onClick, collapseDelay }) => (
    <Card
        className="relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0 bg-white/5 border-white/10 hover:bg-white/10 transition-smooth cursor-pointer"
        onClick={onClick}
        style={{ scrollSnapAlign: "center" }}
    >
        <LineProgress position="top" isActive={isActive} duration={collapseDelay} />
        <h2 className="text-xl font-bold text-brand-text">{project.title}</h2>
        <p className="mx-0 max-w-sm text-balance text-sm text-brand-text-muted">
            {project.content}
        </p>
    </Card>
);

const ProjectFeatureSection = ({
    collapseDelay = 5000,
    ltr = false,
    linePosition = "left",
    data = [],
    className,
}: ProjectFeaturesProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(-1);
    const carouselRef = useRef<HTMLUListElement>(null);
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
            return <Card className="aspect-auto size-full bg-white/5 border-white/10" />;
        }

        if (currentProject.image) {
            return (
                <motion.img
                    key={currentIndex}
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="aspect-auto size-full rounded-xl border border-white/10 object-cover object-left-top p-1 shadow-strong"
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

        return <Card className="aspect-auto size-full bg-white/5 border-white/10" />;
    };

    return (
        <section
            ref={containerRef}
            className={cn("py-24 lg:py-32", className)}
            id="projects"
        >
            <div className="container-custom">
                <div className="text-center mb-16">
                    <div className="text-eyebrow animate-fade-in stagger-1">OUR PROCESS</div>
                    <h2 className="text-h2 text-brand-text mb-6 animate-slide-up stagger-2">
                        How We Build Amazing Projects
                    </h2>
                    <p className="text-lg text-brand-text-muted max-w-2xl mx-auto animate-fade-in stagger-3">
                        From concept to launch, follow our proven process that transforms your ideas into exceptional digital experiences.
                    </p>
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto my-12 grid h-full items-center gap-10 lg:grid-cols-2">
                        <div
                            className={cn(
                                "order-1 hidden lg:flex",
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
                                        className="relative mb-8 last:mb-0 border-b-0"
                                    >
                                        <LineProgress
                                            position={linePosition}
                                            isActive={currentIndex === index}
                                            duration={collapseDelay}
                                        />
                                        <div className="relative flex items-center gap-4 p-2">
                                            {item.icon && (
                                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                                                    {item.icon}
                                                </div>
                                            )}
                                            <div className="flex-1">
                                                <AccordionTrigger className="py-2 hover:no-underline text-brand-text">
                                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                                </AccordionTrigger>
                                                <AccordionContent className="text-brand-text-muted">
                                                    {item.content}
                                                </AccordionContent>
                                            </div>
                                        </div>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <div
                            className={cn(
                                "h-[350px] min-h-[200px] w-auto",
                                ltr && "lg:order-1"
                            )}
                        >
                            <MediaContent />
                        </div>

                        <ul
                            ref={carouselRef}
                            className="flex snap-x snap-mandatory flex-nowrap overflow-x-auto py-10 lg:hidden [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                            style={{ padding: "50px calc(50%)" }}
                        >
                            {data.map((item, index) => (
                                <ProjectCard
                                    key={item.id}
                                    project={item}
                                    isActive={currentIndex === index}
                                    onClick={() => setCurrentIndex(index)}
                                    collapseDelay={collapseDelay}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectFeatureSection;