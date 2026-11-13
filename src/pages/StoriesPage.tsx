import { FeaturedStory } from '../components/FeaturedStory';
import { StoryGrid } from '../components/StoryGrid';
import { STORIES } from '../data/stories';

export function StoriesPage() {
  return (
    <>
      <FeaturedStory />
      <StoryGrid stories={STORIES} label="All stories" variant="archive" />
    </>
  );
}
