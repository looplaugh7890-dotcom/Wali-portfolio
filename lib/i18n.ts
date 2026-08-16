export type Language = 'en' | 'zh' | 'ar' | 'fr' | 'es';

export const languages: { code: Language; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'zh', label: '中文', dir: 'ltr' },
  { code: 'ar', label: 'عربي', dir: 'rtl' },
  { code: 'fr', label: 'FR', dir: 'ltr' },
  { code: 'es', label: 'ES', dir: 'ltr' },
];

export type TranslationKeys = {
  // Site config
  siteName: string;
  siteRole: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  ctaPrimary: string;
  ctaSecondary: string;
  email: string;
  phone: string;
  location: string;
  statsProjects: string;
  statsClients: string;
  statsYears: string;

  // Nav
  navHome: string;
  navAbout: string;
  navServices: string;
  navWork: string;
  navProcess: string;
  navTestimonials: string;
  navContact: string;
  letsTalk: string;

  // Hero
  floatingLabel1: string;
  floatingLabel2: string;
  floatingLabel3: string;
  availableForProjects: string;
  scrollLabel: string;
  heroAlt: string;

  // About
  aboutEyebrow: string;
  aboutHeading: string;
  aboutP1: string;
  aboutP2: string;
  aboutP3: string;
  timeline1Label: string;
  timeline2Label: string;
  timeline3Label: string;
  timeline4Label: string;

  // Services
  servicesEyebrow: string;
  servicesTitle: string;
  webDevTitle: string;
  webDevShort: string;
  webDevDesc: string;
  webDevD1: string;
  webDevD2: string;
  webDevD3: string;
  webDevD4: string;
  appDevTitle: string;
  appDevShort: string;
  appDevDesc: string;
  appDevD1: string;
  appDevD2: string;
  appDevD3: string;
  appDevD4: string;
  digitalMarketingTitle: string;
  digitalMarketingShort: string;
  digitalMarketingDesc: string;
  digitalMarketingD1: string;
  digitalMarketingD2: string;
  digitalMarketingD3: string;
  digitalMarketingD4: string;
  shopifyDevTitle: string;
  shopifyDevShort: string;
  shopifyDevDesc: string;
  shopifyDevD1: string;
  shopifyDevD2: string;
  shopifyDevD3: string;
  shopifyDevD4: string;
  wordpressDevTitle: string;
  wordpressDevShort: string;
  wordpressDevDesc: string;
  wordpressDevD1: string;
  wordpressDevD2: string;
  wordpressDevD3: string;
  wordpressDevD4: string;
  covers: string;
  technologies: string;

  // TechStack
  techEyebrow: string;
  techFrontend: string;
  techBackend: string;
  techDatabase: string;
  techMarketing: string;

  // Portfolio
  portfolioEyebrow: string;
  portfolioTitle: string;
  portfolioEmpty: string;
  portfolioEmptyDesc: string;

  // Process
  processEyebrow: string;
  processTitle: string;
  process1Title: string;
  process1Desc: string;
  process2Title: string;
  process2Desc: string;
  process3Title: string;
  process3Desc: string;
  process4Title: string;
  process4Desc: string;
  process5Title: string;
  process5Desc: string;
  process6Title: string;
  process6Desc: string;

  // Growth
  growthEyebrow: string;
  growthTitle: string;
  growthStage1: string;
  growthStage1Desc: string;
  growthStage2: string;
  growthStage2Desc: string;
  growthStage3: string;
  growthStage3Desc: string;
  growthStage4: string;
  growthStage4Desc: string;
  growthStage5: string;
  growthStage5Desc: string;

  // Testimonials
  testimonialsEyebrow: string;
  testimonialsTitle: string;

  // Blog
  blogEyebrow: string;
  blogTitle: string;
  blogViewAll: string;

  // Contact
  contactEyebrow: string;
  contactTitle: string;
  contactIntro: string;
  contactName: string;
  contactNamePlaceholder: string;
  contactEmail: string;
  contactEmailPlaceholder: string;
  contactPhone: string;
  contactPhonePlaceholder: string;
  contactService: string;
  contactServicePlaceholder: string;
  contactBudget: string;
  contactBudgetPlaceholder: string;
  contactMessage: string;
  contactMessagePlaceholder: string;
  contactSending: string;
  contactSubmit: string;
  contactSuccessTitle: string;
  contactSuccessDesc: string;
  contactSendAnother: string;
  contactError: string;
  contactNetworkError: string;

  // Footer
  footerAvailable: string;
  footerCollaborate: string;
  footerCta: string;
  footerNavigate: string;
  footerContact: string;
  footerElsewhere: string;
  footerRights: string;
  footerAdmin: string;

  // Services dropdown
  serviceOpt1: string;
  serviceOpt2: string;
  serviceOpt3: string;
  serviceOpt4: string;
  serviceOpt5: string;
  serviceOpt6: string;
  serviceOpt7: string;
};

