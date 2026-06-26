import { Routes, Route } from 'react-router-dom';
import { SpecPreviewRouter } from './generated/renderers/SpecPreviewRouter';
import { AurumOriginal } from './AurumOriginal';
import { CasasYMarDemo } from './CasasYMarDemo';
import { CostaInvestDemo } from './CostaInvestDemo';
import { CostaInvestWebCompleta } from './CostaInvestWebCompleta';
import { CostaInvestVisualExperience } from './CostaInvestVisualExperience';
import { CostaInvestBannerPack } from './CostaInvestBannerPack';
import { CostaInvestBannerVertical } from './CostaInvestBannerVertical';
import { CostaInvestBannerHorizontal } from './CostaInvestBannerHorizontal';
import { SandhouseLanding } from './SandhouseLanding';
import { SandhouseVisualExperience } from './SandhouseVisualExperience';
import { SandhouseWebCompleta } from './SandhouseWebCompleta';
import { SandhouseBannerPack } from './SandhouseBannerPack';
import { SandhouseBannerVertical } from './SandhouseBannerVertical';
import { SandhouseBannerHorizontal } from './SandhouseBannerHorizontal';
import { EmbassyLevanteLanding } from './EmbassyLevanteLanding';
import { EmbassyLevanteVisualExperience } from './EmbassyLevanteVisualExperience';
import { EmbassyLevanteWebCompleta } from './EmbassyLevanteWebCompleta';
import { EmbassyLevanteBannerPack } from './EmbassyLevanteBannerPack';
import { EmbassyLevanteBannerVertical } from './EmbassyLevanteBannerVertical';
import { EmbassyLevanteBannerHorizontal } from './EmbassyLevanteBannerHorizontal';


function App() {
  return (
    <Routes>
      <Route path="/" element={<AurumOriginal />} />
      <Route path="/casas-y-mar" element={<CasasYMarDemo />} />
      <Route path="/costa-invest" element={<CostaInvestDemo />} />
      <Route path="/costa-invest-web-completa" element={<CostaInvestWebCompleta />} />
      <Route path="/visual-experience/costa-invest" element={<CostaInvestVisualExperience />} />
      <Route path="/banners/costa-invest" element={<CostaInvestBannerPack />} />
      <Route path="/banners/costa-invest/vertical" element={<CostaInvestBannerVertical />} />
      <Route path="/banners/costa-invest/horizontal" element={<CostaInvestBannerHorizontal />} />

      {/* Sandhouse Inmobiliaria — canonical routes */}
      <Route path="/sandhouse-inmobiliaria" element={<SandhouseLanding />} />
      <Route path="/sandhouse-inmobiliaria/visual-experience" element={<SandhouseVisualExperience />} />
      <Route path="/sandhouse-inmobiliaria/web-completa" element={<SandhouseWebCompleta />} />
      <Route path="/banners/sandhouse-inmobiliaria" element={<SandhouseBannerPack />} />
      <Route path="/banners/sandhouse-inmobiliaria/vertical" element={<SandhouseBannerVertical />} />
      <Route path="/banners/sandhouse-inmobiliaria/horizontal" element={<SandhouseBannerHorizontal />} />

      {/* Spec preview routes — rendered from premiumSpecs, do not conflict with manual routes above */}
      <Route path="/preview/:slug" element={<SpecPreviewRouter view="landing" />} />
      <Route path="/preview/:slug/visual-experience" element={<SpecPreviewRouter view="visualExperience" />} />
      <Route path="/preview/:slug/web-completa" element={<SpecPreviewRouter view="fullWebsite" />} />
      <Route path="/preview/:slug/banners" element={<SpecPreviewRouter view="bannerPack" />} />
      <Route path="/preview/:slug/banners/vertical" element={<SpecPreviewRouter view="bannerVertical" />} />
      <Route path="/preview/:slug/banners/horizontal" element={<SpecPreviewRouter view="bannerHorizontal" />} />

      {/* Sandhouse Inmobiliaria — alias routes */}
      <Route path="/visual-experience/sandhouse-inmobiliaria" element={<SandhouseVisualExperience />} />
      <Route path="/sandhouse-inmobiliaria-web-completa" element={<SandhouseWebCompleta />} />
      <Route path="/sandhouse-inmobiliaria/banners" element={<SandhouseBannerPack />} />

      {/* Embassy Levante — canonical routes */}
      <Route path="/embassy-levante" element={<EmbassyLevanteLanding />} />
      <Route path="/visual-experience/embassy-levante" element={<EmbassyLevanteVisualExperience />} />
      <Route path="/embassy-levante-web-completa" element={<EmbassyLevanteWebCompleta />} />
      <Route path="/banners/embassy-levante" element={<EmbassyLevanteBannerPack />} />
      <Route path="/banners/embassy-levante/vertical" element={<EmbassyLevanteBannerVertical />} />
      <Route path="/banners/embassy-levante/horizontal" element={<EmbassyLevanteBannerHorizontal />} />
          <Route path="/torrevieja-sur" element={<TorreviejaSurLanding />} />
      <Route path="/torrevieja-sur-web-completa" element={<TorreviejaSurWebCompleta />} />
      <Route path="/visual-experience/torrevieja-sur" element={<TorreviejaSurVisualExperience />} />
      <Route path="/banners/torrevieja-sur" element={<TorreviejaSurBannerPack />} />
      <Route path="/banners/torrevieja-sur/vertical" element={<TorreviejaSurBannerVertical />} />
      <Route path="/banners/torrevieja-sur/horizontal" element={<TorreviejaSurBannerHorizontal />} />
      </Routes>
  );
}

export default App;
