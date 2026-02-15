import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

export const Hero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const text = new SplitType(headlineRef.current, { types: 'words' });

    const ctx = gsap.context(() => {
      gsap.from(text.words, {
        yPercent: 100,
        rotate: 5,
        opacity: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: 'expo.out',
        delay: 0.3,
      });

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          duration: 1.2,
          ease: 'expo.out',
          delay: 1.5,
        });
      }
    });

    return () => {
      text.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/VIDEO_AURUM_HEROWEB.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-20" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          ref={headlineRef}
          className="font-headline text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-5xl overflow-hidden"
        >
          Cuando la piedra busca el sol, se convierte en hogar.
        </h1>

        <p
          ref={subtitleRef}
          className="font-body text-lg md:text-xl text-white opacity-0"
        >
          Curando historias de vida en la costa de Altea.
        </p>
      </div>
    </section>
  );
};
