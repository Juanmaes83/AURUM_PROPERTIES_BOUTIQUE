import { useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { MapPin, Phone, Mail, Globe, Star, ChevronRight, ExternalLink, Check, ArrowRight, Users, Zap, BarChart3 } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CurrentWebsiteComparisonSection } from './components/clientDemo/CurrentWebsiteComparisonSection';
import { ImmersphereServicesSection } from './components/clientDemo/ImmersphereServicesSection';
import { HighIntentContactSection } from './components/clientDemo/HighIntentContactSection';
import { VisualExperienceBannerSection } from './components/clientDemo/VisualExperienceBannerSection';
import { embassyLevanteDemo } from './data/clientDemos/embassyLevante';

const waHref = embassyLevanteDemo.highIntentContact.primaryHref;
const phoneHref = embassyLevanteDemo.highIntentContact.secondaryHref;

const BANNER_VERTICAL_URL = '/banners/embassy-levante/vertical';
const BANNER_HORIZONTAL_URL = '/banners/embassy-levante/horizontal';
const BANNER_PACK_URL = '/banners/embassy-levante';

const services = [
  {
    num: '01',
    title: 'Experiencia Visual de Propiedad',
    body: 'Pieza animada personalizada para Embassy Levante: captación de propietarios con argumento visual, QR de contacto y CTA directo. Lista para enviar por WhatsApp antes de firmar el mandato.',
    detail: 'Canvas 2D · QR · Embed',
  },
  {
    num: '02',
    title: 'Landing Comercial Personalizada',
    body: 'Página de propuesta adaptada al perfil de Embassy Levante: diagnóstico, comparativa, experiencia visual integrada y contacto directo. Pensada para enviar a propietarios y decisores en Torrevieja.',
    detail: 'Web premium · Datos reales · Mobile-first',
  },
  {
    num: '03',
    title: 'Web Desarrollada Completa',
    body: 'Presencia digital de nivel superior con narrativa de captación de propietarios, galería editorial, sección de confianza y proceso completo de Embassy Levante en Torrevieja y la Costa Blanca.',
    detail: 'Storytelling · Galería · SEO · CTA múltiple',
  },
  {
    num: '04',
    title: 'Pack de Banners Personalizados',
    body: 'Formatos vertical 9:16 y horizontal 16:9 con la identidad de Embassy Levante. Para stories, WhatsApp, captación de propietarios y campaña digital de presencia en Torrevieja.',
    detail: '1080×1920 · 1920×1080 · QR incluido',
  },
];

const process = [
  { step: '01', title: 'Auditoría', body: 'Analizamos la presencia digital de Embassy Levante: web, buscadores, redes y activos visuales. Identificamos la oportunidad real de captación en Torrevieja.' },
  { step: '02', title: 'Briefing', body: 'Elegimos la propiedad o campaña piloto. Recogemos los activos disponibles (fotos, logo, copy) y definimos el argumento visual para el propietario.' },
  { step: '03', title: 'Generación', body: 'Creamos la experiencia visual, la landing y el pack de banners en 3-7 días. Cada pieza está revisada y lista para usar como argumento de captación.' },
  { step: '04', title: 'Publicación', body: 'Publicamos con URL limpia, embed disponible y QR. Todo listo para enviar por WhatsApp al propietario antes de la primera reunión.' },
  { step: '05', title: 'Medición', body: 'Seguimos el rendimiento: consultas generadas, propietarios captados, calidad del argumento visual. Ajustamos para maximizar conversión en cada propiedad.' },
];

const markets = [
  { flag: '🇬🇧', label: 'Mercado británico', desc: 'Compradores UK que buscan vivienda vacacional y residencial en Torrevieja. Alta demanda de propiedades cerca del mar con decisión remota frecuente.' },
  { flag: '🇳🇱', label: 'Mercado holandés', desc: 'Alta demanda de segunda residencia en la Costa Blanca. El activo visual acelera la decisión desde el móvil antes del primer viaje.' },
  { flag: '🇧🇪', label: 'Mercado belga', desc: 'Perfil inversor con alto poder adquisitivo. La experiencia visual reduce objeciones antes del primer contacto con el agente de Embassy Levante.' },
  { flag: '🇩🇪', label: 'Mercado alemán', desc: 'Comprador exigente que valora la calidad de presentación. La experiencia visual posiciona a Embassy Levante por encima de la competencia local.' },
];

function SectionReveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
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
  const cfg = embassyLevanteDemo;
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;
    const text = new SplitType(headlineRef.current, { types: 'words' });
    const ctx = gsap.context(() => {
      gsap.from(text.words ?? [], {
        yPercent: 100,
        rotate: 4,
        opacity: 0,
        duration: 1.4,
        stagger: 0.05,
        ease: 'expo.out',
        delay: 0.4,
      });
    });
    return () => { text.revert(); ctx.revert(); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Embassy Levante · Web Desarrollada Completa · Immersphere Pro</title>
        <meta
          name="description"
          content="Propuesta web completa para Embassy Levante: captación de propietarios con experiencia visual, activos de campaña y presencia digital diferenciada en Torrevieja y la Costa Blanca."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <GridOverlay />
      <CustomCursor />

      {/* Fixed header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b border-[#c4a96a]/20 bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="font-serif text-[#c4a96a] text-base tracking-wide">Embassy Levante</span>
          <span className="hidden sm:block text-[10px] tracking-[0.24em] uppercase text-[#c4a96a] font-mono">Web Desarrollada Completa</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#c4a96a]/60 font-mono hidden md:block">Preview privada · Immersphere Pro</span>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold tracking-[0.12em] uppercase bg-[#c4a96a] text-black px-4 py-2 hover:bg-[#d4b97a] transition-colors">WhatsApp</a>
        </div>
      </div>

      {/* Nav */}
      <nav className="fixed top-[49px] left-0 right-0 z-40 flex items-center gap-6 px-6 py-2 border-b border-white/5 bg-black/60 backdrop-blur-md overflow-x-auto">
        {[
          { id: 'hero', label: 'Inicio' },
          { id: 'diagnosis', label: 'Diagnóstico' },
          { id: 'visual-experience', label: 'Experiencia Visual' },
          { id: 'propiedades', label: 'Propiedades' },
          { id: 'mercados', label: 'Internacional' },
          { id: 'servicios', label: 'Servicios' },
          { id: 'proceso', label: 'Proceso' },
          { id: 'contacto', label: 'Contactar' },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className="text-[10px] tracking-[0.18em] uppercase text-[#c4a96a]/70 hover:text-[#c4a96a] whitespace-nowrap transition-colors font-mono"
          >
            {label}
          </button>
        ))}
      </nav>

      <main className="bg-[#0B0B0C] text-[#F7F7F7] pt-[89px]">

        {/* ─── HERO ─── */}
        <section id="hero" className="relative min-h-screen overflow-hidden flex items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.38 }}
          >
            <source src="/VIDEO_AURUM_HEROWEB.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-3 border border-[#c4a96a]/40 bg-black/40 px-4 py-2 backdrop-blur-sm mb-8">
                <span className="font-serif text-[#c4a96a] text-sm tracking-wide">Embassy Levante</span>
                <span className="text-[10px] tracking-[0.26em] uppercase text-[#c4a96a] font-mono">Web Desarrollada Completa</span>
              </div>

              <h1
                ref={headlineRef}
                className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.92] max-w-3xl overflow-hidden"
              >
                Captación de propietarios con argumento visual en Torrevieja.
              </h1>

              <p className="mt-8 max-w-xl text-lg md:text-xl text-[#D8D1C7] leading-relaxed">
                Presencia digital de nivel superior para Embassy Levante. Experiencia visual, captación de propietarios
                con argumento real, activos de campaña y diferenciación frente a la competencia local en la Costa Blanca.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {['Torrevieja', 'Costa Blanca', 'Captación propietarios', 'WhatsApp · Web · Campaña'].map((chip) => (
                  <span key={chip} className="text-[10px] tracking-[0.16em] uppercase text-[#c4a96a] border border-[#c4a96a]/30 px-3 py-1.5 font-mono">{chip}</span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo('visual-experience')}
                  className="bg-[#c4a96a] text-black px-8 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors"
                >
                  Ver Experiencia Visual
                </button>
                <button
                  onClick={() => scrollTo('diagnosis')}
                  className="border border-white/25 px-8 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#c4a96a] transition-colors"
                >
                  Ver Diagnóstico
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/50 border border-white/10 p-8 backdrop-blur-md"
            >
              <div className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase mb-6">Diagnóstico Immersphere · CRM</div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-5xl font-serif text-[#F7F7F7]">{cfg.audit.score}</div>
                  <div className="text-xs text-[#999] uppercase tracking-[0.2em] mt-1">Score CRM</div>
                </div>
                <div>
                  <div className="text-5xl font-serif text-[#c4a96a]">{cfg.audit.priority}</div>
                  <div className="text-xs text-[#999] uppercase tracking-[0.2em] mt-1">Prioridad</div>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                {cfg.audit.strengths.map((s) => (
                  <div key={s} className="flex items-start gap-3 border border-white/8 bg-white/[0.03] px-4 py-3">
                    <Check size={14} className="text-[#c4a96a] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#D8D1C7]">{s}</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] tracking-[0.18em] text-[#c4a96a]/60 font-mono uppercase">
                {cfg.client.location}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.24em] text-[#c4a96a]/60 font-mono uppercase">Explorar</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#c4a96a]/40 to-transparent" />
          </motion.div>
        </section>

        {/* ─── DIAGNÓSTICO ─── */}
        <section id="diagnosis" className="py-28 md:py-36 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <span className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase">
                Auditoría · Score {cfg.audit.score}/100 · Prioridad {cfg.audit.priority}
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
                Embassy Levante tiene contacto directo y presencia en Torrevieja. Falta el argumento visual que capta primero.
              </h2>
            </SectionReveal>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SectionReveal className="lg:col-span-2">
                <div className="border border-white/10 bg-white/[0.02] p-8 h-full">
                  <div className="text-[10px] tracking-[0.28em] text-[#c4a96a] font-mono uppercase mb-6">Fortalezas detectadas</div>
                  <div className="space-y-3">
                    {cfg.audit.strengths.map((s, i) => (
                      <div key={s} className="flex items-start gap-4">
                        <span className="text-xs font-mono text-[#c4a96a] shrink-0 mt-0.5">0{i + 1}</span>
                        <span className="text-[#D8D1C7] leading-relaxed">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="border border-[#c4a96a]/20 bg-[#c4a96a]/[0.04] p-8 h-full">
                  <div className="text-[10px] tracking-[0.28em] text-[#c4a96a] font-mono uppercase mb-6">Oportunidades</div>
                  <div className="space-y-4">
                    {cfg.audit.opportunities.map((o) => (
                      <div key={o} className="flex items-start gap-3">
                        <Zap size={14} className="text-[#c4a96a] mt-1 shrink-0" />
                        <span className="text-sm text-[#D8D1C7] leading-relaxed">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            <SectionReveal className="mt-12">
              <div className="border border-white/10 bg-white/[0.02] p-8">
                <div className="text-[10px] tracking-[0.28em] text-[#c4a96a] font-mono uppercase mb-6">Situación actual</div>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    { icon: Globe, label: 'Web', val: 'embassylevante.com', desc: 'Presencia en web activa con propiedades y contacto directo con el agente responsable' },
                    { icon: Phone, label: 'Contacto', val: '+34 691 502 743', desc: 'Contacto directo verificado: teléfono, WhatsApp y email del responsable de Embassy Levante' },
                    { icon: Users, label: 'Mercado', val: 'Torrevieja', desc: 'Uno de los mercados inmobiliarios más activos de la Costa Blanca con alta demanda internacional' },
                  ].map(({ icon: Icon, label, val, desc }) => (
                    <div key={label} className="flex flex-col gap-2">
                      <Icon size={20} className="text-[#c4a96a]" />
                      <div className="text-[10px] font-mono tracking-[0.18em] text-[#999] uppercase">{label}</div>
                      <div className="text-[#F7F7F7] font-semibold">{val}</div>
                      <div className="text-sm text-[#888] leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ─── ANTES / DESPUÉS ─── */}
        <section className="py-24 px-6 md:px-12 bg-[#0F0E0C]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-14 text-center">
              <span className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase">Antes / Después</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
                De captación verbal a argumento visual que cierra mandatos.
              </h2>
            </SectionReveal>

            <div className="grid gap-6 md:grid-cols-2">
              <SectionReveal>
                <div className="border border-white/10 bg-black/40 p-8 h-full">
                  <div className="text-[10px] tracking-[0.28em] text-[#999] font-mono uppercase mb-6">Enfoque actual</div>
                  <div className="space-y-4">
                    {[
                      'Propiedades presentadas con fotos estáticas',
                      'Captación de propietarios con argumentos verbales',
                      'Sin activos visuales para WhatsApp o campaña digital',
                      'Misma experiencia que la competencia local en Torrevieja',
                      'El propietario decide sin ver cómo se presentará su vivienda',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-4 h-4 border border-white/20 shrink-0 mt-0.5" />
                        <span className="text-sm text-[#888]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href={cfg.client.website} target="_blank" rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-xs text-[#c4a96a] border border-[#c4a96a]/30 px-4 py-2 hover:border-[#c4a96a] transition-colors">
                    <ExternalLink size={12} /> Ver web actual
                  </a>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="border border-[#c4a96a]/30 bg-[#c4a96a]/[0.04] p-8 h-full">
                  <div className="text-[10px] tracking-[0.28em] text-[#c4a96a] font-mono uppercase mb-6">Propuesta Immersphere</div>
                  <div className="space-y-4">
                    {[
                      'Experiencia visual animada con la propiedad lista antes de la reunión',
                      'Argumento visual concreto: el propietario ve cómo quedará su vivienda',
                      'QR de contacto directo para enviar por WhatsApp antes de firmar el mandato',
                      'Landing personalizada con diagnóstico y comparativa para decisores',
                      'Pack de banners verticales y horizontales para captación y campaña',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check size={16} className="text-[#c4a96a] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#D8D1C7]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollTo('visual-experience')}
                    className="mt-8 inline-flex items-center gap-2 text-xs text-black bg-[#c4a96a] px-4 py-2 hover:bg-[#d4b97a] transition-colors font-bold tracking-[0.12em] uppercase"
                  >
                    Ver experiencia <ArrowRight size={12} />
                  </button>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ─── REUSABLE: COMPARATIVA WEB ACTUAL ─── */}
        <CurrentWebsiteComparisonSection
          clientName={cfg.client.name}
          currentWebsiteUrl={cfg.client.website}
          eyebrow={cfg.comparison.eyebrow}
          title={cfg.comparison.title}
          body={cfg.comparison.body}
          bullets={cfg.comparison.bullets}
          primaryCta={cfg.comparison.primaryCta}
        />

        {/* ─── REUSABLE: EXPERIENCIA VISUAL ─── */}
        <div id="visual-experience">
          <VisualExperienceBannerSection
            clientName={cfg.client.name}
            clientLocation={cfg.client.location}
            whatsappHref={waHref}
            phoneHref={phoneHref}
            visiblePhone={cfg.client.phone}
            embedUrl={cfg.visualExperience.embedUrl}
            standaloneUrl={cfg.visualExperience.standaloneUrl}
            horizontalUrl={BANNER_HORIZONTAL_URL}
            verticalUrl={BANNER_VERTICAL_URL}
            chips={cfg.visualExperience.chips}
            eyebrow={cfg.visualExperience.eyebrow}
            title={cfg.visualExperience.title}
            body={cfg.visualExperience.body}
            supportBody={cfg.visualExperience.supportBody}
            primaryCta={cfg.visualExperience.primaryCta}
            secondaryCta={cfg.visualExperience.secondaryCta}
            pieceCta={cfg.visualExperience.pieceCta}
          />
        </div>

        {/* ─── PROPIEDADES DESTACADAS ─── */}
        <section id="propiedades" className="py-28 md:py-36 px-6 md:px-12 bg-[#0F0E0C]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-14">
              <span className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase">Propiedades destacadas</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                Torrevieja. Primera línea. Compradores nacionales e internacionales.
              </h2>
              <p className="mt-6 text-[#888] leading-relaxed max-w-2xl">
                Cada propiedad de Embassy Levante puede convertirse en una pieza visual que el propietario
                recibe antes de firmar y el comprador internacional decide antes de hacer el viaje a Torrevieja.
              </p>
            </SectionReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: 'Apartamento vacacional', sub: 'Torrevieja Centro · Vista al lago', badge: 'Destacado', size: '80 m² · 2 hab.' },
                { label: 'Villa con piscina privada', sub: 'La Mata · Torrevieja', badge: 'Exclusivo', size: '210 m² · 4 hab.' },
                { label: 'Piso primera línea', sub: 'Playa de los Locos · Torrevieja', badge: 'Oportunidad', size: '70 m² · 2 hab.' },
              ].map(({ label, sub, badge, size }) => (
                <SectionReveal key={label}>
                  <div className="group relative overflow-hidden border border-white/10">
                    <div
                      className="w-full aspect-[3/4] flex items-center justify-center relative"
                      style={{ background: 'linear-gradient(160deg, #1a1510 0%, #231c12 40%, #0d0b09 100%)' }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{ backgroundImage: 'radial-gradient(ellipse 70% 60% at 35% 40%, rgba(196,169,106,0.12) 0%, transparent 65%)' }}
                      />
                      <div className="absolute top-4 right-4 text-[10px] font-mono text-black bg-[#c4a96a] px-2 py-1 tracking-[0.14em] uppercase">{badge}</div>
                      <div className="flex flex-col items-center gap-3 opacity-15">
                        <div className="w-px h-14 bg-[#c4a96a]" />
                        <div className="w-5 h-5 border border-[#c4a96a]" style={{ transform: 'rotate(45deg)' }} />
                        <div className="w-px h-14 bg-[#c4a96a]" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-[10px] tracking-[0.2em] text-[#c4a96a] font-mono uppercase mb-1">{sub}</div>
                      <div className="font-serif text-lg text-white mb-1">{label}</div>
                      <div className="text-xs text-[#888]">{size}</div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal className="mt-10 flex flex-wrap gap-4">
              <a href={cfg.visualExperience.standaloneUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#c4a96a] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors">
                Ver Experiencia Visual <ExternalLink size={14} />
              </a>
              <a href={BANNER_PACK_URL}
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#c4a96a] transition-colors">
                Ver Pack de Banners <ChevronRight size={14} />
              </a>
            </SectionReveal>
          </div>
        </section>

        {/* ─── MERCADOS INTERNACIONALES ─── */}
        <section id="mercados" className="py-28 md:py-36 px-6 md:px-12 bg-[#F7F3EC] text-[#111]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-14">
              <span className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase">Mercado internacional</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl text-[#111]">
                El comprador de Torrevieja decide desde otro país.
              </h2>
              <p className="mt-6 text-[#555] leading-relaxed max-w-2xl">
                Embassy Levante opera en uno de los mercados con mayor demanda internacional de la Costa Blanca.
                La experiencia visual reduce la fricción del comprador remoto y del propietario que compara agencias:
                quien impacta visualmente primero, capta primero.
              </p>
            </SectionReveal>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {markets.map(({ flag, label, desc }) => (
                <SectionReveal key={label}>
                  <div className="border border-black/10 bg-white p-6 h-full">
                    <div className="text-3xl mb-4">{flag}</div>
                    <div className="font-serif text-lg text-[#111] mb-2">{label}</div>
                    <p className="text-sm text-[#555] leading-relaxed">{desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal className="mt-12 border border-black/10 bg-white p-8">
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { icon: BarChart3, val: `${cfg.audit.score}/100`, label: 'Score CRM', desc: `Prioridad ${cfg.audit.priority} — alta oportunidad de conversión para activo visual piloto en Torrevieja` },
                  { icon: Zap, val: '3–7 días', label: 'Tiempo de entrega', desc: 'Del briefing al activo publicado con URL limpia, QR y embed disponible para enviar por WhatsApp' },
                  { icon: Star, val: '4 activos', label: 'Pack completo', desc: 'Experiencia Visual · Landing · Web Completa · Pack de Banners personalizados para Embassy Levante' },
                ].map(({ icon: Icon, val, label, desc }) => (
                  <div key={label} className="flex flex-col gap-3">
                    <Icon size={22} className="text-[#c4a96a]" />
                    <div className="text-4xl font-serif text-[#111]">{val}</div>
                    <div className="text-xs tracking-[0.18em] uppercase font-mono text-[#c4a96a]">{label}</div>
                    <p className="text-sm text-[#555] leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ─── SERVICIOS ─── */}
        <section id="servicios" className="py-28 md:py-36 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-14">
              <span className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase">Sistema Immersive Sales</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                Cuatro activos que multiplican la captación de Embassy Levante.
              </h2>
            </SectionReveal>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map(({ num, title, body, detail }) => (
                <SectionReveal key={num}>
                  <div className="border border-white/10 bg-white/[0.02] p-8 h-full flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-mono text-[#c4a96a]">{num}</span>
                      <span className="text-[10px] font-mono tracking-[0.16em] text-[#555] uppercase border border-white/10 px-3 py-1">{detail}</span>
                    </div>
                    <h3 className="font-serif text-xl text-[#F7F7F7]">{title}</h3>
                    <p className="text-sm text-[#888] leading-relaxed flex-1">{body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── REUSABLE: IMMERSPHERE SERVICES ─── */}
        <ImmersphereServicesSection
          servicesUrl={cfg.immersphereServices.primaryHref}
          eyebrow={cfg.immersphereServices.eyebrow}
          title={cfg.immersphereServices.title}
          body={cfg.immersphereServices.body}
          secondary={cfg.immersphereServices.secondary}
          primaryCta={cfg.immersphereServices.primaryCta}
        />

        {/* ─── PROCESO ─── */}
        <section id="proceso" className="py-28 md:py-36 px-6 md:px-12 bg-[#0F0E0C]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-14">
              <span className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase">Cómo funciona</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                De la propiedad piloto al activo publicado en una semana.
              </h2>
            </SectionReveal>

            <div className="grid gap-4 md:grid-cols-5">
              {process.map(({ step, title, body }) => (
                <SectionReveal key={step}>
                  <div className="border border-white/10 bg-white/[0.02] p-6 h-full flex flex-col gap-4">
                    <span className="text-3xl font-serif text-[#c4a96a]/40">{step}</span>
                    <h3 className="font-serif text-lg text-[#F7F7F7]">{title}</h3>
                    <p className="text-xs text-[#777] leading-relaxed flex-1">{body}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CAPTACIÓN DE PROPIETARIOS ─── */}
        <section className="py-28 md:py-36 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
            <SectionReveal>
              <span className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase">Captación de propietarios</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                El propietario que ve cómo quedará su vivienda, decide más rápido.
              </h2>
              <p className="mt-6 text-[#888] leading-relaxed">
                La experiencia visual de Embassy Levante no solo acelera la venta al comprador. También comunica
                al propietario que tiene delante una agencia que presenta sus inmuebles de forma diferente al
                resto de la competencia en Torrevieja.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Demuestra el nivel visual antes de firmar el mandato de exclusiva',
                  'El propietario ve el activo con su vivienda antes de decidir con qué agencia firmar',
                  'QR para compartir con familia y referidos antes de la primera visita',
                  'Diferenciación real frente a agencias con catálogo estático en Torrevieja',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-[#c4a96a] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#D8D1C7]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={waHref} target="_blank" rel="noopener noreferrer"
                  className="bg-[#c4a96a] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors">
                  Pedir Demo por WhatsApp
                </a>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="border border-[#c4a96a]/20 bg-[#0e0c0a] p-10 flex flex-col gap-8">
                <div className="text-[10px] tracking-[0.28em] text-[#c4a96a] font-mono uppercase">El argumento visual de Embassy Levante</div>
                {[
                  { step: '01', desc: 'El agente llega a la reunión con el propietario con la experiencia visual ya creada para esa propiedad concreta en Torrevieja.' },
                  { step: '02', desc: 'El propietario ve exactamente cómo se presentará su vivienda en WhatsApp, web y campaña digital antes de firmar.' },
                  { step: '03', desc: 'La decisión de firmar el mandato con Embassy Levante es más fácil y más rápida que con cualquier agencia de la competencia.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-5">
                    <span className="text-3xl font-serif text-[#c4a96a]/30 shrink-0">{item.step}</span>
                    <p className="text-[#D8D1C7] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                <div className="flex items-center gap-2 border-t border-white/8 pt-6">
                  <span className="text-xs text-[#c4a96a] font-mono tracking-[0.16em] uppercase">Embassy Levante · Torrevieja · Costa Blanca</span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ─── PACK DE BANNERS ─── */}
        <section className="py-24 px-6 md:px-12 bg-[#0F0E0C]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-10">
              <span className="text-[10px] tracking-[0.3em] text-[#c4a96a] font-mono uppercase">Pack de Banners Personalizados</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                Piezas de captación con la identidad de Embassy Levante.
              </h2>
            </SectionReveal>

            <div className="grid gap-5 md:grid-cols-3">
              <SectionReveal>
                <div className="border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-[#c4a96a] uppercase tracking-[0.2em]">Pack Index</span>
                  <h3 className="font-serif text-xl">Índice del Pack</h3>
                  <p className="text-sm text-[#777] leading-relaxed flex-1">Página principal con ambos formatos, datos de Embassy Levante y acceso directo a cada banner de campaña.</p>
                  <a href={BANNER_PACK_URL}
                    className="inline-flex items-center gap-2 bg-[#c4a96a] text-black px-5 py-3 text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#d4b97a] transition-colors">
                    Ver Pack <ExternalLink size={12} />
                  </a>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-[#c4a96a] uppercase tracking-[0.2em]">Vertical · 9:16</span>
                  <h3 className="font-serif text-xl">Banner Vertical</h3>
                  <p className="text-sm text-[#777] leading-relaxed flex-1">1080×1920 px. Para stories, WhatsApp, Reels y captación de propietarios en móvil.</p>
                  <a href={BANNER_VERTICAL_URL}
                    className="inline-flex items-center gap-2 border border-[#c4a96a]/40 text-[#c4a96a] px-5 py-3 text-xs font-bold tracking-[0.12em] uppercase hover:border-[#c4a96a] transition-colors">
                    Ver Vertical <ExternalLink size={12} />
                  </a>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-[#c4a96a] uppercase tracking-[0.2em]">Horizontal · 16:9</span>
                  <h3 className="font-serif text-xl">Banner Horizontal</h3>
                  <p className="text-sm text-[#777] leading-relaxed flex-1">1920×1080 px. Para web, header, display y presentación comercial de Embassy Levante.</p>
                  <a href={BANNER_HORIZONTAL_URL}
                    className="inline-flex items-center gap-2 border border-[#c4a96a]/40 text-[#c4a96a] px-5 py-3 text-xs font-bold tracking-[0.12em] uppercase hover:border-[#c4a96a] transition-colors">
                    Ver Horizontal <ExternalLink size={12} />
                  </a>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* ─── REUSABLE: HIGH INTENT CONTACT ─── */}
        <div id="contacto">
          <HighIntentContactSection
            whatsappHref={waHref}
            phoneHref={phoneHref}
            visiblePhone={cfg.client.phone}
            eyebrow={cfg.highIntentContact.eyebrow}
            title={cfg.highIntentContact.title}
            body={cfg.highIntentContact.body}
            primaryCta={cfg.highIntentContact.primaryCta}
            secondaryCta={cfg.highIntentContact.secondaryCta}
            microcopy={cfg.highIntentContact.microcopy}
          />
        </div>

        {/* ─── FOOTER ─── */}
        <footer className="border-t border-white/10 px-6 md:px-12 py-16">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-[1fr_1fr_1fr]">
            <div className="flex flex-col gap-4">
              <span className="font-serif text-[#c4a96a] text-lg tracking-wide self-start">Embassy Levante</span>
              <p className="text-sm text-[#777] leading-relaxed max-w-xs">
                {cfg.client.sector} · {cfg.client.location}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-[10px] tracking-[0.24em] text-[#c4a96a] font-mono uppercase mb-2">Contacto</div>
              <div className="flex items-center gap-2 text-sm text-[#D8D1C7]"><Phone size={13} className="text-[#c4a96a]" /> {cfg.client.phone}</div>
              <div className="flex items-center gap-2 text-sm text-[#D8D1C7]"><Mail size={13} className="text-[#c4a96a]" /> {cfg.client.email}</div>
              <div className="flex items-center gap-2 text-sm text-[#D8D1C7]"><MapPin size={13} className="text-[#c4a96a]" /> {cfg.client.location}</div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-[10px] tracking-[0.24em] text-[#c4a96a] font-mono uppercase mb-2">Activos Embassy Levante</div>
              <a href={cfg.visualExperience.standaloneUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#D8D1C7] hover:text-[#c4a96a] transition-colors flex items-center gap-2"><ExternalLink size={12} /> Experiencia Visual</a>
              <a href="/embassy-levante" className="text-sm text-[#D8D1C7] hover:text-[#c4a96a] transition-colors flex items-center gap-2"><ExternalLink size={12} /> Landing Comercial</a>
              <a href={BANNER_PACK_URL} className="text-sm text-[#D8D1C7] hover:text-[#c4a96a] transition-colors flex items-center gap-2"><ExternalLink size={12} /> Pack de Banners</a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-4">
            <span className="text-xs text-[#555]">Preview conceptual · Embassy Levante · {cfg.client.location} · Immersphere Pro 2026</span>
            <span className="text-xs text-[#555]">Activos pendientes de validación comercial por parte de Embassy Levante</span>
          </div>
        </footer>
      </main>
    </>
  );
};
