import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Minus, Plus } from 'lucide-react';
import { torreviejaSurPremiumDemo } from '../../data/clientDemos/torreviejaSurPremium';
import { RevealText } from '../RevealText';

export const TorreviejaSurPremiumBeforeAfter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { beforeAfter } = torreviejaSurPremiumDemo;

  const Column = ({
    title,
    items,
    type,
    delay,
  }: {
    title: string;
    items: string[];
    type: 'before' | 'after';
    delay: number;
  }) => (
    <motion.div
      className="p-8 md:p-10"
      style={{
        backgroundColor: type === 'before' ? 'rgba(26, 26, 26, 0.03)' : 'rgba(166, 139, 91, 0.06)',
        borderTop: `2px solid ${type === 'before' ? 'var(--text)' : 'var(--gold)'}`,
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <h3
        className="font-headline text-2xl md:text-3xl mb-8"
        style={{ color: type === 'before' ? 'var(--text)' : 'var(--gold)' }}
      >
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 font-body" style={{ color: 'var(--text)' }}>
            {type === 'before' ? (
              <Minus size={18} style={{ color: 'var(--text)', opacity: 0.4, flexShrink: 0 }} />
            ) : (
              <Plus size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
            )}
            <span style={{ opacity: 0.9 }}>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <RevealText
          className="font-headline text-4xl md:text-5xl"
          style={{ color: 'var(--text)' }}
        >
          {beforeAfter.title}
        </RevealText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Column title={beforeAfter.before.title} items={beforeAfter.before.items} type="before" delay={0.1} />
        <Column title={beforeAfter.after.title} items={beforeAfter.after.items} type="after" delay={0.3} />
      </div>
    </section>
  );
};
