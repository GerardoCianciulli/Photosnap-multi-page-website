export type Plan = {
  name: string;
  description: string;
  monthly: string;
  yearly: string;
  featured?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: 'Basic',
    description: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    monthly: '$19.00',
    yearly: '$190.00',
  },
  {
    name: 'Pro',
    description:
      'More advanced features available. Recommended for photography veterans and professionals.',
    monthly: '$39.00',
    yearly: '$390.00',
    featured: true,
  },
  {
    name: 'Business',
    description:
      'Additional features available such as more detailed metrics. Recommended for business owners.',
    monthly: '$99.00',
    yearly: '$990.00',
  },
];

export type PlanFeature = {
  name: string;
  /** Which plans include the feature, in PLANS order: Basic, Pro, Business */
  included: [boolean, boolean, boolean];
};

export const PLAN_FEATURES: PlanFeature[] = [
  { name: 'Unlimited Story Posting', included: [true, true, true] },
  { name: 'Unlimited Photo Upload', included: [true, true, true] },
  { name: 'Embedding Custom Content', included: [false, true, true] },
  { name: 'Customize Metadata', included: [false, true, true] },
  { name: 'Advanced Metrics', included: [false, false, true] },
  { name: 'Photo Downloads', included: [false, false, true] },
  { name: 'Search Engine Indexing', included: [false, false, true] },
  { name: 'Custom Analytics', included: [false, false, true] },
];
