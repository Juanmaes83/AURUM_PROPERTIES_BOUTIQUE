import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Star, ChevronRight, ExternalLink, Check, ArrowRight, Users, Zap, BarChart3 } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CurrentWebsiteComparisonSection } from './components/clientDemo/CurrentWebsiteComparisonSection';
import { ImmersphereServicesSection } from './components/clientDemo/ImmersphereServicesSection';
import { HighIntentContactSection } from './components/clientDemo/HighIntentContactSection';
import { VisualExperienceBannerSection } from './components/clientDemo/VisualExperienceBannerSection';
import { costaInvestDemo } from './data/clientDemos/costaInvest';

const waHref = costaInvestDemo.highIntentContact.primaryHref;
const phoneHref = costaInvestDemo.highIntentContact.secondaryHref;

const BANNER_VERTICAL_URL =
  'https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/costa-invest/banner-pack/vertical/';
const BANNER_HORIZONTAL_URL =
  'https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/costa-invest/banner-pack/horizontal/';
const BANNER_PACK_URL =
  'https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/costa-invest/banner-pack/';

const services = [
  {
    num: '01',
    title: 'Experiencia Visual de Propiedad',
    body: 'Pieza animada personalizada para Costa Invest: galería de imágenes con movimiento, QR de contacto y CTA directo. Lista para enviar por WhatsApp o incrustar en web.',
    detail: 'Canvas 2D · QR · Embed',
  },
  {
    num: '02',
    title: 'Landing Comercial Personalizada',
    body: 'Página de propuesta adaptada al perfil de Costa Invest: diagnóstico, comparativa, experiencia visual integrada y contacto directo. Pensada para enviar a decisores.',
    detail: 'Web premium · Datos reales · Mobile-first',
  },
  {
    num: '03',
    title: 'Web Desarrollada Completa',
    body: 'Presencia digital de nivel superior con narrativa de marca, galería de propiedades, sección de captación de propietarios, tecnología y proceso completo.',
    detail: 'Storytelling · Galería · SEO · CTA múltiple',
  },
  {
    num: '04',
    title: 'Pack de Banners Personalizados',
    body: 'Formatos vertical 9:16 y horizontal 16:9 con las propiedades de Costa Invest. Para stories, WhatsApp, web, presentaciones y campaña multilingüe.',
    detail: '1080×1920 · 1920×1080 · QR incluido',
  },
];

const process = [
  { step: '01', title: 'Auditoría', body: 'Analizamos la presencia digital actual de Costa Invest: web, buscadores, redes y activos visuales. Identificamos la oportunidad real.' },
  { step: '02', title: 'Briefing', body: 'Elegimos la propiedad o campaña piloto. Recogemos los activos disponibles (fotos, vídeo, logo, copy) y definimos el mensaje clave.' },
  { step: '03', title: 'Generación', body: 'Creamos la experiencia visual, la landing y el pack de banners en 3-7 días. Cada pieza es revisada y validada antes de publicar.' },
  { step: '04', title: 'Publicación', body: 'Publicamos con URL limpia, embed disponible y QR. Entregamos todo listo para enviar por WhatsApp, incrustar en web o usar en campaña.' },
  { step: '05', title: 'Medición', body: 'Seguimos el rendimiento: clics, consultas generadas, calidad de leads. Ajustamos para maximizar la conversión de cada activo.' },
];

