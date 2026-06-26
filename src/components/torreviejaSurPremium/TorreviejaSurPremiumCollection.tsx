import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';
import { RevealText } from '../RevealText';
import { torreviejaSurPremiumDemo } from '../../data/clientDemos/torreviejaSurPremium';
import { AlertCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const aurumImages = [
  '/IMAGEN_AURUM_HEROWEB.png',
  '/IMAGEN_AURUM_HEROWEB_3.png',
  '/IMAGEN_AURUM_INTERIORES.png',
  '/IMAGEN_AURUM_INTERIORES_2.png',
  '/IMAGEN_AURUM_MATERIALES.png',
  '/IMAGEN_AURUM_MATERIALES_2.png',
];

const candidateImages = [
  '/TorreviejaSurPremium/news_1.jpg',
  '/TorreviejaSurPremium/news_2.jpg',
  '/TorreviejaSurPremium/news_thumb_1.jpg',
  '/TorreviejaSurPremium/news_thumb_2.jpg',
];

const PropertyCard = ({
  property,
  index,
  isInView,
}: {
  property: {
    name: string;
    type: string;
    zone: string;
    price: string;
    status: string;
    notes?: string;
  };
  index: number;
  isInView: boolean;
}) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const techLineRef = useRef<HTMLDivElement>(null);
  const magneticRef = useMagneticEffect(0.3) as React.RefObject<HTMLAnchorElement>;

  const isPublicCandidate = property.status === 'public_candidate_pending_validation';
  const cardImage = isPublicCandidate
    ? candidateImages[index % candidateImages.length]
    : aurumImages[index % aurumImages.length];
  const statusLabel = isPublicCandidate
    ? 'Candidata pública · pendiente de validación'
    : 'Propiedad tipo · pendiente de validación';

  useEffect(() => {
    if (!imageContainerRef.current || !imageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: 40,
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

  useEffect(() => {
    if (!techLineRef.current || !isInView) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        techLineRef.current,
        { scaleX: 0, transformOrigin: 'right' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.out',
          delay: index * 0.2 + 0.8,
          scrollTrigger: {
            trigger: techLineRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, techLineRef);
    return () => ctx.revert();
  }, [isInView, index]);

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
    >
      <div ref={imageContainerRef} className="parallax-container relative overflow-hidden mb-6 shadow-lg h-[400px]">
        <img
          ref={imageRef}
          src={cardImage}
          alt={property.name}
          loading="lazy"
          className="parallax-img w-full h-full object-cover"
          style={{ scale: 1.4 }}
        />
        <div
          className="gold-overlay absolute top-0 left-0 w-0 h-full pointer-events-none z-10 transition-all duration-700 group-hover:w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(166, 139, 91, 0.2), transparent)',
          }}
        />
        <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
        <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm text-white font-mono text-[10px] tracking-widest uppercase">
          {statusLabel}
        </div>
      </div>

      <div className="space-y-3 relative">
        <div
          ref={techLineRef}
          className="absolute -top-3 right-0 h-px"
          style={{
            width: '60px',
            backgroundColor: 'var(--gold)',
            opacity: 0.5,
          }}
        />
        <h3 className="font-body text-xl" style={{ color: 'var(--text)' }}>
          {property.name} ·{' '}
          <span className="font-mono text-gold tracking-widest">{property.type}</span> · {property.zone}
        </h3>
        <p className="font-mono text-sm" style={{ color: 'var(--gold)' }}>
          {property.price}
        </p>
        {property.notes && (
          <p className="font-body text-xs leading-relaxed" style={{ color: 'var(--text)', opacity: 0.6 }}>
            {property.notes}
          </p>
        )}
        <div className="relative inline-block group">
          <a
            ref={magneticRef}
            href="#contact"
            className="font-body text-sm tracking-wide inline-block relative"
            style={{ color: 'var(--text)' }}
          >
            Ver ficha inmersiva
            <motion.span
              className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
              style={{ backgroundColor: 'var(--gold)' }}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export const TorreviejaSurPremiumCollection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { properties, assets } = torreviejaSurPremiumDemo;

  return (
    <section id="collection" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Selección destacada
        </span>
        <RevealText className="font-headline text-4xl md:text-5xl mt-4" style={{ color: 'var(--text)' }}>
          Torrevieja Sur · Propiedades candidatas
        </RevealText>
        <p className="font-body mt-4 max-w-2xl mx-auto" style={{ color: 'var(--text)', opacity: 0.7 }}>
          Algunas tipologías se han detectado en el catálogo público de Torrevieja Sur. Todas las fichas son
          estructura demostrativa y se sustituirán por una vivienda real elegida con el cliente.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} index={index} isInView={isInView} />
        ))}
      </div>

      <motion.div
        className="mt-16 p-6 flex items-start gap-4 border border-dashed"
        style={{ borderColor: 'var(--gold)', backgroundColor: 'rgba(166, 139, 91, 0.03)' }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        <AlertCircle size={20} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
        <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text)', opacity: 0.75 }}>
          {assets.notes}
        </p>
      </motion.div>
    </section>
  );
};
