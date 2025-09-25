import { useState } from 'react';

interface FullPreviewProps {
    livePreview: string;
}

const FullPreview = ({ livePreview }: FullPreviewProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setImageError(true);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center animate-fade-in">
            {/* Screenshot Preview */}
            <div className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl border-4 border-accent/40 bg-surface-elevated mb-8">
                {/* Skeleton Loading */}
                {isLoading && (
                    <div className="w-full h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
                        <div className="w-full h-full flex items-center justify-center">
                            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    </div>
                )}
                
                {/* Actual Image */}
                <img
                    src={livePreview}
                    alt="Full Website Preview"
                    className={`w-full h-auto object-top object-cover transition-opacity duration-300 ${
                        isLoading ? 'opacity-0 absolute' : 'opacity-100'
                    }`}
                    style={{ minHeight: 400, background: '#18181b' }}
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                />

                {/* Error State */}
                {imageError && (
                    <div className="w-full h-96 bg-gray-100 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                            <div className="text-4xl mb-2">⚠️</div>
                            <p>Failed to load image</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FullPreview;