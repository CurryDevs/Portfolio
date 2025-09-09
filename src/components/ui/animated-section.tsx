import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
    children: ReactNode;
    animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
    delay?: number;
    className?: string;
}

export function AnimatedSection({
    children,
    animation = 'fade-in',
    delay = 0,
    className
}: AnimatedSectionProps) {
    const { ref, isIntersecting } = useIntersectionObserver({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            className={cn(
                'opacity-0 transition-all duration-800 ease-out',
                isIntersecting && `animate-${animation}`,
                className
            )}
            style={{
                animationDelay: isIntersecting ? `${delay}ms` : undefined,
                animationFillMode: 'forwards'
            }}
        >
            {children}
        </div>
    );
}