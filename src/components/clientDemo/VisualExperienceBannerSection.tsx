import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, QrCode, MapPin, ExternalLink, Image as ImageIcon } from 'lucide-react';

export interface VisualExperienceBannerProps {
  clientName: string;
  clientLocation?: string;
  clientLogo?: string;
  whatsappHref: string;
  phoneHref: string;
  visiblePhone: string;
  /** URL pública del producto final animado, modo embed (iframe). */
  embedUrl?: string;
  /** URL pública del producto final animado, vista standalone. */
  standaloneUrl?: string;
  /** Variantes opcionales si el cliente quiere CTAs específicos por orientación. */
  horizontalUrl?: string;
  verticalUrl?: string;
  /** Fallback mock visual cuando no se pasa embedUrl (o si el iframe falla). */
  previewImage?: string;
  previewSecondaryImage?: string;
  previewTertiaryImage?: string;
  chips?: string[];
  eyebrow?: string;
  title?: string;
  body?: string;
  supportBody?: string;
  primaryCta?: string;
  secondaryCta?: string;
  pieceCta?: string;
  id?: string;
}

const DEFAULTS = {
  eyebrow: 'VISUAL EXPERIENCE BANNER',
  title: 'Experiencia Visual de Propiedad',
  body: 'No es solo una imagen bonita. Es una pieza dinámica con propiedad destacada, galería, QR, llamada a la acción y contacto directo, pensada para redes, escaparate digital, campañas locales o captación de propietarios.',
  supportBody: 'Convierte una propiedad en una experiencia visual rápida, clara y accionable: el usuario ve, entiende, escanea y contacta.',
  primaryCta: 'SÍ, QUIERO UNA PARA MI PROPIEDAD',
  pieceCta: 'VER EXPERIENCIA VISUAL DE PROPIEDAD',
};

/**
 * Client-facing showcase of the personalised visual piece.
 * The internal authoring tool is NEVER linked from here — the preview
 * column embeds the published final product (clean ?embed=1 page).
 * If no embedUrl is provided, falls back to a clean JSX mock built from
 * the client's own assets.
 */
