import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimateProps {
  children: ReactNode;
  className?: string;
  delayClass?: string;
  threshold?: number;
  as?: 'div' | 'article' | 'section';
}

export default function ScrollAnimate({
  children,
  className = '',
  delayClass = '',
  threshold = 0.1,
  as = 'div',
}: ScrollAnimateProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const Component = as;

  return (
    <Component
      ref={elementRef as any}
      className={`animate-on-scroll ${inView ? 'in-view' : ''} ${delayClass} ${className}`}
    >
      {children}
    </Component>
  );
}
