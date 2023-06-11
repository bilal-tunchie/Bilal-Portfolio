import {
  nextjs,
  reactjslogo,
  tailwindcss,
  htmlcssjs,
  javascript,
  next,
  html,
  css,
  bootstrap,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  indivue,
  leceria,
  myresumesite,
  portfolioProject,
  linkedin,
  twitter,
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
    title: "React.js Developer",
    company_name: "DRMTE Co.",
    icon: indivue,
    iconBg: "#383E56",
    date: "October 2022 - Present",
    points: [
      "Developing and maintaining frontend of web applications using React.js and MUI and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Leceria Pizza",
    description:
      "This site is a pizza restaurant app created using Next Js and Tailwind Css. And it has the ability to add and edit products on the go using next js, all advanced cart, and checkout functionalities, and most importantly, the complete integration with Stripe for payments.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: leceria,
    source_code_link: "https://github.com/bilal-tunchie/Lecria-pizza-app",
    live_link: "https://leceriapizza.netlify.app/",
  },
  {
    name: "My Resume - Sourabh Kumhar",
    description:
      "Web application, created to showcase my personal details, skills and projects. It is my Web Resume and you can also dowload my pdf of resume.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: myresumesite,
    source_code_link: "https://github.com/sourabhkumhar/myResume",
    live_link: "https://sourabhkumhar.vercel.app",
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
    source_code_link: "https://github.com/sourabhkumhar/iNotebook",
    live_link: "https://inotebook-coral.vercel.app/",
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
    name: "twitter",
    source_link: "https://twitter.com/bilal_tunchie",
    icon: twitter,
  },
]

export { services, technologies, experiences, testimonials, projects, contacts };
