import { useEffect, useRef } from 'react';

/**
 * Hook pour animer les éléments au scroll via IntersectionObserver.
 * Ajoute la classe 'is-visible' quand l'élément entre dans le viewport.
 */
const useScrollAnimation = (options = {}) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Respecter les préférences de l'utilisateur
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            element.classList.add('is-visible');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('is-visible');
                    observer.unobserve(element); // Animation une seule fois
                }
            },
            {
                threshold: options.threshold || 0.15,
                rootMargin: options.rootMargin || '0px'
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return ref;
};

export default useScrollAnimation;
