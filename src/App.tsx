import { Routes, Route } from 'react-router-dom';
import { AurumOriginal } from './AurumOriginal';
import { CasasYMarDemo } from './CasasYMarDemo';
import { CostaInvestDemo } from './CostaInvestDemo';
import { CostaInvestWebCompleta } from './CostaInvestWebCompleta';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AurumOriginal />} />
      <Route path="/casas-y-mar" element={<CasasYMarDemo />} />
      <Route path="/costa-invest" element={<CostaInvestDemo />} />
      <Route path="/costa-invest-web-completa" element={<CostaInvestWebCompleta />} />
    </Routes>
  );
}

export default App;
