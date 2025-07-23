export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'other';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}