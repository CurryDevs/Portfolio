"use client";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    Modal,
    ModalContent,
    ModalTrigger,
    useModal,
} from "./animated-modal";

export function StartProjectModal() {
    return (
        <Modal>
            <ModalTrigger className="text-brand-text hover:text-brand-accent-primary transition-smooth font-medium cursor-pointer">
                Book a Call
            </ModalTrigger>
            <WideModalBody>
                <ModalContent className="!p-0">
                    <CalendlyEmbed />
                </ModalContent>
            </WideModalBody>
        </Modal>
    );
}

function WideModalBody({ children }: { children: React.ReactNode }) {
    const { open, setOpen } = useModal();

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    const modalRef = useRef<HTMLDivElement>(null);

    const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                        backdropFilter: "blur(10px)",
                    }}
                    exit={{
                        opacity: 0,
                        backdropFilter: "blur(0px)",
                    }}
                    className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center z-50"
                    onClick={handleOutsideClick}
                >
                    <Overlay />

                    <motion.div
                        ref={modalRef}
                        className="min-h-[50%] max-h-[95%] max-w-[75%] w-[75%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col overflow-hidden"
                        initial={{
                            opacity: 0,
                            scale: 0.5,
                            rotateX: 40,
                            y: 40,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotateX: 0,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                            rotateX: 10,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 15,
                        }}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function CalendlyEmbed() {
    const { setOpen } = useModal();

    useEffect(() => {
        // Load Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script when component unmounts
            const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (existingScript) {
                document.body.removeChild(existingScript);
            }
        };
    }, []);

    return (
        <div className="relative">
            {/* Close button */}
            <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-10 text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors bg-white dark:bg-neutral-800 rounded-full p-2 shadow-lg"
            >
                ✕
            </button>

            {/* Calendly widget */}
            <div
                className="calendly-inline-widget overflow-hidden"
                data-url="https://calendly.com/currydevs-co/30min"
                style={{
                    width: '100%',
                    height: '650px',
                    minWidth: '800px',
                    maxWidth: '100%',
                    overflow: 'hidden'
                }}
            />

            {/* Custom CSS to hide scrollbars */}
            <style jsx>{`
                .calendly-inline-widget {
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none; /* Internet Explorer 10+ */
                }
                .calendly-inline-widget::-webkit-scrollbar {
                    display: none; /* WebKit */
                }
                .calendly-inline-widget iframe {
                    border: none !important;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .calendly-inline-widget iframe::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    );
}

const Overlay = ({ className }: { className?: string }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                backdropFilter: "blur(10px)",
            }}
            exit={{
                opacity: 0,
                backdropFilter: "blur(0px)",
            }}
            className={`fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}
        ></motion.div>
    );
};