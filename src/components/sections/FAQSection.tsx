import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

type FAQItemType = {
  question: string;
  answer: string;
};

const faqData: FAQItemType[] = [
  {
    question: "What is web development?",
    answer: "Web development is the process of building and maintaining websites. It involves a combination of client-side and server-side programming, database management, and other web-related technologies."
  },
  {
    question: "What programming languages are essential for web development?",
    answer: "Essential languages for web development include HTML, CSS, and JavaScript for front-end development. For back-end development, popular languages include Python, Ruby, PHP, Java, and Node.js."
  },
  {
    question: "What's the difference between front-end and back-end development?",
    answer: "Front-end development focuses on the user interface and user experience of a website, while back-end development deals with server-side logic, databases, and application integration."
  },
  {
    question: "How long does it typically take to develop a website?",
    answer: "The time to develop a website can vary greatly depending on its complexity. A simple static website might take a few days, while a complex web application could take several months or even years."
  },
  {
    question: "What is responsive web design?",
    answer: "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that websites are accessible and visually appealing across different platforms."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-background px-4 py-12 text-foreground">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="mb-8 bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-medium text-transparent">
          Let's answer some questions
        </span>
        <h2 className="mb-8 text-5xl font-bold">Frequently Asked Questions</h2>
        <span className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        <AnimatePresence>
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </AnimatePresence>
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
        "rounded-xl border transition-colors mb-2",
        // isOpen ? "bg-muted/50" : "bg-card"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left"
      >
        <span
          className={cn(
            "text-lg font-medium transition-colors",
            isOpen ? "text-foreground" : "text-foreground"
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: "45deg" },
            closed: { rotate: "0deg" },
          }}
          transition={{ duration: 0.2 }}
        >
          <Plus
            className={cn(
              "h-5 w-5 transition-colors",
              isOpen ? "text-foreground" : "text-muted-foreground"
            )}
          />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : "0px",
          marginBottom: isOpen ? "16px" : "0px"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden px-4"
      >
        <p className="text-muted-foreground">{answer}</p>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;