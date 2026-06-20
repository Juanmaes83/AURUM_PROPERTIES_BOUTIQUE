import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CurrentWebsiteComparisonSection } from './components/clientDemo/CurrentWebsiteComparisonSection';
import { VisualExperienceBannerSection } from './components/clientDemo/VisualExperienceBannerSection';
import { ImmersphereServicesSection } from './components/clientDemo/ImmersphereServicesSection';
import { HighIntentContactSection } from './components/clientDemo/HighIntentContactSection';
import { embassyLevanteDemo } from './data/clientDemos/embassyLevante';

const cfg = embassyLevanteDemo;
const waHref = cfg.highIntentContact.primaryHref;
const phoneHref = cfg.highIntentContact.secondaryHref;

const fourHooks = [
  {
    num: '01',
    label: 'Experiencia Visual de Propiedad',
    desc: 'Pieza animada con la propiedad, CTA y contacto directo. Lista para enviar por WhatsApp o usar como argumento visual ante el propietario.',
    href: '/visual-experience/embassy-levante',
    tag: 'Ver pieza',
  },
  {
    num: '02',
    label: 'Landing Comercial Personalizada',
    desc: 'Esta página: diagnóstico, comparativa, experiencia visual integrada y contacto. Para enviar a decisores y propietarios.',
    href: '/embassy-levante',
    tag: 'Estás aquí',
  },
  {
    num: '03',
    label: 'Web Desarrollada Completa',
    desc: 'Propuesta de presencia digital completa: narrativa de marca, zonas, servicios y captación de propietarios en Torrevieja.',
    href: '/embassy-levante-web-completa',
    tag: 'Ver web',
  },
  {
    num: '04',
    label: 'Pack de Banners Personalizados',
    desc: 'Formatos vertical 9:16 y horizontal 16:9 con claim y CTA. Para stories, WhatsApp y campaña de captación digital.',
    href: '/banners/embassy-levante',
    tag: 'Ver banners',
  },
];

const valueProps = [
  { label: 'Argumento visual para propietarios', body: 'Embassy Levante puede mostrar al propietario exactamente cómo se presentará su vivienda antes de firmar el mandato. Menos tiempo de convicción, más cierres.' },
  { label: 'Captación diferenciada', body: 'La presentación visual eleva la percepción de la agencia y diferencia a Embassy Levante de la competencia local en Torrevieja.' },
  { label: 'Activos reutilizables por propiedad', body: 'La misma experiencia se puede enviar por WhatsApp, poner en web, usar en campaña y compartir en redes para cada propiedad en cartera.' },
  { label: 'Primera impresión decisiva', body: 'En Torrevieja, el propietario elige la agencia que más le convence. La que impacta visualmente primero, capta primero.' },
];

