import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X, AlertCircle, Sparkles } from 'lucide-react';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';
import { RevealText } from '../RevealText';

const statusConfig = {
  ok: { icon: Check, bg: 'rgba(166, 139, 91, 0.15)', color: 'var(--gold)' },
  missing: { icon: X, bg: 'rgba(26, 26, 26, 0.08)', color: 'var(--text)' },
  opportunity: { icon: Sparkles, bg: 'rgba(166, 139, 91, 0.2)', color: 'var(--gold)' },
};

export const CasasYMarDiagnosis = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { diagnosis, audit } = casasYMarDemo;

  return (
    <section
      id="diagnosis"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-6xl mx-auto"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Auditoría web · Score {audit.score}/100 · Oportunidad {audit.opportunityScore}/100
        </span>
        <RevealText
          className="font-headline text-4xl md:text-5xl mt-4"
          style={{ color: 'var(--text)' }}
        >
          {diagnosis.title}
        </RevealText>
      </motion.div>

      <motion.p
        className="font-body text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto mb-16"
        style={{ color: 'var(--text)', opacity: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {diagnosis.body}
      </motion.p>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {diagnosis.badges.map((badge, index) => {
          const config = statusConfig[badge.status as keyof typeof statusConfig];
          const Icon = config.icon;
          return (
            <motion.div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ backgroundColor: config.bg, borderColor: config.color, color: config.color }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Icon size={14} />
              <span className="font-body text-sm">{badge.label}</span>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="p-8 border-l-2"
        style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(166, 139, 91, 0.05)' }}
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex items-start gap-4">
          <AlertCircle size={24} style={{ color: 'var(--gold)', flexShrink: 0 }} />
          <div>
            <h3 className="font-headline text-2xl mb-2" style={{ color: 'var(--text)' }}>
              Oportunidad inmediata
            </h3>
            <p className="font-body leading-relaxed" style={{ color: 'var(--text)', opacity: 0.85 }}>
              {audit.opportunities[0]}. {audit.opportunities[2]}.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
