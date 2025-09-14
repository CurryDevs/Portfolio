"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Clock,
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

const processData: ProcessStep[] = [
  {
    title: "Discovery & Planning",
    description: "Understanding your vision and creating a strategic roadmap",
    status: "completed",
    phase: "Phase 1",
    progress: 100,
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
    status: "in-progress",
    phase: "Phase 2",
    progress: 75,
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
    status: "upcoming",
    phase: "Phase 3",
    progress: 0,
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
    status: "upcoming",
    phase: "Phase 4",
    progress: 0,
    icon: <Rocket className="w-6 h-6" />,
    tasks: [
      "Production deployment",
      "Performance monitoring",
      "User training & documentation",
      "Ongoing support & updates",
    ],
  },
];

const getStatusColor = (status: ProcessStep["status"]) => {
  switch (status) {
    case "completed":
      return "bg-green-500/10 text-green-400 border-green-500/20";
    case "in-progress":
      return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    case "upcoming":
      return "bg-gray-500/10 text-gray-400 border-gray-500/20";
  }
};

const getStatusIcon = (status: ProcessStep["status"]) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-4 h-4 text-green-400" />;
    case "in-progress":
      return <Clock className="w-4 h-4 text-blue-400" />;
    case "upcoming":
      return <Circle className="w-4 h-4 text-gray-400" />;
  }
};

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-float stagger-3"></div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            <span className="mb-2 text-center block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-xl text-transparent">
              OUR PROCESS
            </span>
            <h2 className="mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
              What our Client Experiences
            </h2>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {processData.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8 relative"
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 -ml-4 hidden md:block">
                <div
                  className={`w-3 h-3 rounded-full -ml-[6px] mt-8 ${step.status === "completed"
                      ? "bg-green-400"
                      : step.status === "in-progress"
                        ? "bg-blue-400"
                        : "bg-gray-400"
                    }`}
                />
              </div>

              <Card className="p-6 ml-4 hover:shadow-xl transition-all duration-300 bg-white/5 border-white/10 backdrop-blur-sm hover-lift hover-glow">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-white/10 text-brand-text">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-brand-text">
                        {step.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className={getStatusColor(step.status)}
                      >
                        {step.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <p className="text-brand-text-muted mb-4 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-brand-text-muted">
                    {getStatusIcon(step.status)}
                    <span className="font-medium">{step.phase}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Progress
                      value={step.progress}
                      className="h-2 flex-1 bg-white/10"
                    />
                    <span className="text-sm text-brand-text-muted w-12 font-medium">
                      {step.progress}%
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.tasks.map((task, taskIndex) => (
                      <motion.div
                        key={task}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: taskIndex * 0.1 }}
                        className="flex items-center gap-2 text-sm text-brand-text-muted hover:text-brand-text transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-brand-accent-primary flex-shrink-0" />
                        <span>{task}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-brand-text-muted mb-6">
            Ready to start your project with our proven process?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary border border-white/10 text-white rounded-2xl hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm hover-lift"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