const en: TranslationKeys = {
  siteName: 'Wali Aslam',
  siteRole: 'Web & App Developer + Digital Marketer',
  eyebrow: 'WEB · APP · MARKETING',
  headline: 'Built well. Found easily. Grown deliberately.',
  subhead: "I design and build websites and apps, then bring the marketing that gets the right people to them. One person, two disciplines, one outcome — growth you can measure.",
  ctaPrimary: 'Start a Project',
  ctaSecondary: 'View My Work',
  email: 'hello@waliaslam.dev',
  phone: '+92 3172254574',
  location: 'Pakistan',
  statsProjects: 'Projects Shipped',
  statsClients: 'Happy Clients',
  statsYears: 'Years Experience',

  navHome: 'Home',
  navAbout: 'About',
  navServices: 'Services',
  navWork: 'Work',
  navProcess: 'Process',
  navTestimonials: 'Testimonials',
  navContact: 'Contact',
  letsTalk: "Let's Talk",

  floatingLabel1: 'Web Development',
  floatingLabel2: 'App Development',
  floatingLabel3: 'Digital Marketing',
  availableForProjects: 'Available for projects',
  scrollLabel: 'Scroll',
  heroAlt: 'Wali Aslam — Web Developer & Digital Marketer',

  aboutEyebrow: 'About',
  aboutHeading: 'Turning ideas into digital experiences.',
  aboutP1: "I work at the point where development and marketing meet — the place most agencies split across two teams that barely talk to each other. I don't.",
  aboutP2: "I build the site or app, and I build it knowing exactly how it needs to load, rank, and convert once it's live. That means fewer handoffs, fewer misunderstandings, and a product that's built to perform from day one — not patched after the fact.",
  aboutP3: "If you want a partner who thinks about your business outcomes as much as your codebase, that's the work I do.",
  timeline1Label: 'Started freelancing in web development',
  timeline2Label: 'Expanded into app development',
  timeline3Label: 'Added digital marketing to the offering',
  timeline4Label: 'Building full digital experiences, end to end',

  servicesEyebrow: 'What I Do',
  servicesTitle: 'Five disciplines. One outcome.',
  webDevTitle: 'Web Development',
  webDevShort: 'Fast, modern websites and web apps built around business goals.',
  webDevDesc: "Custom-built sites and web applications — no bloated page builders, no cut corners. Every project is built for speed, clarity, and a clean path to whatever action you want a visitor to take.",
  webDevD1: 'Marketing websites',
  webDevD2: 'Web applications',
  webDevD3: 'E-commerce',
  webDevD4: 'CMS integrations',
  appDevTitle: 'App Development',
  appDevShort: 'Mobile and cross-platform apps built on scalable architecture.',
  appDevDesc: 'From first prototype to app-store launch — apps built to hold up under real usage, with an architecture that can grow with your user base instead of fighting it.',
  appDevD1: 'Cross-platform apps',
  appDevD2: 'MVP builds',
  appDevD3: 'API architecture',
  appDevD4: 'Backend systems',
  digitalMarketingTitle: 'Digital Marketing',
  digitalMarketingShort: 'Strategy focused on visibility, traffic, and qualified leads.',
  digitalMarketingDesc: "A website is only worth what it earns you. I handle the SEO foundation, analytics, and growth strategy that turns a finished build into a channel that keeps producing leads long after launch.",
  digitalMarketingD1: 'Technical SEO',
  digitalMarketingD2: 'Analytics setup',
  digitalMarketingD3: 'Content strategy',
  digitalMarketingD4: 'Performance marketing',
  shopifyDevTitle: 'Shopify Development',
  shopifyDevShort: 'Custom Shopify stores built for conversions and growth.',
  shopifyDevDesc: "Custom Shopify themes, apps, and integrations — built to convert visitors into customers. From store setup to advanced customization, every detail optimized for sales.",
  shopifyDevD1: 'Custom theme development',
  shopifyDevD2: 'Shopify apps & integrations',
  shopifyDevD3: 'Store migration',
  shopifyDevD4: 'Performance optimization',
  wordpressDevTitle: 'WordPress Development',
  wordpressDevShort: 'Professional WordPress sites with custom themes and plugins.',
  wordpressDevDesc: "Custom WordPress themes and plugins — no generic page builders. Every site is built for speed, security, and easy content management that your team can handle.",
  wordpressDevD1: 'Custom theme development',
  wordpressDevD2: 'Plugin development',
  wordpressDevD3: 'WooCommerce stores',
  wordpressDevD4: 'Site maintenance',
  covers: 'Covers',
  technologies: 'Technologies',

  techEyebrow: 'Toolkit',
  techFrontend: 'Frontend',
  techBackend: 'Backend',
  techDatabase: 'Database',
  techMarketing: 'Marketing',

  portfolioEyebrow: 'Selected Work',
  portfolioTitle: 'Projects that shipped, and performed.',
  portfolioEmpty: 'No published projects yet',
  portfolioEmptyDesc: 'Add your first case study from /admin/projects — it will appear here once published.',

  processEyebrow: 'How I Work',
  processTitle: 'A process built to remove guesswork.',
  process1Title: 'Discover',
  process1Desc: 'Understand the business, the audience, and what success actually looks like.',
  process2Title: 'Plan',
  process2Desc: 'Map the information architecture, scope, and technical approach before any code is written.',
  process3Title: 'Design',
  process3Desc: 'Design around your brand and your users — never a generic template.',
  process4Title: 'Develop',
  process4Desc: 'Build on clean, typed, maintainable code — reviewed and tested as it ships.',
  process5Title: 'Launch',
  process5Desc: 'Deploy, verify, and monitor — performance and SEO checked before going live.',
  process6Title: 'Grow',
  process6Desc: 'Track what the data says, and keep improving what the site earns you.',

  growthEyebrow: 'The Full Loop',
  growthTitle: "I don't just build websites. I build what happens after.",
  growthStage1: 'Website',
  growthStage1Desc: 'A fast, well-built foundation',
  growthStage2: 'SEO',
  growthStage2Desc: 'Structured to be found',
  growthStage3: 'Traffic',
  growthStage3Desc: 'The right people arrive',
  growthStage4: 'Leads',
  growthStage4Desc: 'Visitors take action',
  growthStage5: 'Growth',
  growthStage5Desc: 'The business compounds',

  testimonialsEyebrow: 'Client Words',
  testimonialsTitle: "What it's like to work together.",

  blogEyebrow: 'Writing',
  blogTitle: 'Notes on building and growing.',
  blogViewAll: 'View all posts',

  contactEyebrow: 'Get In Touch',
  contactTitle: "Let's build something that matters.",
  contactIntro: "Tell me about the project — what you're building, who it's for, and what success looks like. I reply to every message personally, usually within a day.",
  contactName: 'Name',
  contactNamePlaceholder: 'Your name',
  contactEmail: 'Email',
  contactEmailPlaceholder: 'you@company.com',
  contactPhone: 'Phone (optional)',
  contactPhonePlaceholder: '+92 3172254574',
  contactService: 'Service',
  contactServicePlaceholder: 'Select a service',
  contactBudget: 'Budget (optional)',
  contactBudgetPlaceholder: 'e.g. $1,000 – $5,000',
  contactMessage: 'Message',
  contactMessagePlaceholder: 'What are you looking to build?',
  contactSending: 'Sending...',
  contactSubmit: 'Start a Project',
  contactSuccessTitle: 'Message sent.',
  contactSuccessDesc: "Thanks for reaching out — I'll get back to you soon.",
  contactSendAnother: 'Send another message',
  contactError: 'Something went wrong. Try again in a moment.',
  contactNetworkError: 'Could not reach the server. Check your connection and try again.',

  footerAvailable: 'Available for Work',
  footerCollaborate: "Let's Collaborate",
  footerCta: "Let's work together.",
  footerNavigate: 'Navigate',
  footerContact: 'Contact',
  footerElsewhere: 'Elsewhere',
  footerRights: 'All rights reserved.',
  footerAdmin: 'Admin',

  serviceOpt1: 'Web Development',
  serviceOpt2: 'App Development',
  serviceOpt3: 'Digital Marketing',
  serviceOpt4: 'SEO',
  serviceOpt5: 'Shopify Development',
  serviceOpt6: 'WordPress Development',
  serviceOpt7: 'Other',
};

