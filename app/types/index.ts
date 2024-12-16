export interface ResumeData {
  name: string;
  title?: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  projects: ProjectItem[];
  certifications: string[];
  references?: ReferencesItem[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  graduationDate: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  technologies: string[];
}

export interface ReferencesItem {
  name: string;
  title: string;
  company: string;
  contact: string;
}

export type TemplateType = string;
