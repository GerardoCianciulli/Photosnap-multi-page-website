import type { Feature } from '../data/features';
import { asset } from '../lib/assets';
import './FeatureGrid.css';

type FeatureGridProps = {
  features: Feature[];
  label: string;
  /** `home` = three-up strip on the home page; `page` = full Features grid */
  variant?: 'home' | 'page';
};

export function FeatureGrid({ features, label, variant = 'home' }: FeatureGridProps) {
  return (
    <section className={`feature-grid feature-grid--${variant}`} aria-label={label}>
      <ul className="feature-grid__list container" role="list">
        {features.map((feature) => (
          <li className="feature" key={feature.title}>
            <div className="feature__icon">
              <img
                src={asset(`features/desktop/${feature.icon}.svg`)}
                alt=""
                width={feature.iconWidth}
                height={feature.iconHeight}
              />
            </div>
            <h2 className="feature__title heading-s">{feature.title}</h2>
            <p className="feature__description text-muted">{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
