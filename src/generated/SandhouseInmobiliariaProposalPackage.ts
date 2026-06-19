export const proposalPackage = {
  "clientName": "Sandhouse Inmobiliaria",
  "slug": "sandhouse-inmobiliaria",
  "sector": "residencial",
  "score": null,
  "painDetected": "Sandhouse Inmobiliaria compite en Torrevieja, uno de los mercados inmobiliarios más activos de la Costa Blanca. En un entorno donde la diferenciación visual decide qué agencia capta al comprador primero, hay una oportunidad clara de elevar su presentación digital al nivel del servicio que ya ofrecen.",
  "opportunityDetected": "experiencia_visual_premium",
  "fourHooks": {
    "visualExperience": {
      "label": "Experiencia Visual de Propiedad",
      "status": "planned",
      "targetUrl": "https://aurum-properties-boutique.vercel.app/sandhouse-inmobiliaria/visual-experience",
      "purpose": "Primer impacto visual interactivo para captar atencion."
    },
    "landing": {
      "label": "Landing Comercial Personalizada",
      "status": "planned",
      "targetUrl": "https://aurum-properties-boutique.vercel.app/sandhouse-inmobiliaria",
      "purpose": "Pagina breve para explicar oportunidad, CTA y siguiente paso."
    },
    "webCompleta": {
      "label": "Web Desarrollada Completa",
      "status": "planned",
      "targetUrl": "https://aurum-properties-boutique.vercel.app/sandhouse-inmobiliaria/web-completa",
      "purpose": "Demo completa con narrativa, servicios, visual experience y CTA."
    },
    "bannerPack": {
      "label": "Pack de Banners Personalizados",
      "status": "planned",
      "targetUrl": "https://aurum-properties-boutique.vercel.app/banners/sandhouse-inmobiliaria",
      "verticalUrl": "https://aurum-properties-boutique.vercel.app/banners/sandhouse-inmobiliaria/vertical",
      "horizontalUrl": "https://aurum-properties-boutique.vercel.app/banners/sandhouse-inmobiliaria/horizontal",
      "purpose": "Creatividades vertical/horizontal para campanas y remarketing."
    }
  },
  "proposalSummary": "Sandhouse Inmobiliaria, agencia ubicada en Torrevieja (Costa Blanca), recibe una propuesta Immersphere de 4 ganchos comerciales — experiencia visual interactiva, landing personalizada, web completa y pack de banners — para diferenciar la presentación de sus propiedades y captar compradores con mayor impacto visual.",
  "whatsappMessage": "Hola, Sandhouse Inmobiliaria. Hemos preparado una propuesta visual con 4 piezas: experiencia visual, landing, web completa y banners. La idea es revisar juntos el enfoque antes de publicar nada definitivo.",
  "emailSubject": "Propuesta visual Immersphere para Sandhouse Inmobiliaria",
  "emailBody": "Hola,\n\nHemos preparado un paquete de propuesta para Sandhouse Inmobiliaria basado en la auditoria y los activos disponibles.\n\nIncluye:\n- Experiencia Visual de Propiedad\n- Landing Comercial Personalizada\n- Web Desarrollada Completa\n- Pack de Banners vertical/horizontal\n\nTodo queda en revision humana antes de merge, deploy o envio final.\n\nUn saludo.",
  "callScript": "Buenos días, llamo de Immersphere. Hemos revisado Sandhouse Inmobiliaria y hemos visto una oportunidad clara: convertir la presentación digital de sus propiedades en una experiencia visual más premium, diferenciadora y orientada a captar compradores antes que la competencia local. Hemos preparado 4 piezas revisables: experiencia visual interactiva, landing comercial, web completa y banners para campañas. ¿Tienen 10 minutos para revisarlo juntos antes de publicar nada definitivo?",
  "followUpMessage": "Te dejo preparada la propuesta visual de Sandhouse Inmobiliaria. Cuando quieras, revisamos juntos que piezas priorizar para la primera version.",
  "internalNotes": [
    "No enviar automaticamente desde v0.2.",
    "No marcar generated hasta validar URLs reales 200.",
    "No conectar CRM estatico con token server-side."
  ],
  "reviewChecklist": [
    "Validar derechos de assets.",
    "Confirmar copy sin contenido cruzado.",
    "Verificar PR Rubik.",
    "Verificar PR AURUM.",
    "Verificar que dispatch real sigue bloqueado."
  ],
  "plannedBranches": {
    "rubik": "production/sandhouse-inmobiliaria-visual-assets",
    "aurum": "production/sandhouse-inmobiliaria-public-pages"
  },
  "targetPRs": {
    "rubik": {
      "repo": "Juanmaes83/Rubik-Sota-Director-de-Orquesta",
      "baseBranch": "main",
      "headBranch": "production/sandhouse-inmobiliaria-visual-assets"
    },
    "aurum": {
      "repo": "Juanmaes83/AURUM_PROPERTIES_BOUTIQUE",
      "baseBranch": "main",
      "headBranch": "production/sandhouse-inmobiliaria-public-pages"
    }
  }
} as const;
