import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Settings,
  Layers,
  Shield,
} from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[14rem] sm:auto-rows-[18rem] md:auto-rows-[22rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string; // Make className optional as it's not always provided in features
  background: ReactNode;
  Icon: React.ElementType; // Use React.ElementType for component props
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // dark styles (now default)
      "bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="max-w-lg text-sm text-neutral-300">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.03]" />
  </div>
);

const features = [
  {
    Icon: Globe,
    name: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    href: "/",
    cta: "Learn More",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Smartphone,
    name: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.",
    href: "/",
    cta: "Learn More",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: ShoppingCart,
    name: "E-commerce Solutions",
    description:
      "Complete online stores with payment integration, inventory management.",
    href: "/",
    cta: "Learn More",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Settings,
    name: "Backend Development",
    description:
      "Scalable server-side solutions with robust APIs, database design, and cloud infrastructure.",
    href: "/",
    cta: "Learn More",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Layers,
    name: "Design Systems",
    description:
      "Comprehensive design systems and UI component libraries that ensure consistency.",
    href: "/",
    cta: "Learn More",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: Shield,
    name: "DevOps & Security",
    description:
      "Secure deployment pipelines, monitoring, and infrastructure management for reliable applications.",
    href: "/",
    cta: "Learn More",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
];

function ServicesSection() {
  return (
    <div id="services" className="container mx-auto px-4">
      <div className="relative z-10 flex flex-col items-center justify-center mb-0 sm:mb-12">
        <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
          OUR SERVICES
        </span>
        <h2 className="mb-16 sm:mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
          Digital Solutions
        </h2>
      </div>
      {/* Desktop/Tablet Grid */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {features.map((feature, idx) => (
          <div
            key={feature.name}
            className={cn(
              "relative flex flex-col justify-between rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-black via-primary/20 to-black group transition-transform duration-300 hover:-translate-y-1 hover:shadow-3xl min-h-[200px] p-0",
              "backdrop-blur-md",
              "md:min-h-[220px] lg:min-h-[240px]",
              feature.className
            )}
          >
            {/* Modern glassy corner blob for theme accent */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-primary/30 rounded-bl-3xl blur-xl opacity-40" />
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-primary/20 rounded-tr-3xl blur-xl opacity-30" />
            <div className="relative z-10 flex flex-col gap-2 px-6 pt-7 pb-2 items-center">
              <div className="flex items-center justify-center mb-2">
                <feature.Icon className="h-11 w-11 text-primary drop-shadow-lg transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-1 text-center">{feature.name}</h3>
              <p className="text-xs md:text-sm text-neutral-300 text-center mb-2 line-clamp-3">{feature.description}</p>
            </div>
            <div className="relative z-10 flex justify-center pb-4">
              <Button variant="secondary" asChild size="sm" className="pointer-events-auto rounded-full px-5 py-2 text-xs md:text-sm active:scale-95 transition-transform duration-150">
                <a href={feature.href} className="flex items-center gap-2">
                  {feature.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            {/* Subtle hover overlay with more curve */}
            <div className="absolute inset-0 z-20 pointer-events-none transition-all duration-300 group-hover:bg-primary/10 rounded-3xl" />
          </div>
        ))}
      </div>

      {/* Mobile Touch UI: Swipeable Carousel */}
      <div className="sm:hidden w-full overflow-x-auto pb-2">
        <div className="flex gap-4 px-1 snap-x snap-mandatory">
          {features.map((feature, idx) => (
            <div
              key={feature.name}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-gradient-to-br from-black via-primary/20 to-black min-w-[85vw] max-w-[90vw] snap-center touch-pan-x active:scale-[0.98] transition-transform duration-150",
                "backdrop-blur-md",
                "min-h-[180px]",
                feature.className
              )}
            >
              {/* Mobile glassy accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary/30 rounded-bl-2xl blur-xl opacity-40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-primary/20 rounded-tr-2xl blur-xl opacity-30" />
              <div className="relative z-10 flex flex-col gap-2 px-4 pt-6 pb-2 items-center">
                <div className="flex items-center justify-center mb-2">
                  <feature.Icon className="h-9 w-9 text-primary drop-shadow-lg" />
                </div>
                <h3 className="text-base font-bold text-white mb-1 text-center">{feature.name}</h3>
                <p className="text-xs text-neutral-300 text-center mb-2 line-clamp-3">{feature.description}</p>
              </div>
              <div className="relative z-10 flex justify-center pb-3">
                <Button variant="secondary" asChild size="sm" className="pointer-events-auto rounded-full px-4 py-2 text-xs active:scale-95 transition-transform duration-150">
                  <a href={feature.href} className="flex items-center gap-2">
                    {feature.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              {/* Subtle hover overlay with more curve */}
              <div className="absolute inset-0 z-20 pointer-events-none transition-all duration-300 group-hover:bg-primary/10 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
