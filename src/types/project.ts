export interface Project {
  id: number;
  title: string;
  description: string;

  year: string;
  role: string;
  status: string;

  stack: string[];

  image?: string;

  github?: string;
  live?: string;
  link?: string;

  featured?: boolean;
}