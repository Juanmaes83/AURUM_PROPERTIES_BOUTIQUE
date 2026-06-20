import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { MapPin, Phone, Mail, Check, ChevronRight, Home, Building2, Users, Star } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { embassyLevanteDemo } from './data/clientDemos/embassyLevante';

const cfg = embassyLevanteDemo;

const VISUAL_EXPERIENCE_URL = '/visual-experience/embassy-levante';
const LANDING_URL = '/embassy-levante';

const zones = [
  {
    name: 'Torrevieja',
    desc: 'Uno de los mercados inmobiliarios más activos de la Costa Blanca. Alta demanda de vivienda vacacional y residencial de compradores nacionales e internacionales.',
    tag: 'Mercado principal',
  },
  {
    name: 'Costa Blanca',
    desc: 'Más de 200 km de costa en la provincia de Alicante. Alta demanda de segunda residencia, clima mediterráneo y conexión internacional que atrae a compradores de toda Europa.',
    tag: 'Zona de influencia',
  },
  {
    name: 'Orihuela Costa',
    desc: 'Urbanizaciones premium en la costa del Segura con fuerte presencia de compradores europeos. Zona de expansión natural para Embassy Levante.',
    tag: 'Expansión',
  },
];

const services = [
  {
    icon: Home,
    title: 'Captación de propietarios',
    desc: 'Embassy Levante muestra al propietario exactamente cómo se presentará su vivienda antes de firmar el mandato. Argumentos visuales, no promesas.',
  },
  {
    icon: Building2,
    title: 'Compraventa inmobiliaria',
    desc: 'Compra, venta y asesoramiento en Torrevieja y la Costa Blanca. Conocimiento local, gestión completa y contacto directo con el agente responsable.',
  },
  {
    icon: Users,
    title: 'Alquiler vacacional y residencial',
    desc: 'Gestión de alquileres en Torrevieja para propietarios que buscan rentabilidad y compradores que necesitan flexibilidad antes de decidir.',
  },
  {
    icon: Star,
    title: 'Presentación visual de propiedad',
    desc: 'Cada propiedad se convierte en un activo visual que se puede enviar por WhatsApp, poner en web y usar en campaña. Un activo, tres usos distintos.',
  },
];

const propertyCards = [
  { tipo: 'Apartamento', zona: 'Torrevieja Centro', m2: '80 m²', dorms: '2 hab.', accent: 'Vista al lago', badge: 'Destacado' },
  { tipo: 'Villa', zona: 'La Mata · Torrevieja', m2: '210 m²', dorms: '4 hab.', accent: 'Piscina privada', badge: 'Exclusivo' },
  { tipo: 'Piso', zona: 'Playa de los Locos', m2: '70 m²', dorms: '2 hab.', accent: 'Primera línea', badge: 'Oportunidad' },
];

const method = [
  { step: '01', title: 'Contacto', body: 'El propietario llega por WhatsApp, llamada o recomendación. Embassy Levante responde con datos y con una experiencia visual preparada para su propiedad.' },
  { step: '02', title: 'Experiencia visual', body: 'Antes de firmar el mandato, el propietario ve cómo quedará su vivienda presentada. No es una promesa, es una demostración.' },
  { step: '03', title: 'Mandato', body: 'Con el argumento visual sobre la mesa, la negociación del mandato es más corta y la decisión más clara. Menos fricción, más cierres.' },
  { step: '04', title: 'Captación activa', body: 'La propiedad entra en cartera con su propia pieza visual, lista para WhatsApp, web y campaña digital. Un activo que trabaja solo.' },
  { step: '05', title: 'Cierre', body: 'Embassy Levante acompaña hasta la firma. El propietario sabe en todo momento cómo avanza su vivienda en el mercado de Torrevieja.' },
];

function SectionReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.18 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const EmbassyLevanteWebCompleta = () => {
  useSmoothScroll();

  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    const text = new SplitType(headlineRef.current, { types: 'words' });
    const ctx = gsap.context(() => {
      gsap.from(text.words ?? [], {
        yPercent: 100,
        rotate: 3,
        opacity: 0,
        duration: 1.4,
        stagger: 0.05,
        ease: 'expo.out',
        delay: 0.4,
      });
    });
    return () => {
      text.revert();
      ctx.revert();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Embassy Levante · Web Completa · Immersphere Pro</title>
        <meta
          name="description"
          content="Propuesta web completa para Embassy Levante: captación de propietarios, servicios, zonas y contacto directo en Torrevieja y la Costa Blanca."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <GridOverlay />
      <CustomCursor />

      {/* ─── PRIVATE HEADER ─── */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b border-[#c4a96a]/20 bg-black/85 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-serif text-[#c4a96a] text-lg tracking-wide">Embassy Levante</span>
          <span className="hidden sm:block text-[10px] tracking-[0.24em] uppercase text-[#c4a96a]/60 font-mono">
            Web Desarrollada Completa
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#c4a96a]/50 font-mono hidden md:block">
            Preview · Immersphere Pro
          </span>
          <a
            href={cfg.highIntentContact.primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-bold tracking-[0.12em] uppercase bg-[#c4a96a] text-black px-4 py-2 hover:bg-[#d4b97a] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* ─── NAV ─── */}
      <nav className="fixed top-[49px] left-0 right-0 z-40 flex items-center gap-6 px-6 py-2 border-b border-white/5 bg-black/65 backdrop-blur-md overflow-x-auto">
        {[
          { id: 'inicio', label: 'Inicio' },
          { id: 'zonas', label: 'Zonas' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'propiedades', label: 'Propiedades' },
          { id: 'metodo', label: 'Método' },
          { id: 'experiencia-visual', label: 'Experiencia Visual' },
          { id: 'contacto', label: 'Contactar' },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-[10px] tracking-[0.18em] uppercase text-[#c4a96a]/60 hover:text-[#c4a96a] whitespace-nowrap transition-colors font-mono"
          >
            {label}
          </button>
        ))}
      </nav>

      <main className="bg-[#0B0B0C] text-[#F7F7F7] pt-[89px]">

        {/* ─── HERO ─── */}
        <section id="inicio" className="relative min-h-screen overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0c07] to-[#0B0B0C]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 60% at 15% 55%, rgba(196,169,106,0.06) 0%, transparent 65%)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-3 border border-[#c4a96a]/35 bg-black/40 px-4 py-2 backdrop-blur-sm">
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#c4a96a] font-mono">
                  EMBASSY LEVANTE · TORREVIEJA · COSTA BLANCA
                </span>
              </div>
            </motion.div>

            <h1
              ref={headlineRef}
              className="font-serif leading-[0.93] max-w-4xl overflow-hidden"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
            >
              La agencia que muestra cómo venderá tu vivienda antes de firmar.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-10 max-w-xl text-lg text-[#b0a390] leading-relaxed"
            >
              Embassy Levante acompaña a propietarios y compradores en Torrevieja y la Costa Blanca. Captación
              con argumento visual real, presentación diferenciada y resultados concretos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.68 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={cfg.highIntentContact.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c4a96a] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors"
              >
                Contactar con Embassy Levante
              </a>
              <button
                onClick={() => scrollTo('experiencia-visual')}
                className="border border-white/25 px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#c4a96a] transition-colors"
              >
                Ver propuesta visual
              </button>
            </motion.div>
          </div>
        </section>

        {/* ─── PRESENTACIÓN AGENCIA ─── */}
        <section className="bg-[#F7F3EC] text-[#111] py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr] items-center">
              <div>
                <span className="text-[10px] tracking-[0.32em] text-[#8a6d3a] font-mono">
                  EMBASSY LEVANTE
                </span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4">
                  Captación de propietarios en Torrevieja con impacto visual desde el primer momento.
                </h2>
                <p className="mt-6 text-[#555] leading-relaxed">
                  Embassy Levante opera en Torrevieja y la Costa Blanca con un enfoque directo: el propietario
                  que ve cómo se presentará su vivienda antes de firmar, decide más rápido. La agencia que
                  muestra primero, capta primero.
                </p>
                <a
                  href={`mailto:${cfg.client.email}`}
                  className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#8a6d3a] border-b border-[#8a6d3a]/40 pb-1 hover:border-[#8a6d3a] transition-colors"
                >
                  {cfg.client.email}
                  <ChevronRight size={14} strokeWidth={2.5} />
                </a>
              </div>
              <div className="grid gap-4">
                {[
                  { label: 'Dirección', value: cfg.client.address },
                  { label: 'Teléfono', value: cfg.client.phone },
                  { label: 'Email', value: cfg.client.email },
                  { label: 'Web', value: cfg.client.website },
                ].map((item) => (
                  <div key={item.label} className="border border-black/10 bg-white px-5 py-4 flex items-start gap-4">
                    <span className="text-[10px] font-mono text-[#8a6d3a] uppercase tracking-[0.18em] mt-0.5 w-32 flex-shrink-0">
                      {item.label}
                    </span>
                    <span className="text-sm text-[#333]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ─── ZONAS ─── */}
        <section id="zonas" className="py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                ZONAS DE ACTUACIÓN
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-14 max-w-2xl">
                Torrevieja y la Costa Blanca.
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {zones.map((z) => (
                  <div key={z.name} className="border border-white/8 bg-white/[0.02] p-7">
                    <div className="flex items-start justify-between mb-5">
                      <MapPin size={18} className="text-[#c4a96a]" strokeWidth={1.5} />
                      <span className="text-[10px] font-mono text-[#c4a96a]/70 border border-[#c4a96a]/25 px-2 py-1 tracking-[0.12em]">
                        {z.tag}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl mb-3">{z.name}</h3>
                    <p className="text-sm text-[#8a8078] leading-relaxed">{z.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ─── SERVICIOS ─── */}
        <section id="servicios" className="bg-[#0e0c0a] py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                SERVICIOS INMOBILIARIOS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-14 max-w-2xl">
                De la captación al cierre con presentación visual de impacto.
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {services.map((s) => (
                  <div key={s.title} className="border border-white/8 bg-white/[0.02] p-7 hover:border-[#c4a96a]/30 transition-colors">
                    <s.icon size={22} className="text-[#c4a96a] mb-5" strokeWidth={1.5} />
                    <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                    <p className="text-sm text-[#8a8078] leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ─── PROPIEDADES DESTACADAS ─── */}
        <section id="propiedades" className="py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                PROPIEDADES DESTACADAS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-4 max-w-2xl">
                Una selección a la altura de Torrevieja.
              </h2>
              <p className="text-[#8a8078] mb-14 max-w-xl">
                Estas tarjetas son placeholders editoriales de la propuesta. Las propiedades reales de Embassy
                Levante se integran con los activos validados por el equipo.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {propertyCards.map((p) => (
                  <div key={p.tipo + p.zona} className="border border-white/8 overflow-hidden group">
                    <div className="h-52 bg-gradient-to-br from-[#1a1510] via-[#231c12] to-[#0d0b09] flex items-end p-5 relative">
                      <div className="absolute top-4 right-4 text-[10px] font-mono text-black bg-[#c4a96a] px-2 py-1 tracking-[0.14em]">
                        {p.badge}
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <Home size={80} strokeWidth={0.8} className="text-[#c4a96a]" />
                      </div>
                    </div>
                    <div className="p-5 border-t border-white/6">
                      <p className="text-[10px] font-mono text-[#c4a96a] mb-2 tracking-[0.14em]">{p.tipo}</p>
                      <h3 className="font-serif text-lg mb-1">{p.zona}</h3>
                      <p className="text-xs text-[#8a8078] italic mb-3">{p.accent}</p>
                      <div className="flex gap-4 text-xs text-[#635a50]">
                        <span>{p.m2}</span>
                        <span>{p.dorms}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ─── MÉTODO ─── */}
        <section id="metodo" className="bg-[#0e0c0a] py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                MÉTODO DE CAPTACIÓN
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-14 max-w-2xl">
                Del primer contacto al mandato firmado: cinco pasos con argumento visual.
              </h2>
              <div className="grid gap-6 md:grid-cols-5">
                {method.map((m) => (
                  <div key={m.step} className="border-t border-white/12 pt-6">
                    <div className="text-xs font-mono text-[#c4a96a] mb-3">{m.step}</div>
                    <h3 className="font-serif text-lg mb-2">{m.title}</h3>
                    <p className="text-xs text-[#6a6258] leading-relaxed">{m.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ─── EXPERIENCIA VISUAL ─── */}
        <section id="experiencia-visual" className="py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                  POR QUÉ FUNCIONA LA EXPERIENCIA VISUAL
                </span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-6">
                  En Torrevieja, quien muestra primero cómo venderá la vivienda, capta primero.
                </h2>
                <p className="text-[#8a8078] leading-relaxed mb-6">
                  El propietario en Torrevieja compara varias agencias antes de firmar. Embassy Levante puede ser
                  la única que llega a la reunión con una experiencia visual lista para esa propiedad concreta.
                </p>
                <div className="space-y-3 mb-8">
                  {cfg.audit.opportunities.map((o) => (
                    <div key={o} className="flex items-start gap-3">
                      <Check size={16} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-[#d0c8bc]">{o}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={VISUAL_EXPERIENCE_URL}
                  className="inline-flex items-center gap-2 border border-[#c4a96a]/40 text-[#c4a96a] px-6 py-3 text-sm font-semibold tracking-[0.12em] uppercase hover:border-[#c4a96a] transition-colors"
                >
                  Ver experiencia visual
                  <ChevronRight size={14} strokeWidth={2.5} />
                </a>
              </div>
              <div
                className="border border-[#c4a96a]/20 bg-[#0e0c0a] overflow-hidden"
                style={{ aspectRatio: '9/16', maxWidth: 320, margin: '0 auto' }}
              >
                <iframe
                  src={cfg.visualExperience.embedUrl}
                  title="Experiencia Visual · Embassy Levante"
                  loading="lazy"
                  allow="autoplay"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ─── CONTACTO ─── */}
        <section id="contacto" className="bg-[#0e0c0a] py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                CONTACTO DIRECTO
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-6">
                Hablamos cuando quieras.
              </h2>
              <p className="text-[#8a8078] max-w-xl mx-auto mb-12 leading-relaxed">
                El equipo de Embassy Levante está en Torrevieja. Por teléfono, WhatsApp o email, el tiempo de
                respuesta es el que merece una decisión importante.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-14">
                <a
                  href={cfg.highIntentContact.primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#c4a96a] text-black px-8 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors"
                >
                  Contactar con Embassy Levante
                </a>
                <a
                  href={LANDING_URL}
                  className="border border-white/20 px-8 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#c4a96a] transition-colors"
                >
                  Ver propuesta visual
                </a>
              </div>

              <div className="grid gap-6 sm:grid-cols-3 text-sm text-[#b0a390] max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-2 text-center">
                  <MapPin size={16} className="text-[#c4a96a]" />
                  <span>{cfg.client.address}</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Phone size={16} className="text-[#c4a96a]" />
                  <span>{cfg.client.phone}</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Mail size={16} className="text-[#c4a96a]" />
                  <a href={`mailto:${cfg.client.email}`} className="hover:text-[#c4a96a] transition-colors">
                    {cfg.client.email}
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* ─── FOOTER NOTE ─── */}
        <footer className="py-6 px-6 border-t border-white/5">
          <p className="text-center text-[0.6rem] text-[#3a3530] tracking-[0.08em] font-mono">
            Propuesta conceptual · Immersphere Pro · Revision y validacion por Embassy Levante antes de publicar
          </p>
        </footer>
      </main>
    </>
  );
};
