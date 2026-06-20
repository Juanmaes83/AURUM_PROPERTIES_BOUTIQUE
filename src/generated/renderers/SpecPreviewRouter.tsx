import { useParams } from 'react-router-dom';
import { getFourHookSpecsBySlug } from '../specRegistry';
import { SpecNotFound } from './SpecNotFound';
import { GeneratedLandingPage } from './GeneratedLandingPage';
import { GeneratedVisualExperiencePage } from './GeneratedVisualExperiencePage';
import { GeneratedFullWebsitePage } from './GeneratedFullWebsitePage';
import { GeneratedBannerPackPage } from './GeneratedBannerPackPage';
import { GeneratedBannerVerticalPage } from './GeneratedBannerVerticalPage';
import { GeneratedBannerHorizontalPage } from './GeneratedBannerHorizontalPage';

type View = 'landing' | 'visualExperience' | 'fullWebsite' | 'bannerPack' | 'bannerVertical' | 'bannerHorizontal';

export const SpecPreviewRouter = ({ view }: { view: View }) => {
  const { slug = '' } = useParams<{ slug: string }>();
  const specs = getFourHookSpecsBySlug(slug);

  if (!specs) return <SpecNotFound slug={slug} />;

  const qa = specs.qualityReport;

  switch (view) {
    case 'landing':
      return <GeneratedLandingPage spec={specs.landingSpec} qualityReport={qa} slug={slug} />;
    case 'visualExperience':
      return <GeneratedVisualExperiencePage spec={specs.visualExperienceSpec} qualityReport={qa} slug={slug} />;
    case 'fullWebsite':
      return <GeneratedFullWebsitePage spec={specs.fullWebsiteSpec} qualityReport={qa} slug={slug} />;
    case 'bannerPack':
      return <GeneratedBannerPackPage spec={specs.bannerPackSpec} qualityReport={qa} slug={slug} />;
    case 'bannerVertical':
      return <GeneratedBannerVerticalPage spec={specs.bannerPackSpec} qualityReport={qa} slug={slug} />;
    case 'bannerHorizontal':
      return <GeneratedBannerHorizontalPage spec={specs.bannerPackSpec} qualityReport={qa} slug={slug} />;
    default:
      return <SpecNotFound slug={slug} />;
  }
};
