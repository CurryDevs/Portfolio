"use client";

export function StartProjectModal() {
    const openCalendlyInNewTab = () => {
        // Open Calendly in a new tab
        window.open('https://calendly.com/currydevs/30min', '_blank');
    };

    return (
        <button
            onClick={openCalendlyInNewTab}
            className="text-brand-text hover:text-brand-accent-primary transition-smooth font-medium cursor-pointer"
        >
            Book a Call
        </button>
    );
}

