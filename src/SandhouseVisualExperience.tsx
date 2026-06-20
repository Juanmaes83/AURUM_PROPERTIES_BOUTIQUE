import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Eye, Smartphone, Share2, TrendingUp, MessageCircle, Phone } from 'lucide-react';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { sandhouseDemo } from './data/clientDemos/sandhouse';

const cfg = sandhouseDemo;

const benefits = [
  {
    icon: Eye,
    title: 'Primera impresión',
    body: 'El comprador ve la propiedad con movimiento, contexto y claridad antes de pedir más información. No es un listado, es una experiencia.',
  },
  {
    icon: Smartphone,
    title: 'Recorrido visual',
    body: 'La pieza muestra lo que importa: el espacio, la luz, la ubicación, el estilo de vida. Todo en los primeros segundos en pantalla de móvil.',
  },
  {
    icon: Share2,
    title: 'Lista para compartir',
    body: 'Se envía por WhatsApp, se incrusta en la web de Sandhouse o se pone en campaña. Un activo, tres usos distintos.',
  },
  {
    icon: TrendingUp,
    title: 'Consultas más cualificadas',
    body: 'El comprador que llega ya ha visto la propiedad. Llama con menos dudas, visita con más interés y decide antes.',
  },
];

const useCases = [
  { label: 'WhatsApp', desc: 'Enlace limpio que se puede enviar al comprador en cualquier momento del ciclo comercial.' },
  { label: 'Web de Sandhouse', desc: 'Embed directo en la ficha de la propiedad o en la página de inicio para captar atención.' },
  { label: 'Campañas digitales', desc: 'CTA visual de alto impacto en Instagram, Facebook o Google Display para Torrevieja y alrededores.' },
  { label: 'Escaparate', desc: 'QR imprimible para el escaparate de la oficina de C/ Lanzarote 21 que lleva al comprador a la experiencia.' },
];

