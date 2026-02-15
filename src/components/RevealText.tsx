import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export const RevealText = ({ children, className = '', style = {}, delay = 0 }: RevealTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const text = containerRef.current.textContent || '';
    const words = text.split(' ');

    containerRef.current.innerHTML = words
      .map((word, i) => {
        return `<span class="word-wrapper" style="display: inline-block; overflow: hidden; vertical-align: top;">
          <span class="word" style="display: inline-block;">${word}${i < words.length - 1 ? '&nbsp;' : ''}</span>
        </span>`;
      })
      .join('');

    const ctx = gsap.context(() => {
      gsap.from('.word', {
        yPercent: 100,
        rotate: 5,
        opacity: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: 'expo.out',
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {children}
    </div>
  );
};
