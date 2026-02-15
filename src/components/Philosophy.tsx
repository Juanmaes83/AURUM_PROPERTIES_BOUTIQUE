import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const lines = [
  "No vendemos casas.",
  "Curamos las condiciones para que",
  "la vida ocurra de forma inevitable.",
];

export const Philosophy = () => {
  const ref = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      lineRefs.current.forEach((lineRef, index) => {
        if (!lineRef) return;

        const text = new SplitType(lineRef, { types: 'words' });

        gsap.from(text.words, {
          yPercent: 100,
          rotate: 5,
          opacity: 0,
          duration: 1.5,
          stagger: 0.05,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: lineRef,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.2,
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-6xl mx-auto"
    >
      <div className="text-center space-y-4">
        {lines.map((line, index) => (
          <p
            key={index}
            ref={(el) => (lineRefs.current[index] = el)}
            className="font-headline text-3xl md:text-5xl lg:text-6xl text-balance overflow-hidden"
            style={{ color: 'var(--text)' }}
          >
            {line}
          </p>
        ))}
      </div>
    </section>
  );
};
