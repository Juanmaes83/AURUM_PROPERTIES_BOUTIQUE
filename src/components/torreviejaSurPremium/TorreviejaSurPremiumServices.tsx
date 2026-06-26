import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Home,
  Handshake,
  MessageCircle,
  Search,
  Scan,
  MousePointerClick,
  Video,
  QrCode,
  Map,
  Users,
  Headphones,
  BookOpen,
} from 'lucide-react';
import { RevealText } from '../RevealText';
import { torreviejaSurPremiumDemo } from '../../data/clientDemos/torreviejaSurPremium';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ElementType> = {
  Home,
  Handshake,
  MessageCircle,
  Search,
  Scan,
  MousePointerClick,
  Video,
  QrCode,
  Map,
  Users,
  Headphones,
  BookOpen,
};

const ServiceCard = ({
  service,
  index,
  isInView,
}: {
  service: { icon: string; title: string; description: string };
  index: number;
  isInView: boolean;
}) => {
  const dividerRef = useRef<HTMLDivElement>(null);
  const Icon = iconMap[service.icon] || Home;

  useEffect(() => {
    if (!dividerRef.current || !isInView) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power4.out',
          delay: index * 0.15,
          scrollTrigger: {
            trigger: dividerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, dividerRef);
    return () => ctx.revert();
  }, [isInView, index]);

  return (
    <motion.div
      className="group relative border-l-2 border-transparent hover:border-l-2 pl-4 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderLeftColor = 'var(--gold)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderLeftColor = 'transparent';
      }}
    >
      <div className="relative">
        <div
          ref={dividerRef}
          className="gold-divider absolute top-0 left-0 w-full h-px"
          style={{ backgroundColor: 'var(--gold)', opacity: 0.3 }}
        />
        <div
          className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500 origin-center"
          style={{ backgroundColor: 'var(--gold)', opacity: 0.6 }}
        />
      </div>

      <div className="pt-6 space-y-4">
        <Icon size={32} style={{ color: 'var(--gold)' }} />
        <h3 className="font-headline text-2xl" style={{ color: 'var(--text)' }}>
          {service.title}
        </h3>
        <p className="font-body text-sm leading-relaxed opacity-80">{service.description}</p>
      </div>
    </motion.div>
  );
};

export const TorreviejaSurPremiumServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { services } = torreviejaSurPremiumDemo;

  return (
    <section id="services" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
          Servicios
        </span>
        <RevealText className="font-headline text-4xl md:text-5xl mt-4" style={{ color: 'var(--text)' }}>
          Lo que tienes · Lo que sumamos
        </RevealText>
      </div>

      <div className="mb-20">
        <h3 className="font-headline text-2xl mb-8" style={{ color: 'var(--text)', opacity: 0.8 }}>
          Servicios actuales de Torrevieja Sur
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.current.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-headline text-2xl mb-8" style={{ color: 'var(--gold)' }}>
          Servicios Immersphere propuestos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.improved.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index + services.current.length}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
