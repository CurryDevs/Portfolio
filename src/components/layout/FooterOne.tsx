import React from "react";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimationContainer } from "@/components/ui/animation-container";
import Logo from "@/components/ui/logo";
import CurryDevsLogo from "@/assets/CurryDevs_Transparent.png";

const footerLink = [
    {
        name: "About",
        link: "#about",
    },
    {
        name: "Services",
        link: "#services",
    },
    {
        name: "Work",
        link: "#case-studies",
    },
    {
        name: "Contact",
        link: "#contact",
    },
    {
        name: "Privacy Policy",
        link: "#privacy",
    },
];

const FooterOne = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-border py-0.5 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="flex flex-col items-center space-y-1 md:flex-row md:justify-between md:space-y-0">
                <AnimationContainer delay={0.2} className="mt-0 md:mt-0">
                    <a href="/" className="flex items-center">
                        <img
                            src={CurryDevsLogo}
                            alt="CurryDevs Logo"
                            className="h-24 w-auto object-cover hover:scale-105 transition-transform duration-300"
                            style={{ clipPath: 'inset(15% 0 15% 0)' }}
                        />
                    </a>
                </AnimationContainer>

                <AnimationContainer className="w-full md:w-auto">
                    <nav className="flex flex-wrap justify-center gap-4 text-center md:justify-end">
                        {footerLink.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="text-sm leading-5 text-muted-foreground hover:text-foreground transition-colors font-medium"
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </AnimationContainer>

                <AnimationContainer
                    delay={0.1}
                    className="flex justify-center space-x-4"
                >
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://twitter.com/currydevs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://linkedin.com/company/currydevs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://instagram.com/currydevs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Instagram</span>
                            <Instagram className="h-5 w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://github.com/currydevs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Github</span>
                            <Github className="h-5 w-5" />
                        </a>
                    </Button>
                </AnimationContainer>
            </div>

            <AnimationContainer
                delay={0.6}
                className="mt-0.5 border-t border-border/40 pt-0.5 px-4 sm:px-6 lg:px-8"
            >
                <div className="flex justify-center">
                    <p className="text-xs leading-4 text-muted-foreground text-center">
                        &copy; {currentYear} All rights reserved.
                    </p>
                </div>
            </AnimationContainer>
        </footer>
    );
};

export default FooterOne;