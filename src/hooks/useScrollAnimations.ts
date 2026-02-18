import { useEffect, useRef } from 'react';

export const useScrollAnimations = () => {
  const animationRef = useRef<{ destroy: () => void; refresh: () => void } | null>(null);

  useEffect(() => {
    // Dynamically import the ScrollAnimations class
    const initAnimations = async () => {
      try {
        // Import the module
        const { ScrollAnimations, addAnimationClasses, animationStyles } = await import('../utils/scrollAnimations');
        
        // Add CSS styles to head
        if (!document.getElementById('scroll-animations-styles')) {
          const style = document.createElement('style');
          style.id = 'scroll-animations-styles';
          style.textContent = animationStyles;
          document.head.appendChild(style);
        }

        // Add animation classes to elements
        addAnimationClasses();

        // Initialize scroll animations
        const scrollAnimations = new ScrollAnimations();
        animationRef.current = scrollAnimations;

        // Handle window resize
        const handleResize = () => {
          scrollAnimations.refresh();
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
          scrollAnimations.destroy();
        };
      } catch (error) {
        console.error('Failed to initialize scroll animations:', error);
      }
    };

    const cleanup = initAnimations();

    return () => {
      cleanup.then(cleanupFn => {
        if (cleanupFn) cleanupFn();
      });
    };
  }, []);

  // Method to manually refresh animations
  const refreshAnimations = () => {
    if (animationRef.current) {
      animationRef.current.refresh();
    }
  };

  return { refreshAnimations };
};
