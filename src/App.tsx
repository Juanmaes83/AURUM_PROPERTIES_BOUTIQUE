import { CustomCursor } from './components/CustomCursor';
import { GridOverlay } from './components/GridOverlay';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { AboutUs } from './components/AboutUs';
import { Collection } from './components/Collection';
import { Services } from './components/Services';
import { DNA } from './components/DNA';
import { Legacy } from './components/Legacy';
import { VIPCard } from './components/VIPCard';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ConciergeButton } from './components/ConciergeButton';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <>
      <GridOverlay />
      <CustomCursor />
      <ConciergeButton />
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <AboutUs />
        <Collection />
        <Services />
        <DNA />
        <Legacy />
        <VIPCard />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
