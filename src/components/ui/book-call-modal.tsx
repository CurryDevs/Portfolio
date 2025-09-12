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

export function BookCallModal() {
    const services = [
        "Web Development",
        "UI/UX Design",
        "E-commerce Solutions",
        "Mobile Apps",
        "SEO Optimization",
        "Consulting"
    ];

    return (
        <Modal>
            <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                    Book a Call
                </span>
                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                    📞
                </div>
            </ModalTrigger>
            <ModalBody>
                <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                        Let's discuss your{" "}
                        <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                            project
                        </span>{" "}
                        together! 🚀
                    </h4>

                    <div className="flex justify-center items-center mb-6">
                        {services.map((service, idx) => (
                            <motion.div
                                key={"service" + idx}
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
                                className="rounded-xl -mr-4 mt-4 p-3 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                            >
                                <div className="rounded-lg h-16 w-16 md:h-20 md:w-20 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs md:text-sm font-medium text-center">
                                    {service}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="py-6 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                        <div className="flex items-center justify-center">
                            <ClockIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                30 min consultation
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <VideoIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Video call
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <CheckIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Free consultation
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <CalendarIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Flexible scheduling
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <UserIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Expert guidance
                            </span>
                        </div>
                        <div className="flex items-center justify-center">
                            <RocketIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                Project roadmap
                            </span>
                        </div>
                    </div>
                </ModalContent>
                <ModalFooter className="gap-4">
                    <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                        Cancel
                    </button>
                    <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                        Schedule Call
                    </button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    );
}

const ClockIcon = ({ className }: { className?: string }) => {
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
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
        </svg>
    );
};

const VideoIcon = ({ className }: { className?: string }) => {
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
            <polygon points="23,7 16,12 23,17 23,7" />
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
    );
};

const CheckIcon = ({ className }: { className?: string }) => {
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
            <polyline points="20,6 9,17 4,12" />
        </svg>
    );
};

const CalendarIcon = ({ className }: { className?: string }) => {
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
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
    );
};

const UserIcon = ({ className }: { className?: string }) => {
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
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    );
};

const RocketIcon = ({ className }: { className?: string }) => {
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
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    );
};