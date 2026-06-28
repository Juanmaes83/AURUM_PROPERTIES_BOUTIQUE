export const casasYMarDemo = {
  client: {
    name: 'Casas y Mar',
    legalName: 'Casas y Mar Servicios Inmobiliarios, SL',
    sector: 'Inmobiliaria',
    location: 'Torrevieja · Costa Blanca Sur',
    website: 'https://casasymar.com/',
    phone: '+34 965 714 261',
    mobile: '+34 629 581 574',
    whatsapp: '+34 629 581 574',
    email: 'contactos@casasymar.es',
    address: 'Avda. Habaneras 121 · Torrevieja (Alicante) 03182',
    raicv: '1058',
    claim: 'Tu sueño, nuestra pasión',
    social: {
      youtube: 'https://www.youtube.com/user/casasymar/',
    },
    logo: {
      url: '/casasymar/website-logo.svg',
      smartUrl: '/casasymar/website-logo-smart.svg',
      footerUrl: '/casasymar/website-logo-footer.svg',
      status: 'pending_validation' as const,
      notes:
        'Logo descargado como SVG desde la web pública de Casas y Mar (https://casasymar.com/media/images/website/website-logo.svg). Se usa como asset candidato hasta validación oficial por parte del cliente.',
    },
  },
  brand: {
    typographyMode: 'use_aurum_hierarchy_unless_client_fonts_detected',
    colors: {
      primary: '#A68B5B',
      background: '#F7F7F7',
      text: '#1A1A1A',
    },
    notes:
      'Mantener la tipografía y jerarquía visual premium de AURUM (Cormorant Garamond + Inter + JetBrains Mono) salvo que el cliente proporcione una identidad tipográfica clara.',
  },
  audit: {
    score: 80,
    opportunityScore: 68,
    confidence: 'alta',
    strengths: [
      'Web operativa con catálogo de propiedades',
      'Formulario de contacto activo',
      'WhatsApp integrado',
      'Teléfono y email visibles',
      'CTA claro de contacto',
      'Buena reputación Google (4.9/5, +545 reseñas)',
      'Alto volumen comercial (+100 casas/año, +400 colaboradores)',
      'Más de 25 años de experiencia en el mercado local',
      'Blog/Noticias activo en la web pública',
    ],
    weaknesses: [
      'No se detectan tours virtuales/360 en la muestra analizada',
      'No se detectan hotspots interactivos en fichas',
      'No se confirma QR para escaparate/folleto/WhatsApp',
      'No se confirma plano/floorplan interactivo',
      'No se confirma experiencia guiada remota',
      'El vídeo detectado no está conectado claramente a una experiencia medible',
    ],
    opportunities: [
      'Convertir propiedades destacadas en experiencias navegables desde móvil',
      'Conectar vídeo existente con landing/tour/CTA',
      'Usar una propiedad premium como demo piloto inmersiva',
      'Evolucionar el blog actual hacia guías locales estratégicas de captación',
      'Crear landing de captación de propietarios',
    ],
    detectedSignals: [
      'Páginas revisadas: home, contacto, propiedades, noticias',
      'Propiedades: Sí',
      'Visita / Contacto: Sí',
      'WhatsApp: Sí',
      'Formulario: Sí',
      'Teléfono: Sí',
      'Email: Sí',
      'Blog / Noticias: Sí',
      'Vídeo: señales detectadas',
    ],
    missingSignals: ['Tour/360', 'Hotspots', 'QR', 'Floorplan interactivo', 'Guided visit'],
  },
  stats: [
    { value: '+100', label: 'casas vendidas al año' },
    { value: '4.9', label: 'sobre 5 en Google (+545 reseñas)' },
    { value: '+400', label: 'colaboradores' },
    { value: '25+', label: 'años de experiencia' },
  ],
  zones: ['Torrevieja', 'La Mata', 'San Miguel de Salinas', 'Orihuela Costa'],
  propertyTypes: ['Apartamentos', 'Bungalows', 'Chalets adosados', 'Villas'],
  assets: {
    clientImages: [
      {
        url: '/casasymar/banner_3.jpg',
        source: 'https://casasymar.com/propiedades/',
        usage: 'hero_alternative / property_showcase',
        status: 'public_candidate_pending_validation' as const,
      },
      {
        url: '/casasymar/news_1.jpg',
        source: 'https://casasymar.com/noticias/',
        usage: 'blog_card / collection_card',
        status: 'public_candidate_pending_validation' as const,
      },
      {
        url: '/casasymar/news_2.jpg',
        source: 'https://casasymar.com/noticias/',
        usage: 'collection_card / premium_ficha',
        status: 'public_candidate_pending_validation' as const,
      },
      {
        url: '/casasymar/news_thumb_1.jpg',
        source: 'https://casasymar.com/noticias/250/es-2026-un-buen-momento-para-comprar-vivienda-en-la-costa-blanca/',
        usage: 'blog_card',
        status: 'public_candidate_pending_validation' as const,
      },
      {
        url: '/casasymar/news_thumb_2.jpg',
        source: 'https://casasymar.com/noticias/249/propiedades-en-venta-en-torrevieja-seleccion-top/',
        usage: 'blog_card',
        status: 'public_candidate_pending_validation' as const,
      },
    ],
    clientVideos: [],
    aurumPlaceholders: [
      { name: 'Hero video', path: '/VIDEO_AURUM_HEROWEB.mp4', usage: 'hero_background' },
      { name: 'Contact background', path: '/IMAGEN_AURUM_CONTACTO.png', usage: 'contact_section' },
      { name: 'Collection 1', path: '/IMAGEN_AURUM_HEROWEB.png', usage: 'property_card' },
      { name: 'Collection 2', path: '/IMAGEN_AURUM_HEROWEB_3.png', usage: 'property_card' },
      { name: 'Collection 3', path: '/IMAGEN_AURUM_INTERIORES.png', usage: 'property_card' },
      { name: 'Collection 4', path: '/IMAGEN_AURUM_INTERIORES_2.png', usage: 'property_card' },
      { name: 'Collection 5', path: '/IMAGEN_AURUM_MATERIALES.png', usage: 'property_card' },
      { name: 'Collection 6', path: '/IMAGEN_AURUM_MATERIALES_2.png', usage: 'property_card' },
    ],
    notes:
      'Los assets descargados desde la web pública de Casas y Mar se usan como candidatos pendientes de validación. Las imágenes y vídeos AURUM restantes se mantienen como placeholders premium de demostración. Deben sustituirse por activos autorizados de Casas y Mar antes de lanzar la web final.',
  },
  hero: {
    headline: 'Propiedades que se recorren antes de visitarse.',
    subheadline:
      'Una propuesta premium para convertir la experiencia digital de Casas y Mar en una visita previa inmersiva: tour 360, vídeo, QR, plano y captación desde móvil.',
    locationLine: 'Casas y Mar · Torrevieja · Costa Blanca Sur',
    primaryCta: 'Ver tecnología Immersphere',
    secondaryCta: 'Elegir propiedad piloto',
    badge: 'Preview privada · Casas y Mar',
  },
  diagnosis: {
    title: 'Diagnóstico personalizado',
    body: 'Casas y Mar ya cuenta con web, contacto, WhatsApp, formulario, catálogo de propiedades y blog/noticias activo. La oportunidad no está en empezar desde cero, sino en elevar la presentación de los inmuebles clave: transformar las propiedades destacadas en experiencias navegables que preparan al comprador antes de llamar, escribir o visitar.',
    badges: [
      { label: 'Web auditada', status: 'ok' },
      { label: 'Propiedades detectadas', status: 'ok' },
      { label: 'WhatsApp detectado', status: 'ok' },
      { label: 'Formulario detectado', status: 'ok' },
      { label: 'Blog / Noticias activo', status: 'ok' },
      { label: 'Tour 360 no detectado', status: 'missing' },
      { label: 'Oportunidad Immersphere', status: 'opportunity' },
    ],
  },
  beforeAfter: {
    title: 'Antes / Después',
    before: {
      title: 'Antes',
      items: [
        'Fichas de propiedades estáticas',
        'Fotos y contacto básico',
        'Vídeo no conectado a experiencia medible',
        'Blog con potencial SEO sin estrategia de captación',
        'Comprador todavía frío antes de la visita',
      ],
    },
    after: {
      title: 'Después',
      items: [
        'Ficha premium navegable',
        'Tour 360 por inmueble',
        'Hotspots con detalles y CTA',
        'Vídeo corto conectado a landing',
        'QR para escaparate, WhatsApp y folleto',
        'Blog evolucionado a guías locales de captación',
        'Lead más cualificado antes de visitar',
      ],
    },
  },
  propertyShowcase: {
    title: 'Vivienda destacada en Torrevieja',
    subtitle: 'Preview conceptual · Precio bajo consulta',
    image: '/casasymar/news_2.jpg',
    imageStatus: 'public_candidate_pending_validation' as const,
    features: ['3 dormitorios', '2 baños', 'Terraza', 'Zona comunitaria', 'Cerca del mar'],
    modules: [
      { label: 'Tour 360', status: 'included' },
      { label: 'Vídeo corto', status: 'included' },
      { label: 'Plano', status: 'included' },
      { label: 'QR', status: 'included' },
      { label: 'Hotspots', status: 'included' },
    ],
    ctas: ['Solicitar visita', 'Enviar por WhatsApp'],
  },
  properties: [
    {
      name: 'Casa en Torretas',
      type: 'Casa',
      zone: 'Torrevieja · Torretas',
      price: 'Precio bajo consulta',
      status: 'public_candidate_pending_validation' as const,
      notes: 'Tipología detectada en el catálogo público de Casas y Mar. Pendiente de validación como ficha real.',
    },
    {
      name: 'Apartamento en Las Calas',
      type: 'Apartamento',
      zone: 'Torrevieja · Las Calas',
      price: 'Precio bajo consulta',
      status: 'public_candidate_pending_validation' as const,
      notes: 'Tipología detectada en el catálogo público de Casas y Mar. Pendiente de validación como ficha real.',
    },
    {
      name: 'Apartamento en Centro - Muelle Pesquero',
      type: 'Apartamento',
      zone: 'Torrevieja · Centro',
      price: 'Precio bajo consulta',
      status: 'public_candidate_pending_validation' as const,
      notes: 'Tipología detectada en el catálogo público de Casas y Mar. Pendiente de validación como ficha real.',
    },
    {
      name: 'Chalet adosado en Torrevieja',
      type: 'Chalet adosado',
      zone: 'Torrevieja',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder' as const,
      notes: 'Propiedad tipo basada en tipologías públicas de Casas y Mar. Pendiente de validación con el cliente.',
    },
    {
      name: 'Bungalow en La Mata',
      type: 'Bungalow',
      zone: 'La Mata',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder' as const,
      notes: 'Propiedad tipo basada en tipologías públicas de Casas y Mar. Pendiente de validación con el cliente.',
    },
    {
      name: 'Villa con vistas al mar',
      type: 'Villa',
      zone: 'Orihuela Costa',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder' as const,
      notes: 'Propiedad tipo basada en tipologías públicas de Casas y Mar. Pendiente de validación con el cliente.',
    },
  ],
  services: {
    current: [
      {
        icon: 'Home',
        title: 'Venta de propiedades',
        description:
          'Amplia selección de apartamentos, bungalows, chalets y villas en Torrevieja y alrededores.',
      },
      {
        icon: 'Handshake',
        title: 'Acompañamiento integral',
        description:
          'Te acompañamos desde la búsqueda hasta la firma de escrituras con un servicio personalizado.',
      },
      {
        icon: 'MessageCircle',
        title: 'Contacto y WhatsApp',
        description: 'Atención directa por teléfono, email, formulario y WhatsApp para resolver dudas.',
      },
      {
        icon: 'Search',
        title: 'Búsqueda por zona',
        description: 'Cobertura en Torrevieja, La Mata, San Miguel de Salinas y Orihuela Costa.',
      },
    ],
    improved: [
      {
        icon: 'Scan',
        title: 'Tour 360 Immersphere',
        description: 'Recorrido virtual navegable por cada estancia, accesible desde cualquier móvil.',
      },
      {
        icon: 'MousePointerClick',
        title: 'Hotspots interactivos',
        description: 'Puntos de información dentro del tour con acabados, medidas y CTA de contacto.',
      },
      {
        icon: 'Video',
        title: 'Video Property Pack',
        description: 'Reel corto conectado a una landing de propiedad medible y compartible.',
      },
      {
        icon: 'QrCode',
        title: 'QR para escaparate y folleto',
        description: 'Código dinámico que abre la experiencia inmersiva desde escaparate, cartel o email.',
      },
      {
        icon: 'Map',
        title: 'Floorplan-ready',
        description: 'Plano interactivo sincronizado con el tour para entender la distribución.',
      },
      {
        icon: 'Users',
        title: 'Captación de propietarios',
        description: 'Landing específica para quienes quieren vender en Torrevieja con diagnóstico gratuito.',
      },
      {
        icon: 'Headphones',
        title: 'Live Guided Visit',
        description: 'Visita guiada remota en la que un agente acompaña al comprador por el tour.',
      },
      {
        icon: 'BookOpen',
        title: 'Blog / guías locales',
        description: 'Evolución del blog actual hacia contenido SEO/GEO sobre compra, venta y zonas de Torrevieja.',
      },
    ],
  },
  immersphereModules: [
    {
      title: 'Tour 360 Immersphere',
      benefit: 'El comprador entra en la vivienda desde su móvil antes de la visita física.',
      application: 'Aplicar a la propiedad piloto de Casas y Mar en Torrevieja.',
      status: 'incluido' as const,
    },
    {
      title: 'Hotspots interactivos',
      benefit: 'Detalles, acabados y CTA en cada punto clave del recorrido.',
      application: 'Materiales, orientación, zonas comunes y distribución.',
      status: 'incluido' as const,
    },
    {
      title: 'Video Property Pack',
      benefit: 'Vídeo corto que se convierte en landing de captación medible.',
      application: 'Reutilizar y conectar el vídeo detectado en la auditoría.',
      status: 'incluido' as const,
    },
    {
      title: 'QR escaparate / WhatsApp / folleto',
      benefit: 'Cualquier soporte físico abre la experiencia digital.',
      application: 'Escaparate de Habaneras 121, folletos, carteles y email.',
      status: 'incluido' as const,
    },
    {
      title: 'Floorplan-ready',
      benefit: 'Plano sincronizado con el tour para reducir dudas de distribución.',
      application: 'Incluir en la ficha premium de la propiedad piloto.',
      status: 'opcional' as const,
    },
    {
      title: 'Captación de propietarios',
      benefit: 'Atraer mejor producto inmobiliario antes de venderlo.',
      application: 'Landing "Valora tu vivienda en Torrevieja".',
      status: 'fase_siguiente' as const,
    },
    {
      title: 'Live Guided Visit',
      benefit: 'Visita remota guiada por un agente dentro del tour.',
      application: 'Primera toma de contacto cualificada sin desplazamiento.',
      status: 'opcional' as const,
    },
    {
      title: 'Blog / guías locales',
      benefit: 'SEO local y confianza para compradores y propietarios.',
      application: 'Guías de Torrevieja, compra, venta y segunda residencia.',
      status: 'fase_siguiente' as const,
    },
  ],
  pilot: {
    title: 'Propiedad piloto',
    subtitle: 'Elegir una vivienda concreta de Casas y Mar y convertirla en demo navegable desde móvil en 3-7 días.',
    steps: [
      'Selección de propiedad con Casas y Mar',
      'Recogida de material necesario (fotos, plano, vídeo, datos)',
      'Producción de tour 360, vídeo corto y QR',
      'Publicación de landing de propiedad inmersiva',
      'Distribución por WhatsApp, escaparate y campañas',
    ],
  },
  blogGuides: {
    headline: 'Blog / guías locales',
    intro:
      'Casas y Mar ya cuenta con contenido y noticias activas. La oportunidad es evolucionar ese blog actual hacia una estrategia SEO/GEO local orientada a captación de compradores y propietarios.',
    guides: [
      { title: 'Guía para comprar vivienda en Torrevieja', category: 'Comprar' },
      { title: 'Cómo vender mejor una vivienda en Costa Blanca Sur', category: 'Vender' },
      { title: 'Zonas de Torrevieja para segunda residencia', category: 'Zonas' },
      { title: 'Checklist antes de visitar una propiedad', category: 'Visitar' },
      { title: 'Cómo preparar una propiedad piloto con tour 360 y QR', category: 'Tecnología' },
    ],
  },
  technology: {
    title: 'Tecnología aplicada a la propuesta',
    intro:
      'Una capa visual inmersiva para convertir propiedades en experiencias navegables, medibles y compartibles.',
    items: [
      {
        name: 'Immersphere Pro',
        description:
          'La capa inmersiva para convertir propiedades en experiencias navegables: tour 360, hotspots, QR, captación y visita guiada.',
        href: 'https://immersphere-pro-crm.vercel.app/',
        cta: 'Ver tecnología Immersphere',
      },
    ],
  },
  ownerCapture: {
    title: '¿Quieres vender tu vivienda en Torrevieja?',
    subtitle: 'No solo vendemos propiedades: captamos el mejor producto para nuestros compradores.',
    cta: 'Valora tu vivienda',
    secondary: 'Compara con tu web actual',
    secondaryHref: 'https://casasymar.com/',
  },
  qrDistro: {
    title: 'QR y distribución',
    subtitle: 'Conecta cualquier soporte físico con la experiencia inmersiva de una propiedad.',
    channels: ['Escaparate', 'Folleto', 'WhatsApp', 'Cartel', 'Email', 'Campañas Meta/Google'],
  },
  ctas: [
    {
      label: 'Preparar propiedad piloto',
      href: '#contact',
      variant: 'primary',
    },
    {
      label: 'Ver alcance del Pack Inmobiliaria 360',
      href: '#immersphere',
      variant: 'secondary',
    },
    {
      label: 'Ver servicios Immersphere',
      href: 'https://immersphere-pro-crm.vercel.app/servicios',
      variant: 'external',
    },
    {
      label: 'Compara con tu web actual',
      href: 'https://casasymar.com/',
      variant: 'external',
    },
  ],
  contact: {
    title: 'Contacto',
    subtitle: 'Hablemos de cómo convertir una propiedad de Casas y Mar en una experiencia inmersiva.',
  },
  footer: {
    disclaimer:
      'Propuesta visual conceptual privada basada en información pública/auditada. La demo final debe producirse con activos autorizados, imágenes aprobadas e información comercial validada por Casas y Mar.',
  },
  commercial: {
    recommendedPack: 'Pack Inmobiliaria 360',
    hookService: 'Reel de propiedad + tour 360 piloto',
    priceRange: 'Piloto 450-900 € / mensualidad 150-490 €',
    deliveryTime: '3-7 días por propiedad piloto',
    upsell: 'Web Premium inmobiliaria + campañas Meta/Google + SEO/GEO local',
  },

  // ── Reusable conversion blocks (FASE 4A.7) ─────────────────────────────────
  // These blocks are designed to be reused across future client demos.
  // Casas y Mar is the first pilot instance.

  salesContact: {
    whatsapp: '+34629554870',
    whatsappDigits: '34629554870',
    phone: '+34629554870',
    visiblePhone: '629 554 870',
    ownerName: 'Equipo Immersphere',
  },

  comparison: {
    eyebrow: 'COMPARATIVA ESTRATÉGICA',
    title: '¿Tu web actual está captando propietarios o solo mostrando inmuebles?',
    body: 'Tu web actual informa. Esta experiencia está pensada para vender, guiar y convertir.',
    bullets: [
      'Web actual: catálogo de propiedades.',
      'Esta propuesta: experiencia comercial que guía a comprador y propietario hasta el contacto.',
    ],
    primaryCta: 'COMPARA CON TU WEB ACTUAL',
    primaryHref: 'https://casasymar.com/',
  },

  immersphereServices: {
    eyebrow: 'SERVICIOS COMERCIALES',
    title: 'Servicios Immersphere para inmobiliarias',
    body: 'Conectamos piezas visuales, experiencias premium, QR, captación y seguimiento comercial para que una propiedad no solo se vea mejor: genere más oportunidades.',
    secondary: 'Del impacto visual a la captación: una propuesta pensada para propietarios, compradores y equipos comerciales.',
    primaryCta: 'VER SERVICIOS IMMERSHPERE',
    primaryHref: 'https://immersphere-pro-crm.vercel.app/servicios',
  },

  visualExperience: {
    eyebrow: 'VISUAL EXPERIENCE BANNER',
    title: 'Experiencia Visual de Propiedad',
    body: 'No es solo una imagen bonita. Es una pieza dinámica con propiedad destacada, galería, QR, llamada a la acción y contacto directo, pensada para redes, escaparate digital, campañas locales o captación de propietarios.',
    supportBody: 'Convierte una propiedad en una experiencia visual rápida, clara y accionable: el usuario ve, entiende, escanea y contacta.',
    previewImage: '/casasymar/news_2.jpg',
    previewSecondaryImage: '/casasymar/news_3.jpg',
    previewTertiaryImage: '/casasymar/news_1.jpg',
    primaryCta: 'SÍ, QUIERO UNA PARA MI PROPIEDAD',
    primaryHref:
      'https://wa.me/34629554870?text=Hola,%20quiero%20ver%20c%C3%B3mo%20podr%C3%ADa%20quedar%20una%20pieza%20visual%20para%20mi%20propiedad.',
    secondaryCta: 'LLAMAR AL 629 554 870',
    secondaryHref: 'tel:+34629554870',
    pieceCta: 'VER EXPERIENCIA VISUAL DE PROPIEDAD',
    // Public, client-facing final product (clean, animated, no editor).
    // Audited 2026-06-28: ?embed=1 and directory root were broken (served the
    // Gesture Lab editor). Real clean files are banner-vertical.html (single
    // piece for iframe) and embed.html (showcase page with both formats).
    embedUrl:
      'https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/casas-y-mar-visita-propiedad/banner-vertical.html',
    standaloneUrl:
      'https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/casas-y-mar-visita-propiedad/embed.html',
    horizontalUrl:
      'https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/casas-y-mar-visita-propiedad/banner-horizontal.html',
    verticalUrl:
      'https://rubik-sota-director-de-orquesta.vercel.app/dynamic-motion-banner/casas-y-mar-visita-propiedad/banner-vertical.html',
    chips: ['Tour 360', 'Galería', 'QR', 'Visita desde móvil', 'Torrevieja'],
  },

  highIntentContact: {
    eyebrow: 'CONTACTO DIRECTO',
    title: '¿Quieres ver cómo quedaría una propiedad real de Casas y Mar?',
    body: 'Cada visita que no se entiende online es una oportunidad perdida antes de llegar a la llamada. Podemos preparar una experiencia visual para una propiedad piloto y medir si mejora la respuesta.',
    primaryCta: 'SÍ, QUIERO VERLO POR WHATSAPP',
    primaryHref:
      'https://wa.me/34629554870?text=Hola,%20quiero%20ver%20c%C3%B3mo%20podr%C3%ADa%20quedar%20una%20experiencia%20visual%20para%20una%20propiedad.',
    secondaryCta: 'LLAMAR AL 629 554 870',
    secondaryHref: 'tel:+34629554870',
    microcopy: 'Sin compromiso. Solo una primera propiedad piloto para valorar el impacto.',
  },
};

export type CasasYMarDemo = typeof casasYMarDemo;
