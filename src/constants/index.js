import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  backend,
  creator,
  mobile,
  web,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Backend Developer", icon: backend },
  { title: "Web Developer", icon: web },
  { title: "Competitive Programmer", icon: creator },
  { title: "Problem Setter/Tester", icon: mobile },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Daffodil Health",
    icon: "daffodil",
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [
      "Spearheaded migration of legacy front-end codebase to modern tech stack.",
      "Architected scalable and optimized React components, enhancing user interface by 40%.",
    ],
  },
  {
    title: "Problem Setter/Tester",
    company_name: "Relevel",
    icon: "relevel",
    iconBg: "#E6DEDD",
    date: "July 2022 - Aug 2023",
    points: [
      "Synthesized a collection of 500+ diverse Data Structures and Algorithms problems.",
    ],
  },
];

export const projects = [
  {
    name: "Summarizer",
    description: "Summarize anything with help of AI.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "summarizer",
    source_code_link: "https://github.com/",
  },
  {
    name: "Movie-App",
    description: "Movie search application.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "movie",
    source_code_link: "https://github.com/",
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];
