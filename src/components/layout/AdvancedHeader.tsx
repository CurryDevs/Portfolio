"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { StartProjectModal } from "@/components/ui/start-project-modal";

export function AdvancedHeader() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);

    return (
        <div className={cn("fixed top-6 inset-x-0 max-w-4xl mx-auto z-50", className)}>
            <div className="flex items-center justify-between px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="#home" className="text-2xl font-bold text-brand-text hover:text-brand-accent-primary transition-smooth hover-scale">
                        CurryDevs
                    </a>
                </div>

                {/* Navigation Menu */}
                <Menu setActive={setActive}>
                    <MenuItem setActive={setActive} active={active} item="Services">
                        <div className="flex flex-col space-y-2 text-sm min-w-[200px]">
                            <HoveredLink href="#services">Web Development</HoveredLink>
                            <HoveredLink href="#services">UI/UX Design</HoveredLink>
                            <HoveredLink href="#services">E-commerce Solutions</HoveredLink>
                            <HoveredLink href="#services">Mobile Apps</HoveredLink>
                            <HoveredLink href="#services">SEO Optimization</HoveredLink>
                        </div>
                    </MenuItem>

                    <MenuItem setActive={setActive} active={active} item="Work">
                        <div className="text-sm grid grid-cols-1 gap-4 p-2 min-w-[300px]">
                            <ProductItem
                                title="Fintech Dashboard"
                                href="#case-studies"
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=80&fit=crop&crop=center"
                                description="Real-time insights with crisp charts and 99+ Lighthouse score."
                            />
                            <ProductItem
                                title="SaaS Marketing Site"
                                href="#case-studies"
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=80&fit=crop&crop=center"
                                description="Micro-interactions and layered gradients for modern appeal."
                            />
                            <ProductItem
                                title="E-commerce Platform"
                                href="#case-studies"
                                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=80&fit=crop&crop=center"
                                description="Frictionless checkout experience with Stripe integration."
                            />
                        </div>
                    </MenuItem>

                    <MenuItem setActive={setActive} active={active} item="Company">
                        <div className="flex flex-col space-y-2 text-sm min-w-[180px]">
                            <HoveredLink href="#about">About Us</HoveredLink>
                            <HoveredLink href="#testimonials">Testimonials</HoveredLink>
                            <HoveredLink href="#process">Our Process</HoveredLink>
                            <HoveredLink href="#tech">Technologies</HoveredLink>
                        </div>
                    </MenuItem>
                </Menu>

                {/* CTA Modal */}
                <div className="flex items-center">
                    <StartProjectModal />
                </div>
            </div>
        </div>
    );
}