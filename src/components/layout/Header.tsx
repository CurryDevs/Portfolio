import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-md bg-brand-bg/80 border-b border-white/10 animate-slide-up">
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center animate-slide-in-left">
          <a href="#home" className="text-2xl font-bold text-brand-text hover:text-brand-accent-primary transition-smooth hover-scale">
            CurryDevs
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 animate-fade-in stagger-2">
          {navigation.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-brand-text hover:text-brand-accent-primary transition-smooth relative group hover-lift"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-accent-primary to-transparent transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block animate-slide-in-right">
          <Button variant="hero" size="lg" asChild className="hover-lift hover-glow animate-shimmer">
            <a href="#contact">Start a Project</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-brand-bg border-white/10 backdrop-blur-xl">
            <div className="flex flex-col space-y-6 mt-8">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg text-brand-text hover:text-brand-accent-primary transition-smooth hover-lift animate-slide-in-right stagger-${index + 1}`}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-6 hover-lift hover-glow animate-scale-in stagger-6" asChild>
                <a href="#contact">Start a Project</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}