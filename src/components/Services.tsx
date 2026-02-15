import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Shield, Scale, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Espacios que dialogan con tu esencia. Colaboramos con diseñadores de interiores para materializar tu visión.',
  },
  {
    icon: Shield,
    title: 'Property Care',
    description: 'Mantenimiento integral y gestión de propiedades. Tu hogar en perfectas condiciones, siempre.',
  },
  {
    icon: Scale,
    title: 'Legal & Protection',
    description: 'Asesoramiento jurídico especializado en patrimonio inmobiliario de alto standing.',
  },
  {
    icon: Sparkles,
    title: 'Lifestyle Concierge',
    description: 'Servicios personalizados que elevan tu experiencia: desde eventos privados hasta reservas exclusivas.',
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="services"
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
        The Bespoke Services
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
            >
              <motion.div
                className="absolute top-0 left-0 w-0 h-px group-hover:w-full transition-all duration-500"
                style={{ backgroundColor: 'var(--gold)' }}
              />

              <div className="pt-6 space-y-4">
                <Icon size={32} style={{ color: 'var(--gold)' }} />
                <h3 className="font-headline text-2xl" style={{ color: 'var(--text)' }}>
                  {service.title}
                </h3>
                <p className="font-body text-sm leading-relaxed opacity-80">
                  {service.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
