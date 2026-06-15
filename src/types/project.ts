
export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  link?: string;
  image: string;
  github: string;
  live: string;
  featured?: boolean;
};