import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const openCalendlyInNewTab = () => {
    // Open Calendly in a new tab
    window.open("https://cal.com/currydevs/30min", "_blank");
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-6 py-20 lg:px-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-lg:flex max-lg:flex-col max-lg:items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8 max-lg:flex max-lg:opacity-100 max-lg:transform-none max-lg:flex-col max-lg:items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
          >
            Ready to bring your vision to life?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl max-lg:opacity-100 max-lg:transform-none max-lg:text-center"
          >
            Let's collaborate on your next project. From web development to
            mobile apps, we create digital solutions that make an impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              onClick={openCalendlyInNewTab}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Your Project
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-secondary/10 text-foreground font-medium px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute  bg-gradient-to-br from-white/10 to-transparent blur-3xl rounded-full" />
            <img
              src="/phone-mockup.png"
              alt="Mobile app interface"
              className="relative w-60 max-[1023px]:hidden rounded-3xl shadow-2xl animate-glow"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
