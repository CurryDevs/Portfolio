"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Marquee } from "@/components/ui/marquee";

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-brand-accent-primary/20 to-brand-accent-primary/10 px-2 py-0.5 font-bold text-brand-accent-primary rounded-md",
        className
      )}
    >
      {children}
    </span>
  );
}

export interface TestimonialCardProps {
  name: string;
  role: string;
  img?: string;
  description: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-6 hover-lift hover-glow transition-all duration-300",
        "border border-white/10 bg-white/5 backdrop-blur-sm",
        "hover:bg-white/10 hover:border-white/20",
        className
      )}
      {...props}
    >
      <div className="select-none text-sm font-normal text-brand-text-muted">
        {description}
        <div className="flex flex-row py-2 gap-1">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <div className="flex w-full select-none items-center justify-start gap-4">
        <img
          width={40}
          height={40}
          src={img || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"}
          alt={name}
          className="size-10 rounded-full ring-2 ring-white/20 ring-offset-2 ring-offset-transparent object-cover"
        />
        <div>
          <p className="font-medium text-brand-text">{name}</p>
          <p className="text-xs font-normal text-brand-text-muted">{role}</p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Alex Rivera",
    role: "UI/UX Lead at InnovateTech",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        Working with CurryDevs has revolutionized our design process.{" "}
        <Highlight>
          Their reusable, animated components make it easy to deliver cutting-edge
          designs.
        </Highlight>{" "}
        A must-have for any design team.
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Frontend Engineer at NextGen Solutions",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs' templates have drastically improved our development speed.{" "}
        <Highlight>
          We've reduced project timelines by 70%, delivering high-quality UIs
          effortlessly.
        </Highlight>{" "}
        Highly recommend them to fellow developers.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder at Startup Studio",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        As a startup founder, I need tools that help us grow fast without
        sacrificing quality. CurryDevs' stunning designs and simple integration
        have made them an essential part of our workflow.{" "}
        <Highlight>Our clients love our modern interfaces.</Highlight>
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product Designer at Global Systems",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs' prebuilt components have made it so easy to create intuitive
        and compliant designs.{" "}
        <Highlight>
          It's perfect for tackling complex workflows with style.
        </Highlight>{" "}
        A must-have for any product designer.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Creative Director at FinTech Innovations",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs' animations and design elements have elevated our fintech
        app's user experience.{" "}
        <Highlight>The feedback on our new design is phenomenal.</Highlight> It's
        a game-changer for user-centric applications.
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "Web Developer at LogiChain Solutions",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs' component library has simplified web development for our
        logistics dashboard.{" "}
        <Highlight>Building custom layouts has never been this efficient.</Highlight>
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Digital Marketing Specialist at EcoTech",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs' responsive designs have helped us create marketing sites that
        look amazing on every device.{" "}
        <Highlight>
          It's revolutionized how we approach branding online.
        </Highlight>
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "E-commerce Product Manager at FashionForward",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs' beautifully crafted components have completely transformed our
        fashion storefront.{" "}
        <Highlight>Customers love the dynamic shopping experience.</Highlight>
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Healthcare App Designer at HealthTech Solutions",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs has made it easy to create user-friendly, accessible interfaces
        for our healthcare apps.{" "}
        <Highlight>It's a crucial part of our design system.</Highlight>
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "EdTech Founder at EduSafe Innovations",
    img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs' education-focused templates have doubled our platform's
        usability.{" "}
        <Highlight>
          It's tailor-made for addressing student and teacher needs.
        </Highlight>
      </p>
    ),
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-float stagger-3"></div>

      <div className="container-custom">
        <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-2xl text-transparent">
          Testimonials
        </span>
        <h2 className="mb-8 text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">Let's hear from our Clients</h2>
        </div>

        <div className="relative mt-6 max-h-[600px] overflow-hidden">
          <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
            {Array(Math.ceil(testimonials.length / 3))
              .fill(0)
              .map((_, i) => (
                <Marquee
                  vertical
                  key={i}
                  className={cn({
                    "[--duration:60s]": i === 1,
                    "[--duration:30s]": i === 2,
                    "[--duration:70s]": i === 3,
                  })}
                >
                  {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: Math.random() * 0.8,
                        duration: 1.2,
                      }}
                    >
                      <TestimonialCard {...card} />
                    </motion.div>
                  ))}
                </Marquee>
              ))}
          </div>

          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-brand-bg from-20%"></div>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-brand-bg from-20%"></div>
        </div>
      </div>
    </section>
  );
}