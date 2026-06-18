import { Helmet } from 'react-helmet-async';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CasasYMarPrivateHeader } from './components/casasYMar/CasasYMarPrivateHeader';
import { CasasYMarNavigation } from './components/casasYMar/CasasYMarNavigation';
import { CasasYMarHero } from './components/casasYMar/CasasYMarHero';
import { CasasYMarDiagnosis } from './components/casasYMar/CasasYMarDiagnosis';
import { CasasYMarBeforeAfter } from './components/casasYMar/CasasYMarBeforeAfter';
import { CasasYMarPropertyShowcase } from './components/casasYMar/CasasYMarPropertyShowcase';
import { CasasYMarCollection } from './components/casasYMar/CasasYMarCollection';
import { CasasYMarServices } from './components/casasYMar/CasasYMarServices';
import { CasasYMarImmersphereModules } from './components/casasYMar/CasasYMarImmersphereModules';
import { CasasYMarTechnology } from './components/casasYMar/CasasYMarTechnology';
import { CasasYMarPilotSteps } from './components/casasYMar/CasasYMarPilotSteps';
import { CasasYMarBlogGuides } from './components/casasYMar/CasasYMarBlogGuides';
import { CasasYMarOwnerCapture } from './components/casasYMar/CasasYMarOwnerCapture';
import { CasasYMarQRDistro } from './components/casasYMar/CasasYMarQRDistro';
import { CasasYMarContact } from './components/casasYMar/CasasYMarContact';
import { CasasYMarFooter } from './components/casasYMar/CasasYMarFooter';
import { CasasYMarConciergeButton } from './components/casasYMar/CasasYMarConciergeButton';
import { CurrentWebsiteComparisonSection } from './components/clientDemo/CurrentWebsiteComparisonSection';
import { ImmersphereServicesSection } from './components/clientDemo/ImmersphereServicesSection';
import { HighIntentContactSection } from './components/clientDemo/HighIntentContactSection';
import { VisualExperienceBannerSection } from './components/clientDemo/VisualExperienceBannerSection';
import { casasYMarDemo } from './data/clientDemos/casasYMar';

export const CasasYMarDemo = () => {
  useSmoothScroll();

  const cfg = casasYMarDemo;

  return (
    <>
      <Helmet>
        <title>Casas y Mar · Premium Immersive Real Estate Preview</title>
        <meta
          name="description"
          content="Propuesta visual conceptual para convertir propiedades de Casas y Mar en experiencias inmersivas con tour, vídeo, QR y captación."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <GridOverlay />
      <CustomCursor />
      <CasasYMarPrivateHeader />
      <CasasYMarConciergeButton />
      <CasasYMarNavigation />
      <main>
        <CasasYMarHero />
        <CasasYMarDiagnosis />
        <CasasYMarBeforeAfter />

        {/* Reusable: comparison vs current client website */}
        <CurrentWebsiteComparisonSection
          clientName={cfg.client.name}
          currentWebsiteUrl={cfg.client.website}
          eyebrow={cfg.comparison.eyebrow}
          title={cfg.comparison.title}
          body={cfg.comparison.body}
          bullets={cfg.comparison.bullets}
          primaryCta={cfg.comparison.primaryCta}
        />

        {/* Reusable: client-facing visual piece (no internal tool exposed) */}
        <VisualExperienceBannerSection
          clientName={cfg.client.name}
          clientLocation={cfg.client.location}
          clientLogo={cfg.client.logo.url}
          whatsappHref={cfg.visualExperience.primaryHref}
          phoneHref={cfg.visualExperience.secondaryHref}
          visiblePhone={cfg.salesContact.visiblePhone}
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
        />

        <CasasYMarPropertyShowcase />
        <CasasYMarCollection />
        <CasasYMarServices />

        {/* Reusable: Immersphere commercial services (replaces internal-tool CTA) */}
        <ImmersphereServicesSection
          servicesUrl={cfg.immersphereServices.primaryHref}
          eyebrow={cfg.immersphereServices.eyebrow}
          title={cfg.immersphereServices.title}
          body={cfg.immersphereServices.body}
          secondary={cfg.immersphereServices.secondary}
          primaryCta={cfg.immersphereServices.primaryCta}
        />

        <CasasYMarImmersphereModules />
        <CasasYMarTechnology />
        <CasasYMarPilotSteps />
        <CasasYMarBlogGuides />
        <CasasYMarOwnerCapture />
        <CasasYMarQRDistro />

        {/* Reusable: high-intent direct contact, WhatsApp primary */}
        <HighIntentContactSection
          whatsappHref={cfg.highIntentContact.primaryHref}
          phoneHref={cfg.highIntentContact.secondaryHref}
          visiblePhone={cfg.salesContact.visiblePhone}
          eyebrow={cfg.highIntentContact.eyebrow}
          title={cfg.highIntentContact.title}
          body={cfg.highIntentContact.body}
          primaryCta={cfg.highIntentContact.primaryCta}
          secondaryCta={cfg.highIntentContact.secondaryCta}
          microcopy={cfg.highIntentContact.microcopy}
        />

        <CasasYMarContact />
      </main>
      <CasasYMarFooter />
    </>
  );
};
