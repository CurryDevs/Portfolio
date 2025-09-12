"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface StatsData {
    value: string;
    label: string;
    numericValue: number;
    suffix: string;
}

const statsData: StatsData[] = [
    { value: "500+", label: "Projects Completed", numericValue: 500, suffix: "+" },
    { value: "5+", label: "Years of Experience", numericValue: 5, suffix: "+" },
    { value: "80%", label: "Increase in Efficiency", numericValue: 80, suffix: "%" },
    { value: "200+", label: "Happy Clients", numericValue: 200, suffix: "+" },
    { value: "99%", label: "Client Satisfaction", numericValue: 99, suffix: "%" },
];

// Counter animation component
function AnimatedCounter({
    value,
    suffix,
    duration = 2000,
    delay = 0
}: {
    value: number;
    suffix: string;
    duration?: number;
    delay?: number;
}) {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView && !hasStarted) {
            setHasStarted(true);
            const startTime = Date.now() + delay;
            const endTime = startTime + duration;

            const updateCount = () => {
                const now = Date.now();
                if (now < startTime) {
                    requestAnimationFrame(updateCount);
                    return;
                }

                const progress = Math.min((now - startTime) / duration, 1);
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(easeOutQuart * value);

                setCount(currentCount);

                if (now < endTime) {
                    requestAnimationFrame(updateCount);
                } else {
                    setCount(value);
                }
            };

            requestAnimationFrame(updateCount);
        }
    }, [isInView, value, duration, delay, hasStarted]);

    return (
        <span ref={ref} className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            {count}{suffix}
        </span>
    );
}

export function StatsSection() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl animate-float"></div>
            <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-float stagger-3"></div>

            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-h2 text-brand-text mb-6 animate-slide-up">
                        Delivering Exceptional Results
                    </h2>
                    <p className="text-lg text-brand-text-muted animate-fade-in stagger-2">
                        Numbers that speak for themselves - our track record of success
                    </p>
                </motion.div>

                <Card className="relative overflow-hidden bg-gradient-to-r from-gray-800/50 via-gray-700/30 to-gray-800/50 border border-white/10 backdrop-blur-sm hover-glow rounded-3xl">
                    {/* Decorative circles - matching the reference design */}
                    <div className="absolute top-0 left-0 w-80 h-80 border-4 border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-80 h-80 border-4 border-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

                    {/* Small decorative dots */}
                    <div className="absolute top-8 left-8 w-2 h-2 bg-white/20 rounded-full"></div>
                    <div className="absolute top-12 right-16 w-3 h-3 bg-white/10 rounded-full"></div>

                    <CardContent className="p-8 md:p-16 relative z-10">
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                            {statsData.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative group text-center"
                                >
                                    <div className="flex flex-col space-y-3">
                                        <AnimatedCounter
                                            value={stat.numericValue}
                                            suffix={stat.suffix}
                                            duration={2000}
                                            delay={index * 200}
                                        />
                                        <p className="text-gray-300 text-sm md:text-base font-medium">
                                            {stat.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}