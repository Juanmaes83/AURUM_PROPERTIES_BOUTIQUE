import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const lines = [
  "No vendemos casas.",
  "Curamos las condiciones para que",
  "la vida ocurra de forma inevitable.",
];

export const Philosophy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-6xl mx-auto"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="text-center space-y-4"
      >
        {lines.map((line, index) => (
          <motion.p
            key={index}
            className="font-headline text-3xl md:text-5xl lg:text-6xl text-balance"
            style={{ color: 'var(--text)' }}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: 'easeOut',
                },
              },
            }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};