const zh: TranslationKeys = {
  siteName: 'Wali Aslam',
  siteRole: '网站与应用开发者 + 数字营销专家',
  eyebrow: '网站 · 应用 · 营销',
  headline: '精于构建，易于发现，持续增长。',
  subhead: '我设计并构建网站和应用，然后通过营销将合适的用户吸引过来。一人身兼两个领域，一个目标——可衡量的增长。',
  ctaPrimary: '开始项目',
  ctaSecondary: '查看作品',
  email: 'hello@waliaslam.dev',
  phone: '+92 3172254574',
  location: '巴基斯坦',
  statsProjects: '已交付项目',
  statsClients: '满意客户',
  statsYears: '年经验',

  navHome: '首页',
  navAbout: '关于',
  navServices: '服务',
  navWork: '作品',
  navProcess: '流程',
  navTestimonials: '评价',
  navContact: '联系',
  letsTalk: '聊聊',

  floatingLabel1: '网站开发',
  floatingLabel2: '应用开发',
  floatingLabel3: '数字营销',
  availableForProjects: '可接项目',
  scrollLabel: '滚动',
  heroAlt: 'Wali Aslam — 网站开发者与数字营销专家',

  aboutEyebrow: '关于',
  aboutHeading: '将创意转化为数字体验。',
  aboutP1: '我在开发与营销的交汇点工作——这是大多数机构分成两个互不沟通的团队的地方。而我不是。',
  aboutP2: '我构建网站或应用，并且清楚地知道它上线后需要如何加载、排名和转化。这意味着更少的交接、更少的误解，以及一个从第一天起就能发挥作用的产品。',
  aboutP3: '如果你想要一个像你一样关心业务成果的合作伙伴，这就是我所做的工作。',
  timeline1Label: '开始自由职业网站开发',
  timeline2Label: '扩展到应用开发',
  timeline3Label: '将数字营销加入服务',
  timeline4Label: '端到端构建完整数字体验',

  servicesEyebrow: '我能做什么',
  servicesTitle: '五个领域，一个结果。',
  webDevTitle: '网站开发',
  webDevShort: '围绕业务目标构建的快速现代网站和Web应用。',
  webDevDesc: '定制开发的网站和Web应用——没有臃肿的页面构建器，没有偷工减料。每个项目都为速度、清晰度和转化路径而构建。',
  webDevD1: '营销网站',
  webDevD2: 'Web应用',
  webDevD3: '电子商务',
  webDevD4: 'CMS集成',
  appDevTitle: '应用开发',
  appDevShort: '基于可扩展架构的移动和跨平台应用。',
  appDevDesc: '从第一个原型到应用商店发布——构建能承受真实使用场景的应用，架构能随用户增长而扩展。',
  appDevD1: '跨平台应用',
  appDevD2: 'MVP构建',
  appDevD3: 'API架构',
  appDevD4: '后端系统',
  digitalMarketingTitle: '数字营销',
  digitalMarketingShort: '专注于可见性、流量和合格潜在客户的策略。',
  digitalMarketingDesc: '网站的价值取决于它为你带来的收益。我负责SEO基础、分析和增长策略，将完成的构建转化为持续产生潜在客户的渠道。',
  digitalMarketingD1: '技术SEO',
  digitalMarketingD2: '分析设置',
  digitalMarketingD3: '内容策略',
  digitalMarketingD4: '效果营销',
  shopifyDevTitle: 'Shopify开发',
  shopifyDevShort: '为转化和增长定制的Shopify商店。',
  shopifyDevDesc: '定制Shopify主题、应用和集成——为将访客转化为客户而构建。从店铺设置到高级定制，每个细节都为销售优化。',
  shopifyDevD1: '定制主题开发',
  shopifyDevD2: 'Shopify应用与集成',
  shopifyDevD3: '店铺迁移',
  shopifyDevD4: '性能优化',
  wordpressDevTitle: 'WordPress开发',
  wordpressDevShort: '具有自定义主题和插件的专业WordPress网站。',
  wordpressDevDesc: '定制WordPress主题和插件——没有通用的页面构建器。每个网站都为速度、安全性和易于内容管理而构建。',
  wordpressDevD1: '定制主题开发',
  wordpressDevD2: '插件开发',
  wordpressDevD3: 'WooCommerce商店',
  wordpressDevD4: '网站维护',
  covers: '涵盖',
  technologies: '技术栈',

  techEyebrow: '工具箱',
  techFrontend: '前端',
  techBackend: '后端',
  techDatabase: '数据库',
  techMarketing: '营销',

  portfolioEyebrow: '精选作品',
  portfolioTitle: '已发布并取得成效的项目。',
  portfolioEmpty: '暂无已发布项目',
  portfolioEmptyDesc: '从 /admin/projects 添加你的第一个案例研究——发布后将显示在此处。',

  processEyebrow: '工作流程',
  processTitle: '一个消除猜测的过程。',
  process1Title: '发现',
  process1Desc: '了解业务、受众和成功的真正含义。',
  process2Title: '规划',
  process2Desc: '在编写任何代码之前，规划信息架构、范围和技术方案。',
  process3Title: '设计',
  process3Desc: '围绕你的品牌和用户进行设计——绝不使用通用模板。',
  process4Title: '开发',
  process4Desc: '基于干净、类型化、可维护的代码构建——经过审查和测试后发布。',
  process5Title: '上线',
  process5Desc: '部署、验证和监控——上线前检查性能和SEO。',
  process6Title: '增长',
  process6Desc: '跟踪数据反馈，持续提升网站为你带来的收益。',

  growthEyebrow: '完整闭环',
  growthTitle: '我不仅构建网站，我构建网站上线后的一切。',
  growthStage1: '网站',
  growthStage1Desc: '快速、构建良好的基础',
  growthStage2: 'SEO',
  growthStage2Desc: '结构化以便被发现',
  growthStage3: '流量',
  growthStage3Desc: '对的人到访',
  growthStage4: '潜在客户',
  growthStage4Desc: '访客采取行动',
  growthStage5: '增长',
  growthStage5Desc: '业务持续增长',

  testimonialsEyebrow: '客户评价',
  testimonialsTitle: '合作体验如何。',

  blogEyebrow: '文章',
  blogTitle: '关于构建和增长的笔记。',
  blogViewAll: '查看所有文章',

  contactEyebrow: '联系我',
  contactTitle: '让我们一起构建有价值的东西。',
  contactIntro: '告诉我你的项目——你在构建什么，为谁构建，成功是什么样子。我会亲自回复每条消息，通常在一天内。',
  contactName: '姓名',
  contactNamePlaceholder: '你的姓名',
  contactEmail: '邮箱',
  contactEmailPlaceholder: 'you@company.com',
  contactPhone: '电话（可选）',
  contactPhonePlaceholder: '+92 3172254574',
  contactService: '服务类型',
  contactServicePlaceholder: '选择服务',
  contactBudget: '预算（可选）',
  contactBudgetPlaceholder: '例如 $1,000 – $5,000',
  contactMessage: '消息',
  contactMessagePlaceholder: '你想构建什么？',
  contactSending: '发送中...',
  contactSubmit: '开始项目',
  contactSuccessTitle: '消息已发送。',
  contactSuccessDesc: '感谢你的联系——我会尽快回复。',
  contactSendAnother: '发送另一条消息',
  contactError: '出了点问题。请稍后再试。',
  contactNetworkError: '无法连接到服务器。请检查网络连接后重试。',

  footerAvailable: '可接受工作',
  footerCollaborate: '让我们合作',
  footerCta: '一起合作吧。',
  footerNavigate: '导航',
  footerContact: '联系',
  footerElsewhere: '其他平台',
  footerRights: '保留所有权利。',
  footerAdmin: '管理',

  serviceOpt1: '网站开发',
  serviceOpt2: '应用开发',
  serviceOpt3: '数字营销',
  serviceOpt4: 'SEO',
  serviceOpt5: 'Shopify开发',
  serviceOpt6: 'WordPress开发',
  serviceOpt7: '其他',
};

