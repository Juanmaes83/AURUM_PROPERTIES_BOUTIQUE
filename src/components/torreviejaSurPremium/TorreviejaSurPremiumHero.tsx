import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { motion } from 'framer-motion';
import { torreviejaSurPremiumDemo } from '../../data/clientDemos/torreviejaSurPremium';
import { Eye, ChevronRight, ExternalLink } from 'lucide-react';

export const TorreviejaSurPremiumHero = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { hero, client, technology } = torreviejaSurPremiumDemo;

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
        delay: 0.5,
      });

      if (subheadlineRef.current) {
        gsap.from(subheadlineRef.current, {
          opacity: 0,
          y: 20,
          duration: 1.2,
          ease: 'expo.out',
          delay: 1.8,
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 1,
          stagger: 0.1,
          ease: 'expo.out',
          delay: 2.2,
        });
      }
    });

    return () => {
      text.revert();
      ctx.revert();
    };
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const immersphereLink = technology.items[0].href;

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
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

      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex flex-col sm:flex-row items-center gap-3 px-4 py-3 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-8"
        >
          <img
            src={client.logo.smartUrl || client.logo.url}
            alt={client.name}
            className="h-8 w-auto object-contain"
          />
          <div className="flex items-center gap-2">
            <Eye size={14} className="text-white" />
            <span className="font-mono text-xs tracking-widest uppercase text-white">{hero.badge}</span>
          </div>
        </motion.div>

        <h1
          ref={headlineRef}
          className="font-headline text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-5xl overflow-hidden leading-tight"
        >
          {hero.headline}
        </h1>

        <p
          ref={subheadlineRef}
          className="font-body text-lg md:text-xl text-white max-w-3xl mb-10 opacity-0 leading-relaxed"
        >
          {hero.subheadline}
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
          <a
            href={immersphereLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 font-body text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--gold)', color: '#1A1A1A' }}
          >
            {hero.primaryCta}
            <ExternalLink size={16} />
          </a>
          <button
            onClick={() => scrollTo('#pilot')}
            className="px-8 py-4 font-body text-sm tracking-widest uppercase border border-white/50 text-white backdrop-blur-sm transition-all hover:bg-white/10 flex items-center justify-center gap-2"
          >
            {hero.secondaryCta}
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="absolute bottom-8 left-0 right-0 text-center font-mono text-xs tracking-widest uppercase text-white/70">
          {client.name} · {client.location}
        </p>
      </div>
    </section>
  );
};
