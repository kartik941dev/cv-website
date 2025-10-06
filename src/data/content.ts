export const profile = {
  name: "Anushka Patel",
  title: "Senior Frontend Engineer",
  location: "Bengaluru, India",
  about: [
    "I design and build performant, accessible web applications with a strong eye for product and craft.",
    "Over 8+ years, I've shipped experiences at scale, led UI systems, and mentored teams to deliver delightful outcomes.",
    "My focus areas are React, TypeScript, design systems, and high-impact UX.",
  ],
  email: "alex@ac.dev",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/alxcarter" },
    { label: "GitHub", href: "https://github.com/alxcarter" },
    { label: "Twitter", href: "https://x.com/alxcarter" },
  ],
};

export type Achievement = {
  title: string;
  timeframe: string;
  description: string;
  impact?: string;
  tags: string[];
};

export const achievements: Achievement[] = [
  {
    title: "Solutions Architect role at AWS",
    timeframe: "2025",
    description: "Joined Amazon Web Services as a Solutions Architect focused on cloud-native architectures and modernization.",
    impact: "Advising enterprise customers; enabling scalable, cost-efficient solutions",
    tags: ["Professional", "Solutions", "Architecture", "Job", "AWS"],
  },
  {
    title: "Led redesign of B2B analytics suite",
    timeframe: "2024",
    description: "Owned UX and frontend architecture for a 40+ screen analytics product.",
    impact: "+23% activation, -31% time-to-insight",
    tags: ["Professional", "UX", "React"],
  },
  {
    title: "Open-sourced UI component library",
    timeframe: "2023",
    description: "Built a headless, accessible component kit used by 7+ teams.",
    impact: "2x dev velocity, 100% a11y coverage",
    tags: ["Open Source", "Design System"],
  },
  {
    title: "Speaker: React India",
    timeframe: "2022",
    description: "Talk: Scaling Design Systems with Type-Safe Slots & Tokens.",
    tags: ["Community", "Conference"],
  },
];

export type Project = {
  name: string;
  role: string;
  description: string;
  stack: string[];
  results?: string;
  image?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Nimbus Dashboard",
    role: "Lead Frontend Engineer",
    description: "Modular analytics dashboard with real-time streaming and custom visualizations.",
    stack: ["Next.js", "TypeScript", "Tailwind", "WebSockets"],
    results: "+18% retention, p95 < 800ms",
    image: "/images/nimbus.svg",
    href: "https://example.com/nimbus",
  },
  {
    name: "Atlas Design System",
    role: "Author",
    description: "Token-driven, themeable component library with a11y baked in.",
    stack: ["React", "TypeScript", "Storybook"],
    results: "Adopted by 7 teams, 120+ components",
    image: "/images/atlas.svg",
  },
  {
    name: "Pulse Marketing Site",
    role: "Frontend Engineer",
    description: "High-performance static site with MDX, i18n, and image CDN.",
    stack: ["Next.js", "MDX", "Edge"],
    results: "Lighthouse 100/100/100/100",
    image: "/images/pulse.svg",
    href: "https://example.com/pulse",
  },
];

export const skills = {
  technical: ["React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "GraphQL"],
  tools: ["Storybook", "Jest", "Playwright", "Vite", "Figma", "Git"],
  soft: ["Product thinking", "Leadership", "Mentorship", "Communication", "System design"],
};

export const interests = [
  { title: "Design Systems", blurb: "Tokens, theming, accessibility, and scale." },
  { title: "Performance", blurb: "Web vitals, rendering pipelines, and DX ergonomics." },
  { title: "Teaching", blurb: "Workshops, talks, mentoring early-career engineers." },
  { title: "Reading", blurb: "Product strategy, interaction design, cognitive science." },
];


