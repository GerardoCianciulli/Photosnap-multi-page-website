import type { Story } from '../data/stories';
import { ArrowIcon } from './ArrowLink';
import { ResponsiveImage } from './ResponsiveImage';
import './StoryGrid.css';

type StoryGridProps = {
  stories: Story[];
  /** Accessible name for the section */
  label: string;
  /** `home` = 4 featured cards; `archive` = Stories page (adds the date) */
  variant?: 'home' | 'archive';
};

/**
 * Grid of story cards. Per the brief each story would link to its own site,
 * so the whole card is one anchor and "Read story" is text inside it.
 */
export function StoryGrid({ stories, label, variant = 'home' }: StoryGridProps) {
  const showDate = variant === 'archive';

  return (
    <section className={`story-grid story-grid--${variant}`} aria-label={label}>
      <ul className="story-grid__list" role="list">
        {stories.map((story) => (
          <li key={story.image}>
            <a className="story-card" href="#">
              <ResponsiveImage
                className="story-card__image cover-image"
                desktop={`stories/desktop/${story.image}.jpg`}
                mobile={`stories/mobile/${story.image}.jpg`}
                alt=""
                width={360}
                height={500}
              />
              <div className="story-card__content">
                {showDate && <p className="story-card__date">{story.date}</p>}
                <h2 className="story-card__title heading-s">{story.title}</h2>
                <p className="story-card__author">by {story.author}</p>
                <span className="story-card__action heading-xs" aria-hidden="true">
                  Read story
                  <ArrowIcon />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
