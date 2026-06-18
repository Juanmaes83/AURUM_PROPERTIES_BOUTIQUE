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
import { CasasYMarPilotSteps } from './components/casasYMar/CasasYMarPilotSteps';
import { CasasYMarBlogGuides } from './components/casasYMar/CasasYMarBlogGuides';
import { CasasYMarOwnerCapture } from './components/casasYMar/CasasYMarOwnerCapture';
import { CasasYMarQRDistro } from './components/casasYMar/CasasYMarQRDistro';
import { CasasYMarContact } from './components/casasYMar/CasasYMarContact';
import { CasasYMarFooter } from './components/casasYMar/CasasYMarFooter';
import { CasasYMarConciergeButton } from './components/casasYMar/CasasYMarConciergeButton';

export const CasasYMarDemo = () => {
  useSmoothScroll();

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
        <CasasYMarPropertyShowcase />
        <CasasYMarCollection />
        <CasasYMarServices />
        <CasasYMarImmersphereModules />
        <CasasYMarPilotSteps />
        <CasasYMarBlogGuides />
        <CasasYMarOwnerCapture />
        <CasasYMarQRDistro />
        <CasasYMarContact />
      </main>
      <CasasYMarFooter />
    </>
  );
};
