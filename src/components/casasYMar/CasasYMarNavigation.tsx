import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';

const menuItems = [
  { label: 'Propuesta', href: '#hero' },
  { label: 'Diagnóstico', href: '#diagnosis' },
  { label: 'Propiedades', href: '#collection' },
  { label: 'Servicios', href: '#services' },
  { label: 'Immersphere', href: '#immersphere' },
  { label: 'Tecnología', href: '#technology' },
  { label: 'Piloto', href: '#pilot' },
  { label: 'Contacto', href: '#contact' },
];

export const CasasYMarNavigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const { client } = casasYMarDemo;
  const logoUrl = client.logo.smartUrl || client.logo.url;

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
        animate={{
          backgroundColor: scrolled ? 'rgba(247, 247, 247, 0.92)' : 'transparent',
          borderColor: scrolled ? 'var(--gold)' : 'transparent',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-8 left-0 right-0 z-50 border-b"
        style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="flex items-center gap-3 leading-none"
            whileHover={{ scale: 1.02 }}
          >
            {scrolled ? (
              <>
                <img
                  src={logoUrl}
                  alt={client.name}
                  className="h-10 w-auto object-contain"
                />
                <div className="hidden sm:flex flex-col">
                  <span className="font-headline text-xl" style={{ color: 'var(--text)' }}>
                    {client.name}
                  </span>
                  <span
                    className="font-mono text-[9px] tracking-widest uppercase"
                    style={{ color: 'var(--gold)' }}
                  >
                    {client.location}
                  </span>
                </div>
              </>
            ) : (
              <div className="flex flex-col">
                <span className="font-headline text-2xl text-white">{client.name}</span>
                <span
                  className="font-mono text-[10px] tracking-widest uppercase mt-1"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {client.claim}
                </span>
              </div>
            )}
          </motion.a>

          <div className="hidden lg:flex items-center space-x-7">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="font-body text-sm tracking-wide relative group"
                style={{ color: scrolled ? 'var(--text)' : 'white' }}
                whileHover={{ scale: 1.05 }}
              >
                {item.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: 'var(--gold)' }}
                />
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="px-4 py-2 font-body text-xs tracking-widest uppercase transition-all"
              style={{
                backgroundColor: scrolled ? 'var(--gold)' : 'rgba(166, 139, 91, 0.9)',
                color: scrolled ? 'var(--background)' : 'white',
              }}
            >
              Propiedad piloto
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: scrolled ? 'var(--text)' : 'white' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-6 pt-16">
              <img src={logoUrl} alt={client.name} className="h-16 w-auto mb-4" />
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="font-headline text-2xl"
                  style={{ color: 'var(--text)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <p className="font-mono text-xs tracking-widest uppercase mt-4" style={{ color: 'var(--gold)' }}>
                {client.location}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
