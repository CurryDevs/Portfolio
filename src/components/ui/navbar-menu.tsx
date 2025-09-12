"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative">
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-brand-text hover:text-brand-accent-primary transition-smooth font-medium"
            >
                {item}
            </motion.p>
            {active !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={transition}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                            <motion.div
                                transition={transition}
                                layoutId="active"
                                className="bg-brand-bg/95 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-xl"
                            >
                                <motion.div
                                    layout
                                    className="w-max h-full p-4"
                                >
                                    {children}
                                </motion.div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)}
            className="relative rounded-full border border-white/10 bg-brand-bg/80 backdrop-blur-md shadow-xl flex justify-center space-x-8 px-8 py-4"
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
    src,
}: {
    title: string;
    description: string;
    href: string;
    src: string;
}) => {
    return (
        <a href={href} className="flex space-x-3 hover-lift transition-all duration-300 p-2 rounded-lg hover:bg-white/5">
            <img
                src={src}
                width={60}
                height={40}
                alt={title}
                className="flex-shrink-0 rounded-md shadow-lg object-cover"
            />
            <div>
                <h4 className="text-lg font-semibold mb-1 text-brand-text">
                    {title}
                </h4>
                <p className="text-brand-text-muted text-sm max-w-[12rem] leading-relaxed">
                    {description}
                </p>
            </div>
        </a>
    );
};

export const HoveredLink = ({
    children,
    href,
    className,
    ...rest
}: {
    children: React.ReactNode;
    href: string;
    className?: string;
    [key: string]: any;
}) => {
    return (
        <a
            href={href}
            className={cn(
                "text-brand-text-muted hover:text-brand-text transition-smooth block py-2 px-3 rounded-lg hover:bg-white/5",
                className
            )}
            {...rest}
        >
            {children}
        </a>
    );
};