const markets = [
  { flag: '🇬🇧', label: 'Mercado británico', desc: 'Compradores UK que deciden desde móvil antes de viajar a Orihuela Costa.' },
  { flag: '🇳🇱', label: 'Mercado holandés', desc: 'Alta demanda de vivienda en primera línea de costa. Decisión remota frecuente.' },
  { flag: '🇧🇪', label: 'Mercado belga', desc: 'Perfil inversor con alto poder adquisitivo. Valora calidad visual y contacto directo.' },
  { flag: '🇩🇪', label: 'Mercado alemán', desc: 'Comprador exigente. La experiencia visual reduce objeciones antes de la primera llamada.' },
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

export const CostaInvestWebCompleta = () => {
  useSmoothScroll();
  const cfg = costaInvestDemo;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Costa Invest · Web Desarrollada Completa · Immersphere Pro</title>
        <meta
          name="description"
          content="Propuesta web completa para Costa Invest: experiencia visual de propiedad, galería premium, captación de propietarios y solución inmobiliaria internacional en Orihuela Costa."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <GridOverlay />
      <CustomCursor />

      {/* Private header */}
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 border-b border-[#A68B5B]/20 bg-black/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <img src={cfg.client.logo.url} alt="Costa Invest" className="h-7 w-auto bg-white px-2 py-0.5" />
          <span className="hidden sm:block text-[10px] tracking-[0.24em] uppercase text-[#A68B5B] font-mono">Web Desarrollada Completa</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#A68B5B]/60 font-mono hidden md:block">Preview privada · Immersphere Pro</span>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="text-[11px] font-bold tracking-[0.12em] uppercase bg-[#A68B5B] text-black px-4 py-2 hover:bg-[#bf9f6a] transition-colors">WhatsApp</a>
        </div>
      </div>

      {/* Navigation */}
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
            className="text-[10px] tracking-[0.18em] uppercase text-[#A68B5B]/70 hover:text-[#A68B5B] whitespace-nowrap transition-colors font-mono"
          >
            {label}
          </button>
        ))}
      </nav>

      <main className="bg-[#0B0B0C] text-[#F7F7F7] pt-[89px]">

        {/* ─── HERO ─── */}
        <section id="hero" className="relative min-h-screen overflow-hidden flex items-center">
          <img
            src="/costainvest/place-to-live.jpg"
            alt="Costa Invest · Playa Flamenca"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-3 border border-[#A68B5B]/40 bg-black/40 px-4 py-2 backdrop-blur-sm mb-8">
                <img src={cfg.client.logo.url} alt="Costa Invest" className="h-7 w-auto bg-white px-2 py-0.5" />
                <span className="text-[10px] tracking-[0.26em] uppercase text-[#A68B5B] font-mono">Web Desarrollada Completa</span>
              </div>

              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.92] max-w-3xl">
                Propiedades que se deciden antes de cruzar la frontera.
              </h1>

              <p className="mt-8 max-w-xl text-lg md:text-xl text-[#D8D1C7] leading-relaxed">
                Presencia digital de nivel internacional para Costa Invest en Playa Flamenca.
                Experiencia visual, galería premium, captación de propietarios y activos de campaña
                multilingüe.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {['Orihuela Costa', 'Buyer internacional', 'Multilingüe', 'QR · WhatsApp · Web'].map((chip) => (
                  <span key={chip} className="text-[10px] tracking-[0.16em] uppercase text-[#A68B5B] border border-[#A68B5B]/30 px-3 py-1.5 font-mono">{chip}</span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollTo('visual-experience')}
                  className="bg-[#A68B5B] text-black px-8 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#bf9f6a] transition-colors"
                >
                  Ver Experiencia Visual
                </button>
                <button
                  onClick={() => scrollTo('diagnosis')}
                  className="border border-white/25 px-8 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#A68B5B] transition-colors"
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
              <div className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase mb-6">Diagnóstico Immersphere · CRM</div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-5xl font-serif text-[#F7F7F7]">{cfg.audit.score}</div>
                  <div className="text-xs text-[#999] uppercase tracking-[0.2em] mt-1">Score CRM</div>
                </div>
                <div>
                  <div className="text-5xl font-serif text-[#A68B5B]">{cfg.audit.priority}</div>
                  <div className="text-xs text-[#999] uppercase tracking-[0.2em] mt-1">Prioridad</div>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                {cfg.audit.strengths.map((s) => (
                  <div key={s} className="flex items-start gap-3 border border-white/8 bg-white/[0.03] px-4 py-3">
                    <Check size={14} className="text-[#A68B5B] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#D8D1C7]">{s}</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] tracking-[0.18em] text-[#A68B5B]/60 font-mono uppercase">
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
            <span className="text-[10px] tracking-[0.24em] text-[#A68B5B]/60 font-mono uppercase">Explorar</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#A68B5B]/40 to-transparent" />
          </motion.div>
        </section>

        {/* ─── DIAGNÓSTICO ─── */}
        <section id="diagnosis" className="py-28 md:py-36 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <span className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">
                Auditoría · Score {cfg.audit.score}/100 · Prioridad {cfg.audit.priority}
              </span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl">
                Costa Invest tiene equipo, producto y volumen. Falta el activo visual que los separa de la competencia.
              </h2>
            </SectionReveal>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SectionReveal className="lg:col-span-2">
                <div className="border border-white/10 bg-white/[0.02] p-8 h-full">
                  <div className="text-[10px] tracking-[0.28em] text-[#A68B5B] font-mono uppercase mb-6">Fortalezas detectadas</div>
                  <div className="space-y-3">
                    {cfg.audit.strengths.map((s, i) => (
                      <div key={s} className="flex items-start gap-4">
                        <span className="text-xs font-mono text-[#A68B5B] shrink-0 mt-0.5">0{i + 1}</span>
                        <span className="text-[#D8D1C7] leading-relaxed">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="border border-[#A68B5B]/20 bg-[#A68B5B]/[0.04] p-8 h-full">
                  <div className="text-[10px] tracking-[0.28em] text-[#A68B5B] font-mono uppercase mb-6">Oportunidades</div>
                  <div className="space-y-4">
                    {cfg.audit.opportunities.map((o) => (
                      <div key={o} className="flex items-start gap-3">
                        <Zap size={14} className="text-[#A68B5B] mt-1 shrink-0" />
                        <span className="text-sm text-[#D8D1C7] leading-relaxed">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            <SectionReveal className="mt-12">
              <div className="border border-white/10 bg-white/[0.02] p-8">
                <div className="text-[10px] tracking-[0.28em] text-[#A68B5B] font-mono uppercase mb-6">Situación actual</div>
                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    { icon: Globe, label: 'Web', val: 'costainvest.com', desc: 'Portal activo con propiedades y buscador inmobiliario' },
                    { icon: Phone, label: 'Contacto', val: '+34 966 760 422', desc: 'Equipo comercial multilingüe accesible por teléfono y WA' },
                    { icon: Users, label: 'Equipo', val: 'Justyna Janus', desc: 'Manager visible con equipo de agentes en Playa Flamenca' },
                  ].map(({ icon: Icon, label, val, desc }) => (
                    <div key={label} className="flex flex-col gap-2">
                      <Icon size={20} className="text-[#A68B5B]" />
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

        {/* ─── COMPARATIVA ANTES / DESPUÉS ─── */}
        <section className="py-24 px-6 md:px-12 bg-[#0F0E0C]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-14 text-center">
              <span className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">Antes / Después</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl max-w-3xl mx-auto leading-tight">
                De catálogo inmobiliario a experiencia de decisión internacional.
              </h2>
            </SectionReveal>

            <div className="grid gap-6 md:grid-cols-2">
              <SectionReveal>
                <div className="border border-white/10 bg-black/40 p-8 h-full">
                  <div className="text-[10px] tracking-[0.28em] text-[#999] font-mono uppercase mb-6">Web actual</div>
                  <div className="space-y-4">
                    {[
                      'Ficha de propiedad con fotos estáticas',
                      'Contacto por formulario o teléfono',
                      'Buscador inmobiliario estándar',
                      'Sin activos visuales para WhatsApp o campaña',
                      'Misma experiencia que la competencia local',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-4 h-4 border border-white/20 shrink-0 mt-0.5" />
                        <span className="text-sm text-[#888]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href={cfg.client.website} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs text-[#A68B5B] border border-[#A68B5B]/30 px-4 py-2 hover:border-[#A68B5B] transition-colors">
                    <ExternalLink size={12} /> Ver web actual
                  </a>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="border border-[#A68B5B]/30 bg-[#A68B5B]/[0.04] p-8 h-full">
                  <div className="text-[10px] tracking-[0.28em] text-[#A68B5B] font-mono uppercase mb-6">Propuesta Immersphere</div>
                  <div className="space-y-4">
                    {[
                      'Experiencia visual animada con galería de propiedades',
                      'QR de contacto directo desde móvil internacional',
                      'Landing personalizada con diagnóstico y comparativa',
                      'Banners verticales y horizontales para campaña multilingüe',
                      'Web premium con captación de propietarios integrada',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <Check size={16} className="text-[#A68B5B] shrink-0 mt-0.5" />
                        <span className="text-sm text-[#D8D1C7]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => scrollTo('visual-experience')}
                    className="mt-8 inline-flex items-center gap-2 text-xs text-black bg-[#A68B5B] px-4 py-2 hover:bg-[#bf9f6a] transition-colors font-bold tracking-[0.12em] uppercase"
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

        {/* ─── REUSABLE: EXPERIENCIA VISUAL DE PROPIEDAD ─── */}
        <VisualExperienceBannerSection
          clientName={cfg.client.name}
          clientLocation={cfg.client.location}
          clientLogo={cfg.client.logo.url}
          whatsappHref={waHref}
          phoneHref={phoneHref}
          visiblePhone={cfg.client.phone}
          embedUrl={cfg.visualExperience.embedUrl}
          standaloneUrl={cfg.visualExperience.standaloneUrl}
          horizontalUrl={BANNER_HORIZONTAL_URL}
          verticalUrl={BANNER_VERTICAL_URL}
          previewImage={cfg.visualExperience.previewImage}
          previewSecondaryImage={cfg.visualExperience.previewSecondaryImage}
          previewTertiaryImage={cfg.visualExperience.previewTertiaryImage}
          chips={cfg.visualExperience.chips}
          eyebrow={cfg.visualExperience.eyebrow}
          title={cfg.visualExperience.title}
          body={cfg.visualExperience.body}
          supportBody={cfg.visualExperience.supportBody}
          primaryCta={cfg.visualExperience.primaryCta}
          secondaryCta={cfg.visualExperience.secondaryCta}
          pieceCta={cfg.visualExperience.pieceCta}
        />

        {/* ─── GALERÍA DE PROPIEDADES ─── */}
        <section id="propiedades" className="py-28 md:py-36 px-6 md:px-12 bg-[#0F0E0C]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-14">
              <span className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">Propiedades destacadas</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                Orihuela Costa. Primera línea. Compradores internacionales.
              </h2>
              <p className="mt-6 text-[#888] leading-relaxed max-w-2xl">
                Cada propiedad puede convertirse en una pieza visual que el comprador recibe por WhatsApp
                y decide antes de hacer el viaje. Esta galería muestra el potencial visual del portfolio de Costa Invest.
              </p>
            </SectionReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                { src: cfg.assets.images[0], label: 'Propiedad destacada', sub: 'Orihuela Costa · Playa Flamenca' },
                { src: cfg.assets.images[1], label: 'Villa premium', sub: 'Costa Blanca Sur · Vistas al mar' },
                { src: cfg.assets.images[2], label: 'Apartamento de inversión', sub: 'Playa Flamenca · Retorno garantizado' },
              ].map(({ src, label, sub }) => (
                <SectionReveal key={label}>
                  <div className="group relative overflow-hidden border border-white/10">
                    <img
                      src={src}
                      alt={label}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-[10px] tracking-[0.2em] text-[#A68B5B] font-mono uppercase mb-1">{sub}</div>
                      <div className="font-serif text-lg text-white">{label}</div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal className="mt-10 flex flex-wrap gap-4">
              <a href={cfg.visualExperience.standaloneUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#A68B5B] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#bf9f6a] transition-colors">
                Ver Experiencia Visual <ExternalLink size={14} />
              </a>
              <a href={BANNER_PACK_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#A68B5B] transition-colors">
                Ver Pack de Banners <ChevronRight size={14} />
              </a>
            </SectionReveal>
          </div>
        </section>

        {/* ─── MERCADOS INTERNACIONALES ─── */}
        <section id="mercados" className="py-28 md:py-36 px-6 md:px-12 bg-[#F7F3EC] text-[#111]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-14">
              <span className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">Mercado internacional</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl text-[#111]">
                El comprador de Playa Flamenca decide desde otro país.
              </h2>
              <p className="mt-6 text-[#555] leading-relaxed max-w-2xl">
                Costa Invest ya tiene el equipo multilingüe y el producto. La experiencia visual reduce la fricción
                del comprador remoto: en lugar de esperar al viaje, ya ha visto la propiedad, ha escaneado el QR
                y ha hablado con el agente antes de aterrizar.
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
                  { icon: BarChart3, val: '94/100', label: 'Score CRM', desc: 'Prioridad A — máximo potencial de conversión para activo visual piloto' },
                  { icon: Zap, val: '3–7 días', label: 'Tiempo de entrega', desc: 'Del briefing al activo publicado con URL limpia, QR y embed disponible' },
                  { icon: Star, val: '4 activos', label: 'Pack completo', desc: 'Experiencia Visual · Landing · Web Completa · Pack de Banners personalizados' },
                ].map(({ icon: Icon, val, label, desc }) => (
                  <div key={label} className="flex flex-col gap-3">
                    <Icon size={22} className="text-[#A68B5B]" />
                    <div className="text-4xl font-serif text-[#111]">{val}</div>
                    <div className="text-xs tracking-[0.18em] uppercase font-mono text-[#A68B5B]">{label}</div>
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
              <span className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">Sistema Immersive Sales</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                Cuatro activos que multiplican la conversión de Costa Invest.
              </h2>
            </SectionReveal>

            <div className="grid gap-5 md:grid-cols-2">
              {services.map(({ num, title, body, detail }) => (
                <SectionReveal key={num}>
                  <div className="border border-white/10 bg-white/[0.02] p-8 h-full flex flex-col gap-5">
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-xs font-mono text-[#A68B5B]">{num}</span>
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
              <span className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">Cómo funciona</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                De la propiedad piloto al activo publicado en una semana.
              </h2>
            </SectionReveal>

            <div className="grid gap-4 md:grid-cols-5">
              {process.map(({ step, title, body }) => (
                <SectionReveal key={step}>
                  <div className="border border-white/10 bg-white/[0.02] p-6 h-full flex flex-col gap-4">
                    <span className="text-3xl font-serif text-[#A68B5B]/40">{step}</span>
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
              <span className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">Captación de propietarios</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">
                Una propiedad bien presentada atrae propietarios que quieren vender rápido.
              </h2>
              <p className="mt-6 text-[#888] leading-relaxed">
                La experiencia visual de Costa Invest no solo acelera la venta al comprador.
                También comunica a los propietarios que tienen delante una agencia que presenta
                sus inmuebles de forma diferente al resto.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Demuestra el nivel visual antes de firmar la exclusiva',
                  'El propietario ve el activo con su propiedad antes de decidir',
                  'QR para compartir con familia y referidos antes de la visita',
                  'Diferenciación real frente a agencias con catálogo estático',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check size={14} className="text-[#A68B5B] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#D8D1C7]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href={waHref} target="_blank" rel="noopener noreferrer"
                  className="bg-[#A68B5B] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#bf9f6a] transition-colors">
                  Pedir Demo por WhatsApp
                </a>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="relative">
                <img
                  src="/costainvest/lifestyle-1.jpg"
                  alt="Costa Invest · Lifestyle"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-3">
                    <img src={cfg.client.logo.url} alt="Costa Invest" className="h-6 w-auto bg-white px-2 py-0.5" />
                    <span className="text-xs text-[#A68B5B] font-mono tracking-[0.16em] uppercase">Playa Flamenca · Orihuela Costa</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ─── PACK DE BANNERS ─── */}
        <section className="py-24 px-6 md:px-12 bg-[#0F0E0C]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal className="mb-10">
              <span className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">Pack de Banners Personalizados</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                Piezas de campaña con las propiedades de Costa Invest.
              </h2>
            </SectionReveal>

            <div className="grid gap-5 md:grid-cols-3">
              <SectionReveal>
                <div className="border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-[#A68B5B] uppercase tracking-[0.2em]">Pack Index</span>
                  <h3 className="font-serif text-xl">Índice del Pack</h3>
                  <p className="text-sm text-[#777] leading-relaxed flex-1">Página principal con ambos formatos, datos de cliente y acceso directo.</p>
                  <a href={BANNER_PACK_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#A68B5B] text-black px-5 py-3 text-xs font-bold tracking-[0.12em] uppercase hover:bg-[#bf9f6a] transition-colors">
                    Ver Pack <ExternalLink size={12} />
                  </a>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-[#A68B5B] uppercase tracking-[0.2em]">Vertical · 9:16</span>
                  <h3 className="font-serif text-xl">Banner Vertical</h3>
                  <p className="text-sm text-[#777] leading-relaxed flex-1">1080×1920 px. Para stories, WhatsApp, Reel y mupi digital.</p>
                  <a href={BANNER_VERTICAL_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#A68B5B]/40 text-[#A68B5B] px-5 py-3 text-xs font-bold tracking-[0.12em] uppercase hover:border-[#A68B5B] transition-colors">
                    Ver Vertical <ExternalLink size={12} />
                  </a>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="border border-white/10 bg-white/[0.02] p-8 flex flex-col gap-5">
                  <span className="text-[10px] font-mono text-[#A68B5B] uppercase tracking-[0.2em]">Horizontal · 16:9</span>
                  <h3 className="font-serif text-xl">Banner Horizontal</h3>
                  <p className="text-sm text-[#777] leading-relaxed flex-1">1920×1080 px. Para web, header, display y presentación comercial.</p>
                  <a href={BANNER_HORIZONTAL_URL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-[#A68B5B]/40 text-[#A68B5B] px-5 py-3 text-xs font-bold tracking-[0.12em] uppercase hover:border-[#A68B5B] transition-colors">
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
              <img src={cfg.client.logo.url} alt="Costa Invest" className="h-8 w-auto bg-white px-2 py-1 self-start" />
              <p className="text-sm text-[#777] leading-relaxed max-w-xs">
                {cfg.client.sector} · {cfg.client.location}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-[10px] tracking-[0.24em] text-[#A68B5B] font-mono uppercase mb-2">Contacto</div>
              <div className="flex items-center gap-2 text-sm text-[#D8D1C7]"><Phone size={13} className="text-[#A68B5B]" /> {cfg.client.phone}</div>
              <div className="flex items-center gap-2 text-sm text-[#D8D1C7]"><Mail size={13} className="text-[#A68B5B]" /> {cfg.client.email}</div>
              <div className="flex items-center gap-2 text-sm text-[#D8D1C7]"><MapPin size={13} className="text-[#A68B5B]" /> {cfg.client.location}</div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-[10px] tracking-[0.24em] text-[#A68B5B] font-mono uppercase mb-2">Activos Costa Invest</div>
              <a href={cfg.visualExperience.standaloneUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#D8D1C7] hover:text-[#A68B5B] transition-colors flex items-center gap-2"><ExternalLink size={12} /> Experiencia Visual</a>
              <a href="https://aurum-properties-boutique.vercel.app/costa-invest" target="_blank" rel="noopener noreferrer" className="text-sm text-[#D8D1C7] hover:text-[#A68B5B] transition-colors flex items-center gap-2"><ExternalLink size={12} /> Landing Comercial</a>
              <a href={BANNER_PACK_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-[#D8D1C7] hover:text-[#A68B5B] transition-colors flex items-center gap-2"><ExternalLink size={12} /> Pack de Banners</a>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-between gap-4">
            <span className="text-xs text-[#555]">Preview conceptual · Costa Invest · {cfg.client.location} · Immersphere Pro 2026</span>
            <span className="text-xs text-[#555]">Activos pendientes de validación comercial por parte de Costa Invest</span>
          </div>
        </footer>
      </main>
    </>
  );
};
