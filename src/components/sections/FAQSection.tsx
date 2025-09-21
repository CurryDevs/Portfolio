import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type FAQItemType = {
  question: string;
  answer: string;
};

const faqData: FAQItemType[] = [
  {
    question: "What services do you offer?",
    answer:
      "We provide end-to-end development services including frontend, backend, and full-stack web development. We also work on UI/UX design, API integrations, and custom solutions tailored to your business needs.",
  },
  {
    question: "How does the project process work?",
    answer:
      "We start by understanding your requirements and goals. Then we create a project roadmap, break it into milestones, and share regular progress updates. You’ll be involved in every stage to ensure the final product matches your vision.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "It depends on the complexity and scope. Small projects like landing pages or portfolio websites can take 1–2 weeks, while larger web applications may take 1–3 months. We’ll give you a clear timeline after discussing your requirements.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible pricing based on the project scope. For small projects, we usually charge a fixed price. For larger or ongoing work, we provide milestone-based payments. We’ll give you a detailed estimate before starting.",
  },
  {
    question: "Do you provide ongoing support after project delivery?",
    answer:
      "Yes, we provide post-launch support, maintenance, and updates to ensure your product runs smoothly. We can also set up a long-term support plan if you need continuous improvements.",
  },
  {
    question: "Can you work with existing projects or codebases?",
    answer:
      "Absolutely. We can help improve, optimize, or extend existing applications. We’ll review the current codebase and suggest the best approach before starting.",
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "We stay in touch through Email, Whatsapp, Google Meeet & project management tool like Notion. For discussions and updates, we can also connect through Google Meet or regular calls, along with scheduling demos to keep you involved throughout the process.",
  },
  {
    question: "How can I reach out or get started?",
    answer:
      "You’re welcome to reach out anytime! You can easily book a free consultation call using the button at the top right corner of our website. This helps us understand your needs and guide you through the best way to move forward.",
  },
];

// Container animation variants for staggered children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each child appears 0.1s after the previous
      delayChildren: 0.2, // Start animations after 0.2s
    },
  },
};

// Individual FAQ item animation variants
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const, // Custom smooth easing
    },
  },
};

const FAQSection: React.FC = () => {
  return (
    <section id="faqs" className="relative overflow-hidden bg-background px-4 py-12 text-foreground">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-sm sm:text-base md:text-l text-transparent">
          LET'S ANSWER YOUR QUESTIONS
        </span>
        <h2 className="mb-0 sm:mb-8 text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text">
          Frequently Asked Questions
        </h2>
        <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <FAQItem question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FAQItem: React.FC<FAQItemType> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      className={cn(
        "rounded-xl border transition-all duration-300 mb-2 hover:shadow-md hover:border-primary/20",
        isOpen ? "bg-muted/30 border-primary/30" : "bg-card/50 backdrop-blur-sm"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-muted/20 transition-colors duration-200 rounded-xl"
      >
        <span
          className={cn(
            "text-sm xs:text-base sm:text-lg lg:text-xl font-medium transition-colors",
            isOpen ? "text-foreground" : "text-foreground"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: {
              rotate: "45deg",
              scale: 1.1,
            },
            closed: {
              rotate: "0deg",
              scale: 1,
            },
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0"
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors duration-200",
              isOpen ? "text-primary" : "text-muted-foreground"
            )}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94],
          opacity: { duration: 0.3 }
        }}
        className="overflow-hidden px-4"
      >
        <motion.p
          initial={{ y: -10 }}
          animate={{ y: isOpen ? 0 : -10 }}
          transition={{ duration: 0.3, delay: isOpen ? 0.1 : 0 }}
          className="text-muted-foreground text-xs xs:text-sm sm:text-md leading-relaxed"
        >
          {answer}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
