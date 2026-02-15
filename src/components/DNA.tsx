import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DNA = () => {
  const ref = useRef(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const poeticPhrase = "La piedra respira. La madera late. El sol dibuja.".split(' ');

  useEffect(() => {
    if (!imageContainerRef.current || !imageRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    tl.fromTo(
      imageRef.current,
      { yPercent: -15 },
      { yPercent: 15, ease: 'none' }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="dna"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h3 className="font-headline text-3xl md:text-5xl" style={{ color: 'var(--text)' }}>
          {poeticPhrase.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="font-headline text-4xl md:text-5xl" style={{ color: 'var(--text)' }}>
            DNA: Materials & Light
          </h2>

          <div className="space-y-4 font-body text-base leading-relaxed">
            <p>
              La piedra natural no es solo un material. Es memoria, es tiempo, es la huella de la tierra transformándose en refugio.
            </p>
            <p>
              Trabajamos con maestros artesanos que entienden que la luz mediterránea exige texturas suaves, tonos cálidos, y espacios que respiran.
            </p>
            <p>
              Madera noble, mármol de Macael, terracota a mano: cada elemento es seleccionado para contar una historia de permanencia.
            </p>
          </div>

          <div className="flex space-x-6 font-mono text-sm tracking-widest">
            <span style={{ color: 'var(--gold)' }}>38°35'N</span>
            <span style={{ color: 'var(--gold)' }}>00°01'W</span>
          </div>
        </motion.div>

        <motion.div
          ref={imageContainerRef}
          className="relative h-[500px] overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <img
            ref={imageRef}
            src="/IMAGEN_AURUM_MATERIALES.png"
            alt="DNA Materials"
            loading="lazy"
            className="w-full h-full object-cover"
            style={{ scale: 1.1 }}
          />
        </motion.div>
      </div>
    </section>
  );
};
