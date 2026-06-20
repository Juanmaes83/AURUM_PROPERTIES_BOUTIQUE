import { Helmet } from 'react-helmet-async';
import type { BannerPackSpec, QualityReport } from '../types/fourHookSpecs';
import { QualityReportSection } from './GeneratedLandingPage';

interface Props {
  spec: BannerPackSpec;
  qualityReport?: QualityReport;
  slug: string;
}

export function GeneratedBannerHorizontal({ spec }: { spec: BannerPackSpec }) {
  const h = spec.formatSpecificCopy.horizontal;
  return (
    <div
      className="relative overflow-hidden border border-[#c4a96a]/25 bg-[#0d0b09] w-full"
      style={{ aspectRatio: '16/9' }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(110deg, #0d0b09 0%, #1a1208 50%, #0d0b09 100%)' }}
      />
      <div
        className="absolute inset-0 opacity-25"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(196,169,106,0.3) 0%, transparent 50%)' }}
      />

      {/* Left column — brand + headline (~55%) */}
      <div className="absolute inset-0 flex">
        <div className="w-[55%] flex flex-col justify-center px-6 md:px-8 border-r border-[#c4a96a]/15">
          <div className="text-[8px] font-mono text-[#c4a96a]/60 tracking-[0.2em] uppercase mb-2">
            {h.leftColumn.brand}
          </div>
          <p className="font-serif text-[#f5f0e8] leading-snug" style={{ fontSize: 'clamp(0.75rem, 2.2vw, 1.1rem)' }}>
            {h.leftColumn.headline}
          </p>
          <p className="font-mono text-[#c4a96a] text-[9px] tracking-[0.14em] mt-2">{h.leftColumn.claim}</p>
        </div>

        {/* Right column — chips + contact */}
        <div className="w-[45%] flex flex-col justify-between px-5 md:px-6 py-4">
          <div className="flex flex-wrap gap-1.5">
            {h.rightColumn.chips.map((chip, i) => (
              <span
                key={i}
                className="text-[7px] font-mono tracking-[0.16em] uppercase border border-[#c4a96a]/40 text-[#c4a96a] px-1.5 py-1"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="space-y-1 text-[8px] text-[#b0a390] font-mono">
            {h.rightColumn.contact.address && (
              <div className="truncate">{h.rightColumn.contact.address}</div>
            )}
            {h.rightColumn.contact.phone && (
              <div>{h.rightColumn.contact.phone}</div>
            )}
            {h.rightColumn.contact.email && (
              <div className="truncate">{h.rightColumn.contact.email}</div>
            )}
            {h.rightColumn.schedule && (
              <div className="text-[7px] text-[#777]">{h.rightColumn.schedule}</div>
            )}
          </div>

          <div className="bg-[#c4a96a] text-black text-[8px] font-bold tracking-[0.14em] uppercase px-3 py-2 text-center self-start">
            {h.rightColumn.cta}
          </div>
        </div>
      </div>

      {/* Format tag */}
      <div className="absolute bottom-2 right-3 text-[7px] font-mono text-[#c4a96a]/30 tracking-[0.18em] uppercase">
        16:9 · Horizontal
      </div>
    </div>
  );
}

export const GeneratedBannerHorizontalPage = ({ spec, qualityReport, slug }: Props) => (
  <>
    <Helmet>
      <title>Banner Horizontal · {slug} · Spec Preview · Immersphere</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    {/* Spec preview badge */}
    <div className="fixed top-3 right-3 z-50 bg-black/80 border border-[#c4a96a]/40 px-3 py-1.5 backdrop-blur-sm">
      <span className="text-[9px] tracking-[0.24em] uppercase text-[#c4a96a] font-mono">Spec preview · Horizontal 16:9</span>
    </div>

    <div className="min-h-screen bg-[#0B0B0C] text-[#F7F7F7] flex flex-col items-center justify-center px-6 py-16">
      <p className="text-[10px] font-mono text-[#c4a96a] tracking-[0.28em] uppercase mb-8">
        BANNER HORIZONTAL · 16:9 · 1920 × 1080 px
      </p>

      <div className="w-full" style={{ maxWidth: 720 }}>
        <GeneratedBannerHorizontal spec={spec} />
      </div>

      <div className="mt-10 text-center max-w-md">
        <p className="text-xs text-[#8a8078] leading-relaxed mb-2">
          {spec.formatSpecificCopy.horizontal.subline}
        </p>
        <p className="text-[9px] font-mono text-[#555]">
          USO: {spec.formats.find(f => f.id === 'horizontal')?.useCases.join(' · ')}
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
