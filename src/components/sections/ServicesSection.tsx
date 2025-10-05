import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import {
  Globe,
  Smartphone,
  ShoppingCart,
  Settings,
  Layers,
  Server,
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

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
  cta,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  cta?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl p-4 transition-all duration-300 md:hover:shadow-2xl md:hover:shadow-black/30 cursor-pointer touch-manipulation active:scale-95 md:active:scale-100",
        "bg-gradient-to-br from-black via-primary/10 to-black border border-white/5 backdrop-blur-md",
        className
      )}
    >
      <div className="flex-1 flex flex-col">
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-2 mt-auto">
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <div className="font-sans font-bold text-white text-lg">{title}</div>
          </div>
          <div className="font-sans text-sm font-normal text-gray-300 mb-4">
            {description}
          </div>
          {href && cta && (
            <Button
              variant="secondary"
              asChild
              size="sm"
              className="pointer-events-auto rounded-full px-4 py-2 text-xs active:scale-95 transition-transform duration-150 w-fit"
            >
              <a href={href} className="flex items-center gap-2">
                {cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Animated skeleton components for each service
const SkeletonMobile = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" }
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-transparent flex-col items-center justify-center space-y-2 md:hover:animate-pulse"
    >
      <div className="w-16 h-28 bg-black rounded-lg border-2 border-white/20 relative overflow-hidden">
        <div className="w-full h-full bg-black rounded-md m-0.5 relative">
          <div className="flex justify-between items-center px-2 py-1">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-gray-400 rounded-full animate-pulse" />
            </div>
            <div className="w-4 h-1 bg-gray-500 rounded-full" />
          </div>
          <div className="px-2 py-1 space-y-1">
            <div className="w-full h-1 bg-gray-600 rounded animate-pulse" />
            <div className="w-3/4 h-1 bg-gray-600 rounded animate-pulse" />
            <div className="w-1/2 h-1 bg-gray-600 rounded animate-pulse" />
          </div>
        </div>
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-500 rounded-full" />
      </div>
    </motion.div>
  );
};

const SkeletonWeb = () => {
  return (
    <motion.div
      initial={{ scale: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.4 },
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-transparent flex-col items-center justify-center relative overflow-hidden p-4 md:hover:scale-105"
    >
      <div className="w-full max-w-40 bg-black rounded-lg border border-white/20 overflow-hidden">
        <div className="bg-black px-3 py-2 flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-gray-700 rounded-full animate-pulse" />
          </div>
          <div className="flex-1 bg-gray-800 rounded px-2 py-0.5">
            <div className="w-16 h-1 bg-gray-500 rounded animate-pulse" />
          </div>
        </div>
        <div className="p-3 space-y-2">
          <div className="space-y-1">
            <div className="flex items-center space-x-1">
              <div className="w-1 h-1 bg-gray-500 rounded-full animate-pulse" />
              <div className="w-8 h-1 bg-gray-600 rounded animate-pulse" />
            </div>
            <div className="w-full h-1 bg-gray-600 rounded animate-pulse" />
            <div className="w-3/4 h-1 bg-gray-600 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkeletonBackend = () => {
  return (
    <motion.div
      initial={{ scale: 1, y: 0 }}
      whileHover={{
        scale: 1.1,
        y: -8,
        transition: { duration: 0.4 },
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-transparent flex-col items-center justify-center space-y-4 md:hover:scale-110"
    >
      <div className="bg-black border border-white/20 rounded-lg p-4 flex flex-col items-center justify-center space-y-2">
        <Server className="h-12 w-12 text-white" />
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" />
          <div
            className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const SkeletonEcommerce = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-transparent flex-row space-x-2 p-2 md:hover:scale-105"
    >
      <motion.div
        variants={{
          initial: { x: 20, rotate: -5 },
          hover: { x: 0, rotate: 0 },
        }}
        className="h-full w-1/3 rounded-2xl bg-black p-4 border border-white/20 flex flex-col items-center justify-center"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-500 rounded" />
        <p className="text-xs text-center font-semibold text-white mt-2">Product</p>
        <p className="border border-white/30 bg-gray-900 text-white text-xs rounded-full px-2 py-0.5 mt-2">$99</p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-black p-4 border border-white/20 flex flex-col items-center justify-center">
        <ShoppingCart className="w-8 h-8 text-gray-400" />
        <p className="text-xs text-center font-semibold text-white mt-2">Cart</p>
        <p className="border border-white/30 bg-gray-900 text-white text-xs rounded-full px-2 py-0.5 mt-2">2 items</p>
      </motion.div>
      <motion.div
        variants={{
          initial: { x: -20, rotate: 5 },
          hover: { x: 0, rotate: 0 },
        }}
        className="h-full w-1/3 rounded-2xl bg-black p-4 border border-white/20 flex flex-col items-center justify-center"
      >
        <div className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-500 rounded" />
        <p className="text-xs text-center font-semibold text-white mt-2">Order</p>
        <p className="border border-white/30 bg-gray-900 text-white text-xs rounded-full px-2 py-0.5 mt-2">Complete</p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonDesignSystem = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] bg-transparent flex-col items-center justify-center p-4 relative md:hover:scale-105"
    >
      <div className="grid grid-cols-3 gap-2 w-full max-w-32">
        <div className="bg-black border border-white/20 rounded-md p-2 flex items-center justify-center">
          <div className="w-4 h-2 bg-gray-600 rounded-sm animate-pulse" />
        </div>
        <div className="bg-black border border-white/20 rounded-md p-2 flex items-center justify-center">
          <div className="w-4 h-1 bg-gray-600 rounded-full animate-pulse" />
        </div>
        <div className="bg-black border border-white/20 rounded-md p-2 flex flex-col items-center justify-center space-y-1">
          <div className="w-3 h-1 bg-gray-600 rounded-full animate-pulse" />
          <div className="w-2 h-0.5 bg-gray-700 rounded-full animate-pulse" />
        </div>
        <div className="bg-black border border-white/20 rounded-md p-2 flex items-center justify-center">
          <div className="w-4 h-2 bg-gray-700 rounded-full relative">
            <div className="w-1.5 h-1.5 bg-gray-500 rounded-full absolute right-0.5 top-0.5 animate-pulse" />
          </div>
        </div>
        <div className="bg-black border border-white/20 rounded-md p-2 flex items-center justify-center">
          <div className="w-3 h-3 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full animate-pulse" />
        </div>
        <div className="bg-black border border-white/20 rounded-md p-2 flex items-center justify-center">
          <div className="w-3 h-1.5 bg-gray-600 rounded-full animate-pulse" />
        </div>
      </div>
      <div className="mt-3 text-xs text-primary/60 font-medium tracking-wide">COMPONENTS</div>
    </motion.div>
  );
};

const services = [
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.",
    header: <SkeletonMobile />,
    className: "md:col-span-1",
    icon: <Smartphone className="h-5 w-5 text-primary" />,
    href: "/",
    cta: "Learn More",
  },
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    header: <SkeletonWeb />,
    className: "md:col-span-1",
    icon: <Globe className="h-5 w-5 text-primary" />,
    href: "/",
    cta: "Learn More",
  },
  {
    title: "Backend Development",
    description: "Scalable server-side solutions with robust APIs, database design, and cloud infrastructure.",
    header: <SkeletonBackend />,
    className: "md:col-span-1",
    icon: <Settings className="h-5 w-5 text-primary" />,
    href: "/",
    cta: "Learn More",
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online stores with payment integration, inventory management, and seamless checkout experiences.",
    header: <SkeletonEcommerce />,
    className: "md:col-span-2",
    icon: <ShoppingCart className="h-5 w-5 text-primary" />,
    href: "/",
    cta: "Learn More",
  },
  {
    title: "Design Systems",
    description: "Comprehensive design systems and UI component libraries that ensure consistency across all platforms.",
    header: <SkeletonDesignSystem />,
    className: "md:col-span-1",
    icon: <Layers className="h-5 w-5 text-primary" />,
    href: "/",
    cta: "Learn More",
  },
];

function ServicesSection() {
  return (
    <div id="services" className="container mx-auto px-4 py-16">
      <div className="relative z-10 flex flex-col items-center justify-center mb-12">
        <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
          OUR SERVICES
        </span>
        <h2 className="mb-8 sm:mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent leading-tight pb-2">
          Digital Solutions
        </h2>
      </div>

      {/* Desktop/Tablet Bento Grid */}
      <div className="hidden sm:block">
        <BentoGrid className="max-w-6xl mx-auto md:auto-rows-[20rem]">
          {services.map((service, i) => (
            <BentoGridItem
              key={i}
              title={service.title}
              description={service.description}
              header={service.header}
              className={cn("[&>p:text-lg]", service.className)}
              icon={service.icon}
              href={service.href}
              cta={service.cta}
            />
          ))}
        </BentoGrid>
      </div>

      {/* Mobile Touch-Optimized Carousel */}
      <div className="sm:hidden w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-4 px-2 snap-x snap-mandatory">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileTap={{ scale: 0.95 }}
              className="relative flex flex-col justify-between rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-gradient-to-br from-black via-primary/20 to-black min-w-[85vw] max-w-[90vw] snap-center touch-pan-x backdrop-blur-md min-h-[280px] p-4 active:scale-95 transition-transform duration-150"
            >
              {/* Mobile glassy accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-primary/30 rounded-bl-2xl blur-xl opacity-40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-primary/20 rounded-tr-2xl blur-xl opacity-30" />

              {/* Header Animation */}
              <div className="flex-1 flex items-center justify-center mb-4">
                {service.header}
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-2 items-center text-center">
                <div className="flex items-center justify-center mb-2">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-neutral-300 mb-4 line-clamp-3">{service.description}</p>

                <Button
                  variant="secondary"
                  asChild
                  size="sm"
                  className="pointer-events-auto rounded-full px-4 py-2 text-xs active:scale-95 transition-transform duration-150"
                >
                  <a href={service.href} className="flex items-center gap-2">
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Subtle hover overlay - desktop only */}
              <div className="absolute inset-0 z-20 pointer-events-none transition-all duration-300 md:group-hover:bg-primary/10 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;