export const EmbassyLevanteLanding = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Embassy Levante · Propuesta Visual · Immersphere</title>
        <meta
          name="description"
          content="Propuesta visual personalizada para Embassy Levante: experiencia interactiva, landing comercial, web completa y banners para Torrevieja y la Costa Blanca."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <GridOverlay />
      <CustomCursor />

      <main className="bg-[#0B0B0C] text-[#F7F7F7]">

        {/* ─── HERO ─── */}
        <section className="relative min-h-screen overflow-hidden px-6 py-10 md:px-12 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0a07] to-[#0B0B0C]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 70% 50% at 20% 60%, rgba(196,169,106,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto w-full grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-3 border border-[#c4a96a]/35 bg-black/40 px-4 py-2 backdrop-blur-sm mb-8">
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#c4a96a] font-mono">
                  IMMERSPHERE · PROPUESTA COMERCIAL
                </span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
                {cfg.hero.headline}
              </h1>

              <p className="mt-8 max-w-xl text-lg md:text-xl text-[#b0a390] leading-relaxed">
                {cfg.hero.subheadline}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#visual-experience"
                  className="bg-[#c4a96a] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors"
                >
                  {cfg.hero.primaryCta}
                </a>
                <a
                  href="#comparison"
                  className="border border-white/25 px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#c4a96a] transition-colors"
                >
                  {cfg.hero.secondaryCta}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/50 border border-white/10 p-6 md:p-8 backdrop-blur-md"
            >
              <div className="text-[10px] tracking-[0.28em] text-[#c4a96a] font-mono uppercase">
                Diagnóstico CRM
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 pb-6 border-b border-white/8">
                <div>
                  <div className="text-4xl font-serif">{cfg.audit.score}</div>
                  <div className="text-xs text-[#888] uppercase tracking-[0.18em] mt-1">Score</div>
                </div>
                <div>
                  <div className="text-4xl font-serif">{cfg.audit.priority}</div>
                  <div className="text-xs text-[#888] uppercase tracking-[0.18em] mt-1">Prioridad</div>
                </div>
              </div>
              <div className="mt-5 space-y-2">
                {cfg.audit.strengths.map((item) => (
                  <div key={item} className="border border-white/8 bg-white/[0.025] px-4 py-3 text-sm text-[#cfcfcf]">
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── COMPARISON ─── */}
        <CurrentWebsiteComparisonSection
          clientName={cfg.client.name}
          currentWebsiteUrl={cfg.client.website}
          eyebrow={cfg.comparison.eyebrow}
          title={cfg.comparison.title}
          body={cfg.comparison.body}
          bullets={cfg.comparison.bullets}
          primaryCta={cfg.comparison.primaryCta}
        />

        {/* ─── VISUAL EXPERIENCE ─── */}
        <VisualExperienceBannerSection
          clientName={cfg.client.name}
          clientLocation={cfg.client.location}
          whatsappHref={waHref}
          phoneHref={phoneHref}
          visiblePhone={cfg.salesContact.visiblePhone}
          embedUrl={cfg.visualExperience.embedUrl}
          standaloneUrl={cfg.visualExperience.standaloneUrl}
          chips={cfg.visualExperience.chips}
          eyebrow={cfg.visualExperience.eyebrow}
          title={cfg.visualExperience.title}
          body={cfg.visualExperience.body}
          supportBody={cfg.visualExperience.supportBody}
          primaryCta={cfg.visualExperience.primaryCta}
          secondaryCta={cfg.visualExperience.secondaryCta}
          pieceCta={cfg.visualExperience.pieceCta}
        />

        {/* ─── 4 GANCHOS ─── */}
        <section className="bg-[#F7F3EC] text-[#111] py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] tracking-[0.32em] text-[#8a6d3a] font-mono">
                4 PIEZAS COMERCIALES
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-4">
                Una propuesta completa, revisable antes de publicar nada.
              </h2>
              <p className="text-[#555] leading-relaxed max-w-2xl mb-12">
                Cada pieza tiene un objetivo comercial propio. Juntas forman un sistema visual que Embassy Levante
                puede usar en WhatsApp, web, campañas de captación y presentaciones con propietarios.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2">
              {fourHooks.map((h, i) => (
                <motion.a
                  key={h.num}
                  href={h.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group border border-black/10 bg-white p-7 hover:border-[#c4a96a] transition-all hover:shadow-lg block"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-mono text-[#8a6d3a]">{h.num}</span>
                    <span className="text-[10px] tracking-[0.18em] uppercase border border-[#c4a96a]/40 text-[#8a6d3a] px-3 py-1 font-mono">
                      {h.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug mb-3 group-hover:text-[#8a6d3a] transition-colors">
                    {h.label}
                  </h3>
                  <p className="text-sm text-[#666] leading-relaxed mb-4">{h.desc}</p>
                  <div className="flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase text-[#8a6d3a] font-semibold">
                    <ChevronRight size={14} strokeWidth={2.5} />
                    {h.tag}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VALUE PROPS ─── */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                QUÉ GANA EMBASSY LEVANTE
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4">
                Más captación. Más impacto visual. Más propietarios convencidos.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {valueProps.map((v) => (
                <div key={v.label} className="border border-white/8 bg-white/[0.03] p-6">
                  <h3 className="font-serif text-lg mb-2">{v.label}</h3>
                  <p className="text-sm text-[#8a8078] leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── IMMERSPHERE SERVICES ─── */}
        <ImmersphereServicesSection
          servicesUrl={cfg.immersphereServices.primaryHref}
          eyebrow={cfg.immersphereServices.eyebrow}
          title={cfg.immersphereServices.title}
          body={cfg.immersphereServices.body}
          secondary={cfg.immersphereServices.secondary}
          primaryCta={cfg.immersphereServices.primaryCta}
        />

        {/* ─── CONTACT ─── */}
        <section className="bg-[#0e0c0a] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono mb-6">
              DATOS DE CONTACTO CONFIRMADOS
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-[#b0a390]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                <span>{cfg.client.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                <span>{cfg.client.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                <a href={`mailto:${cfg.client.email}`} className="hover:text-[#c4a96a] transition-colors">
                  {cfg.client.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HIGH INTENT CONTACT ─── */}
        <HighIntentContactSection
          whatsappHref={waHref}
          phoneHref={phoneHref}
          visiblePhone={cfg.salesContact.visiblePhone}
          eyebrow={cfg.highIntentContact.eyebrow}
          title={cfg.highIntentContact.title}
          body={cfg.highIntentContact.body}
          primaryCta={cfg.highIntentContact.primaryCta}
          secondaryCta={cfg.highIntentContact.secondaryCta}
          microcopy={cfg.highIntentContact.microcopy}
        />
      </main>
    </>
  );
};
