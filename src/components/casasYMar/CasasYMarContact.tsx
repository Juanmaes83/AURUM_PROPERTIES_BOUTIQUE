import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { casasYMarDemo } from '../../data/clientDemos/casasYMar';
import { MapPin, Phone, Smartphone, Mail, Globe, Calendar, ArrowRight, BadgeCheck } from 'lucide-react';

export const CasasYMarContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { client, contact, ctas } = casasYMarDemo;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Casas y Mar form submitted:', formData);
  };

  const contactItems = [
    { icon: MapPin, label: 'Dirección', value: client.address, href: '#' },
    { icon: Phone, label: 'Teléfono fijo', value: client.phone, href: `tel:${client.phone.replace(/\s/g, '')}` },
    { icon: Smartphone, label: 'WhatsApp', value: client.whatsapp, href: `https://wa.me/${client.whatsapp.replace(/\D/g, '')}` },
    { icon: Mail, label: 'Email', value: client.email, href: `mailto:${client.email}` },
    { icon: Globe, label: 'Web', value: client.website, href: client.website },
    { icon: BadgeCheck, label: 'RAICV', value: client.raicv, href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-8 py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/IMAGEN_AURUM_CONTACTO.png)' }}
      />
      <div className="absolute inset-0 bg-black opacity-50" />

      <motion.div
        className="relative z-10 max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="text-white space-y-8">
          <div>
            <div className="inline-block bg-white/90 rounded-lg px-4 py-2 mb-6">
              <img
                src={client.logo.url}
                alt={client.name}
                className="h-12 w-auto object-contain"
              />
            </div>
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: 'var(--gold)' }}>
              Contacto
            </span>
            <h2 className="font-headline text-4xl md:text-5xl mt-4">{contact.title}</h2>
            <p className="font-body mt-4 text-white/80 leading-relaxed">{contact.subtitle}</p>
          </div>

          <div className="space-y-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const isExternal = item.label === 'Web' || item.label === 'WhatsApp';
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 group"
                >
                  <Icon size={20} style={{ color: 'var(--gold)' }} />
                  <div>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-white/50">{item.label}</p>
                    <p className="font-body text-white group-hover:text-[var(--gold)] transition-colors">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <a
            href={`https://wa.me/${client.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 font-body text-sm tracking-widest uppercase transition-all hover:scale-105"
            style={{ backgroundColor: 'var(--gold)', color: '#1A1A1A' }}
          >
            <Calendar size={16} />
            {ctas[0].label}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 backdrop-blur-md p-8 border border-white/20">
          <input
            type="text"
            placeholder="Nombre"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/70 font-body focus:outline-none focus:border-white/60 transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/70 font-body focus:outline-none focus:border-white/60 transition-all"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/70 font-body focus:outline-none focus:border-white/60 transition-all"
          />
          <textarea
            placeholder="¿Qué propiedad te gustaría convertir en demo inmersiva?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-5 py-4 bg-white/10 border border-white/30 text-white placeholder-white/70 font-body focus:outline-none focus:border-white/60 transition-all resize-none"
          />
          <motion.button
            type="submit"
            className="w-full px-8 py-4 font-body text-sm tracking-wide flex items-center justify-center gap-2 transition-all"
            style={{ backgroundColor: 'var(--gold)', color: '#1A1A1A' }}
            whileHover={{ backgroundColor: '#B89B6B' }}
          >
            Enviar solicitud
            <ArrowRight size={16} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};
