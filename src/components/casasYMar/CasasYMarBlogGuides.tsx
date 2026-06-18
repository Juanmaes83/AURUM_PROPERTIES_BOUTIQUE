import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';
import { RevealText } from '../RevealText';

export const CasasYMarBlogGuides = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { blogGuides } = casasYMarDemo;

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Contenido estratégico
        </span>
        <RevealText className="font-headline text-4xl md:text-5xl mt-4" style={{ color: 'var(--text)' }}>
          Blog / guías locales
        </RevealText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogGuides.map((guide, index) => (
          <motion.a
            key={guide.title}
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group flex items-center justify-between p-8 border transition-all duration-500 hover:border-[var(--gold)]"
            style={{ borderColor: 'rgba(26, 26, 26, 0.1)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.7 }}
          >
            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
                {guide.category}
              </span>
              <h3 className="font-headline text-2xl mt-2" style={{ color: 'var(--text)' }}>
                {guide.title}
              </h3>
            </div>
            <ArrowUpRight
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              style={{ color: 'var(--gold)' }}
            />
          </motion.a>
        ))}
      </div>
    </section>
  );
};
