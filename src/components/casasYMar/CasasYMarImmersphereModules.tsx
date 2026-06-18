import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, CircleDot, ArrowRight } from 'lucide-react';
import { RevealText } from '../RevealText';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';

const statusConfig = {
  incluido: { icon: Check, label: 'Incluido', bg: 'rgba(166, 139, 91, 0.15)', color: 'var(--gold)' },
  opcional: { icon: CircleDot, label: 'Opcional', bg: 'rgba(166, 139, 91, 0.08)', color: 'var(--gold)' },
  fase_siguiente: { icon: ArrowRight, label: 'Fase siguiente', bg: 'rgba(26, 26, 26, 0.06)', color: 'var(--text)' },
};

export const CasasYMarImmersphereModules = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { immersphereModules, commercial } = casasYMarDemo;

  return (
    <section id="immersphere" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          {commercial.recommendedPack}
        </span>
        <RevealText className="font-headline text-4xl md:text-5xl mt-4" style={{ color: 'var(--text)' }}>
          Módulos Immersphere
        </RevealText>
        <p className="font-body mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text)', opacity: 0.7 }}>
          {commercial.hookService}. Entrega en {commercial.deliveryTime}.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {immersphereModules.map((module, index) => {
          const config = statusConfig[module.status];
          const Icon = config.icon;
          return (
            <motion.div
              key={module.title}
              className="p-8 border transition-all duration-500 hover:shadow-lg"
              style={{ borderColor: 'rgba(166, 139, 91, 0.2)', backgroundColor: 'rgba(255,255,255,0.4)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.7 }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-headline text-2xl" style={{ color: 'var(--text)' }}>
                  {module.title}
                </h3>
                <span
                  className="flex items-center gap-1 px-3 py-1 rounded-full font-mono text-[10px] tracking-widest uppercase"
                  style={{ backgroundColor: config.bg, color: config.color }}
                >
                  <Icon size={12} />
                  {config.label}
                </span>
              </div>
              <p className="font-body mb-3" style={{ color: 'var(--text)', opacity: 0.9 }}>
                {module.benefit}
              </p>
              <p className="font-body text-sm italic" style={{ color: 'var(--gold)' }}>
                {module.application}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-16 p-8 text-center border"
        style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(166, 139, 91, 0.05)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <p className="font-mono text-sm tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Inversión orientativa
        </p>
        <p className="font-headline text-3xl mt-2" style={{ color: 'var(--text)' }}>
          {commercial.priceRange}
        </p>
        <p className="font-body mt-2" style={{ color: 'var(--text)', opacity: 0.7 }}>
          Upsell: {commercial.upsell}
        </p>
      </motion.div>
    </section>
  );
};
