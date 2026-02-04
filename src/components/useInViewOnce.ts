import { useEffect, useRef, useState } from "react";

interface InViewOptions {
    rootMargin?: string;
    threshold?: number | number[];
}

export const useInViewOnce = (options: InViewOptions = {}) => {
    const [isInView, setIsInView] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!elementRef.current || isInView) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: options.rootMargin ?? "0px",
                threshold: options.threshold ?? 0.1,
            }
        );

        observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, [isInView, options.rootMargin, options.threshold]);

    return { elementRef, isInView };
};
