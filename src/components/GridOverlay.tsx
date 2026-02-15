import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const GridOverlay = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.v-line', {
        scaleY: 0,
        stagger: 0.1,
        transformOrigin: 'top',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '20% top',
          scrub: 1.5,
        },
      });

      gsap.from('.h-line', {
        scaleX: 0,
        stagger: 0.1,
        transformOrigin: 'left',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '20% top',
          scrub: 1.5,
        },
      });

      gsap.from('.grid-dot', {
        scale: 0,
        opacity: 0,
        stagger: { each: 0.05, from: 'start' },
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: '20% top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
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
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    >
      <div className="absolute inset-0">
        {verticalPositions.map((pos, index) => (
          <div
            key={`v-${index}`}
            className="v-line"
            style={{
              position: 'fixed',
              top: 0,
              left: `${pos}%`,
              width: '1px',
              height: '100vh',
              backgroundColor: 'red',
              zIndex: 9999,
              opacity: 1,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {horizontalPositions.map((pos, index) => (
          <div
            key={`h-${index}`}
            className="h-line"
            style={{
              position: 'fixed',
              top: `${pos}%`,
              left: 0,
              width: '100vw',
              height: '1px',
              backgroundColor: 'red',
              zIndex: 9999,
              opacity: 1,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {unaIntersections.map((intersection, index) => (
          <div
            key={`una-${index}`}
            className="grid-dot"
            style={{
              position: 'fixed',
              left: `${intersection.x}%`,
              top: `${intersection.y}%`,
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: 'red',
              zIndex: 9999,
              opacity: 1,
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
    </div>
  );
};
