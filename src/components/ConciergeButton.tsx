import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const ConciergeButton = () => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const xToRef = useRef<((value: number) => void) | null>(null);
  const yToRef = useRef<((value: number) => void) | null>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    xToRef.current = gsap.quickTo(buttonRef.current, 'x', { duration: 0.8, ease: 'power3.out' });
    yToRef.current = gsap.quickTo(buttonRef.current, 'y', { duration: 0.8, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || !xToRef.current || !yToRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distance = Math.hypot(clientX - centerX, clientY - centerY);

      if (distance < 100) {
        const strength = 0.3;
        const deltaX = (clientX - centerX) * strength;
        const deltaY = (clientY - centerY) * strength;
        xToRef.current(deltaX);
        yToRef.current(deltaY);
      } else {
        xToRef.current(0);
        yToRef.current(0);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href="#contact"
      className="concierge-button"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        backgroundColor: 'red',
        zIndex: 10000,
        padding: '1rem 2rem',
        color: 'white',
        borderRadius: '40px',
        border: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: '0.875rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      CONCIERGE PRIVADO
    </a>
  );
};
