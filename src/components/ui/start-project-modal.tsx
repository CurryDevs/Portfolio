"use client";
import React from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "./animated-modal";
import { motion } from "framer-motion";

export function StartProjectModal() {
    const projectImages = [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    return (
        <Modal>
            <ModalTrigger className="bg-white text-black flex justify-center group/modal-btn px-4 py-2 rounded-md border border-gray-200 shadow-sm">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    Book a Call
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
                    📞
                </div>
            </ModalTrigger>
            <ModalBody>
                <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                        Let's build your{" "}
                        <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                            dream project
                        </span>{" "}
                        together! 🚀
                    </h4>

                    <div className="flex justify-center items-center">
                        {projectImages.map((image, idx) => (
                            <motion.div
                                key={"images" + idx}
                                style={{
                                    rotate: Math.random() * 20 - 10,
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 100,
                                }}
                                whileTap={{
                                    scale: 1.1,
                                    rotate: 0,
                                    zIndex: 100,
                                }}
                                className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                            >
                                <img
                                    src={image}
                                    alt="project images"
                                    width="500"
                                    height="500"
                                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                        <div className="flex items-center justify-center">
                            <CodeIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Custom development
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <DesignIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Modern UI/UX design
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <SpeedIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Lightning fast performance
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <MobileIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Mobile responsive
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <SupportIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                24/7 support
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <LaunchIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Launch ready
                            </span>
                        </div>
                    </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                    <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                        Cancel
                    </button>
                    <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                        Get Started
                    </button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}

const CodeIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 8l-4 4l4 4" />
            <path d="M17 8l4 4l-4 4" />
            <path d="M14 4l-4 16" />
        </svg>
    );
};

const DesignIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2l3.09 6.26l6.91 1.01l-5 4.87l1.18 6.88l-6.18 -3.25l-6.18 3.25l1.18 -6.88l-5 -4.87l6.91 -1.01z" />
        </svg>
    );
};

const SpeedIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
            <path d="M12 7v5l3 3" />
        </svg>
    );
};

const MobileIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-16z" />
            <path d="M11 4h2" />
            <path d="M12 17v.01" />
        </svg>
    );
};

const SupportIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
            <path d="M12 12l0 .01" />
            <path d="M8 12l0 .01" />
            <path d="M16 12l0 .01" />
        </svg>
    );
};

const LaunchIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    );
};