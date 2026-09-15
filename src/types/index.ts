export interface SiteConfig {
  name: string;
  tagline: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  cpi: string;
  gradYear: string;
  internships: string;
  shippedSystems: string;
}

export interface Experience {
  id: string;
  date: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  status: string;
  github: string;
  live: string;
  description: string;
  tags: string[];
}

export interface StackLink {
  name: string;
  url: string;
}

export type StackItemContent = string | StackLink;

export interface StackCategory {
  title: string;
  icon: string;
  items: StackItemContent[];
}
