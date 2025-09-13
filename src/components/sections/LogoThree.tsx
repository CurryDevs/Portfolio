import React from "react";
import LogoSlider from "@/components/ui/logo-slider";

const LogoThree = () => {
    const companies = [
        { name: "CurryDevs", icon: "🍛", color: "from-gray-900 to-black", isSpecial: true },
        { name: "InnovateHub", icon: "⚡", color: "from-yellow-500 to-orange-500" },
        { name: "DataFlow", icon: "📊", color: "from-green-500 to-emerald-500" },
        { name: "CloudVision", icon: "☁️", color: "from-cyan-500 to-blue-500" },
        { name: "NextGen", icon: "🚀", color: "from-purple-500 to-pink-500" },
        { name: "DigitalFirst", icon: "💎", color: "from-indigo-500 to-purple-500" },
        { name: "ScaleUp", icon: "📈", color: "from-red-500 to-pink-500" },
        { name: "FutureWorks", icon: "🔮", color: "from-violet-500 to-purple-500" },
    ];

    return (
        <section className="py-16 container-custom mx-auto rounded-xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1 text-center lg:text-left">
                    <h2 className="text-4xl font-semibold leading-tight text-brand-text">
                        Trusted by companies{" "}
                        <br />
                        <span className="p-2 italic text-4xl font-sans font-bold bg-gradient-to-r from-brand-text via-brand-text to-brand-text-muted bg-clip-text text-transparent">
                            all over the world
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-brand-text-muted">
                        Join thousands of organizations that rely on our solutions to
                        elevate their business. From startups to enterprises, we help
                        everyone achieve their goals with cutting-edge technology.
                    </p>
                </div>
                <div className="lg:col-span-2">
                    <LogoSlider companies={companies} />
                </div>
            </div>
        </section>
    );
};

export default LogoThree;