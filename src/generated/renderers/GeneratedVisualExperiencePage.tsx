import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink, Image as ImageIcon } from 'lucide-react';
import type { VisualExperienceSpec, QualityReport } from '../types/fourHookSpecs';
import { QualityReportSection } from './GeneratedLandingPage';

interface Props {
  spec: VisualExperienceSpec;
  qualityReport?: QualityReport;
  slug: string;
}

export const GeneratedVisualExperiencePage = ({ spec, qualityReport, slug }: Props) => {
  const [iframeFailed, setIframeFailed] = useState(false);
  const showEmbed = !!spec.embedUrl && !iframeFailed;
  const waHref = spec.CTA.href;
  const accentColor = spec.rubikConfigSeed.palette.primary || '#c4a96a';

  return (
    <>
      <Helmet>
        <title>{spec.hookName} · Spec Preview · Immersphere</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Spec preview badge */}
      <div className="fixed top-3 right-3 z-50 bg-black/80 border border-[#c4a96a]/40 px-3 py-1.5 backdrop-blur-sm">
        <span className="text-[9px] tracking-[0.24em] uppercase text-[#c4a96a] font-mono">Spec preview · Revisable</span>
      </div>

      <main className="bg-[#0B0B0C] text-[#F7F7F7] min-h-screen">

        {/* HERO */}
        <section className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `radial-gradient(ellipse 60% 40% at 30% 40%, ${accentColor}12 0%, transparent 65%)` }}
          />
          <div className="relative z-10 max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1fr_1fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[10px] tracking-[0.32em] font-mono" style={{ color: accentColor }}>
                EXPERIENCIA VISUAL DE PROPIEDAD
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] mt-5 max-w-2xl">
                {spec.firstImpression.headline}
              </h1>
              <p className="mt-6 text-lg text-[#b0a390] leading-relaxed max-w-xl">
                {spec.narrative}
              </p>
              <p className="mt-3 text-sm text-[#777] leading-relaxed max-w-xl">
                {spec.firstImpression.subheadline}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#1ebe5a] transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={2.2} />
                  {spec.CTA.label}
                </a>
              </div>

              {spec.routes.primary && (
                <div className="mt-5">
                  <a
                    href={spec.routes.primary}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase border-b pb-1 font-semibold transition-colors"
                    style={{ color: accentColor, borderColor: `${accentColor}60` }}
                  >
                    Ver ruta canónica AURUM
                    <ExternalLink size={12} strokeWidth={2.2} />
                  </a>
                </div>
              )}
            </motion.div>

            {/* Embed / fallback preview */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative border overflow-hidden shadow-2xl"
              style={{ aspectRatio: '9/16', maxHeight: 520, borderColor: `${accentColor}40`, background: '#0d0b09' }}
            >
              {showEmbed ? (
                <>
                  <iframe
                    src={spec.embedUrl}
                    title={spec.hookName}
                    loading="lazy"
                    allow="autoplay; fullscreen"
                    onError={() => setIframeFailed(true)}
                    className="absolute inset-0 w-full h-full border-0"
                    style={{ backgroundColor: '#080706' }}
                  />
                  <a
                    href={spec.rubikStandaloneUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 bg-black/65 hover:bg-black/85 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-2 backdrop-blur-sm transition-colors"
                  >
                    <ExternalLink size={11} strokeWidth={2.4} />
                    Rubik (interno)
                  </a>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                  <ImageIcon size={48} className="opacity-20" style={{ color: accentColor }} strokeWidth={1.5} />
                  <p className="text-xs text-[#777] font-mono leading-relaxed">{spec.fallbackPlan.action}</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* JOURNEY BLOCKS */}
        <section className="bg-[#0d0b09] px-6 md:px-12 py-20">
          <div className="max-w-4xl mx-auto">
            <span className="text-[10px] tracking-[0.32em] font-mono mb-8 block" style={{ color: accentColor }}>
              RECORRIDO DEL COMPRADOR
            </span>
            <div className="grid gap-8 md:grid-cols-3">
              {spec.journeyBlocks.map((block) => (
                <motion.div
                  key={block.moment}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: (block.moment - 1) * 0.1 }}
                  className="border border-white/8 bg-white/[0.025] p-6"
                >
                  <div className="text-3xl font-serif mb-3" style={{ color: accentColor }}>
                    {String(block.moment).padStart(2, '0')}
                  </div>
                  <h3 className="font-serif text-lg mb-2">{block.title}</h3>
                  <p className="text-sm text-[#999] leading-relaxed mb-3">{block.description}</p>
                  <p className="text-[11px] font-mono text-[#666]">{block.visualCue}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RUBIK CONFIG SEED — internal */}
        <section className="bg-[#07060A] px-6 md:px-12 py-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-[9px] tracking-[0.28em] font-mono text-[#444] mb-4 uppercase">Rubik Config Seed · Uso interno</p>
            <div className="border border-white/5 bg-white/[0.015] p-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {[
                ['slug', spec.rubikConfigSeed.slug],
                ['zona', spec.rubikConfigSeed.zone],
                ['sector', spec.rubikConfigSeed.sector],
                ['paleta primary', spec.rubikConfigSeed.palette.primary],
                ['logo', spec.rubikConfigSeed.logo ?? 'null (missing)'],
                ['heroImage', spec.rubikConfigSeed.heroImage ?? 'null (missing)'],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-[9px] font-mono text-[#555] tracking-[0.18em] uppercase">{k}</div>
                  <div className="text-[11px] text-[#888] font-mono mt-0.5">{v}</div>
                </div>
              ))}
            </div>
            <p className="text-[9px] font-mono text-[#444] mt-3">{spec.rubikConfigSeed.internalNote}</p>
          </div>
        </section>

        {/* QA REPORT */}
        {qualityReport && <QualityReportSection report={qualityReport} slug={slug} />}
      </main>
    </>
  );
};
