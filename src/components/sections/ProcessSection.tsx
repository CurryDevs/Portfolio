"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Code,
  Rocket,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

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
    icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
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
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
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
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
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
    icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    tasks: [
      "Production deployment",
      "Performance monitoring",
      "User training & documentation",
      "Ongoing support & updates",
    ],
  },
];

export function ProcessSection() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const openCalendlyInNewTab = () => {
    window.open("https://cal.com/currydevs/30min", "_blank");
  };

  // Fixed mobile-specific animations with proper TypeScript types
  const mobileCardVariants = {
    collapsed: {
      height: 80,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 200,
      }
    },
    expanded: {
      height: "auto",
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 200,
      }
    }
  };

  const contentVariants = {
    collapsed: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    expanded: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1
      }
    }
  };

  const iconRotateVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 }
  };

  // Desktop animations (unchanged but properly typed)
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
        type: 'spring' as const,
        damping: 15,
        mass: 0.8,
        stiffness: 100,
        bounce: 0.3,
        duration: 0.8
      }
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
        ease: "easeOut" as const
      }
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
        ease: "easeOut" as const
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  const toggleStep = (index: number) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section id="process" className="py-8 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-8 sm:mb-14 md:mb-16"
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

        {/* Mobile Accordion Design (for screens smaller than 768px) */}
        <div className="block md:hidden">
          <motion.div
            className="w-full max-w-md mx-auto space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {processData.map((step, index) => (
              <motion.div
                key={step.title}
                variants={staggerItem}
                className="rounded-2xl bg-gradient-to-br from-[#232326] to-[#18181b] shadow-lg border border-gray-800 overflow-hidden"
              >
                <motion.div
                  variants={mobileCardVariants}
                  animate={expandedStep === index ? "expanded" : "collapsed"}
                  className="relative"
                >
                  {/* Clickable header */}
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer"
                    onClick={() => toggleStep(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-sm font-bold text-gray-100">
                        {index + 1}
                      </div>
                      <div className="text-left">
                        <h3 className="text-sm font-semibold text-gray-100 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <motion.div
                      variants={iconRotateVariants}
                      animate={expandedStep === index ? "expanded" : "collapsed"}
                      className="flex-shrink-0"
                    >
                      {expandedStep === index ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </motion.div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence>
                    {expandedStep === index && (
                      <motion.div
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={contentVariants}
                        className="px-4 pb-4"
                      >
                        <div className="flex items-center gap-2 mb-3 pt-2 border-t border-gray-800">
                          <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                            {step.icon}
                          </div>
                          <span className="text-xs text-gray-300 font-medium">Key Tasks</span>
                        </div>

                        <ul className="space-y-2">
                          {step.tasks.map((task, taskIndex) => (
                            <motion.li
                              key={task}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: taskIndex * 0.1 }}
                              className="flex items-center gap-2 text-gray-300 text-xs"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{task}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Progress indicator */}
                        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                          <span>Phase {index + 1} of 4</span>
                          <span>{(index + 1) * 25}% complete</span>
                        </div>
                        <div className="mt-1 w-full bg-gray-800 rounded-full h-1.5">
                          <div
                            className="bg-gradient-to-r from-primary to-primary/60 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${(index + 1) * 25}%` }}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop Banner Design (unchanged, for screens 768px and larger) */}
        <motion.div
          className="hidden md:grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-6 md:gap-8 max-w-6xl mx-auto"
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
          className="text-center mt-8 sm:mt-14 md:mt-16"
        >
          <motion.p
            variants={staggerItem}
            className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6"
          >
            Ready to start your project with our proven process?
          </motion.p>
          <motion.button
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}