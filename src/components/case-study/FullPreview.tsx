
import ssDemo from "@/assets/ss_demo.jpeg";

const FullPreview = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center animate-fade-in">
            {/* Screenshot Preview */}
            <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/40 bg-surface-elevated mb-8">
                <img
                    src={ssDemo}
                    alt="Full Website Preview"
                    className="w-full h-auto object-top object-cover"
                    style={{ minHeight: 400, background: '#18181b' }}
                />
            </div>
            {/* Details Section */}
            <div className="max-w-3xl w-full bg-surface/80 rounded-2xl p-8 neumorphic mb-4 text-center">
                <h3 className="text-2xl font-bold text-accent mb-2">Spain Academy</h3>
                <p className="text-text-secondary mb-4">
                    A modern, vibrant website designed to attract students to Spanish-LCA courses. The site features immersive content, clear navigation, and a professional look that reflects the energy and excitement of Spanish culture.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-2">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Education</span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Landing Page</span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">Responsive</span>
                </div>
                <div className="text-text-muted text-xs">Client: Spain Academy &nbsp;|&nbsp; Year: 2025</div>
            </div>
        </div>
    );
};

export default FullPreview;
