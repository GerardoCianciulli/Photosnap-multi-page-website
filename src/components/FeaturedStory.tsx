import { ArrowLink } from './ArrowLink';
import { ResponsiveImage } from './ResponsiveImage';
import './FeaturedStory.css';

/** Stories page hero: "Last month's featured story" over a full-bleed photo. */
export function FeaturedStory() {
  return (
    <section className="featured-story">
      <ResponsiveImage
        className="featured-story__image cover-image"
        desktop="stories/desktop/moon-of-appalacia.jpg"
        tablet="stories/tablet/moon-of-appalacia.jpg"
        mobile="stories/mobile/moon-of-appalacia.jpg"
        alt="A full moon rising over misty mountain ridges"
        width={1440}
        height={650}
        eager
      />
      <div className="featured-story__panel">
        <div className="featured-story__content">
          <p className="heading-xs">Last month’s featured story</p>
          <h2 className="featured-story__title heading-xl">Hazy full moon of Appalachia</h2>
          <p className="featured-story__meta">
            <time className="featured-story__date" dateTime="2020-03-02">
              March 2nd 2020
            </time>{' '}
            <span>by John Appleseed</span>
          </p>
          <p className="featured-story__body text-muted">
            The dissected plateau area, while not actually made up of geological mountains, is
            popularly called "mountains," especially in eastern Kentucky and West Virginia, and
            while the ridges are not high, the terrain is extremely rugged.
          </p>
          <ArrowLink className="featured-story__link" href="#">
            Read the story
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
