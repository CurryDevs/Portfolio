import { Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  About: [
    { name: "Our Story", href: "/about" },
    { name: "Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
  ],
  Services: [
    { name: "Web Development", href: "/services#web-dev" },
    { name: "Design Systems", href: "/services#design-systems" },
    { name: "E-commerce", href: "/services#ecommerce" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Process", href: "/#process" },
  ],
  Contact: [
    { name: "Start a Project", href: "#contact" },
    { name: "hello@currydevs.com", href: "mailto:hello@currydevs.com" },
    { name: "Remote • India", href: "#" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/currydevs", icon: Github },
  { name: "Twitter", href: "https://x.com/currydevs", icon: Twitter },
  { name: "LinkedIn", href: "https://linkedin.com/company/currydevs", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative mt-32 bg-gradient-primary border-t border-white/10 animate-fade-in">
      {/* Glow effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={title} className={`animate-slide-up stagger-${index + 1}`}>
              <h3 className="text-lg font-semibold text-brand-text mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-brand-text-muted hover:text-brand-text transition-smooth hover-lift"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-12 mb-12 animate-slide-up stagger-5">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-brand-text mb-2">Stay Updated</h3>
            <p className="text-brand-text-muted mb-4">Get the latest on web development trends and our work.</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-brand-text placeholder:text-brand-text-muted focus:outline-none focus:ring-2 focus:ring-white/20 transition-smooth hover-glow"
              />
              <Button variant="premium" className="hover-lift hover-glow">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-lg font-bold text-brand-text mr-4">
              CurryDevs
            </div>
            <p className="text-sm text-brand-text-muted">
              © 2024 CurryDevs. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                className={`text-brand-text-muted hover:text-brand-text transition-smooth p-2 rounded-lg hover:bg-white/5 hover-lift hover-rotate animate-scale-in`}
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}