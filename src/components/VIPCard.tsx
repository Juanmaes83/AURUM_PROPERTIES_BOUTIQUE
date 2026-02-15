import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

gsap.registerPlugin(ScrollTrigger);

export const VIPCard = () => {
  const ref = useRef(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const magneticRef = useMagneticEffect(0.3) as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    if (!shimmerRef.current || !cardRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(shimmerRef.current, {
        backgroundPosition: '200% center',
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vip-legacy"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-5xl mx-auto"
    >
      <motion.div
        ref={cardRef}
        className="relative overflow-hidden rounded-2xl p-12 md:p-16"
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(166, 139, 91, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        }}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div
          ref={shimmerRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(166, 139, 91, 0.1), transparent)',
            backgroundSize: '200% 100%',
            backgroundPosition: '-100% center',
          }}
        />

        <div className="relative z-10 text-center space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border" style={{ borderColor: 'var(--gold)', opacity: 0.5 }}>
            <span className="font-body text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
              Invitation Only
            </span>
          </div>

          <h2 className="font-headline text-4xl md:text-5xl" style={{ color: 'var(--text)' }}>
            The Aurum Legacy
          </h2>

          <p className="font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90" style={{ color: 'var(--text)' }}>
            Aurum Private Collection – By invitation only. Access exclusive off-market properties and concierge services reserved for discerning collectors.
          </p>

          <div className="pt-6">
            <button
              ref={magneticRef}
              className="px-10 py-4 rounded-full font-body text-sm tracking-wide uppercase transition-all duration-300 hover:shadow-2xl"
              style={{
                backgroundColor: 'var(--gold)',
                color: 'var(--background)',
                boxShadow: '0 10px 30px rgba(166, 139, 91, 0.3)',
              }}
              onClick={() => {
                const contact = document.getElementById('contact');
                contact?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Invitation
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 pt-8 text-sm opacity-70">
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl" style={{ color: 'var(--gold)' }}>15+</span>
              <span className="font-body text-xs uppercase tracking-wider">Exclusive Properties</span>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl" style={{ color: 'var(--gold)' }}>€10M+</span>
              <span className="font-body text-xs uppercase tracking-wider">Portfolio Value</span>
            </div>
            <div className="w-px h-12" style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }} />
            <div className="flex flex-col items-center">
              <span className="font-mono text-2xl" style={{ color: 'var(--gold)' }}>24/7</span>
              <span className="font-body text-xs uppercase tracking-wider">Concierge Access</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
