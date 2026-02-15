import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'Buscábamos algo más que una casa. Queríamos un lugar donde el tiempo se detuviera y el mar fuera el único reloj. Aurum no solo encontró esa villa, nos ayudó a sentirla nuestra antes de comprarla.',
    name: 'Carmen y Javier López',
    origin: 'Madrid · Ahora en Sierra de Altea',
  },
  {
    text: 'Después de años viviendo en Londres, necesitaba luz, espacio y autenticidad. El equipo de Aurum entendió mi estilo de vida nómada y me presentó una propiedad que ya no era una casa, era mi refugio.',
    name: 'Oliver Whitman',
    origin: 'Londres · Ahora en Altea Hills',
  },
  {
    text: 'Tener una segunda residencia en la costa requiere una confianza absoluta. Aurum no solo gestiona mi propiedad, me da la tranquilidad de saber que está perfecta cuando llego. Son mi familia española.',
    name: 'Natalia Volkova',
    origin: 'Moscú · Ahora en Moraira',
  },
  {
    text: 'Lo que más valoro es su capacidad de escucha. No nos vendieron una casa, nos ayudaron a construir un proyecto de vida para nuestra familia. La reforma que supervisaron es una obra de arte.',
    name: 'Carlos Mendoza',
    origin: 'Barcelona · Ahora en Jávea',
  },
];

export const Legacy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="legacy"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <h2 className="font-headline text-4xl md:text-5xl mb-4" style={{ color: 'var(--text)' }}>
          Voces del Mediterráneo
        </h2>
        <div className="w-24 h-px mx-auto mb-6" style={{ backgroundColor: 'var(--gold)' }} />
        <p className="font-body text-lg md:text-xl" style={{ color: 'var(--text)', opacity: 0.8 }}>
          Quienes encontraron su hogar en la costa.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="group relative bg-[#FAFAFA] p-8 transition-all duration-500 hover:shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
          >
            <Quote size={32} style={{ color: 'var(--gold)', opacity: 0.3 }} className="mb-4" />

            <p className="font-headline text-xl md:text-2xl italic leading-relaxed mb-6" style={{ color: 'var(--text)', opacity: 0.9 }}>
              <span style={{ color: 'var(--gold)' }}>"</span>
              {testimonial.text}
              <span style={{ color: 'var(--gold)' }}>"</span>
            </p>

            <div className="space-y-1">
              <p className="font-body font-bold text-sm uppercase tracking-wide" style={{ color: 'var(--text)' }}>
                {testimonial.name}
              </p>
              <p className="font-body text-sm" style={{ color: 'var(--gold)' }}>
                {testimonial.origin}
              </p>
            </div>

            <motion.div
              className="absolute bottom-0 left-1/2 w-0 h-px group-hover:w-full group-hover:left-0 transition-all duration-500"
              style={{ backgroundColor: 'var(--gold)' }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
