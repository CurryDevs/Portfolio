import React, { useState, useRef, useEffect } from 'react';

interface iPhone15ProMaxFrameProps {
    websiteUrl: string;
    className?: string;
}

const iPhone15ProMaxFrame: React.FC<iPhone15ProMaxFrameProps> = ({
    websiteUrl,
    className = ''
}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const scrollbarRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState(0);
    const [viewportHeight, setViewportHeight] = useState(0);

    // Simulate content height for scrollbar (since we can't access iframe content)
    useEffect(() => {
        // Simulate a typical mobile website height
        setContentHeight(2400); // Simulated content height
        setViewportHeight(600); // iPhone viewport height
    }, []);

    const handleScrollbarDrag = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsScrolling(true);

        const startY = e.clientY;
        const startScrollTop = scrollPosition;

        const handleMouseMove = (moveEvent: MouseEvent) => {
            const deltaY = moveEvent.clientY - startY;
            const scrollbarHeight = scrollbarRef.current?.clientHeight || 0;
            const maxScroll = contentHeight - viewportHeight;
            const scrollRatio = deltaY / (scrollbarHeight - 40); // 40px is thumb height

            const newScrollPosition = Math.max(0, Math.min(maxScroll, startScrollTop + (scrollRatio * maxScroll)));
            setScrollPosition(newScrollPosition);

            // Send scroll command to iframe (if same origin)
            try {
                if (iframeRef.current?.contentWindow) {
                    iframeRef.current.contentWindow.scrollTo(0, newScrollPosition);
                }
            } catch (error) {
                // Cross-origin restriction, ignore
            }
        };

        const handleMouseUp = () => {
            setIsScrolling(false);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const scrollThumbPosition = () => {
        const maxScroll = contentHeight - viewportHeight;
        const scrollbarHeight = 200; // Fixed scrollbar height
        const thumbHeight = 40;
        const maxThumbPosition = scrollbarHeight - thumbHeight;

        if (maxScroll <= 0) return 0;
        return (scrollPosition / maxScroll) * maxThumbPosition;
    };

    const handleWheelScroll = (e: React.WheelEvent) => {
        e.preventDefault();
        const maxScroll = contentHeight - viewportHeight;
        const newScrollPosition = Math.max(0, Math.min(maxScroll, scrollPosition + e.deltaY));
        setScrollPosition(newScrollPosition);

        try {
            if (iframeRef.current?.contentWindow) {
                iframeRef.current.contentWindow.scrollTo(0, newScrollPosition);
            }
        } catch (error) {
            // Cross-origin restriction, ignore
        }
    };

    return (
        <div className={`flex items-center justify-center gap-8 ${className}`}>
            {/* iPhone 15 Pro Max Frame */}
            <div className="relative">
                {/* Phone Frame */}
                <div
                    className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[3rem] p-2 shadow-2xl"
                    style={{
                        width: '264px',
                        height: '560px',
                    }}
                >
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20 dynamic-island-pulse" />

                    {/* Screen */}
                    <div
                        className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden"
                        onWheel={handleWheelScroll}
                    >
                        {/* Status Bar */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-10 flex items-center justify-between px-6 text-white text-sm">
                            <span className="font-medium">9:41</span>
                            <div className="flex items-center gap-1">
                                <div className="flex gap-1">
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                    <div className="w-1 h-1 bg-white rounded-full"></div>
                                    <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                </div>
                                <div className="w-6 h-3 border border-white rounded-sm">
                                    <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                                </div>
                            </div>
                        </div>

                        {/* Website Content */}
                        <iframe
                            ref={iframeRef}
                            src={websiteUrl}
                            className="w-full h-full border-none"
                            style={{
                                transform: `translateY(-${scrollPosition}px)`,
                                transition: isScrolling ? 'none' : 'transform 0.1s ease-out',
                            }}
                            title="Website Preview"
                            sandbox="allow-scripts allow-same-origin"
                        />

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
                    </div>

                    {/* Side Buttons */}
                    <div className="absolute left-0 top-20 w-1 h-8 bg-gray-700 rounded-l-lg" />
                    <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-l-lg" />
                    <div className="absolute left-0 top-48 w-1 h-12 bg-gray-700 rounded-l-lg" />
                    <div className="absolute right-0 top-32 w-1 h-16 bg-gray-700 rounded-r-lg" />
                </div>

                {/* Phone Reflection */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[3rem] pointer-events-none"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    }}
                />
            </div>

            {/* Custom Scrollbar */}
            <div className="flex flex-col items-center">
                <div className="text-sm text-gray-400 mb-2 font-medium">Scroll</div>
                <div
                    ref={scrollbarRef}
                    className="relative w-3 bg-gray-700 rounded-full cursor-pointer"
                    style={{ height: '200px' }}
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickY = e.clientY - rect.top;
                        const scrollbarHeight = rect.height;
                        const thumbHeight = 40;
                        const maxScroll = contentHeight - viewportHeight;
                        const scrollRatio = (clickY - thumbHeight / 2) / (scrollbarHeight - thumbHeight);
                        const newScrollPosition = Math.max(0, Math.min(maxScroll, scrollRatio * maxScroll));
                        setScrollPosition(newScrollPosition);
                    }}
                >
                    {/* Scrollbar Track */}
                    <div className="absolute inset-0 bg-gray-600 rounded-full" />

                    {/* Scrollbar Thumb */}
                    <div
                        className="absolute w-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full cursor-grab active:cursor-grabbing transition-colors hover:from-blue-300 hover:to-blue-500"
                        style={{
                            height: '40px',
                            top: `${scrollThumbPosition()}px`,
                            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        }}
                        onMouseDown={handleScrollbarDrag}
                    />

                    {/* Scroll Indicators */}
                    <div className="absolute -right-8 top-0 text-xs text-gray-500">Top</div>
                    <div className="absolute -right-12 bottom-0 text-xs text-gray-500">Bottom</div>
                </div>

                {/* Scroll Progress */}
                <div className="mt-4 text-xs text-gray-400 text-center">
                    <div className="mb-1">Progress</div>
                    <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 transition-all duration-200"
                            style={{
                                width: `${Math.min(100, (scrollPosition / (contentHeight - viewportHeight)) * 100)}%`
                            }}
                        />
                    </div>
                    <div className="mt-1">
                        {Math.round((scrollPosition / (contentHeight - viewportHeight)) * 100) || 0}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default iPhone15ProMaxFrame;