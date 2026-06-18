import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

export interface HighIntentContactProps {
  whatsappHref: string;
  phoneHref: string;
  visiblePhone: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryCta?: string;
  secondaryCta?: string;
  microcopy?: string;
  id?: string;
}

const DEFAULTS = {
  eyebrow: 'CONTACTO DIRECTO',
  primaryCta: 'SÍ, QUIERO VERLO POR WHATSAPP',
  secondaryCta: 'LLAMAR AL TELÉFONO',
  microcopy: 'Sin compromiso. Solo una primera propiedad piloto para valorar el impacto.',
};

export const HighIntentContactSection = ({
  whatsappHref,
  phoneHref,
  visiblePhone,
  eyebrow = DEFAULTS.eyebrow,
  title,
  body,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta,
  microcopy = DEFAULTS.microcopy,
  id = 'high-intent-contact',
}: HighIntentContactProps) => {
  const resolvedSecondary = secondaryCta ?? `LLAMAR AL ${visiblePhone}`;

  return (
    <section
      id={id}
      className="relative bg-gradient-to-br from-[#0B0B0C] via-[#1A140A] to-[#0F0F10] text-[#F7F7F7] py-28 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#A68B5B]/15 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#A68B5B]/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono">{eyebrow}</span>
        {title && (
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mt-5 max-w-3xl mx-auto">
            {title}
          </h2>
        )}
        {body && (
          <p className="mt-6 text-base md:text-lg text-[#CFCFCF] leading-relaxed max-w-2xl mx-auto">
            {body}
          </p>
        )}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-black px-8 py-5 text-sm md:text-base font-bold tracking-[0.12em] uppercase hover:bg-[#1ebe5a] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <MessageCircle size={20} strokeWidth={2.2} />
            {primaryCta}
          </a>
          <a
            href={phoneHref}
            className="inline-flex items-center gap-3 border border-[#A68B5B] text-[#F7F7F7] px-8 py-5 text-sm md:text-base font-semibold tracking-[0.12em] uppercase hover:bg-[#A68B5B] hover:text-black transition-colors"
          >
            <Phone size={18} strokeWidth={2.2} />
            {resolvedSecondary}
          </a>
        </div>

        {microcopy && (
          <p className="mt-8 text-xs md:text-sm text-[#888] tracking-wide max-w-xl mx-auto">
            {microcopy}
          </p>
        )}
      </motion.div>
    </section>
  );
};
