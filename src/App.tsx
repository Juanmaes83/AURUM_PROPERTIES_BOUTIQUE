import { Routes, Route } from 'react-router-dom';
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

      {/* Sandhouse Inmobiliaria — alias routes */}
      <Route path="/visual-experience/sandhouse-inmobiliaria" element={<SandhouseVisualExperience />} />
      <Route path="/sandhouse-inmobiliaria-web-completa" element={<SandhouseWebCompleta />} />
      <Route path="/sandhouse-inmobiliaria/banners" element={<SandhouseBannerPack />} />
    </Routes>
  );
}

export default App;