const ar: TranslationKeys = {
  siteName: 'Wali Aslam',
  siteRole: 'مطور مواقع وتطبيقات + مسوّق رقمي',
  eyebrow: 'مواقع · تطبيقات · تسويق',
  headline: 'مبني جيداً. يُوجد بسهولة. ينمو بوعي.',
  subhead: 'أصمم وأبني المواقع والتطبيقات، ثم أحضر التسويق الذي يجلب الجمهور المناسب إليها. شخص واحد، تخصصان، نتيجة واحدة — نمو يمكنك قياسه.',
  ctaPrimary: 'ابدأ مشروعك',
  ctaSecondary: 'عرض أعمالي',
  email: 'hello@waliaslam.dev',
  phone: '+92 3172254574',
  location: 'باكستان',
  statsProjects: 'مشاريع منجزة',
  statsClients: 'عملاء سعداء',
  statsYears: 'سنوات خبرة',

  navHome: 'الرئيسية',
  navAbout: 'عني',
  navServices: 'الخدمات',
  navWork: 'الأعمال',
  navProcess: 'العملية',
  navTestimonials: 'الشهادات',
  navContact: 'اتصل',
  letsTalk: 'تحدث',

  floatingLabel1: 'تطوير المواقع',
  floatingLabel2: 'تطوير التطبيقات',
  floatingLabel3: 'التسويق الرقمي',
  availableForProjects: 'متاح للمشاريع',
  scrollLabel: 'تمرير',
  heroAlt: 'Wali Aslam — مطور مواقع ومسوّق رقمي',

  aboutEyebrow: 'عني',
  aboutHeading: 'تحويل الأفكار إلى تجارب رقمية.',
  aboutP1: 'أعمل عند نقطة التقاء التطوير والتسويق — المكان الذي تقسم فيه معظم الوكالتين فريقين لا يتحدثان إلى بعضهما البعض. أنا لا أفعل ذلك.',
  aboutP2: 'أبني الموقع أو التطبيق وأعرف بالضبط كيف يجب أن يعمل عند الإطلاق. هذا يعني fewer handoffs وأقل سوء فهم ومنتجاً مبنياً للعمل من اليوم الأول.',
  aboutP3: 'إذا كنت تبحث عن شريك يفكر في نتائج عملك بقدر تفكيره في قاعدة كودك، فهذه هي העבודה التي أفعلها.',
  timeline1Label: 'بدأت العمل الحر في تطوير المواقع',
  timeline2Label: 'توسعت إلى تطوير التطبيقات',
  timeline3Label: 'أضفت التسويق الرقمي إلى الخدمات',
  timeline4Label: 'بناء تجارب رقمية متكاملة من البداية',

  servicesEyebrow: 'ما أقدمه',
  servicesTitle: 'خمسة تخصصات. نتيجة واحدة.',
  webDevTitle: 'تطوير المواقع',
  webDevShort: 'مواقع وتطبيقات ويب سريعة وعصرية مبنية حول أهداف العمل.',
  webDevDesc: 'مواقع وتطبيقات ويب مبنية حسب الطلب — بدون منشئات مواقع مُثقلة أو اختصارات. كل مشروع مبني للسرعة والوضوح ومسار واضح للتحول.',
  webDevD1: 'مواقع تسويقية',
  webDevD2: 'تطبيقات ويب',
  webDevD3: 'التجارة الإلكترونية',
  webDevD4: 'تكامل أنظمة إدارة المحتوى',
  appDevTitle: 'تطوير التطبيقات',
  appDevShort: 'تطبيقات محمولة ومتعددة المنصات مبنية على بنية تحتية قابلة للتوسع.',
  appDevDesc: 'من النموذج الأولي إلى إطلاق المتجر — تطبيقات مبنية لتتحمل الاستخدام الفعلي، ببنية تحتية يمكن أن تنمو مع قاعدة المستخدمين.',
  appDevD1: 'تطبيقات متعددة المنصات',
  appDevD2: 'بناء المنتج الأولي',
  appDevD3: 'هندسة واجهات البرمجة',
  appDevD4: 'أنظمة الخلفية',
  digitalMarketingTitle: 'التسويق الرقمي',
  digitalMarketingShort: 'استراتيجية تركز على الرؤية والمرور والعملاء المحتملين المؤهلين.',
  digitalMarketingDesc: 'الموقع الإلكتروني لا يساوي إلا ما يجلبه لك. أتولى أساس SEO والتحليلات والاستراتيجية التي تحوّل المشروع المكتمل إلى قناة تواصل إنتاج العملاء المحتملين.',
  digitalMarketingD1: 'SEO التقني',
  digitalMarketingD2: 'إعداد التحليلات',
  digitalMarketingD3: 'استراتيجية المحتوى',
  digitalMarketingD4: 'التسويق بالأداء',
  shopifyDevTitle: 'تطوير Shopify',
  shopifyDevShort: 'متاجر Shopify مخصصة مبنية للتحويلات والنمو.',
  shopifyDevDesc: 'سمات Shopify مخصصة وتطبيقات وتكاملات — مبنية لتحويل الزوار إلى عملاء. من إعداد المتجر إلى التخصيص المتقدم.',
  shopifyDevD1: 'تطوير سمات مخصصة',
  shopifyDevD2: 'تطبيقات وتكاملات Shopify',
  shopifyDevD3: 'ترحيل المتجر',
  shopifyDevD4: 'تحسين الأداء',
  wordpressDevTitle: 'تطوير WordPress',
  wordpressDevShort: 'مواقع WordPress احترافية مع سمات وإضافات مخصصة.',
  wordpressDevDesc: 'سمات WordPress مخصصة وإضافات — بدون منشئات صفحات عامة. كل موقع مبني للسرعة والأمان وسهولة إدارة المحتوى.',
  wordpressDevD1: 'تطوير سمات مخصصة',
  wordpressDevD2: 'تطوير الإضافات',
  wordpressDevD3: 'متاجر WooCommerce',
  wordpressDevD4: 'صيانة الموقع',
  covers: 'يشمل',
  technologies: 'التقنيات',

  techEyebrow: 'الأدوات',
  techFrontend: 'الواجهة الأمامية',
  techBackend: 'الخلفية',
  techDatabase: 'قاعدة البيانات',
  techMarketing: 'التسويق',

  portfolioEyebrow: 'أعمال مختارة',
  portfolioTitle: 'مشاريع أُطلقت وأثبتت نجاحها.',
  portfolioEmpty: 'لا توجد مشاريع منشورة بعد',
  portfolioEmptyDesc: 'أضف دراسة الحالة الأولى من /admin/projects — ستظهر هنا بعد النشر.',

  processEyebrow: 'كيف أعمل',
  processTitle: 'عملية مصممة لإزالة التخمين.',
  process1Title: 'الاكتشاف',
  process1Desc: 'فهم العمل والجمهور والنجاح الحقيقي.',
  process2Title: 'التخطيط',
  process2Desc: 'تحديد هندسة المعلومات والنطاق والنهج التقني قبل كتابة أي كود.',
  process3Title: 'التصميم',
  process3Desc: 'التصميم حول علامتك التجارية ومستخدميك — لا قوالب عامة أبداً.',
  process4Title: 'التطوير',
  process4Desc: 'البناء على كود نظيف وقابل للصيانة — مُراجع ومُختبر عند الإطلاق.',
  process5Title: 'الإطلاق',
  process5Desc: 'النشر والمراقبة — فحص الأداء وSEO قبل البث المباشر.',
  process6Title: 'النمو',
  process6Desc: 'تتبع ما تقوله البيانات وتحسين ما يحققه الموقع باستمرار.',

  growthEyebrow: 'الحلقة الكاملة',
  growthTitle: 'أنا لا أبني مواقع فقط. أبني ما يحدث بعدها.',
  growthStage1: 'الموقع',
  growthStage1Desc: 'أساس سريع ومبني جيداً',
  growthStage2: 'SEO',
  growthStage2Desc: 'محرر ليتم العثور عليه',
  growthStage3: 'المرور',
  growthStage3Desc: 'الجمهور المناسب يصل',
  growthStage4: 'العملاء المحتملون',
  growthStage4Desc: 'الزوار يتخذون إجراء',
  growthStage5: 'النمو',
  growthStage5Desc: 'العمل يتضاعف',

  testimonialsEyebrow: 'شهادات العملاء',
  testimonialsTitle: 'كيف يبدو العمل معاً.',

  blogEyebrow: 'مقالات',
  blogTitle: 'ملاحظات حول البناء والنمو.',
  blogViewAll: 'عرض جميع المقالات',

  contactEyebrow: 'تواصل معي',
  contactTitle: 'لنبنِ شيئاً مهم.',
  contactIntro: 'أخبرني عن مشروعك — ماذا تبني، ولمن، وكيف يبدو النجاح. أرد على كل رسالة شخصياً، عادةً خلال يوم.',
  contactName: 'الاسم',
  contactNamePlaceholder: 'اسمك',
  contactEmail: 'البريد الإلكتروني',
  contactEmailPlaceholder: 'you@company.com',
  contactPhone: 'الهاتف (اختياري)',
  contactPhonePlaceholder: '+92 3172254574',
  contactService: 'الخدمة',
  contactServicePlaceholder: 'اختر خدمة',
  contactBudget: 'الميزانية (اختياري)',
  contactBudgetPlaceholder: 'مثال: $1,000 – $5,000',
  contactMessage: 'الرسالة',
  contactMessagePlaceholder: 'ماذا تريد أن تبني؟',
  contactSending: 'إرسال...',
  contactSubmit: 'ابدأ مشروعك',
  contactSuccessTitle: 'تم إرسال الرسالة.',
  contactSuccessDesc: 'شكراً لتواصلك — سأرد عليك قريباً.',
  contactSendAnother: 'إرسال رسالة أخرى',
  contactError: 'حدث خطأ. حاول مرة أخرى.',
  contactNetworkError: 'تعذر الاتصال بالخادم. تحقق من اتصالك وحاول مرة أخرى.',

  footerAvailable: 'متاح للعمل',
  footerCollaborate: 'لنتعاون',
  footerCta: 'لنعمل معاً.',
  footerNavigate: 'التنقل',
  footerContact: 'اتصل',
  footerElsewhere: 'منصات أخرى',
  footerRights: 'جميع الحقوق محفوظة.',
  footerAdmin: 'الإدارة',

  serviceOpt1: 'تطوير المواقع',
  serviceOpt2: 'تطوير التطبيقات',
  serviceOpt3: 'التسويق الرقمي',
  serviceOpt4: 'SEO',
  serviceOpt5: 'تطوير Shopify',
  serviceOpt6: 'تطوير WordPress',
  serviceOpt7: 'أخرى',
};

