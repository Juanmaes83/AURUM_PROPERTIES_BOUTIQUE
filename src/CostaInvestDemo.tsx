import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CurrentWebsiteComparisonSection } from './components/clientDemo/CurrentWebsiteComparisonSection';
import { ImmersphereServicesSection } from './components/clientDemo/ImmersphereServicesSection';
import { HighIntentContactSection } from './components/clientDemo/HighIntentContactSection';
import { VisualExperienceBannerSection } from './components/clientDemo/VisualExperienceBannerSection';
import { costaInvestDemo } from './data/clientDemos/costaInvest';

const waHref = costaInvestDemo.highIntentContact.primaryHref;
const phoneHref = costaInvestDemo.highIntentContact.secondaryHref;

export const CostaInvestDemo = () => {
  useSmoothScroll();
  const cfg = costaInvestDemo;

  return (
    <>
      <Helmet>
        <title>Costa Invest · Premium Immersive Real Estate Preview</title>
        <meta
          name="description"
          content="Preview conceptual para Costa Invest: experiencia visual de propiedad, QR, WhatsApp y demo premium para compradores internacionales."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <GridOverlay />
      <CustomCursor />

      <main className="bg-[#0B0B0C] text-[#F7F7F7]">
        <section className="relative min-h-screen overflow-hidden px-6 py-8 md:px-12 flex items-center">
          <img
            src="/costainvest/place-to-live.jpg"
            alt="Costa Invest Orihuela Costa"
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="relative z-10 max-w-6xl mx-auto w-full grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="inline-flex items-center gap-3 border border-[#A68B5B]/40 bg-black/30 px-4 py-2 backdrop-blur-sm">
                <img src={cfg.client.logo.url} alt="Costa Invest" className="h-8 w-auto bg-white px-2 py-1" />
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#A68B5B] font-mono">{cfg.hero.badge}</span>
              </div>
              <h1 className="mt-8 font-serif text-5xl md:text-7xl leading-[0.95] max-w-4xl">{cfg.hero.headline}</h1>
              <p className="mt-8 max-w-2xl text-lg md:text-xl text-[#D8D1C7] leading-relaxed">{cfg.hero.subheadline}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#visual-experience" className="bg-[#A68B5B] text-black px-7 py-4 text-sm font-bold tracking-[0.14em] uppercase hover:bg-[#bf9f6a] transition-colors">{cfg.hero.primaryCta}</a>
                <a href="#comparison" className="border border-white/25 px-7 py-4 text-sm font-semibold tracking-[0.14em] uppercase hover:border-[#A68B5B] transition-colors">{cfg.hero.secondaryCta}</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="bg-black/45 border border-white/10 p-6 md:p-8 backdrop-blur-md">
              <div className="text-[10px] tracking-[0.28em] text-[#A68B5B] font-mono uppercase">Diagnóstico CRM</div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div><div className="text-4xl font-serif">{cfg.audit.score}</div><div className="text-xs text-[#999] uppercase tracking-[0.18em]">Score</div></div>
                <div><div className="text-4xl font-serif">{cfg.audit.priority}</div><div className="text-xs text-[#999] uppercase tracking-[0.18em]">Prioridad</div></div>
              </div>
              <div className="mt-8 space-y-3">
                {cfg.audit.strengths.map((item) => (
                  <div key={item} className="border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[#D8D1C7]">{item}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <CurrentWebsiteComparisonSection
          clientName={cfg.client.name}
          currentWebsiteUrl={cfg.client.website}
          eyebrow={cfg.comparison.eyebrow}
          title={cfg.comparison.title}
          body={cfg.comparison.body}
          bullets={cfg.comparison.bullets}
          primaryCta={cfg.comparison.primaryCta}
        />

        <VisualExperienceBannerSection
          clientName={cfg.client.name}
          clientLocation={cfg.client.location}
          clientLogo={cfg.client.logo.url}
          whatsappHref={waHref}
          phoneHref={phoneHref}
          visiblePhone={cfg.client.phone}
          embedUrl={cfg.visualExperience.embedUrl}
          standaloneUrl={cfg.visualExperience.standaloneUrl}
          previewImage={cfg.visualExperience.previewImage}
          previewSecondaryImage={cfg.visualExperience.previewSecondaryImage}
          previewTertiaryImage={cfg.visualExperience.previewTertiaryImage}
          chips={cfg.visualExperience.chips}
          eyebrow={cfg.visualExperience.eyebrow}
          title={cfg.visualExperience.title}
          body={cfg.visualExperience.body}
          supportBody={cfg.visualExperience.supportBody}
          primaryCta={cfg.visualExperience.primaryCta}
          secondaryCta={cfg.visualExperience.secondaryCta}
          pieceCta={cfg.visualExperience.pieceCta}
        />

        <section className="bg-[#F7F3EC] text-[#111] py-24 md:py-32 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <div>
              <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono uppercase">Plan piloto</span>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl leading-tight">Una propiedad, tres usos comerciales.</h2>
              <p className="mt-6 text-[#555] leading-relaxed">La demo está pensada para que Costa Invest pueda usar el mismo activo en WhatsApp, campañas y conversación comercial con compradores internacionales.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {cfg.audit.opportunities.map((item, index) => (
                <div key={item} className="border border-black/10 bg-white p-6 min-h-[180px]">
                  <div className="text-xs font-mono text-[#A68B5B]">0{index + 1}</div>
                  <p className="mt-5 text-lg font-serif leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ImmersphereServicesSection
          servicesUrl={cfg.immersphereServices.primaryHref}
          eyebrow={cfg.immersphereServices.eyebrow}
          title={cfg.immersphereServices.title}
          body={cfg.immersphereServices.body}
          secondary={cfg.immersphereServices.secondary}
          primaryCta={cfg.immersphereServices.primaryCta}
        />

        <HighIntentContactSection
          whatsappHref={cfg.highIntentContact.primaryHref}
          phoneHref={cfg.highIntentContact.secondaryHref}
          visiblePhone={cfg.client.phone}
          eyebrow={cfg.highIntentContact.eyebrow}
          title={cfg.highIntentContact.title}
          body={cfg.highIntentContact.body}
          primaryCta={cfg.highIntentContact.primaryCta}
          secondaryCta={cfg.highIntentContact.secondaryCta}
          microcopy={cfg.highIntentContact.microcopy}
        />
      </main>
    </>
  );
};
