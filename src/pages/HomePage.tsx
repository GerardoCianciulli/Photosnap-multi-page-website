import { ArrowLink } from '../components/ArrowLink';
import { FeatureGrid } from '../components/FeatureGrid';
import { Showcase } from '../components/Showcase';
import { StoryGrid } from '../components/StoryGrid';
import { FEATURES } from '../data/features';
import { INVITE_HREF } from '../data/navigation';
import { STORIES } from '../data/stories';

export function HomePage() {
  return (
    <>
      <Showcase
        size="hero"
        theme="dark"
        accent
        eagerImage
        title="Create and share your photo stories."
        image={{
          desktop: 'home/desktop/create-and-share.jpg',
          tablet: 'home/tablet/create-and-share.jpg',
          mobile: 'home/mobile/create-and-share.jpg',
          alt: 'A man with a backpack standing at the end of a wooden pier over a misty lake',
          width: 830,
          height: 650,
        }}
        action={<ArrowLink href={INVITE_HREF}>Get an invite</ArrowLink>}
      >
        <p>
          Photosnap is a platform for photographers and visual storytellers. We make it easy to
          share photos, tell stories and connect with others.
        </p>
      </Showcase>

      <Showcase
        size="section"
        reverse
        title="Beautiful stories every time"
        image={{
          desktop: 'home/desktop/beautiful-stories.jpg',
          tablet: 'home/tablet/beautiful-stories.jpg',
          mobile: 'home/mobile/beautiful-stories.jpg',
          alt: 'A laptop showing a photo-editing app on a desk lined with books',
          width: 830,
          height: 600,
        }}
        action={<ArrowLink href="./stories.html">View the stories</ArrowLink>}
      >
        <p>
          We provide design templates to ensure your stories look terrific. Easily add photos,
          text, embed maps and media from other networks. Then share your story with everyone.
        </p>
      </Showcase>

      <Showcase
        size="section"
        title="Designed for everyone"
        image={{
          desktop: 'home/desktop/designed-for-everyone.jpg',
          tablet: 'home/tablet/designed-for-everyone.jpg',
          mobile: 'home/mobile/designed-for-everyone.jpg',
          alt: 'A man filming with a camera mounted on a handheld stabiliser',
          width: 830,
          height: 600,
        }}
        action={<ArrowLink href="./stories.html">View the stories</ArrowLink>}
      >
        <p>
          Photosnap can help you create stories that resonate with your audience. Our tool is
          designed for photographers of all levels, brands, businesses you name it.
        </p>
      </Showcase>

      <StoryGrid stories={STORIES.slice(0, 4)} label="Featured stories" />

      <FeatureGrid features={FEATURES.slice(0, 3)} label="Why Photosnap" />
    </>
  );
}
