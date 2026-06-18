import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface CurrentWebsiteComparisonProps {
  clientName: string;
  currentWebsiteUrl: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  bullets?: string[];
  primaryCta?: string;
  id?: string;
}

const DEFAULTS = {
  eyebrow: 'COMPARATIVA ESTRATÉGICA',
  title: '¿Tu web actual está captando propietarios o solo mostrando inmuebles?',
  body: 'Tu web actual informa. Esta experiencia está pensada para vender, guiar y convertir.',
  primaryCta: 'COMPARA CON TU WEB ACTUAL',
};

export const CurrentWebsiteComparisonSection = ({
  clientName,
  currentWebsiteUrl,
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  body = DEFAULTS.body,
  bullets,
  primaryCta = DEFAULTS.primaryCta,
  id = 'comparison',
}: CurrentWebsiteComparisonProps) => {
  return (
    <section id={id} className="bg-[#0F0F10] text-[#F7F7F7] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono">{eyebrow}</span>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mt-4 max-w-3xl">
            {title}
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#CFCFCF] max-w-2xl leading-relaxed">{body}</p>

          {bullets && bullets.length > 0 && (
            <ul className="mt-8 grid gap-3 md:grid-cols-2 max-w-3xl">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="border border-white/10 px-4 py-3 text-sm text-[#CFCFCF] bg-white/[0.02]"
                >
                  {b}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={currentWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#A68B5B] text-black px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:bg-[#bf9f6a] transition-colors"
            >
              {primaryCta}
              <ArrowUpRight size={16} strokeWidth={2} />
            </a>
            <span className="text-xs text-[#777] font-mono">
              {clientName} · web actual: {currentWebsiteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
