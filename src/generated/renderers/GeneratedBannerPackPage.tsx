import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, Smartphone, Monitor, Square } from 'lucide-react';
import type { BannerPackSpec, QualityReport } from '../types/fourHookSpecs';
import { QualityReportSection } from './GeneratedLandingPage';
import { GeneratedBannerVertical } from './GeneratedBannerVerticalPage';
import { GeneratedBannerHorizontal } from './GeneratedBannerHorizontalPage';

interface Props {
  spec: BannerPackSpec;
  qualityReport?: QualityReport;
  slug: string;
}

export const GeneratedBannerPackPage = ({ spec, qualityReport, slug }: Props) => (
  <>
    <Helmet>
      <title>{spec.hookName} · Spec Preview · Immersphere</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    {/* Spec preview badge */}
    <div className="fixed top-3 right-3 z-50 bg-black/80 border border-[#c4a96a]/40 px-3 py-1.5 backdrop-blur-sm">
      <span className="text-[9px] tracking-[0.24em] uppercase text-[#c4a96a] font-mono">Spec preview · Revisable</span>
    </div>

    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F7]">

      {/* HEADER */}
      <div className="border-b border-[#c4a96a]/15 px-6 py-4 flex items-center justify-between">
        <div>
          <span className="font-serif text-[#c4a96a] text-lg">{slug}</span>
          <span className="ml-2 text-[10px] font-mono text-[#c4a96a]/50 tracking-[0.2em] uppercase">
            · Pack de Banners
          </span>
        </div>
        <a
          href={`/preview/${slug}`}
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
            {slug.toUpperCase()} · CREATIVIDADES VISUALES
          </p>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6 max-w-2xl">
            {spec.hookName}
          </h1>
          <p className="text-[#8a8078] leading-relaxed max-w-xl">{spec.commercialPurpose}</p>
        </motion.div>
      </section>

      {/* CLAIMS */}
      <section className="bg-[#0e0c0a] px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.24em] uppercase mb-6">
            CLAIMS DE CAMPAÑA
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {spec.claims.map((claim, i) => (
              <div
                key={i}
                className="border border-[#c4a96a]/20 bg-[#c4a96a]/5 px-5 py-4 flex items-center gap-3"
              >
                <span className="text-[10px] font-mono text-[#c4a96a]/50">{String(i + 1).padStart(2, '0')}</span>
                <p className="font-serif text-base text-[#f5f0e8]">{claim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="px-6 md:px-12 py-12 max-w-5xl mx-auto">
        <p className="text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.24em] uppercase mb-8">
          FORMATOS INCLUIDOS
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {spec.formats.map((fmt) => (
            <div key={fmt.id} className="border border-[#c4a96a]/15 bg-white/[0.025] p-5">
              <div className="flex items-center gap-2 mb-3">
                {fmt.id === 'vertical' && <Smartphone size={15} className="text-[#c4a96a]" strokeWidth={1.5} />}
                {fmt.id === 'horizontal' && <Monitor size={15} className="text-[#c4a96a]" strokeWidth={1.5} />}
                {fmt.id === 'pack' && <Square size={15} className="text-[#c4a96a]" strokeWidth={1.5} />}
                <span className="font-serif text-base capitalize">{fmt.id}</span>
              </div>
              <div className="text-xs text-[#c4a96a] font-mono mb-2">{fmt.ratio} · {fmt.dimensions}</div>
              <ul className="space-y-1">
                {fmt.useCases.map((uc, i) => (
                  <li key={i} className="text-xs text-[#777]">{uc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* VERTICAL PREVIEW */}
      <section className="bg-[#0e0c0a] px-6 md:px-12 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Smartphone size={16} className="text-[#c4a96a]" strokeWidth={1.5} />
              <h2 className="font-serif text-xl">Banner Vertical 9:16</h2>
            </div>
            {spec.routes.vertical && (
              <a
                href={`/preview/${slug}/banners/vertical`}
                className="flex items-center gap-1.5 text-[11px] font-mono text-[#c4a96a] border border-[#c4a96a]/30 px-4 py-2 hover:border-[#c4a96a] transition-colors tracking-[0.14em] uppercase"
              >
                <ExternalLink size={12} />
                Ver completo
              </a>
            )}
          </div>
          <div style={{ maxWidth: 260 }}>
            <GeneratedBannerVertical spec={spec} />
          </div>
        </div>
      </section>

      {/* HORIZONTAL PREVIEW */}
      <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Monitor size={16} className="text-[#c4a96a]" strokeWidth={1.5} />
            <h2 className="font-serif text-xl">Banner Horizontal 16:9</h2>
          </div>
          {spec.routes.horizontal && (
            <a
              href={`/preview/${slug}/banners/horizontal`}
              className="flex items-center gap-1.5 text-[11px] font-mono text-[#c4a96a] border border-[#c4a96a]/30 px-4 py-2 hover:border-[#c4a96a] transition-colors tracking-[0.14em] uppercase"
            >
              <ExternalLink size={12} />
              Ver completo
            </a>
          )}
        </div>
        <GeneratedBannerHorizontal spec={spec} />
      </section>

      {/* VISUAL DIRECTION */}
      <section className="bg-[#0e0c0a] px-6 md:px-12 py-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-[9px] tracking-[0.28em] font-mono text-[#555] uppercase mb-2">Dirección visual · Interno</p>
          <p className="text-xs text-[#666] font-mono">{spec.visualDirection}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B0B0C] px-6 md:px-12 py-16 text-center">
        <p className="text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.24em] uppercase mb-4">
          SIGUIENTE PASO
        </p>
        <h2 className="font-serif text-3xl md:text-4xl mb-6">Activos listos para campaña.</h2>
        <a
          href={spec.CTA.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#c4a96a] text-black px-8 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#d4b97a] transition-colors"
        >
          {spec.CTA.label}
        </a>
      </section>

      {qualityReport && <QualityReportSection report={qualityReport} slug={slug} />}
    </div>
  </>
);
