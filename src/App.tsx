import { Routes, Route } from 'react-router-dom';
import { AurumOriginal } from './AurumOriginal';
import { CasasYMarDemo } from './CasasYMarDemo';
import { CostaInvestDemo } from './CostaInvestDemo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AurumOriginal />} />
      <Route path="/casas-y-mar" element={<CasasYMarDemo />} />`r`n      <Route path="/costa-invest" element={<CostaInvestDemo />} />
    </Routes>
  );
}

export default App;
