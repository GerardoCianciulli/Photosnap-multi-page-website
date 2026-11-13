import { BetaBanner } from '../components/BetaBanner';
import { CompareTable } from '../components/CompareTable';
import { PricingPlans } from '../components/PricingPlans';
import { Showcase } from '../components/Showcase';

export function PricingPage() {
  return (
    <>
      <Showcase
        size="page"
        theme="dark"
        accent
        eagerImage
        title="Pricing"
        image={{
          desktop: 'pricing/desktop/hero.jpg',
          tablet: 'pricing/tablet/hero.jpg',
          mobile: 'pricing/mobile/hero.jpg',
          alt: 'Silhouette of a photographer with a camera on a tripod against a sunset sky',
          width: 830,
          height: 490,
        }}
      >
        <p>
          Create a your stories, Photosnap is a platform for photographers and visual
          storytellers. It’s the simple way to create and share your photos.
        </p>
      </Showcase>

      <PricingPlans />

      <CompareTable />

      <BetaBanner />
    </>
  );
}
