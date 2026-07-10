import type {
  ExperienceCardParams,
  PackagesParams,
  ProjectsParams,
  TechnologiesParams,
  TestimonialParams,
} from "@/types";
import {
  mobile,
  backend,
  creator,
  web,
  typescript,
  codendot,
  gcb,
  weblayer,
  marka,
  wanderwise,
  comfy,
  evently,
  imaginify,
  react,
  js,
  redux,
  tailwind,
  bootstrap,
  sass,
  laravel,
  nestjs,
  sql,
  next,
  mongo,
  php,
  docker,
  halo,
  jest,
  npm,
  youapp,
  drv,
  onlyBackend,
  car,
  nextwork,
  arenax,
} from "@/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "packages",
    title: "Packages",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Magento Developer",
    icon: creator,
  },
];

const technologies: TechnologiesParams[] = [
  {
    name: "Next Js",
    icon: next,
  },
  {
    name: "React Js",
    icon: react,
  },
  {
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Mongo DB",
    icon: mongo,
  },
  {
    name: "Javascript",
    icon: js,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Tailwind Css",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Nest Js",
    icon: nestjs,
  },

  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const experiences: ExperienceCardParams[] = [
  {
    title: "Community Lead",
    company_name: "NextWork",
    icon: nextwork,
    iconBg: "#FFFFFF",
    date: "Nov 2025 – Present",
    points: [
      "Tech Used: AWS (S3, CloudFront), CI/CD, Cloud Infrastructure",
      "Spearheaded AWS educational sessions and mentored students on CI/CD pipelines and scalable cloud deployment strategies.",
      "Designed high-performance cloud architectures, leveraging CloudFront and S3 optimizations to serve as global benchmarks for educational content delivery.",
      "Demonstrated real-world performance differences using optimization tools across multiple regions, proving that media assets load multiple times faster via CloudFront than directly from S3.",
    ],
  },
  {
    title: "Senior Full Stack Developer (Short-term Contract)",
    company_name: "DRV",
    icon: drv,
    iconBg: "#FFFFFF",
    date: "Apr 2025 – Oct 2025",
    points: [
      "Tech Used: Node.js Frameworks, Vue.js, Laravel, TypeScript, PostgreSQL, AWS S3, PostHog",
      "Refactored frontend architecture using DDD principles, significantly enhancing maintainability and speeding up initial page loads.",
      "Implemented advanced SEO architectures (dynamic sitemaps, robots.txt customization, and semantic metadata), drastically improving search engine crawling efficiency and page indexation rates.",
      "Integrated PostHog analytics, tracking ~80% of user interactions to drive data-informed product decisions.",
      "Architected a secure, scalable document management system on AWS using presigned URLs, improving upload efficiency and ensuring strict data privacy for sensitive client files.",
      "Developed HubSpot Calendar integrations using modern frontend views and backend routing to enable streamlined client scheduling.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Gulf Crypto Bank",
    icon: gcb,
    iconBg: "#E6DEDD",
    date: "Apr 2024 – Jun 2025",
    points: [
      "Tech Used: Node.js Frameworks, NestJS, TypeScript, Redis, Laravel, MySQL, Microservices",
      "Developed and secured critical shareholder dashboards with OTP authentication; identified a major vulnerability impacting CEO-level access and led remediation efforts.",
      "Optimized application performance for 2,000+ shareholders, applying frontend optimizations like memoization and lazy loading to drastically reduce page load times.",
      "Optimized API latency by 80% (reducing response times from 600ms to 120ms) by deploying Redis cache layers and restructuring inefficient queries to significantly reduce database overhead.",
      "Transformed a monolithic application into a microservices architecture, enabling independent deployments and establishing clear domain boundaries across a multinational engineering team.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "WebLayer",
    icon: weblayer,
    iconBg: "#FED242",
    date: "Apr 2023 – Mar 2024",
    points: [
      "Tech Used: Laravel, SQL, ReactJS, Algolia, REST APIs, CI/CD",
      "Developed high-performance Laravel APIs supporting ~10,000 daily requests and scaling through rapid user growth.",
      "Architected modular backend features with strict architectural boundaries, establishing automated quality checks and pipelines to enforce code compliance and eliminate technical debt.",
      "Integrated Algolia search to replace legacy lookup systems, drastically reducing query latency from ~500ms to ~150ms while improving search relevance.",
      "Contributed to end-to-end deployments from development to production, minimizing downtime and ensuring smooth feature rollouts.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Marka Press",
    icon: marka,
    iconBg: "#000000",
    date: "Oct 2021 – Mar 2022",
    points: [
      "Tech Used: Node.js Frameworks, TypeScript, TailwindCSS, Bootstrap, Sass",
      "Delivered responsive, client-facing web solutions tailored closely to diverse client business objectives and cross-device consistency.",
      "Migrated legacy web applications to modern server-rendered frameworks, significantly improving Core Web Vitals, performance scores, and search engine indexing based on Lighthouse metrics.",
      "Collaborated directly with external stakeholders to gather system requirements and map technical implementations to business goals.",
    ],
  },
  {
    title: "Magento Developer",
    company_name: "CodenDot",
    icon: codendot,
    iconBg: "#FFFFFF",
    date: "Feb 2021 – Sep 2021",
    points: [
      "Tech Used: Magento 2, PHP, MySQL, Frontend (HTML, CSS, JS)",
      "Maintained complex Magento 2 eCommerce sites, delivering custom architectural solutions that drove online sales growth.",
      "Collaborated closely with UI/UX teams to optimize frontend features, enhance core usability, and minimize checkout friction.",
      "Interfaced directly with clients to troubleshoot system issues, optimize product listings, and ensure high client satisfaction.",
    ],
  },
];

const testimonials: TestimonialParams[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: ProjectsParams[] = [
  {
    name: "ArenaX",
    description:
      "A competitive talent-validation marketplace that transforms skill assessment into live, measurable performance data. Built with server-authoritative match logic, real-time leaderboards, anti-cheat mechanics, and enterprise recruiter workflows to let candidates prove their abilities through verified competitive challenges.",
    tags: [
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
      {
        name: "Supabase",
        backgroundColor: "bg-[#3ECF8E]",
      },
      {
        name: "Upstash",
        backgroundColor: "bg-[#00E599] text-black",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "Sentry",
        backgroundColor: "bg-[#362D59]",
      },
      {
        name: "Gmail",
        backgroundColor: "bg-[#FFFF] !text-black-200",
      },
      {
        name: "AI",
        backgroundColor: "bg-[#7C3AED] text-white",
      },
    ],
    image: arenax,
    source_code_link: "https://github.com/Moemen12/MindArena",
    live: "https://mind-arena-rho.vercel.app/",
  },
  {
    name: "Car Rental System",
    description:
      "A sophisticated car rental platform built with NestJS, featuring microservices architecture, real-time processing, and advanced security features.",
    tags: [
      {
        name: "nestjs",
        backgroundColor: "bg-[#E0234E]",
      },

      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },

      {
        name: "microservices",
        backgroundColor: "bg-[#B68740]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "rabbitMQ",
        backgroundColor: "bg-[#FF6600]",
      },
      {
        name: "Redis",
        backgroundColor: "bg-[#A81F13]",
      },
      {
        name: "Algolia",
        backgroundColor: "bg-[#0000FF]",
      },
      {
        name: "Stripe",
        backgroundColor: "bg-[#9D9AF1]",
      },
      {
        name: "Gmail",
        backgroundColor: "bg-[#FFFF] !text-black-200",
      },
    ],
    image: onlyBackend,
    source_code_link: "https://github.com/Moemen12/car-rental-system",
  },
  {
    name: "You App",
    description:
      "YOUAPP is a platform that connects users in a dynamic and interactive way. It enables seamless communication through real-time chat, personalized user profiles, and instant notifications, creating an engaging and collaborative environment.",
    tags: [
      {
        name: "nestjs",
        backgroundColor: "bg-[#E0234E]",
      },
      {
        name: "socketIO",
        backgroundColor: "bg-[#C0C0C0] text-black",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "microservices",
        backgroundColor: "bg-[#B68740]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "rabbitMQ",
        backgroundColor: "bg-[#FF6600]",
      },
      {
        name: "docker",
        backgroundColor: "bg-[#1D63ED]",
      },
    ],
    image: youapp,
    source_code_link: "https://github.com/Moemen12/YOUAPP_FULLSTACK_PROJECT",
  },
  {
    name: "Place Discovery",
    description:
      "Uncover exciting destinations with in-depth information, user reviews, and ratings. Effortlessly search for, bookmark, and share your favorite spots, add new locations you've visited.Enjoy a user-friendly interface that makes exploring and sharing your adventures a breeze.",
    tags: [
      {
        name: "react",
        backgroundColor: "bg-[#326DA5]",
      },
      {
        name: "laravel",
        backgroundColor: "bg-[#EB4432]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "sql",
        backgroundColor: "bg-[#4F46E5]",
      },
      {
        name: "Javascript",
        backgroundColor: "bg-[#DDB318]",
      },
      {
        name: "Algolia",
        backgroundColor: "bg-[#0000FF]",
      },
    ],
    image: wanderwise,
    source_code_link: "https://github.com/Moemen12/Place_discovery_app",
    live: "http://frontend.wanderwise.wanderwise.space",
  },
  {
    name: "Auto Parts Pro",
    description:
      "A complete platform for managing auto parts with search by brand, advanced filtering, and customizable views. Includes a dashboard to add, edit, and manage parts with pagination, Excel import/export, daily sales and debts tracking, plus secure authentication.",
    tags: [
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "postgres",
        backgroundColor: "bg-[#4F46E5]",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
    ],
    image: car,
    live: "https://saadeh-dashboard.vercel.app",
  },
  {
    name: "Halo Chat",
    description:
      "A chat app supports both individual and group chats, allowing users to send messages, update group information, and manage group members and photos. It includes features like message history, profile images, and user authentication",
    tags: [
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "Pusher",
        backgroundColor: "bg-[#7D6CAD]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
    ],
    image: halo,
    source_code_link: "https://github.com/Moemen12/Chat-app",
    live: "https://saadeh-chat.vercel.app",
  },
  {
    name: "Imaginify",
    description:
      "An AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.",
    tags: [
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "Clerk",
        backgroundColor: "bg-[#505050]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "Stripe",
        backgroundColor: "bg-[#9D9AF1]",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
      {
        name: "Cloundinary",
        backgroundColor: "bg-[#0000FF]",
      },
    ],
    image: imaginify,
    source_code_link: "https://github.com/Moemen12/Imaginify",
    live: "https://imaginify-eight-sandy.vercel.app",
  },
  {
    name: "Comfy Store",
    description:
      "Shop effortlessly with a user-friendly interface featuring product search, filtering options, and pagination. Customize your experience with color selection and quantity choices, all while enjoying dark mode and a seamless checkout process.",
    tags: [
      {
        name: "react",
        backgroundColor: "bg-[#326DA5]",
      },
      {
        name: "redux",
        backgroundColor: "bg-[#7149B9]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "Javascript",
        backgroundColor: "bg-[#DDB318]",
      },
    ],
    image: comfy,
    source_code_link: "https://github.com/Moemen12/comfy_Store",
    live: "https://comfy-saadeh.netlify.app",
  },
  {
    name: "Evently",
    description:
      "Discover and explore a diverse range of events with a streamlined experience,Each event page provides detailed information, ticket purchasing options, and user profiles to manage personal data and track purchased tickets.",
    tags: [
      {
        name: "nextjs",
        backgroundColor: "bg-black",
      },
      {
        name: "Clerk",
        backgroundColor: "bg-[#505050]",
      },
      {
        name: "Mongodb",
        backgroundColor: "bg-[#258E64]",
      },
      {
        name: "tailwind",
        backgroundColor: "bg-[#3ebfbb]",
      },
      {
        name: "Stripe",
        backgroundColor: "bg-[#9D9AF1]",
      },
      {
        name: "Typescript",
        backgroundColor: "bg-[#3178C6]",
      },
    ],
    image: evently,
    source_code_link: "https://github.com/Moemen12/Event_Platform",
    live: "https://event-platform-woad-delta-95.vercel.app",
  },
];
const packages: PackagesParams[] = [
  {
    name: "speech-command-engine",
    image: npm,
    version: "1.0.5",
    github_url: "https://github.com/Moemen12/speech-command-engine",
    npm_url: "https://www.npmjs.com/package/speech-command-engine",
  },

  {
    name: "nextray",
    image: npm,
    version: "1.0.0",
    github_url: "https://github.com/Moemen12/nextray",
    npm_url: "https://www.npmjs.com/package/@saadeh/nextray",
  },

  {
    name: "ext-sync",
    image: npm,
    version: "1.1.1",
    github_url: "https://github.com/Moemen12/ext-sync",
    npm_url: "https://www.npmjs.com/package/@saadeh/ext-sync",
  },
  {
    name: "valid-utils",
    image: npm,
    version: "1.0.1",
    github_url: "https://github.com/Moemen12/valid-utils",
    npm_url: "https://www.npmjs.com/package/valid-utils",
  },
  {
    name: "xlsx",
    image: npm,
    version: "0.20.3",
    github_url: "https://github.com/SheetJS/sheetjs",
    npm_url: "https://www.npmjs.com/package/@saadeh/xlsx",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  packages,
};
