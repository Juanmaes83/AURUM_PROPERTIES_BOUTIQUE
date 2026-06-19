import { ExternalLink } from 'lucide-react';

const AURUM = 'https://aurum-properties-boutique.vercel.app';

const banners = [
  {
    id: 'vertical',
    label: 'Banner Vertical',
    spec: '1080 × 1920 · Stories · Reels',
    localHref: '/banners/sandhouse-inmobiliaria/vertical',
    href: `${AURUM}/banners/sandhouse-inmobiliaria/vertical`,
  },
  {
    id: 'horizontal',
    label: 'Banner Horizontal',
    spec: '1920 × 1080 · Display · YouTube',
    localHref: '/banners/sandhouse-inmobiliaria/horizontal',
    href: `${AURUM}/banners/sandhouse-inmobiliaria/horizontal`,
  },
];

export function SandhouseBannerPack() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0d0b09',
        color: '#f5f0e8',
        fontFamily: 'Inter, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1.5rem',
        gap: '2.5rem',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: 480 }}>
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.16em', color: '#c4a96a', marginBottom: '0.75rem' }}>
          SANDHOUSE INMOBILIARIA · PACK DE BANNERS
        </p>
        <h1 style={{ fontSize: '1.6rem', fontFamily: 'Georgia, serif', fontWeight: 700, lineHeight: 1.25, marginBottom: '0.75rem' }}>
          Activos visuales personalizados
        </h1>
        <p style={{ fontSize: '0.875rem', color: '#b0a390', lineHeight: 1.6 }}>
          Banners animados con imagen de propiedad y CTA para compradores en Torrevieja y la Costa Levantina.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: 420 }}>
        {banners.map((b) => (
          <a
            key={b.id}
            href={b.localHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(196,169,106,0.08)',
              border: '1px solid rgba(196,169,106,0.28)',
              borderRadius: '0.5rem',
              padding: '1.25rem 1.5rem',
              color: '#f5f0e8',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(196,169,106,0.14)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(196,169,106,0.08)')}
          >
            <div>
              <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{b.label}</p>
              <p style={{ fontSize: '0.75rem', color: '#b0a390' }}>{b.spec}</p>
            </div>
            <ExternalLink size={16} color="#c4a96a" />
          </a>
        ))}
      </div>

      <p style={{ fontSize: '0.7rem', color: '#635a50', textAlign: 'center' }}>
        Propuesta en revision — no publicada definitivamente
      </p>
    </div>
  );
}
