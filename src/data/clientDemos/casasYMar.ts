export const casasYMarDemo = {
  client: {
    name: 'Casas y Mar',
    legalName: 'Casas y Mar Servicios Inmobiliarios, SL',
    sector: 'Inmobiliaria',
    location: 'Torrevieja · Costa Blanca Sur',
    website: 'https://casasymar.com/',
    phone: '+34 965 714 261',
    email: 'contactos@casasymar.es',
    address: 'Avda. Habaneras 121, 03182 Torrevieja',
    claim: 'Tu sueño, nuestra pasión',
    logo: {
      url: '',
      status: 'pending_validation' as const,
      notes: 'No se ha podido obtener un asset de logo público fiable (favicon 403). Usar wordmark tipográfico hasta validación.',
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
      'Buena reputación Google (4.9/5, +530 reseñas)',
      'Alto volumen comercial (+100 casas/año, +400 colaboradores)',
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
      'Añadir blog/guías locales como activo SEO/GEO',
      'Crear landing de captación de propietarios',
    ],
    detectedSignals: [
      'Páginas revisadas: home, contacto, propiedades',
      'Propiedades: Sí',
      'Visita / Contacto: Sí',
      'WhatsApp: Sí',
      'Formulario: Sí',
      'Teléfono: Sí',
      'Email: Sí',
      'Vídeo: señales detectadas',
    ],
    missingSignals: ['Tour/360', 'Hotspots', 'QR', 'Floorplan interactivo', 'Guided visit'],
  },
  stats: [
    { value: '+100', label: 'casas vendidas al año' },
    { value: '4.9', label: 'sobre 5 en Google (+530 reseñas)' },
    { value: '+400', label: 'colaboradores' },
  ],
  zones: ['Torrevieja', 'La Mata', 'San Miguel de Salinas', 'Orihuela Costa'],
  propertyTypes: ['Apartamentos', 'Bungalows', 'Chalets adosados', 'Villas'],
  assets: {
    clientImages: [],
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
      'Todos los vídeos e imágenes AURUM se usan como placeholders premium de demostración. Deben sustituirse por activos autorizados de Casas y Mar antes de lanzar la web final.',
  },
  hero: {
    headline: 'Propiedades que se recorren antes de visitarse.',
    subheadline:
      'Una propuesta premium para convertir la experiencia digital de Casas y Mar en una visita previa inmersiva: tour 360, vídeo, QR, plano y captación desde móvil.',
    locationLine: 'Casas y Mar · Torrevieja · Costa Blanca',
    primaryCta: 'Ver propuesta Immersphere',
    secondaryCta: 'Elegir propiedad piloto',
    badge: 'Preview privada',
  },
  diagnosis: {
    title: 'Diagnóstico personalizado',
    body: 'Casas y Mar ya cuenta con web, contacto, WhatsApp, formulario y catálogo de propiedades. La oportunidad no está en empezar desde cero, sino en elevar la presentación de los inmuebles clave: transformar las propiedades destacadas en experiencias navegables que preparan al comprador antes de llamar, escribir o visitar.',
    badges: [
      { label: 'Web auditada', status: 'ok' },
      { label: 'Propiedades detectadas', status: 'ok' },
      { label: 'WhatsApp detectado', status: 'ok' },
      { label: 'Formulario detectado', status: 'ok' },
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
        'Lead más cualificado antes de visitar',
      ],
    },
  },
  propertyShowcase: {
    title: 'Vivienda destacada en Torrevieja',
    subtitle: 'Preview conceptual · Precio bajo consulta',
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
      name: 'Apartamento en Playa del Cura',
      type: 'Apartamento',
      zone: 'Torrevieja',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder',
    },
    {
      name: 'Bungalow en La Mata',
      type: 'Bungalow',
      zone: 'La Mata',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder',
    },
    {
      name: 'Chalet adosado en Torrevieja',
      type: 'Chalet adosado',
      zone: 'Torrevieja',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder',
    },
    {
      name: 'Villa con vistas al mar',
      type: 'Villa',
      zone: 'Orihuela Costa',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder',
    },
    {
      name: 'Apartamento cerca del puerto',
      type: 'Apartamento',
      zone: 'Torrevieja',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder',
    },
    {
      name: 'Bungalow en San Miguel de Salinas',
      type: 'Bungalow',
      zone: 'San Miguel de Salinas',
      price: 'Precio bajo consulta',
      status: 'conceptual_placeholder',
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
        description: 'Contenido SEO/GEO sobre compra, venta y zonas de Torrevieja y Costa Blanca Sur.',
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
  blogGuides: [
    { title: 'Guía para comprar vivienda en Torrevieja', category: 'Comprar' },
    { title: 'Cómo preparar una vivienda para vender antes', category: 'Vender' },
    { title: 'Zonas de Torrevieja para segunda residencia', category: 'Zonas' },
    { title: 'Checklist antes de visitar una propiedad', category: 'Visitar' },
  ],
  ownerCapture: {
    title: '¿Quieres vender tu vivienda en Torrevieja?',
    subtitle: 'No solo vendemos propiedades: captamos el mejor producto para nuestros compradores.',
    cta: 'Valora tu vivienda',
    secondary: 'Solicita diagnóstico gratuito',
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
};

export type CasasYMarDemo = typeof casasYMarDemo;
