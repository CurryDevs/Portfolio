"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { StartProjectModal } from "@/components/ui/start-project-modal";
import { MenuIcon, X } from "lucide-react";
import CurryDevsLogo from "@/assets/CurryDevs_Transparent.png";
import { Link } from "react-router-dom";

export function AdvancedHeader() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className={cn("fixed top-3 sm:top-6 inset-x-0 max-w-6xl mx-auto z-50", className)}>
            {/* Unified Liquid Glass Container */}
            <div className="relative mx-2 sm:mx-4">
                {/* Liquid glass background */}
                <div className="absolute inset-0 rounded-full shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] dark:shadow-[0_0_8px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.09),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.85),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.6),inset_0_0_6px_6px_rgba(255,255,255,0.12),inset_0_0_2px_2px_rgba(255,255,255,0.06),0_0_12px_rgba(0,0,0,0.15)]" />
                <div
                    className="absolute inset-0 isolate -z-10 overflow-hidden rounded-full"
                    style={{ backdropFilter: 'url("#unified-glass")' }}
                />

                {/* Content Container */}
                <div className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-300">
                            <img
                                src={CurryDevsLogo}
                                alt="CurryDevs Logo"
                                className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
                                style={{ clipPath: 'inset(15% 0 15% 0)' }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation Items */}
                    <div
                        className="hidden lg:flex items-center space-x-6 xl:space-x-8"
                        onMouseLeave={() => setActive(null)}
                    >
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
                    </div>

                    {/* Desktop Book a Call Button */}
                    <div className="hidden sm:flex items-center">
                        <StartProjectModal />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center space-x-2">
                        <div className="sm:hidden">
                            <StartProjectModal />
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-brand-text hover:text-brand-accent-primary transition-smooth"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <MenuIcon className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 sm:mx-4">
                        <div className="bg-brand-bg/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl p-4">
                            <div className="space-y-4">
                                {/* Services */}
                                <div className="space-y-2">
                                    <h3 className="text-brand-text font-semibold text-sm">Services</h3>
                                    <div className="space-y-1 pl-2">
                                        <a href="#services" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">Web Development</a>
                                        <a href="#services" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">UI/UX Design</a>
                                        <a href="#services" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">E-commerce Solutions</a>
                                        <a href="#services" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">Mobile Apps</a>
                                        <a href="#services" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">SEO Optimization</a>
                                    </div>
                                </div>

                                {/* Work */}
                                <div className="space-y-2">
                                    <h3 className="text-brand-text font-semibold text-sm">Work</h3>
                                    <div className="space-y-1 pl-2">
                                        <a href="#case-studies" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">Fintech Dashboard</a>
                                        <a href="#case-studies" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">SaaS Marketing Site</a>
                                        <a href="#case-studies" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">E-commerce Platform</a>
                                    </div>
                                </div>

                                {/* Company */}
                                <div className="space-y-2">
                                    <h3 className="text-brand-text font-semibold text-sm">Company</h3>
                                    <div className="space-y-1 pl-2">
                                        <a href="#about" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">About Us</a>
                                        <a href="#testimonials" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">Testimonials</a>
                                        <a href="#process" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">Our Process</a>
                                        <a href="#tech" className="block text-brand-text-muted hover:text-brand-text transition-smooth py-1 text-sm">Technologies</a>
                                    </div>
                                </div>

                                {/* Mobile Book a Call Button */}
                                <div className="pt-2 border-t border-white/10 sm:hidden">
                                    <StartProjectModal />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Glass Filter */}
                <svg className="hidden">
                    <defs>
                        <filter
                            id="unified-glass"
                            x="0%"
                            y="0%"
                            width="100%"
                            height="100%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.05 0.05"
                                numOctaves="1"
                                seed="3"
                                result="turbulence"
                            />
                            <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
                            <feDisplacementMap
                                in="SourceGraphic"
                                in2="blurredNoise"
                                scale="60"
                                xChannelSelector="R"
                                yChannelSelector="B"
                                result="displaced"
                            />
                            <feGaussianBlur in="displaced" stdDeviation="4" result="finalBlur" />
                            <feComposite in="finalBlur" in2="finalBlur" operator="over" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    );
}