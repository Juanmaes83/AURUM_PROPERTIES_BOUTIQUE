export interface SpecCTA {
  label: string;
  href: string;
  channel: string;
}

export interface SpecContact {
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  schedule: string | null;
  website: string | null;
}

export interface HookSummaryItem {
  hook: string;
  label: string;
  url: string;
  purpose: string;
}

export interface LandingSpec {
  hookId: 'landing';
  hookName: string;
  commercialPurpose: string;
  targetAudience: string;
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: SpecCTA;
    secondaryCta: SpecCTA;
  };
  diagnosis: {
    painDetected: string;
    opportunityDetected: string;
    marketContext: string;
    recommendedAngle: string;
  };
  comparison: {
    currentSituation: string;
    proposedSituation: string;
    differentiators: string[];
  };
  fourHooksSummary: HookSummaryItem[];
  contact: SpecContact;
  nextStep: string;
  internalNotes: string[];
  route: string;
}

export interface RubikConfigSeed {
  slug: string;
  clientName: string;
  zone: string;
  sector: string;
  claim: string;
  cta: string;
  palette: { primary: string; background: string; text: string };
  logo: string | null;
  heroImage: string | null;
  internalNote: string;
}

export interface JourneyBlock {
  moment: number;
  title: string;
  description: string;
  visualCue: string;
}

export interface VisualExperienceSpec {
  hookId: 'visualExperience';
  hookName: string;
  commercialPurpose: string;
  targetAudience: string;
  narrative: string;
  embedUrl: string;
  rubikEmbedUrl: string;
  rubikStandaloneUrl: string;
  rubikConfigSeed: RubikConfigSeed;
  firstImpression: { headline: string; subheadline: string; format: string };
  journeyBlocks: JourneyBlock[];
  CTA: SpecCTA;
  fallbackPlan: { trigger: string; action: string; note: string };
  internalNotes: string[];
  routes: { primary: string; alias: string; rubikEmbed: string };
}

export interface SpecSection {
  id: string;
  order: number;
  type: string;
  headline: string;
  subheadline?: string;
  body?: string;
  cta?: { label: string; href: string };
  assets?: { video?: string | null; image?: string | null };
  note?: string;
  trustSignals?: string[];
  zones?: Array<{ name: string; description: string }>;
  services?: Array<{ id: number; label: string }>;
  items?: Array<{ id: string; label: string; zone: string; status: string }>;
  steps?: Array<{ step: number; title: string; description: string }>;
  embedUrl?: string;
  publicUrl?: string;
  contact?: SpecContact;
}

export interface FullWebsiteSpec {
  hookId: 'fullWebsite';
  hookName: string;
  commercialPurpose: string;
  targetAudience: string;
  heroVideoMotion: boolean;
  sections: SpecSection[];
  finalCTA: { headline: string; label: string; href: string; channel: string };
  internalNotes: string[];
  routes: { primary: string; alias: string };
}

export interface BannerVerticalCopy {
  headline: string;
  subline: string;
  chips: string[];
  contact: { phone: string | null; email: string | null; cta: string };
  address: string | null;
  schedule: string | null;
  format: string;
}

export interface BannerHorizontalCopy {
  headline: string;
  subline: string;
  leftColumn: { brand: string; headline: string; claim: string };
  rightColumn: {
    chips: string[];
    contact: { address: string; phone: string | null; email: string | null };
    cta: string;
    schedule: string | null;
  };
  format: string;
}

export interface BannerPackSpec {
  hookId: 'bannerPack';
  hookName: string;
  commercialPurpose: string;
  targetAudience: string;
  claims: string[];
  formats: Array<{ id: string; ratio: string; dimensions: string; useCases: string[] }>;
  formatSpecificCopy: {
    vertical: BannerVerticalCopy;
    horizontal: BannerHorizontalCopy;
  };
  CTA: SpecCTA;
  contact: SpecContact;
  visualDirection: string;
  internalNotes: string[];
  routes: { pack: string; vertical: string; horizontal: string };
}

export interface QualityCheck {
  spec: string;
  check: string;
  passed: boolean;
  detail?: string;
}

export interface QualityReport {
  passed: boolean;
  summary: string;
  blockers: string[];
  warnings: string[];
  checks: QualityCheck[];
  internalNote: string;
}

export interface PremiumFourHookSpecs {
  landingSpec: LandingSpec;
  visualExperienceSpec: VisualExperienceSpec;
  fullWebsiteSpec: FullWebsiteSpec;
  bannerPackSpec: BannerPackSpec;
  qualityReport: QualityReport;
}
