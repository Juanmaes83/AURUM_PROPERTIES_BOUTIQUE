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

  return (
    <>
      <motion.nav
        initial={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
        animate={{
          backgroundColor: scrolled ? 'rgba(247, 247, 247, 0.9)' : 'transparent',
          borderColor: scrolled ? 'var(--gold)' : 'transparent',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-8 left-0 right-0 z-50 border-b"
        style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="flex flex-col leading-none"
            whileHover={{ scale: 1.02 }}
          >
            <span
              className="font-headline text-2xl"
              style={{ color: scrolled ? 'var(--text)' : 'white' }}
            >
              {casasYMarDemo.client.name}
            </span>
            <span
              className="font-mono text-[10px] tracking-widest uppercase mt-1"
              style={{ color: scrolled ? 'var(--gold)' : 'rgba(255,255,255,0.8)' }}
            >
              {casasYMarDemo.client.location}
            </span>
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
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
            className="md:hidden"
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
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 pt-16">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="font-headline text-3xl"
                  style={{ color: 'var(--text)' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
