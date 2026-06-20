import type { PremiumFourHookSpecs } from './types/fourHookSpecs';
import { sandhouseInmobiliariaFourHookSpecs } from './sandhouseInmobiliariaFourHookSpecs';
import { embassyLevanteFourHookSpecs } from './embassyLevanteFourHookSpecs';

const REGISTRY: Record<string, PremiumFourHookSpecs> = {
  'sandhouse-inmobiliaria': sandhouseInmobiliariaFourHookSpecs,
  'embassy-levante': embassyLevanteFourHookSpecs,
};

export function getFourHookSpecsBySlug(slug: string): PremiumFourHookSpecs | null {
  return REGISTRY[slug] ?? null;
}

export function hasFourHookSpecs(slug: string): boolean {
  return slug in REGISTRY;
}

export function listGeneratedSpecSlugs(): string[] {
  return Object.keys(REGISTRY);
}
