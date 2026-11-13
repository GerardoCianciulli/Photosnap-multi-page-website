export type NavItem = {
  label: string;
  href: string;
};

export const HOME_LINK: NavItem = { label: 'Home', href: './' };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Stories', href: './stories.html' },
  { label: 'Features', href: './features.html' },
  { label: 'Pricing', href: './pricing.html' },
];

/** The invite call-to-action is intentionally a placeholder anchor. */
export const INVITE_HREF = '#';
