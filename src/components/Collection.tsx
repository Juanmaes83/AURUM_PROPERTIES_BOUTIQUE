import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMagneticEffect } from '../hooks/useMagneticEffect';

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
  const magneticRef = useMagneticEffect(0.3) as React.RefObject<HTMLAnchorElement>;

  useEffect(() => {
    if (!imageContainerRef.current || !imageRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.fromTo(
      imageRef.current,
      { yPercent: -15 },
      { yPercent: 15, ease: 'none' }
    );

    return () => {
      tl.kill();
    };
  }, []);

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
      <div ref={imageContainerRef} className="overflow-hidden mb-6 shadow-lg h-[400px]">
        <img
          ref={imageRef}
          src={property.image}
          alt={property.name}
          loading="lazy"
          className="w-full h-full object-cover"
          style={{ scale: 1.1 }}
        />
      </div>

      <div className="space-y-3">
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
      <motion.h2
        className="font-headline text-4xl md:text-5xl text-center mb-16"
        style={{ color: 'var(--text)' }}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        The Collection
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} index={index} isInView={isInView} />
        ))}
      </div>
    </section>
  );
};
