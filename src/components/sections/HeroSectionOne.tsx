"use client";
import { motion } from "framer-motion";

export function HeroSectionOne() {
    return (
        <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
            <Navbar />
            <div className="absolute inset-y-0 left-0 h-full w-px bg-white/20">
                <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-brand-text to-transparent" />
            </div>
            <div className="absolute inset-y-0 right-0 h-full w-px bg-white/20">
                <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-brand-text to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-white/20">
                <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-brand-text to-transparent" />
            </div>
            <div className="px-4 py-10 md:py-20">
                <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-brand-text md:text-4xl lg:text-7xl">
                    {"We craft fast, elegant web experiences".split(" ").map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1,
                                ease: "easeInOut",
                            }}
                            className="mr-2 inline-block"
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-brand-text-muted"
                >
                    Modern frontend, solid backend, and a product mindset. Your idea, our code.
                    We build digital experiences that users love and businesses trust.
                </motion.p>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1,
                    }}
                    className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                >
                    <button className="w-60 transform rounded-lg bg-brand-text px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90">
                        Start Project
                    </button>
                    <button className="w-60 transform rounded-lg border border-white/20 bg-white/5 px-6 py-2 font-medium text-brand-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10">
                        View Work
                    </button>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 1.2,
                    }}
                    className="relative z-10 mt-20 rounded-3xl border border-white/20 bg-white/5 p-4 shadow-strong backdrop-blur-sm"
                >
                    <div className="w-full overflow-hidden rounded-xl border border-white/10">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=675&fit=crop&crop=center"
                            alt="CurryDevs project showcase"
                            className="aspect-[16/9] h-auto w-full object-cover"
                            height={1000}
                            width={1000}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

const Navbar = () => {
    return (
        <nav className="flex w-full items-center justify-between border-t border-b border-white/20 px-4 py-4">
            <div className="flex items-center gap-2">
                <div className="size-7 rounded-full bg-gradient-to-br from-brand-text to-brand-text-muted" />
                <h1 className="text-base font-bold md:text-2xl text-brand-text">CurryDevs</h1>
            </div>
            <button className="w-24 transform rounded-lg bg-brand-text px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 md:w-32">
                Contact
            </button>
        </nav>
    );
};