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
  springboot,
  django,
  supabase,
  sangam,
  trustgenleads,
  grras,
  lccorporate,
  zorvyn,
  autoevalai,
  floatchat,
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
    title: "Freelance Meta Ads Manager",
    company_name: "& Founder — TrustGenLeads",
    icon: trustgenleads,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      " Managed ₹5+ Crores in Meta Ads spend",
      " Built and scaled lead generation systems ",
      " Worked on high-volume campaigns and real-world business funnels",
    ],
    type: "work",
  },
  {
    title: "Backend Developer Intern",
    company_name: "Zorvyn Fintech",
    icon: zorvyn,
    iconBg: "#EDE7F6",
    date: "April 2026 - Present",
    points: [
      "Building scalable backend services and high-performance APIs to support fintech applications.",
      "Optimizing system reliability, data processing, and performance in a distributed environment.",
    ],
    type: "work",
  },
  {
    title: "Backend Developer Intern",
    company_name: "LC Corporate",
    icon: lccorporate,
    iconBg: "#E3F2FD",
    date: "September 2025 - March 2026",
    points: [
      "Skilled in building REST APIs, database design, authentication, and scalable cloud-based systems using Node.js and SQL.",
      "Designed and implemented secure authentication flows and role-based access control.",
      "Collaborated on cloud infrastructure and optimized SQL queries for high-throughput operations.",
    ],
    type: "work",
  },
  {
    title: "Java Developer Intern",
    company_name: "Grras Solutions Pvt Ltd",
    icon: grras,
    iconBg: "#E8F5E9",
    date: "June 2025 - August 2025",
    points: [
      "Focus on translating \"DSA\" into \"Efficiency\" and \"Java\" into \"Scalability.\"",
      "Developed core Java modules with emphasis on performance and clean code architecture.",
      "Implemented data structures and algorithms to solve real-world business problems.",
    ],
    type: "work",
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company_name: "Sangam University, Bhilwara",
    icon: sangam,
    iconBg: "#E6DEDD",
    date: "July 2022 - May 2027",
    points: [
      "Focused on software development, data structures & algorithms, system design, and modern backend technologies, with strong emphasis on practical applications.",
      "CGPA: 9.12 (till 4th semester)",
    ],
    type: "education",
  },
];

export const projects = [
  {
    name: "AutoEvalAI",
    description:
      "Intelligent exam evaluation platform built with Flask, Streamlit, PyTesseract, and Sentence-Transformers.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "flask", color: "green-text-gradient" },
      { name: "streamlit", color: "pink-text-gradient" },
    ],
    image: autoevalai,
    source_code_link: "https://github.com/nileshrathore22/AutoEvalAI",
  },
  {
    name: "FloatChat",
    description:
      "A real-time, multi-modal AI chat app built with Next.js, Firebase, and a FastAPI NLP backend.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "fastapi", color: "pink-text-gradient" },
    ],
    image: floatchat,
    source_code_link: "https://github.com/nileshrathore22/floatchat",
  },
  {
    name: "AUGRAT Core",
    description:
      "Advanced autonomous code generation engine featuring real-time WebSocket streaming, Flyway migrations, and a robust Spring Boot architecture.",
    tags: [
      { name: "springboot", color: "green-text-gradient" },
      { name: "websockets", color: "pink-text-gradient" },
      { name: "postgresql", color: "blue-text-gradient" },
    ],
    image: null,
    source_code_link: "https://github.com/nileshrathore22/augrat-core",
  },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Springboot", icon: springboot },
  { name: "React JS", icon: reactjs },
  { name: "Django", icon: django },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Supabase", icon: supabase },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];
