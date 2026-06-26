import { Helmet } from 'react-helmet-async';
import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { TorreviejaSurPremiumPrivateHeader } from './components/torreviejaSurPremium/TorreviejaSurPremiumPrivateHeader';
import { TorreviejaSurPremiumNavigation } from './components/torreviejaSurPremium/TorreviejaSurPremiumNavigation';
import { TorreviejaSurPremiumHero } from './components/torreviejaSurPremium/TorreviejaSurPremiumHero';
import { TorreviejaSurPremiumDiagnosis } from './components/torreviejaSurPremium/TorreviejaSurPremiumDiagnosis';
import { TorreviejaSurPremiumBeforeAfter } from './components/torreviejaSurPremium/TorreviejaSurPremiumBeforeAfter';
import { TorreviejaSurPremiumPropertyShowcase } from './components/torreviejaSurPremium/TorreviejaSurPremiumPropertyShowcase';
import { TorreviejaSurPremiumCollection } from './components/torreviejaSurPremium/TorreviejaSurPremiumCollection';
import { TorreviejaSurPremiumServices } from './components/torreviejaSurPremium/TorreviejaSurPremiumServices';
import { TorreviejaSurPremiumImmersphereModules } from './components/torreviejaSurPremium/TorreviejaSurPremiumImmersphereModules';
import { TorreviejaSurPremiumTechnology } from './components/torreviejaSurPremium/TorreviejaSurPremiumTechnology';
import { TorreviejaSurPremiumPilotSteps } from './components/torreviejaSurPremium/TorreviejaSurPremiumPilotSteps';
import { TorreviejaSurPremiumBlogGuides } from './components/torreviejaSurPremium/TorreviejaSurPremiumBlogGuides';
import { TorreviejaSurPremiumOwnerCapture } from './components/torreviejaSurPremium/TorreviejaSurPremiumOwnerCapture';
import { TorreviejaSurPremiumQRDistro } from './components/torreviejaSurPremium/TorreviejaSurPremiumQRDistro';
import { TorreviejaSurPremiumContact } from './components/torreviejaSurPremium/TorreviejaSurPremiumContact';
import { TorreviejaSurPremiumFooter } from './components/torreviejaSurPremium/TorreviejaSurPremiumFooter';
import { TorreviejaSurPremiumConciergeButton } from './components/torreviejaSurPremium/TorreviejaSurPremiumConciergeButton';
import { CurrentWebsiteComparisonSection } from './components/clientDemo/CurrentWebsiteComparisonSection';
import { ImmersphereServicesSection } from './components/clientDemo/ImmersphereServicesSection';
import { HighIntentContactSection } from './components/clientDemo/HighIntentContactSection';
import { VisualExperienceBannerSection } from './components/clientDemo/VisualExperienceBannerSection';
import { torreviejaSurPremiumDemo } from './data/clientDemos/torreviejaSurPremium';

export const TorreviejaSurPremiumDemo = () => {
  useSmoothScroll();

  const cfg = torreviejaSurPremiumDemo;

  return (
    <>
      <Helmet>
        <title>Torrevieja Sur · Premium Immersive Real Estate Preview</title>
        <meta
          name="description"
          content="Propuesta visual conceptual para convertir propiedades de Torrevieja Sur en experiencias inmersivas con tour, vídeo, QR y captación."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <GridOverlay />
      <CustomCursor />
      <TorreviejaSurPremiumPrivateHeader />
      <TorreviejaSurPremiumConciergeButton />
      <TorreviejaSurPremiumNavigation />
      <main>
        <TorreviejaSurPremiumHero />
        <TorreviejaSurPremiumDiagnosis />
        <TorreviejaSurPremiumBeforeAfter />

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

        {/* Reusable: client-facing visual piece — live iframe of the final product */}
        <VisualExperienceBannerSection
          clientName={cfg.client.name}
          clientLocation={cfg.client.location}
          clientLogo={cfg.client.logo.url}
          whatsappHref={cfg.visualExperience.primaryHref}
          phoneHref={cfg.visualExperience.secondaryHref}
          visiblePhone={cfg.salesContact.visiblePhone}
          embedUrl={cfg.visualExperience.embedUrl}
          standaloneUrl={cfg.visualExperience.standaloneUrl}
          horizontalUrl={cfg.visualExperience.horizontalUrl}
          verticalUrl={cfg.visualExperience.verticalUrl}
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

        <TorreviejaSurPremiumPropertyShowcase />
        <TorreviejaSurPremiumCollection />
        <TorreviejaSurPremiumServices />

        {/* Reusable: Immersphere commercial services (replaces internal-tool CTA) */}
        <ImmersphereServicesSection
          servicesUrl={cfg.immersphereServices.primaryHref}
          eyebrow={cfg.immersphereServices.eyebrow}
          title={cfg.immersphereServices.title}
          body={cfg.immersphereServices.body}
          secondary={cfg.immersphereServices.secondary}
          primaryCta={cfg.immersphereServices.primaryCta}
        />

        <TorreviejaSurPremiumImmersphereModules />
        <TorreviejaSurPremiumTechnology />
        <TorreviejaSurPremiumPilotSteps />
        <TorreviejaSurPremiumBlogGuides />
        <TorreviejaSurPremiumOwnerCapture />
        <TorreviejaSurPremiumQRDistro />

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

        <TorreviejaSurPremiumContact />
      </main>
      <TorreviejaSurPremiumFooter />
    </>
  );
};
