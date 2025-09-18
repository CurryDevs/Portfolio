"use client";
import { Phone } from "lucide-react";

export function StartProjectModal() {
    const openCalendlyInNewTab = () => {
        // Open Calendly in a new tab
        window.open('https://calendly.com/currydevs/30min', '_blank');
    };

    return (
        <button
            onClick={openCalendlyInNewTab}
            className="group/btn relative overflow-hidden bg-white hover:bg-white text-black hover:text-gray-900 px-5 py-2.5 rounded-xl font-medium transition-all duration-500 flex items-center justify-center hover:scale-[1.02] backdrop-blur-sm border border-gray-300/30 hover:border-white shadow-lg hover:shadow-2xl hover:shadow-white/20 isolate"
        >
            {/* Animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover/btn:from-white/20 group-hover/btn:via-white/40 group-hover/btn:to-white/20 transition-all duration-500 rounded-xl"></div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out"></div>

            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-xl bg-white/0 group-hover/btn:bg-white/10 group-hover/btn:animate-pulse"></div>

            {/* Text that slides out on hover */}
            <span className="relative z-10 text-sm font-semibold transition-all duration-500 group-hover/btn:opacity-0 group-hover/btn:-translate-y-2 group-hover/btn:font-bold">Book a Call</span>

            {/* Phone icon that slides in on hover */}
            <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 translate-y-2 group-hover/btn:opacity-100 group-hover/btn:translate-y-0 transition-all duration-500 delay-100">
                <Phone className="w-5 h-5 group-hover/btn:animate-pulse" />
            </div>
        </button>
    );
}

