// Three general services, each broken into specialized branches.
// Graphic Design lives as a branch under Social Media Marketing.

export const services = [
  {
    id: 'web-development',
    petal: 'cyan',
    icon: 'Code2',
    title: 'Web Development',
    tagline: 'Sites and systems built to perform',
    description:
      'From marketing sites to full business systems — built on modern stacks, easy to manage, and made to scale as your operations grow.',
    branches: [
      {
        id: 'web-systems',
        icon: 'LayoutDashboard',
        title: 'Web Systems',
        description:
          'Custom admin dashboards and business management systems built around how your team actually works.',
      },
      {
        id: 'pos-systems',
        icon: 'CreditCard',
        title: 'POS Systems',
        description:
          'Point-of-sale platforms for retail, food, and service businesses, with inventory and sales reporting built in.',
      },
      {
        id: 'landing-pages',
        icon: 'MousePointerClick',
        title: 'Landing Pages',
        description:
          'Fast, conversion-focused single pages for product launches, promotions, and ad campaigns.',
      },
      {
        id: 'web-invitations',
        icon: 'Heart',
        title: 'Web Invitations',
        description:
          'Digital invitation sites for weddings, debuts, and events — RSVP tracking included.',
      },
    ],
  },
  {
    id: 'mobile-development',
    petal: 'teal',
    icon: 'Smartphone',
    title: 'Mobile Development',
    tagline: 'Apps your customers keep on their home screen',
    description:
      'Native and cross-platform mobile apps designed around real user journeys — from first open to daily use.',
    branches: [
      {
        id: 'native-apps',
        icon: 'Smartphone',
        title: 'Native iOS & Android Apps',
        description:
          'Fully native builds for teams that need platform-specific performance and features.',
      },
      {
        id: 'cross-platform-apps',
        icon: 'RefreshCw',
        title: 'Cross-Platform Apps',
        description:
          'React Native apps that ship to iOS and Android from a single codebase — faster to build, easier to maintain.',
      },
      {
        id: 'business-apps',
        icon: 'Boxes',
        title: 'Business & Inventory Apps',
        description:
          'POS-linked apps for stock tracking, staff management, and multi-branch operations.',
      },
      {
        id: 'on-demand-apps',
        icon: 'Truck',
        title: 'On-Demand Apps',
        description:
          'Booking, delivery, and ordering apps with real-time status updates and push notifications.',
      },
    ],
  },
  {
    id: 'social-media-marketing',
    petal: 'blue',
    icon: 'Megaphone',
    title: 'Social Media Marketing',
    tagline: 'Consistent presence, measurable growth',
    description:
      'Content, campaigns, and the visuals behind them — managed as one package so your brand looks and sounds the same everywhere.',
    branches: [
      {
        id: 'graphic-design',
        icon: 'PenTool',
        title: 'Graphic Design',
        petal: 'pale',
        description:
          'Brand identities, social media creatives, and print collateral designed to stay consistent across every post and platform.',
      },
      {
        id: 'content-management',
        icon: 'Calendar',
        title: 'Content Creation & Management',
        description:
          'Posting calendars, captions, and day-to-day publishing across Facebook, Instagram, and TikTok.',
      },
      {
        id: 'ads-management',
        icon: 'Target',
        title: 'Paid Ads Management',
        description:
          'Campaign setup, audience targeting, and budget optimization for Meta and TikTok ads.',
      },
      {
        id: 'community-management',
        icon: 'MessageCircle',
        title: 'Community Management',
        description:
          'Comment and message replies, engagement, and reputation monitoring on your pages.',
      },
    ],
  },
];
