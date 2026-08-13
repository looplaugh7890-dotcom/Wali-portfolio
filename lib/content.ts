// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// Everything here is meant to be edited by hand — it's the one file you
// should read top to bottom before you deploy. Anything marked TODO is a
// placeholder, not a real claim, and should be replaced with your actual
// info. Projects, testimonials and blog posts live in the database and are
// managed from /admin — this file is for the copy around them.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: 'Wali Aslam',
  role: 'Web & App Developer + Digital Marketer',
  eyebrow: 'WEB · APP · MARKETING',
  headline: 'Built well. Found easily. Grown deliberately.',
  subhead:
    "I design and build websites and apps, then bring the marketing that gets the right people to them. One person, two disciplines, one outcome — growth you can measure.",
  ctaPrimary: 'Start a Project',
  ctaSecondary: 'View My Work',

  // TODO — replace with your real contact details before launch.
  email: 'hello@waliaslam.dev',
  phone: '+92 300 0000000',
  location: 'Pakistan',

  // TODO — replace with your real profile URLs, or remove ones you don't use.
  social: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/in/',
    instagram: 'https://instagram.com/',
    twitter: 'https://twitter.com/',
  },

  // TODO — these are placeholders, not real numbers. Edit before launch.
  stats: [
    { value: 'X+', label: 'Projects Shipped' },
    { value: 'X+', label: 'Happy Clients' },
    { value: 'X+', label: 'Years Experience' },
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const aboutContent = {
  heading: 'Turning ideas into digital experiences.',
  // TODO — swap this for your own story. Keep it specific and human.
  paragraphs: [
    "I work at the point where development and marketing meet — the place most agencies split across two teams that barely talk to each other. I don't.",
    "I build the site or app, and I build it knowing exactly how it needs to load, rank, and convert once it's live. That means fewer handoffs, fewer misunderstandings, and a product that's built to perform from day one — not patched after the fact.",
    'If you want a partner who thinks about your business outcomes as much as your codebase, that\'s the work I do.',
  ],
  timeline: [
    { year: '2021', label: 'Started freelancing in web development' }, // TODO
    { year: '2022', label: 'Expanded into app development' }, // TODO
    { year: '2023', label: 'Added digital marketing to the offering' }, // TODO
    { year: 'Now', label: 'Building full digital experiences, end to end' },
  ],
};

export const services = [
  {
    number: '01',
    slug: 'web-development',
    title: 'Web Development',
    short: 'Fast, modern websites and web apps built around business goals.',
    description:
      "Custom-built sites and web applications — no bloated page builders, no cut corners. Every project is built for speed, clarity, and a clean path to whatever action you want a visitor to take.",
    deliverables: ['Marketing websites', 'Web applications', 'E-commerce', 'CMS integrations'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PHP'],
  },
  {
    number: '02',
    slug: 'app-development',
    title: 'App Development',
    short: 'Mobile and cross-platform apps built on scalable architecture.',
    description:
      'From first prototype to app-store launch — apps built to hold up under real usage, with an architecture that can grow with your user base instead of fighting it.',
    deliverables: ['Cross-platform apps', 'MVP builds', 'API architecture', 'Backend systems'],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    number: '03',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    short: 'Strategy focused on visibility, traffic, and qualified leads.',
    description:
      "A website is only worth what it earns you. I handle the SEO foundation, analytics, and growth strategy that turns a finished build into a channel that keeps producing leads long after launch.",
    deliverables: ['Technical SEO', 'Analytics setup', 'Content strategy', 'Performance marketing'],
    technologies: ['SEO', 'Google Analytics', 'Search Console', 'Social Media Marketing'],
  },
];

export const techStack = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express', 'PHP', 'REST APIs'],
  Database: ['MongoDB', 'MongoDB Atlas', 'SQL'],
  Marketing: ['SEO', 'Google Analytics', 'Search Console', 'Social Media Marketing', 'Content Strategy'],
};

export const process = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, the audience, and what success actually looks like.',
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Map the information architecture, scope, and technical approach before any code is written.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Design around your brand and your users — never a generic template.',
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Build on clean, typed, maintainable code — reviewed and tested as it ships.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy, verify, and monitor — performance and SEO checked before going live.',
  },
  {
    number: '06',
    title: 'Grow',
    description: 'Track what the data says, and keep improving what the site earns you.',
  },
];

export const growthStages = [
  { label: 'Website', description: 'A fast, well-built foundation' },
  { label: 'SEO', description: 'Structured to be found' },
  { label: 'Traffic', description: 'The right people arrive' },
  { label: 'Leads', description: 'Visitors take action' },
  { label: 'Growth', description: 'The business compounds' },
];

export const serviceOptions = [
  'Web Development',
  'App Development',
  'Digital Marketing',
  'SEO',
  'Other',
];
