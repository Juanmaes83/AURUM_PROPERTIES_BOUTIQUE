import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Store, FileText, MessageSquare, Signpost, Mail, Megaphone, QrCode } from 'lucide-react';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';
import { RevealText } from '../RevealText';

const iconMap: Record<string, React.ElementType> = {
  Escaparate: Store,
  Folleto: FileText,
  WhatsApp: MessageSquare,
  Cartel: Signpost,
  Email: Mail,
  'Campañas Meta/Google': Megaphone,
};

export const CasasYMarQRDistro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { qrDistro } = casasYMarDemo;

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Distribución
        </span>
        <RevealText className="font-headline text-4xl md:text-5xl mt-4" style={{ color: 'var(--text)' }}>
          {qrDistro.title}
        </RevealText>
        <p className="font-body mt-4" style={{ color: 'var(--text)', opacity: 0.7 }}>
          {qrDistro.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {qrDistro.channels.map((channel, index) => {
          const Icon = iconMap[channel] || QrCode;
          return (
            <motion.div
              key={channel}
              className="p-8 text-center border transition-all duration-500 hover:border-[var(--gold)] hover:bg-[rgba(166,139,91,0.05)]"
              style={{ borderColor: 'rgba(26, 26, 26, 0.1)' }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Icon size={32} className="mx-auto mb-4" style={{ color: 'var(--gold)' }} />
              <p className="font-body" style={{ color: 'var(--text)' }}>
                {channel}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-12 p-6 flex flex-col md:flex-row items-center justify-center gap-6 border border-dashed"
        style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(166, 139, 91, 0.03)' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <QrCode size={64} style={{ color: 'var(--gold)' }} />
        <div className="text-center md:text-left">
          <p className="font-headline text-xl" style={{ color: 'var(--text)' }}>
            Escanea para abrir la propiedad piloto
          </p>
          <p className="font-body text-sm" style={{ color: 'var(--text)', opacity: 0.7 }}>
            QR de demostración · Enlace simulado a experiencia inmersiva
          </p>
        </div>
      </motion.div>
    </section>
  );
};