export const SandhouseVisualExperience = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <title>Experiencia Visual · Sandhouse Inmobiliaria · Immersphere</title>
        <meta
          name="description"
          content="Experiencia visual interactiva personalizada para Sandhouse Inmobiliaria. Convierte cada propiedad en una primera visita memorable."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <GridOverlay />
      <CustomCursor />

      <main className="bg-[#0B0B0C] text-[#F7F7F7]">

        {/* ─── HERO ─── */}
        <section className="relative min-h-[80vh] overflow-hidden px-6 py-16 md:px-12 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0c08] to-[#0B0B0C]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 60% 60% at 80% 40%, rgba(196,169,106,0.07) 0%, transparent 65%)',
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-3 border border-[#c4a96a]/30 bg-black/40 px-4 py-2 backdrop-blur-sm mb-8">
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#c4a96a] font-mono">
                  SANDHOUSE INMOBILIARIA · EXPERIENCIA VISUAL DE PROPIEDAD
                </span>
              </div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] max-w-3xl">
                Convierte cada propiedad en una primera visita memorable.
              </h1>
              <p className="mt-8 max-w-xl text-lg md:text-xl text-[#b0a390] leading-relaxed">
                Una experiencia visual pensada para que el comprador entienda, recuerde y quiera visitar antes de
                hacer la llamada. Torrevieja y la Costa Levantina, con la calidad de presentación que el
                comprador actual espera.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={cfg.highIntentContact.primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#1ebe5a] transition-colors"
                >
                  <MessageCircle size={18} strokeWidth={2.2} />
                  Solicitar experiencia para mi propiedad
                </a>
                <a
                  href={cfg.highIntentContact.secondaryHref}
                  className="inline-flex items-center gap-3 border border-[#c4a96a] text-[#F7F7F7] px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:bg-[#c4a96a] hover:text-black transition-colors"
                >
                  <Phone size={16} strokeWidth={2.2} />
                  {cfg.salesContact.visiblePhone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ─── LIVE PREVIEW ─── */}
        <section className="py-24 md:py-32 px-6 md:px-12 bg-[#0e0c0a]">
          <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                PIEZA PERSONALIZADA · SANDHOUSE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl leading-tight mt-4">
                Un primer impacto que el comprador no olvida.
              </h2>
              <p className="mt-6 text-base md:text-lg text-[#cfcfcf] leading-relaxed">
                La experiencia convierte una propiedad de Sandhouse en un activo visual dinámico: imagen con
                movimiento, claim, CTA y contacto directo. Lista para enviar en segundos.
              </p>
              <p className="mt-4 text-sm text-[#888] leading-relaxed">
                Pensada para compradores que deciden en Torrevieja y la Costa Levantina antes de cruzar la puerta.
                La experiencia visual reduce fricción y acelera la primera consulta.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {cfg.visualExperience.chips.map((c) => (
                  <span
                    key={c}
                    className="text-[10px] tracking-[0.18em] uppercase border border-[#c4a96a]/40 text-[#c4a96a] px-3 py-1.5 font-mono"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative border border-[#c4a96a]/25 bg-[#15120e] overflow-hidden shadow-2xl"
              style={{ aspectRatio: '9/16', maxWidth: 380, margin: '0 auto' }}
            >
              <iframe
                src={cfg.visualExperience.embedUrl}
                title="Experiencia Visual · Sandhouse Inmobiliaria"
                loading="lazy"
                allow="autoplay; fullscreen"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                style={{ backgroundColor: '#080706' }}
              />
            </motion.div>
          </div>
        </section>

        {/* ─── BENEFITS ─── */}
        <section className="py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                POR QUÉ FUNCIONA
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-12 max-w-2xl">
                Cuatro momentos clave del proceso de compra.
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-white/8 bg-white/[0.02] p-6"
                >
                  <b.icon size={22} className="text-[#c4a96a] mb-4" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg mb-3">{b.title}</h3>
                  <p className="text-sm text-[#8a8078] leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── USE CASES ─── */}
        <section className="bg-[#0e0c0a] py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
                DÓNDE SE USA
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4">
                Un activo, cuatro canales de impacto.
              </h2>
              <p className="mt-6 text-[#8a8078] leading-relaxed">
                La misma experiencia visual puede activarse en todos los canales que Sandhouse usa hoy para
                captar compradores en Torrevieja y la Costa Levantina.
              </p>
            </div>
            <div className="space-y-3">
              {useCases.map((u) => (
                <div key={u.label} className="border border-white/8 bg-white/[0.02] px-6 py-5">
                  <p className="text-sm font-semibold text-[#c4a96a] mb-1">{u.label}</p>
                  <p className="text-sm text-[#8a8078] leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-[#0B0B0C] via-[#1A140A] to-[#0F0F10]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#c4a96a]/12 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#c4a96a]/8 blur-3xl" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-3xl mx-auto text-center"
          >
            <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">
              SIGUIENTE PASO
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-5">
              Elegir una propiedad piloto y medir la respuesta.
            </h2>
            <p className="mt-6 text-[#8a8078] leading-relaxed max-w-xl mx-auto">
              La propuesta más prudente es empezar con una propiedad concreta de Sandhouse, crear la experiencia
              visual y comprobar si mejora la calidad de las consultas recibidas.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={cfg.highIntentContact.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-black px-8 py-5 text-sm font-bold tracking-[0.12em] uppercase hover:bg-[#1ebe5a] transition-colors shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={20} strokeWidth={2.2} />
                Solicitar revisión de experiencia visual
              </a>
              <a
                href={cfg.highIntentContact.secondaryHref}
                className="inline-flex items-center gap-3 border border-[#c4a96a] text-[#F7F7F7] px-8 py-5 text-sm font-semibold tracking-[0.12em] uppercase hover:bg-[#c4a96a] hover:text-black transition-colors"
              >
                <Phone size={18} strokeWidth={2.2} />
                {cfg.salesContact.visiblePhone}
              </a>
            </div>
            <p className="mt-8 text-xs text-[#555]">
              Propuesta conceptual. Revision y validacion final por Sandhouse Inmobiliaria.
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
};
