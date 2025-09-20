"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Code,
  Rocket,
  Users,
} from "lucide-react";

interface ProcessStep {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming";
  phase: string;
  progress: number;
  tasks: string[];
  icon: React.ReactNode;
}

const processData: Omit<ProcessStep, "status" | "phase" | "progress">[] = [
  {
    title: "Discovery & Planning",
    description: "Understanding your vision and creating a strategic roadmap",
    icon: <Lightbulb className="w-6 h-6" />,
    tasks: [
      "Requirements gathering",
      "Market research & analysis",
      "Technical architecture planning",
      "Project timeline creation",
    ],
  },
  {
    title: "Design & Prototyping",
    description:
      "Creating beautiful, user-centered designs and interactive prototypes",
    icon: <Users className="w-6 h-6" />,
    tasks: [
      "User experience design",
      "Visual design system",
      "Interactive prototypes",
      "Design system documentation",
    ],
  },
  {
    title: "Development & Testing",
    description: "Building robust, scalable solutions with modern technologies",
    icon: <Code className="w-6 h-6" />,
    tasks: [
      "Frontend development",
      "Backend architecture",
      "Quality assurance testing",
      "Performance optimization",
    ],
  },
  {
    title: "Launch & Support",
    description: "Deploying your solution and providing ongoing maintenance",
    icon: <Rocket className="w-6 h-6" />,
    tasks: [
      "Production deployment",
      "Performance monitoring",
      "User training & documentation",
      "Ongoing support & updates",
    ],
  },
];

export function ProcessSection() {
  const openCalendlyInNewTab = () => {
    window.open("https://cal.com/currydevs/30min", "_blank");
  };

  // Animation variants for rolled paper effect
  const paperRollVariants = {
    hidden: {
      opacity: 0,
      rotateX: 90,
      transformOrigin: "top center",
      y: -50
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        mass: 0.8,
        stiffness: 100,
        bounce: 0.3,
        duration: 0.8
      } as any
    }
  };

  const fadeInVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      } as any
    }
  };

  const slideInVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      } as any
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      } as any
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      } as any
    }
  };

  return (
    <section id="process" className="py-12 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <div className="relative z-10 flex flex-col items-center justify-center mb-0 sm:mb-8 md:mb-12">
            <motion.span
              variants={staggerItem}
              className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent font-semibold tracking-wide uppercase"
            >
              OUR PROCESS
            </motion.span>
            <motion.h2
              variants={staggerItem}
              className="mb-0 sm:mb-8 text-center text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100"
            >
              What our Client Experiences
            </motion.h2>
          </div>
        </motion.div>

        {/* Banner style process steps */}
        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-stretch gap-6 md:gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processData.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={staggerItem}
              className={`relative flex-1 flex flex-col items-center justify-between min-w-[220px] max-w-[320px] w-full mx-auto md:mx-0`}
            >
              {/* Step number circle - fixed position with no hover movement */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#232326] to-[#18181b] flex items-center justify-center text-2xl font-bold text-gray-200 shadow-md border-2 border-[#232326] z-20">
                {idx + 1}
              </div>

              {/* Paper roll container with curling effect */}
              <motion.div
                className="w-full flex flex-col items-center rounded-b-[2.5rem] rounded-tr-2xl rounded-tl-2xl pt-12 pb-10 px-6 bg-gradient-to-b from-[#232326] via-[#18181b] to-[#101012] shadow-lg relative overflow-hidden"
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
                variants={paperRollVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Paper curl effect at the top */}
                <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-[#2c2c30] to-[#232326] opacity-80 rounded-t-lg rounded-tr-2xl rounded-tl-2xl"></div>

                {/* Title & description */}
                <motion.h3
                  className="mt-4 mb-3 text-lg font-bold text-gray-100 text-center break-words whitespace-normal w-full"
                  variants={fadeInVariants}
                >
                  {step.title}
                </motion.h3>
                <motion.p
                  className="text-gray-300 text-center text-sm mb-5 break-words whitespace-normal w-full"
                  variants={fadeInVariants}
                >
                  {step.description}
                </motion.p>

                {/* Tasks list */}
                <ul className="list-none p-0 m-0 flex flex-col gap-2 mb-8 w-full">
                  {step.tasks.map((task, taskIdx) => (
                    <motion.li
                      key={task}
                      className="flex items-start gap-2 text-gray-300 text-xs justify-center break-words whitespace-normal w-full"
                      variants={slideInVariants}
                      custom={taskIdx}
                    >
                      <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-left">{task}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Icon at bottom */}
                <motion.div
                  className="mt-auto flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#232326] to-[#18181b] text-3xl text-gray-300 shadow-md"
                  variants={fadeInVariants}
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  {step.icon}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center mt-10 sm:mt-14 md:mt-16"
        >
          <motion.p
            variants={staggerItem}
            className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6"
          >
            Ready to start your project with our proven process?
          </motion.p>
          <motion.a
            onClick={openCalendlyInNewTab}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#232326] via-[#18181b] to-[#101012] text-gray-100 font-semibold rounded-xl sm:rounded-2xl shadow-md border border-gray-700 hover:shadow-lg hover:cursor-pointer transition-all duration-300"
            variants={staggerItem}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 text-gray-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}