import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const GridOverlay = () => {
  const verticalLinesRef = useRef<HTMLDivElement>(null);
  const horizontalLinesRef = useRef<HTMLDivElement>(null);
  const unasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const verticalLines = verticalLinesRef.current?.querySelectorAll('.vertical-line');
    const horizontalLines = horizontalLinesRef.current?.querySelectorAll('.horizontal-line');
    const unas = unasRef.current?.querySelectorAll('.una');

    if (verticalLines) {
      gsap.fromTo(
        verticalLines,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '20% top',
            scrub: 1,
          },
        }
      );
    }

    if (horizontalLines) {
      gsap.fromTo(
        horizontalLines,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.05,
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '20% top',
            scrub: 1,
          },
        }
      );
    }

    if (unas) {
      gsap.fromTo(
        unas,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: 'back.out(1.7)',
          stagger: 0.02,
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '20% top',
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const verticalPositions = [0, 8.33, 16.66, 25, 33.33, 41.66, 50, 58.33, 66.66, 75, 83.33, 91.66];
  const horizontalPositions = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5];

  const unaIntersections = [];
  for (let i = 0; i < verticalPositions.length; i += 2) {
    for (let j = 0; j < horizontalPositions.length; j += 2) {
      unaIntersections.push({
        x: verticalPositions[i],
        y: horizontalPositions[j],
      });
    }
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <div ref={verticalLinesRef} className="absolute inset-0">
        {verticalPositions.map((pos, index) => (
          <div
            key={`v-${index}`}
            className="vertical-line absolute h-full"
            style={{
              left: `${pos}%`,
              width: '1px',
              backgroundColor: 'var(--gold)',
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <div ref={horizontalLinesRef} className="absolute inset-0">
        {horizontalPositions.map((pos, index) => (
          <div
            key={`h-${index}`}
            className="horizontal-line absolute w-full"
            style={{
              top: `${pos}%`,
              height: '1px',
              backgroundColor: 'var(--gold)',
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      <div ref={unasRef} className="absolute inset-0">
        {unaIntersections.map((intersection, index) => (
          <div
            key={`una-${index}`}
            className="una absolute"
            style={{
              left: `${intersection.x}%`,
              top: `${intersection.y}%`,
              width: '4px',
              height: '4px',
              backgroundColor: 'var(--gold)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
    </div>
  );
};
