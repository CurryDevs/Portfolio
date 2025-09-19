import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface Project {
    id: string;
    title: string;
    client: string;
    techStack: string[];
    summary: string;
    url: string;    
    image: string;
}

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLElement>(null);

    // Advanced mouse tracking for 3D effects
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
        stiffness: 350,
        damping: 25,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
        stiffness: 350,
        damping: 25,
    });

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        mouseX.set((event.clientX - centerX) / (rect.width / 2));
        mouseY.set((event.clientY - centerY) / (rect.height / 2));
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    return (
        <Link to={`/case-studies/${project.id}`} className="block">
            <motion.article
                ref={cardRef}
                className="group relative cursor-pointer perspective-1000 flex flex-col h-full"
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    duration: 0.8,
                    ease: [0.165, 0.84, 0.44, 1],
                    type: "spring",
                    bounce: 0.25
                }}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                }}
            >
                {/* Morphing Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-90 rounded-none border border-foreground/10 overflow-hidden">
                    {/* Animated Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.03]">
                        <div className="absolute inset-0"
                            style={{
                                backgroundImage: `
                     linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                     linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
                   `,
                                backgroundSize: '20px 20px'
                            }}
                        />
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-foreground/20"
                                initial={{
                                    x: Math.random() * 400,
                                    y: Math.random() * 300,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: Math.random() * 400,
                                    y: Math.random() * 300,
                                    opacity: isHovered ? 0.6 : 0.2,
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Content Container with 3D Transform */}
                <div className="relative flex flex-col flex-1 bg-background/95 backdrop-blur-xl border border-foreground/20 overflow-hidden"
                    style={{ transform: "translateZ(50px)" }}
                >
                    {/* Highlight Border Effect */}
                    <motion.div
                        className="absolute inset-0 border border-foreground/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            scale: isHovered ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Image Section with Advanced Effects */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                        {/* Shimmer Loading */}
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-muted animate-pulse">
                                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-foreground/5 to-transparent" />
                            </div>
                        )}

                        {/* Main Image with Unique Filters */}
                        <motion.img
                            src={project.image}
                            alt={`${project.title} showcase`}
                            className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{
                                filter: isHovered
                                    ? 'grayscale(0%) contrast(1.1) brightness(1.1) saturate(0.1)'
                                    : 'grayscale(100%) contrast(1.2) brightness(0.9)',
                            }}
                            onLoad={() => setImageLoaded(true)}
                            animate={{
                                scale: isHovered ? 1.05 : 1,
                            }}
                            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        />

                        {/* Dynamic Overlay */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{
                                background: isHovered
                                    ? 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'
                                    : 'linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)'
                            }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Floating Corner Element */}
                        <motion.div
                            className="absolute top-4 right-4"
                            animate={{
                                rotate: isHovered ? 180 : 0,
                                scale: isHovered ? 1.2 : 1,
                            }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Sparkles className="w-4 h-4 text-foreground/60" strokeWidth={1.5} />
                        </motion.div>
                    </div>

                    {/* Content Section with Micro-animations */}
                    <div className=" p-8 flex flex-col justify-between h-full">
                        {/* Header with Staggered Animation */}
                        <div  className="space-y-6">
                        <motion.div
                            className="space-y-2"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1,
                                    }
                                }
                            }}
                        >
                            <motion.h3
                                className="font-display text-2xl font-bold tracking-tight text-foreground leading-tight"
                                variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {project.title}
                            </motion.h3>

                            <motion.div
                                className="flex items-center gap-3"
                                variants={{
                                    hidden: { y: 10, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}
                            >
                                <div className="w-2 h-px bg-foreground" />
                                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                                    {project.client}
                                </span>
                            </motion.div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className="text-muted-foreground leading-relaxed text-sm line-clamp-3"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            {project.summary}
                        </motion.p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-mono uppercase tracking-wide text-foreground/70 border border-foreground/20 bg-background/50 hover:bg-foreground hover:text-background transition-all duration-300"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        delay: 0.3 + index * 0.1,
                                        duration: 0.4,
                                        type: "spring",
                                        bounce: 0.3
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                    }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                            {project.techStack.length > 4 && (
                                <motion.span
                                    className="px-3 py-1 text-xs text-muted-foreground"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    +{project.techStack.length - 4}
                                </motion.span>
                            )}
                        </div>
                        </div>

                        {/* CTA always at bottom */}
                        <motion.div
                            className="pt-4 border-t border-foreground/10 mt-auto"
                            whileHover="hover"
                        >
                            <motion.div
                                className="flex items-center justify-between group/cta"
                                variants={{
                                    hover: {
                                        x: 5,
                                        transition: { duration: 0.3 }
                                    }
                                }}
                            >
                                <span className="text-sm font-medium text-foreground tracking-wide">
                                    Explore Case Study
                                </span>
                                <motion.div
                                    className="flex items-center gap-1"
                                    variants={{
                                        hover: {
                                            x: 10,
                                            transition: { duration: 0.3 }
                                        }
                                    }}
                                >
                                    <ArrowUpRight className="w-4 h-4 text-foreground/70" strokeWidth={1.5} />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Edge Glow Effect */}
                <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{
                        boxShadow: isHovered
                            ? '0 0 0 1px rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,0,0,0.3)'
                            : '0 0 0 1px rgba(255,255,255,0.05), 0 10px 25px -5px rgba(0,0,0,0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                />
            </motion.article>
        </Link>
    );
};

export default ProjectCard;
