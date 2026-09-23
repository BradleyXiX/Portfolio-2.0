export const myProjects = [
  {
    id: 1,
    title: "InsightScraper (SaaS Foundry)",
    description: "A serverless, multi-tenant B2B platform for automated lead scraping and filtering.",
    subDescription: [
      "Architected a production-ready, serverless SaaS platform that automatically scrapes and filters local business leads.",
      "Implemented strict data isolation using PostgreSQL Row-Level Security (RLS) and Clerk for multi-tenant organization management.",
      "Engineered an automated subscription lifecycle using Stripe Webhooks to gate API usage and handle automated grace periods.",
      "Deployed via Dockerized AWS Lambda functions with Reserved Concurrency to protect target server health."
    ],
    href: "https://insight-scraper.vercel.app/",
    source: "https://github.com/BradleyXiX/Insight-Scraper",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Next JS", path: "/assets/logos/nextjs-icon.svg" },
      { id: 2, name: "FastAPI", path: "/assets/logos/fastapi-logo.svg" },
      { id: 3, name: "PostgreSQL", path: "/assets/logos/postgresql-logo" },
      { id: 4, name: "AWS Lambda", path: "/assets/logos/AWS-lambda-logo.svg" },
      { id: 5, name: "Playwright", path: "/assets/logos/playwright-logo.svg" },
      { id: 6, name: "Clerk", path: "/assets/logos/clerk-logo.svg" },
      { id: 7, name: "Stripe", path: "/assets/logos/stripe.svg" }
    ],
  },
  {
    id: 2,
    title: "SupportGenius AI",
    description: "A stateless AI agent utilizing RAG and function calling to provide secure, context-aware business support.",
    subDescription: [
      "Built a stateless AI support agent capable of executing function calling (Tool Use) to interact with business databases securely.",
      "Implemented Retrieval-Augmented Generation (RAG) to ground the AI in specific, proprietary business data, effectively eliminating hallucinations.",
      "Integrated a 'human-in-the-loop' verification workflow to prevent unauthorized data mutations."
    ],
    href: "https://supportgenius-ai.onrender.com/",
    source: "https://github.com/BradleyXiX/SupportGeniusAI",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python-logo.svg" },
      { id: 2, name: "LLM APIs", path: "/assets/logos/chatgpt-logo.svg" },
      { id: 3, name: "Vector Databases", path: "/assets/logos/db-logo.svg" }
    ],
  },
  {
    id: 3,
    title: "Showtime",
    description: "A full-stack B2B booking engine featuring real-time ticket inventory and scheduling.",
    subDescription: [
      "Built a full-stack B2B booking engine featuring an Admin Dashboard for managing showtimes and tracking real-time sales data.",
      "Implemented complex data aggregation in MongoDB to prevent double-booking of seats during high-traffic transactions."
    ],
    href: "https://showtime-client-navy.vercel.app/",
    source: "https://github.com/BradleyXiX/Showtime",
    logo: "",
    image: "/assets/projects/Showtime.png",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/mongodb-icon.svg" },
      { id: 2, name: "Express", path: "/assets/logos/express-js-icon.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "NodeJS", path: "/assets/logos/node-js-icon.svg" }
    ],
  },
  {
    id: 4,
    title: "DataTurf",
    description: "A full-stack sports statistics aggregator and analytics dashboard with automated data ingestion.",
    subDescription: [
      "Built a full-stack analytics platform that scrapes, sanitizes, and visualizes sports metrics and standings across niche domains.",
      "Architected an automated data ingestion pipeline using containerized Python scrapers (Playwright/BeautifulSoup) triggered via AWS EventBridge and AWS Lambda into PostgreSQL.",
      "Implemented dynamic sortable data tables and interactive charts in Next.js (App Router) with skeleton loaders for optimized asynchronous data fetching."
    ],
    href: "http://54.90.88.75/",
    source: "https://github.com/BradleyXiX/DataTurf",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Next JS", path: "/assets/logos/nextjs-icon.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TypeScript", path: "/assets/logos/typescript-programming-language-icon.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 5, name: "NodeJS", path: "/assets/logos/node-js-icon.svg" },
      { id: 6, name: "Express", path: "/assets/logos/express-js-icon.svg" },
      { id: 7, name: "PostgreSQL", path: "/assets/logos/postgresql-logo" },
      { id: 8, name: "Python", path: "/assets/logos/python-logo.svg" },
      { id: 9, name: "Docker", path: "/assets/logos/docker-logo.svg" },
      { id: 10, name: "AWS", path: "/assets/logos/AWS-logo.svg" }
    ],
  },
  {
    id: 5,
    title: "ClearGig",
    description: "A full-stack project estimation tool designed to calculate project scopes, hourly rates, and cloud infrastructure costs for engineering contracts.",
    subDescription: [
      "Architected an end-to-end estimation platform featuring real-time cost calculations, client management, and quote lifecycle tracking.",
      "Designed an estimate lifecycle state machine (Draft, Sent, Accepted, Rejected) with contingency buffer and global margin controls.",
      "Containerized microservices via Docker Compose deployed to AWS EC2 with continuous integration and deployment automated using GitHub Actions."
    ],
    href: "http://3.84.58.16/",
    source: "https://github.com/BradleyXiX/ClearGig",
    logo: "",
    image: "",
    tags: [
      { id: 1, name: "Next JS", path: "/assets/logos/nextjs-icon.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "TypeScript", path: "/assets/logos/typescript-programming-language-icon.svg" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 5, name: "NodeJS", path: "/assets/logos/node-js-icon.svg" },
      { id: 6, name: "Express", path: "/assets/logos/express-js-icon.svg" },
      { id: 7, name: "Prisma ORM", path: "/assets/logos/prisma-logo.svg" },
      { id: 8, name: "PostgreSQL", path: "/assets/logos/postgresql-logo" },
      { id: 9, name: "Docker", path: "/assets/logos/docker-logo.svg" },
      { id: 10, name: "AWS", path: "/assets/logos/AWS-logo.svg" },
      { id: 11, name: "GitHub Actions", path: "/assets/logos/github.svg" }
    ],
  }
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/0703966756",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/bradley-john-chiwo",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://x.com/Bradley_John11",
    icon: "/assets/socials/x.svg",
  },
];

export const experiences = [
  {
    title: "Software Developer",
    job: "Security & Defense Projects",
    date: "2021-2023",
    contents: [
      "Enhanced application security and developed new features, adhering to standards set by the Passive Defense Organization and National Cyberspace Center.",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "Back-End Developer",
    job: "Car Manufacture",
    date: "2023-2024",
    contents: [
      "Engineered systems for large-scale data ingestion and analysis, ensuring efficient data processing and storage.",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "John",
    username: "@john",
    body: "example",
    img: "example.com",
  },
];