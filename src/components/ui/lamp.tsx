import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const [sizeMultiplier, setSizeMultiplier] = useState(1);
    
    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            if (width <= 475) {
                setSizeMultiplier(0.5); // 40% smaller
            } else if (width <= 570) {
                setSizeMultiplier(0.75); // 25% smaller
            } else {
                setSizeMultiplier(1); // Original size
            }
        };
        
        // Initial check
        checkScreenSize();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize);
        
        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // Calculate widths based on screen size
    const calculateSize = (baseSize: number) => {
        return `${baseSize * sizeMultiplier}rem`;
    };

    return (
        <div
            className={cn(
                "relative flex max-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 mt-[35rem] ">
                <motion.div
                    initial={{ opacity: 0.5, width: calculateSize(15) }}
                    whileInView={{ opacity: 1, width: calculateSize(30) }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto right-1/2 h-56 overflow-visible bg-gradient-conic from-white via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: calculateSize(15) }}
                    whileInView={{ opacity: 1, width: calculateSize(30) }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 bg-gradient-conic from-transparent via-transparent to-white text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <motion.div
                    initial={{ width: calculateSize(28) }}
                    whileInView={{ width: calculateSize(28) }}
                    className="absolute inset-auto z-50 h-36 -translate-y-1/2 rounded-full bg-white opacity-50 blur-3xl"
                ></motion.div>
                <motion.div
                    initial={{ width: calculateSize(8) }}
                    whileInView={{ width: calculateSize(16) }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 -translate-y-[6rem] rounded-full bg-white blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: calculateSize(15) }}
                    whileInView={{ width: calculateSize(30) }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-white "
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
            </div>

            <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};