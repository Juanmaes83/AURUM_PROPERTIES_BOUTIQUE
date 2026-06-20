import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, MapPin, Mail, Clock, Globe, ChevronRight, AlertTriangle } from 'lucide-react';
import { CurrentWebsiteComparisonSection } from '../../components/clientDemo/CurrentWebsiteComparisonSection';
import { HighIntentContactSection } from '../../components/clientDemo/HighIntentContactSection';
import { ImmersphereServicesSection } from '../../components/clientDemo/ImmersphereServicesSection';
import type { LandingSpec, QualityReport } from '../types/fourHookSpecs';

interface Props {
  spec: LandingSpec;
  qualityReport?: QualityReport;
  slug: string;
}

export const GeneratedLandingPage = ({ spec, qualityReport, slug }: Props) => {
  const waHref = spec.contact.whatsapp || spec.hero.primaryCta.href;
  const phoneHref = spec.contact.phone ? `tel:${spec.contact.phone}` : spec.hero.secondaryCta.href;
  const visiblePhone = spec.contact.phone || '';
  const websiteUrl = spec.contact.website || '#';

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

      <main className="bg-[#0B0B0C] text-[#F7F7F7]">

        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden px-6 py-10 md:px-12 flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0d0a07] to-[#0B0B0C]" />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'radial-gradient(ellipse 70% 50% at 20% 60%, rgba(196,169,106,0.06) 0%, transparent 70%)' }}
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

              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
                {spec.hero.headline}
              </h1>

              <p className="mt-8 max-w-xl text-lg text-[#b0a390] leading-relaxed">
                {spec.hero.subheadline}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#1ebe5a] transition-colors"
                >
                  <MessageCircle size={16} strokeWidth={2.2} />
                  {spec.hero.primaryCta.label}
                </a>
                {spec.hero.secondaryCta.href && (
                  <a
                    href={phoneHref}
                    className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#c4a96a] transition-colors"
                  >
                    <Phone size={15} strokeWidth={2.2} />
                    {spec.hero.secondaryCta.label}
                  </a>
                )}
              </div>
            </motion.div>

            {/* Diagnosis card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="bg-black/50 border border-white/10 p-6 md:p-8 backdrop-blur-md"
            >
              <div className="text-[10px] tracking-[0.28em] text-[#c4a96a] font-mono uppercase mb-5">
                Diagnóstico CRM
              </div>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] font-mono text-[#777] tracking-[0.18em] uppercase mb-1">Problema detectado</div>
                  <p className="text-sm text-[#cfcfcf]">{spec.diagnosis.painDetected}</p>
                </div>
                <div className="border-t border-white/8 pt-4">
                  <div className="text-[10px] font-mono text-[#777] tracking-[0.18em] uppercase mb-1">Oportunidad</div>
                  <p className="text-sm text-[#cfcfcf]">{spec.diagnosis.opportunityDetected}</p>
                </div>
                <div className="border-t border-white/8 pt-4">
                  <div className="text-[10px] font-mono text-[#777] tracking-[0.18em] uppercase mb-1">Ángulo recomendado</div>
                  <p className="text-sm text-[#8a8078]">{spec.diagnosis.recommendedAngle}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* COMPARISON */}
        <CurrentWebsiteComparisonSection
          clientName={spec.hookName}
          currentWebsiteUrl={websiteUrl}
          eyebrow="DIAGNÓSTICO COMERCIAL"
          title={spec.comparison.currentSituation}
          body={spec.comparison.proposedSituation}
          bullets={spec.comparison.differentiators}
          primaryCta="Ver web actual"
        />

        {/* 4 HOOKS SUMMARY */}
        <section className="bg-[#F7F3EC] text-[#111] py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] tracking-[0.32em] text-[#8a6d3a] font-mono">4 PIEZAS COMERCIALES</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-4 mb-4">
                Una propuesta completa, revisable antes de publicar nada.
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 mt-10">
              {spec.fourHooksSummary.map((h, i) => (
                <motion.div
                  key={h.hook}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="border border-black/10 bg-white p-7"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-mono text-[#8a6d3a]">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug mb-2">{h.label}</h3>
                  <p className="text-sm text-[#666] leading-relaxed mb-4">{h.purpose}</p>
                  {h.url && (
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase text-[#8a6d3a] font-semibold hover:underline"
                    >
                      <ChevronRight size={13} strokeWidth={2.5} />
                      Ver ruta objetivo
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IMMERSPHERE SERVICES */}
        <ImmersphereServicesSection
          servicesUrl="https://immersphere-pro-crm.vercel.app/servicios"
        />

        {/* CONTACT DATA */}
        <section className="bg-[#0e0c0a] py-20 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] tracking-[0.32em] text-[#c4a96a] font-mono mb-6">
              DATOS DE CONTACTO CONFIRMADOS
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 text-sm text-[#b0a390]">
              {spec.contact.address && (
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                  <span>{spec.contact.address}</span>
                </div>
              )}
              {spec.contact.phone && (
                <div className="flex items-start gap-2">
                  <Phone size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                  <a href={`tel:${spec.contact.phone}`} className="hover:text-[#c4a96a] transition-colors">
                    {spec.contact.phone}
                  </a>
                </div>
              )}
              {spec.contact.email && (
                <div className="flex items-start gap-2">
                  <Mail size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                  <a href={`mailto:${spec.contact.email}`} className="hover:text-[#c4a96a] transition-colors">
                    {spec.contact.email}
                  </a>
                </div>
              )}
              {spec.contact.schedule && (
                <div className="flex items-start gap-2">
                  <Clock size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                  <span>{spec.contact.schedule}</span>
                </div>
              )}
              {spec.contact.website && (
                <div className="flex items-start gap-2">
                  <Globe size={14} className="text-[#c4a96a] mt-0.5 flex-shrink-0" />
                  <a href={spec.contact.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#c4a96a] transition-colors">
                    {spec.contact.website.replace(/^https?:\/\//, '')}
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* HIGH INTENT CTA */}
        <HighIntentContactSection
          whatsappHref={waHref}
          phoneHref={phoneHref}
          visiblePhone={visiblePhone}
          eyebrow="SIGUIENTE PASO"
          title={spec.nextStep}
          body={spec.diagnosis.marketContext}
          primaryCta="Hablar por WhatsApp"
        />

        {/* QA REPORT — internal only */}
        {qualityReport && (
          <QualityReportSection report={qualityReport} slug={slug} />
        )}
      </main>
    </>
  );
};

const QualityReportSection = ({ report, slug }: { report: QualityReport; slug: string }) => (
  <section className="bg-[#06050A] border-t border-white/5 px-6 md:px-12 py-12">
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        {!report.passed && <AlertTriangle size={16} className="text-red-400" />}
        <span className="text-[9px] tracking-[0.3em] font-mono text-[#555] uppercase">QA interno de specs · {slug}</span>
        <span className={`text-[9px] font-mono px-2 py-0.5 ${report.passed ? 'bg-green-900/40 text-green-400' : 'bg-red-900/40 text-red-400'}`}>
          {report.passed ? 'PASSED' : 'BLOQUEADO'}
        </span>
      </div>
      <p className="text-xs text-[#555] font-mono mb-4">{report.summary}</p>
      {!report.passed && report.blockers.length > 0 && (
        <div className="mb-4 border border-red-900/40 bg-red-900/10 p-4">
          <p className="text-[10px] font-mono text-red-400 mb-2 tracking-[0.18em]">BLOCKERS — Este spec no debería enviarse todavía</p>
          <ul className="space-y-1">
            {report.blockers.map((b, i) => (
              <li key={i} className="text-xs text-red-300 font-mono">{b}</li>
            ))}
          </ul>
        </div>
      )}
      {report.warnings.length > 0 && (
        <div>
          <p className="text-[10px] font-mono text-[#666] mb-2 tracking-[0.18em]">WARNINGS</p>
          <ul className="space-y-1">
            {report.warnings.map((w, i) => (
              <li key={i} className="text-xs text-[#888] font-mono">{w}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </section>
);

export { QualityReportSection };
