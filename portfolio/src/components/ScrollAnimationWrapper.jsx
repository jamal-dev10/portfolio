// components/ScrollAnimationWrapper.jsx
import { useEffect, useRef, useState } from 'react';

// Hook for scroll animation with reset option
function useScrollAnimation(threshold = 0.1, triggerOnce = true) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        } else {

          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  return [ref, isVisible];
}

// ScrollAnimationWrapper Component
export default function ScrollAnimationWrapper({ 
  children, 
  animation = 'fadeUp', 
  delay = 0, 
  duration = 0.6,
  triggerOnce = false 
}) {
  const [ref, isVisible] = useScrollAnimation(0.1, triggerOnce);

  const animations = {
    fadeUp: {
      initial: { opacity: 0, transform: 'translateY(50px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeDown: {
      initial: { opacity: 0, transform: 'translateY(-50px)' },
      animate: { opacity: 1, transform: 'translateY(0)' }
    },
    fadeLeft: {
      initial: { opacity: 0, transform: 'translateX(-50px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    fadeRight: {
      initial: { opacity: 0, transform: 'translateX(50px)' },
      animate: { opacity: 1, transform: 'translateX(0)' }
    },
    scale: {
      initial: { opacity: 0, transform: 'scale(0.8)' },
      animate: { opacity: 1, transform: 'scale(1)' }
    },
    rotate: {
      initial: { opacity: 0, transform: 'rotate(-10deg) scale(0.9)' },
      animate: { opacity: 1, transform: 'rotate(0) scale(1)' }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <div
      ref={ref}
      style={{
        ...selectedAnimation.initial,
        ...(isVisible ? selectedAnimation.animate : {}),
        transition: `all ${duration}s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}