import { BetaBanner } from '../components/BetaBanner';
import { FeatureGrid } from '../components/FeatureGrid';
import { Showcase } from '../components/Showcase';
import { FEATURES } from '../data/features';

export function FeaturesPage() {
  return (
    <>
      <Showcase
        size="page"
        theme="dark"
        accent
        eagerImage
        title="Features"
        image={{
          desktop: 'features/desktop/hero.jpg',
          tablet: 'features/tablet/hero.jpg',
          mobile: 'features/mobile/hero.jpg',
          alt: 'A photographer holding a camera at their side at dusk',
          width: 830,
          height: 490,
        }}
      >
        <p>
          We make sure all of our features are designed to be loved by every aspiring and even
          professional photograpers who wanted to share their stories.
        </p>
      </Showcase>

      <FeatureGrid features={FEATURES} label="All features" variant="page" />

      <BetaBanner />
    </>
  );
}
