import {
  nextjs,
  reactjslogo,
  tailwindcss,
  htmlcssjs,
  javascript,
  next,
  html,
  typescript,
  mysql,
  css,
  bootstrap,
  reactjs,
  redux,
  tailwind,
  prisma,
  nodejs,
  mongodb,
  indivue,
  leceria,
  myresumesite,
  portfolioProject,
  linkedin,
  twitter,
  outlook,
  githubIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "skills",
  },
  {
    id: "projects",
    title: "projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Next.js",
    icon: nextjs,
  },
  {
    title: "React.js",
    icon: reactjslogo,
  },
  {
    title: "Tailwind CSS",
    icon: tailwindcss,
  },
  {
    title: "HTML/CSS/JS",
    icon: htmlcssjs,
  },
];

const technologies = [
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Prisma",
    icon: prisma,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "React/Next Developer",
    company_name: "DRMTE Co.",
    icon: indivue,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: [
      "Designing components, pages, responsive web designs and creating reusable components like buttons, inputs, alerts etc.",
      "Collaborated with UX/UI designers and back-end developers to implement web performance optimization techniques to ensure fast page load times..",
      "Enabling seamless integration of external data into websites and building RESTful APIs using Next 14^.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Worked with version control systems such as Git to manage codebase."
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "Traveller",
    description:
      "Traveller is an online marketplace that connects people who want to rent out their property with people who are looking for accommodations, typically for short stays.",
    tags: [
      {
        name: "next.js",
        color: "black-gradient",
      },
      {
        name: "tailwind",
          color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "black-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dqm9t55ik/image/upload/v1700647236/bvrmjxlgejdo6xdeqpor.jpg",
    source_code_link: "https://github.com/bilal-tunchie/Traveller",
    live_link: "https://traveller-jet.vercel.app",
  },
  {
    name: "Bello",
    description:
      "Bello is a Saas platform that helps teams to manage their notes and much more.",
    tags: [
      {
        name: "next.js",
        color: "black-gradient",
      },
      {
        name: "tailwind",
          color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "black-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dqm9t55ik/image/upload/v1700647236/ssh6tgqndifcydgcfxyb.jpg",
    source_code_link: "https://github.com/bilal-tunchie/Bello",
    live_link: "https://bello-drab.vercel.app",
  },
  {
    name: "Leceria Pizza",
    description:
      "Building most modern pizza restaurant website. The application will include modern and responsive design , the ability to add and edit products on the go, all advanced cart, checkout functionalities and most importantly, complete integration with Stripe for payments and webhook on payment completion.",
      tags: [
        {
          name: "next.js",
          color: "black-gradient",
        },
        {
          name: "tailwind",
            color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Webhook Stripe",
          color: "green-text-gradient",
        },
        {
          name: "MySql",
          color: "blue-text-gradient",
        },
        {
          name: "Prisma",
          color: "black-gradient",
        },
      ],
    image: leceria,
    source_code_link: "https://github.com/bilal-tunchie/Pizza-restaurant-website",
    live_link: "https://leceria-pizza.vercel.app/",
  },
  {
    name: "Admin (Manage products for e-commerce)",
    description:
      "A fully functional E-Commerce with Admin Dashboard with seamless navigation and user experience. And it also has some working functionalities like login, signup, reset password, change account deta…",
    tags: [
      {
        name: "next.js",
        color: "black-gradient",
      },
      {
        name: "tailwind",
          color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Webhook Stripe",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "black-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dqm9t55ik/image/upload/v1700647236/zu8zgalerj4odoece7zl.jpg",
    source_code_link: "https://github.com/bilal-tunchie/Ecommerce-Admin",
    live_link: "https://ecommerce-admin-vert-xi.vercel.app",
  },
  {
    name: "Ecommerce (Managed by Admin )",
    description:
      "A fully functional E-Commerce which shows the billboards, categories, colors, sizes, products and orders all handled by Admin Dashboard with seamless navigation and user experience.",
    tags: [
        {
          name: "next.js",
          color: "black-gradient",
        },
      {
        name: "tailwind",
          color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "blue-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dqm9t55ik/image/upload/rhgua0fhxlgokblnnxkk.jpg",
    source_code_link: "https://github.com/bilal-tunchie/Ecommerce-store-by-admin",
    live_link: "https://ecommerce-store-by-admin.vercel.app",
  },
  {
    name: "Bilal Mohamed - Portfolio",
    description:
      "It's my personal portfolio site where I showcase my skills and abilities. On this site, you can explore my past work, learn about the skills and tools I possess, and gain a better understanding on how I can add value to your projects and organization. Thank you for taking the time to explore my portfolio!. ",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioProject,
    source_code_link: "https://github.com/bilal-tunchie/Bilal-Portfolio",
    live_link: "https://bilal-tunchie-portfolio.netlify.app",
  },
];

const contacts = [
  {
    name: "linkedin",
    source_link: "https://www.linkedin.com/in/bilal-mohamed-abdulwahab-909b95201/",
    icon: linkedin,
  },
  {
    name: "github",
    source_link: "https://github.com/bilal-tunchie",
    icon: githubIcon,
  },
  {
    name: "outlook",
    source_link: "mailto:bilalmohammed_tunchie@outlook.com",
    icon: outlook,
  },
]

export { services, technologies, experiences, testimonials, projects, contacts };
