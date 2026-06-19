export const proposalPackage = {
  "clientName": "Piloto Etapa D",
  "slug": "piloto-d",
  "sector": "residencial",
  "score": null,
  "painDetected": "Presencia digital con margen de mejora visual y comercial.",
  "opportunityDetected": "video_hero",
  "fourHooks": {
    "visualExperience": {
      "label": "Experiencia Visual de Propiedad",
      "status": "planned",
      "targetUrl": "https://aurum-properties-boutique.vercel.app/piloto-d/visual-experience",
      "purpose": "Primer impacto visual interactivo para captar atencion."
    },
    "landing": {
      "label": "Landing Comercial Personalizada",
      "status": "planned",
      "targetUrl": "https://aurum-properties-boutique.vercel.app/piloto-d",
      "purpose": "Pagina breve para explicar oportunidad, CTA y siguiente paso."
    },
    "webCompleta": {
      "label": "Web Desarrollada Completa",
      "status": "planned",
      "targetUrl": "https://aurum-properties-boutique.vercel.app/piloto-d/web-completa",
      "purpose": "Demo completa con narrativa, servicios, visual experience y CTA."
    },
    "bannerPack": {
      "label": "Pack de Banners Personalizados",
      "status": "planned",
      "targetUrl": "https://aurum-properties-boutique.vercel.app/banners/piloto-d",
      "verticalUrl": "https://aurum-properties-boutique.vercel.app/banners/piloto-d/vertical",
      "horizontalUrl": "https://aurum-properties-boutique.vercel.app/banners/piloto-d/horizontal",
      "purpose": "Creatividades vertical/horizontal para campanas y remarketing."
    }
  },
  "proposalSummary": "Piloto Etapa D: propuesta de 4 ganchos Immersphere para convertir auditoria y activos disponibles en una experiencia comercial revisable antes de produccion.",
  "whatsappMessage": "Hola, Piloto Etapa D. Hemos preparado una propuesta visual con 4 piezas: experiencia visual, landing, web completa y banners. La idea es revisar juntos el enfoque antes de publicar nada definitivo.",
  "emailSubject": "Propuesta visual Immersphere para Piloto Etapa D",
  "emailBody": "Hola,\n\nHemos preparado un paquete de propuesta para Piloto Etapa D basado en la auditoria y los activos disponibles.\n\nIncluye:\n- Experiencia Visual de Propiedad\n- Landing Comercial Personalizada\n- Web Desarrollada Completa\n- Pack de Banners vertical/horizontal\n\nTodo queda en revision humana antes de merge, deploy o envio final.\n\nUn saludo.",
  "callScript": "Abrir con el dolor detectado: Presencia digital con margen de mejora visual y comercial.. Presentar la oportunidad como showroom comercial revisable: video_hero. Cerrar proponiendo revisar los 4 ganchos antes de publicar.",
  "followUpMessage": "Te dejo preparada la propuesta visual de Piloto Etapa D. Cuando quieras, revisamos juntos que piezas priorizar para la primera version.",
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
    "rubik": "production/piloto-d-visual-assets",
    "aurum": "production/piloto-d-public-pages"
  },
  "targetPRs": {
    "rubik": {
      "repo": "Juanmaes83/Rubik-Sota-Director-de-Orquesta",
      "baseBranch": "main",
      "headBranch": "production/piloto-d-visual-assets"
    },
    "aurum": {
      "repo": "Juanmaes83/AURUM_PROPERTIES_BOUTIQUE",
      "baseBranch": "main",
      "headBranch": "production/piloto-d-public-pages"
    }
  }
} as const;
