import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const properties = [
  {
    image: '/IMAGEN_AURUM_HEROWEB.png',
    name: 'Villa Mediterránea',
    size: '450m²',
    architect: 'Arq. Ramón Esteve',
  },
  {
    image: '/IMAGEN_AURUM_HEROWEB_3.png',
    name: 'Casa del Mar',
    size: '380m²',
    architect: 'Arq. María Torres',
  },
  {
    image: '/IMAGEN_AURUM_INTERIORES.png',
    name: 'Ático Horizonte',
    size: '520m²',
    architect: 'Arq. Fran Silvestre',
  },
  {
    image: '/IMAGEN_AURUM_INTERIORES_2.png',
    name: 'Villa Altea Hills',
    size: '650m²',
    architect: 'Arq. Ramón Esteve',
  },
  {
    image: '/IMAGEN_AURUM_MATERIALES.png',
    name: 'Casa Piedra y Luz',
    size: '410m²',
    architect: 'Arq. María Torres',
  },
  {
    image: '/IMAGEN_AURUM_MATERIALES_2.png',
    name: 'Residencia Bernia',
    size: '580m²',
    architect: 'Arq. Fran Silvestre',
  },
];

export const Collection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="collection"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <motion.h2
        className="font-headline text-4xl md:text-5xl text-center mb-16"
        style={{ color: 'var(--text)' }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        The Collection
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {properties.map((property, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="overflow-hidden mb-6 shadow-lg">
              <motion.img
                src={property.image}
                alt={property.name}
                loading="lazy"
                className="w-full h-[400px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
            </div>

            <div className="space-y-3">
              <h3 className="font-body text-xl" style={{ color: 'var(--text)' }}>
                {property.name} · <span className="font-mono text-gold tracking-widest">{property.size}</span> · {property.architect}
              </h3>

              <div className="relative inline-block group">
                <a
                  href="#contact"
                  className="font-body text-sm tracking-wide inline-block relative"
                  style={{ color: 'var(--text)' }}
                >
                  Solicitar Dossier Privado
                  <motion.span
                    className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: 'var(--gold)' }}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
