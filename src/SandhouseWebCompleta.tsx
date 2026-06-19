import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { MapPin, Phone, Mail, ExternalLink, Check } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { proposalPackage } from './generated/SandhouseInmobiliariaProposalPackage';

const VISUAL_EXPERIENCE_URL = '/sandhouse-inmobiliaria/visual-experience';
const BANNER_PACK_URL = '/banners/sandhouse-inmobiliaria';
const BANNER_VERTICAL_URL = '/banners/sandhouse-inmobiliaria/vertical';
const BANNER_HORIZONTAL_URL = '/banners/sandhouse-inmobiliaria/horizontal';

const services = [
  {
    num: '01',
    title: proposalPackage.fourHooks.visualExperience.label,
    body: 'Pieza animada personalizada para Sandhouse: galeria de imagenes con movimiento, QR de contacto y CTA directo. Lista para enviar por WhatsApp o incrustar en web.',
    detail: 'Canvas 2D · QR · Embed',
  },
  {
    num: '02',
    title: proposalPackage.fourHooks.landing.label,
    body: 'Pagina de propuesta adaptada al perfil de Sandhouse Inmobiliaria: diagnostico, 4 piezas visuales integradas y contacto directo. Pensada para enviar a decisores.',
    detail: 'Web premium · Datos reales · Mobile-first',
  },
  {
    num: '03',
    title: proposalPackage.fourHooks.webCompleta.label,
    body: 'Presencia digital de nivel superior con narrativa de marca, galeria de propiedades, captacion de propietarios, tecnologia y proceso completo.',
    detail: 'Storytelling · Galeria · SEO · CTA multiple',
  },
  {
    num: '04',
    title: proposalPackage.fourHooks.bannerPack.label,
    body: 'Formatos vertical 9:16 y horizontal 16:9 con propiedades de Sandhouse. Para stories, WhatsApp, web, presentaciones y campana.',
    detail: '1080x1920 · 1920x1080 · QR incluido',
  },
];

const processSteps = [
  { step: '01', title: 'Auditoria', body: 'Analizamos la presencia digital actual de Sandhouse Inmobiliaria: web, buscadores, redes y activos visuales. Identificamos la oportunidad real en Torrevieja.' },
  { step: '02', title: 'Briefing', body: 'Elegimos la propiedad o campana piloto. Recogemos activos disponibles (fotos, logo, copy) y definimos el mensaje clave para el comprador objetivo.' },
  { step: '03', title: 'Generacion', body: 'Creamos la experiencia visual, la landing y el pack de banners en 3-7 dias. Cada pieza es revisada y validada antes de publicar.' },
  { step: '04', title: 'Publicacion', body: 'Publicamos con URL limpia, embed disponible y QR. Entregamos todo listo para WhatsApp, web o campana digital.' },
  { step: '05', title: 'Medicion', body: 'Seguimos el rendimiento: clics, consultas generadas, calidad de leads. Ajustamos para maximizar la conversion de cada activo.' },
];

