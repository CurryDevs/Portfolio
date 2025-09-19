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
          src={
            img ||
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          }
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
    name: "Varun Mehta",
    role: "UI/UX Lead at DesignWorks",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs completely changed how we approach design.{" "}
        <Highlight>
          Their reusable, animated components made our workflows smoother and
          more creative.
        </Highlight>{" "}
        Truly a game-changer for design teams.
      </p>
    ),
  },
  {
    name: "Suhani Sharma",
    role: "Frontend Engineer at CodeSphere",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        Our development speed skyrocketed with CurryDevs’ templates.{" "}
        <Highlight>
          Project timelines were cut in half while maintaining top quality.
        </Highlight>{" "}
        Couldn’t recommend them more.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder at Startup Studio",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        As a startup, speed and quality are critical. CurryDevs delivered both.{" "}
        <Highlight>
          Our clients instantly noticed the modern and polished interfaces.
        </Highlight>{" "}
        Essential for any growing business.
      </p>
    ),
  },
  {
    name: "Ananya Gupta",
    role: "Product Designer at BrightApps",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs made it effortless to design intuitive experiences.{" "}
        <Highlight>
          Their prebuilt components save time and look stunning in production.
        </Highlight>{" "}
        Perfect for tackling complex projects.
      </p>
    ),
  },
  {
    name: "Praneeth Reddy",
    role: "Creative Director at FinEdge",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        Our fintech platform’s user experience has improved massively.{" "}
        <Highlight>
          The smooth animations and clean UI have received incredible feedback.
        </Highlight>{" "}
        CurryDevs exceeded expectations.
      </p>
    ),
  },
  {
    name: "Khushi Agarwal",
    role: "Web Developer at LogiChain",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        Building dashboards has never been easier.{" "}
        <Highlight>
          CurryDevs’ component library made our logistics platform efficient and
          beautiful.
        </Highlight>
      </p>
    ),
  },
  {
    name: "Aman Joshi",
    role: "Marketing Specialist at EcoRise",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        Thanks to CurryDevs, our marketing sites look flawless on every device.{" "}
        <Highlight>
          It has completely changed the way we approach online branding.
        </Highlight>
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "E-commerce Manager at TrendHive",
    img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        Our fashion storefront was completely transformed.{" "}
        <Highlight>
          Customers love the sleek, dynamic shopping experience CurryDevs
          created.
        </Highlight>
      </p>
    ),
  },
  {
    name: "David Kim",
    role: "Healthcare App Designer at MediTech",
    img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs helped us build healthcare apps that are{" "}
        <Highlight>user-friendly, accessible, and reliable.</Highlight> Their
        work is now part of our design system.
      </p>
    ),
  },
  {
    name: "Sparsh Jain",
    role: "EdTech Founder at Learnify",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=40&h=40&fit=crop&crop=face",
    description: (
      <p>
        CurryDevs doubled our platform’s usability with education-focused
        designs.{" "}
        <Highlight>
          Teachers and students alike love the intuitive interface.
        </Highlight>
      </p>
    ),
  },
];


export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-float stagger-3"></div>

      <div className="container-custom">
        <div className="relative z-10 flex flex-col items-center justify-center">
          <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
            TESTIMONIALS
          </span>
          <h2 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
            Let's hear from our Clients
          </h2>
        </div>

        <div className="relative mt-6 max-h-[600px] overflow-hidden">
          <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-3">
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
