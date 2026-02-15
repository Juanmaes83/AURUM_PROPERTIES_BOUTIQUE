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
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <>
      <GridOverlay />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <AboutUs />
        <Collection />
        <Services />
        <DNA />
        <Legacy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