const differentiators = [
  'Diferenciacion visual en Torrevieja frente a agencias locales',
  'Activos reutilizables en WhatsApp, web y campana digital',
  'Experiencia de comprador premium desde el primer clic',
  'Captura de lead de alto interes antes de la visita',
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

export function SandhouseWebCompleta() {
  useSmoothScroll();

  const heroHeadlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!heroHeadlineRef.current) return;
    const split = new SplitType(heroHeadlineRef.current, { types: 'words' });
    gsap.fromTo(
      split.words,
      { opacity: 0, y: 28 },
      { opacity: 1, y: 0, stagger: 0.06, duration: 0.7, ease: 'power3.out', delay: 0.2 }
    );
    return () => split.revert();
  }, []);

  return (
    <>
      <GridOverlay />
      <CustomCursor />

      <main className="bg-[#0B0B0C] text-[#F7F7F7]">
        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden px-6 py-10 md:px-12 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0a07] to-black" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 60%, rgba(196,169,106,0.04) 0%, transparent 60%)' }} />

          <div className="relative z-10 max-w-5xl mx-auto w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              <div className="inline-flex items-center gap-3 border border-[#c4a96a]/30 bg-black/40 px-4 py-2 backdrop-blur-sm mb-10">
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#c4a96a] font-mono">
                  IMMERSPHERE · SANDHOUSE INMOBILIARIA · TORREVIEJA
                </span>
              </div>
            </motion.div>

            <h1
              ref={heroHeadlineRef}
              className="font-serif leading-[0.95] max-w-3xl"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Tu hogar en Torrevieja y la Costa Levantina
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 max-w-xl text-lg text-[#b0a390] leading-relaxed"
            >
              {proposalPackage.painDetected}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={VISUAL_EXPERIENCE_URL}
                className="bg-[#c4a96a] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors"
              >
                Ver experiencia visual
              </a>
              <a
                href="mailto:info@sandhouse.es?subject=Solicitud%20de%20revisi%C3%B3n%20de%20propuesta%20Immersphere"
                className="border border-white/20 px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#c4a96a] transition-colors"
              >
                Solicitar revision de propuesta
              </a>
            </motion.div>
          </div>
        </section>

        {/* EXPERIENCIA VISUAL EMBED */}
        <section id="visual-experience" className="py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono uppercase block mb-4">
                01 · Experiencia Visual
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 max-w-2xl">
                Impacto visual desde el primer segundo
              </h2>
              <div
                className="relative w-full border border-[#c4a96a]/15 overflow-hidden"
                style={{ paddingTop: '56.25%' }}
              >
                <iframe
                  src="https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/sandhouse-inmobiliaria/?embed=1"
                  title="Experiencia Visual · Sandhouse Inmobiliaria"
                  className="absolute inset-0 w-full h-full border-none"
                  allow="autoplay"
                />
              </div>
              <div className="mt-4 flex gap-4">
                <a
                  href={VISUAL_EXPERIENCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#c4a96a] hover:text-[#d4b97a] transition-colors"
                >
                  <ExternalLink size={14} />
                  Abrir en pantalla completa
                </a>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* SERVICES */}
        <section className="bg-[#0e0c0a] py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono uppercase block mb-4">
                4 Piezas Comerciales
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16 max-w-2xl">
                Una propuesta completa para Sandhouse Inmobiliaria
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {services.map((s) => (
                  <div
                    key={s.num}
                    className="border border-white/8 bg-white/[0.02] p-7 hover:border-[#c4a96a]/30 transition-colors"
                  >
                    <div className="text-xs font-mono text-[#c4a96a] mb-4">{s.num}</div>
                    <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                    <p className="text-sm text-[#8a8078] leading-relaxed mb-4">{s.body}</p>
                    <span className="text-[10px] font-mono text-[#635a50] tracking-[0.12em]">{s.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-start">
              <div>
                <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono uppercase block mb-4">
                  Oportunidad detectada
                </span>
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                  Diferenciacion visual en un mercado competitivo
                </h2>
                <p className="text-[#8a8078] leading-relaxed">
                  Torrevieja es uno de los mercados inmobiliarios mas activos de la Costa Blanca. La diferenciacion visual decide que agencia capta al comprador primero.
                </p>
              </div>
              <div className="space-y-3">
                {differentiators.map((d) => (
                  <div key={d} className="flex items-start gap-3 border border-white/8 bg-white/[0.02] px-5 py-4">
                    <Check size={16} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#d0c8bc] leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* BANNER PACK */}
        <section className="bg-[#0e0c0a] py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono uppercase block mb-4">
                04 · Pack de Banners
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8 max-w-2xl">
                Creatividades listas para campana
              </h2>
              <div className="grid gap-4 md:grid-cols-2 mb-8">
                <a
                  href={BANNER_VERTICAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-[#c4a96a]/20 bg-[#c4a96a]/5 p-6 hover:border-[#c4a96a]/45 transition-colors group"
                >
                  <div>
                    <p className="font-semibold text-sm mb-1">Banner Vertical</p>
                    <p className="text-xs text-[#8a8078]">1080 x 1920 · Stories · Reels</p>
                  </div>
                  <ExternalLink size={16} color="#c4a96a" />
                </a>
                <a
                  href={BANNER_HORIZONTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border border-[#c4a96a]/20 bg-[#c4a96a]/5 p-6 hover:border-[#c4a96a]/45 transition-colors group"
                >
                  <div>
                    <p className="font-semibold text-sm mb-1">Banner Horizontal</p>
                    <p className="text-xs text-[#8a8078]">1920 x 1080 · Display · YouTube</p>
                  </div>
                  <ExternalLink size={16} color="#c4a96a" />
                </a>
              </div>
              <a
                href={BANNER_PACK_URL}
                className="inline-flex items-center gap-2 text-sm text-[#c4a96a] border border-[#c4a96a]/30 px-5 py-3 hover:border-[#c4a96a] transition-colors"
              >
                Ver pack completo
                <ExternalLink size={14} />
              </a>
            </div>
          </SectionReveal>
        </section>

        {/* PROCESS */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-6xl mx-auto">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono uppercase block mb-4">
                Proceso
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-16 max-w-2xl">
                De auditoria a publicacion en 7 dias
              </h2>
              <div className="grid gap-6 md:grid-cols-5">
                {processSteps.map((p) => (
                  <div key={p.step} className="border-t border-white/12 pt-6">
                    <div className="text-xs font-mono text-[#c4a96a] mb-3">{p.step}</div>
                    <h3 className="font-serif text-lg mb-2">{p.title}</h3>
                    <p className="text-xs text-[#6a6258] leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* CONTACT */}
        <section className="bg-[#0e0c0a] py-24 md:py-32 px-6 md:px-12">
          <SectionReveal>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono uppercase block mb-4">
                Siguiente paso
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">
                Revisamos juntos la propuesta
              </h2>
              <p className="text-[#8a8078] leading-relaxed max-w-xl mx-auto mb-12">
                {proposalPackage.followUpMessage}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-16">
                <a
                  href="mailto:info@sandhouse.es?subject=Solicitud%20de%20revisi%C3%B3n%20de%20propuesta%20Immersphere"
                  className="bg-[#c4a96a] text-black px-8 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors"
                >
                  Solicitar revision de propuesta
                </a>
                <a
                  href="tel:+34655187116"
                  className="border border-white/20 px-8 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#c4a96a] transition-colors"
                >
                  +34 655 187 116
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-[#635a50]">
                <span className="flex items-center gap-2">
                  <MapPin size={14} color="#c4a96a" />
                  C/ Lanzarote 21 bajo, 03183 Torrevieja, Alicante
                </span>
                <span className="flex items-center gap-2">
                  <Mail size={14} color="#c4a96a" />
                  info@sandhouse.es
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} color="#c4a96a" />
                  +34 655 187 116
                </span>
              </div>
            </div>
          </SectionReveal>
        </section>

        {/* FOOTER NOTE */}
        <section className="py-6 px-6 border-t border-white/6">
          <p className="text-center text-[0.65rem] text-[#3a3530] tracking-[0.08em]">
            Propuesta en revision — no publicada definitivamente
          </p>
        </section>
      </main>
    </>
  );
}
