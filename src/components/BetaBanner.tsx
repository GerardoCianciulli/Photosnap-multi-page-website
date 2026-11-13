import { INVITE_HREF } from '../data/navigation';
import { ArrowLink } from './ArrowLink';
import { ResponsiveImage } from './ResponsiveImage';
import './BetaBanner.css';

/** "We're in beta" call-to-action shown above the footer on Features and Pricing. */
export function BetaBanner() {
  return (
    <section className="beta-banner">
      <ResponsiveImage
        className="beta-banner__image cover-image"
        desktop="shared/desktop/bg-beta.jpg"
        tablet="shared/tablet/bg-beta.jpg"
        mobile="shared/mobile/bg-beta.jpg"
        alt=""
        width={1440}
        height={280}
      />
      <div className="beta-banner__inner container">
        <h2 className="beta-banner__title heading-xl">
          We’re in beta. <br />
          Get your invite today!
        </h2>
        <ArrowLink className="beta-banner__link" href={INVITE_HREF}>
          Get an invite
        </ArrowLink>
      </div>
    </section>
  );
}
