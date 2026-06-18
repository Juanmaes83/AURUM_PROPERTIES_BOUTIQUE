import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';

export const CasasYMarFooter = () => {
  const instagramRef = useMagneticEffect(0.4) as React.RefObject<HTMLAnchorElement>;
  const facebookRef = useMagneticEffect(0.4) as React.RefObject<HTMLAnchorElement>;
  const linkedinRef = useMagneticEffect(0.4) as React.RefObject<HTMLAnchorElement>;
  const { client, footer, commercial } = casasYMarDemo;

  return (
    <footer className="py-16 px-6 text-center border-t border-gray-300">
      <motion.p
        className="font-headline text-2xl md:text-3xl italic mb-4"
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
          ref={instagramRef}
          href={client.website}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
          style={{ color: 'var(--gold)' }}
        >
          <Instagram size={24} />
        </a>
        <a
          ref={facebookRef}
          href={client.website}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
          style={{ color: 'var(--gold)' }}
        >
          <Facebook size={24} />
        </a>
        <a
          ref={linkedinRef}
          href={client.website}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
          style={{ color: 'var(--gold)' }}
        >
          <Linkedin size={24} />
        </a>
      </div>

      <div className="space-y-3 font-body text-sm" style={{ color: 'var(--text)', opacity: 0.7 }}>
        <p>
          <a href={`tel:${client.phone.replace(/\s/g, '')}`} className="hover:opacity-100 transition-opacity">
            {client.phone}
          </a>
        </p>
        <p>
          <a href={`mailto:${client.email}`} className="hover:opacity-100 transition-opacity">
            {client.email}
          </a>
        </p>
        <p>{client.address}</p>
        <p>
          <a href={client.website} target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
            {client.website}
          </a>
        </p>
        <p className="font-mono text-xs" style={{ color: 'var(--gold)' }}>
          © {new Date().getFullYear()} {client.name}. Demo conceptual privada.
        </p>
      </div>

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
