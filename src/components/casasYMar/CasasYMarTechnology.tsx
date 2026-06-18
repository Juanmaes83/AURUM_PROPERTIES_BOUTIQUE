import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scan, ExternalLink } from 'lucide-react';
import { RevealText } from '../RevealText';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';

const iconMap: Record<string, React.ElementType> = {
  'Immersphere Pro': Scan,
};

export const CasasYMarTechnology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { technology } = casasYMarDemo;

  return (
    <section id="technology" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Stack visual
        </span>
        <RevealText className="font-headline text-4xl md:text-5xl mt-4" style={{ color: 'var(--text)' }}>
          {technology.title}
        </RevealText>
        <p className="font-body mt-4 max-w-3xl mx-auto" style={{ color: 'var(--text)', opacity: 0.7 }}>
          {technology.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {technology.items.map((item, index) => {
          const Icon = iconMap[item.name] || Scan;
          return (
            <motion.div
              key={item.name}
              className="group relative p-8 md:p-10 border transition-all duration-500 hover:shadow-xl overflow-hidden"
              style={{ borderColor: 'rgba(166, 139, 91, 0.25)', backgroundColor: 'rgba(255,255,255,0.5)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.8 }}
            >
              <div
                className="absolute top-0 left-0 w-full h-1 origin-left transition-transform duration-700 scale-x-0 group-hover:scale-x-100"
                style={{ backgroundColor: 'var(--gold)' }}
              />

              <div className="flex items-start justify-between mb-6">
                <div
                  className="p-4 rounded-full"
                  style={{ backgroundColor: 'rgba(166, 139, 91, 0.1)' }}
                >
                  <Icon size={32} style={{ color: 'var(--gold)' }} />
                </div>
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                  0{index + 1}
                </span>
              </div>

              <h3 className="font-headline text-3xl mb-4" style={{ color: 'var(--text)' }}>
                {item.name}
              </h3>
              <p className="font-body leading-relaxed mb-8" style={{ color: 'var(--text)', opacity: 0.85 }}>
                {item.description}
              </p>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-body text-sm tracking-widest uppercase transition-all hover:scale-105"
                style={{ backgroundColor: 'var(--gold)', color: '#1A1A1A' }}
              >
                {item.cta}
                <ExternalLink size={14} />
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