const fr: TranslationKeys = {
  siteName: 'Wali Aslam',
  siteRole: 'Développeur Web & App + Marketeur Digital',
  eyebrow: 'WEB · APP · MARKETING',
  headline: 'Construit bien. Trouvé facilement. Grandi délibérément.',
  subhead: "Je conçois et développe des sites web et des applications, puis apporte le marketing qui amène les bonnes personnes. Une personne, deux disciplines, un résultat — une croissance mesurable.",
  ctaPrimary: 'Démarrer un projet',
  ctaSecondary: 'Voir mes travaux',
  email: 'hello@waliaslam.dev',
  phone: '+92 3172254574',
  location: 'Pakistan',
  statsProjects: 'Projets livrés',
  statsClients: 'Clients satisfaits',
  statsYears: "Années d'expérience",

  navHome: 'Accueil',
  navAbout: 'À propos',
  navServices: 'Services',
  navWork: 'Travaux',
  navProcess: 'Processus',
  navTestimonials: 'Témoignages',
  navContact: 'Contact',
  letsTalk: 'Discutons',

  floatingLabel1: 'Développement Web',
  floatingLabel2: 'Développement App',
  floatingLabel3: 'Marketing Digital',
  availableForProjects: 'Disponible pour projets',
  scrollLabel: 'Défiler',
  heroAlt: 'Wali Aslam — Développeur Web & Marketeur Digital',

  aboutEyebrow: 'À propos',
  aboutHeading: 'Transformer les idées en expériences numériques.',
  aboutP1: "Je travaille au croisement du développement et du marketing — là où la plupart des agences séparent deux équipes qui se parlent à peine. Moi, je ne le fais pas.",
  aboutP2: "Je construis le site ou l'application en sachant exactement comment il doit se comporter une fois en ligne. Moins de transferts, moins de malentendus, et un produit construit pour perform dès le premier jour.",
  aboutP3: "Si vous voulez un partenaire qui pense autant à vos résultats commerciaux qu'à votre codebase, c'est le travail que je fais.",
  timeline1Label: 'Commencé le free-lance en développement web',
  timeline2Label: 'Étendu au développement d applications',
  timeline3Label: 'Ajouté le marketing digital aux services',
  timeline4Label: "Construire des expériences numériques complètes, de bout en bout",

  servicesEyebrow: 'Ce que je fais',
  servicesTitle: 'Cinq disciplines. Un résultat.',
  webDevTitle: 'Développement Web',
  webDevShort: 'Sites et applications web rapides et modernes construits autour des objectifs métier.',
  webDevDesc: "Sites et applications web sur mesure — sans constructeurs de pages surchargés. Chaque projet est construit pour la rapidité, la clarté et un parcours vers l'action souhaitée.",
  webDevD1: 'Sites marketing',
  webDevD2: 'Applications web',
  webDevD3: 'E-commerce',
  webDevD4: 'Intégrations CMS',
  appDevTitle: 'Développement App',
  appDevShort: 'Applications mobiles et multiplateformes construites sur une architecture évolutive.',
  appDevDesc: 'Du premier prototype au lancement sur les stores — des applications construites pour résister à une utilisation réelle, avec une architecture qui grandit avec vos utilisateurs.',
  appDevD1: 'Applications multiplateformes',
  appDevD2: 'Constructions MVP',
  appDevD3: 'Architecture API',
  appDevD4: 'Systèmes backend',
  digitalMarketingTitle: 'Marketing Digital',
  digitalMarketingShort: 'Stratégie axée sur la visibilité, le trafic et les prospects qualifiés.',
  digitalMarketingDesc: "Un site web ne vaut que ce qu'il vous rapporte. Je gère les fondations SEO, l'analyse et la stratégie de croissance qui transforment un projet terminé en un canal qui produit des prospects.",
  digitalMarketingD1: 'SEO technique',
  digitalMarketingD2: "Configuration de l'analytique",
  digitalMarketingD3: 'Stratégie de contenu',
  digitalMarketingD4: 'Marketing de performance',
  shopifyDevTitle: 'Développement Shopify',
  shopifyDevShort: 'Boutiques Shopify personnalisées conçues pour les conversions et la croissance.',
  shopifyDevDesc: 'Thèmes, applications et intégrations Shopify personnalisés — conçus pour convertir les visiteurs en clients. De la configuration de la boutique à la personnalisation avancée.',
  shopifyDevD1: 'Développement de thèmes personnalisés',
  shopifyDevD2: 'Applications et intégrations Shopify',
  shopifyDevD3: 'Migration de boutique',
  shopifyDevD4: 'Optimisation des performances',
  wordpressDevTitle: 'Développement WordPress',
  wordpressDevShort: 'Sites WordPress professionnels avec thèmes et plugins personnalisés.',
  wordpressDevDesc: 'Thèmes et plugins WordPress personnalisés — sans constructeurs de pages génériques. Chaque site est construit pour la rapidité, la sécurité et la gestion facile du contenu.',
  wordpressDevD1: 'Développement de thèmes personnalisés',
  wordpressDevD2: 'Développement de plugins',
  wordpressDevD3: 'Boutiques WooCommerce',
  wordpressDevD4: 'Maintenance du site',
  covers: 'Couvre',
  technologies: 'Technologies',

  techEyebrow: 'Boîte à outils',
  techFrontend: 'Frontend',
  techBackend: 'Backend',
  techDatabase: 'Base de données',
  techMarketing: 'Marketing',

  portfolioEyebrow: 'Travaux sélectionnés',
  portfolioTitle: 'Projets lancés et performants.',
  portfolioEmpty: 'Aucun projet publié pour le moment',
  portfolioEmptyDesc: "Ajoutez votre première étude de cas depuis /admin/projects — elle apparaîtra ici une fois publiée.",

  processEyebrow: 'Comment je travaille',
  processTitle: 'Un processus conçu pour éliminer les suppositions.',
  process1Title: 'Découvrir',
  process1Desc: "Comprendre l'entreprise, le public et ce à quoi ressemble le vrai succès.",
  process2Title: "Planifier",
  process2Desc: "Cartographier l'architecture de l'information, la portée et l'approche technique avant d'écrire le moindre code.",
  process3Title: 'Concevoir',
  process3Desc: 'Concevoir autour de votre marque et de vos utilisateurs — jamais de modèle générique.',
  process4Title: 'Développer',
  process4Desc: 'Construire sur du code propre, typé et maintenable — revu et testé à la livraison.',
  process5Title: 'Lancer',
  process5Desc: 'Déployer, vérifier et surveiller — performances et SEO vérifiés avant le lancement.',
  process6Title: 'Grandir',
  process6Desc: "Suivre ce que disent les données, et améliorer continuellement ce que le site vous rapporte.",

  growthEyebrow: 'La boucle complète',
  growthTitle: "Je ne construis pas seulement des sites web. Je construis ce qui se passe après.",
  growthStage1: 'Site web',
  growthStage1Desc: 'Une base rapide et bien construite',
  growthStage2: 'SEO',
  growthStage2Desc: 'Structuré pour être trouvé',
  growthStage3: 'Trafic',
  growthStage3Desc: 'Les bonnes personnes arrivent',
  growthStage4: 'Prospects',
  growthStage4Desc: 'Les visiteurs agissent',
  growthStage5: 'Croissance',
  growthStage5Desc: "L'entreprise se développe",

  testimonialsEyebrow: 'Paroles de clients',
  testimonialsTitle: "À quoi ressemble la collaboration.",

  blogEyebrow: 'Articles',
  blogTitle: 'Notes sur la construction et la croissance.',
  blogViewAll: 'Voir tous les articles',

  contactEyebrow: 'Contactez-moi',
  contactTitle: 'Construisons quelque chose qui compte.',
  contactIntro: "Parlez-moi de votre projet — ce que vous construisez, pour qui, et à quoi ressemble le succès. Je réponds personnellement à chaque message, généralement dans la journée.",
  contactName: 'Nom',
  contactNamePlaceholder: 'Votre nom',
  contactEmail: 'Email',
  contactEmailPlaceholder: 'vous@entreprise.com',
  contactPhone: 'Téléphone (optionnel)',
  contactPhonePlaceholder: '+92 3172254574',
  contactService: 'Service',
  contactServicePlaceholder: 'Choisir un service',
  contactBudget: 'Budget (optionnel)',
  contactBudgetPlaceholder: 'ex. $1,000 – $5,000',
  contactMessage: 'Message',
  contactMessagePlaceholder: 'Que souhaitez-vous construire ?',
  contactSending: 'Envoi...',
  contactSubmit: 'Démarrer un projet',
  contactSuccessTitle: 'Message envoyé.',
  contactSuccessDesc: "Merci de m'avoir contacté — je vous répondrai bientôt.",
  contactSendAnother: 'Envoyer un autre message',
  contactError: "Quelque chose s'est mal passé. Réessayez dans un instant.",
  contactNetworkError: 'Impossible de contacter le serveur. Vérifiez votre connexion et réessayez.',

  footerAvailable: 'Disponible pour travail',
  footerCollaborate: 'Collaborons',
  footerCta: 'Travaillons ensemble.',
  footerNavigate: 'Navigation',
  footerContact: 'Contact',
  footerElsewhere: 'Ailleurs',
  footerRights: 'Tous droits réservés.',
  footerAdmin: 'Admin',

  serviceOpt1: 'Développement Web',
  serviceOpt2: 'Développement App',
  serviceOpt3: 'Marketing Digital',
  serviceOpt4: 'SEO',
  serviceOpt5: 'Développement Shopify',
  serviceOpt6: 'Développement WordPress',
  serviceOpt7: 'Autre',
};

