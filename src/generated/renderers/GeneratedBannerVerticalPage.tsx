import { Helmet } from 'react-helmet-async';
import type { BannerPackSpec, QualityReport } from '../types/fourHookSpecs';
import { QualityReportSection } from './GeneratedLandingPage';

interface Props {
  spec: BannerPackSpec;
  qualityReport?: QualityReport;
  slug: string;
}

export function GeneratedBannerVertical({ spec }: { spec: BannerPackSpec }) {
  const v = spec.formatSpecificCopy.vertical;
  return (
    <div
      className="relative overflow-hidden border border-[#c4a96a]/25 bg-[#0d0b09] w-full"
      style={{ aspectRatio: '9/16' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(160deg, #0d0b09 0%, #1a1208 40%, #0d0b09 100%)' }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(196,169,106,0.25) 0%, transparent 55%)' }}
      />

      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 border-b border-[#c4a96a]/15">
        <span className="font-serif text-[#c4a96a] text-sm tracking-wide">{spec.contact.website?.replace(/^https?:\/\//, '').replace(/\/$/, '') ?? 'cliente'}</span>
        <span className="text-[8px] font-mono text-[#c4a96a]/60 tracking-[0.2em] uppercase">9:16</span>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 pt-16 pb-20">
        <p className="font-serif text-[#f5f0e8] leading-tight mb-3" style={{ fontSize: 'clamp(1.1rem, 4vw, 1.7rem)' }}>
          {v.headline}
        </p>
        <p className="text-[#b0a390] leading-relaxed text-xs mb-4">{v.subline}</p>
        {v.chips.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {v.chips.map((chip, i) => (
              <span
                key={i}
                className="text-[8px] font-mono tracking-[0.16em] uppercase border border-[#c4a96a]/40 text-[#c4a96a] px-2 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/90 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] font-mono text-[#c4a96a]/70 uppercase tracking-[0.18em]">Contactar</p>
            {v.contact.phone && (
              <p className="text-[10px] text-[#f5f0e8] font-semibold">{v.contact.phone}</p>
            )}
          </div>
          <div className="bg-[#c4a96a] text-black text-[9px] font-bold tracking-[0.16em] uppercase px-3 py-2">
            {v.contact.cta}
          </div>
        </div>
        {v.address && (
          <p className="text-[7px] text-[#777] font-mono mt-1 truncate">{v.address}</p>
        )}
      </div>

      {/* Format tag */}
      <div className="absolute top-12 right-3 text-[8px] font-mono text-[#c4a96a]/40 tracking-[0.18em] uppercase rotate-90 origin-right">
        9:16 · Vertical
      </div>
    </div>
  );
}

export const GeneratedBannerVerticalPage = ({ spec, qualityReport, slug }: Props) => (
  <>
    <Helmet>
      <title>Banner Vertical · {slug} · Spec Preview · Immersphere</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    {/* Spec preview badge */}
    <div className="fixed top-3 right-3 z-50 bg-black/80 border border-[#c4a96a]/40 px-3 py-1.5 backdrop-blur-sm">
      <span className="text-[9px] tracking-[0.24em] uppercase text-[#c4a96a] font-mono">Spec preview · Vertical 9:16</span>
    </div>

    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F7] flex flex-col items-center justify-center px-6 py-16">
      <p className="text-[10px] font-mono text-[#c4a96a] tracking-[0.28em] uppercase mb-8">
        BANNER VERTICAL · 9:16 · 1080 × 1920 px
      </p>

      <div className="w-full" style={{ maxWidth: 360 }}>
        <GeneratedBannerVertical spec={spec} />
      </div>

      <div className="mt-10 text-center max-w-sm">
        <p className="text-xs text-[#8a8078] leading-relaxed mb-2">
          {spec.formatSpecificCopy.vertical.subline}
        </p>
        <p className="text-[9px] font-mono text-[#555]">
          USO: {spec.formats.find(f => f.id === 'vertical')?.useCases.join(' · ')}
        </p>
      </div>

      <a
        href={`/preview/${slug}/banners`}
        className="mt-10 text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.18em] uppercase hover:text-[#c4a96a] transition-colors"
      >
        ← Ver pack completo
      </a>

      {qualityReport && (
        <div className="w-full max-w-4xl mt-12">
          <QualityReportSection report={qualityReport} slug={slug} />
        </div>
      )}
    </div>
  </>
);
