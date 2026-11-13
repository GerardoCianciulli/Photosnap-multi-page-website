export type Feature = {
  title: string;
  description: string;
  /** SVG in assets/features/desktop */
  icon: string;
  iconWidth: number;
  iconHeight: number;
};

export const FEATURES: Feature[] = [
  {
    title: '100% Responsive',
    description:
      'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    icon: 'responsive',
    iconWidth: 72,
    iconHeight: 72,
  },
  {
    title: 'No Photo Upload Limit',
    description:
      'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    icon: 'no-limit',
    iconWidth: 72,
    iconHeight: 36,
  },
  {
    title: 'Available to Embed',
    description:
      'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    icon: 'embed',
    iconWidth: 71,
    iconHeight: 72,
  },
  {
    title: 'Custom Domain',
    description:
      'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    icon: 'custom-domain',
    iconWidth: 81,
    iconHeight: 72,
  },
  {
    title: 'Boost Your Exposure',
    description:
      'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    icon: 'boost-exposure',
    iconWidth: 72,
    iconHeight: 72,
  },
  {
    title: 'Drag & Drop Image',
    description:
      'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    icon: 'drag-drop',
    iconWidth: 91,
    iconHeight: 72,
  },
];