const es: TranslationKeys = {
  siteName: 'Wali Aslam',
  siteRole: 'Desarrollador Web y de Apps + Marketing Digital',
  eyebrow: 'WEB · APP · MARKETING',
  headline: 'Bien construido. Fácil de encontrar. Crecido con propósito.',
  subhead: 'Diseño y construyo sitios web y aplicaciones, luego traigo el marketing que trae a las personas correctas. Una persona, dos disciplinas, un resultado — crecimiento medible.',
  ctaPrimary: 'Iniciar un proyecto',
  ctaSecondary: 'Ver mi trabajo',
  email: 'hello@waliaslam.dev',
  phone: '+92 3172254574',
  location: 'Pakistán',
  statsProjects: 'Proyectos entregados',
  statsClients: 'Clientes felices',
  statsYears: 'Años de experiencia',

  navHome: 'Inicio',
  navAbout: 'Acerca de',
  navServices: 'Servicios',
  navWork: 'Trabajo',
  navProcess: 'Proceso',
  navTestimonials: 'Testimonios',
  navContact: 'Contacto',
  letsTalk: 'Hablemos',

  floatingLabel1: 'Desarrollo Web',
  floatingLabel2: 'Desarrollo de Apps',
  floatingLabel3: 'Marketing Digital',
  availableForProjects: 'Disponible para proyectos',
  scrollLabel: 'Desplazar',
  heroAlt: 'Wali Aslam — Desarrollador Web y Marketing Digital',

  aboutEyebrow: 'Acerca de',
  aboutHeading: 'Convirtiendo ideas en experiencias digitales.',
  aboutP1: 'Trabajo en el punto donde se encuentran el desarrollo y el marketing — el lugar donde la mayoría de agencias dividen a dos equipos que apenas se hablan. Yo no.',
  aboutP2: 'Construyo el sitio o la aplicación y lo hago sabiendo exactamente cómo debe funcionar una vez en vivo. Menos transferencias, menos malentendidos, y un producto construido para rendir desde el primer día.',
  aboutP3: 'Si quieres un socio que piense tanto en tus resultados de negocio como en tu código, ese es el trabajo que hago.',
  timeline1Label: 'Empecé freelance en desarrollo web',
  timeline2Label: 'Expandido al desarrollo de apps',
  timeline3Label: 'Agregado marketing digital al servicio',
  timeline4Label: 'Construyendo experiencias digitales completas, de principio a fin',

  servicesEyebrow: 'Lo que hago',
  servicesTitle: 'Cinco disciplinas. Un resultado.',
  webDevTitle: 'Desarrollo Web',
  webDevShort: 'Sitios y aplicaciones web rápidos y modernos construidos alrededor de objetivos de negocio.',
  webDevDesc: 'Sitios y aplicaciones web personalizados — sin constructores de páginas pesados. Cada proyecto está construido para velocidad, claridad y un camino claro hacia la acción deseada.',
  webDevD1: 'Sitios de marketing',
  webDevD2: 'Aplicaciones web',
  webDevD3: 'E-commerce',
  webDevD4: 'Integraciones CMS',
  appDevTitle: 'Desarrollo de Apps',
  appDevShort: 'Aplicaciones móviles y multiplataforma construidas sobre arquitectura escalable.',
  appDevDesc: 'Del primer prototipo al lanzamiento en tiendas — aplicaciones construidas para resistir uso real, con una arquitectura que crece con tu base de usuarios.',
  appDevD1: 'Apps multiplataforma',
  appDevD2: 'Construcciones MVP',
  appDevD3: 'Arquitectura API',
  appDevD4: 'Sistemas backend',
  digitalMarketingTitle: 'Marketing Digital',
  digitalMarketingShort: 'Estrategia enfocada en visibilidad, tráfico y clientes potenciales calificados.',
  digitalMarketingDesc: 'Un sitio web solo vale lo que te genera. Manejo los cimientos de SEO, analítica y estrategia de crecimiento que transforman un proyecto terminado en un canal que produce clientes potenciales.',
  digitalMarketingD1: 'SEO técnico',
  digitalMarketingD2: 'Configuración de analítica',
  digitalMarketingD3: 'Estrategia de contenido',
  digitalMarketingD4: 'Marketing de rendimiento',
  shopifyDevTitle: 'Desarrollo Shopify',
  shopifyDevShort: 'Tiendas Shopify personalizadas diseñadas para conversiones y crecimiento.',
  shopifyDevDesc: 'Temas, aplicaciones e integraciones Shopify personalizados — diseñados para convertir visitantes en clientes. Desde la configuración de la tienda hasta la personalización avanzada.',
  shopifyDevD1: 'Desarrollo de temas personalizados',
  shopifyDevD2: 'Aplicaciones e integraciones Shopify',
  shopifyDevD3: 'Migración de tienda',
  shopifyDevD4: 'Optimización de rendimiento',
  wordpressDevTitle: 'Desarrollo WordPress',
  wordpressDevShort: 'Sitios WordPress profesionales con temas y plugins personalizados.',
  wordpressDevDesc: 'Temas y plugins WordPress personalizados — sin constructores de páginas genéricos. Cada sitio está construido para velocidad, seguridad y fácil gestión de contenido.',
  wordpressDevD1: 'Desarrollo de temas personalizados',
  wordpressDevD2: 'Desarrollo de plugins',
  wordpressDevD3: 'Tiendas WooCommerce',
  wordpressDevD4: 'Mantenimiento del sitio',
  covers: 'Cubre',
  technologies: 'Tecnologías',

  techEyebrow: 'Caja de herramientas',
  techFrontend: 'Frontend',
  techBackend: 'Backend',
  techDatabase: 'Base de datos',
  techMarketing: 'Marketing',

  portfolioEyebrow: 'Trabajo seleccionado',
  portfolioTitle: 'Proyectos lanzados y con resultados.',
  portfolioEmpty: 'Aún no hay proyectos publicados',
  portfolioEmptyDesc: 'Agrega tu primer caso de estudio desde /admin/projects — aparecerá aquí una vez publicado.',

  processEyebrow: 'Cómo trabajo',
  processTitle: 'Un proceso diseñado para eliminar suposiciones.',
  process1Title: 'Descubrir',
  process1Desc: 'Entender el negocio, la audiencia y qué se ve el éxito real.',
  process2Title: 'Planificar',
  process2Desc: 'Mapear la arquitectura de información, alcance y enfoque técnico antes de escribir código.',
  process3Title: 'Diseñar',
  process3Desc: 'Diseñar alrededor de tu marca y tus usuarios — nunca una plantilla genérica.',
  process4Title: 'Desarrollar',
  process4Desc: 'Construir sobre código limpio, tipado y mantenible — revisado y probado al entregar.',
  process5Title: 'Lanzar',
  process5Desc: 'Desplegar, verificar y monitorear — rendimiento y SEO verificados antes de salir en vivo.',
  process6Title: 'Crecer',
  process6Desc: 'Rastrear lo que dicen los datos y mejorar continuamente lo que el sitio te genera.',

  growthEyebrow: 'El ciclo completo',
  growthTitle: 'No solo construyo sitios web. Construyo lo que pasa después.',
  growthStage1: 'Sitio web',
  growthStage1Desc: 'Una base rápida y bien construida',
  growthStage2: 'SEO',
  growthStage2Desc: 'Estructurado para ser encontrado',
  growthStage3: 'Tráfico',
  growthStage3Desc: 'Las personas correctas llegan',
  growthStage4: 'Clientes potenciales',
  growthStage4Desc: 'Los visitantes actúan',
  growthStage5: 'Crecimiento',
  growthStage5Desc: 'El negocio crece exponencialmente',

  testimonialsEyebrow: 'Palabras de clientes',
  testimonialsTitle: 'Cómo es trabajar juntos.',

  blogEyebrow: 'Artículos',
  blogTitle: 'Notas sobre construcción y crecimiento.',
  blogViewAll: 'Ver todos los artículos',

  contactEyebrow: 'Contáctame',
  contactTitle: 'Construyamos algo importante.',
  contactIntro: 'Cuéntame sobre el proyecto — qué estás construyendo, para quién y qué se ve el éxito. Respondo cada mensaje personalmente, generalmente en un día.',
  contactName: 'Nombre',
  contactNamePlaceholder: 'Tu nombre',
  contactEmail: 'Email',
  contactEmailPlaceholder: 'tu@empresa.com',
  contactPhone: 'Teléfono (opcional)',
  contactPhonePlaceholder: '+92 3172254574',
  contactService: 'Servicio',
  contactServicePlaceholder: 'Seleccionar servicio',
  contactBudget: 'Presupuesto (opcional)',
  contactBudgetPlaceholder: 'ej. $1,000 – $5,000',
  contactMessage: 'Mensaje',
  contactMessagePlaceholder: '¿Qué estás buscando construir?',
  contactSending: 'Enviando...',
  contactSubmit: 'Iniciar un proyecto',
  contactSuccessTitle: 'Mensaje enviado.',
  contactSuccessDesc: 'Gracias por comunicarte — te responderé pronto.',
  contactSendAnother: 'Enviar otro mensaje',
  contactError: 'Algo salió mal. Intenta de nuevo en un momento.',
  contactNetworkError: 'No se pudo conectar al servidor. Verifica tu conexión e intenta de nuevo.',

  footerAvailable: 'Disponible para trabajo',
  footerCollaborate: 'Colaboremos',
  footerCta: 'Trabajemos juntos.',
  footerNavigate: 'Navegar',
  footerContact: 'Contacto',
  footerElsewhere: 'En otro lugar',
  footerRights: 'Todos los derechos reservados.',
  footerAdmin: 'Admin',

  serviceOpt1: 'Desarrollo Web',
  serviceOpt2: 'Desarrollo de Apps',
  serviceOpt3: 'Marketing Digital',
  serviceOpt4: 'SEO',
  serviceOpt5: 'Desarrollo Shopify',
  serviceOpt6: 'Desarrollo WordPress',
  serviceOpt7: 'Otro',
};

export const translations: Record<Language, TranslationKeys> = {
  en,
  zh,
  ar,
  fr,
  es,
};
