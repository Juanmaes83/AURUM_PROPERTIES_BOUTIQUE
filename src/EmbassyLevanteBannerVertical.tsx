import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';

export const EmbassyLevanteBannerVertical = () => {
  return (
    <>
      <Helmet>
        <title>Banner Vertical · Embassy Levante · Immersphere</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-[#060504] text-[#F7F7F7] flex flex-col items-center justify-center py-12 px-6">

        {/* NAV */}
        <div className="w-full max-w-sm mb-8 flex items-center justify-between">
          <a
            href="/banners/embassy-levante"
            className="flex items-center gap-1.5 text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.18em] uppercase hover:text-[#c4a96a] transition-colors"
          >
            <ArrowLeft size={12} />
            Pack completo
          </a>
          <span className="text-[10px] font-mono text-[#c4a96a]/40 tracking-[0.18em] uppercase">
            9:16 · Stories · Reels
          </span>
        </div>

        {/* BANNER COMPOSITION 9:16 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border border-[#c4a96a]/25 shadow-2xl shadow-black/60"
          style={{ width: '100%', maxWidth: 360, aspectRatio: '9/16' }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(160deg, #0d0b09 0%, #1a1208 30%, #0d0b09 60%, #080604 100%)',
            }}
          />

          {/* Gold accent glow */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 60% at 25% 35%, rgba(196,169,106,0.18) 0%, transparent 60%)',
            }}
          />

          {/* Fine grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* TOP BAR */}
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-5 py-4 border-b border-[#c4a96a]/15">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#c4a96a]" />
              <span className="font-serif text-[#c4a96a] text-base tracking-wide">Embassy Levante</span>
            </div>
            <span className="text-[8px] font-mono text-[#c4a96a]/55 tracking-[0.22em] uppercase">
              INMOBILIARIA
            </span>
          </div>

          {/* MAIN CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center px-6 pt-16 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-[9px] font-mono text-[#c4a96a] tracking-[0.28em] uppercase mb-5">
                TORREVIEJA · COSTA BLANCA
              </p>
              <h2
                className="font-serif text-[#f5f0e8] leading-tight mb-4"
                style={{ fontSize: 'clamp(1.5rem, 6vw, 2.2rem)' }}
              >
                El propietario quiere saber cómo venderéis su vivienda.
              </h2>
              <p className="text-[#9a9080] text-sm leading-relaxed mb-8">
                Captación de propietarios en Torrevieja con impacto visual desde el primer momento. Compra, venta
                y alquiler en la Costa Blanca.
              </p>

              {/* Decorative accent line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-[#c4a96a]/60 to-transparent" />
                <span className="text-[8px] font-mono text-[#c4a96a]/50 tracking-[0.24em] uppercase">
                  Costa Blanca
                </span>
              </div>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2">
                {['Propietarios', 'Captación', 'Torrevieja', 'Costa Blanca'].map((chip) => (
                  <span
                    key={chip}
                    className="text-[8px] font-mono tracking-[0.16em] uppercase border border-[#c4a96a]/30 text-[#c4a96a]/70 px-2.5 py-1.5"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* BOTTOM CTA BAR */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-4"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 60%, transparent 100%)',
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] font-mono text-[#c4a96a]/70 tracking-[0.2em] uppercase">
                  Contacto directo
                </p>
                <p className="text-sm text-[#f5f0e8] font-semibold mt-0.5">+34 691 502 743</p>
                <p className="text-[9px] text-[#7a7068] mt-0.5">luisiglesias@embassylevante.com</p>
              </div>
              <div className="bg-[#c4a96a] text-black text-[9px] font-bold tracking-[0.16em] uppercase px-4 py-2.5 flex flex-col items-center">
                <span>Embassy</span>
                <span>Levante</span>
              </div>
            </div>
          </div>

          {/* Format watermark */}
          <div className="absolute top-1/2 right-3 -translate-y-1/2 text-[7px] font-mono text-[#c4a96a]/20 tracking-[0.2em] uppercase rotate-90 origin-center whitespace-nowrap">
            1080 × 1920 · VERTICAL BANNER
          </div>
        </motion.div>

        {/* SPEC LINE */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-[10px] font-mono text-[#635a50] tracking-[0.18em] uppercase">
            1080 × 1920 px · Formato 9:16 · Stories / Reels / WhatsApp
          </p>
          <a
            href="/banners/embassy-levante"
            className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#c4a96a]/50 hover:text-[#c4a96a] transition-colors tracking-[0.14em] uppercase mt-2"
          >
            <ExternalLink size={11} />
            Ver pack completo
          </a>
        </div>
      </div>
    </>
  );
};
