import { useEffect } from 'react';

export function useSmoothScroll() {
    useEffect(() => {
        // Enhanced smooth scrolling for anchor links
        const handleAnchorClick = (e: Event) => {
            const target = e.target as HTMLAnchorElement;

            if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                const href = target.getAttribute('href');
                if (href && href !== '#') {
                    e.preventDefault();

                    const targetElement = document.querySelector(href);
                    if (targetElement) {
                        const headerHeight = 64; // Height of fixed header (h-16 = 64px)
                        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        };

        // Add event listener to document
        document.addEventListener('click', handleAnchorClick);

        // Cleanup
        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, []);
}