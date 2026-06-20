import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowLeft } from 'lucide-react';

export const SandhouseBannerHorizontal = () => {
  return (
    <>
      <Helmet>
        <title>Banner Horizontal · Sandhouse Inmobiliaria · Immersphere</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-[#060504] text-[#F7F7F7] flex flex-col items-center justify-center py-12 px-6">

        {/* NAV */}
        <div className="w-full max-w-3xl mb-8 flex items-center justify-between">
          <a
            href="/banners/sandhouse-inmobiliaria"
            className="flex items-center gap-1.5 text-[10px] font-mono text-[#c4a96a]/60 tracking-[0.18em] uppercase hover:text-[#c4a96a] transition-colors"
          >
            <ArrowLeft size={12} />
            Pack completo
          </a>
          <span className="text-[10px] font-mono text-[#c4a96a]/40 tracking-[0.18em] uppercase">
            16:9 · Display · YouTube
          </span>
        </div>

        {/* BANNER COMPOSITION 16:9 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden border border-[#c4a96a]/25 shadow-2xl shadow-black/60"
          style={{ width: '100%', maxWidth: 720, aspectRatio: '16/9' }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, #080604 0%, #1c1409 35%, #0f0c07 65%, #070504 100%)',
            }}
          />

          {/* Gold accent glow — left */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 50% 80% at 15% 50%, rgba(196,169,106,0.16) 0%, transparent 55%)',
            }}
          />

          {/* Fine grid texture */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }}
          />

          {/* Vertical divider */}
          <div className="absolute top-0 bottom-0 left-[55%] w-px bg-gradient-to-b from-transparent via-[#c4a96a]/20 to-transparent" />

          {/* LEFT CONTENT */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 pr-[47%]">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c4a96a]" />
                <span className="font-serif text-[#c4a96a] text-lg tracking-wide">Sandhouse</span>
                <span className="text-[8px] font-mono text-[#c4a96a]/55 tracking-[0.22em] uppercase ml-1">
                  INMOBILIARIA
                </span>
              </div>

              <h2
                className="font-serif text-[#f5f0e8] leading-tight mb-3"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.7rem)' }}
              >
                Tu hogar en Torrevieja y la Costa Levantina.
              </h2>
              <p className="text-[#8a8078] leading-relaxed" style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)' }}>
                Agencia inmobiliaria con atencion personalizada en Torrevieja, Costa Blanca y Costa Levantina.
              </p>

              <div className="flex items-center gap-3 mt-5">
                <div className="h-px w-8 bg-[#c4a96a]/50" />
                <span className="text-[8px] font-mono text-[#c4a96a]/60 tracking-[0.2em] uppercase">
                  Costa Blanca
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-between py-6 px-6" style={{ left: '57%' }}>
            <div className="flex flex-wrap gap-1.5">
              {['Compra', 'Venta', 'Asesoramiento'].map((chip) => (
                <span
                  key={chip}
                  className="text-[7px] font-mono tracking-[0.14em] uppercase border border-[#c4a96a]/30 text-[#c4a96a]/65 px-2 py-1"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div>
              <p className="text-[8px] font-mono text-[#c4a96a]/60 tracking-[0.2em] uppercase mb-3">
                TORREVIEJA · C/ LANZAROTE 21
              </p>
              <div className="space-y-1 mb-5">
                <p className="text-[9px] text-[#9a9080]">+34 655 187 116</p>
                <p className="text-[9px] text-[#9a9080]">info@sandhouse.es</p>
              </div>
              <div className="bg-[#c4a96a] text-black text-[9px] font-bold tracking-[0.16em] uppercase px-4 py-2.5 inline-block">
                sandhouse.es
              </div>
            </div>

            <p className="text-[7px] font-mono text-[#c4a96a]/25 tracking-[0.14em] uppercase text-right">
              Lun–Vie 9–14 / 17–20 · Sáb 9–14
            </p>
          </div>

          {/* Format watermark */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[6px] font-mono text-[#c4a96a]/15 tracking-[0.18em] uppercase whitespace-nowrap">
            1920 × 1080 · HORIZONTAL BANNER · 16:9
          </div>
        </motion.div>

        {/* SPEC LINE */}
        <div className="mt-6 text-center space-y-1">
          <p className="text-[10px] font-mono text-[#635a50] tracking-[0.18em] uppercase">
            1920 × 1080 px · Formato 16:9 · Display / YouTube / Presentaciones
          </p>
          <a
            href="/banners/sandhouse-inmobiliaria"
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
