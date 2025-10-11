import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimationContainer } from "@/components/ui/animation-container";
import CurryDevsLogo from "@/assets/CurryDevs_Transparent.png";
import { Link } from "react-router-dom";

export type SectionLink = {
    name: string;
    link: string;
};

const defaultFooterLink: SectionLink[] = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Services",
        link: "/services",
    },
    {
        name: "Projects",
        link: "/project",
    },
    {
        name: "Benefits",
        link: "/benefits",
    },
    {
        name: "FAQs",
        link: "/faqs",
    },
];

const Footer = ({ sectionLinks }: { sectionLinks?: SectionLink[] }) => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="relative border-t border-border py-0.5 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="flex  flex-col gap-4 items-center space-y-1 [@media(min-width:800px)]:flex-row  md:justify-between md:space-y-0">
                <AnimationContainer delay={0.2} className="mt-0 md:mt-0">
                    <Link to="/" className="flex items-center">
                        <img
                            src={CurryDevsLogo}
                            alt="CurryDevs Logo"
                            className="h-24 w-auto object-cover hover:scale-105 transition-transform duration-300"
                            style={{ clipPath: 'inset(15% 0 15% 0)' }}
                        />
                    </Link>
                </AnimationContainer>

                <AnimationContainer className="w-full md:w-auto gap-[3.4rem]">
                    <nav className="flex flex-wrap justify-center gap-4 text-center md:justify-end">
                        {(sectionLinks && sectionLinks.length > 0 ? sectionLinks : defaultFooterLink).map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="text-sm sm:text-base leading-5 text-muted-foreground hover:text-foreground transition-colors font-thin hover:font-semibold"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </AnimationContainer>

                <AnimationContainer
                    delay={0.1}
                    className="flex justify-center space-x-4"
                >
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://x.com/CurryDevs_co"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Twitter</span>
                            <Twitter className="sm:!h-5 sm:!w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://linkedin.com/company/currydevs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="sm:!h-5 sm:!w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://www.instagram.com/currydevs.co/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Instagram</span>
                            <Instagram className="sm:!h-5 sm:!w-5" />
                        </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                        <a
                            href="https://github.com/currydevs"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="sr-only">Github</span>
                            <Github className="sm:!h-5 sm:!w-5" />
                        </a>
                    </Button>
                </AnimationContainer>
            </div>

            <AnimationContainer
                delay={0.6}
                className="my-7  border-t border-border/40 pt-0.5 px-4 sm:px-6 lg:px-8"
            >
                <div className="flex justify-center">
                    <p className="text-xs sm:text-sm leading-4 text-muted-foreground text-center">
                        &copy; {currentYear} CurryDevs. All rights reserved.
                    </p>
                </div>
            </AnimationContainer>
        </footer>
    );
};

export default Footer;
