import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { proposalPackage } from './generated/SandhouseInmobiliariaProposalPackage';

const hooks = [
  {
    num: '01',
    label: proposalPackage.fourHooks.visualExperience.label,
    purpose: proposalPackage.fourHooks.visualExperience.purpose,
    href: '/sandhouse-inmobiliaria/visual-experience',
  },
  {
    num: '02',
    label: proposalPackage.fourHooks.landing.label,
    purpose: proposalPackage.fourHooks.landing.purpose,
    href: '/sandhouse-inmobiliaria',
  },
  {
    num: '03',
    label: proposalPackage.fourHooks.webCompleta.label,
    purpose: proposalPackage.fourHooks.webCompleta.purpose,
    href: '/sandhouse-inmobiliaria/web-completa',
  },
  {
    num: '04',
    label: proposalPackage.fourHooks.bannerPack.label,
    purpose: proposalPackage.fourHooks.bannerPack.purpose,
    href: '/banners/sandhouse-inmobiliaria',
  },
];

export function SandhouseLanding() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0d0b09',
        color: '#f5f0e8',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Hero */}
      <section
        style={{
          padding: '5rem 1.5rem 4rem',
          maxWidth: 720,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p
            style={{
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              color: '#c4a96a',
              marginBottom: '1.25rem',
              fontFamily: 'monospace',
            }}
          >
            IMMERSPHERE · SANDHOUSE INMOBILIARIA · PROPUESTA VISUAL
          </p>
          <h1
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontFamily: 'Georgia, serif',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Tu hogar en Torrevieja y la Costa Levantina
          </h1>
          <p
            style={{
              fontSize: '1rem',
              color: '#b0a390',
              lineHeight: 1.7,
              maxWidth: 560,
              margin: '0 auto 2.5rem',
            }}
          >
            {proposalPackage.painDetected}
          </p>
          <a
            href="mailto:info@sandhouse.es?subject=Solicitud%20de%20revisi%C3%B3n%20de%20propuesta%20Immersphere"
            style={{
              display: 'inline-block',
              background: '#c4a96a',
              color: '#0d0b09',
              padding: '0.875rem 2rem',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: '2px',
            }}
          >
            Solicitar revision de propuesta
          </a>
        </motion.div>
      </section>

      {/* Proposal summary */}
      <section
        style={{
          background: 'rgba(196,169,106,0.06)',
          borderTop: '1px solid rgba(196,169,106,0.15)',
          borderBottom: '1px solid rgba(196,169,106,0.15)',
          padding: '3rem 1.5rem',
        }}
      >
        <p
          style={{
            maxWidth: 640,
            margin: '0 auto',
            textAlign: 'center',
            fontSize: '0.95rem',
            color: '#d0c8bc',
            lineHeight: 1.75,
          }}
        >
          {proposalPackage.proposalSummary}
        </p>
      </section>

      {/* 4 Hooks */}
      <section style={{ padding: '4rem 1.5rem', maxWidth: 800, margin: '0 auto' }}>
        <p
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            color: '#c4a96a',
            marginBottom: '2.5rem',
            textAlign: 'center',
            fontFamily: 'monospace',
          }}
        >
          4 PIEZAS COMERCIALES · REVISION PREVIA AL ENVIO
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1rem',
          }}
        >
          {hooks.map((h) => (
            <a
              key={h.num}
              href={h.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(196,169,106,0.2)',
                borderRadius: '4px',
                padding: '1.5rem',
                color: '#f5f0e8',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(196,169,106,0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(196,169,106,0.2)')}
            >
              <div
                style={{ fontSize: '0.65rem', color: '#c4a96a', fontFamily: 'monospace', letterSpacing: '0.12em' }}
              >
                {h.num}
              </div>
              <div
                style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}
              >
                <p style={{ fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.3 }}>{h.label}</p>
                <ExternalLink size={14} color="#c4a96a" style={{ flexShrink: 0, marginTop: 2 }} />
              </div>
              <p style={{ fontSize: '0.78rem', color: '#8a8078', lineHeight: 1.5 }}>{h.purpose}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CTA footer */}
      <section
        style={{
          padding: '3rem 1.5rem 4rem',
          textAlign: 'center',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <a
          href="mailto:info@sandhouse.es?subject=Solicitud%20de%20revisi%C3%B3n%20de%20propuesta%20Immersphere"
          style={{
            display: 'inline-block',
            border: '1px solid rgba(196,169,106,0.5)',
            color: '#c4a96a',
            padding: '0.875rem 2rem',
            fontWeight: 600,
            fontSize: '0.8rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '2px',
            marginBottom: '2rem',
          }}
        >
          Solicitar revision de propuesta
        </a>
        <p style={{ fontSize: '0.65rem', color: '#4a4540', letterSpacing: '0.08em' }}>
          Propuesta en revision — no publicada definitivamente
        </p>
      </section>
    </div>
  );
}
