import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Collection } from './components/Collection';
import { Services } from './components/Services';
import { DNA } from './components/DNA';
import { Contact } from './components/Contact';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <Philosophy />
        <Collection />
        <Services />
        <DNA />
        <Contact />
      </main>
    </>
  );
}

export default App;
