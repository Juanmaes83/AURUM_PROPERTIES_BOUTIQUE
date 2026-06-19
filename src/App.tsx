import { Routes, Route } from 'react-router-dom';
import { AurumOriginal } from './AurumOriginal';
import { CasasYMarDemo } from './CasasYMarDemo';
import { CostaInvestDemo } from './CostaInvestDemo';
import { CostaInvestWebCompleta } from './CostaInvestWebCompleta';
import { CostaInvestVisualExperience } from './CostaInvestVisualExperience';
import { CostaInvestBannerPack } from './CostaInvestBannerPack';
import { CostaInvestBannerVertical } from './CostaInvestBannerVertical';
import { CostaInvestBannerHorizontal } from './CostaInvestBannerHorizontal';

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
    </Routes>
  );
}

export default App;
