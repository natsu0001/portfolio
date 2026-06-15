
import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
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
];