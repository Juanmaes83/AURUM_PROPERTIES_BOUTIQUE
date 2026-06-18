import { motion } from 'framer-motion';
import { Youtube, ExternalLink } from 'lucide-react';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';

export const CasasYMarFooter = () => {
  const youtubeRef = useMagneticEffect(0.4) as React.RefObject<HTMLAnchorElement>;
  const { client, footer, commercial, technology } = casasYMarDemo;

  return (
    <footer className="py-16 px-6 text-center border-t border-gray-300">
      <div className="flex justify-center mb-6">
        <img
          src={client.logo.footerUrl || client.logo.url}
          alt={client.name}
          className="h-16 w-auto object-contain"
        />
      </div>

      <motion.p
        className="font-headline text-2xl md:text-3xl italic mb-2"
        style={{ color: 'var(--text)' }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        {client.claim}
      </motion.p>
      <p className="font-mono text-xs tracking-widest uppercase mb-8" style={{ color: 'var(--gold)' }}>
        {client.name} · {client.location}
      </p>

      <div className="flex justify-center gap-6 mb-8">
        <a
          ref={youtubeRef}
          href={client.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
          style={{ color: 'var(--gold)' }}
          aria-label="YouTube de Casas y Mar"
        >
          <Youtube size={24} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8 text-left">
        <div className="space-y-3 font-body text-sm" style={{ color: 'var(--text)', opacity: 0.8 }}>
          <p>
            <span className="font-mono text-[10px] tracking-widest uppercase block" style={{ color: 'var(--gold)' }}>
              Teléfono fijo
            </span>
            <a href={`tel:${client.phone.replace(/\s/g, '')}`} className="hover:opacity-100 transition-opacity">
              {client.phone}
            </a>
          </p>
          <p>
            <span className="font-mono text-[10px] tracking-widest uppercase block" style={{ color: 'var(--gold)' }}>
              WhatsApp
            </span>
            <a
              href={`https://wa.me/${client.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              {client.whatsapp}
            </a>
          </p>
          <p>
            <span className="font-mono text-[10px] tracking-widest uppercase block" style={{ color: 'var(--gold)' }}>
              Email
            </span>
            <a href={`mailto:${client.email}`} className="hover:opacity-100 transition-opacity">
              {client.email}
            </a>
          </p>
        </div>
        <div className="space-y-3 font-body text-sm" style={{ color: 'var(--text)', opacity: 0.8 }}>
          <p>
            <span className="font-mono text-[10px] tracking-widest uppercase block" style={{ color: 'var(--gold)' }}>
              Dirección
            </span>
            {client.address}
          </p>
          <p>
            <span className="font-mono text-[10px] tracking-widest uppercase block" style={{ color: 'var(--gold)' }}>
              Web
            </span>
            <a
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 transition-opacity"
            >
              {client.website}
            </a>
          </p>
          <p>
            <span className="font-mono text-[10px] tracking-widest uppercase block" style={{ color: 'var(--gold)' }}>
              RAICV
            </span>
            {client.raicv}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {technology.items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 border font-body text-xs tracking-widest uppercase transition-all hover:bg-[var(--gold)] hover:text-[var(--background)] hover:border-[var(--gold)]"
            style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
          >
            {item.cta}
            <ExternalLink size={14} />
          </a>
        ))}
      </div>

      <p className="font-mono text-xs" style={{ color: 'var(--gold)' }}>
        © {new Date().getFullYear()} {client.name}. Demo conceptual privada.
      </p>

      <div
        className="max-w-3xl mx-auto mt-8 p-4 text-xs font-body leading-relaxed"
        style={{ color: 'var(--text)', opacity: 0.5, backgroundColor: 'rgba(26, 26, 26, 0.03)' }}
      >
        {footer.disclaimer}
      </div>

      <p className="font-mono text-[10px] tracking-widest uppercase mt-6" style={{ color: 'var(--gold)', opacity: 0.6 }}>
        Pack recomendado: {commercial.recommendedPack}
      </p>
    </footer>
  );
};
