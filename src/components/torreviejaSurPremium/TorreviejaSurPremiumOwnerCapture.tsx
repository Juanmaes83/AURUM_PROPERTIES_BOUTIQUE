import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Home, TrendingUp, Shield, ArrowRight, ExternalLink } from 'lucide-react';
import { torreviejaSurPremiumDemo } from '../../data/clientDemos/torreviejaSurPremium';

export const TorreviejaSurPremiumOwnerCapture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { ownerCapture } = torreviejaSurPremiumDemo;
  const secondaryLink = ownerCapture.secondaryHref;

  const benefits = [
    { icon: Home, text: 'Captamos el mejor producto para nuestros compradores' },
    { icon: TrendingUp, text: 'Mayor visibilidad digital de tu vivienda' },
    { icon: Shield, text: 'Valoración y diagnóstico sin compromiso' },
  ];

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div
        className="p-10 md:p-16 text-center border"
        style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(166, 139, 91, 0.05)' }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <h2 className="font-headline text-4xl md:text-5xl" style={{ color: 'var(--text)' }}>
          {ownerCapture.title}
        </h2>
        <p className="font-body text-lg mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text)', opacity: 0.8 }}>
          {ownerCapture.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.7 }}
              >
                <Icon size={24} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <p className="font-body" style={{ color: 'var(--text)' }}>
                  {benefit.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 font-body text-sm tracking-widest uppercase inline-flex items-center justify-center gap-2 transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--gold)', color: '#1A1A1A' }}
          >
            {ownerCapture.cta}
            <ArrowRight size={16} />
          </a>
          <a
            href={secondaryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 font-body text-sm tracking-widest uppercase border inline-flex items-center justify-center gap-2 transition-all hover:bg-black/5"
            style={{ borderColor: 'var(--text)', color: 'var(--text)' }}
          >
            {ownerCapture.secondary}
            <ExternalLink size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
