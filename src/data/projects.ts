
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, photography and professional experience.",

    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Framer Motion",
    ],
     link: "https://github.com/your-repo",
    image: "",

    github: "https://github.com/yourusername/portfolio",

    live: "https://portfolio.com",

    featured: true,
  },

  {
    id: 2,
    title: "Steam Analytics",

    description:
      "Track achievements, playtime, gaming statistics and progress across your Steam library.",

    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Steam API",
    ],
    link: "https://github.com/your-repo",
    image: "",

    github: "https://github.com/yourusername/steam-analytics",

    live: "https://steamanalytics.com",

    featured: true,

    
  },
  {
  id: 3,
  title: "Anime Tracker",

  description:
    "Track anime watchlists, ratings, seasonal releases and personalized recommendations using the Jikan API.",

  stack: [
    "React",
    "TypeScript",
    "Tailwind",
    "Jikan API",
  ],

  link: "#",
  image: "",

  github: "#",
  live: "#",

  featured: true,
},
{
  id: 1,
  title: "LocalStore",

  description:
    "Inventory and sales management platform for local supermarkets with stock tracking, analytics and invoice generation.",

  stack: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Drizzle ORM",
  ],

  link: "#",
  image: "",

  github: "#",
  live: "#",

  featured: true,
},
{
  id: 5,
  title: "TaskQuest",

  description:
    "Gamified productivity app where users complete real-world tasks to earn rewards, maintain streaks and unlock achievements.",

  stack: [
    "React Native",
    "Firebase",
    "TypeScript",
  ],

  link: "#",
  image: "",

  github: "#",
  live: "#",

  featured: true,
},
{
  id: 6,
  title: "AI Resume Builder",

  description:
    "Generate professional resumes and cover letters using AI with customizable templates and export options.",

  stack: [
    "Next.js",
    "Gemini API",
    "Tailwind",
  ],

  link: "#",
  image: "",

  github: "#",
  live: "#",

  featured: true,
},
{
  id: 7,
  title: "DevFlow",

  description:
    "Kanban-style project management tool featuring task boards, deadlines, team collaboration and progress tracking.",

  stack: [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
  ],

  link: "#",
  image: "",

  github: "#",
  live: "#",

  featured: false,
},
{
  id: 8,
  title: "ChatBase AI",

  description:
    "AI-powered chatbot platform that lets users upload documents and chat with their knowledge base in natural language.",

  stack: [
    "Next.js",
    "LangGraph",
    "Gemini API",
    "PostgreSQL",
  ],

  link: "#",
  image: "",

  github: "#",
  live: "#",

  featured: true,
},
{
  id: 9,
  title: "Expense Tracker",

  description:
    "Personal finance application for tracking income, expenses, budgets and monthly spending insights.",

  stack: [
    "React",
    "Firebase",
    "Chart.js",
  ],

  link: "#",
  image: "",

  github: "#",
  live: "#",

  featured: false,
},
{
  id: 10,
  title: "AniGame",

  description:
    "Anime-inspired productivity RPG where users complete daily goals, collect characters and level up through real-world achievements.",

  stack: [
    "React Native",
    "Firebase",
    "TypeScript",
  ],

  link: "#",
  image: "",

  github: "#",
  live: "#",

  featured: true,
}
];