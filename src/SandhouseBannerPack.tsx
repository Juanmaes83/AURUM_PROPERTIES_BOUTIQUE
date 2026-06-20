import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Monitor, Square } from 'lucide-react';

const CLAIMS = [
  'Tu hogar en Torrevieja',
  'Vivir la Costa Levantina empieza aqui',
  'Propiedades con una presentacion a la altura',
  'Encuentra tu hogar con Sandhouse',
];

const formats = [
  {
    id: 'vertical',
    icon: Smartphone,
    label: 'Banner Vertical',
    ratio: '9:16',
    spec: '1080 × 1920 px',
    uso: 'Stories, Reels, WhatsApp, Escaparate digital',
    href: '/banners/sandhouse-inmobiliaria/vertical',
    previewRatio: '9/16',
    previewMaxH: 420,
  },
  {
    id: 'horizontal',
    icon: Monitor,
    label: 'Banner Horizontal',
    ratio: '16:9',
    spec: '1920 × 1080 px',
    uso: 'Display, YouTube, Presentaciones, Web',
    href: '/banners/sandhouse-inmobiliaria/horizontal',
    previewRatio: '16/9',
    previewMaxH: 220,
  },
];

function BannerPreview({ id, ratio, label }: { id: string; ratio: string; label: string }) {
  const isVertical = id === 'vertical';
  return (
    <div
      className="relative overflow-hidden border border-[#c4a96a]/25 bg-[#0d0b09]"
      style={{ aspectRatio: ratio }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: isVertical
            ? 'linear-gradient(160deg, #0d0b09 0%, #1a1208 40%, #0d0b09 100%)'
            : 'linear-gradient(110deg, #0d0b09 0%, #1a1208 50%, #0d0b09 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(196,169,106,0.25) 0%, transparent 55%)',
        }}
      />

      {/* Top label */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 border-b border-[#c4a96a]/15">
        <span className="font-serif text-[#c4a96a] text-sm tracking-wide">Sandhouse</span>
        <span className="text-[8px] font-mono text-[#c4a96a]/60 tracking-[0.2em] uppercase">
          INMOBILIARIA · TORREVIEJA
        </span>
      </div>

      {/* Center content */}
      <div
        className={`absolute inset-0 flex flex-col justify-center px-6 ${isVertical ? 'pt-16 pb-20' : 'pt-10 pb-14'}`}
      >
        <p
          className="font-serif text-[#f5f0e8] leading-tight mb-3"
          style={{ fontSize: isVertical ? 'clamp(1.4rem, 5vw, 2.2rem)' : 'clamp(1rem, 3vw, 1.5rem)' }}
        >
          Tu hogar en Torrevieja y la Costa Levantina.
        </p>
        <p
          className="text-[#b0a390] leading-relaxed"
          style={{ fontSize: isVertical ? '0.8rem' : '0.7rem' }}
        >
          Agencia inmobiliaria en Torrevieja · Costa Blanca · Costa Levantina
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] font-mono text-[#c4a96a]/70 uppercase tracking-[0.18em]">Contactar</p>
            <p className="text-[10px] text-[#f5f0e8] font-semibold">+34 655 187 116</p>
          </div>
          <div className="bg-[#c4a96a] text-black text-[9px] font-bold tracking-[0.16em] uppercase px-3 py-2">
            Sandhouse.es
          </div>
        </div>
      </div>

      {/* Format tag */}
      <div className="absolute top-12 right-3 text-[8px] font-mono text-[#c4a96a]/50 tracking-[0.18em] uppercase rotate-90 origin-right">
        {ratio} · {label}
      </div>
    </div>
  );
}

export const SandhouseBannerPack = () => {
  return (
    <>
      <Helmet>
        <title>Pack de Banners · Sandhouse Inmobiliaria · Immersphere</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F7] font-[Inter,sans-serif]">

        {/* HEADER */}
        <div className="border-b border-[#c4a96a]/15 px-6 py-4 flex items-center justify-between">
          <div>
            <span className="font-serif text-[#c4a96a] text-lg">Sandhouse</span>
            <span className="ml-2 text-[10px] font-mono text-[#c4a96a]/50 tracking-[0.2em] uppercase">
              · Pack de Banners
            </span>
          </div>
          <a
            href="/sandhouse-inmobiliaria"
            className="text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.18em] uppercase hover:text-[#c4a96a] transition-colors"
          >
            ← Landing
          </a>
        </div>

        {/* HERO COPY */}
        <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-mono text-[#c4a96a] tracking-[0.28em] uppercase mb-4">
              SANDHOUSE INMOBILIARIA · CREATIVIDADES VISUALES
            </p>
            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6 max-w-2xl">
              Banners personalizados para Torrevieja y la Costa Levantina.
            </h1>
            <p className="text-[#8a8078] leading-relaxed max-w-xl">
              Formatos vertical 9:16 y horizontal 16:9 con claim, identidad Sandhouse y CTA de contacto directo.
              Listos para stories, display, WhatsApp y presentaciones.
            </p>
          </motion.div>
        </section>

        {/* CLAIMS */}
        <section className="bg-[#0e0c0a] px-6 md:px-12 py-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.24em] uppercase mb-6">
              CLAIMS DE CAMPAÑA
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {CLAIMS.map((c, i) => (
                <div
                  key={i}
                  className="border border-[#c4a96a]/20 bg-[#c4a96a]/5 px-5 py-4 flex items-center gap-3"
                >
                  <span className="text-[10px] font-mono text-[#c4a96a]/50">{String(i + 1).padStart(2, '0')}</span>
                  <p className="font-serif text-base text-[#f5f0e8]">{c}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BANNER PREVIEWS */}
        <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.24em] uppercase mb-10">
            PREVIEWS · COMPOSICIÓN EDITORIAL
          </p>
          <div className="grid gap-12 md:gap-16">
            {formats.map((f, i) => (
              <motion.div
                key={f.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <f.icon size={18} className="text-[#c4a96a]" strokeWidth={1.5} />
                    <div>
                      <h2 className="font-serif text-xl">{f.label}</h2>
                      <p className="text-xs text-[#8a8078] mt-0.5">
                        {f.ratio} · {f.spec}
                      </p>
                    </div>
                  </div>
                  <a
                    href={f.href}
                    className="flex items-center gap-1.5 text-[11px] font-mono text-[#c4a96a] border border-[#c4a96a]/30 px-4 py-2 hover:border-[#c4a96a] transition-colors tracking-[0.14em] uppercase"
                  >
                    <ExternalLink size={12} />
                    Ver completo
                  </a>
                </div>

                <div style={{ maxWidth: f.id === 'vertical' ? 260 : '100%' }}>
                  <BannerPreview id={f.id} ratio={f.previewRatio} label={f.label} />
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-[#635a50]">
                  <Square size={12} className="text-[#c4a96a]/40" />
                  <span className="font-mono">USO SUGERIDO:</span>
                  <span>{f.uso}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0e0c0a] px-6 md:px-12 py-16 text-center">
          <p className="text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.24em] uppercase mb-4">
            SIGUIENTE PASO
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Activos listos para campana.
          </h2>
          <p className="text-[#8a8078] max-w-md mx-auto mb-10 text-sm leading-relaxed">
            Una vez validados por Sandhouse Inmobiliaria, estos banners se adaptan a propiedades reales y se
            entregan listos para activar.
          </p>
          <a
            href="https://wa.me/34655187116?text=Hola%2C%20quiero%20ver%20el%20pack%20de%20banners%20de%20Sandhouse%20Inmobiliaria%20y%20c%C3%B3mo%20activarlo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#c4a96a] text-black px-8 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors"
          >
            Revisar pack de banners
          </a>
        </section>
      </div>
    </>
  );
};
