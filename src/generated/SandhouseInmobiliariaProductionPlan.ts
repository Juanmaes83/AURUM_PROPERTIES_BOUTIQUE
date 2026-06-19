export const productionPlan = {
  "slug": "sandhouse-inmobiliaria",
  "clientName": "Sandhouse Inmobiliaria",
  "targetRoutes": {
    "visualExperience": "https://aurum-properties-boutique.vercel.app/sandhouse-inmobiliaria/visual-experience",
    "landing": "https://aurum-properties-boutique.vercel.app/sandhouse-inmobiliaria",
    "webCompleta": "https://aurum-properties-boutique.vercel.app/sandhouse-inmobiliaria/web-completa",
    "bannerPack": "https://aurum-properties-boutique.vercel.app/banners/sandhouse-inmobiliaria",
    "bannerVertical": "https://aurum-properties-boutique.vercel.app/banners/sandhouse-inmobiliaria/vertical",
    "bannerHorizontal": "https://aurum-properties-boutique.vercel.app/banners/sandhouse-inmobiliaria/horizontal"
  },
  "branches": {
    "rubik": "production/sandhouse-inmobiliaria-visual-assets",
    "aurum": "production/sandhouse-inmobiliaria-public-pages"
  },
  "pullRequests": {},
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
