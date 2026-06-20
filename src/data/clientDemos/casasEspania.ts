export const casasEspaniaDemo = {
  client: {
    name: 'Casas Espania',
    sector: 'Inmobiliaria · Torrevieja',
    location: 'Torrevieja · Costa Blanca · Alicante',
    website: 'https://casasespania.com/',
    phone: '+34 966 785 202',
    whatsapp: '+34 966 785 202',
    email: 'info@casasespania.com',
    address: 'Torrevieja, Alicante',
    claim:
      'El propietario quiere saber cómo venderéis su vivienda. Immersphere lo muestra antes de firmar.',
    logo: {
      url: 'https://casasespania.com/media/images/website/new-websitelogo.svg',
      status: 'public_candidate_pending_validation' as const,
      notes:
        'Logo descargado desde la web pública de Casas Espania (casasespania.com/media/images/website/new-websitelogo.svg). Se usa como asset candidato hasta validación oficial por parte del cliente.',
    },
  },
  audit: {
    score: 62,
    priority: 'B',
    strengths: [
      'Contacto directo verificado: teléfono y email del responsable confirmados',
      'Presencia activa en Torrevieja, uno de los mercados más activos de la Costa Blanca',
      'Web con listado de propiedades y contacto directo al agente',
      'Necesidad identificada: argumento visual para captación de propietarios',
    ],
    opportunities: [
      'Mostrar al propietario cómo se presentará su vivienda antes de firmar',
      'Crear experiencia visual que diferencia a Casas Espania de la competencia local',
      'Convertir la captación de propietarios en un proceso visual y mensurable',
    ],
  },
  hero: {
    headline: 'La agencia que muestra cómo venderá tu vivienda antes de firmar.',
    subheadline:
      'Una propuesta visual para Casas Espania que convierte el argumento de captación en una experiencia revisable antes de cualquier compromiso.',
    badge: 'Propuesta comercial · Casas Espania',
    primaryCta: 'Revisar propuesta visual',
    secondaryCta: 'Ver experiencia visual',
  },
  comparison: {
    eyebrow: 'DIAGNÓSTICO COMERCIAL',
    title: 'Torrevieja tiene compradores. La diferencia está en el argumento visual al propietario.',
    body:
      'Casas Espania ya tiene contacto directo y presencia en Torrevieja. La oportunidad está en mostrar al propietario — antes de firmar — exactamente cómo se presentará su vivienda con un sistema visual de impacto.',
    primaryCta: 'VER WEB ACTUAL',
    bullets: [
      'Mercado activo: Torrevieja concentra alta demanda de vivienda vacacional y residencial',
      'Captación de propietarios: el agente que muestra primero cómo venderá la vivienda, capta antes',
      'Oportunidad: cada propiedad puede convertirse en una pieza enviable por WhatsApp antes de firmar',
      'Resultado: más propietarios cualificados, menos negociación de mandato, más confianza',
    ],
  },
  visualExperience: {
    embedUrl:
      'https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/casas-espania/?embed=1',
    standaloneUrl:
      'https://aurum-properties-boutique.vercel.app/visual-experience/casas-espania',
    previewImage: '/IMAGEN_AURUM_HEROWEB.png',
    previewSecondaryImage: '/IMAGEN_AURUM_INTERIORES.png',
    previewTertiaryImage: '/IMAGEN_AURUM_ESTILODEVIDA.png',
    chips: ['Captación propietarios', 'Torrevieja', 'WhatsApp', 'Costa Blanca', 'Argumento visual'],
    eyebrow: 'EXPERIENCIA VISUAL DE CAPTACIÓN',
    title: 'Muéstrale al propietario cómo quedará su vivienda antes de firmar.',
    body:
      'La pieza convierte la presentación de Casas Espania en un activo visual: movimiento, claim, CTA y contacto directo desde móvil. Lista para WhatsApp, captación de propietarios y escaparate digital.',
    supportBody:
      'Pensada para propietarios que comparan agencias. La experiencia visual reduce la fricción de mandato y acelera la primera decisión.',
    primaryCta: 'QUIERO UNA EXPERIENCIA PARA MI PROPIEDAD',
    secondaryCta: 'LLAMAR A CASAS ESPANIA',
    pieceCta: 'ABRIR EXPERIENCIA VISUAL',
  },
  immersphereServices: {
    primaryHref: 'https://juanmaes83.github.io/IMMERSPHERE-PRO-INMOBILIARIAS/index.html',
    eyebrow: 'SISTEMA IMMERSIVE SALES',
    title: 'Un sistema replicable para captación, campañas y presentación de propiedades.',
    body:
      'La experiencia visual puede convertirse en un flujo recurrente para Casas Espania: propiedad piloto, QR, landing, WhatsApp, campaña y seguimiento comercial desde CRM.',
    secondary:
      'No sustituye la web actual: crea activos de captación que el agente puede enviar y medir.',
    primaryCta: 'VER SISTEMA IMMERSIVE',
  },
  highIntentContact: {
    primaryHref:
      'https://wa.me/34966785202?text=Hola%2C%20quiero%20ver%20la%20propuesta%20visual%20de%20Casas%20Espania%20y%20c%C3%B3mo%20aplicarla%20a%20la%20captaci%C3%B3n%20de%20propietarios.',
    secondaryHref: 'tel:+34966785202',
    eyebrow: 'SIGUIENTE PASO',
    title: 'Elegir una propiedad piloto y mostrarle al propietario cómo quedará.',
    body:
      'La propuesta más directa es empezar con una propiedad concreta de Casas Espania, crear la experiencia visual y usarla como argumento de captación en la primera reunión con el propietario.',
    primaryCta: 'REVISAR PROPUESTA POR WHATSAPP',
    secondaryCta: 'LLAMAR A CASAS ESPANIA',
    microcopy:
      'Propuesta conceptual basada en datos públicos confirmados. Pendiente de revisión y validación por Casas Espania.',
  },
  salesContact: {
    visiblePhone: '+34 966 785 202',
  },
  assets: {
    images: [
      '/IMAGEN_AURUM_HEROWEB.png',
      '/IMAGEN_AURUM_INTERIORES.png',
      '/IMAGEN_AURUM_ESTILODEVIDA.png',
    ],
    lifestyle: ['/IMAGEN_AURUM_ESTILODEVIDA.png', '/IMAGEN_AURUM_HEROWEB.png'],
    status: 'placeholder_pending_client_assets' as const,
    notes:
      'Assets visuales placeholder (imágenes genéricas AURUM) hasta que Casas Espania aporte fotos reales de sus propiedades en Torrevieja.',
  },
};
