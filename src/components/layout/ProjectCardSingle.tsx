"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export interface Project {
    id: string;
    title: string;
    client: string;
    description: string;
    image: string;
    techStack: string[];
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <Link
            to={`/case-studies/${project.id}`}>
            <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className="group relative bg-card/90 border border-border rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer backdrop-blur-md"
            >

                {/* Image Section */}
                <div className="relative h-80 sm:h-[22rem] overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={`${project.title} preview`}
                        initial={{ scale: 1.05, filter: "blur(10px)" }}
                        animate={{ scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        onLoad={() => setImageLoaded(true)}
                        loading="lazy"
                    />
                    {!imageLoaded && (
                        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                </div>

                {/* Card Content */}
                <div className="p-8 sm:p-10 relative z-20 space-y-6">
                    {/* Header */}
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold text-card-foreground tracking-tight mb-1">
                            {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span>{project.client}</span>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-6 line-clamp-4 leading-relaxed text-sm sm:text-base">
                        {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.slice(0, 6).map((tech, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="px-3 py-1.5 rounded-full text-xs font-medium bg-accent/30 text-foreground border border-border/40 backdrop-blur-sm shadow-sm transition-all duration-200"
                            >
                                {tech}
                            </motion.span>
                        ))}
                        {project.techStack.length > 6 && (
                            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-muted/30 text-muted-foreground border border-border/30">
                                +{project.techStack.length - 6}
                            </span>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between  border-t border-border/20">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-primary transition-colors p-0 h-auto font-medium group"
                        >
                            <span className="mr-2">View Details</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </motion.article>
        </Link>
    );
};
