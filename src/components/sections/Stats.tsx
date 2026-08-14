import { useEffect, useRef, useState } from 'react';
import { Stat } from '../../types';

interface AnimatedCounterProps {
  value: string;
  start: boolean;
}

function AnimatedCounter({ value, start }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/,/g, ''), 10);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Ease-out quad formula
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * target);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, start]);

  if (!start) {
    return <span>0</span>;
  }

  return <span>{count.toLocaleString('en-US')}</span>;
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats: Stat[] = [
    { value: '2,245,341', label: 'Members', icon: '/member.svg' },
    { value: '46,328', label: 'Clubs', icon: '/Icon (3).png' },
    { value: '828,867', label: 'Event Bookings', icon: '/event.svg' },
    { value: '1,926,436', label: 'Payments', icon: '/payment%20copy.svg' },
  ];

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        <div className="stats-text">
          <h2>Helping a local <span className="text-green">business reinvent itself</span></h2>
          <p>We reached here with our hard work and dedication</p>
        </div>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-icon-wrapper">
                <img src={s.icon} alt={`${s.label} icon`} className="stat-icon-img" />
              </div>
              <div className="stat-info">
                <span className="stat-value">
                  <AnimatedCounter value={s.value} start={inView} />
                </span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

