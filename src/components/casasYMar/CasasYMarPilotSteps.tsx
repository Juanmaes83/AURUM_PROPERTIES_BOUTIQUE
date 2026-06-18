import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';
import { RevealText } from '../RevealText';

export const CasasYMarPilotSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { pilot } = casasYMarDemo;

  return (
    <section id="pilot" ref={ref} className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Siguiente paso concreto
        </span>
        <RevealText className="font-headline text-4xl md:text-5xl mt-4" style={{ color: 'var(--text)' }}>
          {pilot.title}
        </RevealText>
        <p className="font-body mt-4 max-w-3xl mx-auto" style={{ color: 'var(--text)', opacity: 0.7 }}>
          {pilot.subtitle}
        </p>
      </div>

      <div className="space-y-6">
        {pilot.steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-6 p-6 border-l-2"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(166, 139, 91, 0.03)' }}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.7 }}
          >
            <span
              className="font-mono text-2xl"
              style={{ color: 'var(--gold)', minWidth: '2rem' }}
            >
              0{index + 1}
            </span>
            <p className="font-body text-lg" style={{ color: 'var(--text)' }}>
              {step}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
