import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface ImmersphereServicesProps {
  servicesUrl: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  secondary?: string;
  primaryCta?: string;
  id?: string;
}

const DEFAULTS = {
  eyebrow: 'SERVICIOS COMERCIALES',
  title: 'Servicios Immersphere para inmobiliarias',
  body: 'Conectamos piezas visuales, experiencias premium, QR, captación y seguimiento comercial para que una propiedad no solo se vea mejor: genere más oportunidades.',
  secondary: 'Del impacto visual a la captación: una propuesta pensada para propietarios, compradores y equipos comerciales.',
  primaryCta: 'VER SERVICIOS IMMERSHPERE',
};

export const ImmersphereServicesSection = ({
  servicesUrl,
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  body = DEFAULTS.body,
  secondary = DEFAULTS.secondary,
  primaryCta = DEFAULTS.primaryCta,
  id = 'immersphere-services',
}: ImmersphereServicesProps) => {
  return (
    <section
      id={id}
      className="bg-[#F7F7F7] text-[#1A1A1A] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-start"
        >
          <div>
            <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono">{eyebrow}</span>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mt-4">{title}</h2>
            <p className="mt-6 text-base md:text-lg text-[#1A1A1A]/80 leading-relaxed max-w-xl">
              {body}
            </p>
            {secondary && (
              <p className="mt-4 text-sm md:text-base text-[#1A1A1A]/60 leading-relaxed max-w-xl">
                {secondary}
              </p>
            )}

            <a
              href={servicesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#1A1A1A] text-[#F7F7F7] px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:bg-[#A68B5B] hover:text-black transition-colors"
            >
              {primaryCta}
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
          </div>

          <div className="border border-[#1A1A1A]/10 bg-white p-6 md:p-8">
            <div className="text-[10px] tracking-[0.28em] text-[#A68B5B] font-mono">SCOPE</div>
            <ul className="mt-5 grid gap-3 text-sm text-[#1A1A1A]/85">
              {[
                'Pieza visual personalizada por propiedad',
                'Experiencia premium navegable',
                'QR para escaparate, redes y campañas',
                'Captación de propietarios y compradores',
                'Seguimiento comercial conectado al CRM',
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[#A68B5B] font-mono text-xs pt-0.5">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
