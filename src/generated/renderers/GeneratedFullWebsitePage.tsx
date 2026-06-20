import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Mail, Phone, Clock, Globe, ExternalLink } from 'lucide-react';
import type { FullWebsiteSpec, SpecSection, QualityReport } from '../types/fourHookSpecs';
import { QualityReportSection } from './GeneratedLandingPage';

interface Props {
  spec: FullWebsiteSpec;
  qualityReport?: QualityReport;
  slug: string;
}

function HeroSection({ section }: { section: SpecSection }) {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center px-6 md:px-12">
      {section.assets?.video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        >
          <source src={section.assets.video} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#0d0a07]/70 to-[#0B0B0C]/90" />
      <div className="relative z-10 max-w-5xl mx-auto py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-3 border border-[#c4a96a]/35 bg-black/40 px-4 py-2 backdrop-blur-sm mb-8">
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#c4a96a] font-mono">
              WEB DESARROLLADA COMPLETA · SPEC PREVIEW
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[0.97] max-w-4xl">
            {section.headline}
          </h1>
          {section.subheadline && (
            <p className="mt-8 text-lg text-[#b0a390] leading-relaxed max-w-2xl">{section.subheadline}</p>
          )}
          {section.cta && (
            <a
              href={section.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 bg-[#25D366] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#1ebe5a] transition-colors"
            >
              <MessageCircle size={16} strokeWidth={2.2} />
              {section.cta.label}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function PresentationSection({ section }: { section: SpecSection }) {
  return (
    <section className="bg-[#F7F7F7] text-[#1A1A1A] px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-[1fr_1fr] items-start">
        <div>
          <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono">QUIÉNES SOMOS</span>
          <h2 className="font-serif text-4xl leading-tight mt-4">{section.headline}</h2>
          {section.body && (
            <p className="mt-6 text-base text-[#444] leading-relaxed">{section.body}</p>
          )}
        </div>
        {section.trustSignals && section.trustSignals.length > 0 && (
          <div className="space-y-3 pt-6 md:pt-10">
            {section.trustSignals.map((signal, i) => (
              <div key={i} className="flex items-center gap-3 border border-[#1A1A1A]/10 px-4 py-3 bg-white">
                <span className="text-[10px] font-mono text-[#A68B5B]">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-[#333]">{signal}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ZonesSection({ section }: { section: SpecSection }) {
  return (
    <section className="bg-[#0F0F10] text-[#F7F7F7] px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono">ZONAS</span>
        <h2 className="font-serif text-4xl leading-tight mt-4 mb-10">{section.headline}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {section.zones?.map((zone) => (
            <motion.div
              key={zone.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="border border-white/8 bg-white/[0.025] p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={14} className="text-[#A68B5B]" />
                <h3 className="font-serif text-lg">{zone.name}</h3>
              </div>
              <p className="text-sm text-[#999] leading-relaxed">{zone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ section }: { section: SpecSection }) {
  return (
    <section className="bg-[#F7F3EC] text-[#111] px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <span className="text-[10px] tracking-[0.32em] text-[#8a6d3a] font-mono">SERVICIOS</span>
        <h2 className="font-serif text-4xl leading-tight mt-4 mb-10">{section.headline}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {section.services?.map((svc) => (
            <div key={svc.id} className="border border-black/10 bg-white p-6 flex items-center gap-4">
              <span className="text-2xl font-mono text-[#8a6d3a] font-bold">
                {String(svc.id).padStart(2, '0')}
              </span>
              <span className="font-serif text-lg">{svc.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PropertiesSection({ section }: { section: SpecSection }) {
  return (
    <section className="bg-[#0F0F10] text-[#F7F7F7] px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono">PROPIEDADES</span>
        <h2 className="font-serif text-4xl leading-tight mt-4 mb-4">{section.headline}</h2>
        {section.note && (
          <p className="text-xs font-mono text-[#666] mb-8">{section.note}</p>
        )}
        <div className="grid gap-6 md:grid-cols-3">
          {section.items?.map((item) => (
            <div key={item.id} className="border border-white/8 bg-white/[0.025] p-6">
              <div className="text-[10px] font-mono text-[#A68B5B] tracking-[0.18em] mb-2">
                {item.zone}
              </div>
              <div className="font-serif text-lg">{item.label}</div>
              <div className="mt-3 text-[9px] font-mono text-[#555] tracking-[0.14em] uppercase border border-white/5 px-2 py-1 inline-block">
                Placeholder · Sustituir antes de publicar
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodSection({ section }: { section: SpecSection }) {
  return (
    <section className="bg-[#F7F7F7] text-[#1A1A1A] px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono">MÉTODO</span>
        <h2 className="font-serif text-4xl leading-tight mt-4 mb-10">{section.headline}</h2>
        <div className="space-y-4">
          {section.steps?.map((step) => (
            <div key={step.step} className="flex gap-6 border border-black/8 bg-white p-6">
              <div className="font-mono text-2xl text-[#A68B5B] font-bold w-10 flex-shrink-0">
                {String(step.step).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1">{step.title}</h3>
                <p className="text-sm text-[#666] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualExperienceEmbedSection({ section }: { section: SpecSection }) {
  const [failed, setFailed] = useState(false);
  const showEmbed = !!section.embedUrl && !failed;

  return (
    <section className="bg-[#0B0B0C] px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1fr_1fr] items-center">
        <div>
          <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">EXPERIENCIA VISUAL</span>
          <h2 className="font-serif text-4xl leading-tight mt-4">{section.headline}</h2>
          {section.publicUrl && (
            <a
              href={section.publicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase text-[#c4a96a] border-b border-[#c4a96a]/40 pb-1 hover:border-[#c4a96a] transition-colors font-semibold"
            >
              Ver en AURUM
              <ExternalLink size={12} strokeWidth={2.2} />
            </a>
          )}
        </div>
        <div
          className="relative border border-[#c4a96a]/30 overflow-hidden"
          style={{ aspectRatio: '9/16', maxHeight: 480 }}
        >
          {showEmbed ? (
            <iframe
              src={section.embedUrl}
              title="Experiencia Visual"
              loading="lazy"
              allow="autoplay; fullscreen"
              onError={() => setFailed(true)}
              className="absolute inset-0 w-full h-full border-0"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-[#0d0b09]">
              <p className="text-xs font-mono text-[#555] text-center px-4">
                Embed no disponible — ver ruta AURUM
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ section }: { section: SpecSection }) {
  const c = section.contact;
  if (!c) return null;
  return (
    <section className="bg-[#0e0c0a] px-6 md:px-12 py-20">
      <div className="max-w-4xl mx-auto">
        <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono mb-6 block">
          DATOS DE CONTACTO
        </span>
        <h2 className="font-serif text-3xl mb-8">{section.headline}</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-[#b0a390]">
          {c.address && (
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
              <span>{c.address}</span>
            </div>
          )}
          {c.phone && (
            <div className="flex items-start gap-2">
              <Phone size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
              <a href={`tel:${c.phone}`} className="hover:text-[#c4a96a] transition-colors">{c.phone}</a>
            </div>
          )}
          {c.email && (
            <div className="flex items-start gap-2">
              <Mail size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
              <a href={`mailto:${c.email}`} className="hover:text-[#c4a96a] transition-colors">{c.email}</a>
            </div>
          )}
          {c.schedule && (
            <div className="flex items-start gap-2">
              <Clock size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
              <span>{c.schedule}</span>
            </div>
          )}
          {c.website && (
            <div className="flex items-start gap-2">
              <Globe size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
              <a href={c.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#c4a96a] transition-colors">
                {c.website.replace(/^https?:\/\//, '')}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function renderSection(section: SpecSection) {
  switch (section.type) {
    case 'hero': return <HeroSection key={section.id} section={section} />;
    case 'presentation': return <PresentationSection key={section.id} section={section} />;
    case 'zonesOrMarkets': return <ZonesSection key={section.id} section={section} />;
    case 'services': return <ServicesSection key={section.id} section={section} />;
    case 'featuredEditorialItems': return <PropertiesSection key={section.id} section={section} />;
    case 'method': return <MethodSection key={section.id} section={section} />;
    case 'visualExperienceSection': return <VisualExperienceEmbedSection key={section.id} section={section} />;
    case 'contact': return <ContactSection key={section.id} section={section} />;
    default: return null;
  }
}

export const GeneratedFullWebsitePage = ({ spec, qualityReport, slug }: Props) => (
  <>
    <Helmet>
      <title>{spec.hookName} · Spec Preview · Immersphere</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    {/* Spec preview badge */}
    <div className="fixed top-3 right-3 z-50 bg-black/80 border border-[#c4a96a]/40 px-3 py-1.5 backdrop-blur-sm">
      <span className="text-[9px] tracking-[0.24em] uppercase text-[#c4a96a] font-mono">Spec preview · Revisable</span>
    </div>

    <main className="bg-[#0B0B0C] text-[#F7F7F7]">
      {spec.sections.sort((a, b) => a.order - b.order).map(renderSection)}

      {/* FINAL CTA */}
      <section className="bg-gradient-to-br from-[#0B0B0C] via-[#1A140A] to-[#0F0F10] py-28 px-6 md:px-12 text-center">
        <span className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono">SIGUIENTE PASO</span>
        <h2 className="font-serif text-4xl md:text-5xl mt-5 mb-6 max-w-2xl mx-auto">
          {spec.finalCTA.headline}
        </h2>
        <a
          href={spec.finalCTA.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-black px-8 py-5 text-sm font-bold tracking-[0.12em] uppercase hover:bg-[#1ebe5a] transition-colors"
        >
          <MessageCircle size={20} strokeWidth={2.2} />
          {spec.finalCTA.label}
        </a>
      </section>

      {qualityReport && <QualityReportSection report={qualityReport} slug={slug} />}
    </main>
  </>
);