export const VisualExperienceBannerSection = ({
  clientName,
  clientLocation,
  clientLogo,
  whatsappHref,
  phoneHref,
  visiblePhone,
  embedUrl,
  standaloneUrl,
  previewImage,
  previewSecondaryImage,
  previewTertiaryImage,
  chips,
  eyebrow = DEFAULTS.eyebrow,
  title = DEFAULTS.title,
  body = DEFAULTS.body,
  supportBody = DEFAULTS.supportBody,
  primaryCta = DEFAULTS.primaryCta,
  secondaryCta,
  pieceCta = DEFAULTS.pieceCta,
  id = 'visual-experience',
}: VisualExperienceBannerProps) => {
  const resolvedSecondary = secondaryCta ?? `LLAMAR AL ${visiblePhone}`;
  const gallery = [previewSecondaryImage, previewTertiaryImage, previewImage].filter(Boolean) as string[];
  const [iframeFailed, setIframeFailed] = useState(false);
  const showLiveEmbed = !!embedUrl && !iframeFailed;

  return (
    <section
      id={id}
      className="bg-[#0F0F10] text-[#F7F7F7] py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] tracking-[0.32em] text-[#A68B5B] font-mono">
            {eyebrow}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mt-4">{title}</h2>
          <p className="mt-6 text-base md:text-lg text-[#CFCFCF] leading-relaxed">{body}</p>
          <p className="mt-4 text-sm md:text-base text-[#999] leading-relaxed">{supportBody}</p>

          {chips && chips.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((c, i) => (
                <span
                  key={i}
                  className="text-[10px] tracking-[0.18em] uppercase border border-[#A68B5B]/40 text-[#A68B5B] px-3 py-1.5 font-mono"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-black px-7 py-4 text-sm font-bold tracking-[0.12em] uppercase hover:bg-[#1ebe5a] transition-colors"
            >
              <MessageCircle size={18} strokeWidth={2.2} />
              {primaryCta}
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-3 border border-[#A68B5B] text-[#F7F7F7] px-7 py-4 text-sm font-semibold tracking-[0.12em] uppercase hover:bg-[#A68B5B] hover:text-black transition-colors"
            >
              <Phone size={16} strokeWidth={2.2} />
              {resolvedSecondary}
            </a>
          </div>

          {standaloneUrl && (
            <div className="mt-5">
              <a
                href={standaloneUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#A68B5B] hover:text-[#d4b07a] transition-colors border-b border-[#A68B5B]/40 hover:border-[#d4b07a] pb-1 font-semibold"
              >
                {pieceCta}
                <ExternalLink size={13} strokeWidth={2.2} />
              </a>
            </div>
          )}
        </motion.div>

        {/* Preview column · live iframe with the final animated product, mock fallback */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-[9/16] sm:aspect-[4/5] lg:aspect-[3/4] border border-[#A68B5B]/30 bg-[#15120e] overflow-hidden shadow-2xl"
          aria-label={`Experiencia Visual de Propiedad para ${clientName}`}
        >
          {showLiveEmbed ? (
            <>
              <iframe
                src={embedUrl}
                title={`Experiencia Visual de Propiedad ${clientName}`}
                loading="lazy"
                allow="autoplay; fullscreen"
                referrerPolicy="no-referrer-when-downgrade"
                onError={() => setIframeFailed(true)}
                className="absolute inset-0 w-full h-full border-0"
                style={{ backgroundColor: '#080706' }}
              />
              {standaloneUrl && (
                <a
                  href={standaloneUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 right-3 z-10 inline-flex items-center gap-1.5 bg-black/65 hover:bg-black/85 text-white text-[10px] tracking-[0.2em] uppercase px-3 py-2 backdrop-blur-sm transition-colors"
                  aria-label="Abrir Experiencia Visual de Propiedad en pestaña nueva"
                >
                  <ExternalLink size={11} strokeWidth={2.4} />
                  Abrir
                </a>
              )}
            </>
          ) : (
            <>
              {/* Fallback mock — only renders if no embedUrl or iframe fails */}
              {previewImage ? (
                <img
                  src={previewImage}
                  alt={`Propiedad destacada — ${clientName}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#2a2218] to-[#0B0B0C] flex items-center justify-center">
                  <ImageIcon size={64} className="text-[#A68B5B]/30" strokeWidth={1.5} />
                </div>
              )}

              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {clientLogo && (
                    <div className="bg-white/85 px-3 py-2 rounded">
                      <img src={clientLogo} alt={clientName} className="h-7 w-auto" />
                    </div>
                  )}
                  {clientLocation && (
                    <div className="hidden sm:flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-white/90 bg-black/30 px-3 py-1.5 backdrop-blur-sm">
                      <MapPin size={11} strokeWidth={2.4} />
                      {clientLocation}
                    </div>
                  )}
                </div>
                <div className="text-[9px] tracking-[0.28em] uppercase text-[#A68B5B] bg-black/40 px-3 py-1.5 font-mono">
                  Visual Experience Banner
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-24 pb-5 px-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] text-[#A68B5B] font-mono uppercase">
                      Propiedad destacada
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-white mt-1 leading-tight">
                      {clientName}
                    </h3>
                    {clientLocation && (
                      <div className="text-xs text-white/70 mt-1 tracking-wide">{clientLocation}</div>
                    )}
                  </div>

                  <div className="bg-white p-2 flex flex-col items-center gap-1">
                    <QrCode size={56} strokeWidth={1.5} className="text-black" />
                    <div className="text-[7px] uppercase tracking-[0.18em] text-black/70 font-mono">
                      Escanear
                    </div>
                  </div>
                </div>

                {gallery.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-1.5">
                    {gallery.slice(0, 3).map((src, i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] overflow-hidden border border-white/15 bg-black/40"
                      >
                        <img
                          src={src}
                          alt={`Galería ${i + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};
