import React from "react";
import { Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimationContainer } from "@/components/ui/animation-container";
import Logo from "@/components/ui/logo";

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
        <footer className="relative border-t border-border pt-6 pb-8 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">
                <AnimationContainer delay={0.2} className="mt-8 md:mt-0">
                    <a href="/" className="flex items-center gap-2">
                        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                            <Logo />
                        </div>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                            <p
                                className="text-xl font-semibold text-primary tracking-wide"
                                style={{ fontVariationSettings: '"opsz" 32' }}
                            >
                                CurryDevs
                            </p>
                        </div>
                    </a>
                </AnimationContainer>

                <AnimationContainer className="w-full md:w-auto">
                    <nav className="flex flex-wrap justify-center gap-4 text-center md:justify-end">
                        {footerLink.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
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
                            href="https://youtube.com/@currydevs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Youtube</span>
                            <Youtube className="h-5 w-5" />
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
                </AnimationContainer>
            </div>

            <AnimationContainer
                delay={0.6}
                className="mt-8 border-t border-border/40 pt-4 px-4 sm:px-6 lg:px-8"
            >
                <div className="flex justify-center">
                    <p className="text-sm leading-6 text-muted-foreground text-center">
                        &copy; {currentYear} All rights reserved.
                    </p>
                </div>
            </AnimationContainer>
        </footer>
    );
};

export default FooterOne;