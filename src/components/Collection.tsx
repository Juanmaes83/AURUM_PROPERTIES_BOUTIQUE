import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagneticEffect } from '../hooks/useMagneticEffect';
import { RevealText } from './RevealText';

gsap.registerPlugin(ScrollTrigger);

const properties = [
  {
    image: '/IMAGEN_AURUM_HEROWEB.png',
    name: 'Villa Mediterránea',
    size: 450,
    architect: 'Arq. Ramón Esteve',
  },
  {
    image: '/IMAGEN_AURUM_HEROWEB_3.png',
    name: 'Casa del Mar',
    size: 380,
    architect: 'Arq. María Torres',
  },
  {
    image: '/IMAGEN_AURUM_INTERIORES.png',
    name: 'Ático Horizonte',
    size: 520,
    architect: 'Arq. Fran Silvestre',
  },
  {
    image: '/IMAGEN_AURUM_INTERIORES_2.png',
    name: 'Villa Altea Hills',
    size: 650,
    architect: 'Arq. Ramón Esteve',
  },
  {
    image: '/IMAGEN_AURUM_MATERIALES.png',
    name: 'Casa Piedra y Luz',
    size: 410,
    architect: 'Arq. María Torres',
  },
  {
    image: '/IMAGEN_AURUM_MATERIALES_2.png',
    name: 'Residencia Bernia',
    size: 580,
    architect: 'Arq. Fran Silvestre',
  },
];

const PropertyCard = ({ property, index, isInView }: { property: typeof properties[0]; index: number; isInView: boolean }) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const techLineRef = useRef<HTMLDivElement>(null);
  const magneticRef = useMagneticEffect(0.3) as React.RefObject<HTMLAnchorElement>;

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

  useEffect(() => {
    if (!counterRef.current || !isInView) return;

    const counter = { value: 0 };
    gsap.to(counter, {
      value: property.size,
      duration: 2,
      ease: 'power4.out',
      delay: index * 0.2 + 0.5,
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString();
        }
      },
    });
  }, [isInView, property.size, index]);

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
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="parallax-img w-full h-full object-cover"
          style={{ scale: 1.4 }}
        />
        <div className="gold-overlay absolute top-0 left-0 w-0 h-full pointer-events-none z-10 transition-all duration-700 group-hover:w-full"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(166, 139, 91, 0.2), transparent)'
          }}
        />
        <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--gold)' }} />
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
          {property.name} · <span className="font-mono text-gold tracking-widest"><span ref={counterRef} className="counter-value">0</span>m²</span> · {property.architect}
        </h3>

        <div className="relative inline-block group">
          <a
            ref={magneticRef}
            href="#contact"
            className="font-body text-sm tracking-wide inline-block relative"
            style={{ color: 'var(--text)' }}
          >
            Solicitar Dossier Privado
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

export const Collection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="collection"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <RevealText
        className="font-headline text-4xl md:text-5xl text-center mb-16"
        style={{ color: 'var(--text)' }}
      >
        The Collection
      </RevealText>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  );
};
