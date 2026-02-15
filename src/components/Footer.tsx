import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center border-t border-gray-300">
      <motion.p
        className="font-headline text-2xl md:text-3xl italic mb-8"
        style={{ color: 'var(--text)' }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        Donde el mar besa la montaña.
      </motion.p>

      <div className="space-y-4 font-body text-sm" style={{ color: 'var(--text)', opacity: 0.7 }}>
        <p>
          <a href="tel:+34629554870" className="hover:opacity-100 transition-opacity">
            +34 629 554 870
          </a>
        </p>
        <p>Aurum Properties · Sweet Home Luxe</p>
        <p>Altea, Alicante · Costa Blanca</p>
        <p className="font-mono text-xs" style={{ color: 'var(--gold)' }}>
          © {new Date().getFullYear()} Aurum Properties. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
