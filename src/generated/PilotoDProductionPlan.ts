export const productionPlan = {
  "slug": "piloto-d",
  "clientName": "Piloto Etapa D",
  "targetRoutes": {
    "visualExperience": "https://aurum-properties-boutique.vercel.app/piloto-d/visual-experience",
    "landing": "https://aurum-properties-boutique.vercel.app/piloto-d",
    "webCompleta": "https://aurum-properties-boutique.vercel.app/piloto-d/web-completa",
    "bannerPack": "https://aurum-properties-boutique.vercel.app/banners/piloto-d",
    "bannerVertical": "https://aurum-properties-boutique.vercel.app/banners/piloto-d/vertical",
    "bannerHorizontal": "https://aurum-properties-boutique.vercel.app/banners/piloto-d/horizontal"
  },
  "branches": {
    "rubik": "production/piloto-d-visual-assets",
    "aurum": "production/piloto-d-public-pages"
  },
  "pullRequests": {},
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
  "qaChecklist": [
    "Validar derechos de assets.",
    "Confirmar copy sin contenido cruzado.",
    "Verificar PR Rubik.",
    "Verificar PR AURUM.",
    "Verificar que dispatch real sigue bloqueado."
  ],
  "status": "review_required",
  "note": "v0.2 does not touch App.tsx or create public routes yet."
} as const;
