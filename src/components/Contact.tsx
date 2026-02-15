import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: '', code: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-gradient-to-br from-stone-700 via-stone-600 to-stone-800"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url(/IMAGEN_AURUM_CONTACTO.png)' }}
      />
      <div className="absolute inset-0 bg-black opacity-20 z-[1]" />

      <motion.div
        className="relative z-[2] max-w-2xl w-full"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h2 className="font-headline text-4xl md:text-6xl text-white text-center mb-12">
          Elite Contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 font-body focus:outline-none focus:border-opacity-60 transition-all"
          />

          <input
            type="text"
            placeholder="Código de Invitación (Opcional)"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            className="w-full px-6 py-4 bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 font-body focus:outline-none focus:border-opacity-60 transition-all"
          />

          <motion.button
            type="submit"
            className="w-full px-8 py-4 font-body text-sm tracking-wide transition-opacity"
            style={{ backgroundColor: 'var(--gold)', color: 'var(--text)' }}
            whileHover={{ opacity: 0.9 }}
          >
            Enviar Consulta
          </motion.button>
        </form>

        <div className="mt-12 text-center">
          <p className="font-body text-white text-sm">
            Private Line:{' '}
            <a
              href="tel:+34629554870"
              className="relative group"
            >
              <span className="font-mono tracking-widest" style={{ color: 'var(--gold)' }}>
                +34 629 554 870
              </span>
              <span
                className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: 'var(--gold)' }}
              />
            </a>
          </p>
          <p className="font-body text-white text-xs mt-2 opacity-70">
            Alicante HQ
          </p>
        </div>
      </motion.div>
    </section>
  );
};
