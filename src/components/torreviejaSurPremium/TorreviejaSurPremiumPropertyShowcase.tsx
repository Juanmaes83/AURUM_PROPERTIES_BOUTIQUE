import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { torreviejaSurPremiumDemo } from '../../data/clientDemos/torreviejaSurPremium';
import { RevealText } from '../RevealText';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';
import { Scan, Video, Map, QrCode, MousePointerClick, Calendar, MessageCircle, AlertCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Scan,
  Video,
  Map,
  QrCode,
  MousePointerClick,
};

const statusStyle = {
  included: { bg: 'rgba(166, 139, 91, 0.15)', color: 'var(--gold)', label: 'Incluido' },
  optional: { bg: 'rgba(166, 139, 91, 0.08)', color: 'var(--gold)', label: 'Opcional' },
};

export const TorreviejaSurPremiumPropertyShowcase = () => {
  const ref = useRef(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const magneticRef = useMagneticEffect(0.3) as React.RefObject<HTMLButtonElement>;

  const { propertyShowcase, client } = torreviejaSurPremiumDemo;

  useEffect(() => {
    if (!imageContainerRef.current || !imageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, imageContainerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Ficha premium de propiedad
        </span>
        <RevealText
          className="font-headline text-4xl md:text-5xl mt-4"
          style={{ color: 'var(--text)' }}
        >
          {propertyShowcase.title}
        </RevealText>
        <p className="font-body mt-4" style={{ color: 'var(--text)', opacity: 0.7 }}>
          {propertyShowcase.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          ref={imageContainerRef}
          className="relative h-[500px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <img
            ref={imageRef}
            src={propertyShowcase.image}
            alt="Propiedad piloto Torrevieja Sur"
            loading="lazy"
            className="parallax-img w-full h-full object-cover"
            style={{ scale: 1.4 }}
          />
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white font-mono text-[10px] tracking-widest uppercase">
            Preview conceptual
          </div>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2">
            {propertyShowcase.features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 font-mono text-xs tracking-wider uppercase border"
                style={{ borderColor: 'var(--gold)', color: 'var(--text)', opacity: 0.8 }}
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {propertyShowcase.modules.map((module) => {
              const Icon = iconMap[module.label.split(' ')[0]] || Scan;
              const style = statusStyle[module.status as keyof typeof statusStyle] || statusStyle.included;
              return (
                <div
                  key={module.label}
                  className="p-4 rounded-lg space-y-2"
                  style={{ backgroundColor: style.bg }}
                >
                  <Icon size={24} style={{ color: style.color }} />
                  <p className="font-body text-sm" style={{ color: 'var(--text)' }}>
                    {module.label}
                  </p>
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: style.color }}>
                    {style.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div
            className="p-4 flex items-start gap-3 border border-dashed"
            style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(166, 139, 91, 0.03)' }}
          >
            <AlertCircle size={18} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text)', opacity: 0.75 }}>
              Imagen candidata extraída de la web pública de Torrevieja Sur con status{' '}
              <em>{propertyShowcase.imageStatus}</em>. La ficha real se construirá sobre una propiedad
              concreta elegida por el cliente.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              ref={magneticRef}
              className="px-8 py-4 font-body text-sm tracking-widest uppercase flex items-center justify-center gap-2 transition-all hover:shadow-xl"
              style={{ backgroundColor: 'var(--gold)', color: '#1A1A1A' }}
            >
              <Calendar size={16} />
              {propertyShowcase.ctas[0]}
            </button>
            <a
              href={`https://wa.me/${client.whatsapp.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-body text-sm tracking-widest uppercase border flex items-center justify-center gap-2 transition-all hover:bg-black/5"
              style={{ borderColor: 'var(--text)', color: 'var(--text)' }}
            >
              <MessageCircle size={16} />
              {propertyShowcase.ctas[1]}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
