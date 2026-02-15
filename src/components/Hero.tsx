import { motion } from 'framer-motion';

export const Hero = () => {
  const headline = "Cuando la piedra busca el sol, se convierte en hogar.".split(' ');

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/VIDEO_AURUM_HEROWEB.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-20" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="font-headline text-4xl md:text-6xl lg:text-7xl text-white mb-6 max-w-5xl"
          initial="hidden"
          animate="visible"
        >
          {headline.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-3"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-white opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: headline.length * 0.08 + 0.3, duration: 0.8 }}
        >
          Curando historias de vida en la costa de Altea.
        </motion.p>
      </div>
    </section>
  );
};
