import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <h2 className="font-headline text-5xl md:text-6xl leading-tight" style={{ color: 'var(--text)' }}>
            Alma de la Marca
          </h2>

          <p className="font-headline text-2xl md:text-3xl leading-relaxed italic" style={{ color: 'var(--text)', opacity: 0.9 }}>
            "No vendemos casas. Curamos legados donde la luz del Mediterráneo escribe cada atardecer."
          </p>

          <div className="space-y-4 font-body text-base leading-relaxed" style={{ color: 'var(--text)' }}>
            <p>
              En Altea, donde la Sierra de Bernia desciende al Mediterráneo, existe un lenguaje arquitectónico que solo entienden quienes buscan autenticidad. Aurum Properties nace de esa comprensión: un equipo humano que no intermedia propiedades, sino que cura historias de vida.
            </p>
            <p>
              Trabajamos exclusivamente con arquitectura de autor, materiales nobles y ubicaciones que dialogan con el paisaje. Cada proyecto que presentamos ha sido estudiado, visitado y sentido. No creemos en el volumen, creemos en la precisión.
            </p>
            <p>
              Nuestro equipo combina expertise en arquitectura contemporánea, diseño de interiores y gestión patrimonial. Pero sobre todo, compartimos una pasión silenciosa por las casas que transforman vidas.
            </p>
          </div>

          <div className="flex space-x-8 font-mono text-sm tracking-widest pt-4">
            <span style={{ color: 'var(--gold)' }}>EST. 2019</span>
            <span style={{ color: 'var(--gold)' }}>ALTEA · ALICANTE</span>
          </div>
        </motion.div>

        <motion.div
          className="relative h-[600px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src="/IMAGEN_AURUM_ESTILODEVIDA.png"
            alt="Aurum Properties Essence"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
