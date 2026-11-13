import type { ReactNode } from 'react';
import { ResponsiveImage, type ImageSources } from './ResponsiveImage';
import './Showcase.css';

type ShowcaseProps = {
  title: string;
  children: ReactNode;
  image: ImageSources & { alt: string; width: number; height: number };
  /** `hero` = home hero (650px), `section` = home content rows (600px), `page` = inner page hero (490px) */
  size: 'hero' | 'section' | 'page';
  theme?: 'dark' | 'light';
  /** Text panel on the right on desktop and tablet */
  reverse?: boolean;
  /** Gradient accent bar beside (desktop/tablet) or above (mobile) the text */
  accent?: boolean;
  action?: ReactNode;
  eagerImage?: boolean;
};

/** Text panel paired with a photo — the home rows and the inner page heroes. */
export function Showcase({
  title,
  children,
  image,
  size,
  theme = 'light',
  reverse = false,
  accent = false,
  action,
  eagerImage = false,
}: ShowcaseProps) {
  const classes = [
    'showcase',
    `showcase--${size}`,
    `showcase--${theme}`,
    reverse ? 'showcase--reverse' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={classes}>
      <div className="showcase__media">
        <ResponsiveImage {...image} eager={eagerImage} />
      </div>
      <div className="showcase__panel">
        <div className={`showcase__content${accent ? ' accent-bar' : ''}`}>
          <h2 className="heading-xl">{title}</h2>
          <div className="showcase__body text-muted">{children}</div>
          {action && <div className="showcase__action">{action}</div>}
        </div>
      </div>
    </section>
  );
}
