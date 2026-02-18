// Scroll animation utility for parallax effects
export class ScrollAnimations {
  private observer: IntersectionObserver | null = null;
  private animatedElements: Set<Element> = new Set();

  constructor() {
    this.init();
  }

  private init = () => {
    // Configuration for Intersection Observer
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: [0.1, 0.3, 0.6] // Multiple thresholds for staggered animations
    };

    this.observer = new IntersectionObserver(this.handleIntersection, options);
    this.setupElements();
  };

  private setupElements = () => {
    // Find all elements with animation classes
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      this.observer?.observe(element);
    });
  };

  private handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      const element = entry.target;
      
      if (entry.isIntersecting && !this.animatedElements.has(element)) {
        this.animatedElements.add(element);
        
        // Add visible class with staggered delay
        const delay = this.getAnimationDelay(element, entry.intersectionRatio);
        setTimeout(() => {
          element.classList.add('visible');
        }, delay);
      }
    });
  };

  private getAnimationDelay = (element: Element, ratio: number): number => {
    // Stagger animations based on element position and intersection ratio
    const baseDelay = 100;
    const staggerDelay = 150;
    
    if (element.classList.contains('fade-up')) {
      return baseDelay + (1 - ratio) * staggerDelay;
    } else if (element.classList.contains('fade-left')) {
      return baseDelay + (1 - ratio) * staggerDelay * 1.2;
    } else if (element.classList.contains('fade-right')) {
      return baseDelay + (1 - ratio) * staggerDelay * 1.4;
    } else if (element.classList.contains('scale-up')) {
      return baseDelay + (1 - ratio) * staggerDelay * 0.8;
    }
    
    return baseDelay;
  };

  // Public method to reinitialize if new elements are added
  public refresh = () => {
    this.setupElements();
  };

  // Cleanup method
  public destroy = () => {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.animatedElements.clear();
  };
}

// Helper function to add animation classes to elements
export const addAnimationClasses = () => {
  // Add classes to section titles
  document.querySelectorAll('section h2').forEach((el, index) => {
    el.classList.add('animate-on-scroll', 'fade-up');
    (el as HTMLElement).style.animationDelay = `${index * 100}ms`;
  });

  // Add classes to section descriptions
  document.querySelectorAll('section p').forEach((el, index) => {
    el.classList.add('animate-on-scroll', 'fade-up');
    (el as HTMLElement).style.animationDelay = `${index * 150}ms`;
  });

  // Add classes to cards with staggered delays
  document.querySelectorAll('.grid > div').forEach((el, index) => {
    const animationType = index % 3 === 0 ? 'fade-left' : index % 3 === 1 ? 'fade-right' : 'fade-up';
    el.classList.add('animate-on-scroll', animationType);
    (el as HTMLElement).style.animationDelay = `${index * 100}ms`;
  });

  // Add classes to hero elements
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroButtons = document.querySelector('.hero-buttons');
  
  if (heroTitle) heroTitle.classList.add('animate-on-scroll', 'fade-up');
  if (heroSubtitle) heroSubtitle.classList.add('animate-on-scroll', 'fade-up');
  if (heroButtons) heroButtons.classList.add('animate-on-scroll', 'scale-up');
};

// CSS for animations
export const animationStyles = `
  .animate-on-scroll {
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
  }

  .animate-on-scroll.fade-up {
    transform: translateY(50px);
  }

  .animate-on-scroll.fade-left {
    transform: translateX(-50px);
  }

  .animate-on-scroll.fade-right {
    transform: translateX(50px);
  }

  .animate-on-scroll.scale-up {
    transform: scale(0.8);
    opacity: 0;
  }

  .animate-on-scroll.visible {
    opacity: 1 !important;
    transform: translateY(0) translateX(0) scale(1) !important;
  }

  /* Parallax effect for background elements */
  .parallax-bg {
    transition: transform 0.5s ease-out;
  }

  /* Staggered animation for cards */
  .stagger-animation > * {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .stagger-animation > *:nth-child(1) { animation-delay: 0ms; }
  .stagger-animation > *:nth-child(2) { animation-delay: 100ms; }
  .stagger-animation > *:nth-child(3) { animation-delay: 200ms; }
  .stagger-animation > *:nth-child(4) { animation-delay: 300ms; }
  .stagger-animation > *:nth-child(5) { animation-delay: 400ms; }
  .stagger-animation > *:nth-child(6) { animation-delay: 500ms; }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Smooth scroll behavior */
  html {
    scroll-behavior: smooth;
  }

  /* Reduced motion for accessibility */
  @media (prefers-reduced-motion: reduce) {
    .animate-on-scroll {
      transition: none;
      transform: none;
      opacity: 1;
    }
    
    html {
      scroll-behavior: auto;
    }
  }
`;
